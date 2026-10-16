import React from 'react';

/**
 * Renders a quiet-luxury, high-fashion cinema spotlight atmosphere
 * centered directly behind the Hero headline:
 * - Deep obsidian-velvet vignette base
 * - Soft breathing champagne-gold halo centered behind the title text
 * - Ultra-subtle eclipse light rim & floating micro-bokeh dust around the headline
 * - Animated liquid-gold metallic sheen utility for the headline's italic keywords
 */
export function LuxuryHeroBackdrop() {
  const dustParticles = [
    { top: '28%', left: '34%', size: 3, duration: '9s', delay: '0s', opacity: 0.35 },
    { top: '34%', left: '64%', size: 2.5, duration: '11s', delay: '-2s', opacity: 0.3 },
    { top: '45%', left: '29%', size: 2, duration: '13s', delay: '-4s', opacity: 0.25 },
    { top: '42%', left: '70%', size: 3.5, duration: '10s', delay: '-1.5s', opacity: 0.32 },
    { top: '24%', left: '52%', size: 2, duration: '12s', delay: '-5s', opacity: 0.28 },
    { top: '52%', left: '46%', size: 2.5, duration: '14s', delay: '-3s', opacity: 0.22 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <style>{`
        @keyframes silentHaloBreathe {
          0%, 100% {
            opacity: 0.72;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.06);
          }
        }
        @keyframes silentCorePulse {
          0%, 100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(0.97);
          }
          50% {
            opacity: 0.88;
            transform: translate(-50%, -50%) scale(1.04);
          }
        }
        @keyframes silentHorizonSweep {
          0%, 100% {
            opacity: 0.28;
            transform: translateX(-50%) scaleX(0.92);
          }
          50% {
            opacity: 0.55;
            transform: translateX(-50%) scaleX(1.05);
          }
        }
        @keyframes silentDustDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.18;
          }
          50% {
            transform: translate3d(0, -14px, 0) scale(1.25);
            opacity: 0.55;
          }
        }
        @keyframes silentTextShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes silentFadeUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .silent-halo-outer {
          animation: silentHaloBreathe 10s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .silent-halo-core {
          animation: silentCorePulse 7s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .silent-horizon-beam {
          animation: silentHorizonSweep 9s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .silent-gold-text-shimmer {
          background-image: linear-gradient(
            110deg,
            #D5B47B 0%,
            #FFF3D6 28%,
            #C5A059 52%,
            #FFF5DC 74%,
            #C8A161 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: silentTextShimmer 7.5s ease-in-out infinite;
          filter: drop-shadow(0 0 24px rgba(197, 160, 89, 0.22));
        }
        .silent-title-glow {
          text-shadow: 0 4px 42px rgba(197, 160, 89, 0.14);
        }
        .silent-fade-up-1 {
          animation: silentFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .silent-fade-up-2 {
          animation: silentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
        }
        .silent-fade-up-3 {
          animation: silentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
        }
        .silent-fade-up-4 {
          animation: silentFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.40s both;
        }
      `}</style>

      {/* 1. Deep Obsidian & Velvet Charcoal Base */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 58% at 50% 40%, rgba(28, 23, 16, 0.92) 0%, rgba(11, 10, 9, 0.97) 62%, #070707 100%)',
        }}
      />

      {/* 2. Primary Champagne-Gold Spotlight Halo Centered Behind the Title */}
      <div
        className="silent-halo-outer absolute top-[41%] left-1/2 w-[680px] sm:w-[880px] h-[380px] sm:h-[440px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(197, 160, 89, 0.20) 0%, rgba(216, 185, 130, 0.09) 38%, rgba(197, 160, 89, 0.02) 68%, transparent 82%)',
        }}
      />

      {/* 3. Focused Warm Inner Core Directly Behind the Headline Words */}
      <div
        className="silent-halo-core absolute top-[39%] left-1/2 w-[360px] sm:w-[520px] h-[190px] sm:h-[230px] rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(245, 220, 168, 0.22) 0%, rgba(197, 160, 89, 0.08) 50%, transparent 78%)',
        }}
      />

      {/* 4. Subtle Architectural Eclipse Halo Framing the Title Centerpiece */}
      <div
        className="silent-halo-outer absolute top-[41%] left-1/2 w-[540px] sm:w-[760px] h-[300px] sm:h-[380px] rounded-full border border-[#C5A059]/[0.07]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
        }}
      />

      {/* 5. Delicate Horizontal Golden Light Whisper Behind the Title Axis */}
      <div
        className="silent-horizon-beam absolute top-[39%] left-1/2 w-[320px] sm:w-[580px] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(216, 185, 130, 0.26) 50%, transparent 100%)',
          boxShadow: '0 0 28px 2px rgba(197, 160, 89, 0.18)',
        }}
      />

      {/* 6. Ultra-Subtle Top Crown Ambient Glow */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[540px] h-[220px] rounded-full blur-3xl opacity-45"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(216, 185, 130, 0.16) 0%, transparent 75%)',
        }}
      />

      {/* 7. Micro Champagne Dust Motes Floating Around the Title */}
      {dustParticles.map((p, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-[#F3DFB6]"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 10px 2px rgba(216, 185, 130, 0.35)',
            animation: `silentDustDrift ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* 8. Bottom Seamless Fade Into Page Body */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D0E] to-transparent" />
    </div>
  );
}
