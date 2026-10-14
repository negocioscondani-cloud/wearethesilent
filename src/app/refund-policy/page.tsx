'use client';

import React from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowLeft, Clock, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            TRANSPARENCIA COMERCIAL · DERECHO DE RETRACTO Y DESISTIMIENTO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Política de Reembolso, Desistimiento y Devoluciones
          </h1>
          <p className="text-sm text-zinc-400 mt-3 font-mono">
            Versión: <span className="text-amber-300 font-semibold">v1.2-2026-10</span> · Aplicable a todos los servicios y productos digitales
          </p>
        </header>

        {/* Content */}
        <div className="py-12 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Statutory Right of Withdrawal */}
          <section className="space-y-4 p-6 rounded-2xl bg-zinc-900/60 border border-amber-400/40">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">01.</span>
              Derecho Legal de Retracto y Desistimiento
            </h2>
            <p>
              En <strong className="text-white">The Silent Studio</strong> respetamos rigurosamente los derechos de los consumidores reconocidos tanto por la normativa comunitaria europea como por las legislaciones de protección al consumidor en Iberoamérica:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-black/50 border border-zinc-800 rounded-xl space-y-2">
                <span className="text-xs font-mono uppercase text-[#C5A059] font-bold tracking-wider block">
                  🇨🇴 / 🇲🇽 / LATAM · Derecho de Retracto
                </span>
                <p className="text-xs text-zinc-300">
                  Conforme al <strong>Artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor en Colombia)</strong> y regulaciones análogas de la región (como el Art. 56 de la LFPC en México), en las ventas a distancia mediante comercio electrónico, el comprador tiene derecho a retractarse dentro de los <strong className="text-amber-300">cinco (5) días hábiles</strong> siguientes a la celebración del contrato de servicios o adquisición.
                </p>
              </div>

              <div className="p-4 bg-black/50 border border-zinc-800 rounded-xl space-y-2">
                <span className="text-xs font-mono uppercase text-[#C5A059] font-bold tracking-wider block">
                  🇪🇺 Unión Europea · Derecho de Desistimiento
                </span>
                <p className="text-xs text-zinc-300">
                  De conformidad con la <strong>Directiva Europea 2011/83/UE</strong> y el Real Decreto Legislativo 1/2007 (TRLGDCU de España), los consumidores residentes en la Unión Europea disponen de un plazo legal de <strong className="text-amber-300">catorce (14) días naturales</strong> para desistir del contrato sin necesidad de justificación ni penalización.
                </p>
              </div>
            </div>
          </section>

          {/* Exceptions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">02.</span>
              Excepciones Legales al Derecho de Desistimiento
            </h2>
            <p>
              La propia ley establece excepciones estrictas y legítimas al derecho de desistimiento en determinados tipos de bienes y servicios prestados a distancia (Art. 16 Directiva 2011/83/UE y Art. 103 TRLGDCU):
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block mb-1">A) Contenido Digital Inmediato y Descargas (Art. 103.m)</strong>
                  En productos digitales descargables, ebooks, archivos de audio del Wolski Club o guías interactivas, una vez que el usuario ha solicitado la descarga inmediata o el acceso instantáneo al material y ha otorgado su consentimiento expreso previo con conocimiento de la pérdida consecuente del derecho de desistimiento, <strong className="text-zinc-200">no procederá el reembolso una vez consumido o descargado el material</strong>.
                </div>
              </div>

              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block mb-1">B) Servicios Audiovisuales Personalizados y a Medida (Art. 103.c)</strong>
                  En la producción de videos comerciales con Inteligencia Artificial, creativos UGC y clones de avatares creados a partir de directrices específicas del cliente:
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-300">
                    <li>Si el cliente solicita el retracto <strong className="text-white">antes</strong> de que el equipo inicie el proceso de generación de renders y cómputo de IA (dentro del plazo legal), se devolverá el 100% del adelanto.</li>
                    <li>Una vez iniciado el proceso de renderizado y cómputo computacional a medida, los costos de GPU, generación sintética y dirección artística ya incurridos no son reembolsables.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee of Technical Correction */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">03.</span>
              Garantía de Calidad Técnica y Revisiones Gratuitas
            </h2>
            <p>
              Aunque el servicio sea personalizado, nos comprometemos con la excelencia técnica de cada entrega:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">Dos (2) rondas de revisión incluidas:</strong> Si el creativo audiovisual presenta fallas técnicas objetivas (errores de sincronización labial, fallas de audio, errores ortográficos en subtítulos dinámicos o discrepancias con el brief aprobado), el cliente dispone de <strong className="text-white">7 días hábiles</strong> tras la entrega para solicitar las correcciones sin ningún costo extra.
              </li>
              <li>
                <strong className="text-white">Garantía de formato:</strong> Todos los videos se entregan en proporción 9:16 lista para Instagram Reels, TikTok o Meta Ads, acompañados de su respectivo copy/caption redactado.
              </li>
            </ul>
          </section>

          {/* Step by step refund process */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">04.</span>
              Procedimiento para Solicitar el Retracto o Devolución
            </h2>
            <p>
              Para ejercer su derecho de retracto de forma ágil y transparente, siga estos pasos:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-zinc-300 text-sm">
              <li>
                <strong className="text-white">Envío de la solicitud por escrito:</strong> Remita un correo a{' '}
                <a href="mailto:daniel@studioboom.online" className="text-amber-400 font-bold underline">
                  daniel@studioboom.online
                </a>{' '}
                con el asunto <span className="font-mono bg-zinc-800 px-2 py-0.5 rounded text-amber-300">«Solicitud de Retracto / Reembolso - [Nombre o ID de Pedido]»</span>.
              </li>
              <li>
                <strong className="text-white">Datos requeridos:</strong> Indique su nombre completo, correo con el que efectuó la compra, comprobante de pago o recibo digital, fecha de contratación y motivo de la solicitud.
              </li>
              <li>
                <strong className="text-white">Confirmación y acuse de recibo:</strong> Nuestro equipo legal y de soporte le responderá en un plazo máximo de <strong className="text-white">cuarenta y ocho (48) horas hábiles</strong> acusando recibo de la solicitud.
              </li>
              <li>
                <strong className="text-white">Plazo de reembolso:</strong> Verificado el cumplimiento de las condiciones legales, el reintegro del dinero se efectuará en un plazo máximo de <strong className="text-white">catorce (14) a treinta (30) días calendario</strong> a través del mismo medio de pago utilizado para la compra (Stripe, PayPal, Gumroad o transferencia bancaria), sin deducciones indebidas.
              </li>
            </ol>
          </section>

          {/* Affiliates Note */}
          <section className="space-y-3 p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs text-zinc-400">
            <h3 className="font-bold text-zinc-200 uppercase font-mono tracking-wider">
              Nota sobre Enlaces de Afiliación (El Armario de Vivienne / ShopMy / Marcas Externas)
            </h3>
            <p>
              Los productos de moda y lifestyle mostrados en <i>El Armario de Vivienne</i> son comercializados y despachados exclusivamente por las tiendas oficiales de cada marca respectiva (ej. Tory Burch, ShopMy, etc.). The Silent Studio no procesa cobros ni envíos de dichas prendas físicas. Las políticas de devolución, cambio y garantía de dichas prendas están sujetas exclusivamente a los términos de la tienda donde el usuario completó la compra final.
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
              <Link href="/cookie-policy" className="hover:text-amber-400 transition underline">
                Política de Cookies
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
