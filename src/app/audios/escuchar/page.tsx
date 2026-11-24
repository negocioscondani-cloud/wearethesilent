'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Headphones,
  BookOpen,
  Sparkles,
  Lock,
  Play,
  Pause,
  X,
  Volume2,
  Calendar,
  Quote,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export interface EpisodeIndexItem {
  ep: string;
  dayNumber: number;
  unlockDateIso: string;
  unlockDateText: string;
  title: string;
  duration: string;
  audioUrl: string;
  powerQuote: string;
  summary: string;
  topics: string[];
}

export const EPISODES_INDEX: EpisodeIndexItem[] = [
  {
    ep: '01',
    dayNumber: 1,
    unlockDateIso: '2026-11-23',
    unlockDateText: '23 de noviembre',
    title: 'Mentalidad',
    duration: '1:35',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep01-Mentalidad.mp3',
    powerQuote:
      'El dinero es una forma de comprar tiempo. Tiempo para dormir tranquila. Tiempo para tu familia. Tiempo para decir que no.',
    summary:
      'Por qué el dinero no es para presumir sino para comprar tiempo, y cómo salir de la trampa de cambiar horas por sueldo.',
    topics: [
      'El dinero como compra de tiempo',
      'La trampa de cambiar horas por sueldo',
      'Aportar valor escalable',
      'Riqueza real vs. apariencia de lujo',
    ],
  },
  {
    ep: '02',
    dayNumber: 2,
    unlockDateIso: '2026-11-24',
    unlockDateText: '24 de noviembre',
    title: 'Presupuesto 25-15-50-10',
    duration: '1:31',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep02-Presupuesto-25-15-50-10.mp3',
    powerQuote:
      'Un dinero que gastas en lo que te da alegría es parte del plan, no un pecado.',
    summary:
      'El sistema de cuatro números para repartir cada ingreso: 25% inversión, 15% colchón, 50% esencial y 10% disfrute sin culpa.',
    topics: [
      '25% Crecimiento e inversión',
      '15% Colchón de emergencia (3 a 6 meses)',
      '50% Gastos esenciales',
      '10% Disfrute sin culpa',
    ],
  },
  {
    ep: '03',
    dayNumber: 3,
    unlockDateIso: '2026-11-25',
    unlockDateText: '25 de noviembre',
    title: 'Deuda',
    duration: '1:24',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep03-Deuda.mp3',
    powerQuote:
      'Pagar una deuda cara es el mejor negocio seguro que existe.',
    summary:
      'Cómo distinguir el apalancamiento productivo de la deuda cara, y por qué liquidar tarjetas al 24% es el negocio más seguro.',
    topics: [
      'Deuda destructiva vs. apalancamiento',
      'La matemática real del 24% anual',
      'Rentabilidad libre de riesgo al liquidar deudas',
      'Activos que devuelven vs. pasivos que drenan',
    ],
  },
  {
    ep: '04',
    dayNumber: 4,
    unlockDateIso: '2026-11-26',
    unlockDateText: '26 de noviembre',
    title: 'Los primeros 10 mil',
    duration: '1:24',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep04-Los-primeros-10-mil.mp3',
    powerQuote:
      'Trabajas, ahorras, inviertes y sientes que no pasa nada. Es el momento en que muchos se cansan.',
    summary:
      'Cómo atravesar la etapa más exigente del ahorro sin agotarte hasta que el interés compuesto empiece a acelerar por ti.',
    topics: [
      'La disciplina de los primeros $10,000',
      'El valle de paciencia rumbo a los $100,000',
      'El punto de inflexión del interés compuesto',
      'Automatización y metas progresivas',
    ],
  },
  {
    ep: '05',
    dayNumber: 5,
    unlockDateIso: '2026-11-27',
    unlockDateText: '27 de noviembre',
    title: 'Invertir sin ser experta',
    duration: '1:30',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep05-Invertir-sin-ser-experta.mp3',
    powerQuote:
      'Nadie sabe adivinar los ciclos, ni siquiera los expertos.',
    summary:
      'El método silencioso y diversificado para hacer crecer tu patrimonio a largo plazo sin adivinar acciones individuales.',
    topics: [
      'Fondos indexados y diversificación global',
      'Bajas comisiones y horizonte de largo plazo',
      'Aportes periódicos automáticos (DCA)',
      'Tranquilidad frente a la especulación',
    ],
  },
  {
    ep: '06',
    dayNumber: 6,
    unlockDateIso: '2026-11-28',
    unlockDateText: '28 de noviembre',
    title: 'Lo que no debes comprar',
    duration: '1:24',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep06-Lo-que-no-debes-comprar.mp3',
    powerQuote:
      'Lo que ves en vitrina muchas veces es deuda con buen maquillaje.',
    summary:
      'Las tres grandes fugas silenciosas: el auto nuevo financiado, las suscripciones fantasma y el costo de aparentar.',
    topics: [
      'Depreciación del auto nuevo financiado',
      'Suscripciones fantasma ($480/año invisibles)',
      'El costo financiero de aparentar estatus',
      'Auditoría de fugas y regla de las 48 horas',
    ],
  },
  {
    ep: '07',
    dayNumber: 7,
    unlockDateIso: '2026-11-29',
    unlockDateText: '29 de noviembre',
    title: 'Segunda entrada de dinero',
    duration: '1:28',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep07-Segunda-entrada-de-dinero.mp3',
    powerQuote:
      'Tu primera venta importa más que tu mejor idea.',
    summary:
      'Tres rutas reales (comercio digital, servicios remotos e IA) para sumar una segunda entrada validando antes de gastar.',
    topics: [
      'Comercio y productos digitales',
      'Servicios remotos de alto valor',
      'Apalancamiento con Inteligencia Artificial',
      'Validación previa antes de invertir capital',
    ],
  },
  {
    ep: '08',
    dayNumber: 8,
    unlockDateIso: '2026-11-30',
    unlockDateText: '30 de noviembre',
    title: 'Inflación',
    duration: '1:17',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep08-Inflacion.mp3',
    powerQuote:
      'No perdiste dinero en la cuenta, pero perdiste lo que ese dinero puede comprar.',
    summary:
      'Cómo evitar que tu efectivo parado pierda poder de compra cada año y cómo aprovechar cuentas con ventajas fiscales.',
    topics: [
      'La erosión silenciosa del poder adquisitivo',
      'Por qué el exceso de efectivo parado pierde valor',
      'Cuentas con ventaja fiscal (ISA, Roth IRA, 401k, pensiones)',
      'Crecimiento compuesto fiscalmente eficiente',
    ],
  },
  {
    ep: '09',
    dayNumber: 9,
    unlockDateIso: '2026-12-01',
    unlockDateText: '1 de diciembre',
    title: 'Cuando el mercado cae',
    duration: '1:28',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep09-Cuando-el-mercado-cae.mp3',
    powerQuote:
      'El problema no es la matemática, cariño. Es el miedo.',
    summary:
      'Por qué en las caídas el problema no es la matemática sino el miedo, y las 3 reglas para mantener la calma.',
    topics: [
      'Psicología e historia de las caídas bursátiles',
      'Las correcciones como temporada de rebajas',
      'Protección mediante el fondo de emergencia',
      'Protocolo de serenidad a largo plazo',
    ],
  },
  {
    ep: '10',
    dayNumber: 10,
    unlockDateIso: '2026-12-02',
    unlockDateText: '2 de diciembre',
    title: 'Libertad',
    duration: '1:33',
    audioUrl:
      'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/11/Vivienne-Ep10-Libertad.mp3',
    powerQuote:
      'El dinero es tiempo, y el tiempo es lo único que no se recupera.',
    summary:
      'La fórmula sencilla (tus gastos anuales × 25, basada en la regla del 4%) para conocer tu cifra exacta de libertad financiera.',
    topics: [
      'Cálculo de tu Número de Libertad (Gastos × 25)',
      'La regla de retiro seguro del 4%',
      'Impacto de reducir $1,000 anuales (-$25,000 en la meta)',
      'Hoja de ruta anual hacia la soberanía del tiempo',
    ],
  },
];

