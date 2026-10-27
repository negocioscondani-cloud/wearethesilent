'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export interface RouletteVideoItem {
  tag: string;
  title: { es: string; en: string };
  desc: { es: string; en: string };
  url: string;
  accentGradient: string;
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(216,185,130,0.28) 0%, rgba(26,21,15,0.92) 58%, #0B0A08 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(197,160,89,0.25) 0%, rgba(18,22,26,0.94) 58%, #090C0E 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(229,200,141,0.26) 0%, rgba(24,19,14,0.94) 58%, #0A0907 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(186,150,90,0.26) 0%, rgba(17,20,24,0.94) 58%, #080A0C 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(216,185,130,0.25) 0%, rgba(25,20,16,0.94) 58%, #0B0908 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(197,160,89,0.24) 0%, rgba(19,22,24,0.94) 58%, #090B0C 100%)',
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
    accentGradient:
      'radial-gradient(circle at 50% 32%, rgba(229,203,161,0.28) 0%, rgba(24,19,13,0.94) 58%, #0A0806 100%)',
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
  const [isInView, setIsInView] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const activeVideoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const wheelLockRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);

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

  // Track viewport visibility so we only decode video when the user is actually looking at the section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      { rootMargin: '120px 0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track browser tab visibility: immediately release GPU video decoder when user switches to YouTube or another tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      const visible = document.visibilityState === 'visible';
      setIsTabVisible(visible);
      if (!visible && activeVideoRef.current) {
        activeVideoRef.current.pause();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Control playback of the single active center video
  useEffect(() => {
    const vid = activeVideoRef.current;
    if (!vid) return;

    if (!isInView || !isTabVisible || !isPlaying) {
      vid.pause();
      return;
    }

    vid.muted = isMuted;
    vid.play().catch(() => {
      vid.muted = true;
      setIsMuted(true);
      vid.play().catch(() => {});
    });
  }, [activeIndex, isMuted, isPlaying, isInView, isTabVisible]);

  // Automatic Roulette motion (Right -> Center -> Left) every 5.5 seconds when visible
  useEffect(() => {
    if (!isInView || !isTabVisible || !isMuted || isHoveringCenter || !isPlaying) return;
    const timer = setInterval(() => {
      goNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [goNext, isInView, isTabVisible, isMuted, isHoveringCenter, isPlaying]);

  // Smooth Wheel / Trackpad scroll -> advances roulette one by one (Right -> Center -> Left)
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept horizontal trackpad swipes or deliberate wheel over center stage
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) >= 18) {
        e.preventDefault();
        if (wheelLockRef.current) return;
        wheelLockRef.current = true;
        if (e.deltaX > 0) {
          goNext();
        } else {
          goPrev();
        }
        setTimeout(() => {
          wheelLockRef.current = false;
        }, 600);
      }
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
        goNext();
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
  const shouldMountCenterVideo = isInView && isTabVisible;

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#0A0D0E] relative overflow-hidden select-none"
    >
      {/* Zero-blur pure radial gradient glow behind the center roulette card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(216,185,130,0.16) 0%, rgba(197,160,89,0.05) 45%, transparent 70%)',
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
              ? 'Gira la ruleta o toca cualquier tarjeta lateral para explorar de uno en uno nuestros 7 formatos de mayor impacto: entran desde la derecha hacia el centro y avanzan hacia la izquierda.'
              : 'Spin the roulette or tap any side card to explore our 7 highest-converting formats one by one: gliding from right to center and out to the left.'}
          </p>
        </div>

        {/* 3D ROULETTE STAGE */}
        <div
          ref={stageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative h-[500px] sm:h-[560px] w-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* Left Roulette Arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label={language === 'es' ? 'Video anterior' : 'Previous video'}
            className="absolute left-0 sm:left-4 md:left-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#12100D]/90 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 shadow-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Roulette Arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label={language === 'es' ? 'Siguiente video' : 'Next video'}
            className="absolute right-0 sm:right-4 md:right-8 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#12100D]/90 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 shadow-lg flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Roulette Cards (Only the single active center card mounts a hardware <video> decoder!) */}
          {SHOWCASE_VIDEOS.map((video, idx) => {
            const offset = getSignedOffset(idx);
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // Hide cards beyond +/-2 completely to save compositor layers
            if (absOffset > 2) return null;

            let transform = 'translate3d(0px, 0px, -300px) scale(0.6)';
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) {
              transform = 'translate3d(0%, 0px, 20px) scale(1) rotateY(0deg)';
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1) {
              transform = 'translate3d(82%, 14px, -90px) scale(0.78) rotateY(-26deg)';
              opacity = 0.65;
              zIndex = 20;
            } else if (offset === -1) {
              transform = 'translate3d(-82%, 14px, -90px) scale(0.78) rotateY(26deg)';
              opacity = 0.65;
              zIndex = 20;
            } else if (offset === 2) {
              transform = 'translate3d(140%, 30px, -210px) scale(0.62) rotateY(-38deg)';
              opacity = 0.28;
              zIndex = 10;
            } else if (offset === -2) {
              transform = 'translate3d(-140%, 30px, -210px) scale(0.62) rotateY(38deg)';
              opacity = 0.28;
              zIndex = 10;
            }

            return (
              <div
                key={video.url}
                onClick={() => {
                  if (!isCenter) {
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
                  transition:
                    'transform 650ms cubic-bezier(0.22, 1, 0.36, 1), opacity 550ms ease',
                }}
                className={`absolute w-[255px] sm:w-[295px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#0E0D0B] ${
                  isCenter
                    ? 'border-2 border-[#D8B982] shadow-[0_18px_50px_rgba(0,0,0,0.85)]'
                    : 'border border-[#C5A059]/25 cursor-pointer hover:border-[#C5A059]/60'
                }`}
              >
                {isCenter && shouldMountCenterVideo ? (
                  <video
                    ref={activeVideoRef}
                    key={video.url}
                    src={video.url}
                    className="w-full h-full object-cover bg-[#0B0A08]"
                    playsInline
                    loop
                    autoPlay
                    muted={isMuted}
                    preload="metadata"
                  />
                ) : (
                  /* Lightweight Luxury Preview Card for Side Roulette Slots (Zero GPU Video Decoder Usage) */
                  <div
                    className="w-full h-full flex flex-col justify-between p-5 relative"
                    style={{ background: video.accentGradient }}
                  >
                    <div className="pt-10 flex flex-col items-center text-center my-auto space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#C5A059]/15 border border-[#D8B982]/50 flex items-center justify-center text-[#E8D5B0] shadow-md">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <div className="space-y-2 px-1">
                        <div className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#D8B982]">
                          <Sparkles className="w-3 h-3" />
                          <span>{video.tag}</span>
                        </div>
                        <h4 className="font-fraunces font-bold text-lg text-[#F7F4ED] leading-snug">
                          {video.title[langKey]}
                        </h4>
                      </div>
                    </div>

                    <div className="text-center pb-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8C0B3]/70">
                        {language === 'es' ? 'Toca para girar al centro' : 'Tap to spin to center'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Top Format Badge & Index */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/85 border border-[#C5A059]/45 text-[#DFC28E] font-mono text-[9px] uppercase tracking-wider font-bold">
                    {video.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-black/75 text-[#C8C0B3] font-mono text-[10px]">
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
                      className="w-9 h-9 rounded-full bg-black/80 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 flex items-center justify-center transition cursor-pointer"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 hover:bg-[#C5A059] text-[#E8D5B0] hover:text-black border border-[#C5A059]/50 font-mono text-[10px] uppercase tracking-wider font-bold transition cursor-pointer"
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
              </div>
            );
          })}
        </div>

        {/* Active Video Details & Conversion Bar */}
        <div className="max-w-xl mx-auto mt-8 text-center space-y-4 bg-[#12100D]/95 border border-[#C5A059]/30 rounded-2xl p-6 shadow-xl">
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
                  ? `¡Hola! Me gustaría cotizar un video en el formato: ${activeVideo.title.es} (1 video $50 USD, Pack 4 $170 o Pack 8 $300).`
                  : `Hi! I want to quote a video in the format: ${activeVideo.title.en} ($50 USD single, $170 4-Pack or $300 8-Pack).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase tracking-wider font-bold hover:brightness-110 transition"
            >
              <span>
                {language === 'es' ? 'Pedir este formato' : 'Order this format'}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-[#C5A059]/15 text-[#E6DEC8] hover:text-white border border-[#C5A059]/45 font-mono text-xs uppercase tracking-wider font-bold transition"
            >
              <span>
                {language === 'es'
                  ? 'Ver Galería Completa (42 Videos)'
                  : 'View Full Gallery (42 Videos)'}
              </span>
            </Link>
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
