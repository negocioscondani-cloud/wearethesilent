'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function ManualSummaryPage() {

    const modules = [
        {
            title: "Módulo 1: Prospección Quirúrgica",
            description: "Aprende a identificar activos visuales de bajo rendimiento y a transformarlos en piezas de alto impacto. No se trata de crear de cero, sino de elevar la percepción de lo que ya existe. Es el primer paso para pensar como un director, no como un fotógrafo.",
            image: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif",
            imageAlt: "Un producto transformado con IA de una imagen simple a una de calidad de estudio."
        },
        {
            title: "Módulo 2: Generación de Imágenes",
            description: "Domina la creación de fotografía de producto hiperrealista sin necesidad de un estudio. Te enseñamos a dirigir a la IA para generar imágenes con calidad editorial, controlando la luz, la textura y la composición para que tu producto luzca como una marca de lujo.",
            image: "http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif",
            imageAlt: "Una imagen de producto de alta calidad generada por IA."
        },
        {
            title: "Módulo 3: Generación de Video",
            description: "Convierte imágenes estáticas en anuncios cinematográficos. Aprenderás a animar tus mejores fotos, crear secuencias narrativas (storyboards) y producir videos cortos que capturan la atención y comunican tu mensaje con fluidez y elegancia.",
            image: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__32792-scaled.avif",
            imageAlt: "Una escena de un storyboard cinematográfico creado con IA."
        },
        {
            title: "Módulo 4: Neuro-Scripting",
            description: "Deja de adivinar qué textos funcionan. Te enseñamos a escribir guiones y textos de venta que apelan al cerebro primario, utilizando estructuras probadas (Dolor, Solución, Ganancia) para maximizar la persuasión y la conversión.",
            image: "http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif",
            imageAlt: "Una representación visual del análisis de neuro-marketing."
        },
        {
            title: "Módulo 5: El Embajador Digital",
            description: "Humaniza tu marca sin necesidad de estar frente a la cámara. Aprenderás a diseñar, crear y animar un avatar digital que actúe como el rostro de tu marca, comunicando tus mensajes de forma consistente y escalable.",
            image: "http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif",
            imageAlt: "Un avatar digital hiperrealista creado con IA."
        },
        {
            title: "Módulo 6: La Agencia de IA",
            description: "Estructura tu conocimiento como un servicio premium. Este módulo te guía para empaquetar tus nuevas habilidades en una oferta de agencia, definir nichos rentables y establecer un flujo de trabajo profesional para entregar resultados a clientes.",
            image: "http://studioboom.online/wp-content/uploads/2025/09/ugc-society.avif",
            imageAlt: "Un espacio de trabajo que representa una agencia creativa moderna."
        },
        {
            title: "Módulo 7: Edición Premium",
            description: "Los detalles lo son todo. Aprende los secretos de la edición de alto nivel: ritmo, diseño sonoro, subtítulos legibles y etalonaje de color. Transforma videos 'buenos' en piezas 'premium' que reflejan autoridad.",
            image: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_close-up_structured_black_leather__ccf2610e-62b7-4670-8b9c-521bfb7178bf_1.avif",
            imageAlt: "Un primer plano de una textura de lujo, que simboliza la atención al detalle."
        },
        {
            title: "Módulo 8: Publicación y Métricas",
            description: "Publica con intención, no por obligación. Aprende a definir objetivos para cada pieza de contenido, a medir las métricas que realmente importan y a crear un sistema de retroalimentación para mejorar continuamente tu estrategia.",
            image: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Black_and_white_editorial_photo_folded_Financial_Ti_0498f205-d242-4f1e-9476-3bfa5d3de073_0.avif",
            imageAlt: "Un periódico financiero que simboliza el análisis y la estrategia."
        },
        {
            title: "Módulo 9: Plan Sprint de 14 Días",
            description: "La teoría sin acción es solo ruido. Este plan de ejecución te guía día a día para que apliques todo lo aprendido, crees tus primeros activos y obtengas resultados tangibles en solo dos semanas. Es el puente entre el conocimiento y la maestría.",
            image: "http://studioboom.online/wp-content/uploads/2025/09/calde11th_Elegant_cinematic_portrait_of_a_sophisticated_man_i_d50efa04-ac8b-465e-b336-6e4e52fc8e8e_1.avif",
            imageAlt: "Un retrato cinematográfico de un hombre enfocado, listo para la acción."
        }
    ];

    return (
        <div className="antialiased">
            <main className="max-w-5xl mx-auto px-6 md:px-12 py-32">
                <header className="text-center mb-24">
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Introducción al Protocolo</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mt-4 mb-6">Manual de Operaciones</h1>
                        <p className="text-lg text-cream/80 max-w-3xl mx-auto">
                            Una guía de alto nivel sobre el sistema The Silent Studio para transformar tu marca o construir tu agencia con contenido IA.
                        </p>
                    </div>
                </header>

                <section className="space-y-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-[4/5] shadow-2xl">
                             <Image 
                                src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_Elegant_cinematic_portrait_of_a_sophisticated_man_i_d50efa04-ac8b-465e-b336-6e4e52fc8e8e_1.avif"
                                alt="Director Creativo"
                                fill
                                className="object-cover rounded-lg"
                             />
                        </div>
                        <div>
                            <h2 className="text-4xl serif italic mb-6">La Ventaja Silenciosa</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                La mayoría de las marcas compiten gritando. Crean contenido ruidoso, siguen tendencias pasajeras y terminan siendo invisibles. La ventaja silenciosa es operar con un sistema. Es tener una intención tan clara que tu marca no necesita gritar para ser escuchada.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Esta guía te enseña a construir ese sistema. Dejarás de ser un "creador de contenido" que reacciona y te convertirás en un "director creativo" que lidera.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="md:order-2 relative aspect-[4/5] shadow-2xl">
                             <Image 
                                src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_close-up_structured_black_leather__ccf2610e-62b7-4670-8b9c-521bfb7178bf_1.avif"
                                alt="Textura de Lujo"
                                fill
                                className="object-cover rounded-lg"
                             />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-4xl serif italic mb-6">De Creador a Director: Un Sistema, No Solo Herramientas</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                'The Silent Studio Guide' te entrega un mapa de 9 módulos para dominar la producción de contenido premium. En resumen, aprenderás a:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Transformar la percepción de tu marca de 'común' a 'premium'.",
                                    "Crear activos visuales de alta gama (fotos y videos) sin necesidad de equipos costosos.",
                                    "Escribir guiones y textos que conectan y venden usando principios de neuromarketing.",
                                    "Construir un sistema de contenido que trabaje para ti, no al revés."
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="w-5 h-5 text-gold mr-3 mt-1 shrink-0"/>
                                        <span className="text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {modules.map((module, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                                <h2 className="text-4xl serif italic mb-6">{module.title}</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {module.description}
                                </p>
                            </div>
                            <div className={`relative aspect-[4/5] shadow-2xl ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                <Image 
                                    src={module.image}
                                    alt={module.imageAlt}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}

                </section>

                <section className="mt-32 py-24 text-center border-t border-gold/10 bg-zinc-950/50 rounded-3xl p-8">
                     <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold tracking-widest uppercase mb-6">
                        <Sparkles size={12} /> Lanzamiento Beta
                     </div>
                     <h2 className="text-4xl md:text-6xl font-bold serif italic mb-6">Accede al Protocolo Completo</h2>
                     <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                        Esto es solo un resumen. La guía completa incluye los 9 módulos detallados con flujos de trabajo, video-tutoriales y las Gemas de IA para que ejecutes con precisión de director.
                     </p>
                     
                     <div className="max-w-md mx-auto mb-12 bg-black border border-gold/30 p-8 rounded-2xl shadow-xl">
                        <div className="flex justify-between items-end mb-6">
                            <div className="text-left">
                                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">Precio Especial</p>
                                <h3 className="text-3xl text-white font-bold">The Silent Studio Guide</h3>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-500 line-through text-lg block">$97</span>
                                <span className="text-5xl font-black text-gold">$8</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-gray-500 text-left italic border-t border-white/5 pt-4">
                            *Oferta limitada para las primeras 50 personas. Luego el precio subirá a $27 USD.
                        </p>
                     </div>

                    <Button asChild className="bg-gold text-dark px-12 py-7 text-lg font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-lg shadow-gold/20">
                        <a href="https://shop.beacons.ai/danicalderon.tv/4579cb4d-51a5-4bc6-bb79-ffa3348f6afc" target="_blank" rel="noopener noreferrer">
                            ADQUIRIR GUÍA COMPLETA <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </Button>
                </section>
            </main>
        </div>
    );
}
