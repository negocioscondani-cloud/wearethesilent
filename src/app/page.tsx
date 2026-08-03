'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  BookOpen, 
  Film, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="silent-guide-body min-h-[92vh] bg-[#0a0a0a] text-[#f9f7f2] font-body antialiased flex flex-col justify-center items-center px-5 relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto py-12 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center space-y-6 max-w-3xl mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-2 block animate-pulse">
            We Are The Silent
          </span>
          <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tight italic text-white">
            Domina la creación con IA. <br />
            <span className="not-italic font-bold text-gold">Crea anuncios, contenido y películas.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed serif italic">
            Somos una <strong>academia de formación en IA</strong> y un <strong>estudio de producción audiovisual digital</strong>. Aprende nuestro método universal de dirección en la comunidad por solo $9/mes o delega en nosotros la creación de comerciales premium fotorrealistas para tu marca.
          </p>
        </div>

        {/* Option Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* OPTION 1: LEARN (COMMUNITY) */}
          <div className="relative group overflow-hidden border border-white/10 hover:border-gold/30 rounded-sm bg-zinc-950/40 backdrop-blur-sm transition-all duration-500 shadow-2xl flex flex-col justify-between aspect-[4/5] p-8 md:p-10">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <Image 
                src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" 
                alt="Aprender IA" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5">
                  <BookOpen className="h-5 w-5 text-gold" />
                </div>
                <span className="inline-block bg-gold/10 text-gold text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm border border-gold/20">
                  Academia · $9/mes
                </span>
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-widest block">Camino 01</span>
              <h2 className="text-3xl font-serif italic text-white leading-tight">
                Aprender en la Comunidad
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Únete a la academia en Skool para acceder a guías detalladas, prompts con intención, hojas JSON de consistencia de personajes y feedback de directores de arte para construir tu portafolio.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <Button 
                asChild
                className="w-full bg-transparent hover:bg-gold border border-white/20 hover:border-gold text-[#f9f7f2] hover:text-black font-bold uppercase tracking-widest text-xs py-6 rounded-none transition-all duration-300 group/btn"
              >
                <Link href="/we-are-the-silent" className="flex items-center justify-center gap-2">
                  Quiero Aprender <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* OPTION 2: SERVICES (PRODUCTION) */}
          <div className="relative group overflow-hidden border border-white/10 hover:border-gold/30 rounded-sm bg-zinc-950/40 backdrop-blur-sm transition-all duration-500 shadow-2xl flex flex-col justify-between aspect-[4/5] p-8 md:p-10">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <Image 
                src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" 
                alt="Servicios de Video" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 border border-gold/30 rounded-full flex items-center justify-center bg-gold/5">
                  <Film className="h-5 w-5 text-gold" />
                </div>
                <span className="inline-block bg-gold/10 text-gold text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm border border-gold/20">
                  Estudio · A Medida
                </span>
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-widest block">Camino 02</span>
              <h2 className="text-3xl font-serif italic text-white leading-tight">
                Crear un Video para mi Marca
              </h2>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Delega la producción audiovisual en nuestro estudio. Creamos anuncios publicitarios, videos de producto de alta fidelidad y cortometrajes con acabado cinematográfico real.
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <Button 
                asChild
                className="w-full bg-gold hover:bg-white text-black font-bold uppercase tracking-widest text-xs py-6 rounded-none transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.25)] group/btn"
              >
                <Link href="/crear-video" className="flex items-center justify-center gap-2">
                  Quiero un Video <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
