'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Module8Page = () => {
    return (
        <main className="bg-white text-black">
            {/* Header */}
            <section className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Módulo 08: <br/>Publicación + Métricas + Mejora.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
                        Objetivo del módulo: publicar con intención, medir lo que importa y mejorar con un sistema. En este módulo no hablamos de “subir videos”. Hablamos de operar como estudio: cada publicación es un experimento controlado. Publicas, observas, ajustas y repites. Así se construye consistencia.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-8 bg-gray-50 text-black">
                <div className="max-w-4xl mx-auto space-y-20">
                    
                    {/* 8.1 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">8.1 —</span> La regla base: publica para aprender</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">La mayoría publica con una expectativa emocional: “ojalá pegue”. Eso genera frustración porque no te deja una lección clara.</p>
                        <p className="text-gray-800 font-semibold leading-relaxed mb-8">La publicación premium tiene otra lógica: publicar para descubrir.</p>
                        <p className="text-gray-600 leading-relaxed mb-4">Es decir, cada video debe responderte una pregunta concreta:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
                            <li>Qué hook retiene: qué frase, imagen o arranque hace que la gente se quede.</li>
                            <li>Qué promesa genera comentarios: qué idea hace que la gente quiera responder.</li>
                            <li>Qué visual detiene el scroll: qué estética o encuadre obliga a mirar.</li>
                            <li>Qué CTA convierte: qué cierre logra acción (DM, clic, compra).</li>
                        </ul>

                        <div className="p-6 bg-white border-l-4 border-gold">
                            <h4 className="font-bold text-lg mb-4">Cómo se ve “publicar para aprender” en la práctica</h4>
                            <p className="text-gray-600 mb-4">Antes de publicar, completa esta frase: <br/><strong className="text-gray-800">“Este video lo publico para descubrir si __________ funciona mejor.”</strong></p>
                            <p className="text-sm text-gray-500 mb-2">Ejemplos:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>“…si un hook con resultado primero retiene más que un hook con pregunta.”</li>
                                <li>“…si un cierre con ‘comenta X’ genera más acciones que ‘link en bio’.”</li>
                                <li>“…si b-roll real (UGC) detiene más el scroll que un video IA cinemático.”</li>
                            </ul>
                            <p className="mt-4 font-semibold text-gray-800">Eso convierte cada post en un dato, no en un golpe de suerte.</p>
                        </div>
                    </div>

                    {/* 8.2 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">8.2 —</span> Publicación (SOP simple)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Este SOP es tu rutina. Te evita improvisar. Publicar “bien” no es publicar bonito; es publicar con objetivo claro.</p>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-xl mb-4">Paso 1 — Elige el objetivo del video</h4>
                                <p className="text-gray-600 mb-4">Un video no puede hacerlo todo al mismo tiempo. Elige uno:</p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-white border border-gray-100"><strong className="block text-center">A) Alcance (viralidad)</strong><p className="text-xs text-center text-gray-500">facilidad de consumo + alta retención</p></div>
                                    <div className="p-4 bg-white border border-gray-100"><strong className="block text-center">B) Autoridad (confianza)</strong><p className="text-xs text-center text-gray-500">claridad + valor real + prueba</p></div>
                                    <div className="p-4 bg-white border border-gray-100"><strong className="block text-center">C) Conversión (DM, clic, compra)</strong><p className="text-xs text-center text-gray-500">mensaje directo + oferta + cierre fuerte</p></div>
                                </div>
                                <p className="mt-4 p-2 bg-gray-100 text-sm font-semibold inline-block">Regla de oro: si no puedes decir el objetivo en una palabra, todavía no está claro.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4">Paso 2 — Ajusta la pieza según el objetivo</h4>
                                <p className="text-gray-600 mb-4">No se edita igual un video para alcance que uno para conversión. Aquí está la guía de ajuste.</p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white border-l-2 border-gray-200"><strong className="block">Si el objetivo es ALCANCE:</strong> Tu pieza debe parecer “imposible de ignorar”. Hook fuerte, ritmo alto, final que invita a comentar. <span className="text-red-600">Qué NO hacer: explicaciones largas.</span></div>
                                    <div className="p-4 bg-white border-l-2 border-gray-200"><strong className="block">Si el objetivo es AUTORIDAD:</strong> Tu pieza debe parecer “esto sabe”. Claridad, prueba (demostración), paso a paso. <span className="text-red-600">Qué NO hacer: prometer mucho sin mostrar nada.</span></div>
                                    <div className="p-4 bg-white border-l-2 border-gray-200"><strong className="block">Si el objetivo es CONVERSIÓN:</strong> Tu pieza debe parecer “esto me resuelve ahora”. Dolor → Solución → Prueba → CTA claro. <span className="text-red-600">Qué NO hacer: CTA débil o con múltiples opciones.</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-4">Paso 3 — Caption (mínimo, estratégico)</h4>
                                <p className="text-gray-600 mb-4">El caption premium no compite con el video. Lo apoya. Piensa en él como un “cierre escrito” que refuerza el mensaje.</p>
                                <div className="p-4 bg-white border-gray-100 font-mono text-sm">
                                    <p className="font-bold mb-2">Estructura de caption premium:</p>
                                    <p>1 línea de contexto (enmarca)</p>
                                    <p>1 línea de refuerzo (promesa o beneficio)</p>
                                    <p>CTA (acción exacta)</p>
                                    <p className="mt-4 border-t border-gray-200 pt-4 text-xs italic">Ejemplo:<br/>“Esto es lo que uso para que un video se sienta de agencia.<br/>Si lo aplicas hoy, tu retención sube.<br/>Si quieres la plantilla, escribe ‘PLANTILLA’.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 8.3 */}
                    <div>
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">8.3 —</span> Métricas que sí importan (sin volverte loco)</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">Las métricas son útiles si responden preguntas. Si no, te distraen. La forma premium de medir es: mide según objetivo.</p>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Si el objetivo es ALCANCE</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Retención (primeros 3 segundos): indica si el hook detiene el scroll.</li>
                                    <li>Reproducciones completas: si el video se termina, sube distribución.</li>
                                    <li>Compartidos: es el indicador más fuerte de alcance orgánico.</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-bold text-lg mb-2">Si el objetivo es AUTORIDAD</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>Guardados: “esto vale, lo quiero volver a ver”.</li>
                                    <li>Comentarios con intención: preguntas reales, objeciones, interés genuino.</li>
                                    <li>Seguimientos después del video: señal de confianza.</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-bold text-lg mb-2">Si el objetivo es CONVERSIÓN</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                    <li>DMs o clics atribuibles al video.</li>
                                    <li>Comentarios “quiero” / “info”.</li>
                                    <li>Conversaciones iniciadas (no solo likes).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 8.4 */}
                    <div className="p-8 bg-black text-white rounded-md">
                        <h3 className="text-3xl serif italic mb-6"><span className="text-gold">8.4 —</span> Sistema de mejora (Iteración 3x3)</h3>
                        <p className="text-gray-400 leading-relaxed mb-8">Este sistema evita el error más común: cambiar todo y no saber qué funcionó. Principio: para mejorar, cambia una variable por vez.</p>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-lg text-gold mb-2">La Iteración 3x3</h4>
                                <p className="text-sm text-gray-400">Vas a publicar 3 piezas y en cada una cambias SOLO una cosa:</p>
                                <ul className="list-decimal list-inside text-sm text-gray-300 space-y-2 mt-4">
                                    <li><strong>Pieza 1 — Cambia el hook (solo hook):</strong> Todo lo demás igual. Objetivo: descubrir el mejor arranque.</li>
                                    <li><strong>Pieza 2 — Cambia el ritmo (solo cortes/pausas):</strong> Mismo hook, mismo CTA. Objetivo: ver si el problema era “cómo se cuenta”.</li>
                                    <li><strong>Pieza 3 — Cambia el CTA (solo cierre):</strong> Mismo hook, mismo ritmo. Objetivo: mejorar acciones sin tocar el contenido.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gold mb-2">Regla de diagnóstico (para saber qué tocar)</h4>
                                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                                    <li>Si el video cae rápido en los primeros segundos: problema es <strong>hook/visual</strong>. Cambia el primer segundo.</li>
                                    <li>Si la gente se va a mitad: problema es <strong>ritmo/claridad</strong>. Recorta, simplifica, ordena.</li>
                                    <li>Si la gente llega al final pero no actúa: problema es <strong>CTA/oferta</strong>. CTA único y directo.</li>
                                </ul>
                            </div>
                             <div className="p-4 bg-white/5 border-l-2 border-gold">
                                <h4 className="font-bold text-lg mb-2">Extra premium: el “Registro de Aprendizaje” (1 minuto)</h4>
                                <p className="text-sm text-gray-300">Después de publicar, escribe una sola línea: “Aprendí que _________ funciona mejor para _________.”</p>
                                <p className="text-xs text-gray-400 mt-2 italic">Ese registro convierte tu cuenta en un sistema, no en un casino.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <footer className="py-12 bg-white text-black border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
                    <Button asChild variant="ghost" className="hover:bg-gray-100">
                        <Link href="/the-silent-studio-guide/module-7">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                     <Button asChild variant="ghost" className="hover:bg-gray-100">
                        <Link href="/the-silent-studio-guide/module-9">
                            Módulo Siguiente
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </footer>
        </main>
    );
};
export default Module8Page;
