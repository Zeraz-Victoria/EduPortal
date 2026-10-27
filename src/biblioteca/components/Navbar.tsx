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
    { id: 'kiosco', label: 'Modo Kiosco', icon: Sparkles, highlight: true },
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Barra Superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y Regresar */}
          <div className="flex items-center gap-3">
            <button
              onClick={onVolverPortal}
              id="btn-volver-portal"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              title="Volver a la página principal de EduPortal"
            >
              <ArrowLeft size={14} />
              <span>EduPortal</span>
            </button>

            <div className="h-6 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onCambiarTab('catalogo')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <Cloud size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                    Biblioteca<span className="text-teal-600">Cloud</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                    SaaS
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-none mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                  {escuelaActiva ? escuelaActiva.nombre : 'Gestión Bibliotecaria NEM'}
                </p>
              </div>
            </div>
          </div>

          {/* Información de Sesión SaaS & Escuela Activa */}
          <div className="flex items-center gap-3">
            
            {usuarioActivo ? (
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-1.5 pl-3 rounded-xl text-xs font-medium">
                <div className="hidden sm:block text-right">
                  <div className="flex items-center justify-end gap-1 font-bold text-slate-900 text-xs">
                    <UserCheck size={13} className="text-teal-600" />
                    <span>{usuarioActivo.nombreCompleto}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1">
                    <span className="capitalize">{usuarioActivo.rol}</span>
                    <span>·</span>
                    <span className="font-bold text-teal-700 truncate max-w-[140px]">
                      {usuarioActivo.nombreEscuela}
                    </span>
                  </div>
                </div>

                {esSuperAdmin && (
                  <button
                    onClick={() => onCambiarTab('superadmin')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase transition-colors ${
                      tabActiva === 'superadmin' ? 'bg-amber-400 text-slate-950' : 'bg-slate-900 text-white hover:bg-black'
                    }`}
                  >
                    SuperAdmin
                  </button>
                )}

                <button
                  onClick={onCerrarSesion}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Cerrar sesión"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <button
                onClick={onAbrirAuth}
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-black text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all"
              >
                <LogIn size={14} />
                <span>Iniciar Sesión / Registro SaaS</span>
              </button>
            )}

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => window.open('#/biblioteca/kiosco', '_blank')}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white text-xs font-black px-3.5 py-2 rounded-xl shadow-sm shadow-teal-500/25 transition-all"
                title="Abrir Kiosco de Autoservicio en una ventana independiente para alumnos"
              >
                <Sparkles size={14} />
                <span>Abrir Kiosco (Nueva Ventana)</span>
              </button>
            </div>
          </div>

        </div>

        {/* Barra de Navegación de Pestañas */}
        <nav className="flex space-x-1 overflow-x-auto py-2 no-scrollbar border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const esActiva = tabActiva === tab.id;
            const esTabSuperAdmin = tab.id === 'superadmin';

            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onCambiarTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  esTabSuperAdmin
                    ? (esActiva ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-900 text-amber-300 hover:bg-black')
                    : (esActiva
                        ? 'bg-teal-50 text-teal-700 border border-teal-200 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent')
                }`}
              >
                <Icon size={16} className={esTabSuperAdmin ? (esActiva ? 'text-slate-950' : 'text-amber-400') : (esActiva ? 'text-teal-600' : 'text-slate-400')} />
                <span>{tab.label}</span>

                {tab.alertBadge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-black bg-rose-500 text-white animate-pulse">
                    {tab.alertBadge}
                  </span>
                )}

                {tab.badge !== undefined && !tab.alertBadge && (
                  <span className={`ml-1 px-1.5 py-0.2 rounded-md text-[10px] font-bold ${
                    esTabSuperAdmin
                      ? (esActiva ? 'bg-slate-950 text-amber-400' : 'bg-amber-400 text-slate-950')
                      : (esActiva ? 'bg-teal-200/60 text-teal-800' : 'bg-slate-200/80 text-slate-700')
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
