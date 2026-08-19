'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Check, 
  Copy, 
  Film, 
  Sliders, 
  BookOpen, 
  Search, 
  Sun, 
  Sparkles, 
  Compass, 
  Contrast, 
  Tv 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TRANSLATIONS = {
  es: {
    title: "El Arte de la Luz",
    highlight: "que Evoca Emoción",
    subtitle: "La iluminación no es solo visibilidad; es la psicología de la escena. Utiliza estos esquemas de luz profesionales, modificadores ópticos y prompts probados para Midjourney, Stable Diffusion, Flux y Sora.",
    badge: "DIRECCIÓN DE ARTE & GENERACIÓN IA",
    navEmotions: "Emociones",
    navStudio: "Estudio Interactivo",
    navGlossary: "Glosario Técnico",
    toastCopy: "Prompt copiado al portapapeles",
    cardSchema: "Esquema:",
    cardTemp: "Temperatura:",
    cardContrast: "Ratio Contraste:",
    btnCopy: "Copiar Prompt",
    btnCreate: "Crear Prompt",
    studioTitle: "Estudio Interactivo de Iluminación",
    studioSub: "Ajusta los parámetros técnicos para previsualizar la luz en el simulador 2.5D y generar tu prompt de forma instantánea.",
    studioBadge: "SIMULADOR EN VIVO",
    studioPreview: "Vista Previa en Vivo",
    studioPreset: "Personalizado",
    controlAngle: "Ángulo Luz Principal",
    controlTemp: "Temperatura (Kelvin)",
    controlContrast: "Ratio de Contraste",
    controlRim: "Luz de Recorte (Rim)",
    controlFog: "Atmósfera / Haze",
    glossaryTitle: "Glosario de Modificadores Técnicos",
    glossarySub: "Vocabulario profesional de cine y fotografía para afinar tus prompts.",
    glossarySearch: "Buscar término...",
    glossaryColTerm: "Término en Prompt",
    glossaryColType: "Técnica de Luz",
    glossaryColEffect: "Efecto Visual",
    tempWarm: "Ultra Cálido",
    tempTungsten: "Cálido Tungsteno",
    tempDaylight: "Neutro Luz Día",
    tempOvercast: "Frío Anochecer",
    tempBlue: "Azul Frío Intenso"
  },
  en: {
    title: "The Art of Light",
    highlight: "that Evokes Emotion",
    subtitle: "Lighting is not just visibility; it is the psychology of the scene. Use these professional lighting schemes, optical modifiers, and tested prompts for Midjourney, Stable Diffusion, Flux, and Sora.",
    badge: "ART DIRECTION & AI GENERATION",
    navEmotions: "Emotions",
    navStudio: "Interactive Studio",
    navGlossary: "Technical Glossary",
    toastCopy: "Prompt copied to clipboard",
    cardSchema: "Scheme:",
    cardTemp: "Temperature:",
    cardContrast: "Contrast Ratio:",
    btnCopy: "Copy Prompt",
    btnCreate: "Create Prompt",
    studioTitle: "Interactive Lighting Studio",
    studioSub: "Adjust technical parameters to preview the light on the 2.5D simulator and generate your prompt instantly.",
    studioBadge: "LIVE SIMULATOR",
    studioPreview: "Live Preview",
    studioPreset: "Custom",
    controlAngle: "Key Light Angle",
    controlTemp: "Temperature (Kelvin)",
    controlContrast: "Contrast Ratio",
    controlRim: "Rim Light Intensity",
    controlFog: "Atmosphere / Haze",
    glossaryTitle: "Technical Glossary of Modifiers",
    glossarySub: "Professional cinema and photography vocabulary to refine your prompts.",
    glossarySearch: "Search term...",
    glossaryColTerm: "Prompt Term",
    glossaryColType: "Light Technique",
    glossaryColEffect: "Visual Effect",
    tempWarm: "Ultra Warm",
    tempTungsten: "Warm Tungsten",
    tempDaylight: "Neutral Daylight",
    tempOvercast: "Cool Twilight",
    tempBlue: "Intense Cold Blue"
  }
};

