'use client';
import Link from 'next/link';
import Image from 'next/image';

const Module5Page = () => {

  const motionPortfolioVideos = [
    'http://studioboom.online/wp-content/uploads/2026/02/Avatar-IV-Video-85.mp4',
    'http://studioboom.online/wp-content/uploads/2026/02/Avatar-IV-Video-84.mp4',
    'http://studioboom.online/wp-content/uploads/2026/02/scene_description_the_202510151620_skqr.mp4',
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__a-closeup-shot-of-a-young-woman-leaning-over-a-des__86068.mp4',
    'http://studioboom.online/wp-content/uploads/2026/02/freepik__el-hombre-se-come-un-pescado-y-lo-disfruta-y-luego__77272.mp4',
    'http://studioboom.online/wp-content/uploads/2026/02/cuttingshapes-1.mp4',
  ];

  const galleryImages = [
    {
      src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093856.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110938.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-wall-papers.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-silents-UGC.avif',
      alt: 'Silent Character',
    },
    {
      src: 'http://studioboom.online/wp-content/uploads/2025/12/Neuro-score.avif',
      alt: 'Silent Character',
    }
  ];

  return (
    <main>
        {/* HERO SECTION */}
        <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 hero-bg">
            <div className="max-w-4xl space-y-6">
                <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Módulo 05: Protocolo de Creación</span>
                <h1 className="text-7xl md:text-9xl font-light leading-tight italic">Embajador <br/><span className="not-italic">Digital.</span></h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed serif italic">
                    Aplica para: Humanizar la marca sin grabarte a ti mismo.
                </p>
                <div className="pt-12">
                    <a href="#fase-estratégica" className="btn-premium border border-cream px-10 py-5">Comenzar Protocolo</a>
                </div>
            </div>
        </header>

        <main className="bg-white text-black">
            {/* INTRO TOOLS */}
            <section className="py-24 px-8 border-b border-gray-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <p className="text-xl md:text-2xl serif italic leading-relaxed">
                        Este proceso se divide en dos fases críticas: la Definición Estratégica (el alma) e Infraestructura Técnica (el cuerpo).
                    </p>
                    <div className="bg-gray-50 p-10 border-l-4 border-gold shadow-sm">
                        <p className="text-[10px] uppercase tracking-widest font-bold mb-4">Acceso a Gema UGC Society</p>
                        <div className="flex flex-col">
                            <a href="https://gemini.google.com/gem/1hIvDXs8BsxVnIxgp9UErej2oVkAriXpa?usp=sharing" target="_blank"  rel="noopener noreferrer" className="btn-premium bg-black text-white py-4 px-6 text-[10px] w-full">Configurar Alma del Avatar</a>
                            <span className="gemini-note">Usa Gemini Pro o Reasoning. Evita la versión rápida para una base sólida.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FASE 1: EL ALMA */}
            <section id="fase-estratégica" className="py-32 px-8 bg-[#fdfdfb]">
                <div className="max-w-6xl mx-auto">
                    <div className="phase-block">
                        <span className="text-gold font-bold uppercase text-[10px] tracking-[0.3em] mb-4 block">Fase 01</span>
                        <h2 className="text-5xl md:text-7xl serif italic mb-16 leading-tight">Definiendo el Alma <br/>de tu Marca.</h2>
                        
                        <div className="grid md:grid-cols-2 gap-24">
                           <div className="space-y-12">
                                <div>
                                    <h4 className="serif italic text-2xl border-b border-gold/30 pb-4 mb-6">1. El Value Canvas (El filtro de la relevancia)</h4>
                                    <div className="space-y-6 text-sm text-gray-500 leading-relaxed">
                                        <p>El algoritmo actual prioriza el tiempo de retención. Si tu contenido no detiene el scroll y aporta valor inmediato (educativo, inspiracional o de entretenimiento), eres invisible. El Value Canvas es el filtro por el que pasamos cada idea para asegurar que no sea "ruido", sino una señal clara de autoridad.</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong className="text-gray-800">Audiencia:</strong> Clientes sofisticados que valoran la calidad, pero que actualmente ven tu marca como una commodity (una opción más en la lista), no como la referencia indiscutible.</li>
                                            <li><strong className="text-gray-800">Problema:</strong> Existe una disonancia cognitiva. Tu producto es excelente, pero tu contenido visual luce amateur o genérico frente a la competencia. Esto baja la percepción de valor y te obliga a competir por precio.</li>
                                            <li><strong className="text-gray-800">Solución:</strong> Implementar un sistema de contenido "Premium Autónomo". Creamos piezas visuales con una narrativa y estética tan pulidas que elevan la percepción de la marca al instante, generando confianza subconsciente antes de que el cliente lea la primera palabra.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="serif italic text-2xl border-b border-gold/30 pb-4 mb-6">2. El Método de las 4Ps (La construcción del ADN)</h4>
                                    <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                                        <p>Antes de grabar un solo segundo, definimos los pilares que harán que tu marca sea inconfundible. Según la metodología de Guille Collado, esto es lo que separa a las cuentas virales de las que se estancan,.</p>
                                        <div className="space-y-3">
                                            <div className="p-4 bg-white border border-gray-100 shadow-sm">
                                                <p><strong className="text-gold font-bold uppercase text-[10px] mr-2">Personaje (La Cara):</strong></p>
                                                <p className="mt-2 text-xs"><strong>Definición:</strong> El Arquetipo del Fundador. No se trata de actuar, sino de potenciar tus rasgos reales.</p>
                                                <p className="mt-1 text-xs"><strong>Enfoque:</strong> Puede ser el Artesano Experto (obsesionado con los detalles y la técnica) o el Visionario Joven (disruptivo y enérgico). La clave es la autenticidad: si eres técnico, no intentes ser un showman; sé el mejor técnico del mundo.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-100 shadow-sm">
                                                <p><strong className="text-gold font-bold uppercase text-[10px] mr-2">Producto (El Vehículo):</strong></p>
                                                <p className="mt-2 text-xs"><strong>Definición:</strong> Presentación Visual Coherente con el ADN High-Ticket.</p>
                                                <p className="mt-1 text-xs"><strong>Enfoque:</strong> El producto no es solo el objeto, sino cómo se muestra. Usamos la regla de la composición cinematográfica (profundidad, iluminación, líneas guía) para que el producto luzca "caro" en pantalla.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-100 shadow-sm">
                                                <p><strong className="text-gold font-bold uppercase text-[10px] mr-2">Posicionamiento (El Lugar en la Mente):</strong></p>
                                                <p className="mt-2 text-xs"><strong>Definición:</strong> Lujo, Innovación o Confianza Absoluta.</p>
                                                <p className="mt-1 text-xs"><strong>Enfoque:</strong> Definimos qué lugar ocupas. ¿Eres la opción segura? ¿Eres la opción exclusiva? Tu contenido debe gritar esto sin decirlo explícitamente.</p>
                                            </div>
                                            <div className="p-4 bg-white border border-gray-100 shadow-sm">
                                                <p><strong className="text-gold font-bold uppercase text-[10px] mr-2">Personalidad (El "Look & Feel"):</strong></p>
                                                <p className="mt-2 text-xs"><strong>Definición:</strong> Tono directo/técnico o cálido/aspiracional.</p>
                                                <p className="mt-1 text-xs"><strong>Enfoque:</strong> Aquí entra el branding auditivo y visual. Definimos una paleta de colores, tipografías y un diseño sonoro (música y efectos) que sean reconocibles al instante.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="serif italic text-2xl border-b border-gold/30 pb-4 mb-6">Ejemplo Práctico: "Relojería Volant" (Marca Ficticia)</h4>
                                    <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                                        <p>Imaginemos una marca de relojes artesanales de 3.000€ que no logra vender online porque sus videos parecen hechos por un aficionado.</p>
                                        <h5 className="font-bold text-gray-800">Aplicación de la Estrategia:</h5>
                                        <ol className="list-decimal pl-5 space-y-4">
                                            <li>
                                                <strong>Diagnóstico (Value Canvas):</strong>
                                                <ul className="list-disc pl-5 mt-2">
                                                    <li>Problema: Sus videos actuales son solo "fotos en movimiento" del reloj. No educan ni inspiran.</li>
                                                    <li>Solución: Crear una serie de Reels mostrando el "detrás de cámaras" del ensamblaje (educativo/satisfactorio) para justificar el precio mediante la demostración de maestría.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Ejecución (4Ps):</strong>
                                                <ul className="list-disc pl-5 mt-2">
                                                    <li>Personaje: El maestro relojero (Artesano Experto). No baila tendencias. Sale con su lupa, manos firmes, voz tranquila y técnica. Genera autoridad.</li>
                                                    <li>Personalidad (Look & Feel): Visual: Iluminación oscura y contrastada (Lujo), planos macro extremos donde se ve el engranaje girar (Calidad). Audio: Nada de música pop en tendencia. Usamos sonidos ASMR del metal chocando, el tictac amplificado y música clásica moderna.</li>
                                                    <li>Producto: No se vende "un reloj", se vende "tiempo heredable".</li>
                                                    <li>Posicionamiento: "Para quien no necesita mirar la hora, sino admirar el tiempo".</li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <p className="p-4 bg-white border-l-2 border-gold font-semibold">Resultado: El cliente deja de comparar el reloj con opciones baratas. El contenido visual ha elevado la percepción de valor, haciendo que el precio parezca justificado e incluso atractivo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative space-y-4">
                                <div className="aspect-9-16 shadow-2xl overflow-hidden border-[16px] border-white">
                                    <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58444-scaled.avif" className="comparison-img" alt="Referencia Principal" fill/>
                                </div>
                                <div className="aspect-9-16 shadow-2xl overflow-hidden border-[16px] border-white">
                                    <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__metadata-confidencescore-highimagetype-photographp__75650-scaled.avif" className="comparison-img" alt="Referencia Secundaria" fill/>
                                </div>
                                <p className="text-[9px] uppercase tracking-widest text-gold mt-4 text-right italic font-bold">Referencia Principal: Estilo Vanity Fair / Alta Dirección</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FASE 2: EJECUCIÓN TÉCNICA */}
            <section className="py-32 px-8 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em]">Fase 02</span>
                        <h2 className="text-5xl md:text-8xl serif italic mt-4">Ejecución Técnica.</h2>
                    </div>

                    {/* Paso 1 */}
                    <div className="grid md:grid-cols-2 gap-24 items-center mb-48">
                        <div className="space-y-8">
                            <span className="text-gold serif italic text-3xl">01</span>
                            <h3 className="serif italic text-4xl">Paso 1: Generación de la Base Visual (High-End)</h3>
                            <p className="text-gray-400 text-sm leading-loose">
                              Utiliza Nano Banana Pro o Seedream 4.5 para crear la imagen estática de tu personaje basándote en los atributos definidos en las 4Ps. Estas herramientas son esenciales para lograr texturas de piel hiperrealistas y evitar el "efecto plástico".
                            </p>
                            <p className="text-xs text-gray-500 italic">Nota: Asegúrate de que la iluminación y el estilo coincidan con el "Posicionamiento" de tu marca (lujoso, técnico, etc.). Si usas Seedream 4.5, aprovecha la coherencia de personajes para mantener el mismo rostro.</p>
                            <div className="flex gap-4">
                                <a href="https://www.freepik.es/app" target="_blank" rel="noopener noreferrer" className="tool-link text-[10px] font-bold">Freepik Pikaso &rarr;</a>
                            </div>
                        </div>
                        <div className="aspect-9-16 shadow-2xl border border-white/10 relative"><Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" className="comparison-img" alt="Ejemplo de Proceso" fill/></div>
                    </div>

                    {/* Paso 2: Animación y Motion Control */}
                    <div className="mb-48 p-12 bg-zinc-900/50 border border-white/5 rounded-sm">
                        <div className="text-center mb-16">
                            <span className="text-gold serif italic text-3xl">02</span>
                            <h3 className="serif italic text-4xl mt-4">Paso 2: Animación y Movimiento (Actualizado)</h3>
                            <p className="text-gray-500 text-sm mt-4 uppercase tracking-widest">Sincronización de Movimiento Vertical</p>
                        </div>
                        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">Aquí es donde transformamos una imagen estática en un activo de video dinámico. Tienes tres rutas principales según el resultado deseado, ahora potenciadas por la nueva generación de modelos:</p>
                        
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            <div className="bg-white/5 p-6 border border-white/10 rounded-sm space-y-4">
                              <p className="text-gold text-sm font-bold uppercase">Opción A: Animación Generativa "All-in-One" (Kling 2.6 / VEO 3.1)</p>
                              <p className="text-[12px] text-gray-400 leading-relaxed">Ideal para crear escenas completas donde el avatar habla y actúa basándose puramente en un guion (texto) o un audio, con sincronización labial nativa (sin herramientas externas).</p>
                              <div className="text-[12px] text-gray-400 space-y-2">
                                <p><strong>Herramientas:</strong> Kling 2.6 o VEO 3.1.</p>
                                <p><strong>Proceso:</strong></p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Sube tu imagen base creada en el Paso 1.</li>
                                  <li>Introduce el Guion (Prompt de Texto) o sube tu Audio.</li>
                                  <li>Describe la acción en el prompt (ej. "El personaje habla con autoridad, gesticula suavemente con las manos").</li>
                                </ul>
                                <p><strong>Resultado:</strong> Kling 2.6 generará el video con el movimiento y el lip-sync (sincronización de labios) integrados en un solo paso.</p>
                              </div>
                            </div>
                            <div className="bg-white/5 p-6 border border-white/10 rounded-sm space-y-4">
                              <p className="text-gold text-sm font-bold uppercase">Opción B: Motion Control (Tu Actuación, Su Rostro)</p>
                              <p className="text-[12px] text-gray-400 leading-relaxed">Ideal para cuando necesitas gestos humanos muy específicos o un estilo de comunicación natural y orgánico que la IA sola no puede replicar.</p>
                              <div className="text-[12px] text-gray-400 space-y-2">
                                <p><strong>Herramienta:</strong> <a href="https://app.klingai.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Kling Motion Control</a>.</p>
                                <p><strong>Proceso:</strong></p>
                                <ul className="list-disc pl-5 space-y-1">
                                  <li><strong>Grábate a ti mismo:</strong> Graba un video tuyo realizando los movimientos, gestos y expresiones exactas que quieres que tenga el avatar. No importa tu apariencia, solo tu movimiento.</li>
                                  <li><strong>Transferencia:</strong> En Kling Motion Control, sube la imagen de tu avatar (Target) y tu video grabado (Reference).</li>
                                  <li><strong>Generación:</strong> La IA copiará tu "performance" corporal y facial y la aplicará a la imagen del avatar, logrando un realismo de movimiento superior.</li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="space-y-4">
                              <div className="aspect-9-16 bg-black overflow-hidden border border-white/5 relative">
                                <video className="video-content" autoPlay muted loop playsInline>
                                  <source src="http://studioboom.online/wp-content/uploads/2026/02/cuttingshapes-1.mp4" type="video/mp4"></source>
                                </video>
                              </div>
                              <p className="text-[8px] text-center uppercase tracking-widest text-gray-500 font-bold">1. Referencia (Performance)</p>
                            </div>
                            <div className="space-y-4">
                              <div className="aspect-9-16 overflow-hidden border border-white/5 relative">
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__wide-shot-a-full-body-film-photograph-of-a-woman-i__75744.avif" className="comparison-img" alt="Target Avatar" fill />
                              </div>
                              <p className="text-[8px] text-center uppercase tracking-widest text-gray-500 font-bold">2. Target (Avatar IA)</p>
                            </div>
                            <div className="space-y-4">
                              <div className="aspect-9-16 bg-black overflow-hidden border border-gold/30 relative">
                                <video className="video-content" autoPlay muted loop playsInline>
                                  <source src="http://studioboom.online/wp-content/uploads/2026/02/1895f1bc-a342-4997-b9c9-984d27bf684f.mp4" type="video/mp4"></source>
                                </video>
                              </div>
                              <p className="text-[8px] text-center uppercase tracking-widest text-gold font-bold">3. Resultado Final Vertical</p>
                            </div>
                        </div>
                    </div>
                     {/* Paso 3 */}
                    <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
                        <div className="space-y-8">
                            <span className="text-gold serif italic text-3xl">03</span>
                             <h3 className="serif italic text-4xl">Paso 3: Voz y Sincronización (Lip-Sync Especializado)</h3>
                            <div className="text-gray-400 text-sm leading-loose">
                               <p className="mb-4">Usar este paso si optaste por generar solo video en el paso anterior (sin diálogo) o si necesitas una sincronización labial de calidad estudio.</p>
                                <p className="mb-2"><strong>Herramienta:</strong> HeyGen.</p>
                                <p><strong>Proceso:</strong></p>
                                <ul className="list-disc list-inside mt-2 space-y-2">
                                    <li><strong>Audio:</strong> Sube un archivo de audio pregrabado (puede ser tu voz o una voz sintética de alta calidad creada en ElevenLabs).</li>
                                    <li><strong>Imagen/Video:</strong> Sube la imagen de tu avatar generado en el paso 2 a hey gen y dale en crear.. nota: puedes dar un prompt para expresiones y seleccionar la calidad 720p o 1080p</li>
                                    <li><strong>Generación:</strong> HeyGen animará el rostro y sincronizará los labios perfectamente con el audio proporcionado.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-xs mx-auto">
                            <div className="aspect-9-16 shadow-2xl border border-white/10 relative">
                                <iframe className="w-full h-full" src="https://www.youtube.com/embed/MzmsBPzPwvw?si=vR9429i2gA_cT3h5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    {/* MOTION PORTFOLIO */}
                    <div className="py-24 border-t border-white/5">
                      <h3 className="text-4xl md:text-6xl serif italic text-center mb-20 text-gold">
                        The Motion Portfolio.
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {motionPortfolioVideos.map((videoSrc, index) => (
                          <div key={index} className="aspect-9-16 bg-black overflow-hidden relative">
                            <video className="video-content" autoPlay muted loop playsInline>
                              <source src={videoSrc} type="video/mp4" />
                            </video>
                          </div>
                        ))}
                      </div>
                    </div>

                     {/* THE SILENT GALLERY */}
                    <div className="py-32">
                        <h3 className="text-4xl serif italic text-center mb-20">The Silent Characters.</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {galleryImages.map((image, index) => (
                              <div key={index} className="aspect-9-16 shadow-2xl border border-white/5 opacity-80 hover:opacity-100 transition relative">
                                  <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="comparison-img"
                                  />
                              </div>
                          ))}
                        </div>
                    </div>

                    {/* KLING 3 ANEXO */}
                    <div className="mt-40 p-12 bg-white/5 border border-white/10 rounded-sm">
                      <h3 className="serif italic text-3xl text-gold mb-8">
                        🌟 Anexo: Novedades Clave de Kling 3
                      </h3>
                       <div className="grid md:grid-cols-3 gap-12 text-xs leading-loose text-gray-400">
                        <div>
                          <p className="text-white font-bold uppercase tracking-widest mb-4 border-b border-gold/30 pb-2">
                            Sincronización Labial Nativa (Native Lip-Sync)
                          </p>
                          <p>
                            A diferencia de versiones anteriores, Kling 3 entiende la fonética. Puede hacer que el personaje hable directamente desde la generación del video (Opción A), integrando micro-gestos faciales.
                          </p>
                        </div>
                        <div>
                          <p className="text-white font-bold uppercase tracking-widest mb-4 border-b border-gold/30 pb-2">
                            Coherencia Temporal Extrema
                          </p>
                          <p>
                            El avatar no se deforma. La consistencia del rostro se mantiene sólida incluso en clips largos (10s+) o cuando el personaje gira la cabeza.
                          </p>
                        </div>
                        <div>
                          <p className="text-white font-bold uppercase tracking-widest mb-4 border-b border-gold/30 pb-2">
                            Contexto Emocional
                          </p>
                          <p>
                            Si el guion es serio o alegre, Kling 3 ajusta automáticamente la expresión facial para que coincida con el tono del texto.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
        </main>
    </main>
  );
};
export default Module5Page;

    