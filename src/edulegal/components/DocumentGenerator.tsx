import React, { useState } from "react";
import { IncidentData, AnalysisResult, RiskLevel } from "../types";
import { Copy, FileText, CheckSquare, AlertCircle, FileSpreadsheet, Mail, ShieldAlert, Award } from "lucide-react";

interface Props {
  data: IncidentData;
  analysis: AnalysisResult;
}

export const DocumentGenerator: React.FC<Props> = ({ data, analysis }) => {
  const [activeDoc, setActiveDoc] = useState<string>("acta");

  const stateName = data.state.toUpperCase();
  const isVeracruz = data.state === "Veracruz";
  const authorityHeader = isVeracruz
    ? "GOBIERNO DEL ESTADO DE VERACRUZ\nSECRETARÍA DE EDUCACIÓN DE VERACRUZ\nSUBSECRETARÍA DE EDUCACIÓN BÁSICA / MEDIA SUPERIOR"
    : `SECRETARÍA DE EDUCACIÓN DE ${stateName}`;

  const formattedLegalList = analysis.consideredDocuments.map(d => `- ${d}`).join("\n");
  const formattedMeasures = analysis.disciplinaryMeasures?.map((m, i) => `${i + 1}.- ${m.toUpperCase()}`).join("\n") || "MEDIDAS FORMATIVAS EN PROCESO DE DETERMINACIÓN.";
  const formattedAgreements = analysis.finalAgreements?.map((a, i) => `${i + 1}.- ${a.toUpperCase()}`).join("\n") || "COMPROMISOS DE RESPETO Y NO REPETICIÓN ACORDADOS.";

  // 1. ACTA OFICIAL DE HECHOS (GACETA 356 SEV)
  const getActaContent = () => `
${authorityHeader}
DIRECCIÓN GENERAL DE EDUCACIÓN
ESCUELA: __________________________________________________
CLAVE DE CENTRO DE TRABAJO (CCT): ________________________
ZONA ESCOLAR: _________  SECTOR: _________

ACTA CIRCUNSTANCIADA DE HECHOS
(FORMATO OFICIAL GACETA No. EXT. 356 / PROTOCOLOS SEV)

EN EL MUNICIPIO DE [MUNICIPIO], VERACRUZ, SIENDO LAS ${data.time} HORAS DEL DÍA ${data.date}, REUNIDOS EN EL RECINTO QUE OCUPAN LAS OFICINAS DE LA DIRECCIÓN DEL PLANTEL EDUCATIVO ANTES CITADO.

--------------------------- I. COMPARECIENTES Y TESTIGOS ---------------------------
1. POR LA AUTORIDAD EDUCATIVA: C. [NOMBRE DEL DIRECTOR/A], EN SU CALIDAD DE DIRECTOR(A) DEL PLANTEL.
2. PERSONAL REPORTANTE: C. [NOMBRE DEL DOCENTE/TESTIGO], EN SU CARÁCTER DE ${data.reporter.toUpperCase()}.
3. MADRE, PADRE O TUTOR: C. [NOMBRE DEL TUTOR/A].
4. ALUMNO(S) INVOLUCRADO(S): [NOMBRE DEL ALUMNO(A) DE IDENTIDAD PROTEGIDA].
5. TESTIGOS DE ASISTENCIA:
   - TESTIGO 1: _________________________________________________________________
   - TESTIGO 2: _________________________________________________________________

----------------------------------- II. HECHOS -----------------------------------
EL COMPARECIENTE HACE CONSTAR DE MANERA CIRCUNSTANCIADA QUE EN EL ÁREA DE ${data.location.toUpperCase()}:

"${data.description.toUpperCase()}"

INVOLUCRADOS: ${data.involvedPersons.toUpperCase()}

--------------------------- III. CLASIFICACIÓN Y FUNDAMENTO ---------------------------
ATENDIENDO A LA NATURALEZA DE LOS HECHOS, SE DETERMINA QUE LA INCIDENCIA ENCUADRA EN LA TIPOLOGÍA:
CLASIFICACIÓN: ${analysis.classification.toUpperCase()}
NIVEL DE RIESGO DETERMINADO: ${analysis.riskLevel.toUpperCase()}

FUNDAMENTACIÓN JURÍDICA APLICABLE:
- Constitución Política de los Estados Unidos Mexicanos (Arts. 1°, 3°, 4° y 31 Fracc. I).
- Protocolos Oficiales de la SEV (Gaceta Oficial No. Ext. 356 del Estado de Veracruz).
- Ley No. 303 de Prevención y Atención del Acoso Escolar para el Estado de Veracruz.
- Ley No. 573 de los Derechos de Niñas, Niños y Adolescentes del Estado de Veracruz (Art. 6).
- Código de Conducta de la SEV (Gaceta Oficial Ext. 198 del 19 de mayo de 2026).
- Ley de Responsabilidades Administrativas para el Estado de Veracruz.
${formattedLegalList}

------------------------- IV. MEDIDAS Y SANCIONES FORMATIVAS -------------------------
CON BASE EN EL PROTOCOLO OFICIAL DE LA SEV Y APLICANDO EL PRINCIPIO PRO-PERSONA Y EL INTERÉS SUPERIOR DE LA NIÑEZ, SE DICTAN LAS SIGUIENTES MEDIDAS DISCIPLINARIAS Y FORMATIVAS:

${formattedMeasures}

------------------------------ V. ACUERDOS Y APERCIBIMIENTOS ------------------------------
PRIMERO.- Se salvaguarda en todo momento la integridad física y psicoemocional de las niñas, niños y adolescentes, quedando estrictamente prohibida cualquier represalia o revictimización.
SEGUNDO.- Las partes asumen los siguientes compromisos por escrito:
${formattedAgreements}
TERCERO.- Se apercibe a las partes sobre la obligatoriedad de dar seguimiento a estos acuerdos, notificando que en caso de reincidencia o desacato se dará intervención inmediata a las instancias jurídicas competentes.

NO HABIENDO MÁS HECHOS QUE HACER CONSTAR, SE DA POR CONCLUIDA LA PRESENTE ACTA SIENDO LAS ______ HORAS DEL MISMO DÍA, FIRMANDO AL CALCE Y AL MARGEN LOS QUE EN ELLA INTERVINIERON.

_______________________________________         _______________________________________
      DIRECTOR(A) DEL PLANTEL                           DOCENTE REPORTANTE
       (Nombre, Firma y Sello)                        (Nombre y Firma)

_______________________________________         _______________________________________
      PADRE, MADRE O TUTOR                              TESTIGO DE ASISTENCIA 1
        (Nombre y Firma)                              (Nombre y Firma)

_______________________________________
        TESTIGO DE ASISTENCIA 2
          (Nombre y Firma)
`.trim();

  // 2. REPORTE INICIAL DE INCIDENCIA (BITÁCORA DOCENTE)
  const getReporteDocente = () => `
${authorityHeader}
FORMATO DE REPORTE DE INCIDENCIA INICIAL (BITÁCORA ESCOLAR)
ANEXO DE DETECCIÓN Y REGISTRO DOCENTE

1. DATOS DEL CENTRO EDUCATIVO:
ESCUELA: ____________________________________ CCT: __________________ TURNO: ________
ZONA: ________ SECTOR: _________ GRADO Y GRUPO: ______________
FECHA DEL INCIDENTE: ${data.date}   HORA EXACTA: ${data.time}
LUGAR ESPECÍFICO DEL PLANTEL: ${data.location.toUpperCase()}

2. PERSONA REPORTANTE:
NOMBRE: [NOMBRE DEL DOCENTE/PERSONAL]
FUNCIÓN/CARGO: ${data.reporter.toUpperCase()}

3. PERSONAS INVOLUCRADAS:
${data.involvedPersons.toUpperCase()}

4. NARRATIVA CRONOLÓGICA DE LOS HECHOS OBSERVADOS O MANIFESTADOS:
${data.description}

5. VALORACIÓN PRELIMINAR DEL INCIDENTE:
- TIPOLOGÍA ESTIMADA: ${analysis.classification.toUpperCase()}
- NIVEL DE RIESGO DETECTADO: ${analysis.riskLevel.toUpperCase()}

6. ACCIONES INMEDIATAS ADOPTADAS POR EL DOCENTE EN EL AULA/PATIO:
- Separación y resguardo de la probable víctima sin exponerla ni interrogarla de forma reiterada.
- Diálogo formativo inicial en privado garantizando la escucha activa.
- Registro inmediato en la Bitácora Escolar del grupo.
- Turno del caso a la Dirección Escolar para la activación del protocolo correspondiente.

FECHA DE ENTREGA A LA DIRECCIÓN: ${data.date}   HORA: ${data.time}

___________________________________________
DOCENTE / PERSONAL REPORTANTE
(Nombre y Firma)
`.trim();

  // 3. CITATORIO OFICIAL A PADRES / TUTORES
  const getCitatorioContent = () => `
${authorityHeader}
DIRECCIÓN ESCOLAR

ASUNTO: CITATORIO CON CARÁCTER DE URGENTE
EXPEDIENTE: EXP-INC/${new Date().getFullYear()}/_____
FECHA DE EXPEDICIÓN: ${new Date().toLocaleDateString()}

C. PADRE, MADRE DE FAMILIA O TUTOR LEGAL:
DEL ALUMNO(A): [NOMBRE DEL ALUMNO/A]
GRADO Y GRUPO: __________________
PRESENTE.

Por medio del presente y con fundamento en el artículo 31 fracción I de la Constitución Política de los Estados Unidos Mexicanos, los artículos 128 y 129 de la Ley General de Educación, los artículos 14 y 42 de la Ley No. 303 de Prevención y Atención del Acoso Escolar para el Estado de Veracruz, y los Protocolos Escolares de la SEV (Gaceta Oficial 356), se le solicita su PRESENTACIÓN CON CARÁCTER DE OBLIGATORIO Y URGENTE en las oficinas de esta Dirección.

DÍA DE LA CITA: __________________________________________________
HORA EXACTA:    __________________________________________________
LUGAR:          Dirección del Plantel Educativo

MOTIVO DE LA CITA:
Tratar asunto de carácter prioritario relativo a la seguridad, integridad y convivencia escolar de su hijo(a), derivado de un incidente reportado como: ${analysis.classification.toUpperCase()} (Nivel de Riesgo: ${analysis.riskLevel.toUpperCase()}).

APERCIBIMIENTO:
Se le informa que la asistencia es obligatoria en observancia al Interés Superior de la Niñez. Su inasistencia injustificada será asentada en acta administrativa y notificada a las instancias de protección de NNA para los efectos legales conducentes.

ATENTAMENTE
"CULTURA DE PAZ Y LEGALIDAD ESCOLAR"

___________________________________________
DIRECTOR(A) DEL PLANTEL EDUCATIVO
(Nombre, Firma y Sello Oficial)
`.trim();

  // 4. CARTA COMPROMISO Y ACUERDOS DE MEDIACIÓN (GACETA 356 / LEY 303)
  const getCompromisoContent = () => `
${authorityHeader}
CARTA COMPROMISO Y ACUERDOS DE CONVIVENCIA ESCOLAR
(ANEXO DE MEDIACIÓN Y CONCILIACIÓN - GACETA OFICIAL No. 356)

En las instalaciones de la Escuela _________________________________, CCT: _____________, siendo el día ${data.date}, reunidos el personal directivo, docente, la madre/padre/tutor C. _________________________________ y el alumno(a) _________________________________.

Habiéndose analizado el incidente tipificado como ${analysis.classification.toUpperCase()}, y derivado de la intervención dialógica y formativa orientada a la resolución pacífica de conflictos y restauración de la armonía escolar, las partes pactan libremente las siguientes:

CLÁUSULAS DE COMPROMISO:

PRIMERA (EL ALUMNO/A):
- Se compromete a acatar cabalmente las normas del Acuerdo Escolar de Convivencia.
- Respetar de manera irrestricta a sus compañeros y docentes, evitando cualquier agresión verbal, física o digital.
- Cumplir con las siguientes acciones formativas y restaurativas del daño:
${formattedAgreements}

SEGUNDA (LA MADRE, PADRE O TUTOR):
- Asume la corresponsabilidad en el seguimiento diario del comportamiento y tareas escolares de su hijo(a).
- Establecer comunicación semanal con el docente de grupo para verificar avances.
- Garantizar el acompañamiento y, en su caso, la atención psicológica o socioemocional que requiera el menor.

TERCERA (LA ESCUELA):
- Brindar seguimiento pedagógico y apoyo socioemocional sin estigmatizar al estudiante.
- Vigilar de forma continua los espacios comunes (recesos, pasillos y sanitarios) para prevenir cualquier situación de riesgo.

FIRMAS DE CONFORMIDAD:

___________________________________             ___________________________________
         ALUMNO(A)                                      PADRE, MADRE O TUTOR

___________________________________             ___________________________________
      DOCENTE / MEDIADOR                              DIRECTOR(A) DEL PLANTEL
`.trim();

  // 5. NOTIFICACIÓN A SUPERVISIÓN ESCOLAR (PLAZO 24H LEY 303)
  const getSupervisionContent = () => `
${authorityHeader}
DIRECCIÓN ESCOLAR

OFICIO No. SEV/ESC/${new Date().getFullYear()}/_____
ASUNTO: NOTIFICACIÓN DE INCIDENCIA EN PLANTEL (PLAZO 24 HORAS)

C. SUPERVISOR(A) ESCOLAR DE ZONA:
ZONA ESCOLAR No. ________  SECTOR: ________
PRESENTE.

En estricto cumplimiento a lo dispuesto por el artículo 14 de la Ley No. 303 de Prevención y Atención del Acoso Escolar para el Estado de Veracruz, y los Protocolos para la Identificación, Prevención e Intervención de la Secretaría de Educación de Veracruz (Gaceta Oficial No. Ext. 356), me permito informar a usted la atención del siguiente incidente registrado en este centro de trabajo:

1. FECHA Y HORA DE LOS HECHOS: ${data.date} a las ${data.time} horas.
2. LUGAR: ${data.location.toUpperCase()}
3. TIPOLOGÍA DETERMINADA: ${analysis.classification.toUpperCase()}
4. NIVEL DE RIESGO EVALUADO: ${analysis.riskLevel.toUpperCase()}
5. PERSONAS INVOLUCRADAS: ${data.involvedPersons}

SÍNTESIS DE ACCIONES INMEDIATAS ADOPTADAS POR LA DIRECCIÓN:
- Se activó el protocolo correspondiente conforme a la Gaceta Oficial 356.
- Se brindó atención y resguardo a los involucrados salvaguardando sus derechos.
- Se levantó el Acta Circunstanciada de Hechos con fecha de hoy.
- Se citó a los padres de familia para la determinación de medidas y compromisos.
${analysis.riskLevel === RiskLevel.ALTO ? "- Derivado del nivel de riesgo, se tramita oficio de canalización a la Procuraduría de Protección de NNA / Fiscalía." : "- El caso fue encauzado mediante mediación escolar y medidas formativas."}

Lo anterior se hace de su superior conocimiento dentro del término perentorio de 24 horas que marca la ley, para los efectos administrativos y de acompañamiento procedentes.

ATENTAMENTE

___________________________________________
DIRECTOR(A) DEL PLANTEL EDUCATIVO
(Nombre, Firma y Sello Oficial)
`.trim();

  // 6. OFICIO DE CANALIZACIÓN EXTERNA (DIF / FISCALÍA)
  const getCanalizacionContent = () => `
${authorityHeader}
DIRECCIÓN ESCOLAR

OFICIO No. SEV/DIR/${new Date().getFullYear()}/EXT-_____
ASUNTO: SOLICITUD DE INTERVENCIÓN URGENTE Y CANALIZACIÓN PROTECTORA

A LA PROCURADURÍA ESTATAL / MUNICIPAL DE PROTECCIÓN DE NNA (DIF VERACRUZ)
Y/O FISCALÍA GENERAL DEL ESTADO DE VERACRUZ (FGE):
P R E S E N T E .

El que suscribe, Director(a) de la Escuela [NOMBRE DEL PLANTEL], con Clave de Centro de Trabajo (CCT) [CLAVE], perteneciente a la Zona Escolar [ZONA], comparezco respetuosamente para exponer:

Que en cumplimiento a la obligación legal establecida en el artículo 120 de la Ley General de los Derechos de Niñas, Niños y Adolescentes, los artículos 6 y aplicables de la Ley No. 573 de NNA de Veracruz, y el apartado de Medidas Inmediatas de los Protocolos SEV (Gaceta Oficial No. Ext. 356), SOLICITO LA INTERVENCIÓN INSTITUCIONAL Y DICTADO DE MEDIDAS DE PROTECCIÓN respecto a los siguientes:

H E C H O S :
Con fecha ${data.date}, se tuvo conocimiento formal de un suceso clasificado como ${analysis.classification.toUpperCase()} (NIVEL DE RIESGO: ${analysis.riskLevel.toUpperCase()}), consistente en:

"${data.description}"

Personas Involucradas: ${data.involvedPersons}

PETICIONES ESPECÍFICAS:
1. Se brinde la atención y valoración médica, psicológica y de trabajo social que amerite la situación de las niñas, niños o adolescentes involucrados.
2. Se dicten las medidas cautelares o de protección conducentes para garantizar el Interés Superior de la Niñez.
3. Se oriente a esta autoridad escolar respecto a las directrices legales complementarias a seguir.

Se adjunta al presente copia certificada del Acta Circunstanciada de Hechos levantada en el plantel escolar.

ATENTAMENTE

___________________________________________
DIRECTOR(A) DEL PLANTEL EDUCATIVO
(Nombre, Firma y Sello)

c.c.p. Dirección Jurídica de la Secretaría de Educación de Veracruz (SEV).
c.c.p. Supervisión Escolar de Zona.
c.c.p. Archivo del Plantel.
`.trim();

  const renderContent = () => {
    switch (activeDoc) {
      case "acta": return getActaContent();
      case "reporte": return getReporteDocente();
      case "citatorio": return getCitatorioContent();
      case "compromiso": return getCompromisoContent();
      case "supervision": return getSupervisionContent();
      case "canalizacion": return getCanalizacionContent();
      default: return "";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(renderContent());
    alert("Formato oficial copiado al portapapeles. Listo para pegar e imprimir.");
  };

  const docsList = [
    { id: "acta", name: "1. Acta Circunstanciada SEV", desc: "Formato oficial obligatorio Gaceta 356", icon: <FileText size={16} />, highlight: true },
    { id: "reporte", name: "2. Reporte de Incidencia Inicial", desc: "Bitácora escolar del docente", icon: <FileSpreadsheet size={16} /> },
    { id: "citatorio", name: "3. Citatorio Urgente a Padres", desc: "Con apercibimiento legal Art. 31 / Ley 303", icon: <Mail size={16} /> },
    { id: "compromiso", name: "4. Carta Compromiso y Mediación", desc: "Acuerdos de convivencia y reparación", icon: <Award size={16} /> },
    { id: "supervision", name: "5. Notificación a Supervisión", desc: "Aviso obligatorio plazo 24 hrs (Ley 303)", icon: <CheckSquare size={16} /> },
    { id: "canalizacion", name: "6. Canalización DIF / Fiscalía", desc: "Para casos graves de maltrato o ASI", icon: <ShieldAlert size={16} />, isDanger: analysis.riskLevel === RiskLevel.ALTO }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">

      {/* Sidebar de Documentos Recomendados */}
      <div className="w-full lg:w-1/3 space-y-3">
        <div className="border-b border-slate-200 pb-2">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 text-base">
            <CheckSquare className="text-emerald-600" /> Formatos Oficiales SEV
          </h3>
          <p className="text-xs text-slate-500">Documentos pre-rellenados listos para firma</p>
        </div>

        <div className="flex flex-col gap-2">
          {docsList.map(doc => {
            const isActive = activeDoc === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveDoc(doc.id)}
                className={`text-left px-3.5 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all flex items-start gap-2.5 border ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm border-emerald-600"
                    : doc.isDanger
                    ? "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                    : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-slate-50"
                }`}
              >
                <div className={`mt-0.5 ${isActive ? "text-white" : doc.isDanger ? "text-red-600" : "text-emerald-600"}`}>
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold flex items-center justify-between">
                    {doc.name}
                    {doc.highlight && !isActive && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Obligatorio</span>
                    )}
                  </div>
                  <div className={`text-[11px] font-normal ${isActive ? "text-emerald-100" : "text-slate-400"}`}>
                    {doc.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-xs text-emerald-800 leading-relaxed">
          <strong>Alineación Oficial Veracruz:</strong> Todos los formatos incorporan la estructura requerida por la Gaceta Oficial 356, Ley 303 y Código de Conducta de la SEV.
        </div>
      </div>

      {/* Visor de Documento */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center">
            <span className="font-bold text-slate-700 text-xs md:text-sm tracking-wide">
              {docsList.find(d => d.id === activeDoc)?.name}
            </span>
            <button
              onClick={copyToClipboard}
              title="Copiar texto completo"
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex gap-1.5 items-center text-xs font-semibold shadow-sm"
            >
              <Copy size={14} /> Copiar Formato
            </button>
          </div>

          <div className="p-6 bg-slate-50/50 overflow-y-auto max-h-[580px]">
            <div className="font-mono text-xs whitespace-pre-wrap leading-relaxed text-slate-800 select-all p-5 bg-white border border-slate-200 rounded-lg shadow-sm">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
