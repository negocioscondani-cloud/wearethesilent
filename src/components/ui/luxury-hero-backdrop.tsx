import React from 'react';

/**
 * Renders the signature "The Silent" dark-luxury hero atmosphere with subtle,
 * modern kinetic animations:
 * - Deep obsidian-charcoal base
 * - Breathing warm champagne-gold sunflare & lens bokeh from the top-left corner
 * - Drifting bronze atmospheric mist clouds
 * - Continuously undulating multi-strand golden silk wave mesh (SVG bezier ribbons)
 *   with a subtle travelling golden light pulse
 */
export function LuxuryHeroBackdrop() {
  const wavePaths = Array.from({ length: 22 }, (_, i) => {
    const offset = i * 5.5;
    const yStart = 430 + i * 4.2;
    const cp1x = 280 - i * 3;
    const cp1y = 260 + i * 7;
    const cp2x = 640 + i * 4;
    const cp2y = 590 - i * 5.5;
    const midX = 960;
    const midY = 390 + i * 2.5;
    const cp3x = 1220 - i * 3;
    const cp3y = 210 + i * 8;
    const cp4x = 1380 + i * 2;
    const cp4y = 330 - i * 4;
    const endX = 1440;
    const endY = 250 + offset * 0.8;

    const d = `M -40 ${yStart} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${midX} ${midY} C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, ${endX + 40} ${endY}`;
    const opacity = (0.08 + Math.sin((i / 22) * Math.PI) * 0.24).toFixed(3);
    const delay = (i * -0.35).toFixed(2);
    const duration = (9 + (i % 5) * 1.4).toFixed(2);
    const isHighlightStrand = i === 6 || i === 11 || i === 16;

    return { d, opacity, delay, duration, isHighlightStrand, key: i };
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
    >
      <style>{`
        @keyframes silentWaveFloat {
          0%, 100% {
            transform: translate3d(0px, 0px, 0px) scaleY(1);
          }
          50% {
            transform: translate3d(-14px, -12px, 0px) scaleY(1.035);
          }
        }
        @keyframes silentWaveStrand {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-9px);
          }
        }
        @keyframes silentGoldPulse {
          0% {
            stroke-dashoffset: 1600;
          }
          100% {
            stroke-dashoffset: -1600;
          }
        }
        @keyframes silentFlareBreathe {
          0%, 100% {
            opacity: 0.78;
            transform: scale(1) translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.96;
            transform: scale(1.06) translate3d(8px, 6px, 0);
          }
        }
        @keyframes silentBokehFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.45;
          }
          50% {
            transform: translate3d(10px, -8px, 0) scale(1.08);
            opacity: 0.8;
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
        .silent-wave-group {
          animation: silentWaveFloat 14s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }
        .silent-wave-strand {
          animation-name: silentWaveStrand;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .silent-wave-shimmer {
          stroke-dasharray: 220 1380;
          animation: silentGoldPulse 11s linear infinite;
        }
        .silent-flare-breathe {
          animation: silentFlareBreathe 9s ease-in-out infinite;
        }
        .silent-bokeh-1 {
          animation: silentBokehFloat 8s ease-in-out infinite;
        }
        .silent-bokeh-2 {
          animation: silentBokehFloat 11s ease-in-out infinite -3s;
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

      {/* 1. Deep Obsidian & Warm Charcoal Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#171410_0%,#0B0A09_70%,#060606_100%)]" />

      {/* 2. Top-Left Golden Sunflare / Lens Flare (Breathing) */}
      <div
        className="silent-flare-breathe absolute -top-36 -left-36 w-[620px] h-[620px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(235,198,125,0.42) 0%, rgba(197,160,89,0.18) 38%, rgba(197,160,89,0.04) 65%, transparent 80%)',
        }}
      />
      {/* Intense core flare at top-left */}
      <div
        className="silent-flare-breathe absolute -top-16 -left-16 w-[280px] h-[280px] rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,236,190,0.55) 0%, rgba(212,175,95,0.22) 45%, transparent 75%)',
        }}
      />
      {/* Diagonal sunbeam ray */}
      <div
        className="absolute -top-24 -left-24 w-[780px] h-[340px] origin-top-left rotate-[28deg] opacity-40 blur-2xl"
        style={{
          background:
            'linear-gradient(90deg, rgba(242,213,152,0.40) 0%, rgba(197,160,89,0.12) 55%, transparent 100%)',
        }}
      />
      {/* Subtle Lens Bokeh Rings along the flare axis */}
      <div className="silent-bokeh-1 absolute top-[110px] left-[135px] w-14 h-14 rounded-full border border-[#E5C88D]/20 bg-[#E5C88D]/5 blur-[1px]" />
      <div className="silent-bokeh-2 absolute top-[165px] left-[220px] w-8 h-8 rounded-full border border-[#E5C88D]/15 bg-[#E5C88D]/10 blur-[1px]" />
      <div className="silent-bokeh-1 absolute top-[210px] left-[295px] w-20 h-20 rounded-full bg-[#C5A059]/5 blur-md" />

      {/* 3. Atmospheric Warm Smoke / Mist Clouds */}
      <div
        className="silent-bokeh-2 absolute bottom-[-80px] left-[-60px] w-[560px] h-[340px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(185,148,82,0.28) 0%, rgba(90,72,42,0.10) 55%, transparent 80%)',
        }}
      />
      <div
        className="silent-bokeh-1 absolute top-[22%] right-[-80px] w-[520px] h-[320px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(197,160,89,0.22) 0%, rgba(120,96,55,0.08) 55%, transparent 80%)',
        }}
      />

      {/* 4. Flowing & Animated Golden Silk Wave Mesh SVG */}
      <svg
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 w-full h-[85%] opacity-95"
      >
        <defs>
          <linearGradient id="silentGoldWave" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#8F7239" stopOpacity="0.15" />
            <stop offset="22%" stopColor="#D8B982" stopOpacity="0.78" />
            <stop offset="50%" stopColor="#C5A059" stopOpacity="0.42" />
            <stop offset="82%" stopColor="#E6C994" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#9A7B3E" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="silentGoldShimmer" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFF3D1" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFF3D1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFF3D1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="silent-wave-group">
          {wavePaths.map((p) => (
            <React.Fragment key={p.key}>
              <path
                d={p.d}
                stroke="url(#silentGoldWave)"
                strokeWidth="0.9"
                strokeOpacity={p.opacity}
                strokeLinecap="round"
                className="silent-wave-strand"
                style={{
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                }}
              />
              {p.isHighlightStrand && (
                <path
                  d={p.d}
                  stroke="url(#silentGoldShimmer)"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  className="silent-wave-shimmer"
                  style={{
                    animationDelay: `${p.delay}s`,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </g>
      </svg>

      {/* Bottom subtle fade into page body */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0D0E] to-transparent" />
    </div>
  );
}