const LOCAL_STORAGE_KEY = 'vivienne_audios_waitlist_v1';

function getLocalTodayIso(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function AudiosPlayerPage() {
  const [registeredUser, setRegisteredUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [todayIso, setTodayIso] = useState<string>('2026-11-23');

  // Pop-up Audio Player state
  const [activeEpisode, setActiveEpisode] = useState<EpisodeIndexItem | null>(null);
  const [lockedPreviewEpisode, setLockedPreviewEpisode] = useState<EpisodeIndexItem | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationSec, setDurationSec] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  useEffect(() => {
    setTodayIso(getLocalTodayIso());
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.name && parsed?.email) {
          setRegisteredUser(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const isEpisodeUnlocked = (item: EpisodeIndexItem): boolean => {
    if (item.dayNumber === 1) return true;
    return todayIso >= item.unlockDateIso;
  };

  const unlockedCount = EPISODES_INDEX.filter((item) => isEpisodeUnlocked(item)).length;
  const latestUnlockedEpisode =
    [...EPISODES_INDEX].reverse().find((item) => isEpisodeUnlocked(item)) || EPISODES_INDEX[0];

  const openAudioPopup = (item: EpisodeIndexItem) => {
    if (!isEpisodeUnlocked(item)) {
      setLockedPreviewEpisode(item);
      return;
    }
    setActiveEpisode(item);
    setCurrentTime(0);
    setDurationSec(0);
    setIsPlaying(true);
    setPlaybackRate(1);
  };

  const closeAudioPopup = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setActiveEpisode(null);
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleSkipSeconds = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Math.max(0, Math.min(audio.duration || 100, audio.currentTime + delta));
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const formatSeconds = (sec: number) => {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6] font-body">
      {/* Top Editorial Navigation */}
      <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex items-center justify-between bg-[#F7F1E6]/95 sticky top-0 z-30 backdrop-blur-md">
        <Link
          href="/audios"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Registro</span>
        </Link>

        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A]">
          <Headphones className="w-3.5 h-3.5" />
          <span>Sala de Reproducción · {unlockedCount}/10 Desbloqueados</span>
        </div>

        <Link
          href="/vivianne-wolski/armario"
          className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition hidden sm:inline-block"
        >
          Maison Wolski →
        </Link>
      </header>

      <main className="flex-1 w-full">
        {/* Welcome & Today's Featured Episode Banner */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-12">
          <div className="p-6 sm:p-9 rounded-3xl bg-[#2B1D14] text-[#F7F1E6] border border-[#B08D57]/60 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {registeredUser && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F1E6]/10 text-[#E6D5B8] text-[10px] font-mono uppercase tracking-[0.22em]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57]" />
                  <span>Hola, {registeredUser.name} · Acceso activado</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B1F2A] text-[#F7F1E6] text-[10px] font-mono uppercase tracking-[0.22em]">
                  <Volume2 className="w-3 h-3" />
                  <span>Audio Desbloqueado Hoy · Día {latestUnlockedEpisode.dayNumber}</span>
                </span>
                <span className="text-xs font-mono text-[#E6D5B8]">
                  Ep{latestUnlockedEpisode.ep} · ~{latestUnlockedEpisode.duration} min
                </span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#F7F1E6] leading-tight">
                Ep{latestUnlockedEpisode.ep} · {latestUnlockedEpisode.title}
              </h1>

              <blockquote className="border-l-2 border-[#B08D57] pl-4 py-1">
                <p className="font-serif italic text-base sm:text-lg text-[#E6D5B8] leading-relaxed">
                  &ldquo;{latestUnlockedEpisode.powerQuote}&rdquo;
                </p>
              </blockquote>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openAudioPopup(latestUnlockedEpisode)}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#6B1F2A] hover:bg-[#8B2938] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition shadow-lg cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Abrir Reproductor · Episodio {latestUnlockedEpisode.ep}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={() => openAudioPopup(latestUnlockedEpisode)}
                className="group relative w-52 sm:w-60 aspect-[4/5] rounded-2xl overflow-hidden border border-[#B08D57] shadow-2xl cursor-pointer"
              >
                <Image
                  src="/images/vivianne-wolski-hero.jpg"
                  alt="Vivienne Wolski"
                  fill
                  sizes="240px"
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#6B1F2A]/95 text-[#F7F1E6] flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full List of the 10 Daily Unlocking Audios */}
        <section className="border-t border-[#D8CBB8]/80 bg-[#FAF5EC] py-14 sm:py-18">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.26em] text-[#6B1F2A]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>1 Episodio Nuevo Cada Día · {unlockedCount} de 10 Desbloqueados</span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#2B1D14]">
                Los 10 Audios de Vivienne
              </h2>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Toca cualquier episodio desbloqueado para abrir su ventana reproductora y escucharlo. Mañana se desbloqueará el siguiente capítulo automáticamente.
              </p>
            </div>

            <div className="space-y-4">
              {EPISODES_INDEX.map((item) => {
                const unlocked = isEpisodeUnlocked(item);
                return (
                  <div
                    key={item.ep}
                    onClick={() => openAudioPopup(item)}
                    className={`group p-5 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                      unlocked
                        ? 'bg-[#F7F1E6] border-[#B08D57] hover:border-[#6B1F2A] shadow-[0_10px_30px_rgba(43,29,20,0.06)]'
                        : 'bg-[#F7F1E6]/60 border-[#D8CBB8]/80 hover:border-[#B08D57]'
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5 flex-1">
                      <div
                        className={`w-13 h-13 rounded-2xl border font-mono text-xs font-bold flex flex-col items-center justify-center shrink-0 transition ${
                          unlocked
                            ? 'bg-[#6B1F2A] border-[#6B1F2A] text-[#F7F1E6] shadow-sm group-hover:bg-[#2B1D14]'
                            : 'bg-[#FAF5EC] border-[#D8CBB8] text-[#8A7665]'
                        }`}
                      >
                        <span className="text-[8px] uppercase tracking-wider opacity-80">
                          Ep.
                        </span>
                        <span className="text-sm">{item.ep}</span>
                      </div>

                      <div className="space-y-2.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3
                            className={`font-headline text-xl sm:text-2xl transition ${
                              unlocked
                                ? 'text-[#2B1D14] group-hover:text-[#6B1F2A]'
                                : 'text-[#5C4A3E]'
                            }`}
                          >
                            Ep{item.ep} · {item.title}
                          </h3>

                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE6D5] text-[#5C4A3E]">
                            ~{item.duration} min
                          </span>

                          {unlocked ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#6B1F2A]/15 text-[#6B1F2A] font-semibold">
                              <Volume2 className="w-3 h-3" />
                              <span>Desbloqueado · Día {item.dayNumber}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF5EC] border border-[#D8CBB8] text-[#8A7665]">
                              <Calendar className="w-3 h-3" />
                              <span>
                                Día {item.dayNumber} · Se desbloquea el {item.unlockDateText}
                              </span>
                            </span>
                          )}
                        </div>

                        <blockquote className="border-l-2 border-[#6B1F2A] pl-3.5 py-1 bg-[#FAF5EC]/90 rounded-r-xl">
                          <p className="font-serif italic text-sm sm:text-base text-[#2B1D14] leading-relaxed">
                            &ldquo;{item.powerQuote}&rdquo;
                          </p>
                          <footer className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#6B1F2A] mt-0.5">
                            — Vivienne Wolski · Frase del Episodio {item.ep}
                          </footer>
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

                    <div className="md:shrink-0 self-start md:self-center">
                      {unlocked ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openAudioPopup(item);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#6B1F2A] group-hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-[11px] uppercase tracking-[0.18em] transition shadow-sm cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Escuchar Audio</span>
                        </button>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF5EC] border border-[#D8CBB8] text-[#8A7665] font-mono text-[10px] uppercase tracking-[0.18em]">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Disponible {item.unlockDateText}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/audios" className="hover:text-[#2B1D14] transition">
            ← Volver a Registro
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-[#2B1D14] transition">
            Vivienne Wolski
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#2B1D14] transition">
            Maison Wolski
          </Link>
          <span>·</span>
          <Link href="/diario" className="hover:text-[#2B1D14] transition">
            El Blog de Vivi
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Vivienne Wolski</span>
      </footer>

      {/* POP-UP REPRODUCTOR DE AUDIO OFICIAL */}
      {activeEpisode && (
        <div
          onClick={closeAudioPopup}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E140E]/75 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-3xl bg-[#FAF5EC] border-2 border-[#B08D57] shadow-[0_30px_90px_rgba(0,0,0,0.45)] overflow-hidden text-[#2B1D14]"
          >
            <div className="bg-[#2B1D14] text-[#F7F1E6] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#B08D57] relative shrink-0">
                  <Image
                    src="/images/vivianne-wolski-hero.jpg"
                    alt="Vivienne Wolski"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="block text-[9.5px] font-mono uppercase tracking-[0.24em] text-[#E6D5B8]">
                    Audios de Vivienne · Día {activeEpisode.dayNumber} de 10
                  </span>
                  <h3 className="font-headline text-xl text-[#F7F1E6]">
                    Ep{activeEpisode.ep} · {activeEpisode.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={closeAudioPopup}
                className="w-9 h-9 rounded-full bg-[#F7F1E6]/10 hover:bg-[#6B1F2A] text-[#F7F1E6] flex items-center justify-center transition cursor-pointer"
                aria-label="Cerrar reproductor"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="p-5 rounded-2xl bg-[#F7F1E6] border border-[#B08D57]/60 space-y-2 relative">
                <Quote className="w-5 h-5 text-[#6B1F2A]/40" />
                <p className="font-serif italic text-lg sm:text-xl text-[#2B1D14] leading-relaxed">
                  &ldquo;{activeEpisode.powerQuote}&rdquo;
                </p>
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
                  — Vivienne Wolski · Palabra por palabra en este episodio
                </p>
              </div>

              <audio
                ref={audioRef}
                src={activeEpisode.audioUrl}
                autoPlay
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDurationSec(e.currentTarget.duration)}
                className="hidden"
              />

              <div className="p-5 rounded-2xl bg-[#2B1D14] text-[#F7F1E6] space-y-4 shadow-inner">
                <div className="space-y-1.5">
                  <input
                    type="range"
                    min={0}
                    max={durationSec || 100}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full accent-[#B08D57] h-1.5 bg-[#5C4A3E] rounded-lg cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#E6D5B8]">
                    <span>{formatSeconds(currentTime)}</span>
                    <span>
                      {durationSec ? formatSeconds(durationSec) : activeEpisode.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleSkipSeconds(-10)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F7F1E6]/10 hover:bg-[#F7F1E6]/20 text-[11px] font-mono text-[#E6D5B8] transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>-10s</span>
                  </button>

                  <button
                    type="button"
                    onClick={togglePlayPause}
                    className="w-14 h-14 rounded-full bg-[#6B1F2A] hover:bg-[#8B2938] text-[#F7F1E6] flex items-center justify-center shadow-lg transition transform hover:scale-105 cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={cyclePlaybackRate}
                    className="px-3 py-1.5 rounded-lg bg-[#F7F1E6]/10 hover:bg-[#F7F1E6]/20 text-[11px] font-mono text-[#E6D5B8] transition cursor-pointer"
                    title="Velocidad de reproducción"
                  >
                    {playbackRate}x
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                  {activeEpisode.summary}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {activeEpisode.topics.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#F7F1E6] border border-[#D8CBB8] text-[#2B1D14]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POP-UP PARA EPISODIOS QUE SE DESBLOQUEAN EN LOS PRÓXIMOS DÍAS */}
      {lockedPreviewEpisode && (
        <div
          onClick={() => setLockedPreviewEpisode(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E140E]/70 backdrop-blur-xs p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full rounded-3xl bg-[#FAF5EC] border border-[#B08D57] p-6 sm:p-8 shadow-2xl space-y-5 text-[#2B1D14]"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1F2A]/10 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-[0.2em]">
                <Lock className="w-3.5 h-3.5" />
                <span>
                  Día {lockedPreviewEpisode.dayNumber} · Se desbloquea el{' '}
                  {lockedPreviewEpisode.unlockDateText}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLockedPreviewEpisode(null)}
                className="p-1.5 rounded-full hover:bg-[#EFE6D5] text-[#8A7665] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
                Ep{lockedPreviewEpisode.ep} · {lockedPreviewEpisode.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
                Este episodio se desbloqueará automáticamente el{' '}
                <strong>{lockedPreviewEpisode.unlockDateText}</strong> siguiendo el orden diario de la serie de Vivienne.
              </p>
            </div>

            <blockquote className="p-4 rounded-2xl bg-[#F7F1E6] border-l-3 border-[#6B1F2A] space-y-1">
              <p className="font-serif italic text-base sm:text-lg text-[#2B1D14]">
                &ldquo;{lockedPreviewEpisode.powerQuote}&rdquo;
              </p>
              <footer className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#6B1F2A]">
                — Adelanto de la frase de Vivienne en el Ep. {lockedPreviewEpisode.ep}
              </footer>
            </blockquote>

            <div className="pt-1 flex justify-end">
              <button
                type="button"
                onClick={() => setLockedPreviewEpisode(null)}
                className="py-3 px-6 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] text-xs font-mono uppercase tracking-wider cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
