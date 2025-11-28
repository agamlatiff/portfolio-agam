import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY!;

if (!API_KEY) {
  console.warn('⚠️ Gemini API Key not found. Please add VITE_GEMINI_API_KEY to your .env.local file');
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

/**
 * Generate AI response using Gemini
 * @param prompt - The prompt to send to Gemini
 * @param modelName - Model to use (default: gemini-pro)
 * @returns AI generated response
 */
export async function generateAIResponse(
  prompt: string,
  modelName: string = 'gemini-pro'
): Promise<string> {
  if (!genAI) {
    throw new Error('Gemini AI not initialized. Please check your API key.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini AI Error:', error);
    throw error;
  }
}

/**
 * Generate AI response with streaming (for chat-like experience)
 * @param prompt - The prompt to send to Gemini
 * @param onChunk - Callback for each chunk of text
 * @param modelName - Model to use (default: gemini-pro)
 */
export async function generateAIStreamResponse(
  prompt: string,
  onChunk: (text: string) => void,
  modelName: string = 'gemini-pro'
): Promise<void> {
  if (!genAI) {
    throw new Error('Gemini AI not initialized. Please check your API key.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContentStream(prompt);

    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      onChunk(chunkText);
    }
  } catch (error) {
    console.error('Gemini AI Stream Error:', error);
    throw error;
  }
}

/**
 * Chat with Gemini (maintains conversation history)
 */
export class GeminiChat {
  private chat: any;
  private model: any;

  constructor(modelName: string = 'gemini-pro') {
    if (!genAI) {
      throw new Error('Gemini AI not initialized. Please check your API key.');
    }
    this.model = genAI.getGenerativeModel({ model: modelName });
    this.chat = this.model.startChat({
      history: [],
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini Chat Error:', error);
      throw error;
    }
  }

  async sendMessageStream(
    message: string,
    onChunk: (text: string) => void
  ): Promise<void> {
    try {
      const result = await this.chat.sendMessageStream(message);
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        onChunk(chunkText);
      }
    } catch (error) {
      console.error('Gemini Chat Stream Error:', error);
      throw error;
    }
  }
}

export default {
  generateAIResponse,
  generateAIStreamResponse,
  GeminiChat,
};
