import React from "react";
import { AnalysisResult } from "../types";
import { UserCheck, Shield, GraduationCap, Users } from "lucide-react";

interface Props {
  analysis: AnalysisResult;
}

export const ActionPlan: React.FC<Props> = ({ analysis }) => {
  const getRoleTheme = (role: string) => {
    const r = role.toLowerCase();
    if (r.includes("docente") || r.includes("maestro")) {
      return {
        icon: <GraduationCap className="text-blue-600" size={24} />,
        badge: "bg-blue-100 text-blue-800 border-blue-200",
        border: "border-blue-100 hover:border-blue-300",
        label: "Responsabilidad Pedagógica y de Contención"
      };
    }
    if (r.includes("director") || r.includes("autoridad")) {
      return {
        icon: <Shield className="text-purple-600" size={24} />,
        badge: "bg-purple-100 text-purple-800 border-purple-200",
        border: "border-purple-100 hover:border-purple-300",
        label: "Activación Institucional, Notificación y Legalidad"
      };
    }
    if (r.includes("padre") || r.includes("tutor") || r.includes("madre")) {
      return {
        icon: <Users className="text-amber-600" size={24} />,
        badge: "bg-amber-100 text-amber-800 border-amber-200",
        border: "border-amber-100 hover:border-amber-300",
        label: "Corresponsabilidad Familiar y Acuerdos de Hogar"
      };
    }
    if (r.includes("alumno") || r.includes("estudiante")) {
      return {
        icon: <UserCheck className="text-emerald-600" size={24} />,
        badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
        border: "border-emerald-100 hover:border-emerald-300",
        label: "Medidas Formativas, Mediación y Convivencia"
      };
    }
    return {
      icon: <UserCheck className="text-slate-600" size={24} />,
      badge: "bg-slate-100 text-slate-800 border-slate-200",
      border: "border-slate-100 hover:border-slate-300",
      label: "Intervención de Apoyo"
    };
  };

  // Agrupar acciones por rol
  const groupedPlan = analysis.actionPlan.reduce((acc, current) => {
    const existing = acc.find(item => item.role.toLowerCase() === current.role.toLowerCase());
    if (existing) {
      existing.actions = [...existing.actions, ...current.actions];
    } else {
      acc.push({ ...current });
    }
    return acc;
  }, [] as typeof analysis.actionPlan);

  // Formatear citas legales (Doc: ..., Art: ...)
  const formatAction = (text: string) => {
    const regex = /\(Doc:.*?, Art:.*?\)/g;
    const parts = text.split(regex);
    const matches = text.match(regex);

    if (!matches) return <span>{text}</span>;

    return (
      <span>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {matches[i] && (
              <span className="legal-cite ml-1 inline-block font-medium text-xs bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                {matches[i]}
              </span>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groupedPlan.map((step, idx) => {
          const theme = getRoleTheme(step.role);
          return (
            <div key={idx} className={`bg-white rounded-xl p-6 shadow-sm border ${theme.border} transition-all hover:shadow-md`}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 rounded-lg">
                    {theme.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{step.role}</h3>
                    <p className="text-xs text-slate-400">{theme.label}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${theme.badge}`}>
                  Rol Oficial
                </span>
              </div>
              <ul className="space-y-3.5">
                {step.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                    <span className="min-w-[8px] h-[8px] rounded-full bg-emerald-500 mt-1.5 shadow-sm shadow-emerald-200 flex-shrink-0"></span>
                    <span className="flex-1">{formatAction(action)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Sección explícita de Sanciones y Medidas Disciplinarias Formativas */}
      {analysis.disciplinaryMeasures && analysis.disciplinaryMeasures.length > 0 && (
        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-6">
          <h4 className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
            ⚖️ Medidas Formativas, Sanciones y Consecuencias Jurídicas Oficiales
          </h4>
          <p className="text-xs text-amber-700 mb-4">
            Determinadas con base en la Ley 303 de Veracruz, el Código de Conducta de la SEV 2026, la Gaceta Oficial 356 y la Ley de Responsabilidades Administrativas:
          </p>
          <ul className="space-y-2.5">
            {analysis.disciplinaryMeasures.map((measure, i) => (
              <li key={i} className="text-xs md:text-sm text-amber-900 flex items-start gap-2.5 bg-white/70 p-3 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 min-w-[20px]">{i + 1}.</span>
                <span>{measure}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
