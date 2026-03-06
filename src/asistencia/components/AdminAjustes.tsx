import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, BellRing, Save } from 'lucide-react';

export default function AdminAjustes({ api }: { api: any }) {
    const [smsActive, setSmsActive] = useState(false);

    useEffect(() => {
        api('/api/config/sms-ausencia')
            .then((d: any) => setSmsActive(d.activo))
            .catch(() => { });
    }, [api]);

    const toggleSms = async () => {
        const newState = !smsActive;
        setSmsActive(newState);
        try {
            await api('/api/config/sms-ausencia', 'POST', { activo: newState });
        } catch (e) {
            setSmsActive(!newState); // revert
            alert("Error al guardar configuración");
        }
    };

    return (
        <div className="max-w-2xl mx-auto fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                    <SettingsIcon className="text-indigo-600" /> Configuración General
                </h2>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                            <BellRing className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Notificaciones SMS a Tutores</h3>
                            <p className="text-sm text-slate-500 mt-1 max-w-sm">Envía un mensaje de texto automáticamente cuando el alumno no se presente a la escuela o cuando registre retardo.</p>
                        </div>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
                        <input type="checkbox" className="sr-only peer" checked={smsActive} onChange={toggleSms} />
                        <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>

            </div>
        </div>
    );
}
