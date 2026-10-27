import { Libro } from '../types';

const getApiKey = (): string | undefined => {
  let key: string | undefined = undefined;
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      key = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_DEEPSEEK_API_KEY;
    }
  } catch (e) {}

  if (!key) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        key = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      }
    } catch (e) {}
  }
  return key;
};

export interface RespuestaAsistente {
  texto: string;
  librosRecomendados: Libro[];
}

export const consultarBibliotecarioIA = async (
  consulta: string,
  catalogo: Libro[]
): Promise<RespuestaAsistente> => {
  const queryLower = consulta.toLowerCase().trim();

  // 1. Filtrar libros relevantes del catálogo local
  const palabrasClave = queryLower
    .split(/\s+/)
    .filter(p => p.length > 3 && !['para', 'como', 'sobre', 'donde', 'este', 'esta', 'estos', 'estas', 'libro', 'libros', 'quiero', 'necesito'].includes(p));

  const librosCoincidentes = catalogo.filter(libro => {
    const textoBuscar = `${libro.titulo} ${libro.descripcion} ${libro.categoria} ${libro.autor} ${libro.nivel} ${libro.temasClave.join(' ')}`.toLowerCase();
    return palabrasClave.some(palabra => textoBuscar.includes(palabra));
  });

  const librosTop = (librosCoincidentes.length > 0 ? librosCoincidentes : catalogo).slice(0, 4);

  const apiKey = getApiKey();

  if (apiKey) {
    try {
      const contextoLibros = catalogo.map(l => 
        `- [${l.codigo}] "${l.titulo}" por ${l.autor} | Categoría: ${l.categoria} | Nivel: ${l.nivel} | Temas: ${l.temasClave.join(', ')}`
      ).join('\n');

      const prompt = `
Eres el "Bibliotecario Virtual Inteligente de la Biblioteca Escolar", un asistente pedagógico experto en la Nueva Escuela Mexicana (NEM), planes de estudio de secundaria, literatura y fomento a la lectura.

Tu misión es responder amablemente a la siguiente consulta del docente o alumno:
"${consulta}"

Catálogo disponible en la biblioteca escolar:
${contextoLibros}

INSTRUCCIONES:
1. Responde de forma cálida, didáctica y estructurada.
2. Si la consulta pide recursos para una clase o proyecto, sugiere cómo vincular los libros con campos formativos (Lenguajes, Saberes, Ética, o De lo Humano y Comunitario).
3. Cita exactamente los títulos del catálogo que mejor respondan a la duda.
4. Si no hay un libro exacto, sugiere el más cercano o brinda una orientación didáctica constructiva.
5. Mantén la respuesta concisa (máximo 3 párrafos claros con viñetas).
`;

      const modelos = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-flash-latest'];
      for (const modelo of modelos) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3500);

          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600
              }
            })
          });
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (texto) {
              return {
                texto,
                librosRecomendados: librosTop
              };
            }
          }
        } catch (mErr) {
          continue;
        }
      }
    } catch (e) {
      console.warn('Fallo en llamada a API de Gemini, utilizando motor pedagógico local.', e);
    }
  }

  // Fallback Inteligente Local (100% Funcional sin Internet ni API Key)
  let respuestaTexto = '';

  if (queryLower.includes('proyecto') || queryLower.includes('abp') || queryLower.includes('steam') || queryLower.includes('nem')) {
    respuestaTexto = `¡Excelente iniciativa pedagógica! Para proyectos de la **Nueva Escuela Mexicana (NEM)** con metodologías activas (ABP, STEAM o Aprendizaje Servicio), te recomiendo revisar la colección oficial de **Nuestro Libro de Proyectos** disponible en la biblioteca. 

Estos tomos articulan problemas del contexto comunitario con los campos formativos de 1°, 2° y 3° grado. Además, para los docentes contamos con la guía metodológica fundamental *"Un libro sin recetas para la maestra y el maestro"*, indispensable para el codiseño curricular.`;
  } else if (queryLower.includes('ciencia') || queryLower.includes('matematica') || queryLower.includes('fisica') || queryLower.includes('biologia')) {
    respuestaTexto = `Para el campo de **Saberes y Pensamiento Científico**, contamos con ejemplares físicos y digitales que vinculan el método experimental y el pensamiento crítico. 

Te recomiendo el libro curricular de *Saberes y Pensamiento Científico*, complementado con la obra de divulgación *Cosmos* de Carl Sagan, ideal para despertar la curiosidad científica en las y los estudiantes.`;
  } else if (queryLower.includes('lectura') || queryLower.includes('literatura') || queryLower.includes('cuento') || queryLower.includes('novela')) {
    respuestaTexto = `Fomentar el hábito lector es uno de los propósitos esenciales en secundaria. En nuestro catálogo disponemos de joyas de la literatura universal e hispanoamericana como *Cien años de soledad*, *Pedro Páramo*, y para fomento reflexivo en primeros grados, la edición ilustrada de *El Principito*.`;
  } else if (queryLower.includes('historia') || queryLower.includes('mexico') || queryLower.includes('independencia') || queryLower.includes('revolucion')) {
    respuestaTexto = `Para profundizar en los procesos históricos y la construcción de la identidad nacional, el libro *Historia del Pueblo Mexicano* y el tomo de *Ética, Naturaleza y Sociedades* ofrecen secuencias didácticas basadas en fuentes primarias, ideales para debates en el aula.`;
  } else {
    respuestaTexto = `He examinado el catálogo de la biblioteca para tu consulta: "${consulta}". A continuación te sugiero los materiales más afines disponibles en nuestro acervo escolar. Puedes consultarlos directamente en sala o solicitar su préstamo a domicilio.`;
  }

  return {
    texto: respuestaTexto,
    librosRecomendados: librosTop
  };
};
