'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { 
  Volume2, 
  VolumeX, 
  ArrowUpRight, 
  ArrowUp, 
  X, 
  BookOpen, 
  Film, 
  ArrowRight,
  ChevronRight,
  Eye,
  Sparkles,
  Zap,
  Play
} from 'lucide-react';

const SKOOL_LINK = "https://www.skool.com/we-are-the-silent-ia-8224/about";

const TRANSLATIONS = {
  es: {
    hero: {
      location: "MADRID — SAN JOSÉ — TOKIO",
      title: "THE SILENT STUDIO",
      subtitle: "“Creamos la publicidad del futuro.”",
      description: "Domina la creación con IA. Crea anuncios, contenido y películas.",
      enterBtn: "ENTRAR AL ESTUDIO"
    },
    navigation: {
      philosophy: "Filosofía",
      cases: "Casos de Estudio",
      community: "Comunidad",
      archive: "Archivo"
    },
    manifesto: {
      section: "SECCIÓN 02",
      title: "NUESTRO MANIFESTO",
      quotePart1: "“Las marcas no se construyen con prompts.",
      quotePart2: "Se construyen con ideas.”",
      col1Title: "Dirección de Arte",
      col1Desc: "La inteligencia artificial es nuestra lente de cámara, no nuestro director creativo. Cada concepto nace de una narrativa profunda y la herencia de marca.",
      col2Title: "Artesanía Visual",
      col2Desc: "Esculpimos luz, reflejos y composición con una fidelidad de resolución extrema que supera las limitaciones físicas de la producción tradicional.",
      col3Title: "Publicidad de Lujo",
      col3Desc: "Generamos campañas globales multicanal en tiempo récord, manteniendo un estándar de exclusividad y perfección estética absoluta."
    },
    paths: {
      section: "SECCIÓN 03",
      title: "ELIGE TU CAMINO",
      sub: "APRENDE EL MÉTODO O DELEGA TU PRODUCCIÓN",
      card1: {
        badge: "Academia · $9/mes",
        step: "Camino 01",
        title: "Aprender en la Comunidad",
        desc: "Únete a la academia en Skool para acceder a guías detalladas, prompts con intención, hojas JSON de consistencia de personajes y feedback de directores de arte para construir tu portafolio.",
        btn: "Quiero Aprender"
      },
      card2: {
        badge: "Estudio · A Medida",
        step: "Camino 02",
        title: "Crear un Video para mi Marca",
        desc: "Delega la producción audiovisual en nuestro estudio. Creamos anuncios publicitarios, videos de producto de alta fidelidad y cortometrajes con acabado cinematográfico real.",
        btn: "Quiero un Video"
      }
    },
    cases: {
      section: "SECCIÓN 04",
      title: "CASOS DESTACADOS",
      sub: "PRODUCCIONES SELECCIONADAS 2024—2026",
      viewCampaign: "VER CAMPAÑA →"
    },
    community: {
      section: "SECCIÓN 05",
      title: "Conviértete en Director Creativo de la era de la IA",
      desc: "Únete a una red exclusiva de directores de arte, estrategas de marcas de lujo y creadores visuales que definen la identidad de las marcas del futuro.",
      btn: "ENTRAR A LA COMUNIDAD"
    },
    archive: {
      section: "SECCIÓN 06",
      title: "ARCHIVO DE CAMPAÑAS",
      filterAll: "TODO",
      filterFashion: "FASHION",
      filterProducts: "PRODUCTOS",
      filterPortraits: "RETRATOS",
      detailsTitle: "ARQUITECTURA DE PROMPTS",
      detailsDir: "DIRECCIÓN DE ARTE",
      detailsClose: "CERRAR [ESC]"
    },
    footer: {
      sub: "Campañas imaginadas con IA. Creadas por Humanos.",
      rights: "© 2026 THE SILENT STUDIO. TODOS LOS DERECHOS RESERVADOS."
    }
  },
  en: {
    hero: {
      location: "PARIS — NEW YORK — TOKYO",
      title: "THE SILENT STUDIO",
      subtitle: "“We create advertising for the future.”",
      description: "Master AI creation. Create ads, content, and films.",
      enterBtn: "ENTER THE STUDIO"
    },
    navigation: {
      philosophy: "Philosophy",
      cases: "Case Files",
      community: "Community",
      archive: "Archive"
    },
    manifesto: {
      section: "SECTION 02",
      title: "OUR MANIFESTO",
      quotePart1: "“Brands aren't built with prompts.",
      quotePart2: "They're built with ideas.”",
      col1Title: "Art Direction",
      col1Desc: "Artificial intelligence is our camera lens, not our creative director. Every concept originates from deep storytelling and brand heritage.",
      col2Title: "Visual Craftsmanship",
      col2Desc: "We sculpt light, reflections, and composition with hyper-resolution fidelity that surpasses traditional physical production limitations.",
      col3Title: "Luxury Advertising",
      col3Desc: "Generating multi-platform global luxury campaigns in hours, maintaining rigorous brand exclusivity and aesthetic perfection."
    },
    paths: {
      section: "SECTION 03",
      title: "CHOOSE YOUR PATH",
      sub: "LEARN THE METHOD OR DELEGATE PRODUCTION",
      card1: {
        badge: "Academy · $9/mo",
        step: "Path 01",
        title: "Learn in the Community",
        desc: "Join the academy on Skool to access detailed guides, prompts with intention, character consistency JSON sheets, and feedback from art directors to build your portfolio.",
        btn: "I Want to Learn"
      },
      card2: {
        badge: "Studio · Custom",
        step: "Path 02",
        title: "Create a Video for My Brand",
        desc: "Delegate the video production to our studio. We create advertising ads, high-fidelity product videos, and short films with real cinematic finishes.",
        btn: "I Want a Video"
      }
    },
    cases: {
      section: "SECTION 04",
      title: "FEATURED CASE FILES",
      sub: "SELECTED WORKS 2024—2026",
      viewCampaign: "VIEW CAMPAIGN →"
    },
    community: {
      section: "SECTION 05",
      title: "Become a Creative Director for the AI Era",
      desc: "Join an exclusive network of art directors, luxury strategists, and prompt artists defining the visual identity of next-generation luxury houses.",
      btn: "JOIN THE COMMUNITY"
    },
    archive: {
      section: "SECTION 06",
      title: "CAMPAIGN ARCHIVE",
      filterAll: "ALL",
      filterFashion: "FASHION",
      filterProducts: "PRODUCTS",
      filterPortraits: "PORTRAITS",
      detailsTitle: "PROMPT ARCHITECTURE",
      detailsDir: "ART DIRECTION",
      detailsClose: "CLOSE [ESC]"
    },
    footer: {
      sub: "Campaigns imagined with AI. Crafted by Humans.",
      rights: "© 2026 THE SILENT STUDIO INC. ALL RIGHTS RESERVED."
    }
  }
};

