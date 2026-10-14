'use client';

import React from 'react';
import Link from 'next/link';
import { Cookie, ArrowLeft, ShieldCheck, CheckCircle2, XCircle, Sliders } from 'lucide-react';

export default function CookiePolicyPage() {
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
            <Cookie className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            DIRECTIVA EPRIVACY (2002/58/CE) · GUÍA DE COOKIES AEPD 2024 · ART. 22.2 LSSI-CE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Política de Cookies y Tecnologías de Rastreo
          </h1>
          <p className="text-sm text-zinc-400 mt-3 font-mono">
            Versión: <span className="text-amber-300 font-semibold">v2.1-2026-10</span> · Cumplimiento auditado para consentimiento explícito
          </p>
        </header>

        {/* Content */}
        <div className="py-12 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Resolution on Legal Question */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-amber-400/40">
            <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2">
              <span className="font-mono text-base">01.</span>
              ¿Necesita este sitio web consentimiento para usar cookies?
            </h2>
            <p>
              <strong className="text-white">Sí, de forma obligatoria y previa.</strong> De acuerdo con la Directiva ePrivacy, el Artículo 22.2 de la LSSI-CE y la Guía sobre el uso de cookies de la AEPD, únicamente las cookies técnicas estrictamente necesarias para el funcionamiento de la web están exentas del consentimiento.
            </p>
            <p>
              Dado que este sitio web integra herramientas de análisis estadístico (<strong className="text-white">Google Analytics 4</strong>) y etiquetas de conversión publicitaria (<strong className="text-white">Meta Pixel</strong>), estas <strong className="text-amber-200">NO pueden activarse</strong> hasta que el usuario manifieste su consentimiento expreso, afirmativo e informado mediante nuestro banner interactivo de cookies.
            </p>
          </section>

          {/* Section 2: What is a cookie */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">02.</span>
              ¿Qué son las cookies y qué tecnologías usamos?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web guarda en su navegador u ordenador cuando usted lo visita. También utilizamos tecnologías complementarias como almacenamiento local (<span className="font-mono text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-amber-300">localStorage</span>) y píxeles de seguimiento para recordar sus preferencias de navegación y verificar la seguridad del sistema.
            </p>
          </section>

          {/* Section 3: Detailed Table of Cookies */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">03.</span>
              Inventario Completo y Clasificación de Cookies
            </h2>
            
            {/* Category A: Technical */}
            <div className="space-y-2">
              <h3 className="font-bold text-emerald-400 flex items-center gap-2 text-sm uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" /> A. Cookies Técnicas y Estrictamente Necesarias (Exentas de Consentimiento)
              </h3>
              <p className="text-xs text-zinc-400">
                Permiten la navegación segura, recordar las preferencias de idioma y almacenar la auditoría de consentimiento legal. Sin ellas la web no puede operar.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-zinc-800 rounded-lg">
                  <thead className="bg-zinc-900 text-zinc-200 font-mono">
                    <tr>
                      <th className="p-2.5 border-b border-zinc-800">Nombre / Clave</th>
                      <th className="p-2.5 border-b border-zinc-800">Titular</th>
                      <th className="p-2.5 border-b border-zinc-800">Finalidad</th>
                      <th className="p-2.5 border-b border-zinc-800">Caducidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-mono text-zinc-400">
                    <tr>
                      <td className="p-2.5 text-zinc-200">silent_cookie_consent</td>
                      <td className="p-2.5">Propia</td>
                      <td className="p-2.5">Guarda la preferencia del usuario respecto a la aceptación o rechazo de cookies</td>
                      <td className="p-2.5">12 meses</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 text-zinc-200">silent_consent_audit_log_v1</td>
                      <td className="p-2.5">Propia</td>
                      <td className="p-2.5">Registro inmutable de trazabilidad de aceptación de Términos y Privacidad (AEPD)</td>
                      <td className="p-2.5">Persistente</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 text-zinc-200">theme / language</td>
                      <td className="p-2.5">Propia</td>
                      <td className="p-2.5">Recuerda el tema visual (oscuro) y el idioma preferido (español/inglés)</td>
                      <td className="p-2.5">12 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category B: Analytics */}
            <div className="space-y-2 pt-4">
              <h3 className="font-bold text-amber-400 flex items-center gap-2 text-sm uppercase tracking-wider font-mono">
                <Sliders className="w-4 h-4" /> B. Cookies de Rendimiento y Analítica (Requieren Consentimiento)
              </h3>
              <p className="text-xs text-zinc-400">
                Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización de nuestros contenidos.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-zinc-800 rounded-lg">
                  <thead className="bg-zinc-900 text-zinc-200 font-mono">
                    <tr>
                      <th className="p-2.5 border-b border-zinc-800">Nombre</th>
                      <th className="p-2.5 border-b border-zinc-800">Proveedor</th>
                      <th className="p-2.5 border-b border-zinc-800">Finalidad</th>
                      <th className="p-2.5 border-b border-zinc-800">Caducidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-mono text-zinc-400">
                    <tr>
                      <td className="p-2.5 text-zinc-200">_ga, _ga_EZKL60C1EM</td>
                      <td className="p-2.5">Google LLC</td>
                      <td className="p-2.5">Distingue usuarios anónimos y analiza métricas de visitas en Google Analytics 4</td>
                      <td className="p-2.5">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Category C: Advertising */}
            <div className="space-y-2 pt-4">
              <h3 className="font-bold text-purple-400 flex items-center gap-2 text-sm uppercase tracking-wider font-mono">
                <Sliders className="w-4 h-4" /> C. Cookies Publicitarias y de Conversión (Requieren Consentimiento)
              </h3>
              <p className="text-xs text-zinc-400">
                Almacenan información del comportamiento de los usuarios obtenida a través de la observación de sus hábitos de navegación en redes sociales y campañas.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-zinc-800 rounded-lg">
                  <thead className="bg-zinc-900 text-zinc-200 font-mono">
                    <tr>
                      <th className="p-2.5 border-b border-zinc-800">Nombre</th>
                      <th className="p-2.5 border-b border-zinc-800">Proveedor</th>
                      <th className="p-2.5 border-b border-zinc-800">Finalidad</th>
                      <th className="p-2.5 border-b border-zinc-800">Caducidad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-mono text-zinc-400">
                    <tr>
                      <td className="p-2.5 text-zinc-200">_fbp, fr (Meta Pixel 2590059598117722)</td>
                      <td className="p-2.5">Meta Platforms Inc.</td>
                      <td className="p-2.5">Seguimiento de conversiones y atribución de campañas publicitarias en Instagram y Facebook</td>
                      <td className="p-2.5">90 días</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4: How to manage and revoke consent */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">04.</span>
              Cómo Modificar o Revocar su Consentimiento
            </h2>
            <p>
              Usted puede cambiar sus preferencias o retirar su consentimiento para cookies no técnicas en cualquier momento:
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('silent_cookie_consent');
                    window.location.reload();
                  }
                }}
                className="px-4 py-2 bg-[#C5A059] text-black font-mono text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B38F48] transition"
              >
                Restablecer y Abrir Banner de Preferencias
              </button>
            </div>
            <p className="text-xs text-zinc-400 pt-2">
              También puede deshabilitar o eliminar las cookies configurando las opciones de su navegador web (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge). Si bloquea todas las cookies, es posible que algunas funciones técnicas de la web no operen con normalidad.
            </p>
          </section>

          {/* Navigation to other legal docs */}
          <div className="pt-10 border-t border-zinc-800 flex flex-wrap gap-4 justify-between items-center text-xs font-mono text-zinc-400">
            <div className="flex flex-wrap gap-3">
              <Link href="/terms-of-service" className="hover:text-amber-400 transition underline">
                Términos y Condiciones
              </Link>
              <span>·</span>
              <Link href="/privacy-policy" className="hover:text-amber-400 transition underline">
                Política de Privacidad
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
