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
  CameraOff,
  Clock,
  Shirt,
  DollarSign,
  TrendingUp,
  Check,
  Lock
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WHATSAPP_LINK = "https://wa.me/50664194111?text=Hola!%20Me%20interesa%20contratar%20el%20servicio%20de%20creaci%C3%B3n%20de%20video%20para%20mi%20marca.";

export default function CrearVideoPage() {
  const portfolioShowcase = [
    {
      title: 'Comercial CGI de Botella Premium',
      desc: 'Integración fidedigna de producto con fondo y efectos de fluidos avanzados.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif'
    },
    {
      title: 'Campaña de Cosmética de Hiperfidelidad',
      desc: 'Textura de producto limpia, sombras suaves e iluminación cenital de estudio de moda.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29271-scaled.avif'
    },
    {
      title: 'Producción de Alta Relojería en Arri Alexa',
      desc: 'Simulación digital de metales, cristales y reflejos macro con calidad cinematográfica.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-masterpiece-fidelity-phase-one-__45394.avif'
    },
    {
      title: 'Comercial Narrativo con Actor Digital',
      desc: 'Consistencia de marca absoluta utilizando personajes estables en múltiples escenas.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif'
    }
  ];

  const benefits = [
    {
      icon: <CameraOff className="h-6 w-6 text-gold" />,
      title: "Logística Física Cero",
      desc: "Olvídate de alquilar estudios fotográficos, contratar modelos, iluminación o fotógrafos. Reducimos la fricción física al 100% mediante entornos digitales de alta fidelidad."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold" />,
      title: "Estética Editorial Premium",
      desc: "Tu producto o servicio envuelto bajo los códigos estéticos de marcas de alta costura y de lujo. Controlamos cada poro, reflejo y sombra para lograr un impacto visual inmediato."
    },
    {
      icon: <Zap className="h-6 w-6 text-gold" />,
      title: "Consistencia de Marca Absoluta",
      desc: "Nuestros algoritmos integran tu logotipo, etiquetas y formas corporativas de forma fidedigna. Garantizamos que el producto en el video sea reconocible y respete tu identidad."
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      title: "Velocidad de Entrega Excepcional",
      desc: "Mientras que una producción tradicional toma de 3 a 6 semanas, nosotros entregamos comerciales cinematográficos listos en días, permitiendo iterar campañas ágilmente."
    }
  ];

  const testimonials = [
    {
      name: "Valeria Santillán",
      role: "Directora de eCommerce - Oura Perfumes",
      quote: "Estábamos escépticos sobre el uso de IA para un producto físico, pero el resultado nos dejó sin palabras. Integraron nuestra botella a la perfección en un comercial de agua en movimiento. La tasa de conversión de nuestros anuncios subió un 35% y nos costó una fracción de una sesión tradicional."
    },
    {
      name: "Ignacio Vega",
      role: "Fundador - Nova Chronos",
      quote: "Para relojes de alta gama, el detalle macro es clave. El equipo logró simular los acabados metálicos y el movimiento de las manecillas con una fidelidad que solo se consigue en producciones de seis cifras. Ya no contratamos sets físicos para nuestros lanzamientos."
    }
  ];

  const faqs = [
    {
      q: "¿Cómo garantizan que mi producto real se vea idéntico en el video?",
      a: "Utilizamos el protocolo 'Visual Heist' que extrae la geometría, colores e identidad de tu producto real a partir de fotos de referencia de alta resolución que nos proporcionas. Luego, la IA integra y proyecta el logo, etiquetas y envase sin distorsionarlos."
    },
    {
      q: "¿Cuáles son los tiempos de entrega de un comercial terminado?",
      a: "El plazo de entrega habitual oscila entre 5 y 10 días laborables, dependiendo de la complejidad narrativa de la campaña y del número de escenas requeridas."
    },
    {
      q: "¿Qué formatos y resoluciones de video entregan?",
      a: "Entregamos archivos de video en resolución Full HD (1080p) o superior, adaptados en formato vertical (9:16) ideal para Reels, TikToks y Stories, o formato horizontal (16:9) para campañas web, YouTube y televisión."
    },
    {
      q: "¿Cómo se gestiona el proceso de revisiones y cambios?",
      a: "Cada proyecto de producción incluye dos rondas de revisión. Evaluamos la narrativa sobre el guión antes de generar las animaciones, y luego ajustamos detalles de color, música y transiciones en la fase final de edición."
    }
  ];

  return (
    <div className="silent-guide-body min-h-screen bg-[#0a0a0a] text-[#f9f7f2] font-body antialiased">
      
      {/* 1. HERO SECTION (ABOVE THE FOLD) */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-5 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0a0a0a]/90 to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-widest uppercase mb-4 animate-pulse">
            Estudio de Producción & Dirección de Cine Digital
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight italic text-white">
            🎬 Transformamos tu producto <br />
            <span className="not-italic font-bold text-gold">en un comercial de cine con IA.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed serif italic">
            Producción de video de alto impacto para marcas y agencias. Sin costes de logística física, con consistencia absoluta y acabado editorial de alta gama.
          </p>
          
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Solicitar Cotización de Video
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT & MANIFESTO */}
      <section className="border-y border-white/5 bg-zinc-950 py-20">
        <div className="mx-auto w-full max-w-4xl px-5 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">El Estándar</span>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 serif italic max-w-3xl mx-auto">
            "No creamos imágenes aleatorias que parecen plásticas. Diseñamos comerciales con criterio estético de agencia tradicional, utilizando la inteligencia artificial de última generación como nuestro set de producción ilimitado."
          </p>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION & BENEFITS */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Beneficios</span>
          <h2 className="text-4xl md:text-5xl serif italic text-white">¿Por qué producir con nosotros?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-[#0e0e0e] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col gap-4">
              <div className="h-12 w-12 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5 shrink-0">
                {b.icon}
              </div>
              <h3 className="text-xl font-serif italic text-white">{b.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISUAL ELEMENTS / PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Portafolio</span>
            <h2 className="text-4xl md:text-5xl serif italic text-white">Proyectos Realizados</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioShowcase.map((p, idx) => (
              <div key={idx} className="group overflow-hidden border border-white/10 rounded-sm bg-zinc-950 flex flex-col">
                <div className="relative aspect-[3/2] w-full overflow-hidden">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="text-lg font-serif italic text-white">{p.title}</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF (TESTIMONIALS) */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Resultados</span>
          <h2 className="text-4xl md:text-5xl serif italic text-white">Casos de Éxito</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <Lock className="h-3 w-3" /> Agenda de Producción Abierta
          </div>
          
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">
            ¿Listo para llevar tu marca <br />
            <span className="not-italic font-bold text-gold">al nivel cinematográfico?</span>
          </h2>
          
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed serif italic pt-4">
            Haz clic abajo para chatear con nosotros por WhatsApp. Cuéntanos sobre tu producto y te enviaremos una propuesta visual adaptada a tu nicho en menos de 24 horas.
          </p>
          
          <div className="pt-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp & Cotizar
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
