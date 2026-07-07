'use client';

import React, { useEffect } from 'react';
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
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 04</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module4Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module4Label}</p>
                    </div>

                    <div className="max-w-4xl mx-auto mt-12">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.module4Method}</h3>
                            <p className="text-gray-300" dangerouslySetInnerHTML={{__html: content.module4Desc}}></p>
                            <div className="space-y-4 text-sm text-gray-400">
                                <p><strong>{content.module4HookTitle}</strong></p>
                                <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{content.module4HookPrompt}</div>
                                <p><strong>{content.module4NarrativeTitle}</strong></p>
                                <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{content.module4NarrativePrompt}</div>
                                <p><strong>{content.module4CloseTitle}</strong></p>
                                <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{content.module4ClosePrompt}</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-3">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-5">
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
