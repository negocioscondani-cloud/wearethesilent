'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { ArrowLeft, Play, Image as ImageIcon, Video, ExternalLink } from 'lucide-react';

import productImg1 from './sample-product-1.png';
import productImg2 from './sample-product-2.png';
import portraitImg from './sample-portrait.png';

const TRANSLATIONS = {
  es: {
    title: "Galería Creativa",
    subtitle: "Una muestra seleccionada de nuestro criterio visual y producción con Inteligencia Artificial.",
    back: "Volver al inicio",
    filterAll: "Todos",
    filterVideos: "Videos",
    filterPhotos: "Fotografía de Producto",
    concept: "Concepto:",
    engine: "Tecnología:",
    ctaTitle: "¿Listo para crear tus anuncios?",
    ctaSub: "Solo trabajamos con 10 negocios por ciclo de producción.",
    ctaBtn: "Ver Oferta Comercial"
  },
  en: {
    title: "Creative Gallery",
    subtitle: "A curated showcase of our visual criteria and production using Artificial Intelligence.",
    back: "Back to home",
    filterAll: "All",
    filterVideos: "Videos",
    filterPhotos: "Product Photography",
    concept: "Concept:",
    engine: "Technology:",
    ctaTitle: "Ready to create your ads?",
    ctaSub: "We only work with 10 businesses per production cycle.",
    ctaBtn: "View Commercial Offer"
  }
};

const ITEMS = [
  {
    type: 'video',
    title: { es: 'UGC Anuncio (Super Pet)', en: 'UGC Ad (Super Pet)' },
    concept: { es: 'Avatar hiperrealista para recomendación orgánica informal.', en: 'Hyper-realistic avatar for organic informal recommendation.' },
    engine: 'Midjourney v6 + HeyGen + CapCut',
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Super-Pet.mp4',
    aspect: 'vertical'
  },
  {
    type: 'photo',
    title: { es: 'Fotografía Creativa de Producto - Lujo', en: 'Creative Product Photography - Luxury' },
    concept: { es: 'Composición de bodegón premium para marca de cosmética fina.', en: 'Premium still life composition for fine cosmetics brand.' },
    engine: 'Midjourney v6 + Photoshop Generative Fill',
    imgSrc: productImg1.src,
    aspect: 'square'
  },
  {
    type: 'video',
    title: { es: 'Podcast Clip (Studio Talk)', en: 'Podcast Clip (Studio Talk)' },
    concept: { es: 'Extracto conversacional automatizado con subtítulos dinámicos de alto impacto.', en: 'Automated conversational extract with high-impact dynamic subtitles.' },
    engine: 'ElevenLabs + Adobe Premiere Pro',
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/PODCAST-The-Silent-Studio.mp4',
    aspect: 'vertical'
  },
  {
    type: 'photo',
    title: { es: 'Fotografía de Producto - Botella', en: 'Product Photography - Bottle' },
    concept: { es: 'Iluminación de estudio dramática y reflejos líquidos realistas.', en: 'Dramatic studio lighting and realistic liquid reflections.' },
    engine: 'Midjourney v6 (Raw Mode)',
    imgSrc: productImg2.src,
    aspect: 'square'
  },
  {
    type: 'video',
    title: { es: 'Entrevista de Éxito (Café Naranjo)', en: 'Success Interview (Cafe Naranjo)' },
    concept: { es: 'Caso de éxito en formato de entrevista con narrativa y ganchos psicológicos.', en: 'Success case in interview format with narrative and psychological hooks.' },
    engine: 'Midjourney + Runway Gen-2 + Neutro Voice',
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cafe-naranjo.mp4',
    aspect: 'vertical'
  },
  {
    type: 'photo',
    title: { es: 'Retrato e Iluminación Cinematográfica', en: 'Cinematic Lighting & Portrait' },
    concept: { es: 'Dirección de personajes y colorización vintage cinematográfica.', en: 'Character direction and cinematic vintage color grading.' },
    engine: 'Midjourney v6 + Lightroom Classic',
    imgSrc: portraitImg.src,
    aspect: 'square'
  },
  {
    type: 'video',
    title: { es: 'Mini Serie Narrativa (Hueles Delicioso)', en: 'Narrative Mini Series (Hueles Delicioso)' },
    concept: { es: 'Micro-historia o secuencia de marca enfocada en enganchar a la audiencia.', en: 'Micro-story or brand sequence focused on hooking the audience.' },
    engine: 'Luma Dream Machine + ElevenLabs',
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cap-27-Hueles-Delicioso.mp4',
    aspect: 'vertical'
  },
  {
    type: 'video',
    title: { es: 'Anuncio UGC (Variante Colección)', en: 'UGC Ad (Collection Variant)' },
    concept: { es: 'Prueba creativa multi-ángulo para testeo A/B en redes sociales.', en: 'Multi-angle creative test for A/B testing on social networks.' },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion.mp4',
    engine: 'Midjourney + HeyGen + CapCut Pro',
    aspect: 'vertical'
  },
  {
    type: 'video',
    title: { es: 'Edición Horizontal (Transparente)', en: 'Horizontal Edit (Transparente)' },
    concept: { es: 'Formato cinematográfico horizontal adaptado para explicativos detallados.', en: 'Horizontal cinematic format adapted for detailed explainers.' },
    url: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cap-21-Transparente_202607172109.mp4',
    engine: 'Kling AI + Runway Gen-3',
    aspect: 'horizontal'
  }
];

