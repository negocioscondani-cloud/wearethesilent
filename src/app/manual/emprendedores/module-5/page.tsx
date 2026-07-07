'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { brandContent } from '@/lib/manual-data';
import { ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const UgcSocietyBrandOverlayContent = () => {
    const [isAvatarExamplesOpen, setIsAvatarExamplesOpen] = useState(false);
    return (
        <div className="p-6 md:p-12 space-y-12 bg-white text-black">
            <Dialog open={isAvatarExamplesOpen} onOpenChange={setIsAvatarExamplesOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-gold/20 text-white">
                    <DialogHeader className="p-6">
                    <DialogTitle className="text-gold serif text-2xl">Ejemplos de Arquetipos de Marca</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    <div>
                        <div className="relative aspect-[9/16] mb-4">
                        <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif" alt="Avatar Ejemplo 1: El Artesano de Lujo" fill className="object-cover rounded-lg" />
                        </div>
                        <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 1: El Artesano de Lujo</h4>
                        <p className="text-sm text-gray-400">Este avatar comunica sofisticación, experiencia y un toque de misterio. Ideal para marcas de alta gama (relojes, sastrería, licores premium) donde la tradición y la calidad son primordiales.</p>
                    </div>
                    <div>
                        <div className="relative aspect-[9/16] mb-4">
                        <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" alt="Avatar Ejemplo 2: El Visionario Relajado" fill className="object-cover rounded-lg" />
                        </div>
                        <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 2: El Visionario Relajado</h4>
                        <p className="text-sm text-gray-400">Este avatar proyecta creatividad, innovación y cercanía. Es perfecto para marcas modernas, agencias creativas o startups tecnológicas que quieren parecer accesibles pero a la vanguardia.</p>
                    </div>
                    </div>
                </DialogContent>
            </Dialog>

            <section>
                <h3 className="section-subtitle !text-black">Definiendo el Alma de tu Marca</h3>
                <p className="text-gray-600 text-sm mb-8">Antes de crear un avatar, debes entender la personalidad de tu marca. La gema UGC Society te guía a través del método 4Ps para construir una base sólida.</p>
            </section>
            <section>
                <h3 className="section-subtitle !text-black">Value Canvas (Adaptado para Marcas)</h3>
                <div className="space-y-4 text-sm text-gray-700">
                    <p><strong>Audiencia:</strong> Clientes que valoran la calidad y la estética, pero que actualmente ven tu marca como una opción más, no como la única opción.</p>
                    <p><strong>Problema:</strong> El contenido visual de tu marca no comunica el verdadero valor de tu producto. Luce amateur y se pierde entre la competencia.</p>
                    <p><strong>Solución:</strong> Un sistema para crear contenido de calidad premium de forma autónoma, elevando la percepción de tu marca al instante.</p>
                </div>
            </section>
            <section>
                <h3 className="section-subtitle !text-black">Método 4Ps (El Alma de TU Marca)</h3>
                <div className="space-y-4 text-sm text-gray-700">
                    <p><strong>Personaje:</strong> Define el arquetipo de tu "Fundador Ideal" o "Embajador de Marca". ¿Es un artesano experto y misterioso? ¿O un visionario joven y cercano? Este será el rostro de tu marca.</p>
                    <p><strong>Producto:</strong> Tu propio producto o servicio. La meta es que su presentación visual esté a la altura de su calidad real.</p>
                    <p><strong>Posicionamiento:</strong> ¿Quieres ser visto como la opción más lujosa, la más innovadora, la más confiable? Tu contenido visual debe reflejar esto.</p>
                    <p><strong>Personalidad:</strong> El tono de tu marca. ¿Es directo y técnico, o cálido y aspiracional? Esto definirá tanto los textos como la estética.</p>
                    <Button variant="outline" onClick={() => setIsAvatarExamplesOpen(true)} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold mt-4">Ver Ejemplos de Arquetipos</Button>
                </div>
            </section>
        </div>
    );
};


const ModulePage = () => {
    const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
    
    useEffect(() => {
        document.body.classList.add('manual-body-styles');
        return () => {
            document.body.classList.remove('manual-body-styles');
        };
    }, []);

    const content = brandContent;

    return (
        <div className="antialiased">
             <Dialog open={isDeepDiveOpen} onOpenChange={setIsDeepDiveOpen}>
                <DialogContent className="max-w-5xl p-0">
                    <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                        <h2 className="serif text-3xl italic">Profundización: <span className="text-gold">UGC Society</span></h2>
                        <Button onClick={() => setIsDeepDiveOpen(false)} variant="ghost" size="icon"><X/></Button>
                    </div>
                    <div className="max-h-[80vh] overflow-y-auto">
                        <UgcSocietyBrandOverlayContent />
                    </div>
                </DialogContent>
            </Dialog>

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
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 05</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.module5Title}</h1>
                        <p className="text-sm text-gold/70 italic">{content.module5Label}</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto mt-12">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.module5Method}</h3>
                            <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: content.module5Desc }} />
                            <div className="space-y-4 text-sm text-gray-400">
                                <p dangerouslySetInnerHTML={{ __html: content.module5FaceDesc }} />
                                <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{content.module5FacePrompt}</div>
                                <p dangerouslySetInnerHTML={{ __html: content.module5VoiceDesc }} />
                                <p><strong>{content.module5SyncTitle}</strong></p>
                                <ol className="list-decimal list-inside space-y-2">
                                    {content.module5SyncSteps.map((step, index) => <li key={index} dangerouslySetInnerHTML={{ __html: step }}/>)}
                                </ol>
                            </div>
                             <div className="flex flex-wrap gap-4 mt-8">
                                <Button onClick={() => setIsDeepDiveOpen(true)} variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">Profundizar en UGC Society</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                       <Link href="/manual/emprendedores/module-4">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-6">
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
