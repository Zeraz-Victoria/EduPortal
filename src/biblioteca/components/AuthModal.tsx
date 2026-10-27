import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  School, 
  Lock, 
  Mail, 
  User, 
  Phone, 
  Key, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { authService } from '../services/authService';
import { UsuarioSaaS } from '../types';

interface AuthModalProps {
  abierto: boolean;
  onCerrar: () => void;
  onLoginExitoso: (usuario: UsuarioSaaS) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  abierto,
  onCerrar,
  onLoginExitoso
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

  if (!abierto) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setCargando(true);

    try {
      const res = await authService.loginConAsistencia(loginIdentificador, loginPassword);
      if (res.success && res.usuario) {
        onLoginExitoso(res.usuario);
        onCerrar();
      } else {
        setErrorMsg(res.error || 'Credenciales incorrectas.');
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
        onCerrar();
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
        onCerrar();
      }
    } else {
      setErrorMsg('Clave Maestra de SuperAdmin incorrecta.');
    }
  };

  const demoLogin = async (id: string, pass: string) => {
    setLoginIdentificador(id);
    setLoginPassword(pass);
    setCargando(true);
    const res = await authService.loginConAsistencia(id, pass);
    setCargando(false);
    if (res.success && res.usuario) {
      onLoginExitoso(res.usuario);
      onCerrar();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        
        {/* Botón cerrar */}
        <button
          onClick={onCerrar}
          className="absolute right-5 top-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Encabezado */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mx-auto mb-3 shadow-xs">
            <School size={24} />
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Acceso a Biblioteca Escolar</h2>
          <p className="text-xs text-slate-500 mt-1">
            Plataforma unificada con el ecosistema de <strong className="text-blue-900">asistencia.iaparamaestros.org</strong>
          </p>
        </div>

        {/* Pestañas de Modo */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold mb-6">
          <button
            onClick={() => { setTab('login'); setErrorMsg(null); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              tab === 'login' ? 'bg-white text-blue-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LogIn size={14} />
            <span>Iniciar Sesión</span>
          </button>

          <button
            onClick={() => { setTab('registro'); setErrorMsg(null); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              tab === 'registro' ? 'bg-white text-teal-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserPlus size={14} />
            <span>Crear Escuela</span>
          </button>

          <button
            onClick={() => { setTab('superadmin'); setErrorMsg(null); }}
            className={`py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
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
                Usuario, Email o Escuela (de asistencia.iaparamaestros.org)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  required
                  value={loginIdentificador}
                  onChange={(e) => setLoginIdentificador(e.target.value)}
                  placeholder="ej. carlos.mendoza@escuela.edu.mx o usuario"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-xs font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full py-3 bg-blue-800 hover:bg-blue-900 disabled:opacity-50 text-white font-bold rounded-xl shadow-md shadow-blue-900/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {cargando ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
              <span>{cargando ? 'Validando con Servidor...' : 'Entrar a mi Biblioteca Escolar'}</span>
            </button>

            {/* Accesos rápidos de prueba */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2 text-center">
                Cuentas de demostración rápida:
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => demoLogin('carlos.mendoza@escuela.edu.mx', 'maestro123')}
                  className="flex-1 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-lg text-[11px]"
                >
                  Telesecundaria Cuauhtémoc
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('superadmin'); setMasterKey('master123'); }}
                  className="py-1.5 px-3 bg-slate-900 text-white font-bold rounded-lg text-[11px]"
                >
                  Modo SuperAdmin
                </button>
              </div>
            </div>
          </form>
        )}

        {/* 2. TAB: CREAR NUEVA ESCUELA (SAAS) */}
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
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
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
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 font-mono text-xs"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-1">Plan SaaS</label>
                <select
                  value={regPlan}
                  onChange={(e) => setRegPlan(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
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
                className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
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
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 text-xs"
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
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-teal-500 font-mono text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {cargando ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
              <span>Crear Cuenta y Espacio Aislado</span>
            </button>
          </form>
        )}

        {/* 3. TAB: SUPERADMIN (MATRIZ) */}
        {tab === 'superadmin' && (
          <form onSubmit={handleSuperAdminSubmit} className="space-y-4 text-xs font-medium">
            <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-black text-sm">
                <ShieldCheck size={18} />
                <span>Portal Maestro del Creador</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Acceso exclusivo para el administrador de la plataforma. Permite gestionar todas las escuelas dadas de alta, supervisar el uso, configurar planes y cambiar de tenant.
              </p>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Clave Maestra (Master Key)</label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="password"
                  required
                  value={masterKey}
                  onChange={(e) => setMasterKey(e.target.value)}
                  placeholder="Ingresa clave maestra (ej. master123)"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-slate-900 font-mono text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck size={16} className="text-amber-400" />
              <span>Ingresar al Portal SuperAdmin</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
