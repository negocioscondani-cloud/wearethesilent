'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

const Module9Page = () => {
    useEffect(() => {
        document.body.classList.add('manual-body-styles');
        return () => {
            document.body.classList.remove('manual-body-styles');
        };
    }, []);

    const sprintDays = [
        { day: 1, title: 'Prospección Quirúrgica: la foto “débil” correcta', understand: 'No es “hacer bonito”, es subir percepción con intención comercial.', apply: ['Reúne 10 fotos reales actuales.', 'Elige 1 con potencial (producto definido, pero luz/fondo/valor percibido bajo).'], deliverable: '“Foto candidata” + 3 razones por las que tiene potencial (luz, encuadre, textura, valor percibido).' },
        { day: 2, title: 'Transformación IA + Activación (uso estratégico)', understand: 'Transformas para que parezca producido en estudio; luego no publicas sin contexto: se usa como portada de anuncio, hero, comparativo, etc.', apply: ['Genera 3 versiones “premium” de la misma foto (3 estilos: editorial, 3D, lifestyle).'], deliverable: '1 carrusel “Antes/Después” listo para post o anuncio (con copy simple de autoridad).' },
        { day: 3, title: 'Módulo 2: Generación de imágenes (flujo PRO)', understand: 'El paso crítico es Referencia: subir la foto real del producto.', apply: ['En Luxe Prompt Studio: subes foto, pides estilo y obtienes JSON.', 'En Freepik: Nano Banana Pro + Referencia + JSON + 4K.'], deliverable: '6 imágenes finales (2 por estilo) + 1 “ganadora” elegida por impacto (la que más detiene scroll).' },
        { day: 4, title: 'Módulo 2: Alternativa gratis (experimentos rápidos)', understand: 'Google Labs “FLOW” como laboratorio sin costo: subes referencia y pegas el prompt.', apply: ['Repite 10 variaciones rápidas del prompt (solo cambias: iluminación / fondo / ángulo).'], deliverable: '10 miniaturas comparables + notas: “qué cambio mejoró más la percepción”.' },
        { day: 5, title: 'Módulo 3: de imagen ganadora a video (Animación Directa)', understand: 'Dirección simple: [Movimiento de cámara] + [Acción del objeto] y activar SFX para audio contextual.', apply: ['Toma tu imagen ganadora 4K → botón “Video”.', 'Genera 3 clips (zoom in lento, pan suave, push-in).'], deliverable: '3 clips de 6–10s + elegir 1 “hero clip”.' },
        { day: 6, title: 'Módulo 3: Storyboard Cinematográfico (high value)', understand: 'Storyboard = secuencia narrativa consistente (escena 1 → 2 → 3).', apply: ['Escribe 3 escenas (dolor → solución → resultado).', 'Genera storyboard en Freepik Pikaso > Variations (modo storyboard).'], deliverable: '1 storyboard completo + 1 video armado (aunque sea básico) con esa secuencia.' },
        { day: 7, title: 'Módulo 4: Neuro-Scripting (de “idea” a guion vendible)', understand: 'Flujo: Idea base → Inspiración viral → Neuro auditoría para vender por percepción.', apply: ['Escribe 3 ideas base (una por objetivo: alcance / autoridad / conversión).', 'Para cada idea, genera 2 hooks alternativos.'], deliverable: '3 guiones “borrador” (uno por objetivo), listos para producir.' },
        { day: 8, title: 'Neuro-Optimización (dominancia + exclusividad)', understand: 'Ajustes que aumentan deseo: dominancia temporal (ritmo/primer escena) + framing de acceso exclusivo.', apply: ['Toma tu mejor guion y haz 2 versiones:', 'V1: “Oracle” (clara, elegante).', 'V2: “Neuro” (más exclusividad, más tensión, CTA de acceso).'], deliverable: '1 guion final (A+) + 3 CTAs (DM, comentario palabra clave, link).' },
        { day: 9, title: 'Módulo 5: Embajador Digital (estrategia)', understand: 'Antes del avatar, defines el alma: Value Canvas + 4Ps (Personaje, Producto, Posicionamiento, Personalidad).', apply: ['Rellena tu Value Canvas (audiencia, problema, solución) y define tus 4Ps.'], deliverable: '“Ficha del Embajador” (1 página): arquetipo, look & feel, promesa central, tono de voz.' },
        { day: 10, title: 'Embajador Digital (infraestructura técnica)', understand: 'Base visual high-end → animación (all-in-one o motion control) → lip-sync (si aplica).', apply: ['Genera 1 imagen estática del embajador (coherente con 4Ps).', 'Crea 1 clip vertical hablando (ruta A all-in-one o ruta B motion control).'], deliverable: '1 avatar talking video (8–12s) + 3 variantes de expresividad.' },
        { day: 11, title: 'Módulo 6: Armar la Agencia IA (fundación)', understand: 'El plan parte de un caso (marca, buyer persona, pains, transformación).', apply: ['Escribe tu “Case Card” en 10 líneas (quién, qué vende, dolor, promesa, prueba).', 'Define tu nicho y tu “Brand Skeleton” (nombre, tagline, colores, tono, oferta).'], deliverable: '1 página de posicionamiento (para que cualquier pieza se alinee sola).' },
        { day: 12, title: 'Agencia IA: oferta + sistema de producción + QA', understand: 'Paquetes (3 niveles) + pipeline por módulos + checklist de QA y entrega.', apply: ['Arma 3 paquetes (entry / core / premium) con:', 'Qué incluye (M1–M5),', 'tiempos,', 'entregables,', 'revisiones.'], deliverable: '1 hoja de venta (oferta clara) + checklist QA (visual, guion, formato, branding).' },
        { day: 13, title: 'Módulo 7: Edición Premium (recetas + diagnóstico)', understand: 'Edición “premium” es un sistema: eliges receta según objetivo y diagnosticas qué falla.', apply: ['Pasa 2 videos por la “tabla de diagnóstico”.', 'Aplica 1 receta de edición a 1 video (y deja otro como control).'], deliverable: '2 versiones del mismo video (control vs editado) + nota: qué cambió (hook, ritmo, CTA).' },
        { day: 14, title: 'Módulo 8: Publicación + métricas + mejora (operación real)', understand: 'Publicas con un objetivo (alcance/autoridad/conversión) + mides lo que importa + mejoras con 3x3.', apply: ['Publica 3 piezas en 72h (o planifícalas) usando Iteración 3x3:', 'cambia solo hook,', 'cambia solo ritmo,', 'cambia solo CTA.'], deliverable: 'Registro de Aprendizaje (3 líneas, una por publicación). Próxima semana: repetir el ciclo con el mejor hallazgo.' }
    ];

    return (
        <div className="antialiased">
            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center">
                <Link href="/manual/emprendedores" className="serif italic text-2xl font-bold tracking-tighter uppercase">
                    The <span className="text-gold">Silent</span> Studio
                </Link>
                 <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                    <Link href="/manual/emprendedores">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Volver al Índice
                    </Link>
                </Button>
            </nav>

            <main className="max-w-4xl mx-auto px-6 md:px-12 py-32 space-y-16">
                {/* Header */}
                <section>
                     <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 09</span>
                        <h1 className="text-5xl md:text-7xl font-bold serif italic mb-4">Plan Sprint 14 Días</h1>
                        <p className="text-sm text-gold/70 italic">
                            La teoría sin acción es solo ruido. Este plan de 14 días no es un resumen; es un sprint de ejecución. Está diseñado para transformar el conocimiento de esta guía en activos tangibles, resultados medibles y, lo más importante, en un sistema operativo que trabaje para ti. Sigue el plan. Comprométete con la entrega diaria. La soberanía creativa está al otro lado de la consistencia.
                        </p>
                    </div>
                </section>
                
                {/* Sprint Content */}
                <section className="space-y-12">
                    <div className="p-8 bg-black/20 border border-gold/20 rounded-md space-y-4">
                        <h3 className="text-2xl serif italic text-gold">Reglas del Sprint (para que funcione de verdad)</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>1 entrega diaria (aunque sea pequeña).</li>
                            <li>Cada publicación es un experimento: publicas para descubrir qué funciona (hook, visual, promesa, CTA).</li>
                            <li>Cambias una sola variable por vez (Iteración 3x3).</li>
                            <li>Registro de Aprendizaje (1 línea después de publicar).</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        {sprintDays.map(day => (
                            <div key={day.day} className="p-8 border-l-4 border-gray-800 bg-black/10">
                                <h4 className="text-2xl serif italic mb-4 text-white"><span className="text-gold">Día {day.day} —</span> {day.title}</h4>
                                <div className="grid md:grid-cols-3 gap-6 text-sm">
                                    <div>
                                        <p className="font-bold text-white mb-2">Entender:</p>
                                        <p className="text-gray-400">{day.understand}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-2">Aplicar (hoy):</p>
                                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                                            {day.apply.map((task, i) => <li key={i}>{task}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-2">Deberes (entregable):</p>
                                        <p className="text-gray-400">{day.deliverable}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-16 text-center">
                        <h3 className="text-4xl serif italic mb-6 text-white">El Silencio Después de la Guía</h3>
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            Has completado la guía. Tienes el mapa, el sistema y los flujos de trabajo. La mayoría se detiene aquí, abrumada por el conocimiento. Pero el verdadero poder no está en saber, sino en hacer. Este sprint de 14 días fue tu primer paso en la ejecución. Ahora, el verdadero trabajo comienza: aplicar este sistema de manera consistente hasta que se convierta en tu segunda naturaleza. El silencio no es la meta, es el método. La maestría es el resultado.
                        </p>
                        <p className="text-lg font-semibold text-white mt-8">
                            Gracias por confiar en The Silent Studio.
                        </p>
                        <div className="mt-12 p-8 border-t border-gold/20">
                             <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                                Si has completado la guía y el sprint, y sientes que estás listo para escalar tu operación con acompañamiento directo, la mentoría 1 a 1 puede ser tu siguiente paso. No es para todos. Es para aquellos que están comprometidos a construir un imperio, no solo un negocio.
                            </p>
                            <Button asChild className="mt-6 bg-gold text-black hover:bg-black hover:text-white transition-colors duration-300">
                                <a href="https://shop.beacons.ai/danicalderon.tv/49701bb7-34b5-416a-832b-e28246162182" target="_blank" rel="noopener noreferrer">
                                    Acceder a la Mentoría
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-gold/20 py-8">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/module-8">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Módulo Anterior
                        </Link>
                    </Button>
                     <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold">
                        <Link href="/manual/emprendedores/results">
                           Ver Resultados
                        </Link>
                    </Button>
                </div>
            </footer>
        </div>
    );
};
export default Module9Page;