const EMOTIONAL_CARDS = [
  {
    category: "misterio",
    badge: { es: "Misterio & Tensión", en: "Mystery & Tension" },
    title: { es: "Chiaroscuro & Sombra Rápida", en: "Chiaroscuro & Fast Shadow" },
    desc: {
      es: "Contraste extremo, sombras duras y fuentes de luz ocultas o rasantes que cortan la figura y esconden detalles en la penumbra.",
      en: "Extreme contrast, hard shadows, and hidden or raking light sources that cut the figure and hide details in the twilight."
    },
    schema: "Single-source Side Light",
    temp: "4000K (Neutro frío)",
    contrast: "8:1 (Muy Alto)",
    prompt: "Cinematic film still, low-key chiaroscuro lighting, hard single-source side light carving deep shadows across the subject's face, high contrast ratio, moody dark ambiance, deep blacks, subtle edge falloff, 35mm anamorphic lens --ar 16:9"
  },
  {
    category: "nostalgia",
    badge: { es: "Nostalgia & Calidez", en: "Nostalgia & Warmth" },
    title: { es: "Atardecer Ámbar & Practical Lights", en: "Amber Sunset & Practical Lights" },
    desc: {
      es: "Luz dorada cálida y direccional a baja altura con rebote suave, destellos ambientales (lens flare) y fuentes cálidas de fondo.",
      en: "Warm and directional golden light at low height with soft bounce, environmental lens flare, and warm background sources."
    },
    schema: "Rembrandt + Practical Tungsten",
    temp: "3200K - 2800K (Muy Cálido)",
    contrast: "3:1 (Suave / Intimo)",
    prompt: "Intimate cinematic scene, warm Rembrandt lighting, golden hour sunlight streaming through sheer curtains, gentle dust motes suspended in volumetric light beams, 3200K warm tungsten practical lights in background, shallow depth of field, creamy bokeh, 50mm f/1.4 --ar 16:9"
  },
  {
    category: "epica",
    badge: { es: "Esperanza & Trascendencia", en: "Hope & Transcendence" },
    title: { es: "Contraluz Épico & Luz Recorte", en: "Epic Backlight & Rim Light" },
    desc: {
      es: "Potente contraluz rompiendo a través de atmósfera/niebla con rayos crepusculares visiblemente delineados (God Rays) y silueta marcada.",
      en: "Powerful backlight breaking through atmosphere/fog with visibly outlined crepuscular rays (God Rays) and strong silhouette."
    },
    schema: "Strong Backlight + Rim Halo",
    temp: "5600K (Luz de día intensa)",
    contrast: "Silueta Dinámica",
    prompt: "Epic cinematic shot, intense volumetric god rays piercing through misty atmosphere, strong backlit silhouette with bright silver rim light outlining the subject, high dynamic range, majestic and awe-inspiring atmosphere, 24mm cinema lens --ar 16:9"
  },
  {
    category: "lujo",
    badge: { es: "Sofisticación & Elegancia", en: "Sophistication & Elegance" },
    title: { es: "Luz Difusa Studio Octabox", en: "Studio Octabox Diffuse Light" },
    desc: {
      es: "Gradientes ultrasuaves en piel y tejidos, rellenos oscuros controlados (negative fill) para moldear sin quemar sombras, y acentos limpios.",
      en: "Ultra-smooth skin and fabric gradients, controlled dark fills (negative fill) to shape without burning shadows, and clean accents."
    },
    schema: "Large Softbox + Negative Fill",
    temp: "5000K (Blanco Puro Editorial)",
    contrast: "2:1 (Sutil y Elegante)",
    prompt: "High-end luxury editorial still, large diffused softbox key light, subtle specular edge highlights, pristine skin tones with smooth gradient falloff, clean negative fill for controlled contrast, dark minimalist backdrop, shot on Hasselblad H6D-100c, 85mm prime lens --ar 16:9"
  },
  {
    category: "cyberpunk",
    badge: { es: "Caos & Futuro Distópico", en: "Chaos & Dystopian Future" },
    title: { es: "Choque Cromático Cian/Magenta", en: "Cyan/Magenta Chromatic Clash" },
    desc: {
      es: "Contraste de temperaturas opuestas (frío/cálido saturado), reflejos de luz de neón en húmedo y sombras coloreadas dramáticas.",
      en: "Contrast of opposing temperatures (cold/saturated warm), wet neon light reflections, and dramatic colored shadows."
    },
    schema: "Split Dual Light (Cyan / Magenta)",
    temp: "Saturada Neón Dual",
    contrast: "Sat. Extrema",
    prompt: "Cyberpunk cinematic frame, dual-tone split lighting, harsh cyan backlight paired with intense magenta front-fill, wet reflective ground with distorted neon reflections, sharp cast shadows, eerie atmospheric haze, anamorphic streak flares, 35mm lens --ar 16:9"
  },
  {
    category: "soledad",
    badge: { es: "Melancolía & Vacío", en: "Melancholy & Emptiness" },
    title: { es: "Luz Difusa Fría de Día Nublado", en: "Cold Overcast Diffuse Daylight" },
    desc: {
      es: "Iluminación uniforme sin destellos intensos ni altas luces, dominada por azules o grises neutros que evocan introspección y distancia.",
      en: "Even lighting without intense highlights, dominated by blues or neutral grays that evoke introspection and distance."
    },
    schema: "Window Ambient Diffuse",
    temp: "6500K - 7000K (Frío)",
    contrast: "1.5:1 (Bajo)",
    prompt: "Cinematic portrait, overcast diffused daylight, cold color temperature 6500K, soft muted ambient light coming through a rain-slicked window, flat subtle shadows, desaturated muted color palette, melancholic mood, Kodak Portra aesthetic --ar 16:9"
  }
];

