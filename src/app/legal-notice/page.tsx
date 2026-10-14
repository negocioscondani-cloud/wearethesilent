'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, ArrowLeft, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function LegalNoticePage() {
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
            <Scale className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            CUMPLIMIENTO ARTÍCULO 10 LEY 34/2002 (LSSI-CE)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Aviso Legal e Información General
          </h1>
          <p className="text-sm text-zinc-400 mt-3 font-mono">
            Última actualización: Octubre de 2026 · The Silent Studio & El Armario de Vivienne
          </p>
        </header>

        {/* Content */}
        <div className="py-12 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">01.</span>
              Datos Identificativos del Titular (Art. 10 LSSI-CE)
            </h2>
            <p>
              En cumplimiento del deber de información estipulado en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular de los sitios web y subdominios bajo <strong className="text-white">wearethesilent.com</strong>:
            </p>
            <div className="bg-zinc-900/70 border border-zinc-800 p-5 rounded-xl space-y-1.5 font-mono text-xs sm:text-sm text-zinc-300">
              <p><strong className="text-white">Denominación Comercial:</strong> The Silent Studio</p>
              <p><strong className="text-white">Titular / Operador Responsable:</strong> Daniel Calderón</p>
              <p><strong className="text-white">Contacto General y Soporte:</strong> <a href="mailto:daniel@studioboom.online" className="text-amber-400 underline">daniel@studioboom.online</a></p>
              <p><strong className="text-white">Atención WhatsApp Oficial:</strong> +506 6419-4111</p>
              <p><strong className="text-white">Actividad:</strong> Dirección creativa digital, producción audiovisual mediante inteligencia artificial generativa, marketing y consultoría de marca.</p>
            </div>
          </section>

          {/* Section 2: Intellectual Property & AI Images */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-amber-400/30">
            <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2">
              <span className="font-mono text-base">02.</span>
              Propiedad Intelectual, Derechos de Imagen y Creaciones con IA
            </h2>
            <p>
              Todos los contenidos exhibidos en este sitio web (diseños, maquetación, logotipos, textos, videos verticales, efectos visuales y código fuente) están protegidos por las leyes de propiedad intelectual e industrial vigentes.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300 pt-1">
              <p>
                <strong className="text-white">A) Imágenes y Modelos Virtuales:</strong> Los personajes sintéticos y avatares, en particular la figura ficcional de <strong className="text-amber-200">Vivienne Wolski</strong>, son creaciones artísticas sintetizadas por ordenador mediante modelos de difusión y redes generativas propias o licenciadas. No reproducen la imagen, voz ni datos biométricos de ninguna persona física real sin autorización.
              </p>
              <p>
                <strong className="text-white">B) Derechos sobre el Material de Entrega a Clientes:</strong> Al contratar y abonar íntegramente los servicios de producción de videos UGC, el cliente adquiere una licencia de explotación comercial irrevocable para pautar, difundir y publicar los videos producidos en sus canales digitales oficiales (Meta Ads, TikTok, Instagram, YouTube). The Silent Studio se reserva el derecho de exhibir muestras en su portafolio profesional con fines demostrativos de calidad artística.
              </p>
              <p>
                <strong className="text-white">C) Marcas de Terceros y Afiliación de Moda:</strong> Las marcas comerciales mencionadas en el catálogo de <i>El Armario de Vivienne</i> (como Tory Burch, Chanel u otras) pertenecen a sus respectivos titulares. Su inclusión obedece a fines editoriales de recomendación de estilo y redirección mediante enlaces comerciales de afiliados en ShopMy.
              </p>
            </div>
          </section>

          {/* Section 3: Links and Disclaimers */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">03.</span>
              Exención de Responsabilidad por Enlaces Externos
            </h2>
            <p>
              El sitio web contiene hipervínculos hacia plataformas de terceros (como ShopMy, Instagram, Gumroad, Stripe, WhatsApp y tiendas oficiales de comercio electrónico).
            </p>
            <p>
              EL PRESTADOR no ejerce ningún control sobre el contenido, políticas de privacidad ni prácticas comerciales de dichos sitios web externos y declina cualquier responsabilidad por daños derivados de transacciones realizadas fuera de nuestro dominio.
            </p>
          </section>

          {/* Section 4: AI & Advisory Disclaimer */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">04.</span>
              Descargo de Responsabilidad Profesional y Financiera
            </h2>
            <p>
              Los contenidos formativos, notas reflexivas y productos como <i>El Domingo de los Números</i> o los audios del <i>Wolski Club</i> se difunden con una finalidad estrictamente formativa, motivacional y de desarrollo de criterios personales.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm">
              En ningún caso deben considerarse una recomendación de inversión personalizada, asesoramiento contable, fiscal o de intermediación financiera. Cualquier decisión económica tomada por el usuario es bajo su exclusiva y entera responsabilidad.
            </p>
          </section>

          {/* Section 5: Applicable Law */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">05.</span>
              Legislación Aplicable y Resolución de Controversias
            </h2>
            <p>
              Las relaciones entre EL PRESTADOR y los usuarios se regirán por los principios de la buena fe contractual, los estándares internacionales del comercio electrónico y la legislación española y comunitaria aplicable en materia de sociedad de la información y protección de consumidores.
            </p>
            <p>
              En caso de cualquier discrepancia, las partes se comprometen a buscar prioritariamente una solución amistosa y extrajudicial enviando una notificación previa a <a href="mailto:daniel@studioboom.online" className="text-amber-400 underline">daniel@studioboom.online</a> antes de acudir a instancias arbitrales o judiciales.
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
              <Link href="/refund-policy" className="hover:text-amber-400 transition underline">
                Política de Reembolso
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
