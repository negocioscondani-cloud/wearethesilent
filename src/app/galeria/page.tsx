'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { ArrowLeft, Play, Video } from 'lucide-react';
import videoGalleryData from '@/lib/video-gallery.json';

const TRANSLATIONS = {
  es: {
    title: "Galería de Videos",
    subtitle: "Nuestra producción audiovisual premium conceptualizada y optimizada para alto impacto.",
    back: "Volver al inicio",
    filterAll: "Todos",
    ctaTitle: "¿Listo para crear tus anuncios?",
    ctaSub: "Solo trabajamos con 10 negocios por ciclo de producción.",
    ctaBtn: "Ver Oferta Comercial"
  },
  en: {
    title: "Video Gallery",
    subtitle: "Our premium audiovisual production conceptualized and optimized for high impact.",
    back: "Back to home",
    filterAll: "All",
    ctaTitle: "Ready to create your ads?",
    ctaSub: "We only work with 10 businesses per production cycle.",
    ctaBtn: "View Commercial Offer"
  }
};

export default function GaleriaPage() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [aspectRatios, setAspectRatios] = useState<Record<string, 'horizontal' | 'vertical'>>({});

  // Collect all unique categories from the json
  const categories = ['All', ...Array.from(new Set(videoGalleryData.map(v => v.category)))];

  const handleLoadedMetadata = (url: string, e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const aspect = video.videoWidth > video.videoHeight ? 'horizontal' : 'vertical';
    setAspectRatios(prev => ({ ...prev, [url]: aspect }));
  };

  const filteredVideos = videoGalleryData.filter(v => {
    if (activeCategory === 'All') return true;
    return v.category === activeCategory;
  });

  return (
    <div className="bg-[#0A0D0E] text-white min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black font-sans antialiased">
      
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0A0D0E]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="font-mono text-xs uppercase tracking-wider text-gray-400 hover:text-[#C5A059] transition flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>{text.back}</span>
          </Link>
          <div className="font-fraunces font-bold text-lg tracking-tight text-white">
            The Silent<span className="text-[#C5A059]">Studio</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 flex-grow w-full">
        {/* Title */}
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
            PORTAFOLIO
          </div>
          <h1 className="font-fraunces font-bold text-4xl sm:text-5xl text-white mb-4">
            {text.title}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            {text.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-10 border-b border-white/10 pb-4 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const displayName = cat === 'All' ? text.filterAll : cat;
            return (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition shrink-0 rounded-sm ${isSelected ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
              >
                {displayName}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
          {filteredVideos.map((v, idx) => {
            const aspect = aspectRatios[v.url] || 'vertical';
            const isHorizontal = aspect === 'horizontal';
            return (
              <div 
                key={idx} 
                className={`bg-[#12161A] border border-white/10 p-4 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/20 transition duration-300 ${isHorizontal ? 'sm:col-span-2' : 'col-span-1'}`}
              >
                {/* Video container */}
                <div className={`relative ${isHorizontal ? 'aspect-video' : 'aspect-[9/16]'} w-full bg-black rounded-sm overflow-hidden mb-4 border border-white/5`}>
                  <video 
                    src={v.url} 
                    className="w-full h-full object-cover" 
                    controls
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => handleLoadedMetadata(v.url, e)}
                  />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <div className="font-mono text-[9px] text-[#C5A059] uppercase tracking-wider">
                    {v.category}
                  </div>
                  <h3 className="font-fraunces font-bold text-sm text-white leading-tight">
                    {v.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA Banner */}
        <div className="mt-20 bg-[#12161A] text-white p-10 text-center rounded-sm border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-[#C5A059]" />
          <h3 className="font-fraunces font-bold text-2xl sm:text-3xl mb-2 text-white">{text.ctaTitle}</h3>
          <p className="text-gray-400 text-xs sm:text-sm font-mono mb-8">{text.ctaSub}</p>
          <Link 
            href="/oferta" 
            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold px-8 py-4 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            <span>{text.ctaBtn}</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-[#0A0D0E] text-gray-600 font-mono text-[10px] text-center border-t border-white/5">
        The Silent Studio © Costa Rica. All rights reserved.
      </footer>

    </div>
  );
}
