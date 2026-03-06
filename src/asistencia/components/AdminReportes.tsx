import React, { useState, useEffect } from 'react';
import { Download, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdminReportes({ token }: { token: string }) {
    const [clases, setClases] = useState<any[]>([]);
    const [mes, setMes] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM
    const [claseId, setClaseId] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState<{ texto: string; tipo: 'exito' | 'error' } | null>(null);

    useEffect(() => {
        fetch('http://localhost:3002/api/gestion/clases', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => Array.isArray(data) ? setClases(data) : null)
            .catch(err => console.error(err));
    }, [token]);

    const showMensaje = (texto: string, tipo: 'exito' | 'error') => {
        setMensaje({ texto, tipo });
        setTimeout(() => setMensaje(null), 4000);
    };

    const handleDescarga = async (tipo: 'detallado' | 'docente') => {
        if (!mes) return showMensaje("Selecciona un mes.", 'error');
        if (tipo !== 'docente' && !claseId) return showMensaje("Selecciona un grupo.", 'error');

        setLoading(true);
        try {
            const url = tipo === 'docente'
                ? `http://localhost:3002/api/reporte/docentes?mes=${mes}`
                : `http://localhost:3002/api/reporte/pdf_detallado?mes=${mes}&clase_id=${claseId}`;

            const res = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Error al generar reporte.");
            }

            const blob = await res.blob();
            const objUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = objUrl;
            a.download = `reporte_${tipo}_${mes}.pdf`;
            a.click();
            showMensaje('Reporte descargado con éxito.', 'exito');
        } catch (e: any) {
            showMensaje(e.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <FileText className="text-indigo-600" /> Centro de Reportes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mes del Reporte</label>
                        <input
                            type="month"
                            value={mes}
                            onChange={e => setMes(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Grupo Objetivo</label>
                        <select
                            value={claseId}
                            onChange={e => setClaseId(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                        >
                            <option value="">-- Seleccionar Clase --</option>
                            {clases.map(c => (
                                <option key={c.id} value={c.id}>{c.nombre_grado} '{c.nombre_grupo}'</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-4 max-w-sm mx-auto">
                    <button
                        onClick={() => handleDescarga('detallado')}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-50"
                    >
                        <Download size={20} /> Detallado Alumnos (PDF)
                    </button>
                    <button
                        onClick={() => handleDescarga('docente')}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all disabled:opacity-50"
                    >
                        <Download size={20} /> Reporte Docentes (PDF)
                    </button>
                </div>

                {mensaje && (
                    <div className={`mt-6 p-4 rounded-xl flex items-center justify-center gap-2 font-medium animate-in zoom-in ${mensaje.tipo === 'exito' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                        {mensaje.tipo === 'exito' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        {mensaje.texto}
                    </div>
                )}
            </div>
        </div>
    );
}
