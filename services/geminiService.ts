
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStrategicAdvice = async (businessProblem: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class business consultant at NovaCore Digital. 
      A client has presented the following challenge: "${businessProblem}". 
      Provide a concise, professional, and actionable strategic recommendation (max 200 words). 
      Format with bullet points where appropriate.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a recommendation at this moment. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to NovaCore Strategic Advisor.");
  }
};
