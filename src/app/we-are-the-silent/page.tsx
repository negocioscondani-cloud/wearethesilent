'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  CheckCircle, 
  MessageCircle,
  Zap,
  Eye,
  Play,
  Scissors,
  Check,
  X,
  Lock,
  TrendingUp,
  HelpCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SKOOL_LINK = "https://www.skool.com/we-are-the-silent-ia-8224/about";

export default function WeAreTheSilentPage() {
  const methodModules = [
    {
      num: '01',
      title: 'Imágenes y Vídeos Publicitarios con IA',
      desc: 'Pase de una idea ordinaria a una pieza comercial de alta fidelidad. Aprende prompting con intención para crear anuncios y contenido impactante para marcas y productos en el mercado digital.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif',
      icon: <Sparkles className="h-5 w-5 text-gold" />
    },
    {
      num: '02',
      title: 'Consistencia Absoluta de Personajes',
      desc: 'Domina personajes consistentes y resuelve el mayor problema de la industria visual: el cambio de rostros entre escenas. Aprende a clonar tu propia identidad o avatares a través de código estructurado y hojas de personaje técnicas.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif',
      icon: <Zap className="h-5 w-5 text-gold" />
    },
    {
      num: '03',
      title: 'Guión, Cámara, Luz y Edición Cinematográfica',
      desc: 'Desarrolla tu criterio audiovisual controlando la iluminación cinemática y la coherencia del entorno. Domina la selección rigurosa de encuadres (planos de cámara) y la edición final para lograr que cada elemento pertenezca al mismo universo.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif',
      icon: <Eye className="h-5 w-5 text-gold" />
    },
    {
      num: '04',
      title: 'Ruta Clara desde Cero para tu Portafolio',
      desc: 'Construye proyectos reales y sólidos desde el primer día. Te guiamos paso a paso, sin importar tu nivel técnico anterior, para que aprendas a convertir esta habilidad en un servicio comercial altamente demandado.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif',
      icon: <Play className="h-5 w-5 text-gold" />
    },
    {
      num: '05',
      title: 'Retos Creativos y Producciones de Cine',
      desc: 'Produce piezas cinematográficas completas y participa en retos creativos comunitarios. Accede a constantes actualizaciones de contenido y nuevas metodologías para mantenerte a la vanguardia del sector.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif',
      icon: <Scissors className="h-5 w-5 text-gold" />
    }
  ];

  const benefits = [
    "Crea imágenes y vídeos con IA sin parecer artificiales",
    "Domina personajes consistentes en múltiples tomas",
    "Aprende dirección de cámara, iluminación y guión",
    "Sigue una ruta clara de aprendizaje paso a paso",
    "Diseña anuncios comerciales de alta fidelidad para marcas",
    "Produce cortometrajes y piezas cinematográficas",
    "Construye un portafolio sólido para vender servicios",
    "Desarrolla tu criterio artístico y dirección de arte",
    "Entrena tu ojo mediante dinámicas manuales de creatividad",
    "Recibe actualizaciones constantes de nuevas herramientas"
  ];

  const testimonials = [
    {
      name: "Andrés Méndez",
      role: "Creador de Contenido Faceless",
      quote: "Estaba cansado de ver tutoriales genéricos. En la comunidad aprendí a estructurar las hojas de personajes en formato JSON. Logré crear un avatar consistente para mi canal de YouTube y los tiempos de edición se redujeron a la mitad. El fotorrealismo es brutal."
    },
    {
      name: "Sofía Duarte",
      role: "Diseñadora y Directora de Arte",
      quote: "El mayor valor es el entrenamiento del criterio. La IA genera mil opciones, pero aquí te enseñan a filtrar y dirigir. He implementado las técnicas de fotografía de producto y mis clientes no creen que los renders son 100% creados digitalmente con IA."
    },
    {
      name: "Marcos Villanueva",
      role: "Fundador de Agencia de Marketing",
      quote: "Vender contenido hecho con IA requiere un estándar editorial alto. El método universal que se enseña aquí me permitió montar un servicio de comerciales dinámicos para marcas locales de alimentación. Un retorno de inversión instantáneo."
    }
  ];

  const faqs = [
    {
      q: "¿Necesito tener experiencia técnica o conocimientos de programación?",
      a: "No, en absoluto. La comunidad está estructurada para guiarte desde cero. El método se enfoca en el criterio visual y en cómo dar instrucciones claras a los asistentes de inteligencia artificial, sin importar tu experiencia previa."
    },
    {
      q: "¿Qué herramientas de IA aprenderemos a utilizar?",
      a: "El método es agnóstico a la tecnología. Aprenderás las bases conceptuales aplicables a cualquier modelo. Trabajamos principalmente con Flow, DeepSeek, ChatGPT, Claude, Magnific, Freepik (Nano Banana) e Higgsfield, aprovechando al máximo sus versiones de acceso gratuito o bajo costo."
    },
    {
      q: "¿Cómo funciona el precio de membresía fundador?",
      a: "Las primeras 100 personas que se unan mantendrán la tarifa de $9/mes de forma vitalicia mientras sigan activas dentro de la comunidad de Skool, incluso si el precio sube en el futuro para nuevos miembros."
    },
    {
      q: "¿Puedo cancelar mi suscripción en cualquier momento?",
      a: "Sí, puedes cancelar tu membresía cuando lo desees directamente desde tu panel de usuario de Skool sin compromisos de permanencia ni recargos adicionales."
    }
  ];

  return (
    <div className="silent-guide-body min-h-screen bg-[#0a0a0a] text-[#f9f7f2] font-body antialiased">
      
      {/* 1. HERO SECTION (ABOVE THE FOLD) */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-5 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0a0a0a]/90 to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-widest uppercase mb-4 animate-pulse">
            Academia & Comunidad Visual
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight italic text-white">
            🎬 De una idea a un anuncio, <br />
            <span className="not-italic font-bold text-gold">un vídeo o una película con IA.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed serif italic">
            Aprende la técnica. Desarrolla el criterio. Entrena tu creatividad. La comunidad definitiva para construir portafolios y servicios de alto valor comercial.
          </p>
          
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                Entrar a la Comunidad por $9/mes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT & MANIFESTO */}
      <section className="border-y border-white/5 bg-zinc-950 py-20">
        <div className="mx-auto w-full max-w-4xl px-5 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">El Enfoque</span>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 serif italic max-w-3xl mx-auto">
            "La Inteligencia Artificial es ejecución masiva, pero carece de intención. Este programa no enseña a usar software; entrena a Directores de Arte Digital. Aquí, la IA es tu equipo de producción, pero tú mantienes el control estricto de calidad."
          </p>
        </div>
      </section>

      {/* 3. PAIN POINTS / SI ESTÁS CANSADO DE... */}
      <section className="py-24 px-5 max-w-4xl mx-auto">
        <div className="bg-[#0e0e0e] border border-white/5 p-8 md:p-16 rounded-sm shadow-2xl">
          <h3 className="text-3xl md:text-4xl serif italic text-white mb-8 border-b border-white/10 pb-4 text-center">
            Esta comunidad es para ti si estás cansado de:
          </h3>
          <ul className="space-y-6 text-sm md:text-base text-gray-300">
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Ver tutoriales interminables en YouTube sin avanzar un solo paso real</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Crear imágenes plásticas y artificiales que gritan "hecho por IA"</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Lidiar con personajes inconsistentes cuyos rostros cambian en cada toma</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Comprar y saltar de herramienta en herramienta sin terminar ningún proyecto</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION & BENEFITS */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Propuesta de Valor</span>
            <h2 className="text-4xl md:text-5xl serif italic text-white">¿Qué obtendrás al unirte?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#0e0e0e] border border-white/5 p-6 rounded-sm flex items-start gap-4 hover:border-gold/30 transition-all duration-300">
                <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm font-light leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Module list with images */}
          <div className="space-y-24 border-t border-white/5 pt-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl serif italic text-white">Módulos de Dirección Audiovisual</h3>
            </div>
            
            {methodModules.map((step) => (
              <div 
                key={step.num} 
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center border-t border-white/5 pt-16"
              >
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto border border-white/10 overflow-hidden shadow-2xl group">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-black/85 border border-gold/30 text-gold text-[10px] font-bold tracking-widest px-3 py-1.5 uppercase">
                    Módulo {step.num}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5">
                      {step.icon}
                    </div>
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">Paso {step.num}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl serif italic text-white font-normal leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF (TESTIMONIALS) */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Prueba Social</span>
          <h2 className="text-4xl md:text-5xl serif italic text-white">Testimonios de Alumnos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0e0e0e] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
              <p className="text-sm text-gray-300 font-light leading-relaxed italic serif mb-6">
                "{t.quote}"
              </p>
              <div>
                <span className="text-white font-bold text-sm block">{t.name}</span>
                <span className="text-gold text-xs font-light">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-zinc-950/50 border-t border-white/5 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Respuestas</span>
            <h2 className="text-4xl md:text-5xl serif italic text-white">Preguntas Frecuentes</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`} 
                className="border border-white/5 bg-[#0e0e0e] px-6 rounded-sm"
              >
                <AccordionTrigger className="text-white hover:text-gold hover:no-underline font-serif text-lg py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-6 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="bg-[#0e0e0e] border-t border-white/5 py-24 px-5 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-widest uppercase mx-auto">
            <Lock className="h-3 w-3" /> Membresía con Garantía de Precio Fundador
          </div>
          
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">
            ⚡ Únete hoy por <span className="not-italic font-bold text-gold">$9/mes</span>
          </h2>
          
          <div className="space-y-4 max-w-xl mx-auto text-sm text-gray-300 font-light">
            <p className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-gold" />
              <span>Las primeras 100 personas mantienen su precio para siempre mientras sigan dentro</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span>Cancela cuando quieras de forma sencilla con un solo clic</span>
            </p>
          </div>

          <div className="pt-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={SKOOL_LINK} target="_blank" rel="noopener noreferrer">
                Acceder a la Comunidad & Comenzar Ahora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#050505] px-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
        &copy; 2026 WE ARE THE SILENT | TODOS LOS DERECHOS RESERVADOS
      </footer>

    </div>
  );
}
