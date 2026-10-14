'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, ArrowLeft, ExternalLink, HelpCircle } from 'lucide-react';
import { CURRENT_TERMS_VERSION } from '@/lib/consent-tracker';

export default function TermsOfServicePage() {
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
            <FileText className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-2">
            DOCUMENTO LEGAL OFICIAL · THE SILENT STUDIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Términos y Condiciones de Uso y Contratación
          </h1>
          <p className="text-sm text-zinc-400 mt-3 font-mono">
            Versión: <span className="text-amber-300 font-semibold">{CURRENT_TERMS_VERSION}</span> · Última actualización: Octubre de 2026
          </p>
        </header>

        {/* Content */}
        <div className="py-12 space-y-10 text-sm sm:text-base leading-relaxed text-zinc-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">01.</span>
              Identificación del Prestador del Servicio
            </h2>
            <p>
              En cumplimiento con las directivas internacionales de comercio electrónico y la normativa de la sociedad de la información (LSSI-CE), se informa que este sitio web (<strong className="text-white">wearethesilent.com</strong>), así como las páginas asociadas de servicios, formación y marcas asociadas (incluyendo <i>El Armario de Vivienne</i> y <i>The Silent Studio</i>), son operadas y administradas por <strong className="text-white">The Silent Studio / Daniel Calderón</strong> (en adelante, «EL PRESTADOR»), con correo de contacto oficial:{' '}
              <a href="mailto:daniel@studioboom.online" className="text-amber-400 hover:underline">
                daniel@studioboom.online
              </a>.
            </p>
            <p>
              El acceso, navegación y uso de esta plataforma atribuye la condición de USUARIO, implicando la aceptación plena y sin reservas de cada una de las disposiciones aquí establecidas.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">02.</span>
              Objeto y Ámbito de los Servicios
            </h2>
            <p>
              EL PRESTADOR pone a disposición de sus clientes y usuarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">Servicios de Producción Audiovisual con IA:</strong> Creación de creativos publicitarios, videos verticales 9:16 de alta resolución con avatares o influencers virtuales, redacción de guiones y copys para redes sociales.
              </li>
              <li>
                <strong className="text-white">Productos Formativos y Digitales:</strong> Guías interactivas, ebooks (como <i>Influencer IA: de cero a tu primera venta</i>), recursos educativos descargables y audios de formación.
              </li>
              <li>
                <strong className="text-white">Universo Editorial y Recomendaciones de Estilo:</strong> La plataforma <i>El Armario de Vivienne</i> y el compañero ritual <i>El Domingo de los Números</i>.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-amber-400/30">
            <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2">
              <span className="font-mono text-base">03.</span>
              Declaración Especial: Personajes de Inteligencia Artificial (Vivienne Wolski)
            </h2>
            <p>
              El usuario reconoce y acepta de forma expresa que el personaje denominado <strong className="text-white">Vivienne Wolski</strong> es una creación de ficción desarrollada mediante sistemas de inteligencia artificial generativa, dirección artística y narrativa ficticia.
            </p>
            <p>
              Vivienne Wolski <strong className="text-amber-200">NO es una persona física</strong> ni una asesora financiera, legal o contable colegiada. Todas sus opiniones, notas de voz, textos rituales (incluyendo <i>El Domingo de los Números</i>) y reflexiones de estilo se ofrecen estrictamente con <strong className="text-white">fines de entretenimiento, desarrollo de hábitos personales y reflexión reflexiva</strong>. No sustituyen bajo ninguna circunstancia el consejo profesional de contadores públicos, abogados, asesores de inversión certificados o autoridades de salud mental.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">04.</span>
              Divulgación de Afiliación Comercial (ShopMy / Enlaces Externos)
            </h2>
            <p>
              En estricto cumplimiento con la Federal Trade Commission (FTC) y las directrices de la Unión Europea sobre prácticas comerciales desleales:
            </p>
            <p>
              <i>El Armario de Vivienne</i> participa en programas de marketing de afiliados, principalmente a través de la plataforma <strong className="text-white">ShopMy</strong>. Algunos de los enlaces que conducen a tiendas de terceros (como por ejemplo Tory Burch, tiendas de moda o plataformas asociadas) son enlaces de afiliados.
            </p>
            <p>
              Esto significa que si el usuario hace clic en uno de estos enlaces y realiza una compra en la tienda de destino, EL PRESTADOR puede percibir una comisión económica sin que esto incremente en ningún caso el precio final abonado por el usuario. EL PRESTADOR no vende directamente dichos artículos de terceros, no procesa sus pagos, no gestiona sus envíos ni asume garantías sobre los productos comercializados en plataformas externas.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">05.</span>
              Alcance de los Servicios de Video y Tarifas
            </h2>
            <p>
              En la contratación de paquetes de video (Video Individual $50 USD, Pack 10 Videos $420 USD, Pack 20 Videos $750 USD o planes a medida):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Entregables incluidos:</strong> Video vertical 9:16 en alta resolución, avatar/influencer IA con voz sintetizada o clonada acordada, subtítulos dinámicos de retención y caption/copy persuasivo para publicación.
              </li>
              <li>
                <strong className="text-white">Límites expresos de alcance:</strong> La contratación NO incluye la gestión diaria o comunitaria de redes sociales (Community Management), publicación manual, ni administración técnica o presupuestaria de pauta publicitaria en Meta Ads, Google Ads o TikTok Ads. Tales servicios requieren una cotización contractual independiente.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">06.</span>
              Precios, Pagos y Facturación
            </h2>
            <p>
              Los precios de los productos y servicios se expresan en Dólares Estadounidenses (USD) o moneda local (CRC) cuando se indique explícitamente. Las transacciones de productos digitales y suscripciones se gestionan mediante pasarelas de pago de terceros certificadas bajo el estándar PCI-DSS (como Gumroad o Stripe), garantizando el cifrado de datos bancarios.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">07.</span>
              Derecho de Desistimiento y Política de Reembolso
            </h2>
            <p>
              Conforme a la normativa de protección de los consumidores (Directiva 2011/83/UE, Real Decreto Legislativo 1/2007 de España y legislaciones concordantes de Latinoamérica):
            </p>
            <p>
              Para conocer de forma detallada los plazos (14 días naturales en la UE y 5 días hábiles en Latinoamérica), excepciones aplicables a servicios de renderizado a medida y contenido digital con acceso inmediato, consulte nuestra{' '}
              <Link href="/refund-policy" className="text-amber-400 font-semibold underline">
                Política de Reembolso y Desistimiento
              </Link>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">08.</span>
              Propiedad Intelectual e Industrial
            </h2>
            <p>
              Todos los elementos que forman parte de esta web (diseños, interfaces, códigos fuente, marcas «The Silent Studio», «El Armario de Vivienne», composiciones sonoras de la fonoteca y metodologías propietarias) son titularidad de EL PRESTADOR o se utilizan bajo licencia legítima.
            </p>
            <p>
              Las marcas registradas de terceros mencionadas (como Tory Burch, ShopMy, Instagram o Meta) pertenecen a sus respectivos legítimos propietarios y se citan únicamente con carácter descriptivo y de vinculación comercial legítima.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="font-mono text-[#C5A059] text-base">09.</span>
              Legislación Aplicable y Resolución de Disputas
            </h2>
            <p>
              Para la resolución de controversias derivadas del presente contrato o del uso del sitio web, las partes acuerdan someterse a la legislación aplicable en materia de comercio electrónico y protección de consumidores, buscando en primera instancia la conciliación amistosa a través de{' '}
              <a href="mailto:daniel@studioboom.online" className="text-amber-400 hover:underline">
                daniel@studioboom.online
              </a>.
            </p>
          </section>

        </div>

        {/* Footer Nav Links */}
        <div className="pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Política de Privacidad
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-white transition">
              Política de Cookies
            </Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:text-white transition">
              Reembolsos y Desistimiento
            </Link>
          </div>
          <div>© {new Date().getFullYear()} The Silent Studio</div>
        </div>

      </div>
    </div>
  );
}