const GLOSSARY_ITEMS = [
  {
    term: "Chiaroscuro",
    type: { es: "Alto Contraste / Sombra Dura", en: "High Contrast / Hard Shadow" },
    effect: { es: "Genera misterio, drama y dualidad moral en el personaje.", en: "Generates mystery, drama and moral duality in the character." },
    promptSnippet: "chiaroscuro lighting"
  },
  {
    term: "Volumetric God Rays",
    type: { es: "Efecto Tyndall / Atmosférico", en: "Tyndall Effect / Atmospheric" },
    effect: { es: "Evoca esperanza, divinidad, épica y trascendencia.", en: "Evokes hope, divinity, epic and transcendence." },
    promptSnippet: "intense volumetric god rays piercing through mist"
  },
  {
    term: "Rim Light / Kicker",
    type: { es: "Luz de Recorte / Contraluz", en: "Rim Light / Backlight" },
    effect: { es: "Separa al sujeto del fondo con un halo brillante. Elegancia y presencia.", en: "Separates subject from background with a bright halo. Elegance and presence." },
    promptSnippet: "bright rim light outlining the subject"
  },
  {
    term: "Practical Lights",
    type: { es: "Fuentes Dentro de Escena", en: "In-Scene Light Sources" },
    effect: { es: "Lámparas o velas visibles. Aumenta la intimidad y el realismo.", en: "Visible lamps or candles. Increases intimacy and realism." },
    promptSnippet: "warm tungsten practical lights in background"
  },
  {
    term: "Negative Fill",
    type: { es: "Absorción de Luz (Banderas)", en: "Light Absorption (Black Flags)" },
    effect: { es: "Profundiza las sombras en un lado de la cara para mayor tridimensionalidad.", en: "Deepens shadows on one side of the face for greater three-dimensionality." },
    promptSnippet: "clean negative fill for controlled contrast"
  },
  {
    term: "Monster Lighting",
    type: { es: "Luz Cenital Invertida (Desde Abajo)", en: "Inverted Overhead Light (From Below)" },
    effect: { es: "Invierte sombras faciales naturales. Provoca inquietud y terror.", en: "Inverts natural facial shadows. Causes uneasiness and terror." },
    promptSnippet: "eerie underlighting casting upward shadows"
  }
];

