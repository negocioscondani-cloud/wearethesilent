
'use client';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState, useRef } from 'react';
import { Sparkles, ArrowRightLeft, MousePointer2 } from 'lucide-react';


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


export default function MentorshipPage() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  const beforeImage = visualHeistExamples[currentExampleIndex].before;
  const afterImage = visualHeistExamples[currentExampleIndex].after;


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
    <div className="bg-[#020617] text-white font-sans antialiased selection:bg-[#22d3ee] selection:text-[#020617]">

    {/* ANNOUNCEMENT BAR */}
    <div className="bg-gradient-to-r from-[#0f172a] via-[#22d3ee]/20 to-[#0f172a] border-b border-[#22d3ee]/20 text-center py-2 text-xs md:text-sm font-bold tracking-widest uppercase">
        <span className="text-[#22d3ee]">● EN VIVO:</span> El Protocolo "Agency" está abierto. Plazas limitadas para Febrero.
    </div>

    {/* HERO SECTION */}
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('http://googleusercontent.com/image_collection/image_retrieval/15855147054723215337')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 via-[#0f172a]/80 to-[#0f172a]"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-gray-300">NUEVO MÉTODO 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight">
                Lanza Tu Agencia de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-white to-[#22d3ee] [text-shadow:0_0_20px_rgba(34,211,238,0.6)]">Contenido IA.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#cbd5e1] max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                El sistema "Silent Studio": Cómo facturar <span className="text-white font-bold border-b border-[#22d3ee]">$5k - $10k/mes</span> automatizando la creación de imagen con Gems de Gemini, sin empleados y sin experiencia técnica.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="glow-btn bg-[#22d3ee] text-[#020617] px-10 py-5 rounded-full text-xl font-black tracking-wide flex items-center gap-3 cursor-pointer">
                            VER LA CLASE GRATUITA <i className="fa-solid fa-play"></i>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 border-0 bg-black">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/aDJMlGJ4g0c?autoplay=1"
                                title="The Silent Studio System"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 font-medium tracking-wide uppercase">
                ⚠️ No es Crypto • No es Dropshipping • No es Trading
            </p>

            {/* Dashboard Mockup (Visual Proof of Opportunity) */}
            <div className="mt-20 relative mx-auto max-w-5xl transform hover:scale-[1.01] transition-transform duration-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22d3ee] to-purple-600 rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                    {/* Simple UI representation of Stripe Dashboard */}
                    <div className="p-4 border-b border-white/10 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-500 font-mono">dashboard.stripe.com/home</div>
                    </div>
                    <div className="p-8 md:p-12 text-left grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Ingresos Hoy</p>
                            <p className="text-4xl md:text-5xl font-mono font-bold text-white">$485.00</p>
                            <p className="text-green-400 text-sm mt-1">↑ 12% vs ayer</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Esta Semana</p>
                            <p className="text-4xl md:text-5xl font-mono font-bold text-white">$2,450.00</p>
                        </div>
                        <div className="opacity-50 blur-[2px]">
                            {/* Future pacing visual */}
                            <p className="text-gray-400 text-sm font-bold uppercase mb-2">Pendiente</p>
                            <p className="text-4xl font-mono font-bold text-white">$1,200.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/* THE PROBLEM (The Old Way vs The New Way) */}
    <section className="py-24 bg-[#020617]">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">El "Cementerio" de los <br/><span className="text-gray-500 line-through">Negocios Online</span></h2>
                <p className="text-gray-400 text-lg">¿Por qué fallan el 99% de los emprendedores? Porque eligen modelos saturados, complejos y con márgenes ridículos.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* The Old Way */}
                <div className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-red-500 font-black rotate-12 group-hover:rotate-0 transition-transform">Old</div>
                    <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3"><i className="fa-solid fa-triangle-exclamation"></i> El Viejo Método</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start gap-3"><span className="text-red-500">✖</span> <strong>Dropshipping:</strong> Márgenes del 10%, problemas de envíos, devoluciones.</li>
                        <li className="flex items-start gap-3"><span className="text-red-500">✖</span> <strong>Trading:</strong> Riesgo altísimo de perder tu capital. Estrés constante.</li>
                        <li className="flex items-start gap-3"><span className="text-red-500">✖</span> <strong>Agencia Tradicional:</strong> Contratar empleados, oficinas, costos fijos altos.</li>
                    </ul>
                </div>

                {/* The Alpha Way */}
                <div className="p-8 rounded-3xl border border-[#22d3ee] bg-[#22d3ee]/5 relative overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl text-[#22d3ee] font-black -rotate-12">New</div>
                    <h3 className="text-2xl font-bold text-[#22d3ee] mb-6 flex items-center gap-3"><i className="fa-solid fa-bolt"></i> El Modelo Alpha</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start gap-3"><span className="text-[#22d3ee]">✔</span> <strong>Arbitraje de Software:</strong> La IA hace el trabajo pesado (fotos, textos).</li>
                        <li className="flex items-start gap-3"><span className="text-[#22d3ee]">✔</span> <strong>Márgenes del 90%:</strong> Vendes propiedad intelectual, no productos físicos.</li>
                        <li className="flex items-start gap-3"><span className="text-[#22d3ee]">✔</span> <strong>Alta Demanda:</strong> Todos los negocios necesitan contenido visual YA.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* THE MECHANISM (How it works) */}
    <section className="py-24 bg-[#0f172a] relative">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Tu Plan de Escape en <span className="text-[#22d3ee]">3 Fases</span></h2>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Phase 1 */}
                <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-[#020617] border border-[#22d3ee] rounded-xl flex items-center justify-center text-2xl text-[#22d3ee] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        <i className="fa-solid fa-crosshairs"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">1. El Nicho de Oro</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        No disparamos a todos. Seleccionamos quirúrgicamente nichos con dinero (Dentistas, Real Estate) que están desesperados por mejorar su imagen visual.
                    </p>
                </div>

                {/* Phase 2 */}
                <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-[#020617] border border-[#22d3ee] rounded-xl flex items-center justify-center text-2xl text-[#22d3ee] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">2. Visual Heist</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Usamos nuestra tecnología propietaria de IA para tomar las fotos "feas" del cliente y convertirlas en obras de arte de lujo en segundos. <strong className="text-white">Sin fotógrafos.</strong>
                    </p>
                </div>

                {/* Phase 3 */}
                <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-[#020617] border border-[#22d3ee] rounded-xl flex items-center justify-center text-2xl text-[#22d3ee] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        <i className="fa-solid fa-repeat"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">3. Escala Recurrente</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Entregamos el trabajo y hacemos el "Upsell" a una membresía mensual. Un cliente te paga mes tras mes por mantener su feed actualizado.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20">
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                  <Sparkles size={14} />
                  Metodología UGS Society
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  El Poder del <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">"Visual Heist"</span>
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
                        ? 'bg-cyan-400 text-slate-900 border-cyan-400'
                        : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
              </div>


              <div className="relative group max-w-md mx-auto md:max-w-2xl lg:max-w-3xl">
                <div className="absolute -top-10 left-0 right-0 flex justify-between text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-500 uppercase px-2">
                  <span>Antes / Commodity</span>
                  <span>Después / High-End</span>
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

                  <div className="absolute bottom-10 right-6 text-right bg-cyan-600/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-400/30">
                    <p className="text-[10px] font-bold tracking-tighter uppercase text-cyan-200">Heist</p>
                    <p className="text-sm font-bold text-cyan-400">Elite</p>
                  </div>

                  <div 
                    className="absolute inset-y-0 z-20 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center justify-center text-black border-2 border-cyan-400">
                      <ArrowRightLeft size={18} className="text-cyan-600" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-2 text-gray-500 animate-pulse">
                  <MousePointer2 size={14} />
                  <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">Desliza para comparar</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-white/5 pt-10">
                <div className="text-center p-4">
                  <h4 className="text-cyan-400 font-bold text-2xl mb-1">+300%</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Valor Percibido</p>
                </div>
                <div className="text-center p-4">
                  <h4 className="text-cyan-400 font-bold text-2xl mb-1">Cero</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Inversión en Sets</p>
                </div>
                <div className="text-center p-4">
                  <h4 className="text-cyan-400 font-bold text-2xl mb-1">Instantáneo</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Time to Market</p>
                </div>
              </div>
            </div>
        </div>
    </section>

    {/* AUTHORITY / SOCIAL PROOF */}
    <section className="py-20 border-y border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">¿Quién está detrás de esto?</h2>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#22d3ee] relative">
                        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Founder" layout="fill" className="object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-white text-lg">The Silent Studio</p>
                        <p className="text-[#22d3ee] text-sm uppercase tracking-wider">Creadores del Sistema IA</p>
                    </div>
                </div>
                <p className="text-gray-400 italic mb-4">
                    "Pasé 5 años en agencias tradicionales perdiendo dinero en oficinas y personal. Cuando descubrí el apalancamiento de la IA, despedí a todos y multipliqué mis beneficios x10. Ahora te enseño a hacer lo mismo."
                </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {/* Stats */}
                <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 text-center">
                    <p className="text-4xl font-black text-white mb-1">450+</p>
                    <p className="text-xs text-gray-500 uppercase">Alumnos Activos</p>
                </div>
                <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 text-center">
                    <p className="text-4xl font-black text-[#22d3ee] mb-1">$2.5M</p>
                    <p className="text-xs text-gray-500 uppercase">Generados en Ventas</p>
                </div>
                <div className="bg-[#0f172a] p-6 rounded-xl border border-white/10 text-center col-span-2">
                    <p className="text-4xl font-black text-white mb-1">100%</p>
                    <p className="text-xs text-gray-500 uppercase">Online & Remoto</p>
                </div>
            </div>
        </div>
    </section>

    {/* OFFER SECTION */}
    <section id="join" className="py-24 relative overflow-hidden">
        {/* Glow Bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22d3ee]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-6">El <span className="text-[#22d3ee]">"Agency Blueprint"</span></h2>
                <p className="text-xl text-gray-300">
                    Todo lo que necesitas para lanzar tu agencia en 7 días, empaquetado en un sistema paso a paso.
                </p>
            </div>

            {/* Pricing Card */}
            <div className="max-w-lg mx-auto bg-[#020617] border border-[#22d3ee] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)] relative">
                {/* Best Value Tag */}
                <div className="absolute top-0 inset-x-0 bg-[#22d3ee] text-[#020617] text-center py-1 text-xs font-bold uppercase tracking-widest">
                    Oferta de Lanzamiento Beta
                </div>

                <div className="p-10 pt-14">
                    <div className="flex justify-between items-end mb-8 pb-8 border-b border-gray-800">
                        <div>
                            <p className="text-gray-400 text-sm uppercase font-bold mb-2">Acceso Completo</p>
                            <h3 className="text-3xl font-bold text-white">Blueprint V2.0</h3>
                        </div>
                        <div className="text-right">
                            <span className="text-gray-500 line-through text-lg block">$497</span>
                            <span className="text-5xl font-black text-[#22d3ee]">$49</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-10">
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-check text-[#22d3ee] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Curso "Agency Setup" (4 Módulos)</h4>
                                <p className="text-sm text-gray-500">Configuración legal, marca y herramientas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-check text-[#22d3ee] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Masterclass "Visual Heist"</h4>
                                <p className="text-sm text-gray-500">Aprende a usar Nano Banana y Luxe Prompts.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-check text-[#22d3ee] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Script de peticiones para Luxe Prompt Studio</h4>
                                <p className="text-sm text-gray-500">Genera imágenes impresionantes.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-check text-[#22d3ee] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Scripts de Venta B2B</h4>
                                <p className="text-sm text-gray-500">Copia y pega mis mensajes para cerrar clientes.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#22d3ee]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-check text-[#22d3ee] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Script de movimientos de cámara</h4>
                                <p className="text-sm text-gray-500">Dirige tus videos como un profesional.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#fbbf24]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <i className="fa-solid fa-gem text-[#fbbf24] text-xs"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#fbbf24]">BONUS: incluye la GEMs Luxe Prompt Studio</h4>
                                <p className="text-sm text-gray-500">Agentes pre-entrenados para automatizar tu proceso.</p>
                            </div>
                        </div>
                    </div>

                    <a href="https://shop.beacons.ai/danicalderon.tv/49701bb7-34b5-416a-832b-e28246162182" target="_blank" rel="noopener noreferrer" className="w-full bg-[#22d3ee] hover:bg-[#06b6d4] text-[#020617] font-black text-xl py-5 rounded-xl [box-shadow:0_0_20px_rgba(34,211,238,0.3)] hover:[box-shadow:0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                        ACCEDER AHORA <i className="fa-solid fa-rocket"></i>
                    </a>
                    <p className="text-center text-xs text-gray-600 mt-4">Debido a la naturaleza digital del producto, no hay reembolsos.</p>
                </div>
            </div>
        </div>
    </section>

</div>
  );
}

