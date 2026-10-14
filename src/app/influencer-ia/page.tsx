'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Video, 
  ChevronDown, 
  Star, 
  BookOpen, 
  Users, 
  Layers, 
  Eye, 
  Mic, 
  Film, 
  TrendingUp, 
  DollarSign,
  ExternalLink
} from 'lucide-react';

const GUMROAD_CHECKOUT_URL = "https://thesilentstudiomk.gumroad.com/l/influencerIA-mk?wanted=true";

export default function InfluencerIAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'Influencer IA: de cero a tu primera venta',
        value: 27.00,
        currency: 'USD'
      });
    }
  };

  const steps = [
    {
      num: "01",
      title: "Espía a la competencia",
      icon: Eye,
      chapter: "Paso 01",
      topic: "Mapeo de mercado y benchmarking de formatos activos."
    },
    {
      num: "02",
      title: "Crea tus personajes",
      icon: Users,
      chapter: "Paso 02",
      topic: "Estructura de perfiles y selección de nichos estratégicos."
    },
    {
      num: "03",
      title: "Genera sus fotos",
      icon: Sparkles,
      chapter: "Paso 03",
      topic: "Fijación facial y consistencia visual en cada toma."
    },
    {
      num: "04",
      title: "Planifica el contenido",
      icon: Layers,
      chapter: "Paso 04",
      topic: "Calendario editorial y estructuras de retención de audiencia."
    },
    {
      num: "05",
      title: "Dales una voz",
      icon: Mic,
      chapter: "Paso 05",
      topic: "Identidad sonora, tono auditivo y síntesis de audio."
    },
    {
      num: "06",
      title: "Dales vida (Video)",
      icon: Film,
      chapter: "Paso 06",
      topic: "Producción audiovisual y movimiento en video vertical 9:16."
    },
    {
      num: "07",
      title: "Lanza las cuentas",
      icon: Zap,
      chapter: "Paso 07",
      topic: "Estructura profesional y lanzamiento de perfiles oficiales."
    },
    {
      num: "08",
      title: "Corona al ganador",
      icon: TrendingUp,
      chapter: "Paso 08",
      topic: "Métricas de validación y selección del personaje definitivo."
    },
    {
      num: "09",
      title: "Empieza a ganar dinero",
      icon: DollarSign,
      chapter: "Paso 09",
      topic: "Diseño de tu primera oferta digital y monetización."
    }
  ];

  const faqs = [
    {
      q: "¿Necesito experiencia previa con herramientas de IA o edición?",
      a: "No. La guía está redactada con instrucciones claras, paso por paso, pensada tanto para principiantes como para creadores que quieren un flujo de trabajo profesional y ordenado."
    },
    {
      q: "¿Necesito una computadora de gama alta o tarjeta gráfica potente?",
      a: "No. Todas las herramientas y modelos explicados se ejecutan en la nube a través del navegador. Puedes trabajar perfectamente desde cualquier computadora o portátil estándar."
    },
    {
      q: "¿Por qué el método recomienda 3 personajes en vez de solo 1?",
      a: "Porque enamorarse de una sola idea suele llevar a semanas de esfuerzo sin resultados. Al probar tres nichos en paralelo, dejas que sean las métricas y los seguidores quienes elijan al ganador antes de invertir más tiempo y recursos."
    },
    {
      q: "¿Cómo y cuándo recibo el acceso?",
      a: "Inmediatamente después de confirmar tu pago en Gumroad, serás redirigido a la página de entrega y recibirás un correo electrónico con tu acceso instantáneo y vitalicio a todo el material."
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Gumroad Overlay JS Script */}
      <Script 
        src="https://gumroad.com/js/gumroad.js" 
        strategy="lazyOnload" 
      />

      {/* TOP ANNOUNCEMENT BAR */}
      <aside aria-label="Aviso de oferta especial" className="bg-gradient-to-r from-amber-950/80 via-black to-amber-950/80 border-b border-[#D4AF37]/30 text-xs py-2.5 px-4 text-center sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px]">Oferta de Lanzamiento:</span>
          <span className="text-zinc-200">Acceso completo con descuento inmediato</span>
          <span className="line-through text-zinc-400">$37 USD</span>
          <span className="text-[#F3E5AB] font-bold text-sm px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40">
            $27 USD
          </span>
          <span className="text-zinc-400 text-[11px] hidden sm:inline">· Acceso digital vitalicio</span>
        </div>
      </aside>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-amber-600/20 via-yellow-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-0 right-10 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#D4AF37]/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Método Oficial · The Silent Studio</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Influencer IA: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">de cero a tu primera venta</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crea un personaje con inteligencia artificial, hazlo crecer y véndele a su audiencia un producto que de verdad usen.
              </p>

              {/* Proof Pill */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 pt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-zinc-200">5.0 Calificación</span>
                <span className="text-zinc-600">|</span>
                <span>Guía completa de 34 páginas</span>
              </div>

              {/* Hook Box */}
              <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-left space-y-2 backdrop-blur-sm">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Seguro ya viste esas cuentas: <strong className="text-white">un personaje que no existe, miles de seguidores y productos que se venden</strong> mientras su creador ni sale en cámara.
                </p>
                <p className="text-amber-200/90 text-sm font-semibold">
                  No es suerte, es un proceso. Y casi nadie lo explica completo.
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a 
                  href={GUMROAD_CHECKOUT_URL}
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Quiero crear mi Influencer IA</span>
                  <span className="bg-black/10 px-2 py-0.5 rounded text-sm">$27 USD</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a 
                  href="#los-9-pasos" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-700/60 rounded-xl transition-all"
                >
                  <span>Ver los 9 pasos</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Line */}
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Acceso digital instantáneo
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  Checkout 100% Seguro por Gumroad
                </span>
              </div>

            </div>

            {/* Right Showcase (Video & Cards) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
                {/* Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-yellow-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                
                {/* Card Container */}
                <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 p-3.5 shadow-2xl overflow-hidden">
                  
                  {/* Official Video Player */}
                  <div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black">
                    <video 
                      src="https://public-files.gumroad.com/tdouc875tl3eoeowzbjbfke06tbg" 
                      poster="https://public-files.gumroad.com/wu4gfvu0hjf964wkvn513k0v5iwd"
                      controls 
                      playsInline 
                      autoPlay 
                      muted 
                      loop
                      preload="metadata"
                      className="w-full h-full object-cover"
                      title="Demostración de Influencer IA generada en The Silent Studio"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>100% Generado con IA</span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-amber-200 text-[11px] font-bold px-2.5 py-1 rounded-full">
                      9:16 Vertical
                    </div>
                  </div>

                  {/* Mini Info */}
                  <div className="pt-3 px-1 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">Guía Oficial (Ebook + Método)</p>
                      <p className="text-zinc-400 text-[11px]">34 páginas de estrategia directa</p>
                    </div>
                    <div className="text-right">
                      <span className="line-through text-zinc-500 text-[11px] mr-1">$37</span>
                      <span className="text-amber-300 font-extrabold text-sm">$27 USD</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sample Photo Thumbnails */}
              <div className="mt-4 flex items-center justify-center gap-2.5 max-w-[340px]">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mr-1">Vistas:</span>
                <img 
                  src="https://public-files.gumroad.com/brtvr3ooqhtr22xzuzwazyuv0wze" 
                  alt="Consistencia de rostro 1" 
                  className="w-12 h-16 rounded-lg border border-zinc-800 object-cover hover:border-amber-400 transition-colors"
                />
                <img 
                  src="https://public-files.gumroad.com/771e2ojyu80f5ctm3om84pmvucq4" 
                  alt="Consistencia de rostro 2" 
                  className="w-12 h-16 rounded-lg border border-zinc-800 object-cover hover:border-amber-400 transition-colors"
                />
                <img 
                  src="https://public-files.gumroad.com/o2yys1t6qyt9enqflnpwejb0l2ub" 
                  alt="Consistencia de rostro 3" 
                  className="w-12 h-16 rounded-lg border border-zinc-800 object-cover hover:border-amber-400 transition-colors"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* COMPARISON: PROBLEM VS SOLUTION */}
      <section className="py-16 bg-zinc-950/60 border-y border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">Diagnóstico</h2>
            <p className="text-3xl sm:text-4xl font-black text-white">¿Por qué casi nadie logra monetizar un Influencer IA?</p>
            <p className="text-zinc-400 text-sm sm:text-base">La mayoría crea una imagen bonita, publica dos videos en TikTok y se rinde. Esto es lo que cambia cuando tienes un sistema real:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Bad Way */}
            <div className="rounded-2xl p-6 sm:p-8 bg-red-950/10 border border-red-900/30 space-y-4">
              <div className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <X className="w-4 h-4" />
                El Enfoque Común (Frustración)
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Probar prompts sueltos en Midjourney sin consistencia facial entre tomas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Enamorarse de un solo personaje antes de saber si al público le interesa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Voz robótica y desincronizada que delata la falta de producción.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Llegar a tener seguidores y no tener ni la menor idea de qué venderles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Abandonar a las tres semanas por falta de un flujo de trabajo replicable.</span>
                </li>
              </ul>
            </div>

            {/* The Silent Studio Way */}
            <div className="rounded-2xl p-6 sm:p-8 bg-amber-950/15 border border-[#D4AF37]/40 space-y-4 shadow-xl shadow-amber-950/20">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Check className="w-4 h-4" />
                El Método The Silent Studio (Resultados)
              </div>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Rostro fijado y consistente</strong> en imágenes, primeros planos y videos completos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Estrategia de 3 personajes:</strong> dejas que los datos del mercado elijan al ganador.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Voz humana y clonación:</strong> entonación natural adaptada a la personalidad.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Monetización desde la raíz:</strong> creas una oferta digital que la audiencia compra.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Sistema paso a paso:</strong> 9 etapas claras desde la idea hasta el checkout.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* THE 9 STEPS TIMELINE / TEMARIO DE LA GUÍA */}
      <section id="los-9-pasos" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">Índice del Método</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Temario de la Guía</h2>
            <p className="text-zinc-400 text-sm sm:text-base">Los 9 capítulos desarrollados paso a paso en 34 páginas, directo al grano y sin información de relleno.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-0.5 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                      {step.chapter}
                    </span>
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {step.topic}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Curriculum Index Note */}
          <div className="mt-8 p-4 rounded-xl bg-black/50 border border-zinc-800/80 text-center text-xs text-zinc-400 max-w-xl mx-auto flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Los prompts, configuraciones y fórmulas de ejecución de cada paso están explicados al detalle dentro de la guía.</span>
          </div>

        </div>
      </section>

      {/* GALLERY / VISUAL PROOF */}
      <section className="py-16 bg-zinc-950/80 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Muestras Reales</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Consistencia Fotográfica en Cada Toma</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">Sin variaciones bruscas en las facciones. El personaje mantiene su identidad en todo momento.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37] transition-all">
              <img 
                src="https://public-files.gumroad.com/brtvr3ooqhtr22xzuzwazyuv0wze" 
                alt="Muestra de Influencer IA 1" 
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent text-xs text-zinc-300">
                <span className="text-amber-300 font-bold">Look Editorial</span> · Iluminación natural
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37] transition-all">
              <img 
                src="https://public-files.gumroad.com/771e2ojyu80f5ctm3om84pmvucq4" 
                alt="Muestra de Influencer IA 2" 
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent text-xs text-zinc-300">
                <span className="text-amber-300 font-bold">Consistencia Facial</span> · Rasgos fijos
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden border border-zinc-800 hover:border-[#D4AF37] transition-all">
              <img 
                src="https://public-files.gumroad.com/o2yys1t6qyt9enqflnpwejb0l2ub" 
                alt="Muestra de Influencer IA 3" 
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent text-xs text-zinc-300">
                <span className="text-amber-300 font-bold">Acabado Comercial</span> · Calidad de estudio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY: VIVIENNE WOLSKI & EL WOLSKI CLUB */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 border-t border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Header Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-[#D4AF37]/40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl shadow-amber-950/20">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <img 
                src="/images/vivianne-wolski-hero.jpg" 
                alt="Vivienne Wolski" 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#D4AF37]/50 shrink-0 shadow-md"
              />
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                    Caso Real de Estudio · Influencer IA de Lujo
                  </span>
                  <a
                    href="https://www.instagram.com/vivianne_wolski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-pink-500/40 text-[10px] text-pink-300 font-mono hover:border-pink-400 transition"
                  >
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@vivianne_wolski</span>
                  </a>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Vivienne Wolski (82 años)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
                  Personaje de inteligencia artificial creado con nuestro método. Cuenta con universo de marca propio, presencia activa en Instagram (<strong className="text-pink-300">@vivianne_wolski</strong>), boutique curada de lujo y su círculo privado en audios: <strong className="text-amber-300">El Wolski Club</strong>.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full lg:w-auto">
              <a
                href="https://www.instagram.com/vivianne_wolski/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 text-white text-xs font-bold transition shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Ver Instagram</span>
              </a>
              <Link 
                href="/vivianne-wolski" 
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-500 transition"
              >
                Ver Tienda
              </Link>
              <Link 
                href="/domingo" 
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl border border-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-500 transition"
              >
                El Domingo
              </Link>
              <a 
                href="https://thesilentstudiomk.gumroad.com/l/ltfbhx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Wolski Club</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Videos 1, 2, 3 Showcase */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
                  PRODUCCIÓN AUDIOVISUAL 9:16 EN ORDEN DE CATÁLOGO
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Formatos 1, 2 y 3 de Vivienne Wolski
                </h4>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm">
                Videos verticales reales listos para pauta y redes, producidos con nuestro método.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* VIDEO 1 */}
              <div className="bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/60 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
                    <video
                      src="https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/comercial-bolso.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-black/80 backdrop-blur-xs text-amber-400 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
                        01 · UGC MODA
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm group-hover:text-amber-300 transition">
                      Comercial UGC · Moda & Bolsos
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Comercial para accesorios y moda con modelo e influencer IA, iluminación cinemática y textura de alta gama.
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800/70">
                  <a
                    href="https://www.instagram.com/vivianne_wolski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-pink-400 hover:text-pink-300 transition font-medium"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Ver en @vivianne_wolski</span>
                  </a>
                </div>
              </div>

              {/* VIDEO 2 */}
              <div className="bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/60 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
                    <video
                      src="https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/Entrevista.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-black/80 backdrop-blur-xs text-amber-400 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
                        02 · ENTREVISTA MODERNA
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm group-hover:text-amber-300 transition">
                      Formato Entrevista Dinámica
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Estética editorial contemporánea para responder preguntas clave, derrumbar objeciones y posicionar autoridad.
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800/70">
                  <a
                    href="https://www.instagram.com/vivianne_wolski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-pink-400 hover:text-pink-300 transition font-medium"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Ver en @vivianne_wolski</span>
                  </a>
                </div>
              </div>

              {/* VIDEO 3 */}
              <div className="bg-zinc-900/70 border border-zinc-800 hover:border-[#D4AF37]/60 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden border border-zinc-800 shadow-inner">
                    <video
                      src="https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/68de8fbe-675f-4463-958d-45f031a2d433.mp4"
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-black/80 backdrop-blur-xs text-amber-400 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
                        03 · HABLADO A CÁMARA
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm group-hover:text-amber-300 transition">
                      Hablado a Cámara de Alto Impacto
                    </h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Presencia magnética hablando directo al espectador, dicción fluida, sincronización labial y retención total.
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-zinc-800/70">
                  <a
                    href="https://www.instagram.com/vivianne_wolski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-pink-400 hover:text-pink-300 transition font-medium"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Ver en @vivianne_wolski</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom conversion strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  ¿Quieres producir estos mismos formatos para tu marca o crear tu propio Influencer IA?
                </p>
                <p className="text-[11px] text-zinc-400">
                  Videos individuales a $50 USD o paquetes de 10 y 20 videos listos para pauta y redes.
                </p>
              </div>
              <Link
                href="/oferta"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-400/30 text-xs font-bold transition flex items-center gap-1.5"
              >
                <span>Ver Servicios y Tarifas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-8">
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">¿Esta guía es para ti?</h2>
              <p className="text-zinc-400 text-sm">Diseñada específicamente para quienes buscan resultados medibles.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">1</div>
                <h3 className="font-bold text-white text-base">Sin mostrar tu cara</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">Quieres crear y vender contenido digital en redes sin tener que exponerte frente a la cámara.</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">2</div>
                <h3 className="font-bold text-white text-base">Fin a las pruebas sueltas</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">Ya has usado herramientas de IA, pero tus personajes nunca quedan iguales o no sabes cómo organizarlos.</p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">3</div>
                <h3 className="font-bold text-white text-base">Buscas un sistema real</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">No quieres otro tutorial superficial de 5 minutos, sino una estrategia probada que lleve a la monetización.</p>
              </div>
            </div>

            {/* Anti-hype pledge */}
            <div className="p-5 rounded-2xl bg-black/60 border border-zinc-800/80 text-center space-y-1">
              <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">Compromiso de Honestidad</p>
              <p className="text-sm text-zinc-300">
                <strong className="text-white">Lo que no te vamos a prometer:</strong> que te harás rico en una semana.<br className="hidden sm:inline" />
                Te prometemos un camino claro. La IA pone el rostro; la historia, el valor y el trabajo los pones tú.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 bg-zinc-950/70 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Contenido Incluido</span>
            <h2 className="text-3xl font-black text-white">¿Qué Recibes Exactamente?</h2>
          </div>

          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">La guía completa de los 9 pasos</h3>
                <p className="text-sm text-zinc-400">34 páginas diseñadas bajo la estética editorial The Silent Studio, directas al grano y sin relleno.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Ejemplos y criterios claros en cada etapa</h3>
                <p className="text-sm text-zinc-400">Prompts de referencia, estructuras de guiones, configuraciones de audio y criterios para coronar al personaje ganador.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Acceso digital multiplataforma inmediato</h3>
                <p className="text-sm text-zinc-400">Lectura cómoda desde tu teléfono, tablet o computadora, para implementar el método hoy mismo.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING & OFFER CALL TO ACTION */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black border-2 border-[#D4AF37]/60 p-8 sm:p-12 text-center space-y-6 shadow-2xl shadow-amber-950/30">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              🔥 PRECIO ESPECIAL DE LANZAMIENTO
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Comienza a Construir Tu Influencer IA
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto">
              El camino exacto para pasar de una idea a tu primer personaje consistente y tu primera venta en internet.
            </p>

            {/* Price Display */}
            <div className="py-4">
              <div className="text-zinc-500 text-sm font-semibold">
                PRECIO REGULAR: <span className="line-through">$37 USD</span>
              </div>
              <div className="text-4xl sm:text-6xl font-black text-white mt-1">
                <span className="text-amber-400">$27 USD</span>
              </div>
              <div className="text-xs text-amber-200/80 font-medium mt-1">
                Pago único · Acceso vitalicio · Sin mensualidades
              </div>
            </div>

            {/* Big Buy Button */}
            <div className="pt-2">
              <a 
                href={GUMROAD_CHECKOUT_URL}
                onClick={handleCtaClick}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>👉 Quiero crear mi Influencer IA</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            {/* Guarantee Details */}
            <div className="pt-6 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-2">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Entrega instantánea
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Procesamiento seguro Gumroad
                </span>
              </div>
              <p className="text-zinc-500 text-[11px] pt-2">
                Soporte directo antes o después de tu compra:{" "}
                <a href="mailto:daniel@studioboom.online" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                  daniel@studioboom.online
                </a>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-zinc-950/60 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Preguntas Frecuentes</span>
            <h2 className="text-3xl font-black text-white">Todo lo que Necesitas Saber</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-white text-base flex justify-between items-center select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-black py-12 text-zinc-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://public-files.gumroad.com/jb3d0095enmjsy0cpw9db5mmcdtm" 
              alt="Daniel StudioBoom" 
              className="w-8 h-8 rounded-full border border-zinc-700 object-cover"
            />
            <div>
              <p className="font-bold text-white">The Silent Studio</p>
              <p className="text-zinc-500 text-[11px]">Creators of the post-AI era</p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>© 2026 The Silent Studio. Todos los derechos reservados.</p>
            <p className="text-zinc-500 text-[11px]">
              Soporte:{" "}
              <a href="mailto:daniel@studioboom.online" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors">
                daniel@studioboom.online
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR FOR MOBILE */}
      <aside aria-label="Acceso rápido móvil" className="fixed bottom-0 inset-x-0 bg-black/95 border-t border-[#D4AF37]/40 p-3 sm:hidden z-40 backdrop-blur-lg flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase text-zinc-400 tracking-wider block">Lanzamiento</span>
          <span className="text-amber-300 font-extrabold text-base">$27 USD</span>
          <span className="line-through text-zinc-500 text-xs ml-1">$37</span>
        </div>
        <a 
          href={GUMROAD_CHECKOUT_URL}
          onClick={handleCtaClick}
          className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-lg active:scale-95"
        >
          Comprar ahora
        </a>
      </aside>

    </div>
  );
}
