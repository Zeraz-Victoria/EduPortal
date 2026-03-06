import React, { useState, useEffect, useRef } from 'react';
import { LogOut, WifiOff, FileText, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface KioscoAppProps {
    onBack: () => void;
    onLogout: () => void;
    token: string;
}

export default function KioscoApp({ onBack, onLogout, token }: KioscoAppProps) {
    const [offline, setOffline] = useState(!navigator.onLine);
    const [isWaitMode, setIsWaitMode] = useState(true);
    const [nfcValue, setNfcValue] = useState('');
    const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    // Re-focus hidden input automatically
    useEffect(() => {
        const focusTimer = setInterval(() => {
            if (document.activeElement !== inputRef.current) {
                inputRef.current?.focus();
            }
        }, 1000);
        return () => clearInterval(focusTimer);
    }, []);

    useEffect(() => {
        const handleOnline = () => { setOffline(false); syncOfflineData(); };
        const handleOffline = () => setOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        if (navigator.onLine) syncOfflineData();

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const showMessage = (text: string, type: 'success' | 'error' | 'warning') => {
        setStatusMessage({ text, type });
        setTimeout(() => setStatusMessage(null), 4000);
    };

    const syncOfflineData = async () => {
        const scansStr = localStorage.getItem('asistencia_offline_scans');
        if (!scansStr) return;

        try {
            const scans = JSON.parse(scansStr);
            if (scans.length === 0) return;

            showMessage('Sincronizando datos...', 'warning');
            const res = await fetch('http://localhost:3002/api/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ scans })
            });

            if (res.ok) {
                localStorage.removeItem('asistencia_offline_scans');
                const data = await res.json();
                showMessage(`Sincronizados: ${data.success}, Errores: ${data.failed}`, 'success');
            }
        } catch (e) {
            console.error('Sync failed', e);
        }
    };

    const guardarOffline = (uid: string) => {
        const scans = JSON.parse(localStorage.getItem('asistencia_offline_scans') || '[]');
        scans.push({ uid, timestamp: new Date().toISOString() });
        localStorage.setItem('asistencia_offline_scans', JSON.stringify(scans));
        showMessage('Guardado en memoria (Sin internet)', 'warning');
        setOffline(true);
    };

    const handleNfcSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const uid = nfcValue.trim();
        setNfcValue('');

        if (!uid) return;

        if (!navigator.onLine) {
            guardarOffline(uid);
            return;
        }

        try {
            const res = await fetch('http://localhost:3002/api/marcar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ uid })
            });

            const data = await res.json();

            const tipo = data.status === 'success' ? 'success' :
                data.status === 'warning' ? 'warning' : 'error';

            showMessage(data.message || 'Operación completada', tipo);

            if (tipo === 'success') {
                setIsWaitMode(false);
                // Auto-revert to wait mode after 10 min of inactivity could be added here
            }

        } catch (error) {
            console.log('Fetch failed, saving offline');
            guardarOffline(uid);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white px-6 py-4 shadow-sm flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="text-slate-500 hover:text-indigo-600 font-medium text-sm transition-colors"
                    >
                        &larr; Volver
                    </button>
                    <h1 className="text-xl font-bold text-indigo-700">🏫 Quiosco de Asistencia</h1>
                </div>

                <div className="flex items-center gap-3">
                    {offline && (
                        <div className="flex items-center gap-1.5 text-orange-500 font-bold text-sm bg-orange-50 px-3 py-1.5 rounded-full">
                            <WifiOff className="w-4 h-4" /> Offline
                        </div>
                    )}
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                    >
                        <LogOut className="w-4 h-4" /> Cerrar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center p-6 relative">
                <form onSubmit={handleNfcSubmit} className="absolute inset-0 opacity-0 pointer-events-none">
                    <input
                        ref={inputRef}
                        type="text"
                        value={nfcValue}
                        onChange={(e) => setNfcValue(e.target.value)}
                        className="w-full h-full"
                        autoFocus
                    />
                </form>

                <div className={`bg-white w-full max-w-lg p-10 rounded-[2rem] shadow-xl text-center transition-all duration-500 ${isWaitMode ? 'ring-4 ring-indigo-100' : 'ring-4 ring-emerald-100'}`}>

                    <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-5xl mb-8 transition-colors duration-500 ${isWaitMode ? 'bg-indigo-50 text-indigo-600 animate-pulse' : 'bg-emerald-50 text-emerald-600'}`}>
                        {isWaitMode ? '👨‍🏫' : '👩‍🎓'}
                    </div>

                    <h2 className="text-3xl font-bold text-slate-800 mb-3">
                        {isWaitMode ? 'Esperando Lector' : 'Quiosco Activo'}
                    </h2>
                    <p className="text-slate-500 text-lg mb-8">
                        {isWaitMode
                            ? 'Por favor pasa una credencial por el lector físico para registrar la asistencia.'
                            : 'Pase las credenciales de los alumnos o docentes.'}
                    </p>

                    {statusMessage && (
                        <div className={`p-4 rounded-xl flex items-center justify-center gap-2 font-bold animate-in zoom-in-95 duration-300 ${statusMessage.type === 'success' ? 'bg-emerald-100 text-emerald-800' :
                                statusMessage.type === 'error' ? 'bg-red-100 text-red-800' :
                                    'bg-orange-100 text-orange-800'
                            }`}>
                            {statusMessage.type === 'success' && <CheckCircle className="w-5 h-5" />}
                            {statusMessage.type === 'error' && <AlertCircle className="w-5 h-5" />}
                            {statusMessage.type === 'warning' && <Info className="w-5 h-5" />}
                            {statusMessage.text}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
