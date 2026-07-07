'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { brandContent } from '@/lib/manual-data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const examples = [
    {
        title: "De salsa casera a producto gourmet",
        before: "http://studioboom.online/wp-content/uploads/2026/01/f3c9dc9b-51d2-4cf5-9122-d6d6ea95c42d.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-highend-culinary-editorial-commer__20545-scaled.avif"
    },
    {
        title: "De plato local a experiencia culinaria",
        before: "http://studioboom.online/wp-content/uploads/2026/01/finca-turistica-lagos-scaled.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif"
    },
    {
        title: "De boceto a retrato cinematográfico",
        before: "http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-22-at-10.10.17-AM.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif"
    },
    {
        title: "De snack a objeto de deseo",
        before: "http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-27-at-8.27.37-AM.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif"
    },
    {
        title: "De queque tradicional a alta repostería",
        special_link: "/proposals/bakery",
        special_link_text: "Inspirado en Pastelería Inglesa (Ver Propuesta)",
        before: "http://studioboom.online/wp-content/uploads/2026/02/49_diadelamadre.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif"
    },
    {
        title: "De materia prima a bodegón de arte",
        before: "http://studioboom.online/wp-content/uploads/2026/01/freepik__upload__20543.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-fine-art-still-life-chiaroscuro-b__20544.avif"
    },
    {
        title: "De comida rápida a experiencia premium",
        before: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-img1-surgical-hyperfidelity-pha__45391.avif",
        after: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-ethereal-hyperrealism-hasselbla__45393.avif"
    }
];

const finalCarouselImages = [
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-phase-on__69031-scaled.avif', alt: 'Resultado Botella' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif', alt: 'Resultado CGI' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__35668-scaled.avif', alt: 'Resultado Arri Ale 1' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46360-scaled.avif', alt: 'Resultado Arri Ale 2' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46365-scaled.avif', alt: 'Resultado Arri Ale 3' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29273-scaled.avif', alt: 'Resultado Arri Ale 4' },
];


