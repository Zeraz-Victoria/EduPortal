import React, { useState } from 'react';
import { 
  Cloud, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  School, 
  Lock, 
  Mail, 
  User, 
  Key, 
  Loader2, 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Monitor,
  BookmarkCheck,
  Users
} from 'lucide-react';
import { authService } from '../services/authService';
import { UsuarioSaaS } from '../types';

interface LoginScreenProps {
  onLoginExitoso: (usuario: UsuarioSaaS) => void;
  onVolverPortal: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginExitoso,
  onVolverPortal
}) => {
  const [tab, setTab] = useState<'login' | 'registro' | 'superadmin'>('login');
  const [cargando, setCargando] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form Login
  const [loginIdentificador, setLoginIdentificador] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Form Registro
  const [regEscuela, setRegEscuela] = useState('');
  const [regCct, setRegCct] = useState('');
  const [regDirector, setRegDirector] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regTelefono, setRegTelefono] = useState('');
  const [regPlan, setRegPlan] = useState<'prueba' | 'basico' | 'pro' | 'institucional'>('pro');

  // Form SuperAdmin
  const [masterKey, setMasterKey] = useState('');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setCargando(true);

    try {
      const res = await authService.loginConAsistencia(loginIdentificador, loginPassword);
      if (res.success && res.usuario) {
        onLoginExitoso(res.usuario);
      } else {
        setErrorMsg(res.error || 'Credenciales incorrectas o escuela no encontrada.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error al conectar con el servidor.');
    } finally {
      setCargando(false);
    }
  };

  const handleRegistroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setCargando(true);

    try {
      const res = await authService.crearNuevaEscuelaSaaS({
        nombreEscuela: regEscuela,
        claveCct: regCct,
        nombreDirector: regDirector,
        email: regEmail,
        password: regPassword,
        telefono: regTelefono,
        plan: regPlan
      });

      if (res.success && res.usuario) {
        onLoginExitoso(res.usuario);
      } else {
        setErrorMsg(res.error || 'No se pudo crear la escuela.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error en el registro.');
    } finally {
      setCargando(false);
    }
  };

  const handleSuperAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const ok = authService.loginSuperAdminMaster(masterKey);
    if (ok) {
      const sesion = authService.getSesion();
      if (sesion) {
        onLoginExitoso(sesion);
      }
    } else {
      setErrorMsg('Clave Maestra de SuperAdmin incorrecta.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-teal-500 selection:text-white">
      
      {/* Barra Superior */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onVolverPortal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Volver a EduPortal</span>
            </button>

            <div className="h-6 w-px bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-blue-950/20">
                <BookOpen size={18} className="stroke-[2.2]" />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-slate-900 leading-none">
                  Biblioteca <span className="text-blue-800">Escolar</span>
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Ecosistema integrado con <strong className="text-blue-900">asistencia.iaparamaestros.org</strong>
          </div>
        </div>
      </header>

      {/* Contenido Central: Formulario de Acceso */}
      <main className="max-w-lg w-full mx-auto px-4 py-10 flex-1 flex flex-col justify-center">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 relative overflow-hidden">
          
          {/* Encabezado */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-3 shadow-xs border border-teal-100">
              <School size={28} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Acceso a tu Biblioteca Escolar</h1>
            <p className="text-xs text-slate-500 mt-1">
              Ingresa con tus credenciales institucionales o registra tu plantel.
            </p>
          </div>

          {/* Selector de Pestañas */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold mb-6">
            <button
              onClick={() => { setTab('login'); setErrorMsg(null); }}
              className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                tab === 'login' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LogIn size={14} />
              <span>Iniciar Sesión</span>
            </button>

            <button
              onClick={() => { setTab('registro'); setErrorMsg(null); }}
              className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                tab === 'registro' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserPlus size={14} />
              <span>Crear Escuela</span>
            </button>

            <button
              onClick={() => { setTab('superadmin'); setErrorMsg(null); }}
              className={`py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                tab === 'superadmin' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck size={14} />
              <span>SuperAdmin</span>
            </button>
          </div>

          {/* Alerta de Error */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. TAB: INICIAR SESIÓN */}
          {tab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Usuario o Correo de asistencia.iaparamaestros.org
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    required
                    value={loginIdentificador}
                    onChange={(e) => setLoginIdentificador(e.target.value)}
                    placeholder="ej. tu_usuario o correo@escuela.edu.mx"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="w-full py-3.5 bg-blue-800 hover:bg-blue-900 disabled:opacity-50 text-white font-black text-xs rounded-xl shadow-md shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
              >
                {cargando ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
                <span>{cargando ? 'Validando con Servidor...' : 'Ingresar a mi Biblioteca'}</span>
              </button>

              <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100 text-[11px] text-teal-800 leading-relaxed">
                💡 <strong>Cuenta unificada:</strong> Si ya tienes cuenta en <em>asistencia.iaparamaestros.org</em>, usa tus mismas credenciales para acceder automáticamente a los datos de tu escuela.
              </div>
            </form>
          )}

          {/* 2. TAB: CREAR NUEVA ESCUELA */}
          {tab === 'registro' && (
            <form onSubmit={handleRegistroSubmit} className="space-y-3.5 text-xs font-medium">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Nombre Oficial de la Escuela *</label>
                <input
                  type="text"
                  required
                  value={regEscuela}
                  onChange={(e) => setRegEscuela(e.target.value)}
                  placeholder="ej. Telesecundaria Emiliano Zapata"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Clave CCT (Opcional)</label>
                  <input
                    type="text"
                    value={regCct}
                    onChange={(e) => setRegCct(e.target.value)}
                    placeholder="ej. 30ETV0451A"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Plan de Suscripción</label>
                  <select
                    value={regPlan}
                    onChange={(e) => setRegPlan(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
                  >
                    <option value="prueba">Prueba Gratuita (30 Días)</option>
                    <option value="basico">Plan Básico ($299/mes)</option>
                    <option value="pro">Plan Pro NEM ($1,499/año)</option>
                    <option value="institucional">Institucional Ilimitado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Nombre del Director o Encargado *</label>
                <input
                  type="text"
                  required
                  value={regDirector}
                  onChange={(e) => setRegDirector(e.target.value)}
                  placeholder="ej. Prof. Armando Morales"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Correo Electrónico *</label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="direccion@escuela.edu.mx"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Contraseña *</label>
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 font-mono text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={cargando}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-black text-xs rounded-xl shadow-md shadow-teal-600/25 transition-all flex items-center justify-center gap-2 mt-2"
              >
                {cargando ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
                <span>Crear Cuenta y Espacio Aislado</span>
              </button>
            </form>
          )}

          {/* 3. TAB: SUPERADMIN */}
          {tab === 'superadmin' && (
            <form onSubmit={handleSuperAdminSubmit} className="space-y-4 text-xs font-medium">
              <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                  <ShieldCheck size={18} />
                  <span>Portal Maestro del Creador (SaaS)</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Ingreso para supervisar planteles escolares registrados, métricas globales de préstamos y switch de tenant.
                </p>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Clave Maestra (Master Key)</label>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="password"
                    required
                    value={masterKey}
                    onChange={(e) => setMasterKey(e.target.value)}
                    placeholder="Clave maestra (ej. master123)"
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 focus:border-slate-900 font-mono text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-black text-white font-black text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} className="text-amber-400" />
                <span>Ingresar al Portal SuperAdmin</span>
              </button>
            </form>
          )}

        </div>
      </main>

      {/* Footer Informativo */}
      <footer className="max-w-4xl mx-auto px-4 py-8 text-center text-xs text-slate-400">
        <p>Biblioteca Escolar · Ecosistema de Inteligencia Artificial para la Educación Mexicana</p>
      </footer>

    </div>
  );
};
