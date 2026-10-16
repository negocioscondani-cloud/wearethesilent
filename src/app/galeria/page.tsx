'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Maximize2,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Film,
} from 'lucide-react';
import videoGalleryData from '@/lib/video-gallery.json';
import { LuxuryHeroBackdrop } from '@/components/ui/luxury-hero-backdrop';

const WHATSAPP_NUM = '50686809636';

interface GalleryVideoItem {
  title: string;
  category: string;
  tag?: string;
  aspect?: 'vertical' | 'horizontal';
  url: string;
}

const TRANSLATIONS = {
  es: {
    badge: 'PORTAFOLIO AUDIOVISUAL COMPLETO · IA GENERATIVA',
    titlePart1: 'Galería de Videos de ',
    titleGold: 'Alto Impacto',
    subtitle:
      'Explora los 42 videos reales de nuestro archivo creativo: Influencers IA, comerciales UGC de moda, entrevistas dinámicas, reels publicitarios, campañas completas y narrativa cinematográfica.',
    back: 'Volver al inicio',
    filterAll: 'Todos',
    searchPlaceholder: 'Buscar formato, estilo o campaña...',
    expand: 'Ver en pantalla completa',
    quoteStyle: 'Cotizar este formato →',
    showing: 'Mostrando',
    of: 'de',
    videosLabel: 'videos disponibles',
    ctaTitle: '¿Listo para producir este nivel de contenido para tu marca?',
    ctaSub:
      'Entregamos cada video en 9:16 con subtítulos dinámicos y su respectivo caption listo para Instagram, TikTok o Meta Ads.',
    ctaBtn: 'Ver Paquetes y Precios',
    ctaWa: 'Hablar con un Estratega',
  },
  en: {
    badge: 'FULL AUDIOVISUAL PORTFOLIO · GENERATIVE AI',
    titlePart1: 'High-Impact ',
    titleGold: 'Video Gallery',
    subtitle:
      'Explore all 42 real videos from our creative archive: AI Influencers, fashion UGC commercials, dynamic interviews, ad reels, full campaigns, and cinematic storytelling.',
    back: 'Back to home',
    filterAll: 'All',
    searchPlaceholder: 'Search format, style or campaign...',
    expand: 'Watch fullscreen',
    quoteStyle: 'Quote this format →',
    showing: 'Showing',
    of: 'of',
    videosLabel: 'available videos',
    ctaTitle: 'Ready to produce this level of content for your brand?',
    ctaSub:
      'We deliver every 9:16 video with dynamic retention subtitles and ready-to-post captions for Instagram, TikTok, or Meta Ads.',
    ctaBtn: 'View Packages & Pricing',
    ctaWa: 'Talk to a Strategist',
  },
};

