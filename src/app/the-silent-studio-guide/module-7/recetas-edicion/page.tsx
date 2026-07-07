'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const RecetasEdicionPage = () => {
    const router = useRouter();

    const recetas = [
        {
            title: "Receta 1 — Educativo (30–45s)",
            purpose: "claridad + guardados.",
            sensation: "“me lo explicaron fácil”.",
            structure: [
                "Hook (0–2s): frase directa o contraste",
                "Contexto mínimo (2–6s): por qué importa",
                "3 pasos (6–35s): uno por bloque",
                "Cierre (35–45s): resumen + CTA de guardado"
            ],
            rythm: [
                "Microcambio cada 2–3s (cortes, b-roll, texto).",
                "Pausas cortas antes de cada “paso” para que se entienda."
            ],
            subtitles: [
                "En el hook: 1 línea contundente.",
                "En los pasos: “Paso 1 / Paso 2 / Paso 3” + frase corta.",
                "Highlights solo en palabras clave.",
                "Ejemplo: “Paso 1: define la promesa”, “Paso 2: recorta silencios”, “Paso 3: subtítulos fraseados”"
            ],
            sound: [
                "Voz limpia al frente.",
                "Música muy baja o sin música (si la voz ya sostiene).",
                "SFX sutil en cada “paso” (solo si eleva, no si distrae)."
            ],
            cta: [
                "“Guárdalo para aplicarlo hoy.”",
                "“Si quieres la plantilla, comenta ‘PLANTILLA’.”"
            ]
        },
        {
            title: "Receta 2 — Anuncio 15s (conversión)",
            purpose: "acción inmediata (DM/clic/compra).",
            sensation: "“esto es exactamente para mí”.",
            structure: [
                "Hook problema (0–2s): dolor o frustración clara",
                "Solución (2–6s): qué es y qué cambia",
                "Prueba o mecanismo (6–12s): cómo se ve / cómo funciona",
                "CTA (12–15s): acción única"
            ],
            rythm: [
                "Microcambio cada 1.5–2s.",
                "Cero relleno. Cero “presentaciones”."
            ],
            subtitles: [
                "Ultra cortos: 2–5 palabras por bloque.",
                "En el hook: un golpe.",
                "En el CTA: instrucción directa.",
                "Ejemplos: “Tus videos se ven baratos”, “Te lo dejo listo en 24h”, “Escribe ‘INFO’”"
            ],
            sound: [
                "Música con energía controlada (sin tapar la voz).",
                "Un SFX fino en el hook y otro en el CTA (máximo)."
            ],
            cta: [
                "“Escribe ‘INFO’ y te envío el plan.”",
                "“Link en la bio. Cupos limitados.”",
                "Elige una sola."
            ]
        },
        {
            title: "Receta 3 — UGC Lifestyle (20–35s)",
            purpose: "confianza + naturalidad (parece real, se siente cercano).",
            sensation: "“esto lo usaría alguien como yo”.",
            structure: [
                "Escena real (0–2s): momento cotidiano",
                "Frase humana (2–6s): lo que me pasaba / lo que quería",
                "Uso o demo (6–25s): mostrando, no explicando demasiado",
                "Mini conclusión (25–35s): “por esto me gustó” + CTA suave"
            ],
            rythm: [
                "No lo cortes como anuncio.",
                "Microcambio cada 2–4s, con respiración natural.",
                "B-roll suave: manos, detalle, pantalla, entorno."
            ],
            subtitles: [
                "Más “hablados” que técnicos.",
                "Frases cortas, naturales.",
                "Sin demasiados highlights. El lujo aquí es discreto.",
                "Ejemplos: “Esto me ahorró demasiado tiempo”, “Me gusta porque se ve limpio”, “Si lo quieres, te paso el link”"
            ],
            sound: [
                "Ambiente real (si aporta) + música muy ligera.",
                "Si hay ruido, prioriza voz o regraba.",
                "SFX mínimos (o ninguno). En UGC, el exceso se nota."
            ],
            cta: [
                "“Si quieres que te diga cómo lo hice, escríbeme.”",
                "“Te dejo el link en la bio.”"
            ]
        }
    ];

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Tres Recetas de Edición.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Estas recetas son “moldes” de edición. El valor está en que puedes repetirlas sin pensar demasiado y aun así lograr consistencia.
                    </p>

                    <div className="space-y-16">
                        {recetas.map((receta, index) => (
                            <div key={index} className="p-8 border-l-4 border-gray-100 hover:border-gold transition-all duration-300 bg-gray-50/50">
                                <h3 className="text-3xl serif italic mb-4 text-gray-900">{receta.title}</h3>
                                <p className="text-sm text-gray-500 mb-2"><strong>Propósito:</strong> {receta.purpose}</p>
                                <p className="text-sm text-gray-500 mb-6"><strong>Sensación:</strong> {receta.sensation}</p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold mb-2">Estructura</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">{receta.structure.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Ritmo</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">{receta.rythm.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Subtítulos</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">{receta.subtitles.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Sonido</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">{receta.sound.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </div>
                                     <div>
                                        <h4 className="font-bold mb-2">CTA Recomendado</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">{receta.cta.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="mt-24 p-10 bg-black text-white rounded-lg">
                        <h3 className="text-3xl serif italic text-gold mb-6">Cómo elegir la receta correcta (regla rápida)</h3>
                        <ul className="space-y-4 text-gray-300">
                           <li>Si tu meta es guardados → Receta Educativo</li>
                           <li>Si tu meta es ventas/DM → Receta Anuncio 15s</li>
                           <li>Si tu meta es confianza → Receta UGC Lifestyle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RecetasEdicionPage;
