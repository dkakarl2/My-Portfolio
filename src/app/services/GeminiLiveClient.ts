/**
 * GeminiLiveClient.ts
 * 
 * Real-time voice session with Gemini 2.0 Flash Live API.
 * Uses AudioWorklet for low-latency PCM capture from mic.
 * Falls back to ScriptProcessorNode if AudioWorklet fails.
 */

import { GoogleGenAI, Modality } from '@google/genai';
import { bingoKnowledge } from '@/data/bingoKnowledge';

const MODEL = 'gemini-2.0-flash-exp';   // Live API requires the -exp model on v1alpha
const OUT_SAMPLE_RATE = 24000;           // Gemini outputs 24kHz PCM16

export type BingoState = 'idle' | 'connecting' | 'listening' | 'thinking' | 'speaking' | 'error';

interface GeminiLiveClientOptions {
  apiKey: string;
  voice?: string;
  onStateChange?: (state: BingoState) => void;
  onTranscript?: (text: string, role: 'user' | 'assistant') => void;
  onError?: (error: string) => void;
}

export class GeminiLiveClient {
  private ai: GoogleGenAI;
  private options: GeminiLiveClientOptions;
  private session: any = null;

  // Audio input
  private audioContext: AudioContext | null = null;
  private micStream: MediaStream | null = null;
  private workletNode: AudioWorkletNode | null = null;
  private scriptNode: ScriptProcessorNode | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;

  // Audio output
  private outputContext: AudioContext | null = null;
  private audioQueue: ArrayBuffer[] = [];
  private isPlaying = false;
  private nextPlayTime = 0;

  constructor(options: GeminiLiveClientOptions) {
    this.options = options;
    this.ai = new GoogleGenAI({
      apiKey: options.apiKey,
      httpOptions: { apiVersion: 'v1alpha' },  // Live API only available on v1alpha
    });
  }

  private setState(state: BingoState) {
    this.options.onStateChange?.(state);
  }

  // ── Session ──────────────────────────────────────────────────────────────

