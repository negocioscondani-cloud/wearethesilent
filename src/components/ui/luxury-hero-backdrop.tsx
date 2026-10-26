import React from 'react';

/**
 * Renders a quiet-luxury, high-fashion cinema spotlight atmosphere
 * centered directly behind the Hero headline using zero-blur GPU-friendly CSS radial gradients.
 */
export function LuxuryHeroBackdrop() {
  const dustParticles = [
    { top: '28%', left: '34%', size: 3, opacity: 0.35 },
    { top: '34%', left: '64%', size: 2.5, opacity: 0.3 },
    { top: '45%', left: '29%', size: 2, opacity: 0.25 },
    { top: '42%', left: '70%', size: 3.5, opacity: 0.32 },
    { top: '24%', left: '52%', size: 2, opacity: 0.28 },
    { top: '52%', left: '46%', size: 2.5, opacity: 0.22 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <style>{`
        @keyframes silentFadeUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .silent-gold-text-shimmer {
          background-image: linear-gradient(
            110deg,
            #D5B47B 0%,
            #FFF3D6 30%,
            #C5A059 55%,
            #FFF5DC 78%,
            #C8A161 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .silent-title-glow {
          text-shadow: 0 2px 24px rgba(197, 160, 89, 0.14);
        }
        .silent-fade-up-1 {
          animation: silentFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.04s both;
        }
        .silent-fade-up-2 {
          animation: silentFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        .silent-fade-up-3 {
          animation: silentFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.20s both;
        }
        .silent-fade-up-4 {
          animation: silentFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
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

      {/* 2. Primary Champagne-Gold Spotlight Halo Centered Behind the Title (Pure Radial Gradient, Zero GPU Blur Filter) */}
      <div
        className="absolute top-[41%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[980px] h-[440px] sm:h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(197, 160, 89, 0.18) 0%, rgba(216, 185, 130, 0.08) 38%, rgba(197, 160, 89, 0.02) 62%, transparent 75%)',
        }}
      />

      {/* 3. Focused Warm Inner Core Directly Behind the Headline Words */}
      <div
        className="absolute top-[39%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] h-[220px] sm:h-[280px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(245, 220, 168, 0.16) 0%, rgba(197, 160, 89, 0.06) 45%, transparent 72%)',
        }}
      />

      {/* 4. Subtle Architectural Eclipse Halo Framing the Title Centerpiece */}
      <div
        className="absolute top-[41%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[760px] h-[300px] sm:h-[380px] rounded-full border border-[#C5A059]/[0.07]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
        }}
      />

      {/* 5. Delicate Horizontal Golden Light Whisper Behind the Title Axis */}
      <div
        className="absolute top-[39%] left-1/2 -translate-x-1/2 w-[320px] sm:w-[580px] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(216, 185, 130, 0.25) 50%, transparent 100%)',
        }}
      />

      {/* 6. Micro Champagne Dust Motes Around the Title */}
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
          }}
        />
      ))}

      {/* 7. Bottom Seamless Fade Into Page Body */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D0E] to-transparent" />
    </div>
  );
}
