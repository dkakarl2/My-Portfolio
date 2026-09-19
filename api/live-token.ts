import { GoogleGenAI } from '@google/genai';
import { bingoKnowledge } from '../src/data/bingoKnowledge';

export default async function handler(req, res) {
  // 1. Safely read the master key on the server
  const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY; 
  if (!apiKey) return res.status(500).json({ error: 'API Key missing on server' });

  try {
    const ai = new GoogleGenAI({ apiKey, httpOptions: { apiVersion: 'v1alpha' } });
    
    // 2. Request a short-lived authentication token from Google
    // We can also bake in the system prompt here if we want!
    const tokenResponse = await ai.authTokens.create({
      // We will leave the model configuration and tools for the frontend connection
      // or we can bake them in. Let's just generate a raw token for now.
    });

    // 3. Send the safe token to the frontend
    return res.status(200).json({ 
      success: true, 
      token: tokenResponse.name
    });
  } catch (error) {
    console.error("Token generation error:", error);
    return res.status(500).json({ error: 'Failed to generate token', details: error.message });
  }
}
