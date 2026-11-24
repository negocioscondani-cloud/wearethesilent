'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Lock,
} from 'lucide-react';
import { getFirebase } from '@/lib/firebase-client';
import { registerInMesayaFirebaseClient } from '@/lib/vivienne-waitlist-client';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { EPISODES_INDEX } from '@/app/audios/escuchar/page';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  favoriteEp?: string;
  createdAtIso?: string;
}

const LOCAL_STORAGE_KEY = 'vivienne_audios_waitlist_v1';
const LOCAL_LEADS_LIST_KEY = 'vivienne_waitlist_all_leads_v1';

export default function AudiosRegistrationPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteEp, setFavoriteEp] = useState('Todos los episodios');
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setErrorMsg('Por favor ingresa tu nombre.');
      return;
    }
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!consentAccepted) {
      setErrorMsg(
        'Por favor aprueba la casilla de consentimiento para guardar tus datos y recibir información del equipo de Vivienne.'
      );
      return;
    }

    setIsSubmitting(true);
    const nowIso = new Date().toISOString();
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');

    const newEntry: WaitlistEntry = {
      id: docId,
      name: cleanName,
      email: cleanEmail,
      favoriteEp,
      createdAtIso: nowIso,
    };

    try {
      // 1. Guardar en respaldo local
      try {
        const existingRaw = localStorage.getItem(LOCAL_LEADS_LIST_KEY);
        const existingList: WaitlistEntry[] = existingRaw ? JSON.parse(existingRaw) : [];
        const filtered = Array.isArray(existingList)
          ? existingList.filter((x) => x.email?.toLowerCase() !== cleanEmail)
          : [];
        filtered.unshift(newEntry);
        localStorage.setItem(LOCAL_LEADS_LIST_KEY, JSON.stringify(filtered));
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ name: cleanName, email: cleanEmail })
        );
      } catch {
        // ignore
      }

      // 2. Guardar directamente en Firestore Database (mesaya-e9644 / vivienne_waitlist)
      await registerInMesayaFirebaseClient({
        name: cleanName,
        email: cleanEmail,
        favoriteEp,
        source: 'wearethesilent.com/audios',
        consentAccepted: true,
      });

      // 3. Respaldo en servidor (/api/vivienne-waitlist)
      await fetch('/api/vivienne-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          favoriteEp,
          source: 'wearethesilent.com/audios',
          skipFirebaseVerifyEmail: true,
        }),
      }).catch(() => {});

      // 4. Respaldo en Firestore SDK cliente
      try {
        const { firestore } = getFirebase();
        if (firestore) {
          await setDoc(
            doc(firestore, 'vivienne_waitlist', docId),
            {
              name: cleanName,
              email: cleanEmail,
              favoriteEp,
              consentAccepted: true,
              series: 'Audios de Vivienne: Dominio del Dinero y Libertad Financiera',
              source: 'wearethesilent.com/audios',
              createdAtIso: nowIso,
              updatedAt: serverTimestamp(),
            },
            { merge: true }
          ).catch(() => {});
        }
      } catch {
        // ignore
      }

      // 5. Redirigir inmediatamente a la página oficial de reproducción de audios
      router.push('/audios/escuchar');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (epTitle?: string) => {
    if (epTitle) {
      setFavoriteEp(epTitle);
    }
    const el = document.getElementById('formulario-lista');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6] font-body">
      {/* Top Editorial Navigation */}
      <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex items-center justify-between bg-[#F7F1E6]/95 sticky top-0 z-30 backdrop-blur-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Vivienne Wolski</span>
        </Link>

        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A]">
          <Headphones className="w-3.5 h-3.5" />
          <span>Serie Sonora · Registro Oficial</span>
        </div>

        <Link
          href="/vivianne-wolski/armario"
          className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition hidden sm:inline-block"
        >
          Maison Wolski →
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* HERO SECTION + REGISTRATION FORM */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline + Always-Available Registration Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B1F2A]/10 border border-[#6B1F2A]/25 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-[0.24em]">
                <Sparkles className="w-3 h-3" />
                <span>10 Episodios · 1 Audio Desbloqueado por Día</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-tight text-[#2B1D14]">
                  Audios de Vivienne:{' '}
                  <span className="italic font-normal text-[#6B1F2A]">
                    Dominio del Dinero y Libertad Financiera.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed max-w-2xl">
                  Diez capítulos esenciales en audio sobre mentalidad, presupuesto 25-15-50-10, deuda inteligente, inversión sin ser experta y libertad financiera. Registra tu nombre y correo abajo para ingresar de inmediato a la sala de reproducción.
                </p>
              </div>

              {/* Quote snippet from Episode 1 */}
              <blockquote className="border-l-2 border-[#6B1F2A] pl-4 py-1.5 bg-[#FAF5EC]/80 rounded-r-lg">
                <p className="font-serif italic text-sm sm:text-base text-[#2B1D14] leading-relaxed">
                  &ldquo;El dinero es una forma de comprar tiempo. Tiempo para dormir tranquila. Tiempo para tu familia. Tiempo para decir que no.&rdquo;
                </p>
                <footer className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A7665] mt-1">
                  — Vivienne Wolski · Ep01 · Mentalidad
                </footer>
              </blockquote>

              {/* REGISTRATION CARD (ALWAYS VISIBLE AND ACTIVE) */}
              <div
                id="formulario-lista"
                className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/50 shadow-[0_20px_50px_rgba(43,29,20,0.08)]"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A] font-semibold">
                      Paso 1 · Registro de Acceso a los Audios
                    </span>
                    <h2 className="font-headline text-xl sm:text-2xl text-[#2B1D14]">
                      Anota tu nombre y correo para entrar a escuchar los audios
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                      <label
                        htmlFor="wl-name"
                        className="block text-[10px] font-mono uppercase tracking-[0.18em] text-[#5C4A3E] mb-1.5"
                      >
                        Tu Nombre *
                      </label>
                      <input
                        id="wl-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Carolina"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] focus:border-[#6B1F2A] text-sm text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="wl-email"
                        className="block text-[10px] font-mono uppercase tracking-[0.18em] text-[#5C4A3E] mb-1.5"
                      >
                        Tu Correo Electrónico *
                      </label>
                      <input
                        id="wl-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] focus:border-[#6B1F2A] text-sm text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="wl-ep"
                      className="block text-[10px] font-mono uppercase tracking-[0.18em] text-[#5C4A3E] mb-1.5"
                    >
                      ¿Qué capítulo te urge más poner en práctica?
                    </label>
                    <select
                      id="wl-ep"
                      value={favoriteEp}
                      onChange={(e) => setFavoriteEp(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] focus:border-[#6B1F2A] text-xs sm:text-sm text-[#2B1D14] focus:outline-none transition"
                    >
                      <option value="Todos los episodios">Toda la serie (Episodios 1 al 10)</option>
                      {EPISODES_INDEX.map((item) => (
                        <option key={item.ep} value={`Ep. ${item.ep} · ${item.title}`}>
                          Ep. {item.ep} · {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Casilla de aprobación de guardar datos + enlace de consentimiento */}
                  <div className="p-3.5 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] space-y-1.5">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consentAccepted}
                        onChange={(e) => {
                          setConsentAccepted(e.target.checked);
                          if (e.target.checked) setErrorMsg('');
                        }}
                        className="mt-0.5 w-4 h-4 accent-[#6B1F2A] rounded cursor-pointer shrink-0"
                      />
                      <span className="text-xs text-[#2B1D14] leading-relaxed">
                        Apruebo guardar mis datos y acepto recibir los audios semanales e información por parte del equipo de Vivienne.{' '}
                        <button
                          type="button"
                          onClick={() => setShowConsentModal(true)}
                          className="text-[#6B1F2A] font-medium underline underline-offset-4 hover:text-[#2B1D14] cursor-pointer"
                        >
                          Confirmar el consentimiento de guardar datos y recibir información por parte del equipo de Vivienne
                        </button>
                      </span>
                    </label>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-[#6B1F2A] font-medium bg-[#6B1F2A]/10 px-3 py-2 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] disabled:opacity-60 text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? 'Guardando y abriendo los audios...'
                        : 'Registrarme y Escuchar los Audios'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Editorial Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#D8CBB8] shadow-[0_24px_60px_rgba(43,29,20,0.12)] bg-[#EFE6D5]">
                <Image
                  src="/images/vivianne-wolski-hero.jpg"
                  alt="Vivienne Wolski · Audios de Dominio del Dinero"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 380px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E140E]/75 via-[#1E140E]/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-[#F7F1E6] space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6B1F2A]/90 text-[#F7F1E6] text-[9px] font-mono uppercase tracking-[0.22em]">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>10 Episodios Prácticos</span>
                  </div>
                  <p className="font-headline italic text-2xl leading-tight">
                    &ldquo;El dinero es tiempo, y el tiempo es lo único que no se recupera.&rdquo;
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#E6D5B8]">
                    Vivienne Wolski · Edición 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK-STYLE INDEX OF THE 10 AUDIOS WITH VIVIENNE'S WORD-FOR-WORD QUOTES */}
        <section className="border-t border-[#D8CBB8]/80 bg-[#FAF5EC] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.26em] text-[#6B1F2A]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Índice de la Obra Sonora</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#2B1D14]">
                Los 10 Capítulos de Vivienne
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Al registrarte arriba ingresas directamente a la sala de reproducción donde cada día se desbloquea un nuevo episodio.
              </p>
            </div>

            <div className="divide-y divide-[#D8CBB8]/70 border-y border-[#D8CBB8] bg-[#F7F1E6] rounded-2xl overflow-hidden shadow-sm">
              {EPISODES_INDEX.map((item) => (
                <div
                  key={item.ep}
                  onClick={() => scrollToForm(`Ep. ${item.ep} · ${item.title}`)}
                  className="group p-5 sm:p-6 hover:bg-[#FAF5EC] transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] group-hover:bg-[#6B1F2A] border border-[#D8CBB8] group-hover:border-[#6B1F2A] text-[#6B1F2A] group-hover:text-[#F7F1E6] font-mono text-xs font-bold flex flex-col items-center justify-center shrink-0 transition">
                      <span className="text-[8px] uppercase tracking-wider opacity-75">Ep.</span>
                      <span>{item.ep}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-headline text-lg sm:text-xl text-[#2B1D14] group-hover:text-[#6B1F2A] transition">
                          Ep{item.ep} · {item.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#EFE6D5] text-[#5C4A3E]">
                          ~{item.duration} min
                        </span>
                      </div>

                      <blockquote className="border-l-2 border-[#6B1F2A] pl-3 py-0.5">
                        <p className="font-serif italic text-xs sm:text-sm text-[#2B1D14]">
                          &ldquo;{item.powerQuote}&rdquo;
                        </p>
                      </blockquote>

                      <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B1F2A] font-semibold mr-1">
                          Temas del capítulo:
                        </span>
                        {item.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D8CBB8] text-[#2B1D14]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sm:shrink-0 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665] group-hover:text-[#6B1F2A] self-end sm:self-center">
                    <Lock className="w-3 h-3" />
                    <span>Registrarme para escuchar</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Repeat CTA */}
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => scrollToForm()}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition shadow-md cursor-pointer"
              >
                <span>Registrarme y Escuchar los Audios</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:text-[#2B1D14] transition">
            ← Volver a Vivienne
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#2B1D14] transition">
            Maison Wolski
          </Link>
          <span>·</span>
          <Link href="/diario" className="hover:text-[#2B1D14] transition">
            El Blog de Vivi
          </Link>
          <span>·</span>
          <Link href="/domingo" className="hover:text-[#2B1D14] transition">
            Honestidad Financiera
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} Vivienne Wolski</span>
        </div>
      </footer>

      {/* Modal de Confirmación de Consentimiento de Datos */}
      {showConsentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E140E]/60 backdrop-blur-xs p-4">
          <div className="max-w-lg w-full rounded-2xl bg-[#FAF5EC] border border-[#B08D57] p-6 sm:p-8 shadow-2xl space-y-4 text-[#2B1D14]">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Consentimiento de Datos Personales</span>
            </div>
            <h3 className="font-headline text-2xl text-[#2B1D14]">
              Autorización para Guardar Datos y Recibir Información del Equipo de Vivienne
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
              <p>
                Al confirmar este consentimiento autorizas de forma expresa que tus datos (nombre, correo electrónico y episodio de interés) sean almacenados en la base de datos privada de <strong>Vivienne Wolski</strong> con la finalidad de:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Dar acceso a la sala oficial de reproducción de los Audios de Vivienne.</li>
                <li>Enviarte los episodios, crónicas e información por parte del equipo de Vivienne.</li>
              </ul>
              <p className="text-[11px] text-[#8A7665]">
                Tus datos se mantienen confidenciales y nunca se comparten con terceros ajenos al equipo de Vivienne.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setConsentAccepted(true);
                  setErrorMsg('');
                  setShowConsentModal(false);
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.18em] transition cursor-pointer"
              >
                Confirmar consentimiento y aprobar
              </button>
              <button
                type="button"
                onClick={() => setShowConsentModal(false)}
                className="py-3 px-4 rounded-xl border border-[#D8CBB8] hover:border-[#2B1D14] text-xs font-mono uppercase tracking-wider text-[#5C4A3E] cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
