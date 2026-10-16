'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { ArrowUpRight, Video, BookOpen, Sparkles, Newspaper, Globe } from 'lucide-react';

const TRANSLATIONS = {
  es: {
    badge: 'AGENCIA DE DIRECCIÓN CREATIVA & INTELIGENCIA GENERATIVA',
    slogan: 'CREATORS OF THE POST-AI ERA',
    subtitle:
      'Construimos influencers virtuales hiperrealistas, comerciales UGC de alta conversión y ecosistemas digitales que transforman la atención en ventas reales.',
    primaryCta: 'Cotizar Videos con IA ($50)',
    secondaryCta: 'Leer Artículos Diarios de IA',
    pillarsTitle: 'DESCUBRE EL ECOSISTEMA',
    pillars: [
      {
        num: '01',
        tag: 'SERVICIOS PARA MARCAS · DESDE $50 USD',
        title: 'Producción de Videos & Anuncios IA',
        desc: 'Comerciales UGC, entrevistas en calle, voceros virtuales y campañas para Meta Ads o TikTok en formato 9:16 con guion y caption listos para publicar.',
        href: '/oferta',
        cta: 'Ver formatos y precios',
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
    footer: 'The Silent Studio © Todos los derechos reservados.',
  },
  en: {
    badge: 'CREATIVE DIRECTION & GENERATIVE INTELLIGENCE AGENCY',
    slogan: 'CREATORS OF THE POST-AI ERA',
    subtitle:
      'We build hyper-realistic virtual influencers, high-converting UGC commercials, and digital ecosystems that turn attention into measurable sales.',
    primaryCta: 'Order AI Videos ($50)',
    secondaryCta: 'Read Daily AI Articles',
    pillarsTitle: 'EXPLORE THE ECOSYSTEM',
    pillars: [
      {
        num: '01',
        tag: 'AGENCY SERVICES · FROM $50 USD',
        title: 'AI Video & Ad Production',
        desc: 'UGC commercials, street interviews, virtual spokespeople, and Meta/TikTok ad campaigns in 9:16 vertical format with script and caption included.',
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
    footer: 'The Silent Studio © All rights reserved.',
  },
};

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  const renderPillarIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-[#C5A059]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#C5A059]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Newspaper className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black relative font-sans">
      {/* Subtle cinematic pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Top Navigation Bar */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 flex flex-wrap justify-between items-center gap-4 z-10 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#C5A059] font-bold uppercase">
            THE SILENT STUDIO
          </span>
        </div>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-zinc-400"
        >
          <Link href="/oferta" className="hover:text-[#C5A059] transition">
            Servicios IA
          </Link>
          <Link href="/influencer-ia" className="hover:text-[#C5A059] transition">
            Guía $47
          </Link>
          <Link href="/vivianne-wolski" className="hover:text-[#C5A059] transition">
            Caso Vivienne
          </Link>
          <Link href="/blog" className="hover:text-[#C5A059] transition text-white font-semibold">
            Blog Diario IA
          </Link>
          <Link href="/galeria" className="hover:text-[#C5A059] transition">
            {text.quickLinks.gallery}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 hover:border-[#C5A059]/50 font-mono text-[10px] tracking-wider uppercase text-zinc-300 transition"
            aria-label="Cambiar idioma"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{language === 'es' ? 'ES / EN' : 'EN / ES'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-14 sm:py-20 z-10 space-y-16">
        {/* Hero Block */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 font-mono text-[10px] tracking-[0.2em] text-[#C5A059] uppercase font-bold">
            <span>{text.badge}</span>
          </div>

          <h1 className="font-fraunces font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
            The Silent Studio
          </h1>

          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
            {text.slogan}
          </p>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            {text.subtitle}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/oferta"
              className="w-full sm:w-auto px-7 py-4 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold tracking-widest transition inline-flex items-center justify-center gap-2 rounded-xs shadow-lg shadow-[#C5A059]/10"
            >
              <span>{text.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="w-full sm:w-auto px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/50 text-white font-mono text-xs uppercase font-semibold tracking-widest transition inline-flex items-center justify-center gap-2 rounded-xs"
            >
              <Newspaper className="w-4 h-4 text-[#C5A059]" />
              <span>{text.secondaryCta}</span>
            </Link>
          </div>
        </section>

        {/* 4-Pillar Discovery Grid */}
        <section aria-labelledby="ecosystem-heading" className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2
              id="ecosystem-heading"
              className="font-mono text-xs tracking-[0.22em] uppercase text-[#C5A059] font-bold"
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
                className={`group relative p-6 sm:p-8 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                  pillar.highlight
                    ? 'bg-gradient-to-br from-[#151A1F] to-[#0D1013] border-[#C5A059]/50 hover:border-[#C5A059]'
                    : 'bg-[#111518]/90 border-white/10 hover:border-[#C5A059]/50 hover:bg-[#14191D]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded bg-black/50 text-[#C5A059] border border-[#C5A059]/25 font-semibold">
                      {pillar.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {renderPillarIcon(pillar.icon)}
                      <span className="font-mono text-xs text-zinc-500 font-bold">
                        /{pillar.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                  <span>{pillar.cta}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Secondary Quick Access Strip */}
        <section className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs tracking-[0.18em] uppercase text-zinc-400">
          <Link href="/galeria" className="hover:text-[#C5A059] transition flex items-center gap-1.5">
            <span>{text.quickLinks.gallery}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </Link>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <Link href="/domingo" className="hover:text-[#C5A059] transition flex items-center gap-1.5">
            <span>{text.quickLinks.domingo}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </Link>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <a
            href="https://www.skool.com/we-are-the-silent-ia-8224/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition flex items-center gap-1.5"
          >
            <span>{text.quickLinks.skool}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </section>
      </main>

      {/* Clean Compliant Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-8 z-10 border-t border-white/10 space-y-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono text-zinc-400">
          <Link href="/terms-of-service" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Términos y Condiciones
          </Link>
          <span>·</span>
          <Link href="/privacy-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Privacidad (RGPD)
          </Link>
          <span>·</span>
          <Link href="/cookie-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Cookies
          </Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Reembolso
          </Link>
          <span>·</span>
          <Link href="/legal-notice" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Aviso Legal LSSI-CE
          </Link>
        </div>
        <p className="text-[11px] font-mono tracking-wider text-zinc-500">{text.footer}</p>
      </footer>
    </div>
  );
}
