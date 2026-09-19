// Audio Worklet Processor — runs in a dedicated audio thread.
// Captures raw PCM16 samples from the mic and posts them to the main thread.

class MicCaptureProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bufferSize = 4096;
    this.buffer = new Float32Array(this.bufferSize);
    this.framesRecorded = 0;
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || !input[0]) return true;

    const float32 = input[0];
    
    // Copy into buffer
    for (let i = 0; i < float32.length; i++) {
      this.buffer[this.framesRecorded++] = float32[i];
      
      if (this.framesRecorded >= this.bufferSize) {
        // Convert Float32 [-1, 1] → Int16 PCM
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
