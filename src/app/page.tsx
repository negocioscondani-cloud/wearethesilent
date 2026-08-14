'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { ArrowRight } from 'lucide-react';

const TRANSLATIONS = {
  es: {
    slogan: "CREATORS OF THE POST-AI ERA",
    cta: "Ver Oferta Especial",
    footer: "The Silent Studio © Costa Rica. Todos los derechos reservados."
  },
  en: {
    slogan: "CREATORS OF THE POST-AI ERA",
    cta: "View Special Offer",
    footer: "The Silent Studio © Costa Rica. All rights reserved."
  }
};

export default function Home() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  return (
    <div className="bg-[#FBF6EC] text-[#1F2A2E] min-h-screen flex flex-col justify-between selection:bg-[#1F2A2E] selection:text-[#FBF6EC] overflow-hidden relative font-sans">
      
      {/* Subtle cinematic pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1f2a2e_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Floating minimalist navbar */}
      <header className="max-w-6xl mx-auto w-full px-6 py-8 flex justify-between items-center z-10">
        <div className="font-mono text-[10px] tracking-widest text-[#00879F] font-bold">
          {language === 'es' ? "BOUTIQUE CREATIVA" : "CREATIVE BOUTIQUE"}
        </div>
        <div className="font-mono text-[10px] tracking-widest text-[#4A5A5E]">
          SAN JOSÉ, CR
        </div>
      </header>

      {/* Main centered branding */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 z-10">
        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Logo */}
          <h1 className="font-fraunces font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1F2A2E] leading-none">
            The Silent Studio
          </h1>
          
          {/* Slogan */}
          <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#E8672A] uppercase font-bold pt-2">
            {text.slogan}
          </div>

          <div className="h-px w-24 bg-[#1F2A2E]/20 mx-auto my-8"></div>
          
          {/* Entering Link CTA */}
          <div className="pt-4">
            <Link 
              href="/oferta"
              className="inline-flex items-center gap-3 bg-[#1F2A2E] text-[#FBF6EC] font-mono text-xs uppercase tracking-widest px-8 py-5 border border-[#1F2A2E] hover:bg-transparent hover:text-[#1F2A2E] transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-none"
            >
              <span>{text.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="max-w-6xl mx-auto w-full px-6 py-8 text-center text-[10px] font-mono tracking-wider text-[#4A5A5E] z-10 border-t border-[rgba(31,42,46,0.06)]">
        {text.footer}
      </footer>

    </div>
  );
}
