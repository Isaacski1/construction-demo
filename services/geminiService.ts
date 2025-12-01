import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are 'Max', the virtual assistant for BuildMax Construction. 
We are a premier construction company specializing in Residential Construction, Commercial Renovation, Architecture Design, and Interior Planning.
Our tone is professional, reliable, and friendly.
Keep answers concise (under 50 words where possible).
If asked about pricing, suggest scheduling a consultation as every project is unique.
Key Values: Quality, Safety, On-time Delivery.
`;

export const sendMessageToGemini = async (history: { role: string; text: string }[], message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, I am currently offline (API Key missing). Please contact us by phone.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I didn't catch that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