export default function LightingGuidePage() {
  const router = useRouter();
  
  // Custom language switcher logic
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const text = TRANSLATIONS[lang];

  // Filtering emotional cards state
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Search glossary state
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Simulator Interactive States
  const [keyAngle, setKeyAngle] = useState<number>(45);
  const [temperature, setTemperature] = useState<number>(3200);
  const [contrastRatio, setContrastRatio] = useState<number>(8);
  const [rimIntensity, setRimIntensity] = useState<number>(70);
  const [fogDensity, setFogDensity] = useState<number>(50);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Toggle local language
  const toggleLanguage = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  // Toast helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Copy text helper
  const copyToClipboard = (textStr: string) => {
    navigator.clipboard.writeText(textStr).then(() => {
      triggerToast(text.toastCopy);
    }).catch(err => {
      console.error("Clipboard copy failed:", err);
    });
  };

  // Kelvin conversion to RGB logic
  const kelvinToRGB = (kelvin: number) => {
    const temp = kelvin / 100;
    let r, g, b;

    if (temp <= 66) {
      r = 255;
      g = temp;
      g = 99.4708025861 * Math.log(g) - 161.1195681661;
      if (temp <= 19) {
        b = 0;
      } else {
        b = temp - 10;
        b = 138.5177312231 * Math.log(b) - 305.0447927307;
      }
    } else {
      r = temp - 60;
      r = 329.698727446 * Math.pow(r, -0.1332047592);
      g = temp - 60;
      g = 288.1221695283 * Math.pow(g, -0.0755148492);
      b = 255;
    }

    return {
      r: Math.min(255, Math.max(0, r)),
      g: Math.min(255, Math.max(0, g)),
      b: Math.min(255, Math.max(0, b))
    };
  };

  const getTemperatureLabel = (k: number) => {
    if (k < 3000) return text.tempWarm;
    if (k < 4000) return text.tempTungsten;
    if (k < 5550) return text.tempDaylight;
    if (k < 7000) return text.tempOvercast;
    return text.tempBlue;
  };

  // Dynamic Prompt generation
  const generatePrompt = () => {
    const terms = [];

    // Lighting Angle term
    if (keyAngle > 30 && keyAngle < 60) terms.push("directional 45-degree key lighting");
    else if (keyAngle >= 60 && keyAngle <= 120) terms.push("side-profile dramatic lighting");
    else if (keyAngle > 120 && keyAngle < 210) terms.push("intense backlight silhouette");
    else terms.push("frontal key illumination");

    // Temp term
    if (temperature < 3200) terms.push(`warm tungsten color palette (${temperature}K)`);
    else if (temperature > 6000) terms.push(`cool cold blue color grade (${temperature}K)`);
    else terms.push(`neutral daylight balance (${temperature}K)`);

    // Contrast term
    if (contrastRatio > 6) terms.push("high-contrast chiaroscuro with deep carved shadows");
    else if (contrastRatio < 4) terms.push("soft low-contrast even lighting");
    else terms.push("balanced cinematic contrast");

    // Rim term
    if (rimIntensity > 50) terms.push("sharp silver rim light outlining subject edges");

    // Fog term
    if (fogDensity > 40) terms.push("dense atmospheric volumetric haze with visible light rays");

    return `Cinematic shot, ${terms.join(", ")}, professional film still, shot on 35mm lens, highly detailed, photorealistic lighting setup --ar 16:9`;
  };

  // Render simulator canvas callback
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 70;

    // Clear Background
    ctx.fillStyle = '#0A0D0E';
    ctx.fillRect(0, 0, width, height);

    // Volumetric fog background overlay
    if (fogDensity > 0) {
      const fogGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width / 1.2);
      fogGrad.addColorStop(0, `rgba(255, 255, 255, ${fogDensity * 0.0015})`);
      fogGrad.addColorStop(1, 'rgba(10, 13, 14, 0)');
      ctx.fillStyle = fogGrad;
      ctx.fillRect(0, 0, width, height);
    }

    // Direction offset vectors
    const rad = (keyAngle * Math.PI) / 180;
    const lightDist = radius * 0.7;
    const lightX = centerX + Math.cos(rad) * lightDist;
    const lightY = centerY + Math.sin(rad) * lightDist;

    const rgb = kelvinToRGB(temperature);
    const colorStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // Main lighting gradient mapping on sphere
    const sphereGrad = ctx.createRadialGradient(
      lightX, lightY, radius * 0.1,
      centerX, centerY, radius
    );
    sphereGrad.addColorStop(0, colorStr);
    sphereGrad.addColorStop(0.5, `rgba(${rgb.r * 0.5}, ${rgb.g * 0.5}, ${rgb.b * 0.5}, 0.8)`);
    sphereGrad.addColorStop(1, `rgba(5, 5, 10, ${Math.min(1, contrastRatio / 6)})`);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = sphereGrad;
    ctx.fill();

    // Draw rim light glow
    if (rimIntensity > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(197, 160, 89, ${rimIntensity / 100})`; // Gold/champagne rim
      ctx.lineWidth = 3;
      ctx.shadowColor = '#C5A059';
      ctx.shadowBlur = rimIntensity / 5;
      ctx.stroke();
      ctx.restore();
    }

    // Key light indicator
    const srcX = centerX + Math.cos(rad) * (radius + 40);
    const srcY = centerY + Math.sin(rad) * (radius + 40);

    ctx.beginPath();
    ctx.arc(srcX, srcY, 8, 0, Math.PI * 2);
    ctx.fillStyle = colorStr;
    ctx.shadowColor = colorStr;
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;
  }, [keyAngle, temperature, contrastRatio, rimIntensity, fogDensity]);

  // Filters logic
  const filteredCards = EMOTIONAL_CARDS.filter(card => 
    selectedFilter === 'all' || card.category === selectedFilter
  );

  const filteredGlossary = GLOSSARY_ITEMS.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.effect.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.effect.en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] font-sans antialiased selection:bg-[#C5A059] selection:text-black min-h-screen relative overflow-x-hidden pt-28">
      
      {/* Subtle cinematic pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#C5A059] text-black px-5 py-3 rounded-sm font-mono text-xs font-bold shadow-2xl animate-fade-in">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating minimalist sub-header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 relative z-10 flex justify-between items-center border-b border-white/5 pb-6">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="text-gray-400 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-transparent"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'es' ? 'Volver al Curso' : 'Back to Course'}
        </Button>

        <button 
          onClick={toggleLanguage}
          className="text-xs font-mono border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-black px-3 py-1 transition uppercase tracking-wider font-bold"
        >
          {lang === 'es' ? 'English Version' : 'Versión Español'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-16">
        <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
          {text.badge}
        </div>
        
        <h1 className="font-fraunces font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-white tracking-tight">
          {text.title} <br />
          <span className="text-[#C5A059]">{text.highlight}</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-10">
          {text.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
          <div className="px-4 py-2.5 rounded-sm bg-[#12161A] border border-white/5 flex items-center gap-2 text-gray-300">
            <Sun className="w-4 h-4 text-[#C5A059]" />
            <span>Kelvin Balance</span>
          </div>
          <div className="px-4 py-2.5 rounded-sm bg-[#12161A] border border-white/5 flex items-center gap-2 text-gray-300">
            <Contrast className="w-4 h-4 text-[#C5A059]" />
            <span>Contrast Ratio</span>
          </div>
          <div className="px-4 py-2.5 rounded-sm bg-[#12161A] border border-white/5 flex items-center gap-2 text-gray-300">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span>Volumetric Ray Falloff</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 space-y-24 pb-24 relative z-10">

        {/* Section 1: Emotional Cards */}
        <section id="emociones" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-fraunces font-bold text-2xl sm:text-3xl text-white flex items-center gap-3">
                <Film className="w-6 h-6 text-[#C5A059]" />
                {lang === 'es' ? 'Guía de Atmósferas Emocionales' : 'Emotional Atmospheres Guide'}
              </h2>
              <p className="text-gray-400 text-xs mt-1">
                {lang === 'es' ? 'Filtra y copia prompts configurados para activar sensaciones específicas.' : 'Filter and copy customized prompts to trigger specific moods.'}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 font-mono text-[10px]">
              {['all', 'misterio', 'nostalgia', 'epica', 'lujo', 'cyberpunk', 'soledad'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-sm uppercase tracking-wider font-bold transition ${selectedFilter === cat ? 'bg-[#C5A059] text-black' : 'bg-[#12161A] text-gray-300 border border-white/5 hover:border-white/20'}`}
                >
                  {cat === 'all' ? (lang === 'es' ? 'Todas' : 'All') : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#12161A] border border-white/10 p-6 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-6 w-12 h-[2px] bg-[#C5A059]" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block">
                      {card.badge[lang]}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">9:16 AR</span>
                  </div>
                  <h3 className="font-fraunces font-bold text-xl text-white mb-2">{card.title[lang]}</h3>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed font-light">
                    {card.desc[lang]}
                  </p>

                  <div className="bg-[#0A0D0E] rounded-sm p-4 border border-white/5 space-y-2 mb-6 text-xs font-mono">
                    <div className="flex justify-between text-gray-400">
                      <span>{text.cardSchema}</span>
                      <span className="text-gray-200 font-medium">{card.schema}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>{text.cardTemp}</span>
                      <span className="text-[#C5A059] font-medium">{card.temp}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>{text.cardContrast}</span>
                      <span className="text-gray-200 font-medium">{card.contrast}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">Prompt</span>
                  <div className="relative group">
                    <pre className="bg-[#0A0D0E] p-3 rounded-sm text-[10px] font-mono text-gray-300 whitespace-pre-wrap leading-relaxed border border-white/5 select-all max-h-24 overflow-y-auto">
                      {card.prompt}
                    </pre>
                    <button 
                      onClick={() => copyToClipboard(card.prompt)}
                      className="mt-2 w-full py-2 bg-transparent border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white font-mono text-[10px] uppercase font-bold tracking-wider transition flex items-center justify-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {text.btnCopy}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Lighting Studio */}
        <section id="estudio" className="bg-[#12161A] border border-white/10 rounded-sm p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-6 w-16 h-[2px] bg-[#C5A059]" />
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold mb-2 block flex items-center gap-1.5">
              <Sliders className="w-4 h-4" /> {text.studioBadge}
            </span>
            <h2 className="font-fraunces font-bold text-2xl sm:text-4xl text-white">{text.studioTitle}</h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">{text.studioSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Canvas Simulator */}
            <div className="lg:col-span-5 bg-[#0A0D0E] p-4 rounded-sm border border-white/5 flex flex-col items-center justify-center relative">
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-gray-500 mb-3 px-1">
                <span className="text-[#C5A059] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5" /> {text.studioPreview}
                </span>
                <span className="bg-[#12161A] px-2 py-0.5 border border-white/10 rounded text-gray-400">
                  {text.studioPreset}
                </span>
              </div>

              <div className="relative w-full aspect-square max-w-[320px] rounded-sm overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <canvas 
                  ref={canvasRef} 
                  width="320" 
                  height="320" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono text-center text-gray-400">
                <div className="bg-[#12161A] p-2 rounded-sm border border-white/5">
                  Light angle: <span className="text-[#C5A059] font-bold">{keyAngle}°</span>
                </div>
                <div className="bg-[#12161A] p-2 rounded-sm border border-white/5">
                  Kelvin: <span className="text-[#C5A059] font-bold">{temperature}K</span>
                </div>
              </div>
            </div>

            {/* Controls Panel */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Control 1: Key light angle */}
                <div className="space-y-2 bg-[#0A0D0E] p-4 rounded-sm border border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <label className="text-gray-300 font-bold">{text.controlAngle}</label>
                    <span className="text-[#C5A059] font-bold">{keyAngle}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="360" 
                    value={keyAngle} 
                    onChange={(e) => setKeyAngle(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-[#C5A059]" 
                  />
                </div>

                {/* Control 2: Color Temp */}
                <div className="space-y-2 bg-[#0A0D0E] p-4 rounded-sm border border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <label className="text-gray-300 font-bold">{text.controlTemp}</label>
                    <span className="text-[#C5A059] font-bold">{temperature}K</span>
                  </div>
                  <input 
                    type="range" 
                    min="2000" 
                    max="9000" 
                    step="100" 
                    value={temperature} 
                    onChange={(e) => setTemperature(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-[#C5A059]" 
                  />
                  <div className="text-[9px] font-mono text-gray-500 text-right">
                    {getTemperatureLabel(temperature)}
                  </div>
                </div>

                {/* Control 3: Contrast shadow ratio */}
                <div className="space-y-2 bg-[#0A0D0E] p-4 rounded-sm border border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <label className="text-gray-300 font-bold">{text.controlContrast}</label>
                    <span className="text-[#C5A059] font-bold">
                      {contrastRatio > 6 ? 'Low-Key' : (contrastRatio < 4 ? 'High-Key' : 'Standard')}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={contrastRatio} 
                    onChange={(e) => setContrastRatio(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-[#C5A059]" 
                  />
                </div>

                {/* Control 4: Rim light intensity */}
                <div className="space-y-2 bg-[#0A0D0E] p-4 rounded-sm border border-white/5">
                  <div className="flex justify-between text-xs font-mono">
                    <label className="text-gray-300 font-bold">{text.controlRim}</label>
                    <span className="text-[#C5A059] font-bold">{rimIntensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={rimIntensity} 
                    onChange={(e) => setRimIntensity(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-[#C5A059]" 
                  />
                </div>

                {/* Control 5: Fog density */}
                <div className="space-y-2 bg-[#0A0D0E] p-4 rounded-sm border border-white/5 sm:col-span-2">
                  <div className="flex justify-between text-xs font-mono">
                    <label className="text-gray-300 font-bold">{text.controlFog}</label>
                    <span className="text-[#C5A059] font-bold">{fogDensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={fogDensity} 
                    onChange={(e) => setFogDensity(parseInt(e.target.value))}
                    className="w-full cursor-pointer accent-[#C5A059]" 
                  />
                </div>

              </div>

              {/* Generated Prompt Output */}
              <div className="space-y-3 pt-4 border-t border-white/5 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> Prompt Generado Dinámicamente
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">Midjourney / Stable Diffusion</span>
                </div>
                <div className="relative">
                  <pre className="bg-[#0A0D0E] p-4 rounded-sm text-[11px] font-mono text-gray-300 whitespace-pre-wrap leading-relaxed border border-white/5 min-h-[80px]">
                    {generatePrompt()}
                  </pre>
                  <button 
                    onClick={() => copyToClipboard(generatePrompt())}
                    className="mt-3 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold tracking-wider px-6 py-3.5 transition shadow-lg flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {lang === 'es' ? 'Copiar Prompt Generado' : 'Copy Generated Prompt'}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Technical Glossary */}
        <section id="glosario" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <h2 className="font-fraunces font-bold text-2xl sm:text-3xl text-white flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#C5A059]" />
                {text.glossaryTitle}
              </h2>
              <p className="text-gray-400 text-xs mt-1">{text.glossarySub}</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={text.glossarySearch} 
                className="w-full bg-[#12161A] border border-white/10 rounded-sm pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-all font-mono"
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-sm bg-[#12161A]">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0A0D0E] uppercase tracking-wider text-[#C5A059] border-b border-white/10 font-mono text-[10px] font-bold">
                <tr>
                  <th className="p-4">{text.glossaryColTerm}</th>
                  <th className="p-4">{text.glossaryColType}</th>
                  <th className="p-4">{text.glossaryColEffect}</th>
                  <th className="p-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light">
                {filteredGlossary.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-mono text-[#C5A059] font-bold">{item.term}</td>
                    <td className="p-4 font-mono text-[11px] text-gray-300">{item.type[lang]}</td>
                    <td className="p-4 text-gray-400 leading-relaxed max-w-sm">{item.effect[lang]}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => copyToClipboard(item.promptSnippet)}
                        className="text-gray-500 hover:text-[#C5A059] transition-colors p-1"
                        title={text.btnCopy}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
      
    </div>
  );
}
