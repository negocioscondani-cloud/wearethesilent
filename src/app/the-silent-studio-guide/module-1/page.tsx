'use client';
import Link from 'next/link';
import Image from 'next/image';

const Module1Page = () => {
    return (
        <main>
            {/* Module Header */}
            <section className="pt-40 pb-20 px-8 bg-white text-black">
                <div className="max-w-6xl mx-auto">
                    
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Método 1: <br/>Prospección Quirúrgica.</h2>
                    <div className="grid md:grid-cols-2 gap-16">
                        <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
                            El arte de convertir una foto común en una pieza que vende posicionamiento. Este método no empieza con una cámara. Empieza con estrategia.
                        </p>
                        <p className="text-gray-500 leading-loose">
                            La Prospección Quirúrgica consiste en identificar una imagen débil de tu propio producto y transformarla en una pieza visual premium que eleve inmediatamente la percepción de tu marca. No es edición por estética. Es edición con intención comercial.
                        </p>
                    </div>
                </div>
            </section>

            {/* Step 1 */}
            <section className="py-24 px-8 bg-gray-50 text-black">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/f3c9dc9b-51d2-4cf5-9122-d6d6ea95c42d.avif" className="comparison-img" alt="Salsa Antes" fill /></div>
                        <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" className="comparison-img" alt="Salsa Después" fill /></div>
                    </div>
                    <div>
                        <h3 className="text-3xl serif italic mb-6">1. Auditoría estratégica de tus fotos actuales</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">Aquí no se trata de buscar “la más bonita”, sino la que tenga más potencial de impacto tras la mejora. Evalúa:</p>
                        <ul className="check-list mb-8">
                            <li>¿La iluminación es pobre pero el producto está bien definido?</li>
                            <li>¿El encuadre es aceptable aunque el fondo no ayude?</li>
                            <li>¿La textura del producto se pierde por mala exposición?</li>
                            <li>¿La imagen transmite bajo valor aunque el producto no lo sea?</li>
                        </ul>
                        <div className="p-6 bg-white border border-gray-100 italic text-sm text-gray-500">
                            Buscamos una foto que tenga información visual suficiente, no esté irremediablemente dañada y permita reestilización.
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2 */}
            <section className="py-24 px-8 bg-white text-black">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl serif italic mb-6">2. Transformación con flujo de IA <br/><span className="text-gold not-italic text-lg tracking-widest uppercase block mt-2">(Alineación a estándar premium)</span></h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">Reconstruimos la percepción. No es "poner filtros", es aplicar corrección avanzada de luz, reinterpretación de fondo y color grading.</p>
                        <p className="border-l-2 border-gold pl-6 italic text-gray-500 text-sm mb-6">
                            "La imagen final debe parecer producida en un estudio de alto nivel, aunque haya nacido en una cocina, oficina o sala común."
                        </p>
                        <p className="text-xs uppercase tracking-widest font-bold">Aquí ocurre el “atraco visual”: el mercado percibe más valor del que esperaba.</p>
                    </div>
                    <div className="order-1 md:order-2 grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-092810.avif" className="comparison-img" alt="Coco" fill /></div>
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093844.avif" className="comparison-img" alt="Coco Despues" fill /></div>
                        </div>
                        <div className="space-y-2 pt-12">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-22-at-10.10.17-AM.avif" className="comparison-img" alt="Boceto" fill /></div>
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif" className="comparison-img" alt="Boceto Despues" fill /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3 */}
            <section className="py-24 px-8 bg-gray-50 text-black">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-3xl md:text-4xl serif italic mb-6">3. Activación estratégica de la imagen transformada</h3>
                        <p className="text-gray-500 leading-relaxed max-w-2xl">Una vez mejorada, no se publica sin contexto. Se usa para portadas de anuncios, hero images en landing page o carruseles comparativos.</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-4">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-27-at-8.27.37-AM.avif" className="comparison-img grayscale" alt="Rosquitas Antes" fill /></div>
                            <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif" className="comparison-img" alt="Rosquitas Después" fill /></div>
                            <p className="text-[9px] text-center uppercase tracking-widest text-gray-400">Rosquitas: Estándar Comercial</p>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/49_diadelamadre.avif" className="comparison-img grayscale" alt="Queque Antes" fill /></div>
                            <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif" className="comparison-img" alt="Queque Después" fill /></div>
                            <a href="http://studioboom.online/pasteleria-inglesa/" target="_blank" className="text-[9px] text-center uppercase tracking-widest text-gold block underline">Ref: Pastelería Inglesa</a>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__upload__20543.avif" className="comparison-img grayscale" alt="Platano Antes" fill /></div>
                            <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-fine-art-still-life-chiaroscuro-b__20544.avif" className="comparison-img" alt="Platano Después" fill /></div>
                            <p className="text-[9px] text-center uppercase tracking-widest text-gray-400">Arte Visual: Pata de Plátano</p>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="aspect-9-16 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-img1-surgical-hyperfidelity-pha__45391.avif" className="comparison-img grayscale" alt="Hamburguesa Antes" fill /></div>
                            <div className="aspect-9-16 shadow-xl relative"><Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-ethereal-hyperrealism-hasselbla__45393.avif" className="comparison-img" alt="Hamburguesa Después" fill /></div>
                            <p className="text-[9px] text-center uppercase tracking-widest text-gray-400">Fidelidad Gastronómica</p>
                        </div>
                    </div>

                    <div className="mt-24 p-12 bg-black text-white text-center">
                        <p className="text-gold serif text-2xl italic mb-4">"Cuando la percepción sube, la resistencia al precio baja."</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-600">La imagen ahora cumple tres funciones: Eleva el posicionamiento, aumenta la confianza y justifica mejor el precio.</p>
                    </div>
                </div>
            </section>

            {/* Final Method Context */}
            <section className="py-32 px-8 bg-white text-black">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 border-t border-gray-100 pt-20">
                    <div>
                        <h3 className="text-3xl serif italic mb-8">¿Por qué funciona este método?</h3>
                        <p className="text-gray-600 leading-loose mb-6">Porque el cerebro humano toma decisiones en milisegundos basadas en calidad visual percibida. Si tu producto parece premium, se asume que es mejor, está mejor diseñado y es más confiable.</p>
                        <p className="text-gold font-bold uppercase tracking-widest text-xs">No cambias el producto. Cambias la narrativa visual.</p>
                    </div>
                    <div className="bg-gray-50 p-12">
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Resultado esperado</h4>
                        <ul className="check-list">
                            <li>Refuerza tu marca personal o comercial.</li>
                            <li>Mejora drásticamente el CTR en anuncios.</li>
                            <li>Hace que tu web se sienta sólida y profesional.</li>
                            <li>Te permite competir visualmente con marcas grandes.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Module1Page;
