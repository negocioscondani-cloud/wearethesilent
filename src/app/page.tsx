'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';
import { Check, X, Sparkles, ChevronRight } from 'lucide-react';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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


export default function Home() {
  const { t } = useTranslation();
  const [galleryImages, setGalleryImages] = useState<(typeof PlaceHolderImages)[0][]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<(typeof PlaceHolderImages)[0] | null>(null);

  const bundleFeatures = t('suiteOffer.bundle.features') as string[];
  const paypalHtml = `<div><style>.pp-JZR4QNRMLSQ3N{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style> <form action="https://www.paypal.com/ncp/payment/JZR4QNRMLSQ3N" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;"> <input class="pp-JZR4QNRMLSQ3N" type="submit" value="Comprar ahora" /> <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" /> <section style="font-size: 0.75rem;"> Con la tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section> </form> </div>`

  const tools = [
    {
      key: 'ugc-society',
      href: '/the-ugc-society',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif',
        alt: 'The UGC Society',
        hint: 'modern office',
      },
    },
    {
      key: 'luxe-prompt-studio',
      href: '/luxe-prompt-studio',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif',
        alt: 'Luxe Prompt Studio',
        hint: 'fabric texture',
      },
    },
    {
      key: 'oracle-luxe-agency',
      href: '/the-oracle-luxe-agency',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif',
        alt: 'The Oracle Luxe Agency',
        hint: 'luxury studio',
      },
    },
    {
      key: 'neuro-scoring',
      href: '/neuro-scoring',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif',
        alt: 'Neuro Scoring GPT',
        hint: 'neuroscience brain',
      },
    },
    {
      key: 'alpha-content',
      href: '/alpha-content',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif',
        alt: 'Alpha Content GPT',
        hint: 'calm man nature',
      },
    },
    {
      key: 'cine-ai-director',
      href: '/cine-ai-visual-director',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif',
        alt: 'CineAI Visual Director GPT',
        hint: 'cinema director',
      },
    },
  ];


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setGalleryImages(shuffleArray([...allGalleryImages]));
    }
  }, [isMounted]);
  
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Section 1: Hero */}
      <section
        aria-label="Hero"
        className="relative flex h-[80vh] items-center justify-center bg-background text-center md:h-[90vh]"
      >
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5">
          <h1 className="font-headline text-4xl leading-tight md:text-6xl animate-in fade-in-0 duration-1000">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl animate-in fade-in-0 duration-1000 delay-200">
            {t('home.hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in-0 duration-1000 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground uppercase tracking-wider transition-all duration-300 hover:bg-primary/90"
            >
              <Link href="/#studio">{t('home.hero.cta')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/50 text-gold uppercase tracking-wider transition-all duration-300 hover:bg-gold/10 hover:text-gold"
            >
              <Link href="/#guide-exclusive-offer">The Guide ($8)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: The Manifesto */}
      <section
        id="manifesto"
        className="border-t border-border py-24 md:py-36"
      >
        <div className="mx-auto w-full max-w-3xl px-5 text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            {t('home.manifesto.title')}
          </h2>
          <div className="mt-6 space-y-4 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            <p>{t('home.manifesto.line1')}</p>
            <p>{t('home.manifesto.line2')}</p>
            <p className="font-semibold text-foreground">{t('home.manifesto.line3')}</p>
            <p className="font-semibold text-foreground">{t('home.manifesto.line4')}</p>
            <p>{t('home.manifesto.line5')}</p>
            <p className="font-semibold text-foreground">{t('home.manifesto.line6')}</p>
          </div>
        </div>
      </section>

      {/* Section 2.5: The Guide Offer */}
      <section id="guide-exclusive-offer" className="bg-zinc-900 border-y border-gold/10 py-24">
        <div className="container mx-auto max-w-4xl px-5 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <Sparkles size={14} /> Oferta de Lanzamiento
            </div>
            <h2 className="text-4xl md:text-6xl font-headline italic text-white mb-6">The Silent Studio Guide</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Accede al protocolo de 9 módulos para dominar la IA generativa y elevar tu marca a un estándar de lujo editorial.
            </p>
            
            <div className="bg-black/40 border border-gold/20 p-8 md:p-12 rounded-3xl max-w-2xl mx-auto shadow-2xl text-left">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-8">
                    <div>
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Acceso Completo</p>
                        <h3 className="text-2xl text-white font-bold">Protocolo + Bonos</h3>
                    </div>
                    <div className="text-right">
                        <span className="text-gray-500 line-through text-sm block">$97</span>
                        <span className="text-5xl font-black text-gold">$8</span>
                    </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full mb-10 space-y-2">
                  <AccordionItem value="modules" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-gold hover:no-underline font-bold text-sm uppercase tracking-widest">
                      Los 9 Módulos de Ejecución
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 space-y-2 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M1: Prospección Quirúrgica</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M2: Generación de Imágenes</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M3: Generación de Video</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M4: Neuro-Scripting</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M5: Embajador Digital (Avatar)</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M6: La Agencia IA</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M7: Edición Premium</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M8: Publicación y Métricas</div>
                        <div className="flex items-center gap-2"><Check className="h-3 w-3 text-gold" /> M9: Plan Sprint 14 Días</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="bonuses" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-gold hover:no-underline font-bold text-sm uppercase tracking-widest">
                      Bonos Exclusivos Incluidos
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 space-y-3 pt-4">
                      <ul className="space-y-3 text-xs">
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-gold shrink-0" />
                          <div><strong>4 Gemas de IA Especializadas:</strong> Tus departamentos de estrategia, visual, guiones y marketing.</div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-gold shrink-0" />
                          <div><strong>Biblioteca de Estilos:</strong> Códigos visuales listos para aplicar a cualquier nicho.</div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-gold shrink-0" />
                          <div><strong>Guía de Movimientos:</strong> Domina el lenguaje del cine en tus videos IA.</div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-gold shrink-0" />
                          <div><strong>100 Ganchos y 10 Estructuras:</strong> Fórmulas probadas para viralidad y ventas.</div>
                        </li>
                        <li className="flex items-start gap-3">
                          <Sparkles className="h-4 w-4 text-gold shrink-0" />
                          <div><strong>20 Nichos Rentables:</strong> Dónde aplicar tus nuevas habilidades para maximizar el ROI.</div>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Button asChild size="lg" className="w-full bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all py-7 text-lg">
                    <a href="https://shop.beacons.ai/danicalderon.tv/4579cb4d-51a5-4bc6-bb79-ffa3348f6afc" target="_blank" rel="noopener noreferrer">
                        ADQUIRIR LA GUÍA AHORA
                    </a>
                </Button>
                <div className="mt-6 flex items-center justify-between text-[10px] text-gray-500 italic">
                  <p>Acceso Ilimitado y Actualizaciones</p>
                  <p>Oferta por tiempo limitado</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 3: The Silent Studio */}
       <section id="studio" className="border-t border-border py-24 md:py-36">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
            <header className="text-center mb-16">
            <h2 className="text-4xl font-headline md:text-5xl mb-4">
                {t('studio.title')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('studio.subtitle')}
            </p>
            </header>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {tools.map((tool) => (
                <div
                key={tool.key}
                className="flex flex-col text-center"
                >
                <figure className="relative aspect-[3/4] w-full overflow-hidden border">
                    <Image
                    src={tool.image.src}
                    alt={tool.image.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={tool.image.hint}
                    />
                </figure>
                <div className="border-t border-border pt-6 mt-6 flex-grow flex flex-col">
                    <span className="font-headline text-2xl text-muted-foreground">
                    {t(`studio.tools.${tool.key}.number`)}
                    </span>
                    <h3 className="mt-4 font-headline text-2xl md:text-3xl">
                    {t(`studio.tools.${tool.key}.title`)}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-grow">
                    {t(`studio.tools.${tool.key}.description`)}
                    </p>
                    <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                        <Link href={tool.href}>
                        {t('studio.discover')}
                        </Link>
                    </Button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Section 4: Visual Gallery */}
      <section id="gallery" className="border-t border-border py-24 md:py-36">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-4xl md:text-5xl">
                {t('home.gallery.title')}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('home.gallery.subtitle')}
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
                  {(isMounted && galleryImages.length > 0 ? galleryImages : []).map((image, index) => (
                    <CarouselItem key={image.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                       <DialogTrigger asChild>
                         <button className="w-full h-full" onClick={() => setSelectedImage(image)}>
                            <figure
                                className="relative aspect-[3/4] overflow-hidden rounded-lg border"
                            >
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
                      {selectedImage?.description || 'Vista ampliada de la imagen de la galería.'}
                    </DialogDescription>
                  </VisuallyHidden>
                </DialogHeader>
                {selectedImage && (
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    width={1200}
                    height={1600}
                    className="rounded-lg object-contain w-auto h-auto max-w-[90vw] max-h-[90vh]"
                  />
                )}
                <DialogClose className="absolute top-2 right-2 rounded-full bg-background/50 p-1 text-foreground transition-opacity hover:opacity-100">
                  <X className="h-6 w-6" />
                </DialogClose>
              </DialogContent>
            </Dialog>
        </div>
      </section>

      {/* Section 5: Acquisition */}
      <section id="acquire-suite" className="border-t border-border w-full py-24 md:py-32">
        <div className="mx-auto w-full max-w-xl px-5 md:px-8">
          <div className="border border-gold/30 rounded-3xl p-8 md:p-12 text-center bg-zinc-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl text-gold font-black rotate-12 pointer-events-none">Suite</div>
            <h3 className="font-headline text-3xl md:text-4xl text-white mb-4">{t('suiteOffer.bundle.offerTitle')}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t('suiteOffer.bundle.description')}
            </p>
            <div className="my-10 flex items-center justify-center gap-4">
              <p className="text-6xl font-black text-gold">$197</p>
            </div>
            <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: paypalHtml }} />
            <p className="text-[10px] text-muted-foreground mt-6 uppercase tracking-widest">
              *{t('suiteOffer.bundle.note')}*
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