export default function GaleriaPage() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;
  const langKey = language === 'es' ? 'es' : 'en';

  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');

  const filteredItems = ITEMS.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="bg-[#FBF6EC] text-[#1F2A2E] min-h-screen flex flex-col justify-between selection:bg-[#1F2A2E] selection:text-[#FBF6EC] font-sans antialiased">
      
      {/* Header */}
      <header className="border-b border-[rgba(31,42,46,0.08)] bg-[#FBF6EC] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="font-mono text-xs uppercase tracking-wider text-[#1F2A2E] hover:text-[#E8672A] transition flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>{text.back}</span>
          </Link>
          <div className="font-fraunces font-black text-lg tracking-tight">
            The Silent<span className="text-[#E8672A]">Studio</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow w-full">
        {/* Title */}
        <div className="max-w-2xl mb-12">
          <h1 className="font-fraunces font-bold text-4xl sm:text-5xl text-[#1F2A2E] mb-3">
            {text.title}
          </h1>
          <p className="text-[#4A5A5E] text-base leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-10 border-b border-[rgba(31,42,46,0.08)] pb-4 overflow-x-auto">
          <button 
            onClick={() => setFilter('all')}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition shrink-0 ${filter === 'all' ? 'bg-[#1F2A2E] border-[#1F2A2E] text-[#FBF6EC] font-bold' : 'bg-transparent border-[rgba(31,42,46,0.14)] text-[#1F2A2E] hover:border-[#1F2A2E]'}`}
          >
            {text.filterAll}
          </button>
          <button 
            onClick={() => setFilter('video')}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition shrink-0 ${filter === 'video' ? 'bg-[#1F2A2E] border-[#1F2A2E] text-[#FBF6EC] font-bold' : 'bg-transparent border-[rgba(31,42,46,0.14)] text-[#1F2A2E] hover:border-[#1F2A2E]'}`}
          >
            {text.filterVideos}
          </button>
          <button 
            onClick={() => setFilter('photo')}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border transition shrink-0 ${filter === 'photo' ? 'bg-[#1F2A2E] border-[#1F2A2E] text-[#FBF6EC] font-bold' : 'bg-transparent border-[rgba(31,42,46,0.14)] text-[#1F2A2E] hover:border-[#1F2A2E]'}`}
          >
            {text.filterPhotos}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[rgba(31,42,46,0.08)] rounded-sm p-4 shadow-sm flex flex-col justify-between"
            >
              {/* Media element */}
              <div className="bg-black/95 rounded overflow-hidden flex items-center justify-center relative mb-4">
                {item.type === 'video' ? (
                  <div className={`w-full relative ${item.aspect === 'horizontal' ? 'aspect-video' : 'aspect-[9/16] h-[340px]'}`}>
                    <video 
                      src={item.url} 
                      className="w-full h-full object-cover" 
                      controls
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-white font-mono text-[9px] px-2 py-0.5 rounded flex items-center gap-1 z-10">
                      <Video className="w-2.5 h-2.5 text-[#FF8C42]" /> VIDEO
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-square relative">
                    <img 
                      src={item.imgSrc} 
                      alt={item.title[langKey]} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-white font-mono text-[9px] px-2 py-0.5 rounded flex items-center gap-1 z-10">
                      <ImageIcon className="w-2.5 h-2.5 text-[#00B4D8]" /> FOTO
                    </div>
                  </div>
                )}
              </div>

              {/* Text Meta info */}
              <div className="space-y-2">
                <h3 className="font-fraunces font-bold text-lg text-[#1F2A2E] leading-snug">
                  {item.title[langKey]}
                </h3>
                <div className="text-xs text-[#4A5A5E]">
                  <span className="font-semibold text-[#1F2A2E]">{text.concept}</span> {item.concept[langKey]}
                </div>
                <div className="font-mono text-[10px] text-[#E8672A]">
                  <span className="font-bold text-[#1F2A2E]">{text.engine}</span> {item.engine}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA Banner */}
        <div className="mt-16 bg-[#1F2A2E] text-[#FBF6EC] p-8 text-center rounded border border-[#FF8C42]/20">
          <h3 className="font-fraunces font-bold text-2xl mb-2 text-white">{text.ctaTitle}</h3>
          <p className="text-gray-300 text-xs font-mono mb-6">{text.ctaSub}</p>
          <Link 
            href="/oferta" 
            className="inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#E8672A] text-[#1F2A2E] hover:text-white font-mono text-xs uppercase font-bold px-6 py-3.5 transition"
          >
            <span>{text.ctaBtn}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#1F2A2E] text-[#FBF6EC]/50 font-mono text-[10px] text-center border-t border-[rgba(31,42,46,0.14)] mt-12">
        The Silent Studio © Costa Rica. All rights reserved.
      </footer>

    </div>
  );
}
