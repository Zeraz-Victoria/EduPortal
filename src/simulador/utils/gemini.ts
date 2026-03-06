import OpenAI from "openai";
import { Question } from "../types";

// HELPER SEGURO PARA OBTENER LA API KEY (DEEPSEEK)
const getApiKey = (): string | undefined => {
  let key: string | undefined = undefined;
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      key = import.meta.env.VITE_DEEPSEEK_API_KEY;
    }
  } catch (e) { }

  if (!key) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        key = process.env.VITE_DEEPSEEK_API_KEY || process.env.DEEPSEEK_API_KEY;
      }
    } catch (e) { }
  }
  return key;
};

export const generateSingleQuestion = async (level: string, avoidTopics: string[] = []): Promise<Question> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("API Key de DeepSeek no encontrada. Usando modo offline.");
    throw new Error("API_KEY_MISSING");
  }

  const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });

  // PROMPT OPTIMIZADO PARA VELOCIDAD Y DIFICULTAD
  const prompt = `
    Genera UN caso práctico de examen USICAMM (Nivel Experto) para ${level}.
    
    REQUISITOS ESTRICTOS:
    1. ALTA DIFICULTAD: Caso complejo con dilema normativo/pedagógico.
    2. DISTRACTORES: 3 opciones incorrectas que parezcan reales (vocabulario técnico).
    3. NORMATIVA 2024-2025: Nueva Escuela Mexicana, Art 3, LGE.
    4. EVITA: Preguntas de memoria o definiciones obvias.
    5. JSON PURO: Devuelve exactamente y únicamente un objeto JSON con este esquema:
       {
         "nivel": "string",
         "dominio": "string",
         "tema": "string",
         "pregunta": "string",
         "opciones": [
           { "id": "string", "texto": "string", "es_correcta": boolean }
         ],
         "retroalimentacion": "string",
         "fundamento_legal": "string"
       }
       Tienen que ser exactamente 4 opciones en el arreglo, una de ellas true.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: "Eres un experto creador de reactivos CENEVAL formato USICAMM. Respondes exclusivamente con arreglos JSON válidos." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const text = response.choices[0].message?.content || "";
    if (!text) throw new Error("La API no devolvió texto.");

    const questionData = JSON.parse(text) as Question;
    return questionData;

  } catch (error) {
    console.error("Error generando pregunta con DeepSeek:", error);
    throw error;
  }
};