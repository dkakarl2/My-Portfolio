/**
 * BingoClient.ts
 * 
 * TRUE JARVIS-STYLE VOICE ASSISTANT
 * Uses Gemini Live API (WebSockets) for real-time duplex audio.
 * Gives you the native "Puck" voice and instant interruption support.
 */

import { GoogleGenAI, Modality } from '@google/genai';
import { bingoKnowledge } from '@/data/bingoKnowledge';

const MODEL = 'gemini-2.5-flash-native-audio-latest'; // Correct model for the Live API in this environment
const OUT_SAMPLE_RATE = 24000;

export type BingoState = 'idle' | 'connecting' | 'listening' | 'thinking' | 'speaking' | 'error';

interface BingoClientOptions {
  apiKey: string;
  voice?: string;
  onStateChange?: (state: BingoState) => void;
  onTranscript?: (text: string, role: 'user' | 'assistant') => void;
  onToolCall?: (name: string, args: any) => void;
  onError?: (error: string) => void;
}

export class BingoClient {
  private ai: GoogleGenAI;
  private options: BingoClientOptions;
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

  constructor(options: BingoClientOptions) {
    this.options = options;
    this.ai = new GoogleGenAI({
      apiKey: options.apiKey,
      httpOptions: { apiVersion: 'v1alpha' }, // Required for Live API
    });
  }

  static hasIntroduced = false;

  private currentState: BingoState = 'idle';

  private setState(state: BingoState) {
    if (this.currentState !== state) {
      this.currentState = state;
      this.options.onStateChange?.(state);
    }
  }

  // ── Session ──────────────────────────────────────────────────────────────

  async start() {
    try {
      this.setState('connecting');
      
      // Initialize AudioContexts synchronously to bypass iOS Safari restrictions
      if (!this.outputContext) {
        this.outputContext = new AudioContext({ sampleRate: OUT_SAMPLE_RATE });
        await this.outputContext.resume();
        this.nextPlayTime = this.outputContext.currentTime + 0.05;
      }
      if (!this.audioContext) {
        this.audioContext = new AudioContext({ sampleRate: 16000 });
        await this.audioContext.resume();
      }

      await this.requestMicPermission();

      this.session = await this.ai.live.connect({
        model: MODEL,
        config: {
          responseModalities: [Modality.AUDIO],
          realtimeInputConfig: {
            automaticActivityDetection: {
              endOfSpeechSensitivity: 'END_SENSITIVITY_HIGH', startOfSpeechSensitivity: 'START_SENSITIVITY_HIGH', silenceDurationMs: 250, // Insanely fast VAD cutoff
            }
          },
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
          tools: [
            {
              functionDeclarations: [
                {
                  name: 'navigate',
                  description: 'Navigate to a different portfolio page. Call this immediately when the user says "take me to", "navigate", or "open <pagename>".',
                  parameters: { type: 'OBJECT', properties: { path: { type: 'STRING' } }, required: ['path'] }
                },
                {
                  name: 'scroll_to',
                  description: 'Scroll to a specific section on the current page.',
                  parameters: { type: 'OBJECT', properties: { sectionId: { type: 'STRING' } }, required: ['sectionId'] }
                },
                {
                  name: 'highlight',
                  description: 'Temporarily highlight a specific project card or section.',
                  parameters: { type: 'OBJECT', properties: { elementId: { type: 'STRING' } }, required: ['elementId'] }
                },
                {
                  name: 'scroll',
                  description: 'Scroll the page up or down.',
                  parameters: {
                    type: 'OBJECT', 
                    properties: { direction: { type: 'STRING', enum: ['up', 'down'] } }, 
                    required: ['direction'] 
                  }
                },
                {
                  name: 'go_back',
                  description: 'Go back to the previous page.',
                  parameters: { type: 'OBJECT', properties: {} }
                }
              ]
            }
          ],
        },
        callbacks: {
          onopen: () => {
            console.log('[Bingo] Session opened');
            this.setState('listening');
            this.startMic();
          },
          onmessage: (msg: any) => this.handleMessage(msg),
          onerror: (e: ErrorEvent) => {
            console.error('[Bingo] WebSocket error', e);
            this.setState('error');
            this.options.onError?.(`Connection error: ${e?.message ?? 'Unknown error'}`);
          },
          onclose: (e: CloseEvent) => {
            console.log('[Bingo] Session closed', e.code, e.reason);
            this.stopMic();
            if (e.code !== 1000 && e.code !== 1005) {
              this.options.onError?.(`Session closed (${e.code}): ${e.reason}`);
              this.setState('error');
            } else {
              this.setState('idle');
            }
          },
        },
      });
      
      // Trigger Bingo's initial greeting ONLY if it hasn't introduced itself yet
      if (!BingoClient.hasIntroduced) {
        this.session.sendClientContent({
          turns: [{ role: 'user', parts: [{ text: 'Introduce yourself briefly (1 sentence).' }] }],
          turnComplete: true,
        });
        BingoClient.hasIntroduced = true;
      }
    } catch (err: any) {
      console.error('[Bingo] connect() failed:', err);
      this.setState('error');
      const msg = err?.message ?? String(err);
      if (msg.includes('permission') || msg.includes('denied') || msg.includes('NotAllowed')) {
        this.options.onError?.('Microphone access denied. Please allow mic permissions and reload.');
      } else {
        this.options.onError?.(`Connection error: ${msg}`);
      }
    }
  }

