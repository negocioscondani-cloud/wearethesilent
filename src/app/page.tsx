'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  Image as ImageIcon,
  MessageCircle,
  Dribbble,
  Play,
  Zap,
  Eye,
  Scissors
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const galleryImageIds = [
  'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 
  'gallery-6', 'gallery-7', 'gallery-8', 'gallery-9', 'gallery-10', 
  'gallery-11', 'gallery-12', 'gallery-13', 'gallery-14', 'gallery-15',
  'gallery-25', 'gallery-26', 'gallery-27', 'gallery-28', 'gallery-29',
  'gallery-30', 'gallery-31', 'gallery-32'
];

const allGalleryImages = galleryImageIds
  .map((id) => PlaceHolderImages.find((img) => img.id === id))
  .filter(Boolean) as (typeof PlaceHolderImages)[0][];

const WHATSAPP_LINK = "https://wa.me/50664194111?text=Hola!%20Me%20interesa%20acceder%20a%20la%20comunidad%20e%20iniciar%20el%20m%C3%A9todo%20de%20We%20Are%20The%20Silent.";

export default function Home() {
  const [galleryImages, setGalleryImages] = useState<(typeof PlaceHolderImages)[0][]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof PlaceHolderImages)[0] | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setGalleryImages(shuffleArray([...allGalleryImages]));
    }
  }, [isMounted]);

  const methodSteps = [
    {
      num: '01',
      title: 'Fotografía de Producto & Publicidad Premium',
      desc: 'Pase de una imagen ordinaria a una pieza comercial de alta fidelidad. Aprenda a extraer conceptos estéticos de Pinterest, combinarlos mediante asistentes de lenguaje y procesar prompts avanzados utilizando modelos de alto rendimiento para posicionar marcas y productos en el mercado digital.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif',
      icon: <ImageIcon className="h-5 w-5 text-gold" />
    },
    {
      num: '02',
      title: 'Consistencia de Personajes (El Protocolo JSON)',
      desc: 'Resuelva el mayor problema de la industria: el cambio de rostros entre escenas. Aprenda a estructurar Character Sheets técnicas (vistas frontales, laterales y expresiones) y a clonar su propia identidad o avatares a través de código estructurado para mantener un control absoluto del actor digital.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif',
      icon: <Zap className="h-5 w-5 text-gold" />
    },
    {
      num: '03',
      title: 'Escenarios, Props y Planos de Cámara',
      desc: 'Domine la iluminación cinemática (natural, estudio o neón) y la coherencia del entorno. Defina la narrativa visual mediante la selección rigurosa de encuadres: desde primeros planos y puntos de vista (POV) hasta tomas aéreas y grandes angulares, asegurando que cada elemento esté en el mismo universo de tiempo y espacio.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif',
      icon: <Eye className="h-5 w-5 text-gold" />
    },
    {
      num: '04',
      title: 'Ingeniería de Guiones & Storyboarding',
      desc: 'Utilice extensiones avanzadas para analizar contenidos de alto impacto en su nicho y estructurar guiones magnéticos (Hook, Intro, Desarrollo, CTA) o narrativas clásicas de cortometraje. Aprenda a fragmentar secuencias complejas en guiones gráficos coherentes para animar sin cometer errores técnicos.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif',
      icon: <Play className="h-5 w-5 text-gold" />
    },
    {
      num: '05',
      title: 'Dirección de Animación, Audio y Edición Final',
      desc: 'Domine las instrucciones de movimiento de un punto A a un punto B, controle los estados emocionales del personaje en pantalla y estructure subtítulos animados de nivel profesional. Finalmente, descargue el material y ensamble el rompecabezas en su software de edición eliminando deformaciones y aplicando bandas sonoras con criterio cinematográfico.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif',
      icon: <Scissors className="h-5 w-5 text-gold" />
    }
  ];

  return (
    <div className="silent-guide-body min-h-screen bg-[#0a0a0a] text-[#f9f7f2] font-body antialiased">
      
      {/* BLOQUE 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-5 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0a0a0a]/90 to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl space-y-6 pt-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4 block animate-pulse">
            Ecosistema de Creatividad Audiovisual
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight italic text-white">
            Domina el arte de <br />
            <span className="not-italic font-bold text-gold">crear contenido visual con IA.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed serif italic">
            Transforma esa destreza en piezas publicitarias, videos para redes o producciones de cine, y empieza a monetizar tu visión creativa. Aprende el método universal para coordinar asistentes de inteligencia artificial, maquetar secuencias consistentes y editar material premium con el criterio de un director y la estructura de una agencia.
          </p>
          
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Acceder a la Comunidad e Iniciar el Método
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: EL MANIFIESTO CONCEPTUAL */}
      <section id="manifiesto" className="border-y border-white/5 bg-zinc-950 py-24 md:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 text-center">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">El Manifiesto</span>
          <div className="max-w-3xl mx-auto relative px-8">
            <span className="absolute top-0 left-0 text-7xl text-gold/10 font-serif leading-none">“</span>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 serif italic">
              La Inteligencia Artificial es ejecución masiva, pero carece de intención. El mercado está inundado de imágenes aleatorias y videos sin alma porque la mayoría de las personas usan las herramientas como ejecutores sueltos. Este programa no enseña a usar software; entrena a <strong>Directores de Arte Digital</strong>. Aquí, la IA es el equipo de producción, pero usted es el control de calidad.
            </p>
            <span className="absolute bottom-0 right-0 text-7xl text-gold/10 font-serif leading-none align-bottom">”</span>
          </div>
        </div>
      </section>

      {/* BLOQUE 3: EL MÉTODO UNIVERSAL */}
      <section id="metodo" className="py-24 md:py-32 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">El Núcleo Técnico</span>
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">El Método Universal</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            El sistema está diseñado para ser agnóstico. No importa si usas Flow, DeepSeek, ChatGPT, Gemini, Claude, Magnific o Freepik; la lógica de dirección es exactamente la misma.
          </p>
        </div>

        <div className="space-y-28">
          {methodSteps.map((step) => (
            <div 
              key={step.num} 
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center border-t border-white/5 pt-16"
            >
              {/* Image side */}
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

              {/* Text side */}
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
      </section>

      {/* BLOQUE 4: GIMNASIO CREATIVO (El Músculo Humano) */}
      <section id="gimnasio" className="bg-zinc-950 border-y border-white/5 py-24 md:py-32 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Entrenamiento Continuo</span>
            <h2 className="text-4xl md:text-5xl serif italic text-white">Gimnasio Creativo</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Para que las herramientas ejecuten con maestría, el criterio del director debe estar entrenado. El programa incluye un set de dinámicas diarias para potenciar la agilidad mental y la narrativa:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0e0e0e] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-4">Dinámica 01</span>
                <h4 className="text-lg font-serif italic text-white mb-3">Bitácora de narrativa cotidiana</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Grabaciones de estructura rápida para soltar el lenguaje. Utiliza tu cotidianidad para construir arcos de retención sin necesidad de grandes recursos.
                </p>
              </div>
            </div>

            <div className="bg-[#0e0e0e] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-4">Dinámica 02</span>
                <h4 className="text-lg font-serif italic text-white mb-3">Diseño conceptual trinitario</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Ejercicios de tres palabras al azar (ej: castillo, princesa, dragón) traducidas a fotografía publicitaria o editorial épica a través de la IA.
                </p>
              </div>
            </div>

            <div className="bg-[#0e0e0e] border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-4">Dinámica 03</span>
                <h4 className="text-lg font-serif italic text-white mb-3">Filtros de embudo técnico</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  Generación masiva de imágenes (10 variaciones iniciales) descartando de manera selectiva (reduciendo a 5, luego a 3) hasta quedarte únicamente con la pieza ganadora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">Portfolio Visual</span>
            <h2 className="text-4xl md:text-5xl serif italic text-white">Resultados Forjados en el Silencio</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
              Una muestra del nivel de consistencia, textura y estética editorial que la IA puede lograr bajo nuestra dirección de arte.
            </p>
          </div>
          
          <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {(isMounted && galleryImages.length > 0 ? galleryImages : []).map((image) => (
                  <CarouselItem key={image.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <DialogTrigger asChild>
                      <button className="w-full h-full text-left" onClick={() => setSelectedImage(image)}>
                        <figure className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/5 hover:border-gold/30 transition-all duration-300">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        </figure>
                      </button>
                    </DialogTrigger>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            <DialogContent className="p-0 border-0 max-w-4xl bg-transparent">
              <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>Imagen Ampliada</DialogTitle>
                  <DialogDescription>
                    {selectedImage?.description || 'Vista ampliada de la galería.'}
                  </DialogDescription>
                </VisuallyHidden>
              </DialogHeader>
              {selectedImage && (
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  width={1200}
                  height={1600}
                  className="rounded-sm object-contain w-auto h-auto max-w-[90vw] max-h-[90vh] mx-auto"
                />
              )}
              <DialogClose className="absolute top-2 right-2 rounded-full bg-background/50 p-1 text-foreground transition-opacity hover:opacity-100">
                <span className="text-xl">&times;</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* BLOQUE 5: EL CIERRE (Llamado a la Acción Elegante) */}
      <section id="cierre" className="bg-[#0e0e0e] border-t border-white/5 py-24 md:py-32 px-5 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Sparkles className="mx-auto text-gold h-10 w-10 animate-pulse" />
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">
            El futuro audiovisual pertenece <br />
            <span className="not-italic font-bold text-gold">a quienes saben dirigir.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base font-light leading-relaxed serif italic">
            Acceda a la comunidad, comparta su nicho de mercado y empiece a maquetar proyectos que no solo destaquen visualmente, sino que generen un retorno real con su marca o servicio.
          </p>
          <div className="pt-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Unirse a We Are The Silent
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
