'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Download,
  Copy,
  Users,
  Lock,
} from 'lucide-react';
import { getFirebase } from '@/lib/firebase-client';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

interface EpisodeIndexItem {
  ep: string;
  title: string;
  duration: string;
  summary: string;
  practice: string;
}

const EPISODES_INDEX: EpisodeIndexItem[] = [
  {
    ep: '01',
    title: 'Mentalidad',
    duration: '1:35',
    summary:
      'Por qué el dinero no es para presumir sino para comprar tiempo, y cómo salir de la trampa de cambiar horas por sueldo.',
    practice: 'Escribir 3 problemas reales de otras personas que tú podrías resolver.',
  },
  {
    ep: '02',
    title: 'La regla 25-15-50-10',
    duration: '1:31',
    summary:
      'El sistema de cuatro números para repartir cada ingreso: 25% inversión, 15% colchón, 50% esencial y 10% disfrute sin culpa.',
    practice: 'Tomar tu último ingreso y repartirlo en papel con los 4 porcentajes.',
  },
  {
    ep: '03',
    title: 'Deuda que destruye, deuda que construye',
    duration: '1:24',
    summary:
      'Cómo distinguir el apalancamiento productivo de la deuda cara, y por qué liquidar tarjetas al 24% es el negocio más seguro.',
    practice: 'Anotar todas tus deudas con su tasa de interés y atacar primero la más cara.',
  },
  {
    ep: '04',
    title: 'Los primeros $10,000 y $100,000',
    duration: '1:24',
    summary:
      'Cómo atravesar la etapa más exigente del ahorro sin agotarte hasta que el interés compuesto empiece a acelerar por ti.',
    practice: 'Definir tu primera meta financiera en una cifra concreta y ponerle fecha.',
  },
  {
    ep: '05',
    title: 'Inversión indexada',
    duration: '1:30',
    summary:
      'El método silencioso y diversificado para hacer crecer tu patrimonio a largo plazo sin adivinar acciones individuales.',
    practice: 'Definir tu monto mensual de aporte automático a largo plazo.',
  },
  {
    ep: '06',
    title: 'Compras trampa',
    duration: '1:24',
    summary:
      'Las tres grandes fugas silenciosas: el auto nuevo financiado, las suscripciones fantasma y el costo de aparentar.',
    practice: 'Auditoría de tus últimos 3 meses de banco/tarjetas y regla de las 48 horas.',
  },
  {
    ep: '07',
    title: 'Ingresos extra',
    duration: '1:28',
    summary:
      'Tres rutas reales (comercio digital, servicios remotos e IA) para sumar una segunda entrada validando antes de gastar.',
    practice: 'Escribir una habilidad útil que ya tienes y ofrecérsela a 10 personas.',
  },
  {
    ep: '08',
    title: 'Inflación e impuestos',
    duration: '1:17',
    summary:
      'Cómo evitar que tu efectivo parado pierda poder de compra cada año y cómo aprovechar cuentas con ventajas fiscales.',
    practice: 'Investigar las cuentas de ahorro o inversión con beneficio fiscal en tu país.',
  },
  {
    ep: '09',
    title: 'Cuando el mercado cae',
    duration: '1:28',
    summary:
      'Por qué en las caídas el problema no es la matemática sino el miedo, y las 3 reglas para mantener la calma.',
    practice: 'Escribir en una hoja tu protocolo de acción antes de que llegue una caída.',
  },
  {
    ep: '10',
    title: 'La regla del 25',
    duration: '1:33',
    summary:
      'La fórmula sencilla (tus gastos anuales × 25, basada en la regla del 4%) para conocer tu cifra exacta de libertad financiera.',
    practice: 'Calcular tus gastos anuales, multiplicarlos por 25 y trazar tu hoja de ruta.',
  },
];

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  favoriteEp?: string;
  createdAtIso?: string;
}

const LOCAL_STORAGE_KEY = 'vivienne_audios_waitlist_v1';

