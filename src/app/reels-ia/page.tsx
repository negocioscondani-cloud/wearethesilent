'use client';

import React, { useState, useEffect } from 'react';

interface PricingInfo {
  countryCode: string;
  countryName: string;
  flag: string;
  currentAmount: string;
  currencyCode: string;
  oldPrice: string;
  ctaText: string;
}

const PRICING_BY_COUNTRY: Record<string, PricingInfo> = {
  CR: {
    countryCode: 'CR',
    countryName: 'Costa Rica',
    flag: '🇨🇷',
    currentAmount: '33,00',
    currencyCode: 'US$',
    oldPrice: '46.035,00 CRC (~110,00 US$)',
    ctaText: '33,00 US$'
  },
  MX: {
    countryCode: 'MX',
    countryName: 'México',
    flag: '🇲🇽',
    currentAmount: '$650,00',
    currencyCode: 'MXN',
    oldPrice: '$2.150,00 MXN',
    ctaText: '$650 MXN'
  },
  CO: {
    countryCode: 'CO',
    countryName: 'Colombia',
    flag: '🇨🇴',
    currentAmount: '$139.000',
    currencyCode: 'COP',
    oldPrice: '$460.000 COP',
    ctaText: '$139.000 COP'
  },
  ES: {
    countryCode: 'ES',
    countryName: 'España / Europa',
    flag: '🇪🇸',
    currentAmount: '31,00 €',
    currencyCode: 'EUR',
    oldPrice: '105,00 € EUR',
    ctaText: '31 € EUR'
  },
  CL: {
    countryCode: 'CL',
    countryName: 'Chile',
    flag: '🇨🇱',
    currentAmount: '$31.500',
    currencyCode: 'CLP',
    oldPrice: '$105.000 CLP',
    ctaText: '$31.500 CLP'
  },
  PE: {
    countryCode: 'PE',
    countryName: 'Perú',
    flag: '🇵🇪',
    currentAmount: 'S/ 125,00',
    currencyCode: 'PEN',
    oldPrice: 'S/ 420,00 PEN',
    ctaText: 'S/ 125 PEN'
  },
  AR: {
    countryCode: 'AR',
    countryName: 'Argentina',
    flag: '🇦🇷',
    currentAmount: '$37.500,00',
    currencyCode: 'ARS',
    oldPrice: '$125.000,00 ARS',
    ctaText: '$37.500 ARS'
  },
  DEFAULT: {
    countryCode: 'US',
    countryName: 'Internacional',
    flag: '🌎',
    currentAmount: '33,00',
    currencyCode: 'US$',
    oldPrice: '110,00 US$',
    ctaText: '33,00 US$'
  }
};

const detectCountryByTimezone = (): string => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Costa_Rica')) return 'CR';
    if (tz.includes('Bogota')) return 'CO';
    if (tz.includes('Mexico') || tz.includes('Cancun') || tz.includes('Merida') || tz.includes('Monterrey') || tz.includes('Tijuana')) return 'MX';
    if (tz.includes('Santiago')) return 'CL';
    if (tz.includes('Lima')) return 'PE';
    if (tz.includes('Madrid') || tz.includes('Canary')) return 'ES';
    if (tz.includes('Argentina') || tz.includes('Buenos_Aires') || tz.includes('Cordoba')) return 'AR';
  } catch (e) {
    // ignore
  }
  return 'DEFAULT';
};

