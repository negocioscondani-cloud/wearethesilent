'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Module7Page = () => {
    return (
        <main className="bg-white text-black">
            {/* Header */}
            <section className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Módulo 07: <br/>Edición Premium, Subtítulos y Sonido.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
                        Objetivo del módulo: convertir material “bueno” en material publicable a nivel agencia. Esto significa que el video no solo se ve bonito: se entiende rápido, se siente fluido y termina con intención. El lujo aquí no es “más efectos”, es más control: ritmo, claridad, audio y estándar.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-8 bg-gray-50 text-black">
                <div className="max-w-4xl mx-auto space-y-20">
                    
                    {/* 7.1 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">7.1 —</span> El estándar premium (lo que NO se negocia)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Antes de tocar la línea de tiempo, necesitas un criterio. La mayoría edita “a ojo” y por eso el resultado cambia cada vez. Un estándar premium evita eso: te da una forma fija de decidir.</p>
                        <div className="space-y-8">
                            <div className="p-6 bg-white border-l-4 border-gray-200">
                                <h4 className="font-bold text-lg mb-2">Una sola idea por pieza</h4>
                                <p className="text-gray-600">Un video corto funciona como un golpe directo, no como un discurso largo. Si en la pieza estás intentando enseñar dos cosas, la mente del espectador se dispersa y la retención cae. La regla es simple: una idea = un video. Si detectas dos ideas, no lo fuerces: separa y tendrás dos piezas mejores en vez de una confusa.</p>
                            </div>
                            <div className="p-6 bg-white border-l-4 border-gray-200">
                                <h4 className="font-bold text-lg mb-2">Ritmo sin prisa (corte limpio, sin brincos raros)</h4>
                                <p className="text-gray-600">“Rápido” no es lo mismo que “apresurado”. Un acabado de agencia se nota en que el video se mueve con intención, no por ansiedad. El ritmo premium es: cortes limpios, sin saltos incómodos, sin frases truncadas y sin que se sienta que algo fue cortado “por cortar”. La meta es que el espectador ni note la edición: solo siente fluidez.</p>
                            </div>
                            <div className="p-6 bg-white border-l-4 border-gray-200">
                                <h4 className="font-bold text-lg mb-2">Audio entendible (la voz se entiende en celular sin esfuerzo)</h4>
                                <p className="text-gray-600">Si la voz no se entiende, la pieza pierde autoridad. El estándar premium exige que la voz sea clara sin subirle volumen al máximo, incluso con ruido alrededor. No es negociable: la voz manda. Todo lo demás se acomoda para que la voz se entienda.</p>
                            </div>
                             <div className="p-6 bg-white border-l-4 border-gray-200">
                                <h4 className="font-bold text-lg mb-2">Subtítulos legibles (se leen en 1 segundo)</h4>
                                <p className="text-gray-600">El subtítulo premium no es para “decorar”; es para facilitar consumo. El usuario está scrolleando, no estudiando. Por eso el estándar es: se lee en 1 segundo. Si la gente tiene que pausar o esforzarse, perdiste.</p>
                            </div>
                            <div className="p-6 bg-white border-l-4 border-gray-200">
                                <h4 className="font-bold text-lg mb-2">Final con intención (no se apaga)</h4>
                                <p className="text-gray-600">Un video que se “apaga” desperdicia el momento más valioso: el cierre. El estándar premium exige un final que haga una de tres cosas: empuje a una acción (CTA), deje una idea memorable (frase final), o cierre con una promesa de la siguiente pieza (continuidad). Si termina como “ya… eso era”, se siente amateur.</p>
                            </div>
                        </div>
                    </div>

                    {/* 7.2 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">7.2 —</span> Flujo de edición premium (SOP)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Este es tu procedimiento fijo. Repetible. El secreto de las agencias no es que “editan mejor”, es que siguen un orden que evita errores y acelera.</p>
                        <div className="space-y-4">
                            <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 1 — Ordena tu material (3 min)</p>
                                <p className="text-xs text-gray-500 mb-2">Aquí no editas: seleccionas.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Elige el mejor take de voz o el mejor audio generado. “Mejor” no es el más largo: es el más claro, con mejor energía y sin trabas.</li>
                                    <li>Marca el inicio real: donde el mensaje ya está entrando. Cortas respiraciones largas, “ehh”, “bueno”, y todo lo que no aporta.</li>
                                    <li>Identifica 3–6 puntos donde añadir b-roll o refuerzo visual. No inventes: solo marca momentos donde el ojo necesita cambio para sostener atención (por ejemplo: promesa, prueba, paso clave, payoff).</li>
                                </ul>
                                <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado de este paso: ya sabes qué usar y dónde reforzar.</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 2 — Arma la base (8–15 min)</p>
                                <p className="text-xs text-gray-500 mb-2">Aquí construyes la columna vertebral: voz + estructura.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Coloca la voz en timeline.</li>
                                    <li>Haz cortes para eliminar silencios, muletillas y repeticiones.</li>
                                    <li>Asegura que el primer segundo diga algo. El primer segundo debe aportar promesa, contraste o curiosidad. Si arranca tibio, se cae la retención.</li>
                                </ul>
                                <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado: un video entendible aunque esté “feo”.</p>
                            </div>
                             <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 3 — Ritmo (5–10 min)</p>
                                <p className="text-xs text-gray-500 mb-2">Este paso convierte “entendible” en “adictivo”.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>La regla práctica: cada 1.5 a 3 segundos debe pasar algo. No significa un efecto; significa un cambio que renueve atención: corte, zoom suave, b-roll, texto, cambio de plano, gesto, encuadre.</li>
                                    <li>Si un tramo se siente lento, aplica el método simple: recorta 10–20% del tiempo sin miedo. Casi siempre el contenido sobrevive y el ritmo mejora.</li>
                                </ul>
                                 <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado: fluidez sin ansiedad.</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 4 — Subtítulos (10–15 min)</p>
                                 <p className="text-xs text-gray-500 mb-2">Los subtítulos premium funcionan como “guía de lectura”.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>No son palabra por palabra. Son fraseados: mantienen sentido, no literalidad.</li>
                                    <li>1 idea por línea: si mezclas ideas, la lectura se vuelve pesada.</li>
                                    <li>Máximo 2 líneas en pantalla: más de eso se siente “párrafo” y la gente se va.</li>
                                    <li>Resalta solo lo importante: una palabra clave o microfrase por bloque. El highlight funciona como subrayado, no como confeti.</li>
                                </ul>
                                 <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado: se entiende aunque el usuario no tenga sonido.</p>
                            </div>
                             <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 5 — Sonido (5–8 min)</p>
                                 <p className="text-xs text-gray-500 mb-2">Un video premium se siente caro por el audio, no por el color.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Voz al frente: todo lo demás existe para sostener la voz.</li>
                                    <li>Música solo si suma energía o elegancia. Si no suma, estorba.</li>
                                    <li>SFX sutiles para cortes, textos o payoffs: pequenos acentos que guían la atención.</li>
                                    <li>Si el audio compite con la voz: baja la música, no la voz. La voz es el producto.</li>
                                </ul>
                                 <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado: autoridad inmediata.</p>
                            </div>
                             <div className="p-6 bg-white border border-gray-100 shadow-sm">
                                <p className="font-bold mb-2">Paso 6 — Acabado (3–5 min)</p>
                                 <p className="text-xs text-gray-500 mb-2">Aquí das el look “listo para publicar”.</p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Corrección ligera de color: lo suficiente para que se vea consistente, no para que parezca filtro.</li>
                                    <li>Nitidez moderada: el exceso se ve artificial.</li>
                                    <li>Revisa safe zones: que el texto no lo tape la interfaz (likes, caption, botones). Un error típico es poner subtítulos “demasiado abajo”.</li>
                                </ul>
                                 <p className="font-semibold mt-4 p-2 bg-gray-100 inline-block text-sm">Resultado: pieza final con estándar.</p>
                            </div>
                        </div>
                    </div>

                    {/* 7.3 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">7.3 —</span> Subtítulos “de lujo” (reglas de oro)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Los subtítulos premium se sienten caros porque son sobrios, claros y bien jerarquizados.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white border-l-2 border-gray-200">
                                <h4 className="font-bold mb-2">Tipografía limpia</h4>
                                <p className="text-sm text-gray-600">Una sola familia. Sin estilos raros. Si parece “plantilla de app gratuita”, baja percepción de valor.</p>
                            </div>
                             <div className="p-6 bg-white border-l-2 border-gray-200">
                                <h4 className="font-bold mb-2">Tamaño grande</h4>
                                <p className="text-sm text-gray-600">En móvil, pequeño se lee como “barato” y además obliga esfuerzo. El lujo es comodidad.</p>
                            </div>
                             <div className="p-6 bg-white border-l-2 border-gray-200">
                                <h4 className="font-bold mb-2">Contraste alto</h4>
                                <p className="text-sm text-gray-600">Texto claro con sombra suave o caja sutil. La clave: que se lea sin pensar.</p>
                            </div>
                             <div className="p-6 bg-white border-l-2 border-gray-200">
                                <h4 className="font-bold mb-2">Velocidad correcta</h4>
                                <p className="text-sm text-gray-600">El texto debe permanecer lo suficiente para leerse sin pausar. Si desaparece rápido, genera estrés.</p>
                            </div>
                             <div className="p-6 bg-white border-l-2 border-gray-200">
                                <h4 className="font-bold mb-2">Prioridad: claridad</h4>
                                <p className="text-sm text-gray-600">El subtítulo no compite con el video: lo acompaña. Es un asistente, no el protagonista.</p>
                            </div>
                            <div className="p-6 bg-white border-l-2 border-gold">
                                <h4 className="font-bold text-gold mb-2">Formato recomendado</h4>
                                <p className="text-sm text-gray-600">Bloques de 2 a 6 palabras por aparición. Que suene como frase natural.</p>
                                <div className="mt-4 p-4 bg-gray-100 text-sm font-mono text-gray-500">
                                    <p>“Esto es lo que nadie te dice”</p>
                                    <p>“Si haces esto, sube tu retención”</p>
                                    <p>“Este detalle lo cambia todo”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 7.4 */}
                    <div className="p-8 bg-black text-white rounded-md">
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">7.4 —</span> Diseño sonoro (lo que eleva el video)</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">El sonido es el “acabado invisible” que hace que el contenido se sienta de marca. Tu audio tiene 3 capas:</p>
                        <div className="space-y-4 text-gray-300">
                            <p><strong>1) Voz (la capa principal):</strong> Debe estar limpia, presente, sin saturación y sin sensación de “grabado lejos”.</p>
                            <p><strong>2) Ambiente / música (sensación):</strong> No está para distraer: está para crear atmósfera. Si el tema es serio, la música no puede sonar juguetona. Si el tema es elegante, no puede sonar genérica.</p>
                            <p><strong>3) SFX (atención y énfasis):</strong> Los efectos no deben sonar “infantiles”. Deben ser finos, cortos y puntuales. Piensa en acentos, no en caricatura.</p>
                            <p className="font-semibold text-gold mt-4">El silencio también es herramienta: Un segundo de silencio antes del payoff aumenta impacto. El lujo usa el vacío para crear tensión.</p>
                            <div className="pt-4 border-t border-gold/20">
                              <h4 className="font-bold text-lg mb-2">Checklist premium:</h4>
                              <ul className="list-disc list-inside text-sm text-gray-300">
                                <li>Voz sin distorsión</li>
                                <li>Música sin tapar consonantes</li>
                                <li>SFX sobrios</li>
                                <li>Silencio usado con intención</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* 7.5 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">7.5 —</span> Exportación y control de calidad (QA)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Este QA te evita publicar piezas “casi listas”. Se hace en 60 segundos.</p>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>¿Se entiende sin sonido? Si no, los subtítulos no están cumpliendo.</li>
                            <li>¿Se entiende solo con sonido? Si no, el audio está sucio o la dicción no se sostiene.</li>
                            <li>¿El primer segundo atrapa? Si no, cambia el inicio aunque el resto esté bien.</li>
                            <li>¿Hay cierre claro? Si no, agrega CTA o frase final.</li>
                            <li>¿Se ve bien en 1080x1920? Si pierde nitidez o se ve raro, ajusta exportación.</li>
                        </ul>
                        <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold mt-8 inline-block">Resultado: publicas con seguridad.</p>
                    </div>

                    {/* 7.6 & 7.7 Links */}
                    <div className="mt-16 pt-16 border-t border-gray-200 grid md:grid-cols-2 gap-8">
                        <Link href="/the-silent-studio-guide/module-7/tabla-diagnostico" className="btn-premium bg-white text-black border border-black hover:bg-black hover:text-white py-6 px-8 text-center rounded-md transition-colors duration-300">
                           Tabla de Diagnóstico
                        </Link>
                        <Link href="/the-silent-studio-guide/module-7/recetas-edicion" className="btn-premium bg-white text-black border border-black hover:bg-black hover:text-white py-6 px-8 text-center rounded-md transition-colors duration-300">
                           3 Recetas de Edición
                        </Link>
                    </div>

                </div>
            </section>
             <footer className="py-12 bg-white text-black border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
                    <Button asChild variant="ghost" className="hover:bg-gray-100">
                        <Link href="/the-silent-studio-guide/module-6">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                     <Button asChild variant="ghost" className="hover:bg-gray-100">
                        <Link href="/the-silent-studio-guide/module-8">
                            Módulo Siguiente
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </footer>
        </main>
    );
};
export default Module7Page;
