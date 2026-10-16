'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowUpRight,
} from 'lucide-react';

export interface RouletteVideoItem {
  tag: string;
  title: { es: string; en: string };
  desc: { es: string; en: string };
  url: string;
}

export const SHOWCASE_VIDEOS: RouletteVideoItem[] = [
  {
    tag: 'UGC MODA',
    title: {
      es: 'Comercial UGC · Moda & Accesorios',
      en: 'UGC Commercial · Fashion & Accessories',
    },
    desc: {
      es: 'Comercial UGC enfocado en moda y bolsos con modelo/influencer IA, iluminación de estudio, dinamismo visual y textura hiperrealista.',
      en: 'Fashion UGC commercial showcasing designer accessories with AI model, studio lighting, visual rhythm and striking realism.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/comercial-bolso.mp4',
  },
  {
    tag: 'ENTREVISTA MODERNA',
    title: {
      es: 'Formato Entrevista Dinámica',
      en: 'Modern Dynamic Interview',
    },
    desc: {
      es: 'Formato moderno de entrevista con estética editorial contemporánea; ideal para responder preguntas clave, derrumbar objeciones y posicionar autoridad de marca.',
      en: 'Modern editorial interview format; ideal for answering key customer questions, breaking objections, and building strong brand authority.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/Entrevista.mp4',
  },
  {
    tag: 'DIRECT TO CAMERA',
    title: {
      es: 'Hablado a Cámara de Alto Impacto',
      en: 'High-Impact Direct to Camera',
    },
    desc: {
      es: 'Avatar IA con presencia magnética hablando directo al espectador; dicción fluida, gestos naturales y retención absoluta en los primeros 3 segundos.',
      en: 'AI avatar with magnetic presence speaking directly to viewer; fluid delivery, organic gestures, and instant 3-second retention.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/68de8fbe-675f-4463-958d-45f031a2d433.mp4',
  },
  {
    tag: 'EDUCATIVO',
    title: {
      es: 'Educativo · Creación de Influencer IA',
      en: 'Educational · AI Influencer Creation',
    },
    desc: {
      es: 'Formato tutorial de alto valor donde el influencer enseña el paso a paso para crear personajes con IA, generando autoridad y engagement.',
      en: 'High-value tutorial format where the influencer teaches the step-by-step to create AI personas, driving authority and engagement.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/playground-result-1790652290876.mp4',
  },
  {
    tag: 'REEL / STORIES',
    title: {
      es: 'Micro-Reel & Stories para Instagram',
      en: 'Micro-Reel & Instagram Stories',
    },
    desc: {
      es: 'Micro-video vertical ágil optimizado para consumo rápido en Instagram y TikTok, con llamada a la acción precisa para disparar clicks y mensajes directos.',
      en: 'Agile vertical micro-video optimized for fast consumption on Instagram and TikTok, with a crisp CTA to trigger clicks and direct messages.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/playground-result-1790632005574.mp4',
  },
  {
    tag: 'STREET Q&A',
    title: {
      es: 'Street Q&A · Preguntas en la Calle',
      en: 'Street Q&A · Urban Micro-Interview',
    },
    desc: {
      es: 'Interacción espontánea en exteriores estilo documental urbano con micrófono; genera curiosidad natural y conexión empática inmediata con el público.',
      en: 'Spontaneous outdoor street-style documentary interaction; fuels organic curiosity and immediate empathetic audience connection.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/37f2aac3-33a4-436a-9b1f-f7a7013dacf2.mp4',
  },
  {
    tag: 'META ADS',
    title: {
      es: 'Anuncio Directo para Meta Ads & Conversión',
      en: 'High-Converting Meta Ads Creative',
    },
    desc: {
      es: 'Creativo publicitario estructurado con gancho visual, propuesta de valor clara y llamado a la acción probado para pauta pagada en Facebook, Instagram y TikTok.',
      en: 'Direct-response advertising creative structured with a strong hook, clear value proposition, and proven CTA for paid ads on Facebook, Instagram and TikTok.',
    },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/4adccb1c-ce25-44b8-80f1-bffd22a2d8dc.mp4',
  },
];

interface VideoRouletteShowcaseProps {
  language: 'es' | 'en';
  whatsappNum?: string;
}

export function VideoRouletteShowcase({
  language,
  whatsappNum = '50664194111',
}: VideoRouletteShowcaseProps) {
  const langKey = language === 'es' ? 'es' : 'en';
  const total = SHOWCASE_VIDEOS.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const wheelLockRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Move next: video on the right (+1) glides to center (0), center (0) glides to left (-1)
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setIsPlaying(true);
  }, [total]);

  // Move prev: video on the left (-1) glides to center (0), center (0) glides to right (+1)
  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setIsPlaying(true);
  }, [total]);

  // Play only the active center video, pause side videos
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIndex) {
        vid.muted = isMuted;
        if (isPlaying) {
          vid.play().catch(() => {
            // If browser blocks unmuted autoplay, fallback to muted
            vid.muted = true;
            setIsMuted(true);
            vid.play().catch(() => {});
          });
        } else {
          vid.pause();
        }
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [activeIndex, isMuted, isPlaying]);

  // Automatic Roulette motion (Right -> Center -> Left) every 5.2 seconds
  // Pauses auto-rotation while user has sound unmuted or hovers over the center video
  useEffect(() => {
    if (!isMuted || isHoveringCenter || !isPlaying) return;
    const timer = setInterval(() => {
      goNext();
    }, 5200);
    return () => clearInterval(timer);
  }, [goNext, isMuted, isHoveringCenter, isPlaying]);

  // Smooth Wheel / Trackpad scroll -> advances roulette one by one (Right -> Center -> Left)
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 18) return;

      // Prevent vertical page jump while rotating roulette over the stage
      e.preventDefault();

      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      if (delta > 0) {
        goNext(); // Scroll down/right: moves center -> left, brings right -> center
      } else {
        goPrev(); // Scroll up/left: moves center -> right, brings left -> center
      }

      setTimeout(() => {
        wheelLockRef.current = false;
      }, 650);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  // Touch swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goNext(); // Swipe left: moves center -> left, brings right -> center
      } else {
        goPrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Compute shortest circular signed offset in [-3, +3]
  const getSignedOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeVideo = SHOWCASE_VIDEOS[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#0A0D0E] relative overflow-hidden select-none">
      {/* Subtle golden ambient radial glow behind the center roulette card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(216,185,130,0.32) 0%, rgba(197,160,89,0.08) 55%, transparent 75%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="font-mono text-[11px] text-[#D8B982] tracking-[0.22em] uppercase inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#C5A059]/70 inline-block" />
            <span>
              {language === 'es'
                ? 'RULETA INTERACTIVA DE FORMATOS · 9:16'
                : 'INTERACTIVE 9:16 FORMAT ROULETTE'}
            </span>
            <span className="w-6 h-px bg-[#C5A059]/70 inline-block" />
          </div>
          <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-[#F7F4ED] tracking-tight">
            {language === 'es'
              ? 'Formatos de Video Diseñados para Vender'
              : 'Video Formats Engineered to Convert'}
          </h2>
          <p className="text-[#C8C0B3] text-sm sm:text-base mt-3 leading-relaxed font-light">
            {language === 'es'
              ? 'Desliza o gira la ruleta para explorar de uno en uno nuestros 7 formatos de mayor impacto: entran desde la derecha hacia el centro y avanzan hacia la izquierda.'
              : 'Scroll or spin the roulette to explore our 7 highest-converting formats one by one: gliding from right to center and out to the left.'}
          </p>
        </div>

        {/* 3D ROULETTE STAGE */}
        <div
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[500px] sm:h-[560px] w-full flex items-center justify-center"
          style={{ perspective: '1400px' }}
        >
          {/* Left Roulette Arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label={language === 'es' ? 'Video anterior' : 'Previous video'}
            className="absolute left-0 sm:left-4 md:left-8 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#12100D]/85 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 shadow-[0_0_25px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Roulette Arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label={language === 'es' ? 'Siguiente video' : 'Next video'}
            className="absolute right-0 sm:right-4 md:right-8 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#12100D]/85 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 shadow-[0_0_25px_rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Roulette Cards */}
          {SHOWCASE_VIDEOS.map((video, idx) => {
            const offset = getSignedOffset(idx);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // Compute 3D Roulette transform based on signed offset (Right -> Center -> Left)
            let transform = 'translate3d(0px, 0px, -400px) scale(0.5)';
            let opacity = 0;
            let zIndex = 0;
            let pointerEvents: 'auto' | 'none' = 'none';

            if (offset === 0) {
              // Spotlight Center
              transform = 'translate3d(0%, 0px, 40px) scale(1) rotateY(0deg)';
              opacity = 1;
              zIndex = 30;
              pointerEvents = 'auto';
            } else if (offset === 1) {
              // Entering from the Right
              transform = 'translate3d(82%, 14px, -110px) scale(0.78) rotateY(-30deg)';
              opacity = 0.55;
              zIndex = 20;
              pointerEvents = 'auto';
            } else if (offset === -1) {
              // Exiting to the Left
              transform = 'translate3d(-82%, 14px, -110px) scale(0.78) rotateY(30deg)';
              opacity = 0.55;
              zIndex = 20;
              pointerEvents = 'auto';
            } else if (offset === 2) {
              // Far Right queue
              transform = 'translate3d(142%, 34px, -250px) scale(0.62) rotateY(-44deg)';
              opacity = 0.22;
              zIndex = 10;
              pointerEvents = 'auto';
            } else if (offset === -2) {
              // Far Left queue
              transform = 'translate3d(-142%, 34px, -250px) scale(0.62) rotateY(44deg)';
              opacity = 0.22;
              zIndex = 10;
              pointerEvents = 'auto';
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (!isCenter && absOffset <= 2) {
                    setActiveIndex(idx);
                    setIsPlaying(true);
                  }
                }}
                onMouseEnter={() => {
                  if (isCenter) setIsHoveringCenter(true);
                }}
                onMouseLeave={() => {
                  if (isCenter) setIsHoveringCenter(false);
                }}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition:
                    'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 650ms ease, box-shadow 500ms ease',
                }}
                className={`absolute w-[255px] sm:w-[295px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#0E0D0B] ${
                  isCenter
                    ? 'border-2 border-[#D8B982] shadow-[0_22px_70px_rgba(216,185,130,0.32)]'
                    : 'border border-white/15 cursor-pointer hover:opacity-80'
                }`}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={video.url}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted={isCenter ? isMuted : true}
                  preload="metadata"
                />

                {/* Top Format Badge & Index */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#C5A059]/45 text-[#DFC28E] font-mono text-[9px] uppercase tracking-wider font-bold">
                    {video.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/70 text-[#C8C0B3] font-mono text-[10px]">
                    0{idx + 1}/0{total}
                  </span>
                </div>

                {/* Interactive Sound & Play/Pause Controls on Center Spotlight Video */}
                {isCenter && (
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying((prev) => !prev);
                      }}
                      className="w-9 h-9 rounded-full bg-black/75 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 flex items-center justify-center backdrop-blur-md transition cursor-pointer"
                      aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted((prev) => !prev);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 font-mono text-[10px] uppercase tracking-wider font-bold backdrop-blur-md transition cursor-pointer"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>{language === 'es' ? 'Activar Audio' : 'Unmute'}</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>{language === 'es' ? 'Con Audio' : 'Sound On'}</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Dark overlay on non-center cards to emphasize depth */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/45 transition-opacity hover:bg-black/20" />
                )}
              </div>
            );
          })}
        </div>

        {/* Active Video Details & Conversion Bar */}
        <div className="max-w-xl mx-auto mt-8 text-center space-y-4 bg-[#12100D]/90 border border-[#C5A059]/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D8B982]">
            <span>
              {language === 'es' ? 'FORMATO EN PANTALLA' : 'ACTIVE FORMAT'} · 0{activeIndex + 1} / 0
              {total}
            </span>
          </div>

          <h3 className="font-fraunces font-bold text-2xl sm:text-3xl text-[#F7F4ED]">
            {activeVideo.title[langKey]}
          </h3>

          <p className="text-[#C8C0B3] text-xs sm:text-sm leading-relaxed font-light">
            {activeVideo.desc[langKey]}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent(
                language === 'es'
                  ? `¡Hola! Me gustaría cotizar un video en el formato: ${activeVideo.title.es} (₡30.000 / $60 USD o en paquete).`
                  : `Hi! I want to quote a video in the format: ${activeVideo.title.en} (₡30,000 / $60 USD or package).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_25px_rgba(216,185,130,0.3)] hover:scale-[1.02] transition"
            >
              <span>
                {language === 'es' ? 'Pedir este formato' : 'Order this format'}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Roulette Step Dots */}
          <div className="pt-3 flex items-center justify-center gap-2">
            {SHOWCASE_VIDEOS.map((v, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPlaying(true);
                }}
                aria-label={`Ver formato ${idx + 1}: ${v.title[langKey]}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 bg-[#D8B982]'
                    : 'w-2 bg-white/20 hover:bg-[#C5A059]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