export default function AudiosWaitlistPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteEp, setFavoriteEp] = useState('Todos los episodios');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedUser, setSubmittedUser] = useState<{ name: string; email: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Admin drawer state to view & export leads from Firebase
  const [showAdmin, setShowAdmin] = useState(false);
  const [leads, setLeads] = useState<WaitlistEntry[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [copiedEmails, setCopiedEmails] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.name && parsed?.email) {
          setSubmittedUser(parsed);
        }
      }
      if (typeof window !== 'undefined' && window.location.search.includes('admin=1')) {
        setShowAdmin(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const loadLeadsFromFirebase = async () => {
    setLoadingLeads(true);
    try {
      const { firestore } = getFirebase();
      if (!firestore) return;
      const snap = await getDocs(collection(firestore, 'restaurants', 'vivienne-wolski', 'customers'));
      const list: WaitlistEntry[] = [];
      snap.forEach((d) => {
        const data = d.data();
        if (data && data.email) {
          list.push({
            id: d.id,
            name: data.name || 'Sin nombre',
            email: data.email,
            favoriteEp: data.favoriteEp || 'Todos los episodios',
            createdAtIso: data.createdAtIso || '',
          });
        }
      });
      list.sort((a, b) => (b.createdAtIso || '').localeCompare(a.createdAtIso || ''));
      setLeads(list);
    } catch (err) {
      console.error('Error cargando lista de espera:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (showAdmin) {
      loadLeadsFromFirebase();
    }
  }, [showAdmin]);

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

    setIsSubmitting(true);
    const nowIso = new Date().toISOString();
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');

    const payload = {
      name: cleanName,
      email: cleanEmail,
      favoriteEp,
      series: 'Audios de Vivienne: Dominio del Dinero y Libertad Financiera',
      source: 'wearethesilent.com/audios',
      createdAtIso: nowIso,
      updatedAt: serverTimestamp(),
    };

    try {
      const { firestore } = getFirebase();
      if (firestore) {
        // Guardamos en la colección con permisos activos en Firebase (mesaya-e9644)
        await setDoc(
          doc(firestore, 'restaurants', 'vivienne-wolski', 'customers', docId),
          payload,
          { merge: true }
        );

        // Intento secundario en colección raíz vivienne_waitlist por comodidad
        try {
          await setDoc(doc(firestore, 'vivienne_waitlist', docId), payload, { merge: true });
        } catch {
          // Si las reglas aún no tienen vivienne_waitlist desplegado, el registro principal ya quedó guardado arriba
        }
      }

      // Enviar correo de bienvenida / registro si el endpoint está disponible
      fetch('/api/mesaya-welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          restaurantName: 'Vivienne Wolski · Audios Semanales',
          points: 0,
        }),
      }).catch(() => {});

      const savedObj = { name: cleanName, email: cleanEmail };
      setSubmittedUser(savedObj);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedObj));
      } catch {
        // ignore
      }
      if (showAdmin) {
        loadLeadsFromFirebase();
      }
    } catch (err) {
      console.error('Error al guardar en Firebase:', err);
      setErrorMsg('Hubo un detalle al conectar. Por favor intenta de nuevo en unos segundos.');
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

  const handleExportCsv = () => {
    if (!leads.length) return;
    const header = ['Nombre', 'Correo Electronico', 'Episodio de Interes', 'Fecha ISO'];
    const rows = leads.map((l) => [
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.favoriteEp || '').replace(/"/g, '""')}"`,
      `"${l.createdAtIso || ''}"`,
    ]);
    const csv = [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lista-espera-vivienne-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyEmails = async () => {
    if (!leads.length) return;
    const allEmails = leads.map((l) => l.email).join(', ');
    await navigator.clipboard.writeText(allEmails);
    setCopiedEmails(true);
    setTimeout(() => setCopiedEmails(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6]">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-[#F7F1E6]/95 backdrop-blur-md border-b border-[#D8CBB8]/70 px-5 sm:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#6B1F2A]" />
          <span>Vivienne</span>
        </Link>

        <span className="font-headline text-xs sm:text-sm tracking-[0.3em] uppercase text-[#2B1D14]">
          V · W — Audios Semanales
        </span>

        <button
          type="button"
          onClick={() => scrollToForm()}
          className="text-[10px] font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#6B1F2A] text-[#F7F1E6] hover:bg-[#2B1D14] transition cursor-pointer"
        >
          Lista de espera
        </button>
      </header>

      <main className="flex-1">
        {/* HERO + WAITLIST FORM */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Pitch + Waitlist Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B08D57]/40 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-[0.22em]">
                <Headphones className="w-3.5 h-3.5" />
                <span>Serie Sonora de 10 Semanas · Lista de Espera</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-headline text-3xl sm:text-5xl text-[#2B1D14] leading-[1.08] tracking-tight">
                  Audios de Vivienne:{' '}
                  <span className="italic font-light text-[#6B1F2A]">
                    Dominio del Dinero y Libertad Financiera
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed max-w-2xl">
                  Un audio semanal íntimo, directo al grano y sin tecnicismos vacíos. Cada episodio dura menos de dos minutos y termina con <strong>una sola tarea en papel</strong> para poner tus cuentas en orden y comprar tu propio tiempo.
                </p>
              </div>

              {/* Quote snippet from Episode 1 */}
              <blockquote className="border-l-2 border-[#6B1F2A] pl-4 py-1.5 bg-[#FAF5EC]/80 rounded-r-lg">
                <p className="font-serif italic text-sm sm:text-base text-[#2B1D14] leading-relaxed">
                  &ldquo;Hola, cariño. El dinero no es para presumir ni para parecer rica. El dinero es una forma de comprar tiempo: tiempo para dormir tranquila, tiempo para tu familia y tiempo para decir que no.&rdquo;
                </p>
                <footer className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A7665] mt-1">
                  — Extracto del Episodio 01 · Mentalidad
                </footer>
              </blockquote>

              {/* WAITLIST CAPTURE CARD */}
              <div
                id="formulario-lista"
                className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/50 shadow-[0_20px_50px_rgba(43,29,20,0.08)]"
              >
                {submittedUser ? (
                  <div className="space-y-4 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-[#6B1F2A] font-mono text-xs uppercase tracking-[0.2em]">
                      <CheckCircle2 className="w-5 h-5 text-[#6B1F2A]" />
                      <span>Lugar reservado en la lista privada</span>
                    </div>
                    <h2 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
                      Gracias, <span className="italic text-[#6B1F2A]">{submittedUser.name}</span>.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                      Hemos guardado tu correo (<strong>{submittedUser.email}</strong>). Serás de las primeras personas en recibir el <strong>Episodio 01: Mentalidad</strong> y tu hoja de práctica semanal apenas abramos el acceso.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmittedUser(null);
                          setName('');
                          setEmail('');
                        }}
                        className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#8A7665] hover:text-[#2B1D14] underline underline-offset-4 cursor-pointer"
                      >
                        Registrar otro correo
                      </button>
                      <span className="text-[#D8CBB8]">·</span>
                      <Link
                        href="/domingo"
                        className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#6B1F2A] hover:underline underline-offset-4"
                      >
                        Ir a Honestidad Financiera →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A] font-semibold">
                        Acceso Anticipado · Cupos Prioritarios
                      </span>
                      <h2 className="font-headline text-xl sm:text-2xl text-[#2B1D14]">
                        Anota tu nombre y correo para recibir los audios semanales
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
                          ? 'Guardando tu lugar...'
                          : 'Unirme a la Lista de Espera'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <p className="text-[11px] text-[#8A7665] text-center">
                      Cero spam. Solo la señal de Vivienne cuando cada audio semanal esté listo para escucharse.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Editorial Portrait & Series Spec Card */}
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

        {/* BOOK-STYLE INDEX OF THE 10 WEEKLY AUDIOS */}
        <section className="border-t border-[#D8CBB8]/80 bg-[#FAF5EC] py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.26em] text-[#6B1F2A]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Índice de la Obra Sonora</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#2B1D14]">
                Los 10 Capítulos Semanales
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Cada semana desbloquearemos un capítulo en audio junto con su ejercicio puntual. Toca cualquier episodio para priorizarlo en tu registro.
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

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-headline text-lg sm:text-xl text-[#2B1D14] group-hover:text-[#6B1F2A] transition">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#EFE6D5] text-[#5C4A3E]">
                          ~{item.duration} min
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                        {item.summary}
                      </p>

                      <p className="text-[11px] font-mono text-[#6B1F2A] pt-0.5">
                        <strong>Práctica semanal:</strong> {item.practice}
                      </p>
                    </div>
                  </div>

                  <div className="sm:shrink-0 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665] group-hover:text-[#6B1F2A] self-end sm:self-center">
                    <Lock className="w-3 h-3" />
                    <span>Reservar audio</span>
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
                <span>Anotarme en la Lista de Espera</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ADMIN PANEL TO VIEW & DOWNLOAD FIREBASE WAITLIST LEADS */}
        {showAdmin && (
          <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12 border-t border-[#D8CBB8]">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border border-[#B08D57] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8CBB8] pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
                    <Users className="w-3.5 h-3.5" />
                    <span>Firebase Firestore · Registros en Vivo</span>
                  </div>
                  <h3 className="font-headline text-2xl text-[#2B1D14] mt-1">
                    Inscritos en la Lista de Espera ({leads.length})
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={loadLeadsFromFirebase}
                    className="px-3.5 py-2 rounded-lg border border-[#D8CBB8] hover:border-[#2B1D14] text-[11px] font-mono uppercase tracking-wider text-[#2B1D14] cursor-pointer"
                  >
                    {loadingLeads ? 'Actualizando...' : 'Actualizar'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyEmails}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#D8CBB8] hover:border-[#6B1F2A] text-[11px] font-mono uppercase tracking-wider text-[#2B1D14] disabled:opacity-50 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedEmails ? '¡Correos copiados!' : 'Copiar correos'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleExportCsv}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] text-[11px] font-mono uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar CSV</span>
                  </button>
                </div>
              </div>

              {loadingLeads ? (
                <p className="text-xs font-mono text-[#8A7665] py-6 text-center">
                  Consultando Firebase Firestore...
                </p>
              ) : leads.length === 0 ? (
                <p className="text-xs font-mono text-[#8A7665] py-6 text-center">
                  Aún no hay registros en la lista de espera. Haz una prueba en el formulario de arriba.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-[#D8CBB8] text-[10px] font-mono uppercase tracking-wider text-[#8A7665]">
                        <th className="py-2.5 pr-4">Nombre</th>
                        <th className="py-2.5 pr-4">Correo Electrónico</th>
                        <th className="py-2.5 pr-4">Capítulo de Interés</th>
                        <th className="py-2.5">Fecha</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D8CBB8]/50">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-[#F7F1E6]/60">
                          <td className="py-3 pr-4 font-medium text-[#2B1D14]">{lead.name}</td>
                          <td className="py-3 pr-4 font-mono text-[#6B1F2A]">{lead.email}</td>
                          <td className="py-3 pr-4 text-[#5C4A3E]">{lead.favoriteEp}</td>
                          <td className="py-3 font-mono text-[11px] text-[#8A7665]">
                            {lead.createdAtIso ? lead.createdAtIso.slice(0, 16).replace('T', ' ') : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-[#2B1D14] transition">
            ← Volver a Vivienne
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#2B1D14] transition">
            El Armario
          </Link>
          <span>·</span>
          <Link href="/domingo" className="hover:text-[#2B1D14] transition">
            Honestidad Financiera
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} Vivienne Wolski</span>
          <span>·</span>
          <button
            type="button"
            onClick={() => setShowAdmin((prev) => !prev)}
            className="hover:text-[#6B1F2A] underline underline-offset-4 cursor-pointer"
          >
            {showAdmin ? 'Ocultar registros' : 'Ver inscritos (Firebase)'}
          </button>
        </div>
      </footer>
    </div>
  );
}
