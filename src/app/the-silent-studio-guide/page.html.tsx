'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TheSilentStudioGuidePage() {
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    
    const modules = [
        { name: 'Módulo 1: Prospección', href: '/the-silent-studio-guide/module-1' },
        { name: 'Módulo 2: Imágenes', href: '/the-silent-studio-guide/module-2' },
        { name: 'Módulo 3: Video', href: '/the-silent-studio-guide/module-3' },
        { name: 'Módulo 4: Neuro-Scripting', href: '/the-silent-studio-guide/module-4' },
        { name: 'Módulo 5: Embajador Digital', href: '/the-silent-studio-guide/module-5' },
        { name: 'Módulo 6: La Agencia IA', href: '/the-silent-studio-guide/module-6' },
        { name: 'Módulo 7: Edición Premium', href: '/the-silent-studio-guide/module-7' },
        { name: 'Módulo 8: Publicación y Métricas', href: '/the-silent-studio-guide/module-8' },
        { name: 'Módulo 9: Plan Sprint 14 Días', href: '/the-silent-studio-guide/module-9' },
    ];

    return (
        <>
            <main id="index-page">
                <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 hero-bg">
                    <div className="max-w-4xl space-y-6">
                        <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Protocolo de Operaciones 2026</span>
                        <h1 className="text-6xl md:text-9xl font-light leading-tight italic">The Silent <br /><span className="not-italic">Studio.</span></h1>
                        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed serif italic">
                            Eleva tu marca y vende más con contenido premium hecho con IA. Flujos probados para resultados rápidos, sin depender de una agencia.
                        </p>
                        <div className="pt-12">
                            <a href="#indice-manual" onClick={(e) => { e.preventDefault(); scrollToId('indice-manual'); }} className="btn-premium border border-cream px-10 py-5">Explorar Índice del Manual</a>
                        </div>
                    </div>
                </header>

                <section id="indice-manual" className="py-32 px-8 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-5xl md:text-7xl serif italic mb-12">Índice del Manual</h2>
                        
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {modules.map(module => (
                                <Link key={module.href} href={module.href} className="module-card">
                                    <div><span className="text-gold text-[10px] font-bold mb-4 block uppercase">{module.name.split(':')[0]}</span><h4 className="text-xl serif mb-4 italic text-white">{module.name.split(':')[1]}</h4></div>
                                    <span className="text-gold text-[9px] uppercase tracking-widest">Ir al Módulo &rarr;</span>
                                </Link>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto mt-20 text-lg md:text-xl text-gray-400 serif italic border-l-2 border-gold pl-8 text-left">
                            <p>Esta guía no es un manual de herramientas. Es un manifiesto operativo. No se trata de aprender a usar la IA, sino de aprender a pensar como un director de arte que tiene a la IA como su equipo de ejecución.</p>
                            <p className="mt-4">El objetivo no es crear contenido, es construir una percepción de alto valor. Aquí, el silencio no es ausencia de ruido, es presencia de intención.</p>
                        </div>
                        
                        <div className="max-w-4xl mx-auto mt-20 text-left grid md:grid-cols-2 gap-12 bg-white/5 p-8 border border-white/10">
                            <div>
                                <h3 className="text-xl serif italic text-gold mb-4">Objetivos</h3>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Dominio, no Dependencia:</strong> Aprender el sistema para no depender de agencias ni de tutoriales dispersos.</li>
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Resultados, no Esfuerzo:</strong> Aplicar flujos probados para obtener resultados visuales inmediatos, no para experimentar.</li>
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Autoridad, no Ruido:</strong> Construir una marca que se perciba como líder, no como una más en el mercado.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl serif italic text-gold mb-4">Consejos de Uso</h3>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Sigue el Orden:</strong> Cada módulo construye sobre el anterior. La secuencia está diseñada para generar momentum.</li>
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Ejecuta, no solo leas:</strong> La verdadera comprensión viene de aplicar. Usa los ejemplos como base para tus propias creaciones.</li>
                                    <li className="flex items-start gap-3"><span className="text-gold">&ndash;</span> <strong>Usa las Gemas:</strong> Las herramientas de IA son tus departamentos. Dialoga con ellas como lo harías con un equipo.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <footer className="py-24 bg-[#050505] px-8 border-t border-white/5 text-center text-[9px] uppercase tracking-widest text-gray-700">
                    &copy; 2026 THE SILENT STUDIO | SAN JOSÉ, COSTA RICA
                </footer>
            </main>
        </>
    );
}