  async connect() {
    try {
      this.setState('connecting');

      // First request mic permission BEFORE opening the session
      // so any permission error is surfaced immediately with a clear message
      await this.requestMicPermission();

      this.session = await this.ai.live.connect({
        model: MODEL,
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: {
                voiceName: this.options.voice ?? 'Puck',
              },
            },
          },
          systemInstruction: {
            parts: [{ text: bingoKnowledge }],
          },
        },
        callbacks: {
          onopen: () => {
            console.log('[Bingo] Session opened');
            this.setState('listening');
            this.startMic();
          },
          onmessage: (msg: any) => {
            this.handleMessage(msg);
          },
          onerror: (e: ErrorEvent) => {
            console.error('[Bingo] WebSocket error', e);
            this.setState('error');
            this.options.onError?.(`Connection error: ${e?.message ?? 'Unknown error'}`);
          },
          onclose: (e: CloseEvent) => {
            console.log('[Bingo] Session closed', e.code, e.reason);
            this.stopMic();
            if (e.code !== 1000) {
              this.options.onError?.(`Session closed unexpectedly (${e.code}): ${e.reason}`);
              this.setState('error');
            } else {
              this.setState('idle');
            }
          },
        },
      });
    } catch (err: any) {
      console.error('[Bingo] connect() failed:', err);
      this.setState('error');

      const msg = err?.message ?? String(err);
      if (msg.includes('permission') || msg.includes('denied') || msg.includes('NotAllowed')) {
        this.options.onError?.('Microphone access denied. Please allow mic permissions and reload.');
      } else if (msg.includes('API_KEY') || msg.includes('401') || msg.includes('403')) {
        this.options.onError?.('Invalid API key. Check your VITE_GEMINI_API_KEY in .env.local.');
      } else {
        this.options.onError?.(`Error: ${msg}`);
      }
    }
  }

  async disconnect() {
    this.stopMic();
    try { this.session?.close(); } catch (_) {}
    this.session = null;
    try { await this.outputContext?.close(); } catch (_) {}
    this.outputContext = null;
    this.setState('idle');
  }

  // ── Mic Permission Check ──────────────────────────────────────────────────

  private async requestMicPermission() {
    // Check permission state first
    if (navigator.permissions) {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        console.log('[Bingo] Mic permission state:', result.state);
        if (result.state === 'denied') {
          throw new Error('NotAllowedError: Microphone permission is denied in browser settings.');
        }
      } catch (permErr: any) {
        // permissions.query might not support 'microphone' on all browsers — ignore that error
        if (permErr?.message?.includes('NotAllowed') || permErr?.message?.includes('denied')) {
          throw permErr;
        }
      }
    }

    // Do a test getUserMedia to surface permission prompt early
    // Use minimal constraints — no sampleRate (let browser choose)
    const testStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // Stop the test stream immediately — we'll open a real one in startMic
    testStream.getTracks().forEach(t => t.stop());
    console.log('[Bingo] Mic permission granted');
  }

  // ── Mic Input ─────────────────────────────────────────────────────────────

  private async startMic() {
    try {
      // Open the real mic stream — no sampleRate constraint (let browser decide)
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      // Create AudioContext at native sample rate, we'll resample in the worklet
      this.audioContext = new AudioContext();
      console.log('[Bingo] AudioContext sample rate:', this.audioContext.sampleRate);

      this.sourceNode = this.audioContext.createMediaStreamSource(this.micStream);

      // Try AudioWorklet first, fall back to ScriptProcessor
      const useWorklet = await this.tryAudioWorklet();
      if (!useWorklet) {
        this.useScriptProcessor();
      }
    } catch (err: any) {
      console.error('[Bingo] startMic() error:', err);
      this.setState('error');
      const msg = err?.message ?? String(err);
      if (msg.includes('Permission') || msg.includes('NotAllowed') || msg.includes('denied')) {
        this.options.onError?.('Microphone access denied. Please allow mic permissions and reload.');
      } else {
        this.options.onError?.(`Microphone error: ${msg}`);
      }
    }
  }

  private async tryAudioWorklet(): Promise<boolean> {
    try {
      await this.audioContext!.audioWorklet.addModule('/mic-capture-processor.js');
      this.workletNode = new AudioWorkletNode(this.audioContext!, 'mic-capture-processor');

      this.workletNode.port.onmessage = (e: MessageEvent) => {
        this.sendAudioChunk(e.data);
      };

      this.sourceNode!.connect(this.workletNode);
      this.workletNode.connect(this.audioContext!.destination);
      console.log('[Bingo] Using AudioWorklet for mic capture');
      return true;
    } catch (err) {
      console.warn('[Bingo] AudioWorklet failed, falling back to ScriptProcessor:', err);
      return false;
    }
  }

  private useScriptProcessor() {
    if (!this.audioContext) {
      console.warn('[Bingo] useScriptProcessor: audioContext is null, skipping');
      return;
    }
    const bufferSize = 4096;
    // @ts-ignore — ScriptProcessorNode is deprecated but widely supported as fallback
    this.scriptNode = this.audioContext.createScriptProcessor(bufferSize, 1, 1);

    this.scriptNode.onaudioprocess = (e: AudioProcessingEvent) => {
      const float32 = e.inputBuffer.getChannelData(0);
      const pcm16 = this.float32ToPcm16(float32);
      this.sendAudioChunk(pcm16.buffer);
    };

    this.sourceNode!.connect(this.scriptNode);
    this.scriptNode.connect(this.audioContext!.destination);
    console.log('[Bingo] Using ScriptProcessor for mic capture (fallback)');
  }

  private sendAudioChunk(buffer: ArrayBuffer) {
    if (!this.session) return;
    try {
      const base64 = this.arrayBufferToBase64(buffer);
      this.session.sendRealtimeInput({
        audio: {
          data: base64,
          mimeType: 'audio/pcm;rate=16000',
        },
      });
    } catch (err) {
      console.warn('[Bingo] sendRealtimeInput error:', err);
    }
  }

  private stopMic() {
    try { this.workletNode?.disconnect(); } catch (_) {}
    try { this.scriptNode?.disconnect(); } catch (_) {}
    try { this.sourceNode?.disconnect(); } catch (_) {}
    this.micStream?.getTracks().forEach(t => t.stop());
    try { this.audioContext?.close(); } catch (_) {}
    this.audioContext = null;
    this.micStream = null;
    this.workletNode = null;
    this.scriptNode = null;
    this.sourceNode = null;
  }

  // ── Message Handling ──────────────────────────────────────────────────────

  private handleMessage(msg: any) {
    console.log('[Bingo] msg:', JSON.stringify(msg).slice(0, 200));

    // Input transcription (what the user said)
    if (msg.serverContent?.inputTranscription?.text) {
      this.options.onTranscript?.(msg.serverContent.inputTranscription.text, 'user');
      this.setState('thinking');
    }

    // Model response parts
    const parts = msg.serverContent?.modelTurn?.parts ?? [];
    for (const part of parts) {
      if (part.inlineData?.mimeType?.startsWith('audio/pcm') && part.inlineData.data) {
        this.setState('speaking');
        const raw = this.base64ToArrayBuffer(part.inlineData.data);
        this.enqueueAudio(raw);
      }
      if (part.text) {
        this.options.onTranscript?.(part.text, 'assistant');
      }
    }

    // Turn complete — wait for audio to drain
    if (msg.serverContent?.turnComplete) {
      this.waitForPlaybackEnd(() => this.setState('listening'));
    }
  }

  // ── Audio Playback ────────────────────────────────────────────────────────

  private enqueueAudio(buffer: ArrayBuffer) {
    this.audioQueue.push(buffer);
    if (!this.isPlaying) this.playNext();
  }

  private async playNext() {
    if (this.audioQueue.length === 0) {
      this.isPlaying = false;
      return;
    }
    this.isPlaying = true;

    if (!this.outputContext) {
      this.outputContext = new AudioContext({ sampleRate: OUT_SAMPLE_RATE });
      this.nextPlayTime = this.outputContext.currentTime;
    }

    const raw = this.audioQueue.shift()!;
    const pcm16 = new Int16Array(raw);
    const float32 = new Float32Array(pcm16.length);
    for (let i = 0; i < pcm16.length; i++) {
      float32[i] = pcm16[i] / (pcm16[i] < 0 ? 0x8000 : 0x7fff);
    }

    const audioBuffer = this.outputContext.createBuffer(1, float32.length, OUT_SAMPLE_RATE);
    audioBuffer.copyToChannel(float32, 0);

    const source = this.outputContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.outputContext.destination);

    const startAt = Math.max(this.nextPlayTime, this.outputContext.currentTime);
    source.start(startAt);
    this.nextPlayTime = startAt + audioBuffer.duration;
    source.onended = () => this.playNext();
  }

  private waitForPlaybackEnd(cb: () => void) {
    const check = () => {
      if (this.audioQueue.length === 0 && !this.isPlaying) cb();
      else setTimeout(check, 100);
    };
    check();
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private float32ToPcm16(float32: Float32Array): Int16Array {
    const pcm16 = new Int16Array(float32.length);
    for (let i = 0; i < float32.length; i++) {
      const s = Math.max(-1, Math.min(1, float32[i]));
      pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }
    return pcm16;
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }
}