export default function Home() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;

  // Sound and Audio Toggle State (Low frequency ambient tone)
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Gallery Filters
  const [activeFilter, setActiveFilter] = useState<'all' | 'fashion' | 'products' | 'portraits'>('all');

  // Modal State
  const [caseModalOpen, setCaseModalOpen] = useState(false);
  const [activeCaseKey, setActiveCaseKey] = useState<'ORO' | 'AETHER' | 'MONOLITH' | 'EMBER' | null>(null);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [lightboxCategory, setLightboxCategory] = useState('');

  // Local clock time
  const [timeStr, setTimeStr] = useState('MADRID 14:00 GMT+1');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      const formattedTime = now.toLocaleTimeString('es-ES', options);
      setTimeStr(`MADRID ${formattedTime} GMT+1`);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtxRef.current.createOscillator();
        const gainNode = audioCtxRef.current.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(55, audioCtxRef.current.currentTime); // Low A drone
        gainNode.gain.setValueAtTime(0.015, audioCtxRef.current.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtxRef.current.destination);
        oscillator.start();

        oscillatorRef.current = oscillator;
        gainNodeRef.current = gainNode;
      } else {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  // Ambient Canvas logic
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stepVal = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      stepVal += 0.003;
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      const grad = ctx.createRadialGradient(
        cx + Math.sin(stepVal) * 150, 
        cy + Math.cos(stepVal * 0.7) * 100, 
        10, 
        cx, 
        cy, 
        radius * 1.5
      );
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
      grad.addColorStop(0.4, 'rgba(120, 120, 120, 0.05)');
      grad.addColorStop(1, 'rgba(5, 5, 5, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, cy + Math.sin(stepVal + i) * 100 + (i * 40));
        ctx.bezierCurveTo(
          canvas.width * 0.3, cy + Math.cos(stepVal + i) * 200,
          canvas.width * 0.7, cy - Math.sin(stepVal + i) * 200,
          canvas.width, cy + Math.sin(stepVal * 0.5 + i) * 100
        );
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Escape key handler to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCaseModalOpen(false);
        setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Case study files and prompt descriptions (using actual images)
  const caseData = {
    ORO: {
      title: "ORØ — Luxury Alpine Water",
      category: language === 'es' ? "CASO 001" : "CASE 001",
      year: "2026",
      heroImg: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif",
      description: language === 'es' 
        ? "Una obra maestra visual que explora la pureza óptica del agua glacial de gran altitud. Sintetizado en entornos de simulación de fluidos tridimensionales con consistencia absoluta."
        : "A visual masterclass exploring the optical purity of high-altitude glacial water. Synthesized entirely in three-dimensional fluid simulation environments with absolute consistency.",
      promptSpec: "Midjourney v6.0 / Custom LORA — High key commercial photography, obsidian glass bottle, glacial refraction, zero gravity droplets, Hasselblad 100MP clarity.",
      artDir: language === 'es'
        ? "Ejecutado bajo el estándar minimalista de Saint Laurent: espacio negativo severo, balance monocromático y microtexturas hiperrealistas."
        : "Executed under Saint Laurent minimalism standard: stark negative space, monochrome balance, and hyper-realistic micro-textures."
    },
    AETHER: {
      title: "AETHER — Haute Parfumerie",
      category: language === 'es' ? "CASO 002" : "CASE 002",
      year: "2025",
      heroImg: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29271-scaled.avif",
      description: language === 'es'
        ? "Capturando el espíritu intangible de aromas botánicos raros. Diseñado para pantallas digitales de alta costura e integración limpia de marcas de lujo."
        : "Capturing the intangible spirit of rare botanical scents. Designed for digital high-fashion displays and clean integration of luxury brands.",
      promptSpec: "Diffusion AI — Cinematic chiaroscuro, amber liquid viscosity, dark velvet reflections, gold leaf suspended, editorial lighting.",
      artDir: language === 'es'
        ? "Fotografía de producto macro enfocada en la viscosidad y las transparencias del cristal bajo iluminación cenital de estudio."
        : "Macro product photography focused on viscosity and glass transparencies under overhead studio lighting."
    },
    MONOLITH: {
      title: "MONOLITH — Precision Horology",
      category: language === 'es' ? "CASO 003" : "CASE 003",
      year: "2025",
      heroImg: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-masterpiece-fidelity-phase-one-__45394.avif",
      description: language === 'es'
        ? "Una exploración arquitectónica de la relojería mecánica de precisión sin necesidad de prototipos físicos."
        : "An architectural exploration of mechanical precision horology without the need for physical prototyping.",
      promptSpec: "Unreal Engine 5 Render Simulation + AI Synthesis — Brushed titanium, sapphire crystal reflection, dark aesthetic.",
      artDir: language === 'es'
        ? "Lentes de cine de gran formato. Simulación exacta de reflejos en metales cepillados y cristales antirreflectantes."
        : "Large-format cinema lenses. Exact simulation of reflections on brushed metals and anti-reflective crystals."
    },
    EMBER: {
      title: "EMBER — Volcanic Coffee",
      category: language === 'es' ? "CASO 004" : "CASE 004",
      year: "2024",
      heroImg: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif",
      description: language === 'es'
        ? "Un viaje editorial a través de granos cultivados en tierras volcánicas de alta elevación."
        : "An editorial journey through coffee beans grown in high-elevation volcanic soil.",
      promptSpec: "Macro studio photography simulation — Steam physics, matte black ceramic, roasted sheen, cinematic smoke.",
      artDir: language === 'es'
        ? "Encuadres macro con profundidad de campo reducida, destacando texturas fotorrealistas y humo cinemático."
        : "Macro framings with shallow depth of field, highlighting photorealistic textures and cinematic steam smoke."
    }
  };

  const openCase = (key: 'ORO' | 'AETHER' | 'MONOLITH' | 'EMBER') => {
    setActiveCaseKey(key);
    setCaseModalOpen(true);
  };

  // Archive Gallery Data (using project images)
  const archiveItems = [
    {
      id: "arc-1",
      category: "fashion",
      title: "Maison Noir — Avant-Garde Runway",
      subtitle: language === 'es' ? "Moda Editorial" : "Editorial Fashion",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_solitary_woman_in_tailored_b_1c6d1278-90f0-4b5e-a356-d765648fa876_3.avif"
    },
    {
      id: "arc-2",
      category: "products",
      title: "Financial Times — Editorial Press",
      subtitle: language === 'es' ? "Fotografía de Producto" : "Product Photography",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Black_and_white_editorial_photo_folded_Financial_Ti_0498f205-d242-4f1e-9476-3bfa5d3de073_0.avif"
    },
    {
      id: "arc-3",
      category: "portraits",
      title: "Sovereign — Cinematic Portrait",
      subtitle: language === 'es' ? "Retrato Cinematográfico" : "Cinematic Portrait",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Elegant_cinematic_portrait_of_a_sophisticated_man_i_d50efa04-ac8b-465e-b336-6e4e52fc8e8e_1.avif"
    },
    {
      id: "arc-4",
      category: "fashion",
      title: "Minimal Studio — Paris Fashion Week",
      subtitle: language === 'es' ? "Dirección de Arte" : "Art Direction",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif"
    },
    {
      id: "arc-5",
      category: "products",
      title: "Structured Leather — Macro Material",
      subtitle: language === 'es' ? "Textura de Lujo" : "Luxury Texture",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_close-up_structured_black_leather__ccf2610e-62b7-4670-8b9c-521bfb7178bf_1.avif"
    },
    {
      id: "arc-6",
      category: "portraits",
      title: "Hybrid Human — Generative Reality",
      subtitle: language === 'es' ? "Identidad Digital" : "Digital Identity",
      img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_close-up_cinematic_view_of_a_mixed-race_male_hybrid_86d4dac6-6a34-49b9-9d68-0ab996ff2502_2-1.avif"
    }
  ];

  const filteredArchive = activeFilter === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === activeFilter);

  const openLightbox = (src: string, title: string, category: string) => {
    setLightboxImg(src);
    setLightboxTitle(title);
    setLightboxCategory(category);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#050505] text-[#e5e5e5] font-sans antialiased selection:bg-white selection:text-black">
      
      {/* Sound Toggle controls (Floating upper right overlay) */}
      <div className="fixed top-20 right-6 sm:right-12 z-50">
        <button 
          onClick={toggleAudio} 
          className="text-xs tracking-widest uppercase text-neutral-300 hover:text-white flex items-center space-x-2 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md transition-all bg-black/40"
        >
          {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="text-[10px] font-mono">{isPlaying ? "SOUND ON" : "SOUND OFF"}</span>
        </button>
      </div>

      {/* SECTION 01: HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden swiss-grid-bg">
        {/* Interactive Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60"></canvas>
        
        {/* Dark Gradient Overlay for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none"></div>

        {/* Hero Centered Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-xs sm:text-sm font-mono tracking-mega text-neutral-400 uppercase mb-8 opacity-90 animate-pulse">
            {text.hero.location}
          </p>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light tracking-tight text-white mb-6 uppercase leading-tight select-none">
            {text.hero.title}
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl font-sans font-extralight tracking-wide text-neutral-300 max-w-3xl mb-4 italic leading-relaxed">
            {text.hero.subtitle}
          </p>

          <p className="text-sm md:text-lg font-light text-neutral-400 max-w-2xl mb-12">
            {text.hero.description}
          </p>

          <a 
            href="#philosophy" 
            className="group relative inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full text-xs tracking-widest font-bold uppercase transition-all duration-500 hover:bg-neutral-200 hover:px-10 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span>{text.hero.enterBtn}</span>
            <span className="inline-block transform transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </div>

        {/* Scroll indicator bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-center flex flex-col items-center pointer-events-none">
          <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-2">
            {language === 'es' ? 'DESPLAZAR PARA DESCUBRIR' : 'SCROLL TO DISCOVER'}
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent"></div>
        </div>
      </section>

      {/* SECTION 02: EDITORIAL PHILOSOPHY STATEMENT */}
      <section id="philosophy" className="relative min-h-screen py-32 px-6 sm:px-12 md:px-24 flex items-center bg-[#050505] border-t border-white/5 swiss-grid-bg">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.manifesto.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{text.manifesto.title}</span>
          </div>

          {/* Massive Editorial Typography */}
          <div className="space-y-6 sm:space-y-12">
            <h2 className="reveal-text active text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.15] text-white tracking-tight">
              {text.manifesto.quotePart1}<br/>
              <span className="text-neutral-500 italic font-normal">{text.manifesto.quotePart2}</span>
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10">
            <div className="reveal-text active">
              <span className="text-xs font-mono text-neutral-500 mb-2 block">01 / {language === 'es' ? 'DIRECCIÓN DE ARTE' : 'ART DIRECTION'}</span>
              <h3 className="text-base font-medium text-white mb-2">{text.manifesto.col1Title}</h3>
              <p className="text-sm font-extralight text-neutral-400 leading-relaxed">
                {text.manifesto.col1Desc}
              </p>
            </div>
            <div className="reveal-text active">
              <span className="text-xs font-mono text-neutral-500 mb-2 block">02 / {language === 'es' ? 'ARTESANÍA' : 'CRAFTSMANSHIP'}</span>
              <h3 className="text-base font-medium text-white mb-2">{text.manifesto.col2Title}</h3>
              <p className="text-sm font-extralight text-neutral-400 leading-relaxed">
                {text.manifesto.col2Desc}
              </p>
            </div>
            <div className="reveal-text active">
              <span className="text-xs font-mono text-neutral-500 mb-2 block">03 / {language === 'es' ? 'PUBLICIDAD' : 'ADVERTISING'}</span>
              <h3 className="text-base font-medium text-white mb-2">{text.manifesto.col3Title}</h3>
              <p className="text-sm font-extralight text-neutral-400 leading-relaxed">
                {text.manifesto.col3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: GATEWAY OPTIONS (TWO PATHS) */}
      <section id="choose-path" className="py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5 swiss-grid-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.paths.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">{text.paths.title}</span>
          </div>

          <div className="text-center md:text-left mb-16">
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight uppercase">
              {text.paths.sub}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto">
            {/* PATH 1: LEARN (COMMUNITY) */}
            <div className="relative group overflow-hidden border border-white/10 hover:border-white/30 rounded-sm bg-[#0c0c0d] transition-all duration-500 flex flex-col justify-between aspect-[4/5] p-8 sm:p-10 shadow-2xl">
              {/* Background image */}
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700">
                <Image 
                  src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" 
                  alt="Aprender IA" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="inline-block bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {text.paths.card1.badge}
                  </span>
                </div>
                <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest block">{text.paths.card1.step}</span>
                <h2 className="text-3xl font-serif italic text-white leading-tight">
                  {text.paths.card1.title}
                </h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {text.paths.card1.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8">
                <Button 
                  asChild
                  className="w-full bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-bold uppercase tracking-widest text-xs py-6 rounded-none transition-all duration-300 group/btn"
                >
                  <Link href="/we-are-the-silent" className="flex items-center justify-center gap-2">
                    {text.paths.card1.btn} <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* PATH 2: SERVICES (PRODUCTION) */}
            <div className="relative group overflow-hidden border border-white/10 hover:border-white/30 rounded-sm bg-[#0c0c0d] transition-all duration-500 flex flex-col justify-between aspect-[4/5] p-8 sm:p-10 shadow-2xl">
              {/* Background image */}
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700">
                <Image 
                  src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" 
                  alt="Servicios de Video" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5">
                    <Film className="h-4 w-4 text-white" />
                  </div>
                  <span className="inline-block bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                    {text.paths.card2.badge}
                  </span>
                </div>
                <span className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest block">{text.paths.card2.step}</span>
                <h2 className="text-3xl font-serif italic text-white leading-tight">
                  {text.paths.card2.title}
                </h2>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {text.paths.card2.desc}
                </p>
              </div>

              <div className="relative z-10 pt-8">
                <Button 
                  asChild
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold uppercase tracking-widest text-xs py-6 rounded-none transition-all duration-300 group/btn"
                >
                  <Link href="/crear-video" className="flex items-center justify-center gap-2">
                    {text.paths.card2.btn} <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: FEATURED CASE FILES */}
      <section id="case-files" className="py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-2">{text.cases.section}</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">{text.cases.title}</h2>
            </div>
            <p className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
              {text.cases.sub}
            </p>
          </div>

          {/* Luxury Grid using Real Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {Object.keys(caseData).map((key) => {
              const item = caseData[key as keyof typeof caseData];
              return (
                <div 
                  key={key} 
                  className="group cursor-pointer reveal-text active"
                  onClick={() => openCase(key as 'ORO' | 'AETHER' | 'MONOLITH' | 'EMBER')}
                >
                  <div className="img-zoom-container relative aspect-[4/5] bg-neutral-900 mb-6 rounded-sm overflow-hidden border border-white/5">
                    <Image 
                      src={item.heroImg} 
                      alt={item.title} 
                      fill
                      className="object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase border border-white/10">
                      {item.category}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs font-mono text-white tracking-widest uppercase bg-black/70 px-4 py-2 rounded-full border border-white/20">
                        {text.cases.viewCampaign}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white group-hover:text-neutral-300 transition-colors">{key}</h3>
                      <p className="text-xs font-mono text-neutral-500 tracking-widest uppercase mt-1">{item.title}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">{item.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05: COMMUNITY WAITLIST / CALL TO ACTION */}
      <section id="community" className="py-36 px-6 sm:px-12 md:px-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden swiss-grid-bg">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">{text.community.section}</span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight mb-8 leading-tight">
            {text.community.title}
          </h2>

          <p className="text-base sm:text-lg font-extralight text-neutral-400 max-w-xl mb-12 leading-relaxed">
            {text.community.desc}
          </p>

          <Button 
            asChild
            className="group relative inline-flex items-center space-x-3 bg-white hover:bg-neutral-200 text-black px-10 py-7 rounded-full text-xs tracking-widest font-bold uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] h-auto"
          >
            <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
              <span>{text.community.btn}</span>
              <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Button>
        </div>
      </section>

      {/* SECTION 06: ARCHIVE & CINEMATIC GALLERY */}
      <section id="archive" className="py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-2">{text.archive.section}</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">{text.archive.title}</h2>
            </div>

            {/* Filter Navigation */}
            <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-widest">
              <button 
                onClick={() => setActiveFilter('all')} 
                className={`px-4 py-2 rounded-full border transition-all ${activeFilter === 'all' ? 'border-white/20 text-white bg-white/10' : 'border-white/10 text-neutral-400 hover:text-white'}`}
              >
                {text.archive.filterAll}
              </button>
              <button 
                onClick={() => setActiveFilter('fashion')} 
                className={`px-4 py-2 rounded-full border transition-all ${activeFilter === 'fashion' ? 'border-white/20 text-white bg-white/10' : 'border-white/10 text-neutral-400 hover:text-white'}`}
              >
                {text.archive.filterFashion}
              </button>
              <button 
                onClick={() => setActiveFilter('products')} 
                className={`px-4 py-2 rounded-full border transition-all ${activeFilter === 'products' ? 'border-white/20 text-white bg-white/10' : 'border-white/10 text-neutral-400 hover:text-white'}`}
              >
                {text.archive.filterProducts}
              </button>
              <button 
                onClick={() => setActiveFilter('portraits')} 
                className={`px-4 py-2 rounded-full border transition-all ${activeFilter === 'portraits' ? 'border-white/20 text-white bg-white/10' : 'border-white/10 text-neutral-400 hover:text-white'}`}
              >
                {text.archive.filterPortraits}
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArchive.map((item) => (
              <div 
                key={item.id} 
                className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer border border-white/5" 
                onClick={() => openLightbox(item.img, item.title, item.subtitle)}
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill
                  className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{item.subtitle}</span>
                  <h4 className="text-xl font-serif text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/10 text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-white tracking-widest uppercase">THE SILENT STUDIO ®</h3>
            <p className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              {text.footer.sub}
            </p>
            <div className="pt-2 text-[10px] font-mono text-neutral-600">
              {text.footer.rights}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-xs font-mono uppercase tracking-widest">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
              <span>TIKTOK</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-2">
              <span>YOUTUBE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="text-xs font-mono tracking-widest text-white uppercase flex items-center space-x-2 hover:opacity-70 transition-opacity"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>

      {/* CASE STUDY MODAL DRAWER */}
      {caseModalOpen && activeCaseKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl overflow-y-auto transition-opacity duration-500 p-6">
          <div className="min-h-[80vh] w-full max-w-5xl mx-auto relative flex flex-col justify-center py-12">
            <button 
              onClick={() => setCaseModalOpen(false)} 
              className="absolute -top-4 right-0 text-neutral-400 hover:text-white text-xs font-mono uppercase tracking-widest flex items-center space-x-2 bg-neutral-900 border border-white/10 px-4 py-2 rounded-full"
            >
              <span>{text.archive.detailsClose}</span>
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-12">
              <div>
                <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase block mb-2">
                  {caseData[activeCaseKey].category} — {caseData[activeCaseKey].year}
                </span>
                <h2 className="text-4xl sm:text-6xl font-serif text-white uppercase mb-6">
                  {caseData[activeCaseKey].title}
                </h2>
                <p className="text-lg font-extralight text-neutral-300 max-w-2xl leading-relaxed mb-8">
                  {caseData[activeCaseKey].description}
                </p>
              </div>

              <div className="relative aspect-video w-full bg-neutral-900 rounded-lg overflow-hidden border border-white/10">
                <Image 
                  src={caseData[activeCaseKey].heroImg} 
                  alt={caseData[activeCaseKey].title}
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                    {text.archive.detailsTitle}
                  </h4>
                  <p className="text-xs font-mono text-neutral-300 leading-relaxed bg-neutral-900 p-4 rounded border border-white/5">
                    {caseData[activeCaseKey].promptSpec}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                    {text.archive.detailsDir}
                  </h4>
                  <p className="text-xs font-extralight text-neutral-400 leading-relaxed">
                    {caseData[activeCaseKey].artDir}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6 sm:p-12 transition-opacity duration-300">
          <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
            <span>{lightboxCategory}</span>
            <button onClick={() => setLightboxOpen(false)} className="text-white hover:opacity-70 flex items-center space-x-2">
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center py-6">
            <div className="relative max-h-[70vh] w-full aspect-[4/3] max-w-2xl border border-white/10 mb-4 overflow-hidden rounded">
              <Image 
                src={lightboxImg} 
                alt={lightboxTitle} 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-serif text-white mt-4">{lightboxTitle}</h3>
          </div>
          <div className="text-center text-[10px] font-mono text-neutral-500">
            THE SILENT STUDIO — ARCHIVE PROJECT
          </div>
        </div>
      )}

    </div>
  );
}
