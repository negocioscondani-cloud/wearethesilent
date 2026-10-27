import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function VivianneHomePage() {
  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6]">
      {/* Minimalist Top Bar */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-[#D8CBB8]/60">
        <Link
          href="/"
          className="text-[10px] uppercase tracking-[0.28em] text-[#8A7665] hover:text-[#2B1D14] transition-colors"
        >
          ← Inicio
        </Link>
        <span className="font-headline text-sm tracking-[0.35em] uppercase text-[#2B1D14]">
          V · W
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#8A7665] hidden sm:inline">
          París · Milán
        </span>
      </header>

      {/* Main Static Centerpiece: Portrait + 3 Buttons */}
      <main className="flex-1 flex items-center justify-center px-6 py-10 md:py-16">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Single Editorial Portrait of Vivienne */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#D8CBB8] shadow-[0_24px_60px_rgba(43,29,20,0.10)] bg-[#EFE6D5]">
              <Image
                src="/images/vivianne-wolski-hero.jpg"
                alt="Vivienne Wolski"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 360px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E140E]/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-[#F7F1E6]">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#E6D5B8]">
                  Editorial · Quiet Luxury
                </p>
                <p className="font-headline italic text-lg tracking-wide">
                  Vivienne Wolski
                </p>
              </div>
            </div>
          </div>

          {/* 3 Pure Navigation Buttons */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#6B1F2A] font-medium">
                Universo Privado
              </p>
              <h1 className="font-headline text-4xl sm:text-5xl tracking-tight text-[#2B1D14] leading-[1.08]">
                Vivienne <span className="italic font-light text-[#6B1F2A]">Wolski</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#5C4A3E] font-light max-w-sm mx-auto md:mx-0 pt-1">
                Selecciona una estancia para entrar.
              </p>
            </div>

            <nav aria-label="Estancias de Vivienne Wolski" className="flex flex-col gap-3.5 max-w-sm mx-auto md:mx-0 w-full">
              <Link
                href="/vivianne-wolski/armario"
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#FAF5EC] border border-[#D8CBB8] hover:border-[#2B1D14] hover:bg-[#2B1D14] text-[#2B1D14] hover:text-[#F7F1E6] transition-all duration-300 shadow-sm"
              >
                <span className="text-xs uppercase tracking-[0.26em] font-medium">
                  El Armario
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#8A7665] group-hover:text-[#E6D5B8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/vivianne-wolski/club"
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#FAF5EC] border border-[#D8CBB8] hover:border-[#6B1F2A] hover:bg-[#6B1F2A] text-[#2B1D14] hover:text-[#F7F1E6] transition-all duration-300 shadow-sm"
              >
                <span className="text-xs uppercase tracking-[0.26em] font-medium">
                  Club Vivi
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#8A7665] group-hover:text-[#E6D5B8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/domingo"
                className="group flex items-center justify-between px-6 py-4 rounded-xl bg-[#FAF5EC] border border-[#D8CBB8] hover:border-[#2B1D14] hover:bg-[#2B1D14] text-[#2B1D14] hover:text-[#F7F1E6] transition-all duration-300 shadow-sm"
              >
                <span className="text-xs uppercase tracking-[0.26em] font-medium">
                  Honestidad Financiera
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#8A7665] group-hover:text-[#E6D5B8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </nav>
          </div>
        </div>
      </main>

      {/* Ultra-minimalist Footer */}
      <footer className="w-full px-6 md:px-12 py-5 border-t border-[#D8CBB8]/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <span>© {new Date().getFullYear()} Vivienne Wolski</span>
        <span>Silencio · Orden · Criterio</span>
      </footer>
    </div>
  );
}
