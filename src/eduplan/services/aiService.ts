
import OpenAI from "openai";
import { LessonPlan, PlanningRequest } from "../types";
import { EJES_ARTICULADORES_NEM } from "../constants";

const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: (import.meta as any).env.VITE_DEEPSEEK_API_KEY,
  dangerouslyAllowBrowser: true // Required for client-side usage in Vite
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const generateLessonPlanStream = async (
  params: PlanningRequest,
  onChunk: (text: string) => void,
  retries = 3
): Promise<LessonPlan> => {
  const apiKey = (import.meta as any).env.VITE_DEEPSEEK_API_KEY;

  if (!apiKey || apiKey === "undefined" || apiKey.length < 10) {
    throw new Error("CONFIGURACIÓN REQUERIDA: No se detectó una VITE_DEEPSEEK_API_KEY en el archivo .env.");
  }

  const systemInstruction = `
# PERFIL: CONSULTOR PEDAGÓGICO DE ÉLITE Y ESPECIALISTA EN DISEÑO CURRICULAR NEM
Eres un asesor pedagógico experto en la Nueva Escuela Mexicana (NEM) y el Codiseño Curricular. Tu misión es estructurar planos didácticos altamente contextualizados, rigurosos y respetuosos de los planes de estudio vigentes.

# 1. MARCO CURRICULAR OBLIGATORIO DE LA NEM (FASE Y CONTENIDOS SINTÉTICOS):
*   **Fases del Programa Sintético:** Debes ubicar con absoluta precisión el diseño según la Fase oficial solicitada:
    - Fase 1: Educación Inicial
    - Fase 2: Educación Preescolar (1°, 2° y 3° de Preescolar)
    - Fase 3: Educación Primaria (1° y 2° de Primaria)
    - Fase 4: Educación Primaria (3° y 4° de Primaria)
    - Fase 5: Educación Primaria (5° y 6° de Primaria)
    - Fase 6: Educación Secundaria (1°, 2° y 3° de Secundaria)
*   **Campos Formativos Oficiales:** Las planeaciones deben estructurarse únicamente bajo los 4 campos oficiales:
    1. Lenguajes
    2. Saberes y Pensamiento Científico
    3. Ética, Naturaleza y Sociedades
    4. De lo Humano y lo Comunitario
*   **REGLA DE ORO DE LOS CONTENIDOS Y PDA:** Está ESTRICTAMENTE PROHIBIDO inventar, alucinar o modificar contenidos curriculares o Procesos de Desarrollo de Aprendizaje (PDA). Debes basar tu propuesta exclusivamente en los contenidos oficiales del Programa Sintético correspondientes a la Fase y Grado indicados. Cada Contenido y PDA seleccionado debe ser textual y pedagógicamente coherente con los documentos emitidos por la SEP en México.

# 2. FILOSOFÍA PEDAGÓGICA NEM:
*   **Comunidad como Núcleo Integrador:** Vincula la planeación con una situación o problemática real del contexto comunitario (saberes locales, entorno natural, social o familiar). El diagnóstico sociocrítico analiza este contexto sin usar un lenguaje basado en el déficit o "falla" del estudiante, centrándose en las áreas de oportunidad de la comunidad y barreras para el aprendizaje (BAP).
*   **Mediación Pedagógica:** La secuencia de aprendizaje debe detallar una mediación docente activa (guía, andamiaje, preguntas de reflexión profunda, retos cognitivos) y la participación activa del estudiante (resolución colaborativa, indagación, expresión creativa).
*   **Inclusión y Enfoque DUA:** Incorpora de manera transversal adecuaciones y estrategias basadas en el Diseño Universal para el Aprendizaje.
*   **Evaluación Formativa Genuina:** Focalizada en el proceso más que en el producto final. Integra la autoevaluación, coevaluación y retroalimentación constructiva, utilizando criterios cualitativos acordes a los lineamientos de evaluación SEP.

# 3. METODOLOGÍAS SOCIOCRÍTICAS Y SUS FASES OFICIALES:
Organiza la secuencia didáctica respetando estrictamente las etapas oficiales del programa analítico SEP:
*   **Aprendizaje Basado en Problemas (ABP):**
    1. Presentemos | 2. Recolectemos | 3. Formulemos el problema | 4. Organicemos la experiencia | 5. Vivamos la experiencia | 6. Resultados y análisis.
*   **Aprendizaje Basado en Indagación (STEAM):**
    1. Saberes de nuestra comunidad | 2. Plan y aplicación de la indagación | 3. Respuesta a las preguntas de indagación | 4. Comunicación y aplicación | 5. Reflexión sobre el proceso.
*   **Proyectos Comunitarios:**
    Fase 1: Planeación (Identificación, Recuperación, Planificación) | Fase 2: Acción (Acercamiento, Comprensión y producción, Reconocimiento, Concreción) | Fase 3: Intervención (Integración, Difusión, Consideraciones, Avances).
*   **Aprendizaje Servicio (AS):**
    1. Punto de partida | 2. Lo que sé y lo que quiero saber | 3. Organicemos las actividades | 4. Creatividad en marcha | 5. Compartimos y evaluamos lo aprendido.

# 4. REGLAS TÉCNICAS CRÍTICAS:
- Respuesta: SOLO JSON válido. No envíes bloques markdown (sin \`\`\`json ni texto introductorio).
- Volumen: EXACTAMENTE ${params.numSesiones} sesiones detalladas. Desarrolla cada sesión completamente sin usar resúmenes ni repeticiones genéricas.
- Ejes Articuladores: Selecciona de 1 a 4 ejes de la siguiente lista oficial sin modificarlos ni inventar otros:
${EJES_ARTICULADORES_NEM.map((e, i) => `  ${i + 1}. ${e}`).join('\n')}
  `;

  const userPrompt = `
### SOLICITUD DE PLANO DIDÁCTICO INTEGRAL (CONEXIÓN COMUNIDAD-AULA)
Genera una planeación didáctica en formato JSON para:
- **Grado y Fase:** ${params.grado} / ${params.fase}
- **Metodología Activa:** ${params.metodologia}
- **Número Total de Sesiones:** ${params.numSesiones}
- **Problemática del Contexto / Diagnóstico Situado:** ${params.contextoAdicional || 'Integración de saberes de la comunidad y pensamiento reflexivo.'}
- **Institución:** ${params.nombreEscuela} | **Docente:** ${params.nombreDocente}

### ⚠️ EJES ARTICULADORES OFICIALES (Elegir de 1 a 4 de esta lista exacta):
${EJES_ARTICULADORES_NEM.map((e, i) => `${i + 1}. "${e}"`).join('\n')}

### ESTRUCTURA DEL JSON REQUERIDA (Mantener claves y tipos de datos exactamente):
{
  "encabezado": {
    "proyecto": "Título del proyecto creativo y motivador para los alumnos",
    "docente": "${params.nombreDocente}",
    "escuela": "${params.nombreEscuela}",
    "grado": "${params.grado}",
    "fase": "${params.fase}",
    "metodologia": "${params.metodologia}",
    "num_sesiones": ${params.numSesiones}
  },
  "diagnostico_pedagogico": "Diagnóstico sociocrítico del aula y la comunidad frente a la situación problema elegida.",
  "estructura_curricular": {
    "campos_formativos": ["Nombre del Campo Formativo Principal"],
    "ejes_articuladores": ["Ejes oficiales seleccionados de la lista"],
    "proposito": "Propósito formativo del proyecto alineado al perfil de egreso NEM.",
    "vinculacion": [
      {
        "campo": "Campo formativo con el que se vincula interdisciplinariamente",
        "contenido": "Contenido del programa sintético asociado",
        "pdas": ["PDA específicos que se vinculan"]
      }
    ]
  },
  "secuencia_didactica": [
    {
      "fase_nombre": "Nombre de la fase o etapa oficial de la metodología",
      "sesiones": [
        {
          "numero": 1,
          "titulo": "Título específico de la sesión enfocada en el reto cognitivo",
          "duracion": "60 min",
          "inicio": [
            "Actividad de encuadre, rescate de saberes previos o conflicto cognitivo"
          ],
          "desarrollo": [
            "Mediación Pedagógica: [Acciones del docente para guiar y andamiar la sesión]",
            "Participación Activa: [Actividades del alumno individuales o en equipos para indagar o resolver]",
            "Atención a la Diversidad: [Estrategia o adecuación para asegurar la participación y eliminar BAP]"
          ],
          "cierre": [
            "Actividad de cierre, metacognición o autoevaluación grupal"
          ],
          "recursos": ["Materiales concretos, lecturas o herramientas digitales específicas"],
          "evidencia": "Evidencia formativa o producto de la sesión"
        }
      ]
    }
  ],
  "evaluacion_formativa": {
    "tecnica": "Técnica de evaluación formativa aplicada",
    "instrumento": "Instrumento formativo a utilizar",
    "evidencia_proceso": "Descripción del producto integrador o evidencia del proceso del proyecto",
    "criterios": [
      "Criterio cualitativo 1 de evaluación formativa",
      "Criterio cualitativo 2 enfocado en la inclusión o pensamiento crítico"
    ]
  }
}
  `;

  try {
    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: systemInstruction.trim() },
        { role: "user", content: userPrompt.trim() }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1,
      max_tokens: 8192
    });

    const finishReason = response.choices[0].finish_reason;
    if (finishReason === "length") {
      throw new Error("Respuesta truncada por límites de longitud. Por favor solicita menos sesiones o pide menos detalle.");
    }

    const content = response.choices[0].message.content;
    if (!content) throw new Error("No se recibió contenido de DeepSeek.");

    return JSON.parse(content) as LessonPlan;

  } catch (error: any) {
    console.error("Error en AI Service:", error);

    // Automatic retry for overload (503) or rate limits (429)
    if (retries > 0 && (error.status === 503 || error.status === 429 || error.message.includes("overload"))) {
      console.log(`Reintentando... (${retries} intentos restantes)`);
      await sleep(2000);
      return generateLessonPlanStream(params, onChunk, retries - 1);
    }

    throw new Error(`ERROR DE GENERACIÓN (DEEPSEEK): ${error.message.substring(0, 100)}`);
  }
};
