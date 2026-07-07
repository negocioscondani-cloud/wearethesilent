'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { brandContent, gemImages } from '@/lib/manual-data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

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
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 07</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module7Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module7Label}</p>
                    </div>

                     <div className="mt-12 space-y-6">
                        <p className='text-gray-300' dangerouslySetInnerHTML={{ __html: content.module7Desc }}></p>
                        
                        <h3 className="section-subtitle mt-12">{content.module7GemsTitle}</h3>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-md mx-auto">
                                    <CarouselContent>
                                        {gemImages.map((gem, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card className="bg-black/20 border-gray-800 overflow-hidden">
                                                        <CardContent className="flex aspect-[9/16] items-center justify-center p-4">
                                                            <div className="relative w-full h-full">
                                                                <Image src={gem.src} alt={gem.name} fill className="object-cover rounded-md" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                    <p className="text-sm text-gold/70 text-center font-semibold mt-4">{gem.name}</p>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="text-white bg-black/50 border-white/20 hover:bg-white/20 -left-4" />
                                    <CarouselNext className="text-white bg-black/50 border-white/20 hover:bg-white/20 -right-4" />
                                </Carousel>
                            </div>
                            
                            <div>
                                <ol className="space-y-4 text-gray-400 mb-8">
                                   {(content.module7Gems).map((gem, index) => (
                                     <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <div dangerouslySetInnerHTML={{ __html: gem }}></div></li>
                                   ))}
                                </ol>
                                 <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-gold/10">
                                   <Link href="/the-silent-studio" passHref>
                                        <Button asChild className="bg-gold text-black py-3 px-4 font-bold uppercase text-[9px] tracking-widest hover:bg-black hover:text-white transition-all w-full md:w-auto">
                                           <span>Explorar el Ecosistema</span>
                                        </Button>
                                    </Link>
                                     <Link href="/manual/architecture" passHref>
                                        <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest w-full md:w-auto">
                                           <span>Ver Arquitectura de Agencia</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-6">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-8">
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
