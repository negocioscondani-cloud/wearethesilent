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
  Sparkles,
  Check,
  HelpCircle,
  Activity,
  Award
} from 'lucide-react';

const SKOOL_LINK = "https://www.skool.com/we-are-the-silent-ia-8224/about";

const TRANSLATIONS = {
  es: {
    hero: {
      location: "MADRID — SAN JOSÉ — TOKIO",
      title: "Consigue tu diagnóstico gratis de contenido IA",
      headline: "We Are The Silent — la comunidad donde creadores latinos aprenden a hacer contenido con IA que no se ve como IA.",
      subtitle: "4 niveles, de cero a producción de ads completos — por $9/mes. Cancelás cuando quieras.",
      cta: "Únete en Skool",
      trustBar: ["4 niveles", "Comunidad activa", "$9/mes", "Cancelás cuando quieras"]
    },
    work: {
      section: "SECCIÓN 02",
      title: "Contenido que vende, no que se nota que es IA.",
      body: "We Are The Silent es la comunidad hispana de producción visual con IA — fotografía de producto, UGC, y ads completos, con dirección y criterio real, no solo botones.",
      items: [
        { num: "01", title: "Fotografía de producto con IA", desc: "Generación de bodegones y empaques con texturas fotorrealistas y reflejos de luz física coherentes.", img: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" },
        { num: "02", title: "UGC / testimoniales generados", desc: "Creación de portavoces virtuales y clonación de rostros/voces con consistencia natural y acento hispano.", img: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif" },
        { num: "03", title: "Ads completos listos para pautar", desc: "Producción audiovisual de extremo a extremo, listos para campañas publicitarias en Meta, TikTok y YouTube.", img: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29271-scaled.avif" },
        { num: "04", title: "Dirección de personajes y narrativa", desc: "Consistencia de personajes en planos continuos y dirección de arte con intención real (como El Taller de Annie).", img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_solitary_woman_in_tailored_b_1c6d1278-90f0-4b5e-a356-d765648fa876_3.avif" }
      ],
      caption: "Sistemas y flujos reales que usamos en campañas activas — no tutoriales genéricos de YouTube."
    },
    process: {
      section: "SECCIÓN 03",
      title: "Cómo funciona el proceso",
      yourPart: {
        title: "Tu parte:",
        desc: "3 preguntas rápidas — qué contenido hacés hoy, tu nivel actual, y tu meta (más seguidores, más ventas, o montar tu propia agencia)."
      },
      ourPart: {
        title: "Nuestra parte:",
        steps: [
          "Analizamos tu contenido actual y tu nicho.",
          "Te ubicamos en el nivel correcto del camino de 4 etapas.",
          "Te invitamos a unirte a la comunidad en Skool.",
          "Ahí adentro: flujo completo de herramientas (Higgsfield, Seedance, Kling) + comunidad activa para feedback real."
        ]
      },
      caption: "Sin tarea que temer. Entrás, te ubicamos, te unís en Skool, empezás a producir.",
      diagnosticCard: {
        title: "Diagnóstico de Contenido IA",
        subtitle: "Completa estas 3 preguntas rápidas para ubicar tu nivel y recomendar tu etapa de inicio.",
        q1: "¿Qué tipo de contenido haces hoy?",
        q1Opts: ["Fotografía de Producto", "Videos para Redes / UGC", "Aún no hago contenido"],
        q2: "¿Cuál es tu nivel actual con herramientas IA?",
        q2Opts: ["Principiante (Cero absoluto)", "Intermedio (Sé usar prompts)", "Avanzado (Flujos complejos)"],
        q3: "¿Cuál es tu meta principal hoy?",
        q3Opts: ["Ganar más seguidores", "Aumentar mis ventas", "Montar mi propia agencia de contenido"],
        calculating: "Analizando tus respuestas...",
        resultTitle: "Tu Diagnóstico está listo",
        recommendation: "Te recomendamos iniciar en la",
        stages: [
          "Etapa 1: Fundamentos Generativos e Intención Creativa",
          "Etapa 2: Fotografía de Producto y Composición de Lujo",
          "Etapa 3: UGC Virtual y Clonación de Voz/Rostro",
          "Etapa 4: Producción de Ads Completos y Modelo de Agencia"
        ],
        nextSteps: "Para comenzar con tu plan de aprendizaje y reclamar tu diagnóstico personalizado, únete a We Are The Silent en Skool:",
        btnJoin: "RECLAMAR DIAGNÓSTICO EN SKOOL",
        btnReset: "Repetir preguntas"
      }
    },
    why: {
      section: "SECCIÓN 04",
      title: "Por qué conviene",
      items: [
        {
          title: "Sin perder tiempo en tutoriales sueltos",
          desc: "Aprendés el flujo completo de extremo a extremo, no clips sueltos de YouTube que no se conectan entre sí."
        },
        {
          title: "Sin quedarte en lo genérico",
          desc: "Dirección de arte, guion y criterio estético real — no nos limitamos a escribir un 'prompt y ya'."
        },
        {
          title: "Te acompañamos de verdad",
          desc: "We Are The Silent no es un curso pregrabado y abandonado: es una comunidad activa con feedback diario de expertos y un sistema completo (fundamentos → producto → UGC → ad completo)."
        }
      ]
    },
    price: {
      section: "SECCIÓN 05",
      title: "Acceso completo a We Are The Silent",
      priceTag: "$9/mes",
      body: "Menos que una suscripción de streaming. Cancelás cuando quieras.",
      highlight: "Riesgo cero real: es literalmente el precio de probar sin pensarlo.",
      cta: "Únete en Skool"
    },
    faq: {
      section: "SECCIÓN 06",
      title: "Preguntas Frecuentes",
      items: [
        {
          q: "¿Qué voy a poder hacer al terminar?",
          a: "Producir fotografía de producto, UGC y ads completos con IA, con dirección de arte y narrativa propia, listos para vender o pautar."
        },
        {
          q: "¿Necesito experiencia previa?",
          a: "No, el camino empieza desde los fundamentos absolutos de la creación de prompts y el criterio estético."
        },
        {
          q: "¿Cuánto tiempo toma ver resultados?",
          a: "Si sigues el flujo, en tus primeros 7 días tendrás tus primeras imágenes de producto pulidas y clips cortos generados de alta calidad."
        },
        {
          q: "¿Dónde está la comunidad?",
          a: "Todo pasa dentro de Skool: clases ordenadas, comunidad activa para feedback, tutorías y recursos en un solo lugar. Te llega el link de acceso inmediatamente al unirte."
        },
        {
          q: "¿Cómo pago?",
          a: "Es una suscripción mensual segura gestionada directamente dentro de la plataforma Skool. Puedes cancelar con un solo clic cuando quieras desde tu perfil."
        }
      ]
    },
    footer: {
      sub: "Campañas imaginadas con IA. Creadas por Humanos.",
      rights: "© 2026 THE SILENT STUDIO INC. TODOS LOS DERECHOS RESERVADOS."
    }
  },
  en: {
    hero: {
      location: "PARIS — NEW YORK — TOKYO",
      title: "Get your free AI content diagnosis",
      headline: "We Are The Silent — the community where Latino creators learn to make AI content that doesn't look like AI.",
      subtitle: "4 levels, from zero to full ads production — for $9/mo. Cancel anytime.",
      cta: "Join on Skool",
      trustBar: ["4 levels", "Active community", "$9/mo", "Cancel anytime"]
    },
    work: {
      section: "SECTION 02",
      title: "Content that sells, not content that screams AI.",
      body: "We Are The Silent is the Hispanic AI visual production community — product photography, UGC, and full ads, with real direction and criteria, not just buttons.",
      items: [
        { num: "01", title: "AI Product Photography", desc: "Generation of high-end commercial sets and packaging with photorealistic textures and physically coherent light reflections.", img: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" },
        { num: "02", title: "Generated UGC / Testimonials", desc: "Creation of virtual spokespersons and face/voice cloning with natural consistency and Spanish-speaking accents.", img: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif" },
        { num: "03", title: "Complete ads ready to run", desc: "End-to-end audiovisual ad production, fully optimized for paid campaigns on Meta, TikTok, and YouTube.", img: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29271-scaled.avif" },
        { num: "04", title: "Character direction and storytelling", desc: "Character consistency across continuous shots and real visual art direction (like Annie's Workshop).", img: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_solitary_woman_in_tailored_b_1c6d1278-90f0-4b5e-a356-d765648fa876_3.avif" }
      ],
      caption: "Real systems and workflows that we use in active campaigns — not generic YouTube tutorials."
    },
    process: {
      section: "SECTION 03",
      title: "How the process works",
      yourPart: {
        title: "Your part:",
        desc: "3 quick questions — what content you make today, your current level, and your goal (more followers, more sales, or starting your own agency)."
      },
      ourPart: {
        title: "Our part:",
        steps: [
          "We analyze your current content and niche.",
          "We place you in the correct level of the 4-stage path.",
          "We invite you to join the community on Skool.",
          "Inside: full tool workflow (Higgsfield, Seedance, Kling) + active community for real feedback."
        ]
      },
      caption: "No assignments to fear. You enter, we place you, you join on Skool, you start producing.",
      diagnosticCard: {
        title: "AI Content Diagnosis",
        subtitle: "Complete these 3 quick questions to map your level and recommend your starting stage.",
        q1: "What type of content do you make today?",
        q1Opts: ["Product Photography", "Social Media / UGC Videos", "I don't make content yet"],
        q2: "What is your current level with AI tools?",
        q2Opts: ["Beginner (Absolute zero)", "Intermediate (I know how to prompt)", "Advanced (Complex workflows)"],
        q3: "What is your main goal today?",
        q3Opts: ["Gain more followers", "Increase my sales", "Start my own content agency"],
        calculating: "Analyzing your answers...",
        resultTitle: "Your Diagnosis is ready",
        recommendation: "We recommend starting at",
        stages: [
          "Stage 1: Generative Foundations and Creative Intention",
          "Stage 2: Product Photography & Luxury Composition",
          "Stage 3: Virtual UGC and Voice/Face Cloning",
          "Stage 4: Complete Ad Production and Agency Model"
        ],
        nextSteps: "To start your learning path and claim your customized diagnosis, join We Are The Silent on Skool:",
        btnJoin: "CLAIM DIAGNOSIS ON SKOOL",
        btnReset: "Retake questions"
      }
    },
    why: {
      section: "SECTION 04",
      title: "Why it works",
      items: [
        {
          title: "Without wasting time on scattered tutorials",
          desc: "You learn the entire end-to-end workflow, not scattered YouTube clips that never connect together."
        },
        {
          title: "Without staying generic",
          desc: "Real art direction, scriptwriting, and aesthetic criteria — we don't just write a 'prompt and go'."
        },
        {
          title: "We walk with you all the way",
          desc: "We Are The Silent is not a pre-recorded abandoned course: it's an active community with daily expert feedback and a complete system (fundamentals → product → UGC → full ad)."
        }
      ]
    },
    price: {
      section: "SECTION 05",
      title: "Full access to We Are The Silent",
      priceTag: "$9/month",
      body: "Less than a streaming subscription. Cancel anytime.",
      highlight: "Real zero risk: it's literally the price of trying without thinking.",
      cta: "Join on Skool"
    },
    faq: {
      section: "SECTION 06",
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What will I be able to do when finished?",
          a: "Produce high-fidelity product photography, UGC, and complete ads with AI, with your own art direction and storytelling, ready to sell or run."
        },
        {
          q: "Do I need previous experience?",
          a: "No, the path starts from the absolute fundamentals of prompt crafting and aesthetic judgment."
        },
        {
          q: "How long does it take to see results?",
          a: "If you follow the path, in your first 7 days you will have your first polished product images and high-quality short clips ready."
        },
        {
          q: "Where is the community located?",
          a: "Everything happens inside Skool: structured classes, active feedback community, coaching, and resources all in one place. You get the access link immediately after joining."
        },
        {
          q: "How do I pay?",
          a: "It is a secure monthly subscription managed directly inside the Skool platform. You can cancel with a single click anytime from your profile."
        }
      ]
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

  // Sound/Drone Toggle State
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Active FAQ index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Diagnostic Wizard State
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculatedStage, setCalculatedStage] = useState<string>('');

  const handleAnswerSelect = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        // Simple logic to calculate stage:
        // If they have no content or are beginners -> Stage 1 or 2
        // If they are advanced -> Stage 4
        // Otherwise -> Stage 3
        const isBeginner = nextAnswers[1] === 0;
        const isNoContent = nextAnswers[0] === 2;
        const isAdvanced = nextAnswers[1] === 2;

        let selectedStage = '';
        if (isNoContent || isBeginner) {
          selectedStage = text.process.diagnosticCard.stages[0]; // Stage 1
        } else if (isAdvanced) {
          selectedStage = text.process.diagnosticCard.stages[3]; // Stage 4
        } else {
          // Check goals
          if (nextAnswers[2] === 1) {
            selectedStage = text.process.diagnosticCard.stages[1]; // Stage 2 (sales / product)
          } else {
            selectedStage = text.process.diagnosticCard.stages[2]; // Stage 3 (UGC / video)
          }
        }
        setCalculatedStage(selectedStage);
        setIsCalculating(false);
        setStep(4); // Result screen
      }, 1500);
    }
  };

  const resetDiagnostic = () => {
    setStep(1);
    setAnswers([]);
    setCalculatedStage('');
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtxRef.current.createOscillator();
        const gainNode = audioCtxRef.current.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(55, audioCtxRef.current.currentTime);
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

  // Ambient Canvas background logic
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
  }, [language]);

  return (
    <div className="bg-[#050505] text-[#e5e5e5] font-sans antialiased selection:bg-white selection:text-black relative">
      
      {/* Sound Toggle controls (Floating upper right overlay) */}
      <div className="fixed top-20 right-6 sm:right-12 z-50">
        <button 
          onClick={toggleAudio} 
          data-cursor-text={isPlaying ? (language === 'es' ? "MUTEAR" : "MUTE") : (language === 'es' ? "SONIDO" : "SOUND")}
          className="text-xs tracking-widest uppercase text-neutral-300 hover:text-white flex items-center space-x-2 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-md transition-all bg-black/40"
        >
          {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="text-[10px] font-mono">{isPlaying ? "SOUND ON" : "SOUND OFF"}</span>
        </button>
      </div>

      {/* SECTION 01: HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden swiss-grid-bg pt-24 pb-12">
        {/* Interactive Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60"></canvas>
        
        {/* Dark Gradient Overlay for Cinematic Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none"></div>

        {/* Hero Centered Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <p className="text-xs sm:text-sm font-mono tracking-mega text-neutral-400 uppercase mb-6 opacity-90 animate-pulse">
            {text.hero.location}
          </p>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight text-white mb-6 uppercase leading-[1.1] select-none max-w-4xl">
            {text.hero.title}
          </h1>

          <p className="text-lg sm:text-2xl font-sans font-light tracking-wide text-neutral-300 max-w-3xl mb-4 italic leading-relaxed">
            {text.hero.headline}
          </p>

          <p className="text-sm md:text-base font-extralight text-neutral-400 max-w-2xl mb-10">
            {text.hero.subtitle}
          </p>

          <div className="flex flex-col items-center space-y-8">
            <Button 
              asChild
              data-cursor-text={language === 'es' ? "UNIRSE" : "JOIN"}
              className="group relative inline-flex items-center space-x-3 bg-white text-black px-10 py-6 rounded-full text-xs tracking-widest font-bold uppercase transition-all duration-500 hover:bg-neutral-200 hover:px-12 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] h-auto"
            >
              <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                <span>{text.hero.cta}</span>
                <span className="inline-block transform transition-transform group-hover:translate-x-1.5">→</span>
              </a>
            </Button>

            {/* Horizontal Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
              {text.hero.trustBar.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  <Check className="w-3 h-3 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-center flex flex-col items-center pointer-events-none hidden md:flex">
          <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase mb-2">
            {language === 'es' ? 'DESPLAZAR PARA DESCUBRIR' : 'SCROLL TO DISCOVER'}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-500 to-transparent"></div>
        </div>
      </section>

      {/* SECTION 02: THE WORK (EL TRABAJO) */}
      <section id="work" className="relative min-h-screen py-32 px-6 sm:px-12 md:px-24 flex items-center bg-[#050505] border-t border-white/5 swiss-grid-bg overflow-hidden">
        
        {/* Subtle floating glow sphere */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[140px] pointer-events-none animate-orbit-1 z-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.work.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">THE WORK</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side text Manifesto */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="reveal-text text-3xl sm:text-5xl font-serif font-light leading-[1.15] text-white tracking-tight">
                {text.work.title}
              </h2>
              <p className="text-sm sm:text-base font-extralight text-neutral-400 leading-relaxed">
                {text.work.body}
              </p>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest pt-4 border-t border-white/10 italic">
                “{text.work.caption}”
              </p>
            </div>

            {/* Right side interactive 4 areas */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {text.work.items.map((item, idx) => (
                <div 
                  key={idx}
                  data-cursor-text={language === 'es' ? "FOTO" : "PHOTO"}
                  className="group relative overflow-hidden border border-white/10 hover:border-white/30 rounded-sm bg-[#0c0c0d] p-6 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)] aspect-[4/5] flex flex-col justify-between"
                >
                  {/* Background photo behind card */}
                  <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <span className="text-neutral-500 text-xs font-mono block">{item.num} //</span>
                    <h3 className="text-xl font-serif text-white group-hover:text-neutral-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="relative z-10">
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03: PROCESS & DIAGNOSTIC CARD */}
      <section id="process" className="relative py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5 swiss-grid-bg overflow-hidden">
        
        {/* Subtle floating glow sphere */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-white/[0.012] blur-[150px] pointer-events-none animate-orbit-2 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.process.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">THE SYSTEM</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side process explanation */}
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight uppercase reveal-text">
                {text.process.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-neutral-300 uppercase tracking-widest flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>{text.process.yourPart.title}</span>
                  </h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mt-2 pl-4">
                    {text.process.yourPart.desc}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-xs font-mono text-neutral-300 uppercase tracking-widest flex items-center space-x-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{text.process.ourPart.title}</span>
                  </h3>
                  
                  <div className="space-y-4 pl-4">
                    {text.process.ourPart.steps.map((stepTxt, sIdx) => (
                      <div key={sIdx} className="flex items-start space-x-3 text-neutral-400 text-sm font-light leading-relaxed">
                        <span className="text-neutral-600 font-mono text-xs">0{sIdx + 1}.</span>
                        <span>{stepTxt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest border-t border-white/10 pt-6 italic">
                “{text.process.caption}”
              </p>
            </div>

            {/* Right side: INTERACTIVE DIAGNOSTIC WIZARD CARD */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                className="w-full max-w-lg bg-[#0c0c0d] border border-white/10 rounded-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden"
                data-cursor-text={step === 4 ? (language === 'es' ? "REGISTRAR" : "REGISTER") : (language === 'es' ? "PREGUNTA" : "QUESTION")}
              >
                
                {/* Visual mesh detail inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] blur-xl rounded-full" />
                
                {step <= 3 && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
                        {text.process.diagnosticCard.title}
                      </span>
                      <span className="text-[10px] font-mono text-white">
                        {step} / 3
                      </span>
                    </div>

                    <div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden mb-8">
                      <div 
                        className="bg-white h-full transition-all duration-500" 
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>

                    {step === 1 && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-serif text-white italic">
                          {text.process.diagnosticCard.q1}
                        </h4>
                        <div className="space-y-3 pt-2">
                          {text.process.diagnosticCard.q1Opts.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswerSelect(oIdx)}
                              className="w-full text-left bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white px-5 py-4 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-between"
                            >
                              <span>{opt}</span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-serif text-white italic">
                          {text.process.diagnosticCard.q2}
                        </h4>
                        <div className="space-y-3 pt-2">
                          {text.process.diagnosticCard.q2Opts.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswerSelect(oIdx)}
                              className="w-full text-left bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white px-5 py-4 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-between"
                            >
                              <span>{opt}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-serif text-white italic">
                          {text.process.diagnosticCard.q3}
                        </h4>
                        <div className="space-y-3 pt-2">
                          {text.process.diagnosticCard.q3Opts.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswerSelect(oIdx)}
                              className="w-full text-left bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-white/20 text-neutral-300 hover:text-white px-5 py-4 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-between"
                            >
                              <span>{opt}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {isCalculating && (
                  <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="h-6 w-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <p className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                      {text.process.diagnosticCard.calculating}
                    </p>
                  </div>
                )}

                {step === 4 && !isCalculating && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">
                        {text.process.diagnosticCard.resultTitle}
                      </span>
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-sm border border-white/10 space-y-2">
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                        {text.process.diagnosticCard.recommendation}
                      </p>
                      <h5 className="text-xl font-serif text-white italic leading-snug">
                        {calculatedStage}
                      </h5>
                    </div>

                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {text.process.diagnosticCard.nextSteps}
                    </p>

                    <Button
                      asChild
                      className="w-full bg-white hover:bg-neutral-200 text-black font-bold uppercase tracking-widest text-xs py-6 rounded-none transition-all duration-300"
                    >
                      <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                        {text.process.diagnosticCard.btnJoin}
                      </a>
                    </Button>

                    <div className="text-center pt-2">
                      <button
                        onClick={resetDiagnostic}
                        className="text-[10px] font-mono text-neutral-500 hover:text-white uppercase tracking-widest underline decoration-white/20"
                      >
                        {text.process.diagnosticCard.btnReset}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 04: BENEFITS (POR QUÉ CONVIENE) */}
      <section id="why" className="relative py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5 overflow-hidden">
        
        {/* Subtle floating glow sphere */}
        <div className="absolute top-1/3 left-1/3 w-[550px] h-[550px] rounded-full bg-white/[0.008] blur-[160px] pointer-events-none animate-orbit-1 z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.why.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">THE ADVANTAGES</span>
          </div>

          <div className="text-center md:text-left mb-20">
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight uppercase reveal-text">
              {text.why.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {text.why.items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0c0c0d] border border-white/5 hover:border-white/20 rounded-sm p-8 space-y-6 transition-all duration-500"
              >
                <div className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center bg-white/[0.02]">
                  <span className="text-xs font-mono text-white">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-serif text-white italic">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: PRICING (PRECIO) */}
      <section id="pricing" className="py-36 px-6 sm:px-12 md:px-24 bg-neutral-950 border-t border-white/5 relative overflow-hidden swiss-grid-bg">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-4">{text.price.section}</span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-white tracking-tight mb-4 leading-tight reveal-text">
            {text.price.title}
          </h2>

          <div className="my-8">
            <span className="text-5xl sm:text-7xl font-serif font-bold text-white tracking-tight">
              {text.price.priceTag}
            </span>
          </div>

          <p className="text-base sm:text-lg font-extralight text-neutral-300 max-w-xl mb-2 leading-relaxed reveal-text">
            {text.price.body}
          </p>

          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-12 reveal-text">
            {text.price.highlight}
          </p>

          <Button 
            asChild
            data-cursor-text={language === 'es' ? "UNIRSE" : "JOIN"}
            className="group relative inline-flex items-center space-x-3 bg-white hover:bg-neutral-200 text-black px-10 py-7 rounded-full text-xs tracking-widest font-bold uppercase transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] h-auto reveal-text"
          >
            <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
              <span>{text.price.cta}</span>
              <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Button>
        </div>
      </section>

      {/* SECTION 06: FAQ */}
      <section id="faq" className="py-32 px-6 sm:px-12 md:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex items-center space-x-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">{text.faq.section}</span>
            <div className="w-12 h-px bg-neutral-800"></div>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-16 uppercase text-center md:text-left">
            {text.faq.title}
          </h2>

          <div className="space-y-4 border-t border-white/10 pt-8">
            {text.faq.items.map((item, idx) => (
              <div 
                key={idx} 
                className="border-b border-white/5 pb-4"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-4 text-white hover:text-neutral-300 font-serif italic text-lg transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-neutral-500 font-mono text-sm pl-4">
                    {openFaqIndex === idx ? "—" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${openFaqIndex === idx ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed pl-4 border-l border-white/10 py-2">
                    {item.a}
                  </p>
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

    </div>
  );
}
