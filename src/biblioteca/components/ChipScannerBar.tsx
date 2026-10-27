import React, { useState, useEffect, useRef } from 'react';
import { 
  CreditCard, 
  Sparkles, 
  ScanLine, 
  Wifi, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  HelpCircle,
  Smartphone
} from 'lucide-react';
import { chipService } from '../services/chipService';
import { Socio } from '../types';

interface ChipScannerBarProps {
  escuelaId: string;
  onSocioIdentificado: (socio: Socio) => void;
  sociosDisponibles?: Socio[];
}

export const ChipScannerBar: React.FC<ChipScannerBarProps> = ({
  escuelaId,
  onSocioIdentificado,
  sociosDisponibles = []
}) => {
  const [uidInput, setUidInput] = useState('');
  const [escaneando, setEscaneando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState<string | null>(null);
  const [tipoEstado, setTipoEstado] = useState<'exito' | 'error' | 'info'>('info');
  const inputRef = useRef<HTMLInputElement>(null);

  // Procesar código leído por el lector USB o teclado
  const procesarLectura = async (codigo: string) => {
    const clean = codigo.trim();
    if (!clean) return;

    setEscaneando(true);
    setMensajeEstado(`Consultando chip "${clean}"...`);
    setTipoEstado('info');

    try {
      const res = await chipService.identificarChip(clean, escuelaId);
      if (res.encontrado && res.socio) {
        setMensajeEstado(`¡${res.socio.nombre} (${res.socio.gradoGrupo}) identificado!`);
        setTipoEstado('exito');
        onSocioIdentificado(res.socio);
        setUidInput('');
      } else {
        setMensajeEstado(res.mensaje || `Tarjeta con UID "${clean}" no encontrada.`);
        setTipoEstado('error');
      }
    } catch (e: any) {
      setMensajeEstado('Error al consultar el chip con la base de datos.');
      setTipoEstado('error');
    } finally {
      setEscaneando(false);
      setTimeout(() => {
        setMensajeEstado(null);
      }, 4000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uidInput.trim()) {
      procesarLectura(uidInput);
    }
  };

  // Listener global para lectores USB HID (Captura ráfaga rápida de teclado que termina en Enter)
  useEffect(() => {
    let buffer = '';
    let ultimoTiempo = Date.now();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar si el usuario está escribiendo en un textarea o input de texto normal que no sea este
      const target = e.target as HTMLElement;
      if (target && target !== inputRef.current && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      const ahora = Date.now();
      const delta = ahora - ultimoTiempo;
      ultimoTiempo = ahora;

      if (e.key === 'Enter') {
        if (buffer.length >= 4) {
          e.preventDefault();
          const scanCode = buffer;
          buffer = '';
          procesarLectura(scanCode);
        }
        buffer = '';
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Los lectores de tarjetas USB envían teclas muy rápido (< 50ms entre caracteres)
        if (delta > 200 && buffer.length > 0) {
          buffer = ''; // Si hubo una pausa larga, descartar buffer anterior
        }
        buffer += e.key;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Iniciar Web NFC si está en celular Android compatible
    let stopNfc = () => {};
    chipService.iniciarLecturaWebNFC((uid) => {
      procesarLectura(uid);
    }).then(cleanup => {
      stopNfc = cleanup;
    });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      stopNfc();
    };
  }, [escuelaId]);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-700/60 transition-all">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Indicador de Lector Activo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
            <ScanLine size={20} className="animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-black text-white tracking-tight">
                Lector de Chip & Credencial Activo
              </h3>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                EN VIVO
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              Acerca la tarjeta NFC/RFID o escanea el código de barras para préstamos, devoluciones o cómputo.
            </p>
          </div>
        </div>

        {/* Input y Selector de Prueba */}
        <div className="flex items-center gap-2 flex-1 max-w-md justify-end">
          <form onSubmit={handleSubmit} className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={uidInput}
              onChange={(e) => setUidInput(e.target.value)}
              placeholder="Escanear tarjeta o ingresar UID..."
              disabled={escaneando}
              className="w-full pl-3 pr-20 py-2 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-xs font-mono text-white placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={escaneando || !uidInput.trim()}
              className="absolute right-1 top-1 bottom-1 px-3 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
            >
              {escaneando ? <Loader2 size={13} className="animate-spin" /> : <CreditCard size={13} />}
              <span>Leer</span>
            </button>
          </form>

          {/* Simulador rápido de prueba para cuando no hay lector físico USB conectado */}
          {sociosDisponibles.length > 0 && (
            <select
              onChange={(e) => {
                if (e.target.value) {
                  procesarLectura(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
              className="px-2.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium focus:border-teal-400 max-w-[140px] truncate"
              title="Simular pase de tarjeta de un alumno registrado"
            >
              <option value="" disabled>Simular chip...</option>
              {sociosDisponibles.slice(0, 6).map(s => (
                <option key={s.id} value={s.nfcUid || s.matricula}>
                  {s.nombre.split(' ')[0]} ({s.gradoGrupo.split(' ')[0]})
                </option>
              ))}
            </select>
          )}
        </div>

      </div>

      {/* Banner de Estado / Notificación de Escaneo */}
      {mensajeEstado && (
        <div className={`mt-3 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in ${
          tipoEstado === 'exito' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60' :
          tipoEstado === 'error' ? 'bg-rose-950/80 text-rose-300 border border-rose-700/60' :
          'bg-teal-950/80 text-teal-300 border border-teal-700/60'
        }`}>
          {tipoEstado === 'exito' ? (
            <CheckCircle size={15} className="text-emerald-400 shrink-0" />
          ) : tipoEstado === 'error' ? (
            <AlertCircle size={15} className="text-rose-400 shrink-0" />
          ) : (
            <Loader2 size={15} className="animate-spin text-teal-400 shrink-0" />
          )}
          <span>{mensajeEstado}</span>
        </div>
      )}
    </div>
  );
};
