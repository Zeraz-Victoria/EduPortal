import { Question } from "../types";

// HELPER SEGURO PARA OBTENER LA API KEY (GEMINI)
const getApiKey = (): string | undefined => {
  let key: string | undefined = undefined;
  try {
    // @ts-ignore
    if (typeof import.meta !== "undefined" && import.meta.env) {
      // @ts-ignore
      key = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_DEEPSEEK_API_KEY;
    }
  } catch (e) { }

  if (!key) {
    try {
      if (typeof process !== "undefined" && process.env) {
        key = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || process.env.VITE_DEEPSEEK_API_KEY || process.env.DEEPSEEK_API_KEY;
      }
    } catch (e) { }
  }
  return key;
};

export const generateSingleQuestion = async (level: string, avoidTopics: string[] = []): Promise<Question> => {
  const apiKey = getApiKey();

  if (!apiKey) {
    console.warn("API Key no encontrada. Usando modo offline.");
    throw new Error("API_KEY_MISSING");
  }

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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: "Eres un experto creador de reactivos CENEVAL formato USICAMM. Respondes exclusivamente con arreglos JSON válidos." }] },
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.8
        }
      })
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error de Gemini (${res.status}): ${errorText}`);
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    if (!text) throw new Error("La API no devolvió texto.");

    const questionData = JSON.parse(text) as Question;
    return questionData;

  } catch (error) {
    console.error("Error generando pregunta con Gemini:", error);
    throw error;
  }
};
