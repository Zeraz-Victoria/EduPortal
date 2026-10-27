import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  BookOpen, 
  ExternalLink, 
  HelpCircle, 
  Loader2,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';
import { Libro, MensajeChat } from '../types';
import { consultarBibliotecarioIA } from '../services/aiBibliotecario';

interface AsistenteIAViewProps {
  catalogo: Libro[];
  onIniciarPrestamo: (libro: Libro) => void;
}

export const AsistenteIAView: React.FC<AsistenteIAViewProps> = ({
  catalogo,
  onIniciarPrestamo
}) => {
  const [mensajes, setMensajes] = useState<MensajeChat[]>([
    {
      id: 'msg-welcome',
      remitente: 'ia',
      contenido: '¡Hola! Soy tu **Bibliotecario Virtual Inteligente**. Conozco a profundidad los programas y libros de la **Nueva Escuela Mexicana (NEM)**, así como nuestro acervo de literatura escolar. ¿En qué tema, proyecto o nivel te gustaría que te oriente hoy?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputTexto, setInputTexto] = useState('');
  const [cargando, setCargando] = useState(false);

  const sugerencias = [
    '¿Qué libros me sirven para un proyecto de ecología y sustentabilidad en 2º grado?',
    '¿Qué lecturas recomiendas para fomentar la cultura de paz y derechos humanos?',
    '¿En qué material encuentro proyectos de matemáticas y biología para 1° de secundaria?',
    '¿Qué obras de literatura clásica latinoamericana tenemos en la biblioteca?'
  ];

  const enviarConsulta = async (texto: string) => {
    if (!texto.trim() || cargando) return;

    const nuevoMensajeUsuario: MensajeChat = {
      id: `msg-user-${Date.now()}`,
      remitente: 'usuario',
      contenido: texto,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMensajes(prev => [...prev, nuevoMensajeUsuario]);
    setInputTexto('');
    setCargando(true);

    try {
      const respuesta = await consultarBibliotecarioIA(texto, catalogo);

      const nuevoMensajeIA: MensajeChat = {
        id: `msg-ia-${Date.now()}`,
        remitente: 'ia',
        contenido: respuesta.texto,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        librosSugeridos: respuesta.librosRecomendados
      };

      setMensajes(prev => [...prev, nuevoMensajeIA]);
    } catch (err) {
      console.error(err);
      setMensajes(prev => [
        ...prev,
        {
          id: `msg-err-${Date.now()}`,
          remitente: 'ia',
          contenido: 'Ocurrió una dificultad al procesar la consulta. Por favor inténtalo de nuevo.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      
      {/* Banner Superior */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-emerald-900 text-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="text-lg font-black flex items-center gap-2">
              <span>Bibliotecario Virtual Inteligente</span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                NEM & Curricular
              </span>
            </h2>
            <p className="text-xs text-teal-100">
              Asistencia pedagógica para vincular libros con proyectos escolares, campos formativos y planeaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Sugerencias Rápidas */}
      <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap flex items-center gap-1">
          <Sparkles size={12} className="text-teal-600" />
          Sugerencias:
        </span>
        {sugerencias.map((s, idx) => (
          <button
            key={idx}
            onClick={() => enviarConsulta(s)}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-xs text-slate-700 font-medium whitespace-nowrap transition-colors shadow-2xs"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Ventana de Conversación */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col h-[520px]">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {mensajes.map((m) => {
            const esUsuario = m.remitente === 'usuario';

            return (
              <div
                key={m.id}
                className={`flex gap-3 ${esUsuario ? 'justify-end' : 'justify-start'}`}
              >
                {!esUsuario && (
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={16} />
                  </div>
                )}

                <div className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed space-y-3 ${
                  esUsuario
                    ? 'bg-teal-600 text-white rounded-tr-xs'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-xs'
                }`}>
                  <div className="whitespace-pre-line font-medium">{m.contenido}</div>

                  {/* Libros recomendados interactivos */}
                  {m.librosSugeridos && m.librosSugeridos.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/80 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
                        📚 Materiales sugeridos del catálogo:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {m.librosSugeridos.map(l => (
                          <div
                            key={l.id}
                            className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between"
                          >
                            <div>
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                                {l.categoria}
                              </span>
                              <h5 className="font-bold text-slate-900 text-xs line-clamp-1 mt-1">{l.titulo}</h5>
                              <p className="text-[10px] text-slate-500 truncate">{l.autor}</p>
                            </div>

                            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-[10px] text-emerald-700 font-bold">
                                {l.ejemplaresDisponibles} disp.
                              </span>
                              <div className="flex items-center gap-1">
                                {l.enlaceLecturaDigital && (
                                  <a
                                    href={l.enlaceLecturaDigital}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-1 text-teal-600 hover:text-teal-800"
                                    title="Leer en línea"
                                  >
                                    <ExternalLink size={12} />
                                  </a>
                                )}
                                <button
                                  onClick={() => onIniciarPrestamo(l)}
                                  className="text-[10px] font-bold bg-teal-50 hover:bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-200"
                                >
                                  Prestar
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`text-[9px] text-right ${esUsuario ? 'text-teal-200' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </div>
                </div>

                {esUsuario && (
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 mt-1 text-xs font-bold">
                    Tú
                  </div>
                )}
              </div>
            );
          })}

          {cargando && (
            <div className="flex gap-3 items-center text-slate-500 text-xs">
              <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                <Loader2 size={16} className="animate-spin" />
              </div>
              <span className="italic">El bibliotecario está analizando el catálogo y la NEM...</span>
            </div>
          )}
        </div>

        {/* Formulario de Envío */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            enviarConsulta(inputTexto);
          }}
          className="pt-3 border-t border-slate-100 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
            placeholder="Pregunta sobre proyectos, libros de texto, autores o temas curriculares..."
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          />
          <button
            type="submit"
            disabled={!inputTexto.trim() || cargando}
            className="px-4 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-xs transition-colors"
          >
            <Send size={15} />
          </button>
        </form>
      </div>

    </div>
  );
};
