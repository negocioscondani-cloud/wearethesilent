'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { LuxuryHeroBackdrop } from '@/components/ui/luxury-hero-backdrop';
import { VideoRouletteShowcase } from '@/components/ui/video-roulette-showcase';
import { ArrowUpRight, ArrowRight, Video, BookOpen, Sparkles, Newspaper, Globe } from 'lucide-react';

const WHATSAPP_NUM = '50664194111';

const TRANSLATIONS = {
  es: {
    banner: {
      promo: 'CREATIVE INTELLIGENCE AGENCY:',
      spots: 'Cupos limitados. Trabajamos con 10 empresas por ciclo (Quedan 7 disponibles)',
      cta: 'Contacto Directo por WhatsApp →',
    },
    nav: {
      services: 'Estrategia',
      guide: 'Guía $47',
      vivienne: 'Vivienne',
      blog: 'Blog IA',
      contact: 'Contacto',
    },
    badge: 'CREACIÓN DE INFLUENCERS IA • TECNOLOGÍA DE PUNTA',
    subtitle:
      'Combinamos tecnología de vanguardia y dirección creativa innovadora para diseñar influencers con inteligencia artificial hiperrealistas. Creamos videos y anuncios listos para Meta Ads, contenido recurrente para redes sociales o páginas web, ya sea alrededor de tu propia marca o para ofrecer a tus clientes.',
    primaryCta: 'COTIZAR MIS VIDEOS',
    secondaryCta: 'HABLAR CON UN ESTRATEGA',
    pillarsTitle: 'DESCUBRE EL ECOSISTEMA THE SILENT',
    pillars: [
      {
        num: '01',
        tag: 'SERVICIOS PARA MARCAS · DESDE ₡30.000 ($60 USD)',
        title: 'Producción de Videos & Anuncios IA',
        desc: 'Comerciales UGC, entrevistas en calle, voceros virtuales y campañas para Meta Ads o TikTok en formato 9:16 con guion y caption listos para publicar. Paquetes de 1, 10 (₡420.000) y 20 videos (₡750.000).',
        href: '/oferta',
        cta: 'Ver formatos y tarifas',
        icon: 'video',
        highlight: true,
      },
      {
        num: '02',
        tag: 'FORMACIÓN PASO A PASO · $47 USD',
        title: 'Guía: Influencer IA de Cero a tu Primera Venta',
        desc: 'El mapa exacto en 9 pasos resumidos y accionables para crear tu propio personaje con IA, fijar su rostro, darle voz y monetizarlo sin mostrar tu cara.',
        href: '/influencer-ia',
        cta: 'Explorar el método',
        icon: 'book',
        highlight: false,
      },
      {
        num: '03',
        tag: 'CASO DE ÉXITO VIVO · BOUTIQUE & CLUB',
        title: 'El Armario de Vivienne Wolski',
        desc: 'Nuestro personaje insignia en acción: una aristócrata digital con tienda curada de lujo silencioso (afiliados ShopMy), fonoteca de audios y El Domingo de los Números.',
        href: '/vivianne-wolski',
        cta: 'Visitar universo Vivienne',
        icon: 'sparkles',
        highlight: false,
      },
      {
        num: '04',
        tag: 'PUBLICACIÓN DIARIA · 100% PRÁCTICO',
        title: 'Revista Diaria de IA Generativa',
        desc: 'Artículos diarios sobre IA para anuncios, tutoriales técnicos, casos de éxito, modelos de monetización, usos prácticos y planes de trabajo ejecutables.',
        href: '/blog',
        cta: 'Leer artículos del día',
        icon: 'news',
        highlight: false,
      },
    ],
    quickLinks: {
      gallery: 'Galería Visual',
      domingo: 'El Domingo de los Números',
      skool: 'Comunidad Skool',
    },
    whatsappPrefill:
      'Hola! Me interesa conversar sobre la estrategia creativa y producción de videos con Influencers IA para mi negocio.',
    footer: 'The Silent Studio © Todos los derechos reservados.',
  },
  en: {
    banner: {
      promo: 'CREATIVE INTELLIGENCE AGENCY:',
      spots: 'Limited slots. We work with 10 companies per cycle (7 available)',
      cta: 'Direct WhatsApp Contact →',
    },
    nav: {
      services: 'Strategy',
      guide: '$47 Guide',
      vivienne: 'Vivienne',
      blog: 'AI Blog',
      contact: 'Contact',
    },
    badge: 'AI INFLUENCER CREATION • CUTTING-EDGE TECH',
    subtitle:
      'We combine cutting-edge technology and innovative creative direction to design hyper-realistic AI influencers. We produce ready-to-run videos for Meta Ads, recurring social media content, and landing pages — whether around your own brand or to offer your clients.',
    primaryCta: 'QUOTE MY VIDEOS',
    secondaryCta: 'TALK TO A STRATEGIST',
    pillarsTitle: 'EXPLORE THE SILENT ECOSYSTEM',
    pillars: [
      {
        num: '01',
        tag: 'AGENCY SERVICES · FROM ₡30,000 ($60 USD)',
        title: 'AI Video & Ad Production',
        desc: 'UGC commercials, street interviews, virtual spokespeople, and Meta/TikTok ad campaigns in 9:16 vertical format with script and caption included. Single, 10-Pack (₡420,000) and 20-Pack (₡750,000).',
        href: '/oferta',
        cta: 'View formats & pricing',
        icon: 'video',
        highlight: true,
      },
      {
        num: '02',
        tag: 'STEP-BY-STEP PLAYBOOK · $47 USD',
        title: 'Guide: AI Influencer From Zero to First Sale',
        desc: 'The exact 9-step blueprint to design your own AI character, lock facial consistency, synthesize voice, and monetize without showing your face.',
        href: '/influencer-ia',
        cta: 'Explore the method',
        icon: 'book',
        highlight: false,
      },
      {
        num: '03',
        tag: 'LIVE CASE STUDY · BOUTIQUE & CLUB',
        title: 'El Armario de Vivienne Wolski',
        desc: 'Our flagship AI persona in action: a quiet-luxury affiliate boutique (ShopMy), audio training library, and El Domingo de los Números ritual.',
        href: '/vivianne-wolski',
        cta: 'Visit Vivienne Universe',
        icon: 'sparkles',
        highlight: false,
      },
      {
        num: '04',
        tag: 'DAILY PUBLICATION · ACTIONABLE',
        title: 'Daily Generative AI Journal',
        desc: 'Daily deep-dives on AI for ads, step-by-step tutorials, case studies, monetization models, practical workflows, and execution plans.',
        href: '/blog',
        cta: 'Read today’s articles',
        icon: 'news',
        highlight: false,
      },
    ],
    quickLinks: {
      gallery: 'Visual Gallery',
      domingo: 'El Domingo de los Números',
      skool: 'Skool Community',
    },
    whatsappPrefill:
      'Hi! I want to discuss creative strategy and AI Influencer video production for my business.',
    footer: 'The Silent Studio © All rights reserved.',
  },
};

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  const renderPillarIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-[#D8B982]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#D8B982]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#D8B982]" />;
      default:
        return <Newspaper className="w-5 h-5 text-[#D8B982]" />;
    }
  };

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black relative font-sans overflow-x-hidden">
      {/* Top Live Agency Bar (matches reference image) */}
      <div className="bg-[#0B0A08] text-white py-2.5 px-4 text-[11px] font-mono border-b border-[#C5A059]/35 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D8B982] shadow-[0_0_8px_#D8B982] animate-pulse" />
            <span className="font-bold text-[#D8B982] uppercase tracking-wider">
              {text.banner.promo}
            </span>
            <span className="hidden md:inline text-[#C9C2B4]">{text.banner.spots}</span>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D8B982] hover:text-white underline underline-offset-4 font-medium transition flex items-center gap-1"
          >
            <span>{text.banner.cta}</span>
          </a>
        </div>
      </div>

      {/* HERO PORTADA SECTION */}
      <section className="relative pt-8 pb-24 sm:pb-32 overflow-hidden">
        <LuxuryHeroBackdrop />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Luxury Navbar */}
          <header className="flex flex-wrap justify-between items-center gap-4 pb-8">
            <Link
              href="/"
              className="font-fraunces font-bold text-2xl sm:text-3xl tracking-tight text-[#F7F4ED] hover:opacity-90 transition"
            >
              The Silent<span className="text-[#D4AF6A]">.</span>
            </Link>

            <nav
              aria-label="Navegación principal"
              className="flex flex-wrap items-center gap-4 sm:gap-7"
            >
              <Link
                href="/oferta"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#E5DEC9] hover:text-[#E5C88D] transition"
              >
                {text.nav.services}
              </Link>
              <Link
                href="/blog"
                className="hidden sm:inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#D8D1C5] hover:text-[#E5C88D] transition"
              >
                {text.nav.blog}
              </Link>
              <Link
                href="/influencer-ia"
                className="hidden md:inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#D8D1C5] hover:text-[#E5C88D] transition"
              >
                {text.nav.guide}
              </Link>
              <Link
                href="/vivianne-wolski"
                className="hidden lg:inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#D8D1C5] hover:text-[#E5C88D] transition"
              >
                {text.nav.vivienne}
              </Link>

              <button
                type="button"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 hover:border-[#C5A059]/50 font-mono text-[10px] tracking-wider uppercase text-[#C9C2B4] transition"
                aria-label="Cambiar idioma"
              >
                <Globe className="w-3 h-3 text-[#D8B982]" />
                <span>{language === 'es' ? 'ES' : 'EN'}</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#E8D5B0] border border-[#C5A059]/65 hover:border-[#E5C88D] bg-[#17130D]/70 hover:bg-[#C5A059]/15 px-6 py-2.5 rounded-full transition shadow-[0_0_20px_rgba(197,160,89,0.15)]"
              >
                {text.nav.contact}
              </a>
            </nav>
          </header>

          {/* Hero Centerpiece */}
          <div className="max-w-4xl mx-auto text-center pt-14 sm:pt-20 pb-8">
            <div className="silent-fade-up-1 font-mono text-[11px] sm:text-xs text-[#D8B982] tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 mb-6">
              <span className="w-6 sm:w-8 h-px bg-[#C5A059]/70 inline-block" />
              <span>{text.badge}</span>
              <span className="w-6 sm:w-8 h-px bg-[#C5A059]/70 inline-block" />
            </div>

            <h1 className="silent-fade-up-2 font-fraunces font-bold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] mb-8 text-[#F7F4ED] tracking-tight">
              {language === 'es' ? (
                <>
                  Influencers IA y videos de{' '}
                  <span className="italic font-normal bg-gradient-to-r from-[#E6CDA3] via-[#FFF0CE] to-[#C8A161] bg-clip-text text-transparent">
                    alto impacto
                  </span>{' '}
                  que detienen el scroll y{' '}
                  <span className="italic font-normal bg-gradient-to-r from-[#E6CDA3] via-[#FFF0CE] to-[#C8A161] bg-clip-text text-transparent">
                    convierten
                  </span>
                  .
                </>
              ) : (
                <>
                  AI Influencers and{' '}
                  <span className="italic font-normal bg-gradient-to-r from-[#E6CDA3] via-[#FFF0CE] to-[#C8A161] bg-clip-text text-transparent">
                    high-impact
                  </span>{' '}
                  videos that stop the scroll and{' '}
                  <span className="italic font-normal bg-gradient-to-r from-[#E6CDA3] via-[#FFF0CE] to-[#C8A161] bg-clip-text text-transparent">
                    convert
                  </span>
                  .
                </>
              )}
            </h1>

            <p className="silent-fade-up-3 text-[#C8C0B3] text-base sm:text-lg lg:text-[19px] max-w-2xl mx-auto mb-12 leading-[1.65] font-light">
              {text.subtitle}
            </p>

            <div className="silent-fade-up-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/oferta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-sans text-xs uppercase tracking-[0.16em] px-9 py-4 transition-all duration-500 transform hover:-translate-y-0.5 hover:scale-[1.02] shadow-[0_0_35px_rgba(216,185,130,0.42)] hover:shadow-[0_0_52px_rgba(216,185,130,0.68)] font-bold"
              >
                <span>{text.primaryCta}</span>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es'
                    ? 'Hola! Me interesa agendar una llamada estratégica con un estratega creativo para mi negocio.'
                    : 'Hi! I want to book a creative strategy call for my business.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#12100D]/75 backdrop-blur-sm text-[#E6DEC8] hover:text-white font-sans text-xs uppercase tracking-[0.16em] px-8 py-4 border border-[#C5A059]/55 hover:border-[#E5C88D] hover:bg-[#C5A059]/10 transition-all duration-300"
              >
                <span>{text.secondaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8B982] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Interactive Roulette Video Showcase */}
      <VideoRouletteShowcase language={language} whatsappNum={WHATSAPP_NUM} />

      {/* Main Content: 4-Pillar Discovery Grid */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 sm:py-16 z-10 space-y-16">
        <section aria-labelledby="ecosystem-heading" className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
            <h2
              id="ecosystem-heading"
              className="font-mono text-xs tracking-[0.22em] uppercase text-[#D8B982] font-bold"
            >
              {text.pillarsTitle}
            </h2>
            <span className="font-mono text-[11px] text-zinc-400">01 — 04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {text.pillars.map((pillar) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-1 flex flex-col justify-between ${
                  pillar.highlight
                    ? 'bg-gradient-to-br from-[#17140F] to-[#0D0B09] border-[#C5A059]/55 hover:border-[#E5C88D] shadow-[0_0_30px_rgba(197,160,89,0.08)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.18)]'
                    : 'bg-[#11100E]/90 border-white/10 hover:border-[#C5A059]/50 hover:bg-[#161411] hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-black/60 text-[#D8B982] border border-[#C5A059]/30 font-semibold">
                      {pillar.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {renderPillarIcon(pillar.icon)}
                      <span className="font-mono text-xs text-zinc-500 font-bold">
                        /{pillar.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#F7F4ED] group-hover:text-[#DFC28E] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-[#C8C0B3] text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#D8B982] font-bold">
                  <span>{pillar.cta}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Secondary Quick Access Strip */}
        <section className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs tracking-[0.18em] uppercase text-zinc-400">
          <Link href="/galeria" className="hover:text-[#D8B982] transition flex items-center gap-1.5">
            <span>{text.quickLinks.gallery}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8B982]" />
          </Link>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <Link href="/domingo" className="hover:text-[#D8B982] transition flex items-center gap-1.5">
            <span>{text.quickLinks.domingo}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8B982]" />
          </Link>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <a
            href="https://www.skool.com/we-are-the-silent-ia-8224/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D8B982] transition flex items-center gap-1.5"
          >
            <span>{text.quickLinks.skool}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D8B982]" />
          </a>
        </section>
      </main>

      {/* Clean Compliant Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-8 z-10 border-t border-white/10 space-y-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono text-zinc-400">
          <Link href="/terms-of-service" className="hover:text-[#D8B982] transition underline underline-offset-4">
            Términos y Condiciones
          </Link>
          <span>·</span>
          <Link href="/privacy-policy" className="hover:text-[#D8B982] transition underline underline-offset-4">
            Política de Privacidad (RGPD)
          </Link>
          <span>·</span>
          <Link href="/cookie-policy" className="hover:text-[#D8B982] transition underline underline-offset-4">
            Política de Cookies
          </Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-[#D8B982] transition underline underline-offset-4">
            Política de Reembolso
          </Link>
          <span>·</span>
          <Link href="/legal-notice" className="hover:text-[#D8B982] transition underline underline-offset-4">
            Aviso Legal LSSI-CE
          </Link>
        </div>
        <p className="text-[11px] font-mono tracking-wider text-zinc-500">{text.footer}</p>
      </footer>

      {/* Floating Glowing WhatsApp Button (matches reference image) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#1B3324]/90 hover:bg-[#23422F] border border-[#6EE7B7]/45 text-[#E8D5B0] p-3.5 rounded-full shadow-[0_0_28px_rgba(74,222,128,0.45)] hover:shadow-[0_0_38px_rgba(74,222,128,0.65)] backdrop-blur-md transition duration-300 flex items-center justify-center group"
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
