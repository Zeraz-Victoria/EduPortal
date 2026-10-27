import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  CreditCard, 
  GraduationCap, 
  Briefcase, 
  Trash2, 
  Edit3, 
  X, 
  Printer, 
  QrCode, 
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Socio, RolSocio } from '../types';

interface SociosViewProps {
  socios: Socio[];
  onGuardarSocio: (socio: Socio) => void;
  onEliminarSocio: (id: string) => void;
}

export const SociosView: React.FC<SociosViewProps> = ({
  socios,
  onGuardarSocio,
  onEliminarSocio
}) => {
  const [busqueda, setBusqueda] = useState('');
  const [rolSel, setRolSel] = useState<'todos' | RolSocio>('todos');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [socioEnEdicion, setSocioEnEdicion] = useState<Socio | null>(null);
  const [credencialSocio, setCredencialSocio] = useState<Socio | null>(null);

  // Form State
  const [formNombre, setFormNombre] = useState('');
  const [formMatricula, setFormMatricula] = useState('');
  const [formRol, setFormRol] = useState<RolSocio>('alumno');
  const [formGradoGrupo, setFormGradoGrupo] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formTelefono, setFormTelefono] = useState('');
  const [formNfcUid, setFormNfcUid] = useState('');

  const abrirNuevoSocio = () => {
    setSocioEnEdicion(null);
    setFormNombre('');
    setFormMatricula(`ALU-2026-${String(socios.length + 1).padStart(3, '0')}`);
    setFormRol('alumno');
    setFormGradoGrupo('1° A - Secundaria');
    setFormEmail('');
    setFormTelefono('');
    setFormNfcUid('');
    setModalAbierto(true);
  };

  const abrirEditarSocio = (s: Socio) => {
    setSocioEnEdicion(s);
    setFormNombre(s.nombre);
    setFormMatricula(s.matricula);
    setFormRol(s.rol);
    setFormGradoGrupo(s.gradoGrupo);
    setFormEmail(s.email);
    setFormTelefono(s.telefono || '');
    setFormNfcUid(s.nfcUid || '');
    setModalAbierto(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNombre.trim()) return;

    const socioGuardar: Socio = {
      id: socioEnEdicion ? socioEnEdicion.id : `soc-${Date.now()}`,
      matricula: formMatricula.trim(),
      nombre: formNombre.trim(),
      rol: formRol,
      gradoGrupo: formGradoGrupo.trim(),
      email: formEmail.trim() || `${formMatricula.toLowerCase()}@escuela.edu.mx`,
      telefono: formTelefono.trim() || undefined,
      nfcUid: formNfcUid.trim() || undefined,
      prestamosActivos: socioEnEdicion ? socioEnEdicion.prestamosActivos : 0,
      fechaRegistro: socioEnEdicion ? socioEnEdicion.fechaRegistro : new Date().toISOString().split('T')[0]
    };

    onGuardarSocio(socioGuardar);
    setModalAbierto(false);
  };

  const sociosFiltrados = useMemo(() => {
    return socios.filter(s => {
      const matchRol = rolSel === 'todos' || s.rol === rolSel;
      const matchBusqueda = !busqueda.trim() || (
        s.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        s.matricula.toLowerCase().includes(busqueda.toLowerCase()) ||
        s.gradoGrupo.toLowerCase().includes(busqueda.toLowerCase()) ||
        s.email.toLowerCase().includes(busqueda.toLowerCase())
      );
      return matchRol && matchBusqueda;
    });
  }, [socios, rolSel, busqueda]);

  return (
    <div className="space-y-6">
      
      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            id="input-buscar-socios"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar lector por nombre, matrícula, grado o email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-teal-500 text-sm font-medium"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setRolSel('todos')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${rolSel === 'todos' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600'}`}
            >
              Todos ({socios.length})
            </button>
            <button
              onClick={() => setRolSel('alumno')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${rolSel === 'alumno' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600'}`}
            >
              Alumnos
            </button>
            <button
              onClick={() => setRolSel('docente')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${rolSel === 'docente' ? 'bg-white text-teal-700 shadow-xs' : 'text-slate-600'}`}
            >
              Docentes
            </button>
          </div>

          <button
            onClick={abrirNuevoSocio}
            id="btn-nuevo-socio"
            className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm shadow-teal-600/20 whitespace-nowrap"
          >
            <Plus size={16} />
            <span>Registrar Lector</span>
          </button>
        </div>

      </div>

      {/* Grid de Socios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sociosFiltrados.map((s) => {
          const esDocente = s.rol === 'docente';

          return (
            <div
              key={s.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-teal-300 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm ${
                      esDocente ? 'bg-purple-50 text-purple-700 border border-purple-200' : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}>
                      {esDocente ? <Briefcase size={18} /> : <GraduationCap size={20} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{s.nombre}</h3>
                      <span className="font-mono text-[11px] text-slate-400 font-bold">{s.matricula}</span>
                    </div>
                  </div>

                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                    esDocente ? 'bg-purple-100 text-purple-700' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {s.rol}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Grado / Área:</span>
                    <span className="font-bold text-slate-800">{s.gradoGrupo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Préstamos Activos:</span>
                    <span className={`font-bold px-1.5 py-0.2 rounded ${
                      s.prestamosActivos > 0 ? 'bg-teal-100 text-teal-800' : 'text-slate-500'
                    }`}>
                      {s.prestamosActivos} libros
                    </span>
                  </div>
                  {s.email && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 truncate pt-1 border-t border-slate-200/60">
                      <Mail size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate">{s.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Acciones */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setCredencialSocio(s)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors"
                >
                  <CreditCard size={13} />
                  <span>Credencial Digital</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => abrirEditarSocio(s)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                    title="Editar datos"
                  >
                    <Edit3 size={15} />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`¿Eliminar a ${s.nombre} de la lista de socios?`)) {
                        onEliminarSocio(s.id);
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                    title="Eliminar socio"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Modal Agregar / Editar Socio */}
      {modalAbierto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {socioEnEdicion ? 'Editar Datos del Lector' : 'Registrar Nuevo Lector'}
                </h3>
                <p className="text-xs text-slate-500">Expedición de ficha y credencial para la biblioteca.</p>
              </div>
              <button onClick={() => setModalAbierto(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={formNombre}
                  onChange={(e) => setFormNombre(e.target.value)}
                  placeholder="ej. Juan Pablo Pérez Reyes"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Matrícula / ID *</label>
                  <input
                    type="text"
                    required
                    value={formMatricula}
                    onChange={(e) => setFormMatricula(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Tipo de Usuario</label>
                  <select
                    value={formRol}
                    onChange={(e) => setFormRol(e.target.value as RolSocio)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  >
                    <option value="alumno">Estudiante (Alumno)</option>
                    <option value="docente">Profesor (Docente)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Grado y Grupo / Academia</label>
                <input
                  type="text"
                  value={formGradoGrupo}
                  onChange={(e) => setFormGradoGrupo(e.target.value)}
                  placeholder="ej. 2° B Secundaria o Academia de Historia"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">UID NFC / Tarjeta (Opcional)</label>
                  <input
                    type="text"
                    value={formNfcUid}
                    onChange={(e) => setFormNfcUid(e.target.value)}
                    placeholder="04:A1:B2:C3"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-teal-500 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalAbierto(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md shadow-teal-600/20"
                >
                  {socioEnEdicion ? 'Guardar Cambios' : 'Registrar Socio'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Credencial Digital Escolar */}
      {credencialSocio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 text-center">
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700">EduPortal · Credencial Oficial</span>
              <button onClick={() => setCredencialSocio(null)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>

            {/* Tarjeta Visual de Credencial */}
            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900 text-white rounded-2xl p-5 shadow-lg relative overflow-hidden text-left mb-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/20 pb-2.5 mb-3">
                <div>
                  <h4 className="text-sm font-black tracking-tight">BIBLIOTECA ESCOLAR</h4>
                  <p className="text-[9px] text-teal-200">Sistema Automatizado NEM</p>
                </div>
                <CreditCard size={20} className="text-teal-300" />
              </div>

              <div className="flex items-center gap-3.5 my-3">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 text-xl font-black">
                  {credencialSocio.nombre.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-sm leading-tight text-white">{credencialSocio.nombre}</h5>
                  <p className="text-[11px] text-teal-200 font-medium">{credencialSocio.gradoGrupo}</p>
                  <span className="inline-block mt-1 text-[9px] uppercase font-black px-2 py-0.5 rounded bg-teal-500/30 text-teal-200 border border-teal-400/30">
                    {credencialSocio.rol}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px]">
                <div>
                  <span className="text-teal-300/80 block uppercase text-[8px] font-bold">Matrícula</span>
                  <span className="font-mono font-bold">{credencialSocio.matricula}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[9px] text-teal-200">
                  <QrCode size={18} />
                  <span>{credencialSocio.nfcUid || 'VALID-2026'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-xl shadow-sm transition-colors"
            >
              <Printer size={15} />
              <span>Imprimir Credencial Escolar</span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