const ModulePage = () => {
    useEffect(() => {
        document.body.classList.add('manual-body-styles');
        return () => {
            document.body.classList.remove('manual-body-styles');
        };
    }, []);

    const content = brandContent;
    
    const renderImagePair = (example: (typeof examples)[0]) => (
        <div className="my-16">
            <h4 className="font-bold text-lg text-white text-center mb-6">{example.title}</h4>
            {example.special_link && (
                 <div className="text-center mb-4">
                    <Link href={example.special_link} passHref>
                         <Button asChild variant="link" className="text-gold hover:text-white">
                             <span>{example.special_link_text}</span>
                         </Button>
                    </Link>
                </div>
            )}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="relative">
                    <p className="comparison-label left-2 bg-black text-white">ANTES</p>
                    <Image src={example.before} alt="Antes" width={900} height={1600} className="w-full h-auto object-cover aspect-[9/16] rounded-md border border-white/10" />
                </div>
                <div className="relative">
                    <p className="comparison-label right-2 bg-gold text-black">DESPUÉS</p>
                    <Image src={example.after} alt="Después" width={900} height={1600} className="w-full h-auto object-cover aspect-[9/16] rounded-md border border-gold/20" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="antialiased">
            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center">
                <Link href="/manual/emprendedores" className="serif italic text-2xl font-bold tracking-tighter uppercase">
                    The <span className="text-gold">Silent</span> Studio
                </Link>
                 <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                    <Link href="/manual/emprendedores">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Volver al Índice
                    </Link>
                </Button>
            </nav>

            <main className="max-w-4xl mx-auto px-6 md:px-12 py-32 space-y-12">
                <header>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 01</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module1Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module1Label}</p>
                    </div>
                </header>

                <section className="space-y-6 text-gray-300">
                    <h3 className="section-subtitle">Método 1: Prospección Quirúrgica</h3>
                    <p>El arte de convertir una foto común en una pieza que vende posicionamiento.</p>
                    <p>Este método no empieza con una cámara. Empieza con estrategia.</p>
                    <p>La Prospección Quirúrgica consiste en identificar una imagen débil de tu propio producto y transformarla en una pieza visual premium que eleve inmediatamente la percepción de tu marca. No es edición por estética. Es edición con intención comercial.</p>

                    <div className="pt-8">
                        <h4 className="font-bold text-xl text-white mb-4">1. Auditoría estratégica de tus fotos actuales</h4>
                        <p className="mb-4">Aquí no se trata de buscar “la más bonita”, sino la que tenga más potencial de impacto tras la mejora.</p>
                        <p className="font-semibold text-gray-200">Evalúa:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 mb-4 text-gray-400">
                            <li>¿La iluminación es pobre pero el producto está bien definido?</li>
                            <li>¿El encuadre es aceptable aunque el fondo no ayude?</li>
                            <li>¿La textura del producto se pierde por mala exposición?</li>
                            <li>¿La imagen transmite bajo valor aunque el producto no lo sea?</li>
                        </ul>
                        <p className="font-semibold text-gray-200">Buscamos una foto que:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                            <li>Tenga información visual suficiente.</li>
                            <li>No esté irremediablemente dañada.</li>
                            <li>Muestre claramente el producto.</li>
                            <li>Permita reestilización (editorial, 3D, minimalista, lujo, etc.).</li>
                        </ul>
                        <p className="text-gold/80 italic mt-4">Aquí el objetivo es detectar materia prima subestimada.</p>
                    </div>
                    
                    {renderImagePair(examples[0])}
                    {renderImagePair(examples[1])}

                    <div className="pt-8">
                        <h4 className="font-bold text-xl text-white mb-4">2. Transformación con flujo de IA (alineación a estándar premium)</h4>
                        <p className="mb-4">En esta etapa aplicamos el flujo de mejora con intención editorial.</p>
                        <p>No es “poner filtros”. Es reconstruir la percepción.</p>
                        <p className="font-semibold text-gray-200">El proceso suele incluir:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                            <li>Corrección avanzada de iluminación y contraste.</li>
                            <li>Reinterpretación de fondo (minimalista, brutalista, lifestyle, editorial).</li>
                            <li>Ajuste de color grading para coherencia de marca.</li>
                            <li>Mejora de texturas para dar sensación de calidad.</li>
                            <li>Simulación de set profesional si es necesario.</li>
                        </ul>
                        <p className="font-semibold text-gold/80 mt-4">La clave: <span className="text-gray-200 font-normal">La imagen final debe parecer producida en un estudio de alto nivel, aunque haya nacido en una cocina, oficina o sala común.</span></p>
                        <p className="text-gold/80 italic mt-2">Aquí ocurre el “atraco visual”: el mercado percibe más valor del que esperaba.</p>
                    </div>

                    {renderImagePair(examples[2])}
                    {renderImagePair(examples[3])}

                    <div className="pt-8">
                        <h4 className="font-bold text-xl text-white mb-4">3. Activación estratégica de la imagen transformada</h4>
                        <p className="mb-4">Una vez mejorada, no se publica sin contexto.</p>
                        <p className="font-semibold text-gray-200">Se usa para:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 mb-4 text-gray-400">
                            <li>Portadas de anuncios.</li>
                            <li>Hero image en landing page.</li>
                            <li>Carruseles comparativos (Antes / Después).</li>
                            <li>Contenido educativo mostrando el proceso.</li>
                            <li>Refuerzo de autoridad visual en redes.</li>
                        </ul>
                        <p className="font-semibold text-gray-200">La imagen ahora cumple tres funciones:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                           <li>Eleva el posicionamiento.</li>
                           <li>Aumenta la confianza.</li>
                           <li>Justifica mejor el precio.</li>
                        </ul>
                         <p className="text-gold/80 italic mt-4">Y esto es importante: Cuando la percepción sube, la resistencia al precio baja.</p>
                    </div>
                    
                    {renderImagePair(examples[4])}
                    
                    <div className="pt-8">
                        <h4 className="font-bold text-xl text-white mb-4">¿Por qué funciona este método?</h4>
                        <p className="mb-4">Porque el cerebro humano toma decisiones en milisegundos basadas en calidad visual percibida.</p>
                        <p className="font-semibold text-gray-200">Si tu producto parece premium, se asume que:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 mb-4 text-gray-400">
                            <li>Es mejor.</li>
                            <li>Está mejor diseñado.</li>
                            <li>Es más confiable.</li>
                            <li>Vale más.</li>
                        </ul>
                        <p className="text-gold/80 italic mt-4">No cambias el producto. Cambias la narrativa visual.</p>
                    </div>

                    {renderImagePair(examples[5])}

                    <div className="pt-8">
                        <h4 className="font-bold text-xl text-white mb-4">Resultado esperado</h4>
                        <p className="mb-4">Una foto que antes restaba autoridad, ahora:</p>
                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-400">
                            <li>Refuerza tu marca.</li>
                            <li>Mejora el CTR en anuncios.</li>
                            <li>Hace que tu web se sienta más sólida.</li>
                            <li>Te permite competir visualmente con marcas grandes.</li>
                        </ul>
                    </div>
                    
                    {renderImagePair(examples[6])}
                </section>
                
                 <section className="py-20">
                    <div className="module-header text-center">
                        <h2 className="text-4xl md:text-5xl font-bold serif italic mb-4">Galería de Resultados</h2>
                    </div>
                    <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-6xl mx-auto">
                        <CarouselContent>
                            {finalCarouselImages.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="bg-black/20 border-gray-800">
                                            <CardContent className="flex aspect-[9/16] items-center justify-center p-2">
                                                <div className="relative w-full h-full">
                                                    <Image src={image.src} alt={image.alt} fill className="object-cover rounded-md" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-white bg-black/50 border-white/20 hover:bg-white/20" />
                        <CarouselNext className="text-white bg-black/50 border-white/20 hover:bg-white/20" />
                    </Carousel>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Índice
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-2">
                            Módulo Siguiente
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default ModulePage;
