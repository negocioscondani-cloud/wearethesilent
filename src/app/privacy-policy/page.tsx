'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { CURRENT_PRIVACY_VERSION } from '@/lib/consent-tracker';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#C5A059] selection:text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-[#C5A059] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* Header */}
        <header className="text-center pb-12 border-b border-zinc-800">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg shadow-amber-950/20">
            <Lock className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            CONFORMIDAD RGPD (UE 2016/679) · LOPDGDD 3/2018 · AEPD
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Política de Privacidad y Tratamiento de Datos
          </h1>
          <p className="text-sm text-zinc-400 mt-3 font-mono">
            Versión: <span className="text-amber-300 font-semibold">{CURRENT_PRIVACY_VERSION}</span> · Última actualización: Octubre de 2026
          </p>
        </header>

        {/* Content */}
        <div className="py-12 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Section 1: Data Controller */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">01.</span>
              Responsable del Tratamiento de sus Datos
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en los sitios web <strong className="text-white">wearethesilent.com</strong> y sus subpáginas y marcas vinculadas (incluyendo <i>The Silent Studio</i>, <i>El Armario de Vivienne</i> y <i>El Domingo de los Números</i>) es:
            </p>
            <div className="bg-zinc-900/70 border border-zinc-800 p-5 rounded-xl space-y-1.5 font-mono text-xs sm:text-sm text-zinc-300">
              <p><strong className="text-white">Titular / Denominación:</strong> Daniel Calderón / The Silent Studio</p>
              <p><strong className="text-white">Sitio Web:</strong> https://wearethesilent.com</p>
              <p><strong className="text-white">Correo electrónico de contacto DPO / Privacidad:</strong> <a href="mailto:daniel@studioboom.online" className="text-amber-400 underline">daniel@studioboom.online</a></p>
              <p><strong className="text-white">Actividad:</strong> Dirección creativa, producción audiovisual con inteligencia artificial y formación digital.</p>
            </div>
          </section>

          {/* Section 2: Data Minimization */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-amber-400/30">
            <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2">
              <span className="font-mono text-base">02.</span>
              Principio de Minimización de Datos (Strict Data Minimization)
            </h2>
            <p>
              En estricto cumplimiento del <strong>Artículo 5.1.c del RGPD</strong>, únicamente solicitamos y procesamos los datos estrictamente necesarios, pertinentes y limitados para cumplir la finalidad solicitada:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-300">
              <li><strong className="text-white">Formularios de contratación y cotización:</strong> Nombre comercial/contacto, correo electrónico y número de WhatsApp (indispensable para coordinar briefs y aprobaciones de video).</li>
              <li><strong className="text-white">Compras y suscripciones:</strong> Datos de facturación procesados directamente por pasarelas seguras (Stripe, PayPal, Gumroad); nosotros <strong className="text-white">nunca almacenamos los datos de su tarjeta de crédito o débito</strong>.</li>
              <li><strong className="text-white">No recabamos categorías especiales de datos</strong> (datos sensibles como origen étnico, salud, convicciones religiosas o datos biométricos de identificación personal masiva).</li>
            </ul>
          </section>

          {/* Section 3: Legal Basis */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">03.</span>
              Base Legal y Finalidades del Tratamiento
            </h2>
            <p>
              Tratamos sus datos personales bajo las siguientes bases de legitimación reconocidas por el Artículo 6 del RGPD:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Consentimiento Expreso (Art. 6.1.a)
                </h3>
                <p className="text-xs text-zinc-400">
                  Otorgado de forma libre, inequívoca y afirmativa mediante casillas desmarcadas por defecto para el envío de consultas, presupuestos o suscripciones a listas informativas.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ejecución de Contrato (Art. 6.1.b)
                </h3>
                <p className="text-xs text-zinc-400">
                  Necesario para prestar el servicio audiovisual contratado, generar creativos con IA, entregar videos con sus captions y coordinar revisiones técnicas.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Cumplimiento Legal (Art. 6.1.c)
                </h3>
                <p className="text-xs text-zinc-400">
                  Emisión de comprobantes fiscales, cumplimiento tributario y respuesta a requerimientos de autoridades judiciales o administrativas.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Interés Legítimo (Art. 6.1.f)
                </h3>
                <p className="text-xs text-zinc-400">
                  Prevención del fraude informático, seguridad del servidor, protección contra ataques de denegación de servicio (DDoS) y mejora continua de la experiencia de usuario.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Traceable Consent Log */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/70 border border-amber-400/40">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">04.</span>
              Registro de Trazabilidad y Prueba del Consentimiento (Audit-Ready AEPD)
            </h2>
            <p>
              En observancia del <strong>principio de responsabilidad proactiva (Accountability - Art. 5.2 y Art. 7.1 RGPD)</strong>, este sitio web implementa un sistema digital de trazabilidad que almacena un registro inmutable en el momento en que usted marca de forma individual cada casilla de aceptación:
            </p>
            <div className="bg-black/60 p-4 rounded-lg font-mono text-xs text-zinc-300 space-y-1">
              <p className="text-[#C5A059] font-bold">// Parámetros registrados de forma probatoria ante la autoridad de control:</p>
              <p>• Identificador único de consentimiento (UUID criptográfico v4)</p>
              <p>• Marca de tiempo exacta ISO 8601 y timestamp epoch</p>
              <p>• Formulario de origen (URL y paso del proceso)</p>
              <p>• Versión exacta de los Términos y Condiciones aceptada ({CURRENT_PRIVACY_VERSION})</p>
              <p>• Versión exacta de la Política de Privacidad aceptada ({CURRENT_PRIVACY_VERSION})</p>
              <p>• Identificador del suscriptor (hash o correo suministrado)</p>
              <p>• Agente de usuario (Navegador, SO y resolución de pantalla sin almacenar datos biométricos)</p>
            </div>
            <p className="text-xs text-zinc-400">
              Dicho registro constituye prueba documental válida ante la AEPD u otros órganos de supervisión de que el consentimiento fue otorgado de manera previa, libre, específica, informada e inequívoca.
            </p>
          </section>

          {/* Section 5: Third-party Processors */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">05.</span>
              Destinatarios y Encargados de Tratamiento (Terceros)
            </h2>
            <p>
              Para prestar adecuadamente nuestros servicios y garantizar la funcionalidad técnica de la plataforma, compartimos datos estrictamente con los siguientes proveedores con acuerdos de encargo de tratamiento (DPA):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-zinc-800 rounded-lg">
                <thead className="bg-zinc-900 text-zinc-200 uppercase font-mono">
                  <tr>
                    <th className="p-3 border-b border-zinc-800">Proveedor</th>
                    <th className="p-3 border-b border-zinc-800">Finalidad</th>
                    <th className="p-3 border-b border-zinc-800">Ubicación / Garantía</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 font-mono text-zinc-400">
                  <tr>
                    <td className="p-3 font-bold text-zinc-200">Hostinger International Ltd.</td>
                    <td className="p-3">Alojamiento de servidores y recursos CDN</td>
                    <td className="p-3">Unión Europea (RGPD)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-zinc-200">Gumroad Inc.</td>
                    <td className="p-3">Checkout seguro de membresías del Wolski Club y audios</td>
                    <td className="p-3">EE. UU. (Cláusulas Contractuales Tipo)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-zinc-200">Meta Platforms Ireland Ltd.</td>
                    <td className="p-3">Canal de mensajería comercial (WhatsApp Business) y Meta Pixel</td>
                    <td className="p-3">Irlanda / EE. UU. (DPF / SCC)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-zinc-200">Google LLC (Alphabet)</td>
                    <td className="p-3">Analítica web (Google Analytics 4) y tipografías web</td>
                    <td className="p-3">EE. UU. / UE (EU-US Data Privacy Framework)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-zinc-200">ShopMy (ShopStyle Inc.)</td>
                    <td className="p-3">Plataforma de enlaces de afiliados de moda y estilo</td>
                    <td className="p-3">EE. UU. (Solo redirección mediante enlace saliente)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Data Retention */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">06.</span>
              Plazo de Conservación de sus Datos
            </h2>
            <p>
              Sus datos se conservarán durante el tiempo estrictamente necesario para la finalidad con que fueron recabados:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-300">
              <li><strong className="text-white">Consultas y leads no contratados:</strong> Máximo 12 meses desde la última interacción, tras lo cual se cancelan o anonimizan.</li>
              <li><strong className="text-white">Clientes con servicios contratados:</strong> Durante la vigencia de la relación comercial y, posteriormente, durante los plazos legalmente exigidos por la legislación mercantil y tributaria aplicable (habitualmente entre 4 y 5 años).</li>
              <li><strong className="text-white">Registros de consentimiento y auditoría:</strong> Se conservan durante el plazo de prescripción de infracciones en materia de protección de datos (3 años según la LOPDGDD).</li>
            </ul>
          </section>

          {/* Section 7: User Rights (ARCO-POL) */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">07.</span>
              Derechos del Usuario (Acceso, Rectificación, Supresión, Limitación, Portabilidad y Oposición)
            </h2>
            <p>
              Usted tiene pleno derecho en cualquier momento y de forma gratuita a:
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Acceso</strong>
                Conocer qué datos personales suyos tenemos y cómo se procesan.
              </div>
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Rectificación</strong>
                Solicitar la corrección de datos inexactos o desactualizados.
              </div>
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Supresión («Olvido»)</strong>
                Solicitar la eliminación de sus datos cuando ya no sean necesarios.
              </div>
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Oposición</strong>
                Oponerse al tratamiento con fines publicitarios o de prospección.
              </div>
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Limitación</strong>
                Solicitar la limitación temporal del tratamiento en los casos legales.
              </div>
              <div className="p-3 bg-black/40 rounded border border-zinc-800">
                <strong className="text-amber-300 block mb-1">Portabilidad</strong>
                Recibir sus datos en formato estructurado de lectura mecánica.
              </div>
            </div>
            <p className="pt-2">
              Para ejercer cualquiera de estos derechos, basta enviar un correo electrónico con el asunto <strong className="text-white">«Ejercicio de Derechos RGPD»</strong> a:{' '}
              <a href="mailto:daniel@studioboom.online" className="text-amber-400 font-bold underline">
                daniel@studioboom.online
              </a>, acreditando su identidad (copia de documento identificativo) y especificando el derecho que desea ejercer. Responderemos en un plazo máximo de un (1) mes calendario.
            </p>
          </section>

          {/* Section 8: Complaint before Supervisory Authority */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">08.</span>
              Derecho a Reclamar ante la Autoridad de Control
            </h2>
            <p>
              Si considera que el tratamiento de sus datos personales infringe la normativa aplicable o si no ha obtenido satisfacción plena en el ejercicio de sus derechos, tiene el derecho legítimo a presentar una reclamación ante la autoridad de control competente:
            </p>
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg text-xs space-y-1">
              <p className="font-bold text-white">Agencia Española de Protección de Datos (AEPD)</p>
              <p>Sede electrónica: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">https://www.aepd.es</a></p>
              <p>Dirección postal: C/ Jorge Juan, 6, 28001 Madrid, España.</p>
              <p className="text-zinc-400 pt-1">O ante la autoridad de protección de datos de su país de residencia dentro de la Unión Europea o América Latina.</p>
            </div>
          </section>

          {/* Section 9: Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">09.</span>
              Medidas de Seguridad Técnicas y Organizativas
            </h2>
            <p>
              EL PRESTADOR adopta las medidas de seguridad de índole técnica y organizativa necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, incluyendo cifrado HTTPS/TLS, cortafuegos de aplicaciones y control estricto de accesos.
            </p>
          </section>

          {/* Navigation to other legal docs */}
          <div className="pt-10 border-t border-zinc-800 flex flex-wrap gap-4 justify-between items-center text-xs font-mono text-zinc-400">
            <div className="flex flex-wrap gap-3">
              <Link href="/terms-of-service" className="hover:text-amber-400 transition underline">
                Términos y Condiciones
              </Link>
              <span>·</span>
              <Link href="/cookie-policy" className="hover:text-amber-400 transition underline">
                Política de Cookies
              </Link>
              <span>·</span>
              <Link href="/refund-policy" className="hover:text-amber-400 transition underline">
                Política de Reembolso
              </Link>
              <span>·</span>
              <Link href="/legal-notice" className="hover:text-amber-400 transition underline">
                Aviso Legal LSSI-CE
              </Link>
            </div>
            <div>
              <span>© {new Date().getFullYear()} The Silent Studio</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
