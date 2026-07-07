'use client';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState, useRef } from 'react';
import { Sparkles, ArrowRightLeft, MousePointer2 } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';


const visualHeistExamples = [
  {
    before: "http://studioboom.online/wp-content/uploads/2026/01/f3c9dc9b-51d2-4cf5-9122-d6d6ea95c42d.avif",
    after: "http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-highend-culinary-editorial-commer__20545-scaled.avif",
    label: "Ejemplo 1"
  },
  {
    before: "http://studioboom.online/wp-content/uploads/2026/02/49_diadelamadre.avif",
    after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif",
    label: "Ejemplo 2"
  },
  {
    before: "http://studioboom.online/wp-content/uploads/2026/02/photo-1617331140180-e8262094733a-scaled.avif",
    after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-cinematic-portr__37830-scaled.avif",
    label: "Ejemplo 3"
  },
  {
    before: "http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-27-at-8.27.37-AM.avif",
    after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif",
    label: "Ejemplo 4"
  },
  {
    before: "http://studioboom.online/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-22-at-10.10.17-AM.avif",
    after: "http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif",
    label: "Ejemplo 5"
  }
];


export default function BrandAcceleratorPage() {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  const beforeImage = visualHeistExamples[currentExampleIndex].before;
  const afterImage = visualHeistExamples[currentExampleIndex].after;

  const offerItems = (t('brandAccelerator.offerItems') as any[]) || [];
  const modules = (t('brandAccelerator.modules') as any[]) || [];


  const handleMove = (e: any) => {
    if (!isResizing && e.type !== 'mousemove' && e.type !== 'touchmove') return;
    
    if (containerRef.current) {
      const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    }
  };

  const startResizing = () => setIsResizing(true);
  const stopResizing = () => setIsResizing(false);


  return (
    <div className="bg-dark text-cream font-body antialiased selection:bg-gold selection:text-dark">

    {/* ANNOUNCEMENT BAR */}
    <div className="bg-gradient-to-r from-dark via-gold/20 to-dark border-b border-gold/20 text-center py-2 text-xs md:text-sm font-bold tracking-widest uppercase">
        <span className="text-gold">● EN VIVO:</span> El Protocolo "The Silent Studio" está abierto.
    </div>

    {/* HERO SECTION */}
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-gray-300">NUEVO MÉTODO 2026</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-light leading-tight italic">
                {t('brandAccelerator.heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/80 max-w-4xl mx-auto mb-12 font-light leading-relaxed serif italic">
                {t('brandAccelerator.heroSubtitle')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a href="https://shop.beacons.ai/danicalderon.tv/4579cb4d-51a5-4bc6-bb79-ffa3348f6afc" target="_blank" rel="noopener noreferrer" className="btn-premium bg-gold text-dark px-10 py-5 rounded-full text-xl font-bold tracking-wide flex items-center gap-3 cursor-pointer">
                    VER THE SILENT STUDIO GUIDE <i className="fa-solid fa-play"></i>
                </a>
            </div>
            
            <div className="mt-20 relative mx-auto max-w-5xl transform hover:scale-[1.01] transition-transform duration-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold to-amber-600 rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-xl border border-white/10 bg-dark/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-500 font-mono">instagram.com/tu_marca</div>
                    </div>
                    <div className="p-8 md:p-12 text-left grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Valor Percibido</p>
                            <p className="text-4xl md:text-5xl font-mono font-bold text-cream">+300%</p>
                            <p className="text-green-400 text-sm mt-1">↑ vs antes</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Ventas Estimadas</p>
                            <p className="text-4xl md:text-5xl font-mono font-bold text-cream">+45%</p>
                        </div>
                        <div className="opacity-50 blur-[2px]">
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Confianza del Cliente</p>
                            <p className="text-4xl font-mono font-bold text-cream">Máxima</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold serif mb-6">{t('brandAccelerator.problemTitle')}</h2>
                <p className="text-gray-400 text-lg">{t('brandAccelerator.problemSubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-red-500 font-black rotate-12 group-hover:rotate-0 transition-transform">Old</div>
                    <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3"><i className="fa-solid fa-triangle-exclamation"></i> {t('brandAccelerator.oldWayTitle')}</h3>
                    <ul className="space-y-4 text-gray-400">
                        {(t('brandAccelerator.oldWayItems') as string[]).map((item, index) => (
                           <li key={index} className="flex items-start gap-3"><span className="text-red-500">✖</span> {item}</li>
                        ))}
                    </ul>
                </div>

                <div className="p-8 rounded-3xl border border-gold bg-gold/5 relative overflow-hidden shadow-[0_0_40px_rgba(197,160,89,0.2)]">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-gold font-black -rotate-12">New</div>
                    <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-3"><i className="fa-solid fa-bolt"></i> {t('brandAccelerator.newWayTitle')}</h3>
                    <ul className="space-y-4 text-gray-300">
                        {(t('brandAccelerator.newWayItems') as string[]).map((item, index) => (
                          <li key={index} className="flex items-start gap-3"><span className="text-gold">✔</span> {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-[#0d0d0d] relative">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold serif text-center mb-16">{t('brandAccelerator.phasesTitle')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
                 {(modules || []).map((module: any, index: number) => (
                    <div key={index} className="bg-dark/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                        <div className="w-16 h-16 bg-[#020617] border border-gold rounded-xl flex items-center justify-center text-2xl text-gold mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                            <i className={`fa-solid fa-${index + 1}`}></i>
                        </div>
                        <h3 className="text-xl font-bold text-cream mb-3">{module.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{module.description}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto mt-20">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={14} />
                  Metodología Incluida
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold serif tracking-tight">
                  El Poder de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-500">"Alquimia Editorial"</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                  De un producto genérico a una pieza de deseo editorial. Imagen completa, sin recortes, máxima fidelidad.
                </p>
              </div>

               <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                {visualHeistExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExampleIndex(index)}
                    className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-colors border-2 ${
                      currentExampleIndex === index
                        ? 'bg-gold text-dark border-gold'
                        : 'bg-dark border-gray-700 hover:bg-gray-800 text-gray-300'
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
              </div>

              <div className="relative group max-w-md mx-auto md:max-w-2xl lg:max-w-3xl">
                <div className="absolute -top-10 left-0 right-0 flex justify-between text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase px-2">
                  <span>Tu Foto Actual</span>
                  <span>Tu Foto Premium</span>
                </div>

                <div 
                  ref={containerRef}
                  className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl cursor-ew-resize select-none"
                  onMouseMove={handleMove}
                  onTouchMove={handleMove}
                  onMouseDown={startResizing}
                  onMouseUp={stopResizing}
                  onMouseLeave={stopResizing}
                >
                  <Image 
                    src={afterImage} 
                    alt="Visual Heist Después"
                    fill
                    className="absolute inset-0 w-full h-full object-contain p-2 md:p-4"
                    draggable="false"
                  />

                  <div 
                    className="absolute inset-0 w-full h-full z-10"
                    style={{ 
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
                    }}
                  >
                    <Image 
                      src={beforeImage} 
                      alt="Visual Heist Antes"
                      fill
                      className="absolute inset-0 w-full h-full object-contain p-2 md:p-4 bg-[#0a0a0a]"
                      draggable="false"
                    />
                    
                    <div className="absolute bottom-10 left-6 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <p className="text-[10px] font-bold tracking-tighter uppercase text-gray-400">Estado</p>
                      <p className="text-sm font-bold">Básico</p>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-6 text-right bg-gold/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/30">
                    <p className="text-[10px] font-bold tracking-tighter uppercase text-gold/80">Alquimia</p>
                    <p className="text-sm font-bold text-gold">Elite</p>
                  </div>

                  <div 
                    className="absolute inset-y-0 z-20 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(197,160,89,0.5)] flex items-center justify-center text-black border-2 border-gold">
                      <ArrowRightLeft size={18} className="text-gold/80" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-2 text-gray-500 animate-pulse">
                  <MousePointer2 size={14} />
                  <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">Desliza para comparar</span>
                </div>
              </div>
            </div>
        </div>
    </section>

    <section className="py-20 border-y border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold serif mb-6">{t('brandAccelerator.whoBehindThisTitle')}</h2>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold relative">
                        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Founder" layout="fill" className="object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-cream text-lg">The Silent Studio</p>
                        <p className="text-gold text-sm uppercase tracking-wider">{t('brandAccelerator.whoBehindThisSubtitle')}</p>
                    </div>
                </div>
                <p className="text-gray-400 italic mb-4">
                   {t('brandAccelerator.whoBehindThisQuote')}
                </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-dark p-6 rounded-xl border border-white/10 text-center">
                    <p className="text-4xl font-black text-cream mb-1">450+</p>
                    <p className="text-xs text-gray-500 uppercase">{t('brandAccelerator.stats.brandsTransformed')}</p>
                </div>
                <div className="bg-dark p-6 rounded-xl border border-white/10 text-center">
                    <p className="text-4xl font-black text-gold mb-1">90%</p>
                    <p className="text-xs text-gray-500 uppercase">{t('brandAccelerator.stats.lessCost')}</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-light serif italic mb-6">{t('brandAccelerator.offerTitle')}</h2>
                <p className="text-xl text-gray-300">{t('brandAccelerator.offerSubtitle')}</p>
            </div>

            <div className="max-w-lg mx-auto bg-dark border border-gold rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(197,160,89,0.15)] relative">
                <div className="absolute top-0 inset-x-0 bg-gold text-dark text-center py-1 text-xs font-bold uppercase tracking-widest">
                    Oferta de Lanzamiento Beta
                </div>

                <div className="p-10 pt-14">
                    <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-800">
                        <div>
                            <p className="text-gray-400 text-sm uppercase font-bold mb-2">Acceso Completo</p>
                            <h3 className="text-3xl font-bold text-cream">The Silent Studio Guide</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-500 line-through text-lg block">$97</span>
                            <span className="text-5xl font-black text-gold">{t('brandAccelerator.offerPrice')}</span>
                        </div>
                    </div>

                    <div className="space-y-6 mb-10">
                        {(offerItems || []).map((item: any, index: number) => (
                           <div key={index} className="flex items-start gap-4">
                                <div className={`w-8 h-8 rounded-full ${(item.title && item.title.startsWith('BONUS')) ? 'bg-[#fbbf24]/20' : 'bg-gold/20'} flex items-center justify-center flex-shrink-0 mt-1`}>
                                    <i className={`fa-solid ${item.icon} ${(item.title && item.title.startsWith('BONUS')) ? 'text-[#fbbf24]' : 'text-gold'} text-base`}></i>
                                </div>
                                <div>
                                    <h4 className={`font-bold ${(item.title && item.title.startsWith('BONUS')) ? 'text-[#fbbf24]' : 'text-cream'}`}>{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="https://shop.beacons.ai/danicalderon.tv/4579cb4d-51a5-4bc6-bb79-ffa3348f6afc" target="_blank" rel="noopener noreferrer" className="w-full bg-gold hover:bg-amber-300 text-dark font-black text-xl py-5 rounded-xl [box-shadow:0_0_20px_rgba(197,160,89,0.3)] hover:[box-shadow:0_0_40px_rgba(197,160,89,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                        {t('brandAccelerator.cta')} <i className="fa-solid fa-rocket"></i>
                    </a>
                    <p className="text-center text-xs text-gray-600 mt-4">Debido a la naturaleza digital del producto, no hay reembolsos.</p>
                </div>
            </div>
        </div>
    </section>

</div>
  );
}
