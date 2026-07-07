'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { brandContent, resultImages } from '@/lib/manual-data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const PuraCocoProcessOverlay = () => {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('#pura-coco-process-case-study .reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - 150) {
                    (el as HTMLElement).classList.add('active');
                }
            });
        };
        
        const initialReveals = document.querySelectorAll('#pura-coco-process-case-study .reveal');
        initialReveals.forEach((el, i) => { 
            if(el.getBoundingClientRect().top < window.innerHeight) {
                 (el as HTMLElement).classList.add('active');
            }
        });

        const container = document.querySelector('#pura-coco-process-case-study');
        container?.addEventListener('scroll', handleScroll);
        
        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="pura-coco-process-case-study" className="bg-luxury-black text-white">
            <header className="py-10 px-10 text-center border-b border-white/5 bg-black">
                <div className="serif text-2xl tracking-[0.2em] font-bold gold-text uppercase italic">The Silent Studio</div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 mt-2">Manual de Ejecución • Así lo hice con Pura Coco</p>
            </header>

            <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="max-w-4xl z-10">
                    <span className="gold-text uppercase text-[10px] tracking-[0.5em] mb-4 block reveal">Mi Metodología Paso a Paso</span>
                    <h1 className="serif text-5xl md:text-7xl mb-6 leading-tight reveal">Cómo tomé un diseño plano y lo elevé al lujo</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 reveal">
                        Ya tienes mi sistema en tus manos. Ahora quiero mostrarte cómo apliqué cada paso del proceso para transformar los assets de Pura Coco. Sigue mi rastro para tu primer posteo.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center border-y border-white/5 py-20">
                    <div className="reveal">
                        <div className="step-badge mb-6">El Comienzo</div>
                        <h3 className="serif text-3xl mb-6">No busqué una foto de baja calidad, tomé su diseño plano.</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Cuando contacté con Pura Coco, me encontré con que ya tenían un buen diseño: sus botellas azules en formato render. Pero les faltaba **vida**. Lo que hice fue tomar esa base y darle el "Contexto Aspiracional" que solo THE Silent Studio puede ofrecer.
                        </p>
                        <div className="image-card p-6 relative aspect-[9/16]">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-092810.avif" fill className="object-contain" alt="Diseño Plano Original" />
                            <p className="text-[10px] uppercase mt-4 tracking-widest text-center text-gray-400 absolute bottom-2 left-1/2 -translate-x-1/2">El render original que recibí</p>
                        </div>
                    </div>
                    <div className="reveal" style={{ transitionDelay: '200ms' }}>
                        <div className="step-badge mb-6">Mi Ejecución</div>
                        <h3 className="serif text-3xl mb-6">Así se ve cuando aplico mi acelerador.</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Utilicé ese mismo diseño plano como referencia visual. Mi objetivo era claro: posicionar el producto en un entorno de lujo sin gastar un dólar en producción física. El resultado fue esta campaña lifestyle editorial inmediata.
                        </p>
                        <div className="image-card p-6 border-gold/40 relative aspect-[9/16]">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__tomafotografa-lifestyle-editorial-instante-cotidia__87806-scaled.avif" fill className="object-cover" alt="Resultado Final Color" />
                            <p className="text-[10px] uppercase mt-4 tracking-widest text-center gold-text font-bold absolute bottom-2 left-1/2 -translate-x-1/2">Mi resultado final en segundos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#050505]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="serif text-4xl text-center mb-20 italic">Mi Hoja de Ruta Personal</h2>
                    
                    <div className="space-y-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">1</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Mi uso de Luxe Prompt</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Lo primero que hice fue subir el diseño de la botella a mi Gema de **Luxe Prompt Studio**. Le pedí específicamente una estética editorial de revista de moda. Copié el JSON que me dio y ahí estaba toda la dirección de arte que necesitaba.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-[9/16]">
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093837.avif" fill className="object-cover shadow-2xl border border-white/5" alt="Pura Coco campaign" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className='order-1 md:order-1 relative aspect-[9/16]'>
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093850.avif" fill className="object-cover shadow-2xl border border-white/5" alt="Freepik setup" />
                            </div>
                            <div className="order-2 md:order-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">2</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Mi configuración en Freepik</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Me fui a Pikaso y activé el modelo **Nano Banana Pro**. En la sección de referencia, utilicé el botón de <strong>subir</strong> para cargar el diseño plano de Pura Coco. Si mi intención hubiese sido usar un personaje famoso o un avatar específico, habría subido esa foto directamente donde dice <strong>Personaje</strong>. Pegué el JSON y dejé que la IA hiciera el trabajo pesado.
                                </p>
                                <div className="text-[11px] text-gray-500 bg-white/5 p-4 border-l-2 border-gold italic">
                                    "Este método de carga asegura que la referencia del producto sea la prioridad absoluta para el modelo, manteniendo su integridad visual."
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">3</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Cómo animé la escena</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Llevé mi mejor imagen a Kling 2.6. No quería una animación loca, quería **elegancia**. Escribí mi dirección de cámara directamente: quería ver cómo el agua se condensaba en el vidrio mientras la cámara se elevaba.
                                </p>
                            </div>
                           <div className="order-1 md:order-2 aspect-video">
                               <iframe src="https://www.youtube.com/embed/QyVVGufp6Fw" className="w-full h-full border-0 rounded-lg" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


const ModulePage = () => {
    useEffect(() => {
        document.body.classList.add('manual-body-styles');
        return () => {
            document.body.classList.remove('manual-body-styles');
        };
    }, []);

    const content = brandContent;

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

            <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-20">
                <section>
                    <div className="module-header text-center">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Resultados</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">Galería de Transformaciones</h1>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Una muestra del poder de la metodología aplicada a diferentes nichos y productos.</p>
                    </div>
                    <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-6xl mx-auto">
                        <CarouselContent>
                            {resultImages.map((image, index) => (
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
                
                 <section className="py-20">
                    <div className="module-header">
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">Caso de Estudio: Pura Coco</h2>
                    </div>
                    <PuraCocoProcessOverlay />
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-9">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores">
                            Volver al Índice
                             <BookOpen className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </footer>
        </div>
    );
};

export default ModulePage;
