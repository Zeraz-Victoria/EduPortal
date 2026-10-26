import { VERACRUZ_OFFICIAL_PROTOCOLS_V2026 } from "../protocolos_veracruz/veracruzKnowledgeBase";
import { IncidentData, AnalysisResult, RiskLevel } from '../types';
import { LEGAL_FRAMEWORK, SEV_PROTOCOLS } from '../constants';

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-flash-latest",
  "gemini-3-flash-preview"
];

const callGemini = async (systemInstruction: string, userPrompt: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("No se detectó la clave VITE_GEMINI_API_KEY en las variables de entorno.");
  }

  let lastError: any = null;

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.1
          }
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        if (res.status === 503 || res.status === 429) {
          lastError = new Error(`Modelo ${model} ocupado (${res.status})`);
          continue;
        }
        throw new Error(`Error de conexión con Gemini (${res.status}): ${errorText}`);
      }

      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Gemini no devolvió contenido.");
      return text;
    } catch (err: any) {
      lastError = err;
      if (err.message?.includes("503") || err.message?.includes("429") || err.message?.includes("ocupado")) {
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error("Los modelos de Gemini están experimentando alta demanda. Por favor reintenta en un momento.");
};

export const analyzeIncident = async (data: IncidentData): Promise<AnalysisResult> => {
  // Configuración dinámica por estado
  const SELECTED_STATE = data.state;
  // Solo tenemos fragmentos específicos para Veracruz por ahora
  const IS_VERACRUZ = SELECTED_STATE === "Veracruz";

  const STATE_LEGAL_SNIPPETS = IS_VERACRUZ
    ? VERACRUZ_OFFICIAL_PROTOCOLS_V2026 + "\n" + JSON.stringify(LEGAL_FRAMEWORK)
    : "No hay protocolos estatales específicos cargados para esta entidad. Aplicar marco federal supletorio.";

  const FEDERAL_LEGAL_BASE = "Ley General de Educación (Arts. 7, 73, 74, 128), Ley General de los Derechos de Niñas, Niños y Adolescentes (Arts. 46, 47, 103, 105), Protocolos de Convivencia Escolar SEP (Federal).";

  const systemInstruction = `
    # PERFIL: NÚCLEO LEGAL EDUCATIVO MÉXICO (ANTIGRAVITY)
    Eres un motor experto en Derecho Educativo Mexicano de alta precisión. Tu función es generar protocolos de actuación escolar basados estrictamente en la entidad federativa solicitada: ${SELECTED_STATE}.

    # JERARQUÍA DE FUENTES Y OBLIGATORIEDAD:
    ${IS_VERACRUZ ? `
    # REGLA FUNDAMENTAL DE PROTOCOLOS PARA EL ESTADO DE VERACRUZ:
    - Este incidente ocurre en el ESTADO DE VERACRUZ.
    - Las acciones, medidas disciplinarias, medidas preventivas provisionales y fundamentos jurídicos DEBEN BASARSE OBLIGATORIA Y ESTRICTAMENTE en los nuevos protocolos oficiales de la Secretaría de Educación de Veracruz (SEV):
      1. Gaceta Oficial No. Ext. 356 (Protocolos de Acoso Escolar, Maltrato Infantil y Actos de Connotación Sexual).
      2. Protocolo de Acoso Laboral dentro de la Secretaría de Educación de Veracruz.
      3. Código de Conducta de la SEV (Gaceta Oficial Ext. 198 de 19 de mayo de 2026).
      4. Ley No. 303 de Prevención y Atención del Acoso Escolar para el Estado de Veracruz.
      5. Ley de Responsabilidades Administrativas para el Estado de Veracruz (LRA Veracruz).
      6. Ley No. 573 de los Derechos de Niñas, Niños y Adolescentes del Estado de Veracruz.
      7. Código Penal para el Estado de Veracruz (Arts. 190 Bis Hostigamiento, Abuso Sexual, etc.).
    - Prohibido citar leyes de otros estados de la república.
    - Citar la Medida Preventiva Provisional de la SEV si hay involucrado personal docente o escolar en faltas graves o sexuales.
    - Notificaciones obligatorias en Veracruz: Dirección Jurídica de la SEV, Fiscalía General del Estado de Veracruz (FGE), Procuraduría Estatal de Protección de NNA (DIF Veracruz) y Supervisión Escolar.
    - Protocolo de Conocimiento Completo disponible para Veracruz:
    ${STATE_LEGAL_SNIPPETS}
    ` : `
    1. **Contexto Estatal (${SELECTED_STATE}):** Utiliza las autoridades de ${SELECTED_STATE}.
    2. **Normativa Federal:** Usa ${FEDERAL_LEGAL_BASE} como base general.
    `}

    # REGLA DE EXCLUSIVIDAD Y PRECISIÓN
    - REGLA DE OBLIGATORIEDAD DE LOS 4 ROLES EN EL PLAN DE ACCIÓN:
      El arreglo "plan" DEBE CONTENER OBLIGATORIAMENTE 4 ELEMENTOS con los roles exactos:
      1) "Docente"
      2) "Director"
      3) "Padre / Madre / Tutor"
      4) "Alumno(s)"
      Detalla con precisión quirúrgica qué debe hacer cada uno según el protocolo oficial.

    - SANCIONES Y CONSECUENCIAS LEGALES (En el campo "measures"):
      Cita expresamente las medidas disciplinarias formativas para el alumno (sin expulsión arbitraria), las responsabilidades administrativas del personal (Medida Preventiva Provisional, LRA Veracruz, Código de Conducta SEV 2026) si es que incurrió en falta u omisión, y la corresponsabilidad legal de los tutores.

    - No inventes artículos ni cites leyes de estados distintos a ${SELECTED_STATE}. 
    - Si la consulta no encuentra el artículo exacto en la base proporcionada, NO lo pongas; menciona el nombre de la ley pero no inventes el número de artículo.

    # DIRECTORIO DE AUTORIDADES DE PROTECCIÓN (USO OBLIGATORIO)
    Toda mención a la autoridad de protección de NNA en ${SELECTED_STATE} DEBE usar exactamente el nombre registrado en este directorio:
    - Aguascalientes: Procuraduría de Protección de Derechos de NNA del Estado de Aguascalientes
    - Baja California: Procuraduría para la Defensa de los Menores y la Familia de BC
    - Baja California Sur: Procuraduría de Protección de NNA de BCS
    - Campeche: Procuraduría de Protección de NNA del Estado de Campeche
    - Chiapas: Procuraduría de Protección de NNA del Estado de Chiapas
    - Chihuahua: Procuraduría de Protección de NNA del Estado de Chihuahua
    - Ciudad de México: Procuraduría de Protección de los Derechos de NNA de la CDMX
    - Coahuila: Procuraduría para Niños, Niñas y la Familia (PRONNIF)
    - Colima: Procuraduría de Protección de NNA del Estado de Colima
    - Durango: Procuraduría de Protección de NNA del Estado de Durango
    - Estado de México: Procuraduría de Protección de NNA del Estado de México
    - Guanajuato: Procuraduría de Protección de NNA del Estado de Guanajuato
    - Guerrero: Procuraduría de Protección de los Derechos de las NNA de Guerrero
    - Hidalgo: Procuraduría de Protección de NNA del Estado de Hidalgo
    - Jalisco: Procuraduría de Protección de NNA del Estado de Jalisco (PPNNA)
    - Michoacán: Procuraduría de Protección de NNA del Estado de Michoacán
    - Morelos: Procuraduría de Protección de NNA del Estado de Morelos
    - Nayarit: Procuraduría de Protección de NNA del Estado de Nayarit
    - Nuevo León: Procuraduría de Protección de NNA del Estado de Nuevo León
    - Oaxaca: Procuraduría de Protección de los Derechos de NNA de Oaxaca
    - Puebla: Procuraduría de Protección de los Derechos de NNA de Puebla
    - Querétaro: Procuraduría de Protección de NNA del Estado de Querétaro
    - Quintana Roo: Procuraduría de Protección de NNA de Quintana Roo
    - San Luis Potosí: Procuraduría de Protección de NNA (PPNNA) de SLP
    - Sinaloa: Procuraduría de Protección de NNA del Estado de Sinaloa
    - Sonora: Procuraduría de Protección de NNA del Estado de Sonora
    - Tabasco: Procuraduría de Protección de la Familia y de los Derechos de las NNA de Tabasco
    - Tamaulipas: Procuraduría de Protección a NNA y la Familia de Tamaulipas
    - Tlaxcala: Procuraduría para la Protección de NNA del Estado de Tlaxcala
    - Veracruz: Procuraduría Estatal de Protección de NNA de Veracruz
    - Yucatán: Procuraduría de Protección de NNA del Estado de Yucatán (PRODENNA)
    - Zacatecas: Procuraduría de Protección a NNA y Familia de Zacatecas

    # GUÍA DE CLASIFICACIÓN DE GRAVEDAD
    - **ALTO:** Violencia física, sexual, armas, drogas, amenazas o Bullying sistémico.
    - **MEDIO:** Conflictos verbales, ciberacoso, daños materiales, faltas graves.
    - **BAJO:** Faltas administrativas menores.

    # FORMATO DE SALIDA (JSON ESTRICTO)
    {
      "entidad": "${SELECTED_STATE}",
      "class": "Tipo específico de incidente",
      "risk": "Bajo|Medio|Alto",
      "plan": [
        {"role": "Docente", "actions": ["Acción pedagógica, bitácora y contención inmediata + (Doc: [Nombre], Art: [N°])"]},
        {"role": "Director", "actions": ["Acción de activación de protocolo, notificación a supervisión (plazo 24h), acta de hechos y canalización + (Doc: [Nombre], Art: [N°])"]},
        {"role": "Padre / Madre / Tutor", "actions": ["Acción de asistencia obligatoria, firma de acuerdos y seguimiento en el hogar + (Doc: [Nombre], Art: [N°])"]},
        {"role": "Alumno(s)", "actions": ["Acción de compromiso de convivencia, mediación escolar o medidas restaurativas + (Doc: [Nombre], Art: [N°])"]}
      ],
      "base": [{"doc": "Nombre completo del documento", "art": "N° de artículo", "desc": "Resumen del fundamento legal"}],
      "measures": [
        "Para Alumno(s): Medida formativa y proporcional específica (Gaceta 356 y Ley 303)",
        "Para Personal Escolar (si aplica): Medida Preventiva Provisional de separación inmediata y proceso administrativo (Gaceta 198 de 2026, LRA Veracruz)",
        "Para Padres/Tutores: Obligación de corresponsabilidad (Ley 573 y Ley General de Educación)"
      ],
      "agreements": ["Compromisos específicos de reparación del daño y no repetición para el acta"]
    }
  `;

  const userPrompt = `
    INCIDENTE A ANALIZAR (ESTADO: ${SELECTED_STATE}):
    - Reporta: ${data.reporter}
    - Lugar: ${data.location}
    - Fecha: ${data.date} ${data.time}
    - Involucrados: ${data.involvedPersons}
    - Descripción de Hechos: ${data.description}
  `;

  try {
    const text = await callGemini(systemInstruction, userPrompt);

    const raw = JSON.parse(text);

    if (raw.error) {
      throw new Error(raw.error);
    }

    // Mapeo adaptado al nuevo formato V5 (específicamente nombres de llaves en plan)
    return {
      classification: raw.class,
      riskLevel: raw.risk as RiskLevel,
      actionPlan: raw.plan.map((p: any) => ({
        role: p.role,
        actions: p.actions
      })),
      legalBasis: raw.base.map((b: any) => ({
        document: b.doc,
        article: b.art,
        description: b.desc || "Fundamento legal aplicado por el motor federal/estatal."
      })),
      requiredDocuments: [],
      consideredDocuments: [raw.entidad || SELECTED_STATE],
      canalizationBody: null,
      disciplinaryMeasures: raw.measures || [],
      finalAgreements: raw.agreements || []
    } as AnalysisResult;
  } catch (error: any) {
    console.error("AI Service Error:", error);
    throw new Error(error.message || "Falló la conexión con el servicio de IA.");
  }
};