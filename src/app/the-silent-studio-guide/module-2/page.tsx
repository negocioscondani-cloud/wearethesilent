'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


const Module2Page = () => {
    const galleryImages = [
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__tomafotografa-lifestyle-editorial-instante-cotidia__87806-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093830.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093844.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093850.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093856.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093902.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-phase-on__69031-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__35668-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46360-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46365-scaled.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29273-scaled.avif'
];

    return (
        <main>
            <Dialog>
                <section className="pt-40 pb-20 px-8 bg-white text-black">
                    <div className="max-w-6xl mx-auto">
                        
                        <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Módulo 02: <br />Generación de Imágenes.</h2>
                        
                        <div className="grid md:grid-cols-2 gap-16 mb-24">
                            <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed italic">El Duelo: Pago vs Gratis. Soberanía estética para tu marca.</p>
                            <div className="bg-gray-50 p-8 border-l-4 border-gold shadow-sm">
                                <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Luxe Prompt Studio Access</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col">
                                        <a href="https://gemini.google.com/gem/1hIvDXs8BsxVnIxgp9UErej2oVkAriXpa?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-premium bg-black text-white py-3 px-6 text-[10px]">Abrir en Google Gemini</a>
                                        <span className="gemini-note">Nota: Usa la versión Gemini Pro o Reasoning (Razonamiento). Evita la opción rápida.</span>
                                    </div>
                                    <a href="https://chatgpt.com/g/g-68bf83b955908191b8d6f5465c306fb4-luxe-prompt-studio" target="_blank" rel="noopener noreferrer" className="btn-premium border border-black py-3 px-6 text-[10px]">Abrir en ChatGPT</a>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-32">
                            {/* Option A */}
                            <div className="bg-white p-10 border border-gray-100 shadow-sm space-y-8">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl serif italic">OPCIÓN A (PRO): <br />Luxe Prompt + Freepik</h3>
                                    <a href="https://www.freepik.es/app" target="_blank" rel="noopener noreferrer" className="text-gold text-[9px] font-bold border border-gold px-3 py-1">Abrir Freepik &rarr;</a>
                                </div>
                                <div className="space-y-4 text-sm text-gray-600">
                                <p><strong>1.</strong> Entra a Luxe Prompt Studio y sube la foto de tu producto.</p>
                                    <div className="flex flex-col gap-4">
                                        <p><strong>2.</strong> Pide un estilo (Editorial, 3D, etc.) y obtén el JSON.</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Link href="/the-silent-studio-guide/styles" className="btn-premium bg-gray-100 py-2 px-4 text-[9px] text-black">Ver Biblioteca de Estilos</Link>
                                            <Link href="/the-silent-studio-guide/peticiones" className="btn-premium bg-gray-100 py-2 px-4 text-[9px] text-black">Explorar Biblioteca de Peticiones</Link>
                                        </div>
                                    </div>
                                    <p><strong>3.</strong> En Freepik, usa el modelo Nano Banana Pro.</p>
                                    <p><strong>4.</strong> CRÍTICO: En "Referencia", sube la foto real de tu producto.</p>
                                    <p><strong>5.</strong> Pega el JSON, selecciona aspect ratio y resolución 4k.</p>
                                    <p><strong>6.</strong> darle en Generar.</p>
                                </div>
                                <DialogTrigger asChild>
                                    <button className="btn-premium bg-gold text-black px-8 py-4 w-full">Ver Video Tutorial</button>
                                </DialogTrigger>
                            </div>
                            {/* Option B */}
                            <div className="bg-gray-900 text-white p-10 shadow-2xl space-y-8">
                                 <h3 className="text-2xl serif italic text-gold">OPCIÓN B (GRATIS): <br />Google Labs "FLOW" (Creatividad Fluida)</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Usa este flujo para experimentación rápida sin costo usando imagen 4, nano banana y nano bana pro.</p>
                                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                                <p><strong>1.</strong> Entra a <a href="https://labs.google/fx/es/tools/flow" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">Google Labs flow</a>.</p>
                                    <p><strong>2.</strong> creamos un nuevo proyecto y vamos a la opcion de imagenes en la partes superior izquierda y vamos a seleccionar la opcion de crear imagen y en el simbolo de + subiremos nuestra imagen de referencia. </p>
                                    <p>Carga la Referencia en la opción de asunto: Haz clic en subir imagen y recortar si es vertical u horizontal y selecciona la de tu producto.</p>
                                    <p><strong>3.</strong> El Prompt: En el cuadro de texto pondrás el prompt que te dio Luxe prompt Studio</p>
                                </div>
                            </div>
                        </div>

                        {/* Prompt Example Block */}
                        <div className="max-w-7xl mx-auto py-24 bg-white text-black border-t border-gray-100">
                            <div className="grid md:grid-cols-2 gap-16 items-center px-4">
                                <div className="relative aspect-9-16 shadow-2xl overflow-hidden border-8 border-white">
                                    <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-culinary-editorial-advert__66326-scaled.avif" alt="Cocktail" fill className="comparison-img" />
                                </div>
                                <div>
                                    <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em] mb-4 block">Ejemplo de Ingeniería de Prompt</span>
                                    <h3 className="text-3xl serif italic mb-8">High-End Culinary Editorial</h3>
                                    <div className="prompt-engineering-box overflow-y-auto max-h-[400px]">
                                        <p className="mb-4">"Luxurious close-up editorial photograph of three cocktails arranged on a wooden bar counter. The focus is on fresh ingredients, visible condensation on the glasses, and vibrant liquid colors that evoke taste and refreshment. Hyper-detailed textures of ice cubes, mint leaves, dried citrus slices, and petals."</p>
                                        <p className="mb-4 text-zinc-400">"Captured with a Phase One XF IQ4 150MP, Schneider Kreuznach 120mm f/4 Macro Blue Ring lens. ISO 50 ultra clean. Shutter speed 1/125s for frozen sharp detail."</p>
                                        <p className="italic text-gold">"Lighting: invisible off-camera large softbox. Directional soft light coming from the left. Passive, dark bar interior."</p>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-6 italic">Haz clic en la flecha para descargar en 4K o retoca directamente en el cuadro de texto de FLOW.</p>
                                </div>
                            </div>
                        </div>

                        {/* Category Requests Button */}
                        <div className="text-center py-20 bg-black">
                             <h3 className="serif italic text-3xl text-white mb-10">Solicita a Luxe Prompt Studio por Nicho</h3>
                             <a href="https://docs.google.com/document/d/1buCLiQD9VT4ozVprzhiyShZtqMx9X_T6K2paTuPW7P4/edit?tab=t.4zth5vke96rd" target="_blank" rel="noopener noreferrer" className="btn-premium bg-gold text-black px-16 py-6 border-none">Explorar Biblioteca de Peticiones</a>
                        </div>
                    </div>
                </section>
                <section className="py-32 px-8 bg-black text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h3 className="serif italic text-4xl md:text-6xl text-gold">Portafolio Visual</h3>
                            <p className="text-gray-500 uppercase text-[9px] tracking-[0.4em] mt-4">Ejemplos de la Calidad Editorial</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {galleryImages.map((src, index) => (
                                <div key={index} className="relative aspect-9-16 shadow-xl border border-white/5 overflow-hidden">
                                    <Image src={src} alt={`Resultado de galería ${index + 1}`} fill className="comparison-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <DialogContent className="max-w-4xl p-0 border-0 bg-black">
                    <DialogHeader>
                        <VisuallyHidden>
                        <DialogTitle>Video Tutorial: Generación de Imágenes</DialogTitle>
                        <DialogDescription>
                            Un video tutorial que explica el proceso de generación de imágenes.
                        </DialogDescription>
                        </VisuallyHidden>
                    </DialogHeader>
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/aZsD8iW4o8k"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
};
export default Module2Page;