export default function GaleriaPage() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  const videos = videoGalleryData as GalleryVideoItem[];
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [aspectRatios, setAspectRatios] = useState<Record<string, 'horizontal' | 'vertical'>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect all unique categories with counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = { All: videos.length };
    for (const v of videos) {
      counts[v.category] = (counts[v.category] || 0) + 1;
    }
    return Object.keys(counts).map((name) => ({
      name,
      count: counts[name],
    }));
  }, [videos]);

  const handleLoadedMetadata = (url: string, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      const aspect = video.videoWidth > video.videoHeight ? 'horizontal' : 'vertical';
      setAspectRatios((prev) => (prev[url] === aspect ? prev : { ...prev, [url]: aspect }));
    }
  };

  const filteredVideos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return videos.filter((v) => {
      const matchesCat = activeCategory === 'All' || v.category === activeCategory;
      const matchesSearch =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q) ||
        (v.tag && v.tag.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [videos, activeCategory, searchQuery]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredVideos.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredVideos.length) % filteredVideos.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredVideos.length]);

  const activeLightboxVideo =
    lightboxIndex !== null && filteredVideos[lightboxIndex]
      ? filteredVideos[lightboxIndex]
      : null;

  return (
    <div className="bg-[#0A0D0E] text-white min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black font-sans antialiased">
      {/* Top Sticky Navigation */}
      <header className="border-b border-[#C5A059]/15 bg-[#080808]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-wider text-[#E6DEC8] hover:text-[#C5A059] transition flex items-center gap-2 bg-white/5 hover:bg-[#C5A059]/10 border border-white/10 hover:border-[#C5A059]/40 px-3.5 py-2 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{text.back}</span>
          </Link>

          <Link
            href="/"
            className="font-fraunces font-normal text-lg sm:text-xl tracking-[0.26em] uppercase text-[#EDE5D5] hover:text-white transition"
          >
            THE SILENT
          </Link>

          <Link
            href="/oferta"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#14110C] bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] px-5 py-2 rounded-full font-bold hover:brightness-110 transition shadow-[0_0_20px_rgba(197,160,89,0.28)]"
          >
            <span>{text.ctaBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Luxury Hero Section Centered on Title */}
      <section className="relative overflow-hidden pt-14 pb-12 border-b border-white/5">
        <LuxuryHeroBackdrop />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="silent-fade-up-1 font-mono text-[11px] sm:text-xs text-[#D8B982] tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 mb-5">
            <span className="w-6 sm:w-8 h-px bg-[#C5A059]/70 inline-block" />
            <span>{text.badge}</span>
            <span className="w-6 sm:w-8 h-px bg-[#C5A059]/70 inline-block" />
          </div>

          <div className="relative inline-block">
            <h1 className="silent-fade-up-2 silent-title-glow font-fraunces font-bold text-4xl sm:text-6xl leading-[1.08] mb-5 text-[#F7F4ED] tracking-tight">
              {text.titlePart1}
              <span className="italic font-normal silent-gold-text-shimmer">
                {text.titleGold}
              </span>
            </h1>

            <div className="silent-fade-up-2 flex items-center justify-center gap-3 mb-6">
              <span className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#E5C88D]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5C88D] shadow-[0_0_12px_#C5A059]" />
              <span className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#E5C88D]" />
            </div>
          </div>

          <p className="silent-fade-up-3 text-[#C8C0B3] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            {text.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex-grow w-full">
        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Pills */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.name;
              const displayName = cat.name === 'All' ? text.filterAll : cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 border transition shrink-0 rounded-full flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] border-[#E5C88D] text-[#14110C] font-bold shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                      : 'bg-[#12161A] border-white/10 text-gray-300 hover:border-[#C5A059]/50 hover:text-white'
                  }`}
                >
                  <span>{displayName}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-black/20 text-[#14110C]' : 'bg-white/5 text-[#C5A059]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={text.searchPlaceholder}
              className="w-full bg-[#12161A] border border-white/15 focus:border-[#C5A059] rounded-full pl-10 pr-9 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Counter Strip */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <Film className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>
              {text.showing} <strong className="text-white">{filteredVideos.length}</strong>{' '}
              {text.of} {videos.length} {text.videosLabel}
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {filteredVideos.map((v, idx) => {
            const detectedAspect = aspectRatios[v.url] || v.aspect || 'vertical';
            const isHorizontal = detectedAspect === 'horizontal';

            return (
              <div
                key={v.url + idx}
                className={`group bg-[#12161A] border border-white/10 hover:border-[#C5A059]/55 p-3.5 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_45px_rgba(197,160,89,0.14)] ${
                  isHorizontal ? 'sm:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Video Container */}
                <div
                  className={`relative ${
                    isHorizontal ? 'aspect-video' : 'aspect-[9/16]'
                  } w-full bg-[#07090B] rounded-lg overflow-hidden mb-3.5 border border-white/10`}
                >
                  <video
                    src={`${v.url}#t=0.001`}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => handleLoadedMetadata(v.url, e)}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#C5A059]/45 text-[#E5C88D] font-mono text-[9px] uppercase tracking-wider font-bold">
                      {v.tag || v.category}
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      title={text.expand}
                      className="pointer-events-auto w-8 h-8 rounded-full bg-black/80 hover:bg-[#C5A059] text-white hover:text-black border border-white/15 flex items-center justify-center transition cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-2.5 px-1">
                  <div>
                    <div className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider mb-0.5">
                      {v.category}
                    </div>
                    <h3 className="font-fraunces font-bold text-sm sm:text-base text-white leading-snug group-hover:text-[#F3DFB6] transition">
                      {v.title}
                    </h3>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] text-gray-500 uppercase">
                      {isHorizontal ? '16:9 Cinema' : 'Vertical 9:16'}
                    </span>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                        language === 'es'
                          ? `¡Hola! Vi el video "${v.title}" en la galería y me gustaría cotizar un video con este estilo.`
                          : `Hi! I saw the video "${v.title}" in the gallery and would like to quote a video in this style.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase font-bold text-[#D8B982] hover:text-white transition"
                    >
                      {text.quoteStyle}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Luxury CTA Banner */}
        <div className="mt-20 bg-gradient-to-b from-[#15130F] to-[#0D0F12] text-white p-8 sm:p-12 text-center rounded-2xl border border-[#C5A059]/35 max-w-4xl mx-auto relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#E5C88D] to-transparent" />
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#D8B982] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>THE SILENT STUDIO · PRODUCCIÓN IA</span>
          </div>
          <h3 className="font-fraunces font-bold text-2xl sm:text-4xl mb-3 text-white">
            {text.ctaTitle}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            {text.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/oferta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase font-bold px-8 py-4 transition transform hover:-translate-y-0.5 shadow-[0_0_30px_rgba(197,160,89,0.35)]"
            >
              <span>{text.ctaBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                language === 'es'
                  ? '¡Hola! Acabo de ver la Galería de Videos y quiero cotizar contenido con IA para mi marca.'
                  : 'Hi! I just explored the Video Gallery and want to quote AI video content for my brand.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-[#C5A059]/15 text-[#E6DEC8] border border-[#C5A059]/50 font-mono text-xs uppercase font-bold px-8 py-4 transition"
            >
              <span>{text.ctaWa}</span>
            </a>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="fixed top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 flex items-center justify-center transition cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null ? 0 : (prev - 1 + filteredVideos.length) % filteredVideos.length
              );
            }}
            className="fixed left-3 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/80 hover:bg-[#C5A059] text-white hover:text-black border border-[#C5A059]/40 flex items-center justify-center transition cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === null ? 0 : (prev + 1) % filteredVideos.length
              );
            }}
            className="fixed right-3 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/80 hover:bg-[#C5A059] text-white hover:text-black border border-[#C5A059]/40 flex items-center justify-center transition cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            className="w-full max-w-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059] block">
                {activeLightboxVideo.category} · {(lightboxIndex ?? 0) + 1} / {filteredVideos.length}
              </span>
              <h3 className="font-fraunces font-bold text-lg text-white">
                {activeLightboxVideo.title}
              </h3>
            </div>

            <div className="w-full max-h-[74vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#C5A059]/50 shadow-[0_0_60px_rgba(197,160,89,0.25)]">
              <video
                key={activeLightboxVideo.url}
                src={activeLightboxVideo.url}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es'
                    ? `¡Hola! Vi el video "${activeLightboxVideo.title}" en la galería y quiero cotizar este formato.`
                    : `Hi! I saw the video "${activeLightboxVideo.title}" in the gallery and want to quote this format.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase font-bold px-6 py-3 transition"
              >
                <span>{text.quoteStyle}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 bg-[#080808] text-gray-500 font-mono text-[10px] text-center border-t border-white/5">
        The Silent Studio © Costa Rica. All rights reserved.
      </footer>
    </div>
  );
}
