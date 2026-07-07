'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { brandContent } from '@/lib/manual-data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

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
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 03</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module3Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module3Label}</p>
                    </div>

                    <div className="mt-12 grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.module3OptionA}</h3>
                            <p className="text-gray-300 mb-2">{content.module3OptionADesc}</p>
                             <div className="bg-black text-white p-6 border-l-4 border-gold text-xs font-mono">
                                {content.module3OptionAPrompt}
                            </div>
                            <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: content.module3OptionASubDesc }}></p>
                            
                            <h3 className="section-subtitle mt-12">{content.module3OptionB}</h3>
                            <p className="text-gray-300 mb-6">{content.module3OptionBDesc}</p>
                            <ol className="space-y-4 text-sm text-gray-400">
                                {content.module3OptionBSteps.map((step, index) => (
                                    <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <span dangerouslySetInnerHTML={{ __html: step }}></span></li>
                                ))}
                            </ol>
                        </div>
                         <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__32792-scaled.avif" alt="Storyboard Generado" fill className="object-cover rounded-lg shadow-xl" />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-2">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-4">
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