export default function ReelsIaLanding() {
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 59);
  const [pricing, setPricing] = useState<PricingInfo>(PRICING_BY_COUNTRY.DEFAULT);

  const [activeModalVideo, setActiveModalVideo] = useState<{
    badge: string;
    title: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    // 1. Detección inmediata por zona horaria
    const tzCountry = detectCountryByTimezone();
    if (PRICING_BY_COUNTRY[tzCountry]) {
      setPricing(PRICING_BY_COUNTRY[tzCountry]);
    }

    // 2. Verificación por IP en segundo plano
    const detectIp = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          const code = (data.country_code || '').toUpperCase();
          if (PRICING_BY_COUNTRY[code]) {
            setPricing(PRICING_BY_COUNTRY[code]);
            return;
          }
        }
      } catch (e) {
        try {
          const res2 = await fetch('https://api.country.is');
          if (res2.ok) {
            const data2 = await res2.json();
            const code2 = (data2.country || '').toUpperCase();
            if (PRICING_BY_COUNTRY[code2]) {
              setPricing(PRICING_BY_COUNTRY[code2]);
            }
          }
        } catch (err) {
          // Mantener zona horaria
        }
      }
    };

    detectIp();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalVideo(null);
      }
    };
    if (activeModalVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalVideo]);

  useEffect(() => {
    // Carga de Scripts y Estilos del Widget de Checkout de Hotmart
    function importHotmart() {
      if (typeof window === 'undefined') return;

      if (!document.getElementById('hotmart-widget-script')) {
        const imported = document.createElement('script');
        imported.id = 'hotmart-widget-script';
        imported.type = 'text/javascript';
        imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
        document.head.appendChild(imported);
      }

      if (!document.getElementById('hotmart-widget-css')) {
        const link = document.createElement('link');
        link.id = 'hotmart-widget-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        document.head.appendChild(link);
      }
    }

    importHotmart();

    // Re-vincular Fancybox a los elementos con .hotmart-fb una vez cargado el script
    const interval = setInterval(() => {
      if (typeof (window as any).jQuery !== 'undefined' && typeof (window as any).jQuery.fancybox !== 'undefined') {
        try {
          if (typeof (window as any).loadFancyBoxCheckout === 'function') {
            (window as any).loadFancyBoxCheckout();
          } else {
            (window as any).jQuery('.hotmart-fb').fancybox({
              type: 'iframe',
              toolbar: false,
              smallBtn: true,
              iframe: {
                css: { width: '600px' },
                attr: { allowpaymentrequest: 'true' }
              }
            });
          }
          clearInterval(interval);
        } catch (e) {
          // ignore
        }
      }
    }, 400);

    const timeout = setTimeout(() => clearInterval(interval), 8000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSec: number) => {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/G107582281U?checkoutMode=2&off=84y0l3ga";
  const HOTMART_DIRECT_URL = "https://pay.hotmart.com/G107582281U?off=84y0l3ga";
  const HOTMART_URL = HOTMART_CHECKOUT_URL;

  // Videos de prueba
  const proofVideos = [
    {
      badge: "Formato 9:16",
      title: "Crea un Reel publicitario completo en 10 minutos con IA",
      url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/09/Crea-reel-en-10-minutos-con-IA.mp4"
    },
    {
      badge: "Estrategia & Conversión",
      title: "Cómo crear contenido que realmente retiene y vende",
      url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/09/Inversion.mp4"
    },
    {
      badge: "Campañas Virales",
      title: "Estructura visual para dominar Instagram, TikTok y Shorts",
      url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/09/campanas.mp4"
    },
    {
      badge: "Creatividad Infinita",
      title: "Nunca más te quedes en blanco para crear contenido",
      url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/09/Sin-ideas-para-crear-contenido-con-IA.mp4"
    }
  ];

  // Módulos del currículum
  const curriculumModules = [
    {
      title: "Módulo Base & Herramientas",
      desc: "Cómo configurar FLOW y Magnific para lograr textura hiperrealista y reescalado de nivel publicitario sin quemar recursos."
    },
    {
      title: "Identidad & Avatar Consistente",
      desc: "El método exacto para fijar facciones, vestimenta, cuerpo y escenarios con iluminación volumétrica sin deformaciones."
    },
    {
      title: "Clonación de Voz & Diseño de Audio",
      desc: "Sampleo y modulación sin pausas robóticas + selección de audio estratégico para elevar la retención en los primeros 3 segundos."
    },
    {
      title: "Guionismo Viral con NotebookLM",
      desc: "Extracción de tendencias y redacción de ganchos que atrapan antes de que el usuario haga scroll."
    },
    {
      title: "Del Guion al Render",
      desc: "Traducción de cada línea en especificaciones de tomas, gestualidad, poses y acciones del personaje."
    },
    {
      title: "Animación 1x1 y con Agentes de IA",
      desc: "Automatización de secuencias en lote y clips dinámicos en segundos."
    },
    {
      title: "B-Roll & Montaje Final",
      desc: "Generación de tomas de apoyo macro, zonas seguras (9:16), subtitulado y exportación lista para monetizar."
    }
  ];

  return (
    <div className="reels-landing-wrapper">
      <style jsx global>{`
        .reels-landing-wrapper {
          --bg-primary: #FFFFFF;
          --bg-secondary: #F8FAFC;
          --bg-card: #FFFFFF;
          --text-main: #0F172A;
          --text-muted: #64748B;
          --accent: #2563EB;
          --accent-hover: #1D4ED8;
          --badge-bg: #EFF6FF;
          --badge-text: #1D4ED8;
          --border-color: #E2E8F0;
          --success: #10B981;
          --hotmart: #F04E23;

          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-main);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .reels-top-bar {
          background: #0F172A;
          color: #FFFFFF;
          text-align: center;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .reels-top-bar .timer {
          background: rgba(255, 255, 255, 0.15);
          padding: 3px 10px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-family: monospace;
        }

        .reels-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .reels-hero {
          padding: 70px 0 50px;
          text-align: center;
          background: radial-gradient(circle at top, #F1F5F9 0%, #FFFFFF 70%);
        }

        .reels-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: var(--badge-bg);
          color: var(--badge-text);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
          max-width: 820px;
          line-height: 1.4;
        }

        .reels-hero h1 {
          font-size: clamp(34px, 5.5vw, 56px);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-main);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .reels-hero h1 span {
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reels-hero p.lead {
          font-size: clamp(17px, 2vw, 20px);
          color: var(--text-muted);
          max-width: 780px;
          margin: 0 auto 36px;
          font-weight: 400;
          line-height: 1.5;
        }

        a.reels-cta-btn.hotmart-fb,
        a.reels-cta-btn.hotmart__button-checkout,
        .reels-cta-btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%) !important;
          color: #FFFFFF !important;
          font-family: inherit !important;
          font-size: 18px !important;
          font-weight: 700 !important;
          padding: 18px 36px !important;
          border-radius: 12px !important;
          text-decoration: none !important;
          border: none !important;
          text-shadow: none !important;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4) !important;
          transition: all 0.2s ease !important;
          cursor: pointer !important;
          line-height: 1.3 !important;
        }

        a.reels-cta-btn.hotmart-fb:hover,
        a.reels-cta-btn.hotmart__button-checkout:hover,
        .reels-cta-btn:hover {
          transform: translateY(-2px) !important;
          background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%) !important;
          box-shadow: 0 14px 28px -4px rgba(37, 99, 235, 0.5) !important;
          color: #FFFFFF !important;
          border: none !important;
        }

        .reels-guarantee-note {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 18px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .reels-guarantee-note span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .reels-mockup-wrapper {
          margin-top: 44px;
          display: flex;
          justify-content: center;
        }

        .reels-mockup-img {
          width: 100%;
          max-width: 960px;
          height: auto;
          border-radius: 18px;
          box-shadow: 0 25px 60px -20px rgba(15, 23, 42, 0.2);
          display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .reels-mockup-img:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px -15px rgba(37, 99, 235, 0.25);
        }

        /* Story Section */
        .reels-story-section {
          padding: 70px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border-color);
        }

        .reels-story-box {
          max-width: 820px;
          margin: 0 auto;
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-main);
        }

        .reels-story-box p {
          margin-bottom: 20px;
        }

        .reels-quote-card {
          background: #0F172A;
          color: #FFFFFF;
          border-radius: 18px;
          padding: 28px 36px;
          margin: 36px 0;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          font-style: italic;
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.2);
        }

        .reels-intro-sub {
          font-weight: 600;
          color: var(--text-muted);
          font-size: 16px;
          margin-bottom: 28px;
          text-align: center;
        }

        .reels-pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .reels-pillar-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .reels-pillar-bad {
          color: #EF4444;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .reels-pillar-good {
          color: #0F172A;
          font-size: 15px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: #FFFFFF;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #BBF7D0;
        }

        /* Proofs / Video Samples Section */
        .reels-proofs-section {
          padding: 70px 0 80px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .reels-section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .reels-section-title h2 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
          color: var(--text-main);
        }

        .reels-section-title p {
          color: var(--text-muted);
          font-size: 16px;
          max-width: 680px;
          margin: 0 auto;
        }

        .reels-videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 1080px;
          margin: 36px auto 0;
        }

        @media (min-width: 900px) {
          .reels-videos-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .reels-video-card {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 18px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
        }

        .reels-video-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px -10px rgba(37, 99, 235, 0.22);
          border-color: #2563EB;
        }

        .reels-video-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          background: #0F172A;
          border-radius: 12px;
          overflow: hidden;
        }

        .reels-video-frame video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }

        .reels-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .reels-video-card:hover .reels-play-overlay {
          background: rgba(15, 23, 42, 0.15);
        }

        .reels-play-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.92);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          padding-left: 3px;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.5);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .reels-video-card:hover .reels-play-circle {
          transform: scale(1.1);
          background: #1D4ED8;
        }

        .reels-video-info {
          padding: 12px 4px 4px;
        }

        .reels-video-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 800;
          color: var(--accent);
          background: var(--badge-bg);
          padding: 3px 8px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .reels-video-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.35;
        }

        .reels-click-hint {
          font-size: 11px;
          color: var(--accent);
          font-weight: 700;
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Modal / Popup Player */
        .reels-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(15, 23, 42, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: modalFadeIn 0.2s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .reels-modal-close {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 100000;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #FFFFFF;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          backdrop-filter: blur(8px);
        }

        .reels-modal-close:hover {
          background: rgba(239, 68, 68, 0.9);
          transform: scale(1.08);
        }

        .reels-modal-container {
          width: 100%;
          max-width: 420px;
          max-height: 94vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .reels-modal-header {
          width: 100%;
          text-align: center;
          margin-bottom: 12px;
        }

        .reels-modal-title {
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          margin-top: 4px;
        }

        .reels-modal-video-wrapper {
          width: 100%;
          max-height: 72vh;
          aspect-ratio: 9 / 16;
          background: #000000;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .reels-modal-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .reels-modal-footer {
          width: 100%;
          margin-top: 14px;
        }

        @media (max-width: 640px) {
          .reels-modal-container {
            max-width: 100%;
            height: 94vh;
          }
          .reels-modal-video-wrapper {
            max-height: 76vh;
          }
        }

        /* Comparison Section */
        .reels-comparison-section {
          padding: 80px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border-color);
        }

        .reels-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
        }

        @media (max-width: 720px) {
          .reels-compare-grid {
            grid-template-columns: 1fr;
          }
        }

        .reels-compare-card {
          background: #FFFFFF;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .reels-compare-card.positive {
          border: 2px solid #2563EB;
          box-shadow: 0 12px 30px -10px rgba(37, 99, 235, 0.15);
        }

        .reels-compare-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 18px;
          color: var(--text-main);
        }

        .reels-compare-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 0;
          margin: 0;
        }

        .reels-compare-card li {
          font-size: 15px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-main);
        }

        .reels-compare-card.negative li::before {
          content: "✕";
          color: #EF4444;
          font-weight: 700;
          flex-shrink: 0;
        }

        .reels-compare-card.positive li::before {
          content: "✓";
          color: #10B981;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* Modules Curriculum */
        .reels-curriculum {
          padding: 80px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .reels-modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .reels-module-item {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          padding: 24px;
          border-radius: 14px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .reels-module-item:hover {
          border-color: #94A3B8;
          transform: translateY(-2px);
        }

        .reels-module-num {
          font-size: 12px;
          font-weight: 800;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .reels-module-item h4 {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .reels-module-item p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Pricing Box */
        .reels-offer-box {
          background: #FFFFFF;
          border: 2px solid #0F172A;
          border-radius: 24px;
          padding: 48px;
          max-width: 680px;
          margin: 60px auto 0;
          text-align: center;
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.1);
        }

        .reels-pricing {
          margin: 24px 0;
        }

        .reels-pricing .old-price {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 18px;
          font-weight: 500;
        }

        .reels-pricing .current-price {
          font-size: clamp(38px, 5vw, 54px);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.1;
          margin: 8px 0;
        }

        .reels-urgency-box {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-radius: 14px;
          padding: 18px;
          margin: 24px 0;
          color: #991B1B;
          font-size: 14px;
          line-height: 1.5;
          text-align: left;
        }

        .reels-urgency-box strong {
          display: block;
          font-size: 15px;
          margin-bottom: 6px;
          color: #DC2626;
        }

        /* Guarantee Section */
        .reels-guarantee-section {
          padding: 70px 0;
          background: #FFFFFF;
          border-top: 1px solid var(--border-color);
        }

        .reels-guarantee-box {
          max-width: 760px;
          margin: 0 auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
        }

        .reels-guarantee-box h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 14px;
          color: var(--text-main);
        }

        .reels-guarantee-box p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
        }

        /* Instructor Section */
        .reels-instructor-section {
          padding: 70px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .reels-instructor-box {
          max-width: 820px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.05);
        }

        .reels-instructor-box h3 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 16px;
          color: var(--text-main);
          text-align: center;
        }

        .reels-instructor-box blockquote {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-main);
          font-style: italic;
          position: relative;
          padding-left: 20px;
          border-left: 4px solid var(--accent);
        }

        /* FAQ */
        .reels-faq-section {
          padding: 70px 0 90px;
          background: #FFFFFF;
          border-top: 1px solid var(--border-color);
        }

        .reels-faq-list {
          max-width: 760px;
          margin: 30px auto 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .reels-faq-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 18px 24px;
          cursor: pointer;
        }

        .reels-faq-item summary {
          font-weight: 700;
          font-size: 16px;
          outline: none;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-main);
        }

        .reels-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .reels-faq-item summary::after {
          content: "+";
          font-size: 20px;
          font-weight: 600;
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .reels-faq-item[open] summary::after {
          content: "−";
        }

        .reels-faq-item p {
          margin-top: 12px;
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Footer */
        .reels-footer {
          padding: 36px 0;
          text-align: center;
          font-size: 13px;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }
      `}</style>

      {/* Top Announcement Bar */}
      <aside className="reels-top-bar" aria-label="Aviso de oferta">
        <span>🔥 ACCESO CON 70% DE DESCUENTO DISPONIBLE</span>
        <span className="timer" id="countdown">
          {formatCountdown(secondsLeft)}
        </span>
      </aside>

      {/* Hero Section */}
      <header className="reels-hero">
        <div className="reels-container">
          <div className="reels-pill-badge">
            Escala tu marca y contenido con videos verticales de calidad publicitaria 24/7 (sin depender de tu tiempo ni de tu energía)
          </div>
          <h1>
            Crea Reels con IA<br />
            <span>en 10 Minutos</span>
          </h1>
          <p className="lead">
            Aprende cómo crear Reels cinematográficos con IA que se producen en minutos, sin grabarte en cámara, sin equipo costoso y sin pasar horas editando.
          </p>

          <a 
            href={HOTMART_CHECKOUT_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hotmart-fb hotmart__button-checkout reels-cta-btn"
          >
            ACCEDER AL CURSO POR {pricing.ctaText}
          </a>

          <div className="reels-guarantee-note">
            <span>🔒 Pago 100% Seguro por Hotmart</span>
            <span>⚡ Acceso Inmediato</span>
            <span>🛡️ Garantía de 7 Días</span>
          </div>

          <div className="reels-mockup-wrapper">
            <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hotmart-fb" title="Acceder al curso">
              <img 
                src="/images/reels-mockup.jpg" 
                alt="Curso Completo Reels con IA en 10 Minutos - Bundle de Recursos y Formación" 
                className="reels-mockup-img"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Storytelling & Transformation Section */}
      <section className="reels-story-section">
        <div className="reels-container">
          <div className="reels-story-box">
            <p>
              Pasé de tardar días enteros para sacar un solo video mediocre... a tener un sistema automatizado que produce reels cinematográficos de alto impacto en cuestión de minutos.
            </p>
            <p>
              Mi calendario de contenido siempre estaba vacío: me daba pereza grabarme, la luz nunca quedaba bien, la edición me consumía la vida y al final... el video ni siquiera se veía profesional.
            </p>
            <p>
              <strong>Entonces cambié el juego por completo:</strong><br />
              Dejé de hacerlo a la antigua y armé un flujo de trabajo optimizado 100% con Inteligencia Artificial.
            </p>
            <p>
              Hoy creo piezas de nivel cinematográfico en menos de 10 minutos, con un avatar idéntico a mí, voz clonada hiperrealista y consistencia total en cada toma.
            </p>

            <div className="reels-quote-card">
              &ldquo;Dejé de ser esclavo de la cámara y la línea de tiempo. Ahora el sistema trabaja para mí.&rdquo;
            </div>

            <p className="reels-intro-sub">
              He invertido cientos de horas testeando herramientas, flujos y configuraciones para que tú NO tengas que perder tu tiempo en prueba y error...
            </p>

            <div className="reels-pillars-grid">
              <div className="reels-pillar-card">
                <div className="reels-pillar-bad">
                  <span>❌</span>
                  <span>Sin grabarte frente a la cámara ni pelear con luces y micrófonos</span>
                </div>
                <div className="reels-pillar-good">
                  <span>✅</span>
                  <span>Creas un avatar hiperrealista con ropa, rostro y locación consistentes.</span>
                </div>
              </div>

              <div className="reels-pillar-card">
                <div className="reels-pillar-bad">
                  <span>❌</span>
                  <span>Sin ser experto en edición ni pasar 4 horas en la computadora</span>
                </div>
                <div className="reels-pillar-good">
                  <span>✅</span>
                  <span>Flujo paso a paso desde el guion hasta la exportación final en minutos.</span>
                </div>
              </div>

              <div className="reels-pillar-card">
                <div className="reels-pillar-bad">
                  <span>❌</span>
                  <span>Sin equipos costosos ni software complejo</span>
                </div>
                <div className="reels-pillar-good">
                  <span>✅</span>
                  <span>Todo centralizado en herramientas accesibles y flujos de agentes automatizados.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proofs / Video Samples Section */}
      <section className="reels-proofs-section">
        <div className="reels-container">
          <div className="reels-section-title">
            <div className="reels-pill-badge" style={{ marginBottom: '14px' }}>
              Pruebas Reales del Sistema
            </div>
            <h2>Mira lo que puedes crear en menos de 10 minutos</h2>
            <p>
              (Pruebas reales de calidad visual, textura, fluidez de movimiento, voz clonada y acabado de agencia generado con IA)
            </p>
          </div>

          <div className="reels-videos-grid">
            {proofVideos.map((video, idx) => (
              <div 
                className="reels-video-card" 
                key={idx}
                onClick={() => setActiveModalVideo(video)}
                role="button"
                tabIndex={0}
              >
                <div className="reels-video-frame">
                  <video 
                    src={video.url} 
                    playsInline 
                    preload="metadata"
                    muted
                  />
                  <div className="reels-play-overlay">
                    <div className="reels-play-circle">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="reels-video-info">
                  <span className="reels-video-badge">{video.badge}</span>
                  <div className="reels-video-title">{video.title}</div>
                  <div className="reels-click-hint">Toca para reproducir ↗</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a 
              href={HOTMART_CHECKOUT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hotmart-fb hotmart__button-checkout reels-cta-btn"
            >
              QUIERO EL SISTEMA Y ACCEDER POR {pricing.ctaText} ↗
            </a>
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {activeModalVideo && (
        <div 
          className="reels-modal-backdrop"
          onClick={() => setActiveModalVideo(null)}
        >
          {/* Close button with 'X' at top right */}
          <button 
            className="reels-modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setActiveModalVideo(null);
            }}
            aria-label="Cerrar video"
          >
            ✕
          </button>

          {/* Modal Container */}
          <div 
            className="reels-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="reels-modal-header">
              <span className="reels-video-badge">{activeModalVideo.badge}</span>
              <h3 className="reels-modal-title">{activeModalVideo.title}</h3>
            </div>

            <div className="reels-modal-video-wrapper">
              <video 
                src={activeModalVideo.url} 
                controls 
                autoPlay 
                playsInline 
                className="reels-modal-video"
              />
            </div>

            <div className="reels-modal-footer">
              <a 
                href={HOTMART_CHECKOUT_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hotmart-fb hotmart__button-checkout reels-cta-btn"
                style={{ fontSize: '15px', padding: '14px 28px', width: '100%' }}
              >
                QUIERO EL SISTEMA Y ACCEDER POR {pricing.ctaText} ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Section */}
      <section className="reels-comparison-section">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>¿Por qué este método cambia las reglas del juego?</h2>
            <p>Compara el modelo tradicional frente al sistema optimizado de 10 minutos.</p>
          </div>

          <div className="reels-compare-grid">
            <article className="reels-compare-card negative">
              <h3>Método Convencional (Agotador)</h3>
              <ul>
                <li>Horas frente a la hoja en blanco sin ganchos claros.</li>
                <li>Inseguridad frente al lente, tomas falsas y mala iluminación.</li>
                <li>Edición manual repetitiva y extenuante de más de 4 horas.</li>
                <li>Inconsistencia estética total entre un video y otro.</li>
                <li>Fatiga mental y abandono del canal a las dos semanas.</li>
              </ul>
            </article>

            <article className="reels-compare-card positive">
              <h3>Sistema 10 Minutos con IA (Escalable)</h3>
              <ul>
                <li>Guiones virales y estructuras de retención en segundos.</li>
                <li>Avatar consistente con rasgos, estilo y locación fija.</li>
                <li>Animación en lote y delegación a agentes de IA.</li>
                <li>Textura hiperrealista, look cinematográfico y marca sólida.</li>
                <li>Creación rápida, sostenible y publicable a diario.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Modules Curriculum */}
      <main className="reels-curriculum">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>¿Qué incluye el sistema? (Plan de Estudio Paso a Paso)</h2>
            <p>18 lecciones prácticas, directas al grano, diseñadas para implementar el mismo día:</p>
          </div>

          <div className="reels-modules-grid">
            {curriculumModules.map((mod, idx) => (
              <article className="reels-module-item" key={idx}>
                <div className="reels-module-num">Módulo 0{idx + 1}</div>
                <h4>{mod.title}</h4>
                <p>{mod.desc}</p>
              </article>
            ))}
          </div>

          {/* Checkout Card */}
          <section className="reels-offer-box" id="checkout">
            <div className="reels-pill-badge" style={{ background: '#FEF2F2', color: '#DC2626' }}>
              🔥 OFERTA ESPECIAL DE LANZAMIENTO (70% DE DESCUENTO)
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '12px', lineHeight: '1.6' }}>
              Invertí meses depurando y automatizando este flujo de trabajo para que hoy tengas la llave en mano sin sufrir la curva técnica.
            </p>

            <div className="reels-pricing">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                <span>{pricing.flag} Moneda detectada para <strong>{pricing.countryName}</strong></span>
              </div>
              <div className="old-price">PRECIO REGULAR: {pricing.oldPrice}</div>
              <div className="current-price">
                PRECIO HOY: {pricing.currentAmount} <span style={{ fontSize: '20px', fontWeight: 600 }}>{pricing.currencyCode}</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                (O el equivalente en tu moneda local)
              </div>
            </div>

            <div className="reels-urgency-box">
              <strong>🚨 SOLO SI ENTRAS HOY 🚨</strong>
              Obtienes acceso vitalicio inmediato, todas las plantillas de guionismo viral, el flujo de delegación con agentes de IA y las actualizaciones futuras del método.
            </div>

            <a 
              href={HOTMART_CHECKOUT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hotmart-fb hotmart__button-checkout reels-cta-btn" 
              style={{ width: '100%', marginTop: '10px' }}
            >
              QUIERO EL SISTEMA Y ACCEDER POR {pricing.ctaText} ↗
            </a>

            <div className="reels-guarantee-note" style={{ marginTop: '16px' }}>
              <span>🔒 Pago 100% Seguro por Hotmart</span>
              <span>⚡ Acceso Inmediato</span>
              <span>🛡️ Garantía Incondicional de 7 Días</span>
            </div>
          </section>
        </div>
      </main>

      {/* Guarantee Section */}
      <section className="reels-guarantee-section">
        <div className="reels-container">
          <div className="reels-guarantee-box">
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🛡️</div>
            <h3>Garantía de Satisfacción Total por 7 Días</h3>
            <p>
              Prueba el sistema completo. Mira las lecciones, crea tu primer avatar y genera tus primeros clips. Si sientes que este método no te ahorra horas de trabajo o no cumple al 100% tus expectativas, solicitas tu reembolso íntegro con un solo clic dentro de Hotmart. Sin preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="reels-instructor-section">
        <div className="reels-container">
          <div className="reels-instructor-box">
            <h3>Conoce a tu instructor</h3>
            <blockquote>
              &ldquo;Mi objetivo siempre ha sido la eficiencia y la calidad de alto impacto. Pasar horas grabando y editando para redes sociales ya no es viable si quieres escalar. Creé este sistema para liberarte de la cámara y del software pesado, permitiéndote producir contenido con calidad de cine en minutos, para que tu marca crezca mientras tú te enfocas en lo que realmente importa.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reels-faq-section">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>Preguntas Frecuentes</h2>
            <p>Todo lo que necesitas saber antes de empezar.</p>
          </div>

          <div className="reels-faq-list">
            <details className="reels-faq-item">
              <summary>¿Necesito conocimientos previos de edición o herramientas complejas?</summary>
              <p>No. El curso está diseñado desde el absoluto cero. Te guío paso a paso por la interfaz de cada herramienta hasta tener tu video final listo para publicar.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Necesito una computadora de gama alta o tarjeta gráfica potente?</summary>
              <p>No. Al utilizar flujos basados en herramientas de IA en la nube, el trabajo pesado lo hacen los servidores externos, no tu ordenador.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Qué pasa si no me gusta ponerme frente a una cámara?</summary>
              <p>Esa es la mayor ventaja de este curso: aprenderás a clonar tu presencia o a crear personajes virtuales desde cero sin tener que grabar un solo segundo de ti mismo.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Cómo y cuándo recibo el acceso?</summary>
              <p>Inmediatamente después de confirmar tu pago en Hotmart, recibirás un correo con tus credenciales de acceso para empezar hoy mismo.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="reels-footer">
        <div className="reels-container">
          <p>© 2026 Crea Reels con IA en 10 Minutos. Todos los derechos reservados.</p>
          <p style={{ marginTop: '6px' }}>
            Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza control editorial previo de los productos.
          </p>
        </div>
      </footer>
    </div>
  );
}
