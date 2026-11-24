'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Smartphone,
  Sparkles,
  PenTool,
  ShieldCheck,
} from 'lucide-react';

const GUMROAD_WORKBOOK_URL = 'https://viviennewolski.gumroad.com/l/audios-vivienne';

const WORKBOOK_CHAPTERS = [
  {
    num: '01',
    title: 'Tu tiempo y tu perfil.',
    desc: 'Descubre si eres gastadora, guardadora o ganadora, y cuántos días aguantarías si dejaras de trabajar hoy.',
  },
  {
    num: '02',
    title: 'Auditoría de fugas.',
    desc: 'Encuentra tus tres fugas de dinero y cuánto dejas de perder al año. Incluye la regla de los siete días y el costo por uso.',
  },
  {
    num: '03',
    title: 'El sistema 25-15-50-10.',
    desc: 'Reparte tu ingreso y arma tu fondo de emergencia.',
  },
  {
    num: '04',
    title: 'Deuda que destruye y deuda que construye.',
    desc: 'Ordena tus deudas y aplica el método avalancha.',
  },
  {
    num: '05',
    title: 'Inversión pasiva e interés compuesto.',
    desc: 'Entiende los fondos indexados y la cartera de tres fondos, sin tecnicismos.',
  },
  {
    num: '06',
    title: 'Los primeros cien mil y tu cifra de libertad.',
    desc: 'Calcula tu número con la regla del 25.',
  },
  {
    num: '07',
    title: 'Ingresos extra.',
    desc: 'La pirámide de negocios paralelos para sumar una segunda entrada.',
  },
  {
    num: '08',
    title: 'Lo que destruye patrimonio.',
    desc: 'El auto financiado y otras trampas que parecen éxito.',
  },
  {
    num: '09',
    title: 'Tu plan de 30 días.',
    desc: 'Casillas para marcar, tarea por tarea, hasta cerrar el mes.',
  },
];

export default function CuadernoVivienneSalesPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6] font-body">
      {/* Top Editorial Navigation */}
      <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex items-center justify-between bg-[#F7F1E6]/95 sticky top-0 z-30 backdrop-blur-md">
        <Link
          href="/audios/escuchar"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a los Audios</span>
        </Link>

        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>El Cuaderno de Trabajo de Vivienne</span>
        </div>

        <a
          href={GUMROAD_WORKBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6B1F2A] font-semibold hover:text-[#2B1D14] transition hidden sm:inline-block"
        >
          Obtener el Cuaderno →
        </a>
      </header>

      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Copy & Primary CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B1F2A]/10 border border-[#6B1F2A]/25 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-[0.24em]">
                <Sparkles className="w-3 h-3" />
                <span>Edición Oficial · PDF Imprimible + EPUB Digital</span>
              </div>

              <blockquote className="border-l-3 border-[#6B1F2A] pl-4 py-1">
                <p className="font-serif italic text-xl sm:text-2xl text-[#6B1F2A] leading-relaxed">
                  &ldquo;Un presupuesto no es un castigo, cariño. Es decidir adónde va tu dinero antes de que llegue.&rdquo;
                </p>
              </blockquote>

              <div className="space-y-4">
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.07] tracking-tight text-[#2B1D14]">
                  Los audios te explican.{' '}
                  <span className="italic font-normal text-[#6B1F2A]">
                    Este cuaderno te pone a hacerlo.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed max-w-2xl">
                  <strong>El Cuaderno de Trabajo de Vivienne</strong> es el compañero de la serie de audios. Cada capítulo corresponde a un episodio: primero escuchas a Vivienne, luego te sientas con papel, lápiz y tus números reales, no los de ella.
                </p>
              </div>

              {/* Main CTA Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/60 shadow-[0_20px_50px_rgba(43,29,20,0.08)] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#6B1F2A] font-semibold">
                    Descarga Inmediata · 22 Páginas + Talleres Prácticos
                  </span>
                  <span className="text-[11px] font-mono text-[#8A7665]">
                    PDF + EPUB incluidos
                  </span>
                </div>

                <a
                  href={GUMROAD_WORKBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-7 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                >
                  <span>Obtener El Cuaderno de Trabajo Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-[#8A7665] text-center">
                  Entrega digital inmediata a tu correo tras completar tu pedido seguro en Gumroad.
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Workbook Showcase Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[390px] rounded-3xl overflow-hidden border-2 border-[#B08D57] shadow-[0_28px_70px_rgba(43,29,20,0.16)] bg-[#2B1D14] text-[#F7F1E6]">
                <div className="relative aspect-[4/4] w-full overflow-hidden">
                  <Image
                    src="/images/vivianne-wolski-hero.jpg"
                    alt="El Cuaderno de Trabajo de Vivienne Wolski"
                    fill
                    priority
                    sizes="(max-width: 1024px) 85vw, 390px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D14] via-[#2B1D14]/25 to-transparent" />
                </div>

                <div className="p-6 sm:p-7 space-y-4 -mt-8 relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1F2A] text-[#F7F1E6] text-[9.5px] font-mono uppercase tracking-[0.22em]">
                    <PenTool className="w-3 h-3" />
                    <span>Cuaderno Oficial de Ejercicios</span>
                  </div>

                  <h2 className="font-headline text-2xl sm:text-3xl text-[#F7F1E6] leading-tight">
                    El Cuaderno de Trabajo de Vivienne
                  </h2>

                  <p className="font-serif italic text-base text-[#E6D5B8]">
                    &ldquo;No te rindas antes de llegar, cariño.&rdquo; — Vivienne
                  </p>

                  <div className="pt-2 border-t border-[#F7F1E6]/15 grid grid-cols-3 gap-2 text-center text-[10px] font-mono uppercase tracking-wider text-[#E6D5B8]">
                    <div>
                      <span className="block text-base font-bold text-[#F7F1E6]">22</span>
                      <span>Páginas</span>
                    </div>
                    <div>
                      <span className="block text-base font-bold text-[#F7F1E6]">9</span>
                      <span>Talleres</span>
                    </div>
                    <div>
                      <span className="block text-base font-bold text-[#F7F1E6]">30</span>
                      <span>Días de Plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER BY CHAPTER SECTION */}
        <section className="border-t border-[#D8CBB8]/80 bg-[#FAF5EC] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.26em] text-[#6B1F2A]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Estructura Práctica</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#2B1D14]">
                Lo que vas a hacer, capítulo a capítulo
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Cada taller está diseñado para aterrizar los conceptos de Vivienne en tus propias cuentas, deudas, ahorros y metas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORKBOOK_CHAPTERS.map((chap) => (
                <div
                  key={chap.num}
                  className="p-6 rounded-2xl bg-[#F7F1E6] border border-[#D8CBB8] hover:border-[#6B1F2A] transition flex flex-col justify-between space-y-3 shadow-xs"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#6B1F2A]/10 text-[#6B1F2A] font-mono text-[10px] font-bold uppercase tracking-widest">
                      Capítulo {chap.num}
                    </span>
                    <h3 className="font-headline text-xl text-[#2B1D14]">
                      {chap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                      {chap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOR WHOM IT IS & WHAT YOU RECEIVE */}
        <section className="border-t border-[#D8CBB8]/80 bg-[#F7F1E6] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Para quién es */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-[#2B1D14] text-[#F7F1E6] border border-[#B08D57]/60 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#E6D5B8]">
                  ¿Es para ti este cuaderno?
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl text-[#F7F1E6]">
                  Para quién es
                </h3>
                <p className="text-sm sm:text-base text-[#E6D5B8] leading-relaxed">
                  Para la mujer que siente que el dinero se le va sin saber adónde, que nunca tuvo a alguien que se lo explicara claro y que quiere dejar de cambiar todas sus horas por un sueldo.
                </p>
              </div>

              <blockquote className="pt-4 border-t border-[#F7F1E6]/15">
                <p className="font-serif italic text-lg sm:text-xl text-[#F7F1E6]">
                  &ldquo;No te rindas antes de llegar, cariño.&rdquo; — Vivienne
                </p>
              </blockquote>
            </div>

            {/* Qué recibes */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-[#FAF5EC] border border-[#B08D57]/60 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#6B1F2A] font-semibold">
                  Incluye Dos Formatos Digitales
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
                  Qué recibes
                </h3>

                <ul className="space-y-4 pt-1">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#6B1F2A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2B1D14] leading-relaxed">
                      <strong>PDF de 22 páginas</strong>, listo para imprimir o llenar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-[#6B1F2A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2B1D14] leading-relaxed">
                      <strong>Versión EPUB</strong> para leer en el celular o la tablet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6B1F2A] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2B1D14] leading-relaxed">
                      <strong>Talleres con espacios para tus cifras</strong>, ejemplos resueltos y frases de Vivienne para recordar.
                    </span>
                  </li>
                </ul>
              </div>

              <a
                href={GUMROAD_WORKBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Descargar El Cuaderno de Trabajo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-3xl mx-auto px-6 pt-12 text-center">
            <p className="inline-flex items-center justify-center gap-1.5 text-[11px] text-[#8A7665] leading-relaxed">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>
                Contenido educativo. Las cifras de ejemplo son ilustrativas y no son una promesa de resultados ni una recomendación financiera personal.
              </span>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/audios/escuchar" className="hover:text-[#2B1D14] transition">
            ← Volver a los 10 Audios
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-[#2B1D14] transition">
            Vivienne Wolski
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#2B1D14] transition">
            Maison Wolski
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Vivienne Wolski</span>
      </footer>
    </div>
  );
}
