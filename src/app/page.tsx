'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
  AlertCircle
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

const COMMUNITY_LINK = "https://www.skool.com/we-are-the-silent-ia-8224/about";

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

  const whatsInsideList = [
    "Crea imágenes y vídeos con IA",
    "Domina personajes consistentes",
    "Aprende guión, cámara, luz y edición",
    "Sigue una ruta clara desde cero",
    "Crea anuncios y contenido para marcas",
    "Produce piezas cinematográficas",
    "Construye proyectos para tu portafolio",
    "Aprende prompting con intención",
    "Desarrolla tu criterio audiovisual",
    "Entrena tu creatividad con métodos manuales",
    "Aprende a convertir esta habilidad en un servicio"
  ];

  return (
    <div className="silent-guide-body min-h-screen bg-[#0a0a0a] text-[#f9f7f2] font-body antialiased">
      
      {/* BLOQUE 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-5 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0a0a0a]/90 to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-widest uppercase mb-4 animate-pulse">
            <AlertCircle className="h-3 w-3" /> Precio fundador: solo para las primeras 100 personas
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight italic text-white">
            🎬 De una idea a un anuncio, <br />
            <span className="not-italic font-bold text-gold">un vídeo o una película con IA.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed serif italic">
            🧠 Aprende la técnica. Desarrolla el criterio. Entrena tu creatividad. <br />
            🚀 Crea proyectos que puedas convertir en portafolio y servicios.
          </p>
          
          <div className="bg-black/40 border border-gold/20 p-4 rounded-sm max-w-md mx-auto text-xs text-gray-400">
            ‼️ Después de las 100 primeras plazas, el precio sube para nuevos miembros.
          </div>
          
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Entra hoy por $9/mes (Precio Fundador)
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

      {/* PROBLEMAS NARRATIVOS: Si estás cansado de... */}
      <section className="py-24 md:py-32 px-5 max-w-4xl mx-auto border-b border-white/5">
        <div className="bg-[#0e0e0e] border border-white/5 p-8 md:p-16 rounded-sm shadow-xl">
          <h3 className="text-3xl md:text-4xl serif italic text-white mb-8 border-b border-white/10 pb-4 text-center">
            Si estás cansado de:
          </h3>
          <ul className="space-y-6 text-sm md:text-base text-gray-300">
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Ver tutoriales sin avanzar un solo paso real</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Crear imágenes genéricas que parecen falsas o plásticas</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Tener personajes inconsistentes que cambian de rostro entre escenas</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Probar docenas de herramientas sin llegar a terminar ningún proyecto</span>
            </li>
            <li className="flex items-start gap-4">
              <X className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
              <span>Depender ciegamente de prompts copiados sin tener criterio propio</span>
            </li>
          </ul>
          <div className="mt-12 text-center">
            <p className="text-gold font-bold text-lg uppercase tracking-wider animate-pulse">
              Esta comunidad es para ti.
            </p>
          </div>
        </div>
      </section>

      {/* ¿QUÉ HAY DENTRO? */}
      <section className="py-24 md:py-32 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] block mb-2">El Ecosistema</span>
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">¿Qué hay dentro? 🚀</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Perfecto si empiezas desde cero o ya eres creador. No necesitas experiencia técnica previa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {whatsInsideList.map((item, idx) => (
            <div key={idx} className="bg-[#0e0e0e] border border-white/5 p-6 rounded-sm flex items-start gap-4 hover:border-gold/30 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span className="text-gray-200 text-sm font-light leading-relaxed">{item}</span>
            </div>
          ))}
          
          {/* Bonuses */}
          <div className="bg-[#0e0e0e] border border-gold/20 p-6 rounded-sm flex items-start gap-4 hover:border-gold/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <span className="text-xl shrink-0">🎁</span>
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-1">Bono 01</span>
              <span className="text-gray-200 text-sm font-semibold">Retos creativos constantes</span>
            </div>
          </div>
          
          <div className="bg-[#0e0e0e] border border-gold/20 p-6 rounded-sm flex items-start gap-4 hover:border-gold/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <span className="text-xl shrink-0">🔥</span>
            <div>
              <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-1">Bono 02</span>
              <span className="text-gray-200 text-sm font-semibold">Nuevos contenidos y actualizaciones</span>
            </div>
          </div>
        </div>

        {/* The visual layout showing the images (as requested by user) */}
        <div className="space-y-28 border-t border-white/5 pt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl serif italic text-white">Línea de Aprendizaje y Dirección Visual</h3>
          </div>
          
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

      {/* PORTFOLIO GALLERY */}
      <section id="gallery" className="py-24 md:py-32 px-5 border-t border-white/5">
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

      {/* BLOQUE 5: EL CIERRE (Llamado a la Acción Elegante + Precio) */}
      <section id="cierre" className="bg-[#0e0e0e] border-t border-white/5 py-24 md:py-32 px-5 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold tracking-widest uppercase mx-auto">
            <Lock className="h-3 w-3" /> Garantía de Precio Fundador de por vida
          </div>
          
          <h2 className="text-4xl md:text-6xl serif italic text-white font-light">
            ⚡ Entra hoy por <span className="not-italic font-bold text-gold">$9/mes</span>
          </h2>
          
          <div className="space-y-4 max-w-xl mx-auto text-sm text-gray-300 font-light">
            <p className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-gold" />
              <span>Las primeras 100 personas mantienen el precio fundador mientras sigan dentro</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span>Después de las 100 primeras plazas, el precio sube para nuevos miembros</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-gold" />
              <span>Cancela cuando quieras, sin contratos ni permanencias</span>
            </p>
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed serif italic pt-4">
            El futuro audiovisual pertenece a quienes saben dirigir. Accede hoy y empieza a maquetar proyectos que no solo destaquen visualmente, sino que generen un retorno real con tu marca o servicio.
          </p>
          
          <div className="pt-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black py-7 px-10 rounded-sm text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-white/20"
            >
              <a href={COMMUNITY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> Unirse a We Are The Silent por $9/mes
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
