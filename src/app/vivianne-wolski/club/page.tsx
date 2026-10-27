'use client';

import React from 'react';
import Link from 'next/link';
import { DOMINGO_DE_LOS_NUMEROS } from '@/data/vivianne-products';
import { ArrowLeft, ArrowRight, Headphones, ExternalLink } from 'lucide-react';
import AudioPlaylist from '@/components/vivianne/audio-playlist';

export default function ClubViviPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] font-sans antialiased selection:bg-[#B08D57]/30 selection:text-[#2B1D14] flex flex-col justify-between">
      {/* Sticky Minimal Header */}
      <header className="sticky top-0 z-40 bg-[#F7F1E6]/95 backdrop-blur-md border-b border-[#B08D57]/25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            <Link
              href="/vivianne-wolski"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2B1D14] hover:text-[#6B1F2A] border border-[#B08D57]/40 hover:border-[#6B1F2A] bg-[#FAF5EC] px-3.5 py-2 rounded-xs transition"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#6B1F2A]" />
              <span>Vivienne</span>
            </Link>

            <div className="text-center">
              <Link href="/vivianne-wolski" className="inline-block">
                <span className="font-serif font-light text-xl sm:text-3xl tracking-tight text-[#2B1D14] block">
                  Club Vivi
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/vivianne-wolski/armario"
                className="hidden sm:inline-block font-serif text-xs uppercase tracking-[0.18em] text-[#5A4D44] hover:text-[#6B1F2A] transition"
              >
                El Armario
              </Link>
              <Link
                href="/domingo"
                className="hidden sm:inline-block font-serif text-xs uppercase tracking-[0.18em] text-[#5A4D44] hover:text-[#6B1F2A] transition"
              >
                Honestidad Financiera
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 sm:py-16 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#B08D57]/40 p-6 sm:p-12 bg-[#FAF5EC] rounded-sm shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#B08D57]/20">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold border border-[#B08D57]/30 bg-[#F7F1E6] px-2.5 py-1 rounded-xs">
                    <Headphones className="w-3 h-3 text-[#6B1F2A]" />
                    <span>{DOMINGO_DE_LOS_NUMEROS.badge}</span>
                  </span>
                  <span className="text-[#B08D57]">·</span>
                  <span className="font-mono text-[10px] text-[#6B1F2A] font-bold">
                    USD {DOMINGO_DE_LOS_NUMEROS.priceFormatted}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl text-[#2B1D14] font-normal tracking-tight">
                  {DOMINGO_DE_LOS_NUMEROS.title}
                </h1>

                <p className="font-serif italic text-base sm:text-lg text-[#6B1F2A] leading-relaxed">
                  &ldquo;{DOMINGO_DE_LOS_NUMEROS.description}&rdquo;
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 text-left lg:text-right">
                <a
                  href={DOMINGO_DE_LOS_NUMEROS.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] rounded-sm transition duration-300 shadow-md text-center"
                >
                  <span>{DOMINGO_DE_LOS_NUMEROS.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/domingo"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 border border-[#B08D57] hover:border-[#6B1F2A] bg-[#F7F1E6] hover:bg-white text-[#6B1F2A] font-mono text-xs uppercase tracking-[0.18em] rounded-sm transition duration-300 text-center"
                >
                  <span>Ir a Honestidad Financiera</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B08D57]" />
                </Link>
              </div>
            </div>

            {/* 3 Pillars Grid: Carácter, Finanzas, Estilo */}
            <div className="pt-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-4 text-center sm:text-left">
                LOS TRES PILARES DE CLUB VIVI
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {DOMINGO_DE_LOS_NUMEROS.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F7F1E6] border border-[#B08D57]/25 rounded-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#6B1F2A] font-bold">0{idx + 1}.</span>
                      <h2 className="font-serif text-base text-[#2B1D14] font-medium">{pillar.title}</h2>
                    </div>
                    <p className="text-xs text-[#7C6E65] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Audio Playlist */}
            <div className="pt-10 mt-8 border-t border-[#B08D57]/25">
              <AudioPlaylist />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF5EC] border-t border-[#B08D57]/30 py-8 text-center text-xs text-[#7C6E65] space-y-2 px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 font-serif uppercase tracking-[0.18em]">
          <Link href="/vivianne-wolski" className="text-[#2B1D14] hover:text-[#6B1F2A]">
            ← Volver a Vivienne
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#6B1F2A]">
            El Armario
          </Link>
          <span>·</span>
          <Link href="/domingo" className="hover:text-[#6B1F2A]">
            Honestidad Financiera
          </Link>
        </div>
        <p className="text-[10px] text-[#9C8F85]">
          Vivienne Wolski es un personaje creado con inteligencia artificial · The Silent Studio
        </p>
      </footer>
    </div>
  );
}