  async stop() {
    this.audioQueue = [];
    if (this.speakingTimeout) clearTimeout(this.speakingTimeout);

    if (this.micStream) {
      this.stopMic();
    }
    
    // Stop all audio playback instantly
    this.interrupt();

    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    if (this.outputContext) {
      this.outputContext.close();
      this.outputContext = null;
    }
    try { this.session?.close(); } catch (_) {}
    this.session = null;
    
    this.setState('idle');
  }

  // ── Mic Input ─────────────────────────────────────────────────────────────

  private isMuted = false;

  public setMute(muted: boolean) {
    this.isMuted = muted;
    console.log(`[Bingo] Mic muted: ${muted}`);
  }

  private async requestMicPermission() {
    if (navigator.permissions) {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        if (result.state === 'denied') {
          throw new Error('NotAllowedError: Microphone permission is denied.');
        }
      } catch (e: any) {
        if (e?.message?.includes('NotAllowed')) throw e;
      }
    }
    const testStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    testStream.getTracks().forEach(t => t.stop());
  }

  private async startMic() {
    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      if (!this.audioContext) {
        throw new Error("AudioContext missing");
      }
      this.sourceNode = this.audioContext.createMediaStreamSource(this.micStream);

      // We strictly use ScriptProcessorNode (like Chakku) to avoid CORS/build issues
      // and to ensure perfect 4096 buffer alignment.
      await this.useAudioWorklet();
      
    } catch (err: any) {
      console.error('[Bingo] startMic error:', err);
      this.setState('error');
      this.options.onError?.('Microphone access denied or failed to start.');
    }
  }

  private async useAudioWorklet() {
    if (!this.audioContext) return;
    
    // Inline AudioWorkletProcessor to avoid Vite/CORS/Vercel static serving issues
    const workletCode = `
      class MicCaptureProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.bufferSize = 2048;
          this.buffer = new Float32Array(this.bufferSize);
          this.framesRecorded = 0;
        }
        process(inputs) {
          const input = inputs[0];
          if (!input || !input[0]) return true;
          const float32 = input[0];
          for (let i = 0; i < float32.length; i++) {
            this.buffer[this.framesRecorded++] = float32[i];
            if (this.framesRecorded >= this.bufferSize) {
              const pcm16 = new Int16Array(this.bufferSize);
              for (let j = 0; j < this.bufferSize; j++) {
                const s = Math.max(-1, Math.min(1, this.buffer[j]));
                pcm16[j] = s < 0 ? s * 0x8000 : s * 0x7fff;
              }
              this.port.postMessage(pcm16.buffer, [pcm16.buffer]);
              this.framesRecorded = 0;
            }
          }
          return true;
        }
      }
      registerProcessor('mic-capture-processor', MicCaptureProcessor);
    `;
    const blob = new Blob([workletCode], { type: 'application/javascript' });
    const workletUrl = URL.createObjectURL(blob);

    try {
      await this.audioContext.audioWorklet.addModule(workletUrl);
      this.workletNode = new AudioWorkletNode(this.audioContext, 'mic-capture-processor');
      this.workletNode.port.onmessage = (e) => {
        this.sendAudioChunk(e.data);
      };
      
      const dummyGain = this.audioContext.createGain();
      dummyGain.gain.value = 0;
      this.sourceNode!.connect(this.workletNode);
      this.workletNode.connect(dummyGain);
      dummyGain.connect(this.audioContext.destination);
    } catch (err) {
      console.error('[Bingo] AudioWorklet failed, fallback disabled:', err);
    } finally {
      URL.revokeObjectURL(workletUrl);
    }
  }

  private sendAudioChunk(buffer: ArrayBuffer) {
    if (!this.session || this.isMuted) return;
    try {
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
      const base64 = btoa(binary);

      this.session.sendRealtimeInput({
        audio: {
          data: base64,
          mimeType: `audio/pcm;rate=16000`, // Hardcoded to match AudioContext
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
    if (msg.setupComplete) {
      console.log('[Bingo] Setup complete');
      if (!BingoClient.hasIntroduced) {
        this.setState('thinking');
      } else {
        this.setState('listening');
      }
    }

    if (msg.serverContent?.inputTranscription?.text) {
      this.options.onTranscript?.(msg.serverContent.inputTranscription.text, 'user');
      // When the user finishes speaking, the server transcribes and starts thinking
      this.setState('thinking');
    }

    if (msg.serverContent?.turnComplete) {
      // If the model finished its turn but we aren't playing audio, go back to listening.
      // If we are playing audio, the speakingTimeout will handle returning to listening.
      if (!this.speakingTimeout || this.currentSources.length === 0) {
        this.setState('listening');
      }
    }

    // 1. Handle Audio & Text (msg.serverContent)
    const parts = msg.serverContent?.modelTurn?.parts ?? [];
    for (const part of parts) {
      if (part.inlineData?.mimeType?.startsWith('audio/pcm') && part.inlineData.data) {
        this.setState('speaking');
        const binary = atob(part.inlineData.data);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        this.enqueueAudio(bytes.buffer);
      }
      if (part.text) {
        this.options.onTranscript?.(part.text, 'assistant');
      }
    }

    // 2. Handle Tools (msg.toolCall - TOP LEVEL!)
    if (msg.toolCall && msg.toolCall.functionCalls) {
      for (const call of msg.toolCall.functionCalls) {
        console.log(`[Bingo] Tool called: ${call.name}`, call.args);
        this.options.onToolCall?.(call.name, call.args);
        // CRITICAL: We intentionally DO NOT send a sendToolResponse here.
        // Doing so acts as an interruption signal and kills Bingo's audio stream.
      }
    }

    // 3. Handle Lifecycle Events
    if (msg.serverContent?.interrupted) {
      this.interrupt();
      this.setState('listening');
    }
  }

  // ── Audio Playback ────────────────────────────────────────────────────────

  private speakingTimeout: any = null;
  private currentSources: AudioBufferSourceNode[] = [];

  private interrupt() {
    if (this.speakingTimeout) clearTimeout(this.speakingTimeout);
    
    // 1. Violently kill all currently scheduled and playing audio chunks
    this.currentSources.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    this.currentSources = [];
    
    // 2. CRITICAL: Reset the timeline clock to NOW!
    if (this.outputContext) {
      this.nextPlayTime = this.outputContext.currentTime;
    }
  }

  private enqueueAudio(buffer: ArrayBuffer) {
    if (!this.outputContext) return;

    const pcm16 = new Int16Array(buffer);
    const float32 = new Float32Array(pcm16.length);
    for (let i = 0; i < pcm16.length; i++) {
      float32[i] = pcm16[i] / (pcm16[i] < 0 ? 0x8000 : 0x7fff);
    }

    const audioBuffer = this.outputContext.createBuffer(1, float32.length, OUT_SAMPLE_RATE);
    audioBuffer.copyToChannel(float32, 0);

    const source = this.outputContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.outputContext.destination);

    if (this.nextPlayTime < this.outputContext.currentTime) {
      this.nextPlayTime = this.outputContext.currentTime + 0.05;
    }

    source.start(this.nextPlayTime);
    this.nextPlayTime += audioBuffer.duration;

    // Track the source so we can kill it if interrupted
    this.currentSources.push(source);
    source.onended = () => {
      this.currentSources = this.currentSources.filter(s => s !== source);
    };

    if (this.speakingTimeout) clearTimeout(this.speakingTimeout);
    const timeUntilEndMs = (this.nextPlayTime - this.outputContext.currentTime) * 1000;
    this.speakingTimeout = setTimeout(() => {
      this.setState('listening');
    }, timeUntilEndMs + 100);
  }
}
