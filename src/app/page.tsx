'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const TRANSLATIONS = {
  es: {
    slogan: "CREATORS OF THE POST-AI ERA",
    navOffer: "Nuestros Servicios",
    navGallery: "Galería de Trabajos",
    navCommunity: "Comunidad Skool",
    footer: "The Silent Studio © Costa Rica. Todos los derechos reservados."
  },
  en: {
    slogan: "CREATORS OF THE POST-AI ERA",
    navOffer: "Our Services",
    navGallery: "Works Gallery",
    navCommunity: "Skool Community",
    footer: "The Silent Studio © Costa Rica. All rights reserved."
  }
};

export default function Home() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] min-h-screen flex flex-col justify-between selection:bg-[#C5A059] selection:text-black overflow-hidden relative font-sans">
      
      {/* Subtle cinematic pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Floating minimalist navbar */}
      <header className="max-w-6xl mx-auto w-full px-6 py-8 flex justify-between items-center z-10">
        <div className="font-mono text-[10px] tracking-widest text-[#C5A059] font-bold">
          {language === 'es' ? "BOUTIQUE CREATIVA" : "CREATIVE BOUTIQUE"}
        </div>
        <div className="font-mono text-[10px] tracking-widest text-gray-400">
          SAN JOSÉ, CR
        </div>
      </header>

      {/* Main centered branding */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Logo */}
          <h1 className="font-fraunces font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            The Silent Studio
          </h1>
          
          {/* Slogan */}
          <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#C5A059] uppercase font-bold pt-2">
            {text.slogan}
          </div>

          <div className="h-px w-24 bg-white/10 mx-auto my-8"></div>
          
          {/* High-Art Minimal Navigation Index */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-6 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase">
            <Link 
              href="/oferta" 
              className="hover:text-[#C5A059] transition duration-300 font-bold border-b border-transparent hover:border-[#C5A059] pb-1 text-white"
            >
              01. {text.navOffer}
            </Link>
            <span className="hidden sm:inline text-zinc-700">/</span>
            <Link 
              href="/galeria" 
              className="hover:text-[#C5A059] transition duration-300 font-bold border-b border-transparent hover:border-[#C5A059] pb-1 text-white"
            >
              02. {text.navGallery}
            </Link>
            <span className="hidden sm:inline text-zinc-700">/</span>
            <a 
              href="https://www.skool.com/we-are-the-silent-ia-8224/about" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#C5A059] transition duration-300 font-bold border-b border-transparent hover:border-[#C5A059] pb-1 text-white"
            >
              03. {text.navCommunity}
            </a>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-8 text-center text-[10px] font-mono tracking-wider text-gray-500 z-10 border-t border-white/5">
        {text.footer}
      </footer>

    </div>
  );
}
