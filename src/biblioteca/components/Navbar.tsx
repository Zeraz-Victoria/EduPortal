import React from 'react';
import { 
  Cloud, 
  BookOpen, 
  BookmarkCheck, 
  Monitor, 
  Users, 
  Sparkles, 
  Bot, 
  BarChart3, 
  ArrowLeft,
  ShieldCheck,
  School,
  LogIn,
  LogOut,
  UserCheck
} from 'lucide-react';
import { EstadisticasBiblioteca, UsuarioSaaS, EscuelaSaaS } from '../types';

export type TabId = 'catalogo' | 'prestamos' | 'computadoras' | 'socios' | 'kiosco' | 'ia' | 'reportes' | 'superadmin';

interface NavbarProps {
  tabActiva: TabId;
  onCambiarTab: (tab: TabId) => void;
  estadisticas: EstadisticasBiblioteca;
  onVolverPortal: () => void;
  usuarioActivo: UsuarioSaaS | null;
  escuelaActiva: EscuelaSaaS | null;
  onAbrirAuth: () => void;
  onCerrarSesion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  tabActiva,
  onCambiarTab,
  estadisticas,
  onVolverPortal,
  usuarioActivo,
  escuelaActiva,
  onAbrirAuth,
  onCerrarSesion
}) => {
  const esSuperAdmin = usuarioActivo?.esSuperAdmin || usuarioActivo?.rol === 'superadmin';

  const tabs: { id: TabId; label: string; icon: any; badge?: any; alertBadge?: any; highlight?: boolean; isSpecial?: boolean }[] = [
    { id: 'catalogo', label: 'Catálogo & Libros', icon: BookOpen, badge: estadisticas.totalTitulos },
    { 
      id: 'prestamos', 
      label: 'Préstamos', 
      icon: BookmarkCheck, 
      badge: estadisticas.prestamosActivos,
      alertBadge: estadisticas.prestamosVencidos > 0 ? estadisticas.prestamosVencidos : undefined 
    },
    { 
      id: 'computadoras', 
      label: 'Cómputo', 
      icon: Monitor, 
      badge: `${estadisticas.pcsDisponibles}/${estadisticas.totalPcs}` 
    },
    { id: 'socios', label: 'Lectores & Alumnos', icon: Users, badge: estadisticas.totalSocios },
    { id: 'ia', label: 'Bibliotecario IA', icon: Bot, isSpecial: true },
    { id: 'reportes', label: 'Reportes & Datos', icon: BarChart3 }
  ];

  if (esSuperAdmin) {
    tabs.push({
      id: 'superadmin',
      label: 'Portal SuperAdmin',
      icon: ShieldCheck,
      badge: 'MATRIZ'
    });
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-2xl border-b border-blue-950/[0.08] shadow-[0_2px_15px_-3px_rgba(15,23,42,0.05)] transition-all">
      {/* Barra Superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y Regresar */}
          <div className="flex items-center gap-3">
            <button
              onClick={onVolverPortal}
              id="btn-volver-portal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-black bg-black/[0.04] hover:bg-black/[0.08] rounded-full transition-all"
              title="Volver a la página principal de EduPortal"
            >
              <ArrowLeft size={13} />
              <span>EduPortal</span>
            </button>

            <div className="h-5 w-px bg-black/[0.08]" />

            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onCambiarTab('catalogo')}>
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-blue-950/20">
                <BookOpen size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold tracking-tight text-slate-900 leading-none">
                    Biblioteca <span className="text-blue-800 font-semibold">Escolar</span>
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-none mt-1 truncate max-w-[180px] sm:max-w-xs">
                  {escuelaActiva ? escuelaActiva.nombre : 'Gestión Escolar NEM'}
                </p>
              </div>
            </div>
          </div>

          {/* Información de Sesión SaaS & Escuela Activa */}
          <div className="flex items-center gap-2.5">
            
            {usuarioActivo ? (
              <div className="flex items-center gap-2 bg-blue-950/[0.03] border border-blue-950/[0.08] p-1.5 pl-3 rounded-full text-xs">
                <div className="hidden sm:block text-right">
                  <div className="flex items-center justify-end gap-1 font-bold text-slate-900 text-xs leading-tight">
                    <UserCheck size={13} className="text-blue-800" />
                    <span>{usuarioActivo.nombreCompleto}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1">
                    <span className="capitalize">{usuarioActivo.rol}</span>
                    <span>·</span>
                    <span className="font-semibold text-blue-800 truncate max-w-[130px]">
                      {usuarioActivo.nombreEscuela}
                    </span>
                  </div>
                </div>

                {esSuperAdmin && (
                  <button
                    onClick={() => onCambiarTab('superadmin')}
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${
                      tabActiva === 'superadmin' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-900 text-white hover:bg-black'
                    }`}
                  >
                    SuperAdmin
                  </button>
                )}

                <button
                  onClick={onCerrarSesion}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
                  title="Cerrar sesión"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <button
                onClick={onAbrirAuth}
                className="inline-flex items-center gap-1.5 bg-blue-950 hover:bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm transition-all"
              >
                <LogIn size={13} />
                <span>Ingresar</span>
              </button>
            )}

            <button
              onClick={() => window.open('#/biblioteca/kiosco', '_blank')}
              className="inline-flex items-center gap-1.5 bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm shadow-blue-900/20 transition-all"
              title="Abrir Kiosco de Autoservicio en ventana independiente para alumnos"
            >
              <Sparkles size={13} />
              <span>Abrir Kiosco</span>
            </button>
          </div>

        </div>

        {/* Barra de Navegación Segmentada estilo Apple */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 no-scrollbar border-t border-black/[0.04]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const esActiva = tabActiva === tab.id;
            const esTabSuperAdmin = tab.id === 'superadmin';

            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onCambiarTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  esTabSuperAdmin
                    ? (esActiva ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-900 text-amber-300 hover:bg-black')
                    : (esActiva
                        ? 'bg-slate-900 text-white shadow-xs scale-[1.01]'
                        : 'text-slate-600 hover:text-black hover:bg-black/[0.04]')
                }`}
              >
                <Icon size={14} className={esTabSuperAdmin ? (esActiva ? 'text-slate-950' : 'text-amber-400') : (esActiva ? 'text-blue-400' : 'text-slate-400')} />
                <span>{tab.label}</span>

                {tab.alertBadge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-500 text-white">
                    {tab.alertBadge}
                  </span>
                )}

                {tab.badge !== undefined && !tab.alertBadge && (
                  <span className={`ml-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    esTabSuperAdmin
                      ? (esActiva ? 'bg-slate-950 text-amber-400' : 'bg-amber-400 text-slate-950')
                      : (esActiva ? 'bg-white/20 text-white' : 'bg-black/[0.05] text-slate-600')
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
