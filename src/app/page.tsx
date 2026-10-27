'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { LuxuryHeroBackdrop } from '@/components/ui/luxury-hero-backdrop';
import { VideoRouletteShowcase } from '@/components/ui/video-roulette-showcase';
import { ArrowUpRight, Check, Globe } from 'lucide-react';

const WHATSAPP_NUM = '50664194111';

const TRANSLATIONS = {
  es: {
    nav: {
      videos: 'Videos',
      service: 'El Servicio',
      guide: 'La Guía $47',
      caseStudy: 'Caso de Éxito',
      blog: 'Blog IA',
    },
    hero: {
      eyebrow: 'THE SILENT STUDIO · AGENCIA CREATIVA IA',
      titleLine1: 'Influencers IA y videos',
      titleHighlight: 'que convierten.',
      subtitle:
        'Dirección creativa e inteligencia artificial hiperrealista para marcas y creadores. Sin ruido, directo al resultado.',
      buttons: {
        service: 'Videos IA',
        guide: 'La Guía · $47',
        caseStudy: 'Vivienne Wolski',
      },
    },
    serviceSection: {
      tag: '01 · EL SERVICIO',
      title: 'Producción de Videos & Anuncios con IA',
      subtitle:
        'Entregamos cada video vertical 9:16 listo para publicar en Reels, TikTok o Meta Ads: incluye Influencer IA, guion de retención, subtítulos dinámicos y caption.',
      packs: [
        {
          name: '1 Video Individual',
          oldPrice: '',
          price: '$50 USD',
          saveTag: '',
          detail: 'Pago único · Entrega en 48-72h',
          features: [
            '1 Video vertical 9:16 en alta definición',
            'Guion persuasivo + subtítulos dinámicos',
            'Caption listo para Instagram o Facebook',
          ],
          cta: 'Pedir 1 Video',
          highlight: false,
        },
        {
          name: 'Pack 4 Videos',
          oldPrice: '$200 USD',
          price: '$170 USD',
          saveTag: 'Ahorrás $30',
          detail: '$42.50 por video · Incluye Influencer IA',
          features: [
            '4 Videos verticales 9:16 multi-ángulo',
            'Diseño consistente de tu Influencer IA',
            '4 Guiones + subtítulos + captions con CTA',
          ],
          cta: 'Elegir Pack 4',
          highlight: false,
        },
        {
          name: 'Pack 8 Videos',
          oldPrice: '$400 USD',
          price: '$300 USD',
          saveTag: 'Ahorrás $100',
          detail: 'Mejor valor · $37.50 por video',
          features: [
            '8 Videos 9:16 para todo el mes o pauta',
            'Creación de Influencer IA exclusivo de marca',
            '8 Guiones + subtítulos pro + captions listos',
          ],
          cta: 'Elegir Pack 8',
          highlight: true,
        },
      ],
    },
    guideSection: {
      tag: '02 · LA GUÍA ($47 USD)',
      title: 'Crea tu propio Influencer IA de cero a tu primera venta',
      subtitle:
        'El método exacto en 9 pasos resumidos y accionables para diseñar tu personaje hiperrealista, fijar su rostro, darle voz natural y monetizarlo sin mostrar tu cara.',
      bullets: [
        'Consistencia facial absoluta en fotos y videos 9:16',
        'Prompts maestros, clonación de voz y estructura de guiones',
        'Rutas reales de monetización: servicios, afiliados y productos digitales',
      ],
      priceLabel: 'Acceso inmediato y de por vida',
      price: '$47 USD',
      cta: 'Obtener la Guía',
    },
    caseSection: {
      tag: '03 · CASO DE ÉXITO VIVO',
      title: 'Vivienne Wolski',
      subtitle:
        'Nuestra influencer insignia creada 100% con IA. Un ecosistema minimalista en producción real con boutique de lujo silencioso, club de audio y ritual financiero.',
      stats: [
        { label: 'Estancia 01', value: 'El Armario (Boutique)' },
        { label: 'Estancia 02', value: 'Club Vivi (33 Audios)' },
        { label: 'Estancia 03', value: 'Honestidad Financiera' },
      ],
      cta: 'Ver Caso de Éxito',
    },
    whatsappPrefill:
      'Hola! Me interesa conversar sobre la producción de videos con Influencers IA para mi marca.',
    footer: '© The Silent Studio · Silencio, Orden y Conversión.',
  },
  en: {
    nav: {
      videos: 'Videos',
      service: 'The Service',
      guide: '$47 Guide',
      caseStudy: 'Case Study',
      blog: 'AI Blog',
    },
    hero: {
      eyebrow: 'THE SILENT STUDIO · AI CREATIVE AGENCY',
      titleLine1: 'AI Influencers & videos',
      titleHighlight: 'built to convert.',
      subtitle:
        'Creative direction and hyper-realistic artificial intelligence for brands and creators. Zero noise, straight to results.',
      buttons: {
        service: 'AI Videos',
        guide: 'The Guide · $47',
        caseStudy: 'Vivienne Wolski',
      },
    },
    serviceSection: {
      tag: '01 · THE SERVICE',
      title: 'AI Video & Ad Production',
      subtitle:
        'Every 9:16 vertical video is delivered ready to post on Reels, TikTok, or Meta Ads: includes AI Influencer, retention script, dynamic subtitles, and caption.',
      packs: [
        {
          name: '1 Single Video',
          oldPrice: '',
          price: '$50 USD',
          saveTag: '',
          detail: 'One-time · 48-72h turnaround',
          features: [
            '1 High-definition 9:16 vertical video',
            'Persuasive script + dynamic subtitles',
            'Ready-to-post Instagram/Facebook caption',
          ],
          cta: 'Order 1 Video',
          highlight: false,
        },
        {
          name: 'Pack 4 Videos',
          oldPrice: '$200 USD',
          price: '$170 USD',
          saveTag: 'Save $30',
          detail: '$42.50 per video · Includes AI Influencer',
          features: [
            '4 Multi-angle 9:16 vertical videos',
            'Consistent custom AI Influencer design',
            '4 Scripts + subtitles + captions with CTA',
          ],
          cta: 'Choose Pack 4',
          highlight: false,
        },
        {
          name: 'Pack 8 Videos',
          oldPrice: '$400 USD',
          price: '$300 USD',
          saveTag: 'Save $100',
          detail: 'Best value · $37.50 per video',
          features: [
            '8 Vertical 9:16 videos for monthly scale',
            'Exclusive brand AI Influencer creation',
            '8 Scripts + pro subtitles + ready captions',
          ],
          cta: 'Choose Pack 8',
          highlight: true,
        },
      ],
    },
    guideSection: {
      tag: '02 · THE PLAYBOOK ($47 USD)',
      title: 'Build your own AI Influencer from zero to first sale',
      subtitle:
        'The exact 9-step actionable blueprint to design a hyper-realistic character, lock facial consistency, synthesize natural voice, and monetize without showing your face.',
      bullets: [
        'Locked facial identity across photos and 9:16 videos',
        'Master prompts, voice synthesis & conversion script templates',
        'Proven monetization paths: client services, affiliates & digital products',
      ],
      priceLabel: 'Instant lifetime access',
      price: '$47 USD',
      cta: 'Get the Guide',
    },
    caseSection: {
      tag: '03 · LIVE CASE STUDY',
      title: 'Vivienne Wolski',
      subtitle:
        'Our flagship persona built 100% with AI. A live minimalist ecosystem featuring a quiet-luxury boutique, audio club, and financial honesty ritual.',
      stats: [
        { label: 'Room 01', value: 'El Armario (Boutique)' },
        { label: 'Room 02', value: 'Club Vivi (33 Audios)' },
        { label: 'Room 03', value: 'Financial Honesty' },
      ],
      cta: 'View Case Study',
    },
    whatsappPrefill:
      'Hi! I want to discuss AI Influencer video production for my brand.',
    footer: '© The Silent Studio · Silence, Order & Conversion.',
  },
};

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black relative font-sans overflow-x-hidden">
      {/* Minimalist Top Bar (Vivi-inspired visual order) */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-white/[0.07] relative z-20">
        <Link
          href="/"
          className="font-fraunces font-bold text-xl sm:text-2xl tracking-tight text-[#F7F4ED] hover:opacity-90 transition"
        >
          The Silent<span className="text-[#D4AF6A]">.</span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8C0B3]"
        >
          <a href="#videos" className="hover:text-[#E5C88D] transition">
            {text.nav.videos}
          </a>
          <a href="#servicio" className="hover:text-[#E5C88D] transition">
            {text.nav.service}
          </a>
          <a href="#guia" className="hover:text-[#E5C88D] transition">
            {text.nav.guide}
          </a>
          <a href="#caso-de-exito" className="hover:text-[#E5C88D] transition">
            {text.nav.caseStudy}
          </a>
          <Link href="/blog" className="hover:text-[#E5C88D] transition">
            {text.nav.blog}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#C5A059]/50 font-mono text-[10px] tracking-widest uppercase text-[#C9C2B4] transition"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3 h-3 text-[#D8B982]" />
            <span>{language === 'es' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      {/* ABOVE THE FOLD: Minimalist Entry with 3 Pure Navigation Buttons (Vivi-style order) */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden border-b border-white/[0.06]">
        <LuxuryHeroBackdrop />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <p className="font-mono text-[10px] sm:text-xs text-[#D8B982] tracking-[0.28em] uppercase">
            {text.hero.eyebrow}
          </p>

          <div className="space-y-4">
            <h1 className="font-fraunces font-bold text-4xl sm:text-6xl leading-[1.08] text-[#F7F4ED] tracking-tight">
              {text.hero.titleLine1}{' '}
              <span className="italic font-normal silent-gold-text-shimmer">
                {text.hero.titleHighlight}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#E5C88D]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5C88D]" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#E5C88D]" />
            </div>
          </div>

          <p className="text-[#C8C0B3] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            {text.hero.subtitle}
          </p>

          {/* 3 Clean Entry Buttons (Matching Vivienne's Minimalist Architecture) */}
          <nav
            aria-label="Accesos principales"
            className="flex flex-col sm:flex-row items-stretch justify-center gap-3.5 max-w-2xl mx-auto pt-2"
          >
            <Link
              href="/oferta"
              className="group flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase tracking-[0.18em] font-bold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_30px_rgba(216,185,130,0.28)]"
            >
              <span>{text.hero.buttons.service}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/influencer-ia"
              className="group flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#121518] border border-white/15 hover:border-[#C5A059] text-[#F5F3EF] font-mono text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{text.hero.buttons.guide}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#D8B982] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/vivianne-wolski"
              className="group flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#121518] border border-white/15 hover:border-[#C5A059] text-[#F5F3EF] font-mono text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{text.hero.buttons.caseStudy}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#D8B982] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
        </div>
      </section>

      {/* SECTION 1: LOS VIDEOS (3D Roulette Showcase) */}
      <div id="videos">
        <VideoRouletteShowcase language={language} whatsappNum={WHATSAPP_NUM} />
      </div>

      {/* MAIN CONTENT: Minimalist, Straight-to-the-Point Blocks */}
      <main className="max-w-5xl mx-auto w-full px-6 py-20 space-y-24">
        {/* SECTION 2: EL SERVICIO ($50 / $170 / $300) */}
        <section id="servicio" className="space-y-10 scroll-mt-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D8B982] font-bold block">
              {text.serviceSection.tag}
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#F7F4ED] tracking-tight">
              {text.serviceSection.title}
            </h2>
            <p className="text-[#C8C0B3] text-sm sm:text-base font-light leading-relaxed">
              {text.serviceSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {text.serviceSection.packs.map((pack) => (
              <div
                key={pack.name}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  pack.highlight
                    ? 'bg-[#14120E] border-[#C5A059] shadow-[0_0_30px_rgba(197,160,89,0.12)]'
                    : 'bg-[#0F1316] border-white/10 hover:border-white/25'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[#F5F3EF] font-bold">
                      {pack.name}
                    </h3>
                    {pack.saveTag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#E5C88D] border border-[#C5A059]/40 font-bold">
                        {pack.saveTag}
                      </span>
                    )}
                  </div>

                  <div>
                    {pack.oldPrice && (
                      <span className="font-mono text-xs text-zinc-500 line-through decoration-red-500/80 decoration-2 block">
                        {pack.oldPrice}
                      </span>
                    )}
                    <span className="font-fraunces text-3xl sm:text-4xl font-bold text-[#F7F4ED]">
                      {pack.price}
                    </span>
                    <p className="font-mono text-[11px] text-[#D8B982] mt-1">
                      {pack.detail}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-white/10 text-xs text-[#C8C0B3] font-light">
                    {pack.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#D8B982] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/oferta"
                  className={`mt-6 w-full px-5 py-3.5 rounded-xl font-mono text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 whitespace-nowrap transition ${
                    pack.highlight
                      ? 'bg-[#C5A059] hover:bg-[#D8B982] text-black shadow-[0_0_20px_rgba(197,160,89,0.25)]'
                      : 'bg-white/[0.06] hover:bg-[#C5A059] text-[#F5F3EF] hover:text-black border border-white/15 hover:border-[#C5A059]'
                  }`}
                >
                  <span>{pack.cta}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: LA GUÍA PASO A PASO ($47 USD) */}
        <section
          id="guia"
          className="p-8 sm:p-10 rounded-2xl bg-[#0F1316] border border-white/10 scroll-mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D8B982] font-bold block">
                {text.guideSection.tag}
              </span>
              <h2 className="font-fraunces text-2xl sm:text-4xl font-bold text-[#F7F4ED] tracking-tight leading-snug">
                {text.guideSection.title}
              </h2>
              <p className="text-[#C8C0B3] text-sm sm:text-base font-light leading-relaxed">
                {text.guideSection.subtitle}
              </p>
              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#E5DEC9] font-light">
                {text.guideSection.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D8B982] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between space-y-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <div className="md:text-right">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                  {text.guideSection.priceLabel}
                </span>
                <span className="font-fraunces text-4xl font-bold text-[#D8B982]">
                  {text.guideSection.price}
                </span>
              </div>

              <Link
                href="/influencer-ia"
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 hover:brightness-110 transition"
              >
                <span>{text.guideSection.cta}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: CASO DE ÉXITO VIVO (Vivienne Wolski) */}
        <section
          id="caso-de-exito"
          className="p-8 sm:p-10 rounded-2xl bg-[#F7F1E6] text-[#2B1D14] border border-[#D8CBB8] scroll-mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-xl overflow-hidden border border-[#D8CBB8] shadow-md bg-[#EFE6D5]">
                <Image
                  src="/images/vivianne-wolski-hero.jpg"
                  alt="Vivienne Wolski · Caso de Éxito Influencer IA"
                  fill
                  sizes="(max-width: 768px) 60vw, 240px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6B1F2A] font-bold block">
                {text.caseSection.tag}
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#2B1D14] tracking-tight">
                {text.caseSection.title}
              </h2>
              <p className="text-[#5C4A3E] text-sm sm:text-base font-light leading-relaxed max-w-xl">
                {text.caseSection.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {text.caseSection.stats.map((st) => (
                  <div
                    key={st.label}
                    className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#D8CBB8]"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A7665] block">
                      {st.label}
                    </span>
                    <span className="text-xs font-medium text-[#2B1D14] mt-0.5 block">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/vivianne-wolski"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  <span>{text.caseSection.cta}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Ultra-Clean Minimalist Footer */}
      <footer className="max-w-5xl mx-auto w-full px-6 py-10 border-t border-white/10 space-y-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs uppercase tracking-[0.18em] text-[#C8C0B3]">
          <Link href="/oferta" className="hover:text-[#D8B982] transition">
            {text.nav.service}
          </Link>
          <Link href="/influencer-ia" className="hover:text-[#D8B982] transition">
            {text.nav.guide}
          </Link>
          <Link href="/vivianne-wolski" className="hover:text-[#D8B982] transition">
            Vivienne Wolski
          </Link>
          <Link href="/galeria" className="hover:text-[#D8B982] transition">
            {language === 'es' ? 'Galería' : 'Gallery'}
          </Link>
          <Link href="/blog" className="hover:text-[#D8B982] transition">
            {text.nav.blog}
          </Link>
          <Link href="/contact" className="hover:text-[#D8B982] transition">
            {language === 'es' ? 'Contacto' : 'Contact'}
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-500">
          <Link href="/terms-of-service" className="hover:text-[#D8B982] transition">
            Términos
          </Link>
          <span>·</span>
          <Link href="/privacy-policy" className="hover:text-[#D8B982] transition">
            Privacidad
          </Link>
          <span>·</span>
          <Link href="/cookie-policy" className="hover:text-[#D8B982] transition">
            Cookies
          </Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-[#D8B982] transition">
            Reembolsos
          </Link>
          <span>·</span>
          <Link href="/legal-notice" className="hover:text-[#D8B982] transition">
            Aviso Legal
          </Link>
        </div>

        <p className="text-[11px] font-mono tracking-wider text-zinc-500">
          {text.footer}
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#1B3324]/90 hover:bg-[#23422F] border border-[#6EE7B7]/45 text-[#E8D5B0] p-3.5 rounded-full shadow-[0_0_28px_rgba(74,222,128,0.45)] backdrop-blur-md transition duration-300 flex items-center justify-center"
        title="WhatsApp Directo"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 shrink-0 fill-current text-[#E8D5B0]"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.448 5.581-1.464c1.908 1.253 4.19 1.983 6.627 1.983 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  );
}
