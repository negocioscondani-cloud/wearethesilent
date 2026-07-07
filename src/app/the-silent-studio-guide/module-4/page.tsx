'use client';
import Link from 'next/link';

const Module4Page = () => {
    
    const baseScreenplay = (
        <div className="screenplay shadow-xl">
            <h5 className="heading">VERSIÓN BASE (ORACLE LUXE)</h5>
            <div className="slugline">ACTO 1: EL ANTIHOOK</div>
            <div className="action">PLANO DETALLE (Macro) de unos dedos ajustando un reloj de lujo o sosteniendo un espresso. Luz natural suave.</div>
            <div className="action">AUDIO: Sonido ambiente de un café de lujo. Silencio casi total.</div>
            <div className="character">TITULAR</div>
            <div className="dialogue">"Tus manos dicen lo que tu boca calla."</div>
            <div className="action">La elegancia no es lo que llevas, es cómo interactúas con el mundo.</div>

            <div className="slugline">ACTO 2: EL BUILD UP</div>
            <div className="action">Cortes rápidos de guantes industriales, toscos, de cuero sintético brillante. AUDIO: Sonido metálico, estridente.</div>
            <div className="action">La mayoría usa guantes para esconderse del clima. El resultado: manos torpes, gestos vulgares.</div>

            <div className="slugline">ACTO 3: EL VALUE</div>
            <div className="action">CAMARA LENTA. El protagonista se desliza el guante Maison. La piel se amolda perfectamente.</div>
            <div className="action">Esto no es protección. Es el Second Skin Protocol. Si no puedes sentir la textura de tu volante, no estás usando los guantes correctos.</div>

            <div className="slugline">ACTO 4: EL CTA</div>
            <div className="action">El protagonista camina hacia un vehículo clásico. Desenfoca la cámara.</div>
            <div className="action">Comenta "Maison" y te enviaré el acceso privado al Lookbook de esta temporada.</div>
        </div>
    );

    const optimizedScreenplay = (
         <div className="screenplay shadow-2xl border-l-4 border-gold">
            <h5 className="heading text-gold">VERSIÓN OPTIMIZADA (NEURO SCORING)</h5>
            <div className="slugline text-gold">ACTO 1: EL ANTIHOOK (SILENCIO CARO)</div>
            <div className="action">MACRO EXTREMO. Textura de piel tocando esfera de reloj fría. Movimiento EXTREMADAMENTE LENTO.</div>
            <div className="action">AUDIO: Silencio total. Leve latido de corazón (bajos profundos).</div>
            <div className="character">NARRADOR (V.O.)</div>
            <div className="dialogue">"Tus manos gritan... lo que tu boca intenta callar."</div>
            <div className="action">TEXTO: El silencio es caro.</div>

            <div className="slugline text-gold">ACTO 2: EL QUIEBRE (EL ENEMIGO)</div>
            <div className="action">GLITCH VISUAL. Manos con guantes abultados, costuras gruesas, movimientos torpes. AUDIO: Tráfico, velcro rasgándose.</div>
            <div className="character">NARRADOR (V.O.)</div>
            <div className="dialogue">"La mayoría usa guantes para esconderse. El resultado es torpeza, volumen innecesario... vulgaridad."</div>

            <div className="slugline text-gold">ACTO 3: LA REVELACIÓN (LA PIEL)</div>
            <div className="action">SLO-MO. El guante se desliza sin arrugas. Los dedos tocan volante de cuero clásico.</div>
            <div className="character">NARRADOR (V.O.)</div>
            <div className="dialogue">"Esto no es abrigo. Es ingeniería táctil. Piel napa italiana, corte quirúrgico. Si no puedes sentir el relieve de tu firma... llevas una manopla."</div>

            <div className="slugline text-gold">ACTO 4: EL CIERRE (LA LLAVE)</div>
            <div className="action">Gesto de cierre. Fondo desenfocado. AUDIO: Sonido de CLICK de cerradura pesada.</div>
            <div className="character">NARRADOR (V.O.)</div>
            <div className="dialogue">"El lujo no se explica. Se desbloquea."</div>
            <div className="action" style={{ fontWeight: 'bold', color: 'var(--gold)', marginTop: '20px' }}>TEXTO: COMENTA "MAISON"<br/>Te enviaré la llave del 'Private Fitting Room'.</div>
        </div>
    );

    return (
        <main>
            <section className="pt-40 pb-20 px-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                
                <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Módulo 04: <br/>Neuro-Scripting.</h2>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
                        Ingeniería de Textos y Guiones para el cerebro primario. Aprende a escribir para vender por percepción, no por precio.
                    </p>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-8 border-l-4 border-gold">
                            <p className="text-xs uppercase tracking-widest font-bold mb-4 text-black">Acceso a Herramientas de Texto</p>
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-2">1. The Oracle Luxe Agency (Escritura)</h5>
                                    <div className="flex gap-2">
                                        <a href="https://gemini.google.com/gem/1_vcvq1_mlatEwzeTojAGYEfYIrIDn9Gg?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-premium bg-black text-white py-2 px-4 text-[9px]">Gemini</a>
                                        <a href="https://chatgpt.com/g/g-68d1fdc07750819194d1b1f0296bdb49-the-oracle-luxe-agency" target="_blank" rel="noopener noreferrer" className="btn-premium border border-black py-2 px-4 text-[9px]">ChatGPT</a>
                                    </div>
                                    <span className="gemini-note">Usa Gemini Pro / Reasoning. Evita la opción rápida.</span>
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-[10px] uppercase font-bold text-gray-400 mb-2">2. Neuro Scoring (Auditoría)</h5>
                                    <div className="flex gap-2">
                                        <a href="https://gemini.google.com/gem/11E9UJgS-187KwlSs4bM73hIHrCEgySzr?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-premium bg-gold text-black py-2 px-4 text-[9px]">Gemini</a>
                                        <a href="https://chatgpt.com/g/g-69165524f5a88191bb3af1185691da34-neuroscoring-ugc-optimizer" target="_blank" rel="noopener noreferrer" className="btn-premium border border-gold py-2 px-4 text-[9px] text-black">ChatGPT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* The Process */}
        <section className="py-24 px-8 bg-gray-50 text-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl serif italic">El Flujo de Ingeniería</h3>
                    <p className="text-gray-400 mt-4 uppercase text-[10px] tracking-[0.3em]">Del Concepto a la Ciencia</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 border border-gray-200">
                        <span className="text-gold serif italic text-3xl">01</span>
                        <h4 className="serif italic text-xl mt-4 mb-4">La Idea Base</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">Iniciamos con: "Un anuncio para mi producto X que sea un comercial estético de lujo o editorial elegante".</p>
                        <Link href="/the-silent-studio-guide/script-structures">
                            <button className="btn-premium border border-black px-4 py-2 text-[8px] w-full">Ver Estructuras de Guiones</button>
                        </Link>
                    </div>
                    <div className="bg-white p-10 border border-gray-200">
                        <span className="text-gold serif italic text-3xl">02</span>
                        <h4 className="serif italic text-xl mt-4 mb-4">Inspiración Viral</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">Conversamos con la IA usando una base de ganchos que detienen el scroll biológicamente.</p>
                        <Link href="/the-silent-studio-guide/viral-hooks">
                            <button className="btn-premium bg-black text-white px-4 py-2 text-[8px] w-full mt-2">Ver Biblioteca de Ganchos Virales</button>
                        </Link>
                    </div>
                    <div className="bg-white p-10 border border-gray-200">
                        <span className="text-gold serif italic text-3xl">03</span>
                        <h4 className="serif italic text-xl mt-4 mb-4">Neuro Auditoría</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6">Pasamos el filtro de Neuro Scoring para aplicar dominancia temporal y sesgos de exclusividad.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Script Evolution: Comparison Column */}
        <section className="py-32 px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <span className="text-gold font-bold uppercase text-[10px] tracking-[0.4em]">Evolución del Scripting</span>
                    <h2 className="text-5xl md:text-7xl serif italic mt-4">Caso: Maison Leatherware.</h2>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm">Observa cómo la narrativa técnica se transforma en una herramienta de dominancia biológica.</p>
                </div>

                {/* Technical Sheets Row */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/5 p-8 border border-white/10">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-6 italic">Iteración 01: The Oracle Luxe (Borrador Narrativo)</h4>
                        <ul className="space-y-3 text-[11px] text-gray-500 leading-relaxed">
                            <li><strong>Ángulo:</strong> The Tactile Authority. El éxito se siente en las manos.</li>
                            <li><strong>Mecanismo:</strong> Second Skin Protocol (Ajuste que desaparece).</li>
                            <li><strong>CTA:</strong> Dirigir al Lookbook Interactivo.</li>
                        </ul>
                    </div>
                    <div className="bg-gold p-8 text-black">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 italic">Iteración 02: Neuro-Optimizado (A+)</h4>
                        <ul className="space-y-3 text-[11px] font-medium leading-relaxed">
                            <li><strong>Ángulo:</strong> Dominancia Temporal + Sesgo de Fruta Prohibida.</li>
                            <li><strong>Mecanismo:</strong> Ingeniería Táctil (Justificación lógica del precio).</li>
                            <li><strong>CTA:</strong> "La llave del Private Fitting Room" (Exclusividad extrema).</li>
                        </ul>
                    </div>
                </div>

                {/* Scripts Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                   {baseScreenplay}
                   {optimizedScreenplay}
                </div>

                {/* Optimization Report */}
                <div className="mt-16 bg-white/5 p-10 border border-white/10">
                    <h3 className="serif italic text-2xl mb-8">¿Por qué este cambio genera más ventas?</h3>
                    <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-400 leading-loose">
                        <div>
                            <p className="mb-4 text-gold font-bold uppercase tracking-widest text-[10px]">1. Dominancia Temporal</p>
                            <p>Ralentizar la primera escena asocia la marca con el estatus real. En la psicología evolutiva, el poder no tiene prisa. Filtramos a los impulsivos y atraemos a los curadores.</p>
                        </div>
                        <div>
                            <p className="mb-4 text-gold font-bold uppercase tracking-widest text-[10px]">2. El Framing de la Fruta Prohibida</p>
                            <p>Pasar de un "Lookbook" (PDF común) a una "Llave del Private Fitting Room" activa el deseo de exclusividad. No es información, es acceso restringido.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
};

export default Module4Page;
