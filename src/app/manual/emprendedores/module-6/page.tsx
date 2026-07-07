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
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 06</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module6Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module6Label}</p>
                    </div>

                    <div className="mt-12 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gray-300 text-lg leading-relaxed">{content.module6Desc}</p>
                        </div>
                        <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                                <Image src="http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif" alt="Alpha Content" fill className="object-cover rounded-lg shadow-xl" />
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-5">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-7">
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
