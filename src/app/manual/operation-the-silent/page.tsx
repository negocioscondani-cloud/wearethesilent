
'use client';
import { useEffect } from 'react';
import Link from 'next/link';

const OperationPage = () => {

    useEffect(() => {
        document.body.classList.add('operation-body-styles');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
        
        return () => {
            document.body.classList.remove('operation-body-styles');
            document.querySelectorAll('.reveal-element').forEach(el => {
                if (el) {
                    observer.unobserve(el)
                }
            });
        };
    }, []);

    return (
        <div className="operation-body-styles antialiased">
            {/* Hero Section */}
            <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
                </div>
                
                <div className="serif text-xl font-light tracking-[0.3em] uppercase mb-12 opacity-40 reveal-element">PROTOCOLO DE OPERACIONES 2026</div>
                
                <h1 className="serif text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight reveal-element">
                    Dominio Total de Contenido IA para <span className="block italic gold-text">Marcas Premium</span>
                </h1>
                <p className="max-w-3xl text-white/60 font-light leading-relaxed mb-12 reveal-element">
                    <strong>Objetivo:</strong> Capacitar al dueño de marca para generar imágenes, videos, guiones y avatares de alto impacto sin depender de terceros.
                </p>
                <div className="reveal-element">
                    <Link href="/manual" className="btn-luxury">
                        Volver al Manual
                    </Link>
                </div>
            </section>
            
            {/* Resumen */}
            <section id="resumen" className="py-24 bg-[#0d0d0d] px-6 reveal-element">
                <div className="max-w-4xl mx-auto border-l border-gold/30 pl-10 md:pl-20">
                    <h3 className="serif text-xl md:text-3xl mb-4 gold-text uppercase tracking-widest">Resumen Ultrabreve</h3>
                    <p className="text-white/70 leading-relaxed font-light text-lg">
                        Sistema integral de producción de activos digitales basado en Neurociencia, diseñado para transformar productos comunes en marcas de lujo mediante el dominio de 4 pilares: Narrativa, Estética, Movimiento y Humanización.
                    </p>
                </div>
            </section>
            
            {/* Pilares */}
            <section id="pilares" className="py-24 px-6 max-w-7xl mx-auto">
                 <div className="text-center mb-20 reveal-element">
                    <h2 className="serif text-4xl md:text-5xl mb-4 italic">Los 4 Pilares de <span className="gold-text not-italic font-light">Dominio</span></h2>
                    <p className="text-white/30 uppercase text-[9px] tracking-[0.4em]">El Sistema Operativo de una Marca de Lujo</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Pilar 1 */}
                    <div className="pilar-card p-12 reveal-element">
                        <span className="serif text-3xl gold-text mb-6 block">Pilar 1: Narrativa</span>
                        <h4 className="text-white font-bold text-xl mb-4">Ingeniería de Textos y Guiones</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-6">El cerebro primario no compra productos, compra soluciones a sus dolores.</p>
                        <div className="text-left text-xs space-y-4 text-white/40">
                            <p><strong className="text-white/70 block">El Método Neuro-Scripting (Pain → Claim → Gain):</strong> Para crear guiones de Reels, TikTok o Ads que vendan.</p>
                            <p><strong className="text-white/70">Hook de Dolor (0-3s):</strong> "¿Cansado de que tu marca se vea invisible...?"</p>
                            <p><strong className="text-white/70">Agitación del Pain:</strong> "Seguir usando fotos mediocres te hace perder credibilidad..."</p>
                            <p><strong className="text-white/70">Claim (La Solución):</strong> Presenta tu producto como el puente al éxito.</p>
                            <p><strong className="text-white/70">Gain (Visión de Futuro):</strong> "Eleva tu estatus visual y domina tu mercado hoy."</p>
                            <p className="border-t border-gold/20 pt-4 mt-4 !text-gold/80"><strong className="text-gold">Tip de Aprendizaje:</strong> Usa palabras de poder como "Destraba", "Elimina", "Irresistible" para activar la recompensa dopaminérgica.</p>
                        </div>
                    </div>
                    {/* Pilar 2 */}
                    <div className="pilar-card p-12 reveal-element" style={{transitionDelay: '100ms'}}>
                        <span className="serif text-3xl gold-text mb-6 block">Pilar 2: Estética</span>
                        <h4 className="text-white font-bold text-xl mb-4">Fotografía IA de Producto</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-6">Aprende a crear imágenes 4K con iluminación de estudio usando Freepik Pikaso.</p>
                        <div className="text-left text-xs space-y-4 text-white/40">
                             <p><strong className="text-white/70 block">Flujo Directo de Generación:</strong></p>
                             <p><strong className="text-white/70">La Base Real:</strong> Toma una foto de tu producto. El producto debe estar enfocado.</p>
                             <p><strong className="text-white/70">Configuración en Freepik Pikaso:</strong> Modelo Nano Banana Pro, Fidelidad 70%, Creatividad 40%.</p>
                             <p><strong className="text-white/70">Fórmula del Prompt Maestro:</strong> [Producto] + [Escenario] + [Iluminación] + [Estilo].</p>
                             <p className="border-t border-gold/20 pt-4 mt-4 !text-gold/80"><strong className="text-gold">Iteración:</strong> Si no te gusta, cambia una palabra del prompt (ej. "mármol" por "madera noble") y regenera.</p>
                        </div>
                    </div>
                     {/* Pilar 3 */}
                    <div className="pilar-card p-12 reveal-element" style={{transitionDelay: '200ms'}}>
                        <span className="serif text-3xl gold-text mb-6 block">Pilar 3: Movimiento</span>
                        <h4 className="text-white font-bold text-xl mb-4">Producción de Video y Storyboard</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-6">Aprende a dirigir cine digital sin cámaras.</p>
                        <div className="text-left text-xs space-y-4 text-white/40">
                             <p><strong className="text-white/70 block">Fase A: El Storyboard (La Guía Visual):</strong> Usa el modo Storyboard de Freepik para describir la secuencia de 3 cuadros.</p>
                             <p><strong className="text-white/70 block">Fase B: Animación con Kling 2.6:</strong> Sube la imagen y aplica "Dirección de Cámara".</p>
                             <p className="border-t border-gold/20 pt-4 mt-4 !text-gold/80"><strong className="text-gold">Prompt de Movimiento:</strong> Usa comandos técnicos como [Zoom In slowly], [Liquid simulation], [High Fidelity Mode].</p>
                        </div>
                    </div>
                     {/* Pilar 4 */}
                    <div className="pilar-card p-12 reveal-element" style={{transitionDelay: '300ms'}}>
                        <span className="serif text-3xl gold-text mb-6 block">Pilar 4: Humanización</span>
                        <h4 className="text-white font-bold text-xl mb-4">El Avatar y Embajador de Marca</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-6">Aprende a crear una cara para tu marca que hable y venda 24/7.</p>
                        <div className="text-left text-xs space-y-4 text-white/40">
                             <p><strong className="text-white/70">Creación del Rostro:</strong> Genera en la IA una imagen de una persona que represente tus valores.</p>
                             <p><strong className="text-white/70">El Guion de Ventas:</strong> Usa el texto que creaste en el Pilar 1.</p>
                             <p><strong className="text-white/70 block">Sincronización (The Avatar Flow):</strong></p>
                             <p>Sube el rostro y el guion a herramientas como HeyGen o Hedra. Selecciona una voz (Autoritaria o Amistosa).</p>
                             <p className="border-t border-gold/20 pt-4 mt-4 !text-gold/80"><strong className="text-gold">Resultado:</strong> Un video de un "portavoz" explicando tu producto con naturalidad.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Neuroscoring */}
             <section id="neuroscoring" className="py-24 px-6 max-w-7xl mx-auto reveal-element">
                <div className="text-center mb-16">
                    <h2 className="serif text-4xl md:text-5xl mb-4 italic">Análisis de Impacto <span className="gold-text not-italic font-light">Neuroscoring</span></h2>
                    <p className="text-white/30 uppercase text-[9px] tracking-[0.4em]">Clasificación: 223 / 240 (EXTREMADAMENTE PERSUASIVO)</p>
                </div>
                
                <div className="overflow-x-auto border border-white/10 rounded-sm shadow-xl">
                    <table className="w-full text-left neuro-table">
                        <thead className="bg-white/5 uppercase text-[10px] tracking-widest gold-text">
                            <tr>
                                <th className="p-6 font-semibold">Estímulo</th>
                                <th className="p-6 font-semibold">Puntaje</th>
                                <th className="p-6 hidden md:table-cell">Justificación</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light text-white/70">
                            <tr><td className="p-6 font-semibold text-white">Personal (P)</td><td className="p-6 font-semibold text-white">40/40</td><td className="p-6 hidden md:table-cell">El dueño de marca tiene el control total.</td></tr>
                            <tr><td className="p-6 font-semibold text-white">Tangible (T)</td><td className="p-6 font-semibold text-white">38/40</td><td className="p-6 hidden md:table-cell">Resultados visuales claros en 4K.</td></tr>
                            <tr><td className="p-6 font-semibold text-white">Contrastable (C)</td><td className="p-6 font-semibold text-white">40/40</td><td className="p-6 hidden md:table-cell">El salto de "foto de celular" a "video de cine" es masivo.</td></tr>
                            <tr><td className="p-6 font-semibold text-white">Memorable (M)</td><td className="p-6 font-semibold text-white">35/40</td><td className="p-6 hidden md:table-cell">El uso de un Avatar propio crea un ancla de memoria en el cliente.</td></tr>
                            <tr><td className="p-6 font-semibold text-white">Visual (V)</td><td className="p-6 font-semibold text-white">40/40</td><td className="p-6 hidden md:table-cell">Estímulos de alta calidad que el cerebro primario procesa en &lt;1s.</td></tr>
                            <tr><td className="p-6 font-semibold text-white">Emocional (E)</td><td className="p-6 font-semibold text-white">30/40</td><td className="p-6 hidden md:table-cell">Se conecta con el orgullo del dueño por su marca.</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
            
            {/* Sesgos y Recomendaciones */}
            <section id="final" className="py-24 bg-[#0d0d0d] px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                     <div className="reveal-element">
                        <h3 className="serif text-2xl md:text-3xl mb-8 gold-text uppercase tracking-widest">Sesgos Cognitivos Aplicados</h3>
                        <ul className="space-y-4 font-light text-white/60">
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">Sesgo de Simplicidad:</strong> Al reducir todo a 4 pilares, eliminamos la parálisis por análisis.</li>
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">Efecto de Contraste:</strong> Al enseñar el "Antes/Después" de las fotos, el valor percibido se dispara.</li>
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">Sesgo de Autoridad:</strong> El uso de herramientas de vanguardia (Kling 2.6, Nano Banana) posiciona a tu marca como líder tecnológico.</li>
                        </ul>
                    </div>
                     <div className="reveal-element" style={{transitionDelay: '200ms'}}>
                        <h3 className="serif text-2xl md:text-3xl mb-8 gold-text uppercase tracking-widest">Recomendaciones Tácticas</h3>
                         <ul className="space-y-4 font-light text-white/60">
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">No busques perfección, busca impacto:</strong> El cerebro primario prefiere algo emocionante y visual a algo perfecto pero aburrido.</li>
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">Usa el Avatar para Tutoriales:</strong> Reduce la fricción de compra explicando cómo se usa tu producto con un rostro humano.</li>
                            <li className="border-l-2 border-gold/50 pl-4"><strong className="text-white/90">Iteración Rápida:</strong> Si un guion no convierte, cámbiale el "Hook" (los primeros 3 segundos). Es la parte más importante.</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="py-24 border-t border-white/5 text-center px-6 reveal-element">
                <div className="serif text-4xl mb-8 italic opacity-60 italic text-gold">El silencio es el lenguaje del lujo.</div>
                <p className="text-[9px] uppercase tracking-[0.5em] text-white/20">The Silent Studio &copy; 2026 | Protocolo de Operaciones</p>
            </footer>
        </div>
    );
};

export default OperationPage;
