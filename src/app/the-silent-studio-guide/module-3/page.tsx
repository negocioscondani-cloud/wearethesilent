'use client';
import Link from 'next/link';
import Image from 'next/image';

const Module3Page = () => {

    const videoResults = [
        'Fw4AuiFAWuA',
        'deVt3qf6yck',
        'jHg_1Juic28',
        'df2hD62DHNM',
        '9Jwjv8q-YuE',
        'LofEqXfC-Gc'
    ];

    return (
        <main>
            <section className="pt-40 pb-20 px-8 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                    
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Módulo 03: <br/>Flujo de Video.</h2>
                    <div className="grid md:grid-cols-2 gap-16 mb-20">
                        <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
                            De Estático a Cinematográfico. El 'Upsell' inmediato para convertir imágenes ganadoras en videos que detienen el scroll.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/the-silent-studio-guide/camera-movements" className="btn-premium bg-gold text-black px-12 py-5 w-full">
                                Ver Guía de Movimientos de Cámara
                            </Link>
                        </div>
                    </div>

                    {/* 1. Animación Directa */}
                    <div className="mb-32">
                        <div className="grid md:grid-cols-2 gap-12 items-start bg-gray-50 p-8 md:p-16 border border-gray-100 rounded-sm">
                            <div className="space-y-6">
                                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block">Metodología</span>
                                <h3 className="text-4xl serif italic">Animación Directa <br/><span className="not-italic text-gold text-xl tracking-[0.2em] uppercase">(Kling 2.5/2.6)</span></h3>
                                <div className="space-y-4 text-sm text-gray-600">
                                    <p><strong>1. Punto de Partida:</strong> En Freepik, una vez generada tu imagen 4K, haz clic en el botón de "Video".</p>
                                    <p><strong>2. La Dirección:</strong> Usa la estructura: [Movimiento de cámara], [Acción del objeto]. Ejemplo: <em>"Zoom in lento, el vapor del café sube suavemente"</em>.</p>
                                    <p><strong>3. Sonido y Magia:</strong> Usa Kling 2.6 y activa "SFX". La IA añadirá audio contextual.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="aspect-9-16 shadow-2xl relative">
                                        <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-cinematic-still-life-quie__32283.avif" className="comparison-img" alt="Café Estático" fill />
                                    </div>
                                    <p className="text-[9px] text-center uppercase tracking-widest text-gray-400 italic">Materia Prima (Estática)</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="aspect-9-16 shadow-2xl bg-black relative">
                                        <video className="video-content" autoPlay muted loop playsInline>
                                            <source src="http://studioboom.online/wp-content/uploads/2026/02/freepik_zoom-in-lento-el-vapor-del-caf-sube-suavemente_kling_1080p_9-16_24fps_32286.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <p className="text-[9px] text-center uppercase tracking-widest text-gold font-bold italic">Resultado Animado</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Storyboard Narrativo */}
                    <div className="mb-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 p-8 md:p-16 border border-white/5 rounded-sm text-white">
                            <div className="space-y-6">
                                <span className="text-gold font-bold text-[10px] uppercase tracking-widest block">Servicio High Value</span>
                                <h3 className="text-4xl serif italic">Storyboard Cinematográfico</h3>
                                <div className="space-y-4 text-sm text-gray-400">
                                    <p><strong>1. La Narrativa:</strong> Usa el modo "Storyboard" en Freepik Pikaso > Variations.</p>
                                    <p><strong>2. El Guion:</strong> Escribe la secuencia. Ejemplo: 1. Mujer cansada &rarr; 2. Bebe Pura Coco &rarr; 3. Energía.</p>
                                    <p><strong>3. Consistencia Visual:</strong> La IA generará las imágenes clave manteniendo el ADN de la marca y del sujeto.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="aspect-9-16 shadow-2xl relative">
                                        <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif" className="comparison-img" alt="Storyboard Escena 1" fill />
                                    </div>
                                    <p className="text-[9px] text-center uppercase tracking-widest text-gray-500 italic">Escena 1: Contemplación</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="aspect-9-16 shadow-2xl relative">
                                        <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__32792-scaled.avif" className="comparison-img" alt="Storyboard Escena 2" fill />
                                    </div>
                                    <p className="text-[9px] text-center uppercase tracking-widest text-gray-500 italic">Escena 2: Activación</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-24 px-8 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-5xl serif italic">Resultados</h3>
                        <p className="text-gray-400 mt-4 uppercase text-[10px] tracking-[0.3em]">Clips generados con los flujos de trabajo del módulo</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {videoResults.map(id => (
                            <div key={id} className="aspect-9-16 shadow-2xl bg-black relative">
                                <iframe 
                                    className="w-full h-full" 
                                    src={`https://www.youtube.com/embed/${id}`} 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Module3Page;
