import React, { useState, useEffect } from 'react';
import { LogIn, BookOpen, AlertCircle, ArrowLeft } from 'lucide-react';
import KioscoApp from './KioscoApp';
import AdminApp from './AdminApp';

interface AsistenciaAppProps {
    onBack: () => void;
}

export default function AsistenciaApp({ onBack }: AsistenciaAppProps) {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [schoolName, setSchoolName] = useState<string>('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Check existing session
    useEffect(() => {
        const token = localStorage.getItem('asistencia_authToken');
        const userStr = localStorage.getItem('asistencia_usuario');
        const school = localStorage.getItem('asistencia_nombreEscuela');

        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                setAuthToken(token);
                setUserRole(user.rol);
                if (school) setSchoolName(school);
            } catch (e) {
                handleLogout();
            }
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;

        setLoading(true);
        setError('');

        try {
            const res = await fetch('http://localhost:3002/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Credenciales incorrectas');
            }

            localStorage.setItem('asistencia_authToken', data.token);
            localStorage.setItem('asistencia_usuario', JSON.stringify(data.usuario));
            if (data.nombre_escuela) {
                localStorage.setItem('asistencia_nombreEscuela', data.nombre_escuela);
            }

            setAuthToken(data.token);
            setUserRole(data.usuario.rol);
            setSchoolName(data.nombre_escuela || '');

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('asistencia_authToken');
        localStorage.removeItem('asistencia_usuario');
        localStorage.removeItem('asistencia_nombreEscuela');
        setAuthToken(null);
        setUserRole(null);
        setSchoolName('');
    };

    // Render Dashboard based on role
    if (authToken && userRole) {
        if (userRole === 'maestro') {
            return <KioscoApp onBack={onBack} onLogout={handleLogout} token={authToken} />;
        }
        if (userRole === 'director' || userRole === 'superadmin') {
            return <AdminApp onBack={onBack} onLogout={handleLogout} token={authToken} role={userRole} />;
        }
        // Fallback
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold">Rol no autorizado</h2>
                    <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">Cerrar Sesión</button>
                </div>
            </div>
        );
    }

    // Render Login
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative">
            <button
                onClick={onBack}
                className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-indigo-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 transition-all hover:-translate-x-1 font-medium z-10"
            >
                <ArrowLeft className="w-5 h-5" /> Volver al Portal
            </button>

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-slate-200">
                <div className="text-center mb-8">
                    <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-800">Sistema de Asistencia</h2>
                    <p className="text-slate-500 mt-2 text-sm">Ingresa tus credenciales para continuar</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="ejemplo@escuela.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                    >
                        {loading ? 'Verificando...' : <><LogIn className="w-5 h-5" /> Iniciar Sesión</>}
                    </button>
                </form>
            </div>
        </div>
    );
}
