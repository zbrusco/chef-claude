import { GoogleGenAI } from "@google/genai";
import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response to just include the recipe in *markdown* to make it easier to render to a web page.
`;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getRecipeFromChefGemini(ingredientsArr) {
  const modelName = "gemini-2.5-flash";
  const ingredientsString = ingredientsArr.join(", ");

  const response = await ai.models.generateContent({
    model: modelName,
    systemInstruction: {
      role: "system",
      parts: [{ text: SYSTEM_PROMPT }],
    },
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `I have ${ingredientsString}. Please give me one recipe you'd recommend I make!`,
          },
        ],
      },
    ],
  });
  return response.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

// Hugging face API
const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
