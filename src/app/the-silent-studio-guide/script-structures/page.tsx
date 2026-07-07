'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ScriptStructuresPage = () => {
    const router = useRouter();

    const structures = [
        {
            title: "1. Visual Heist — Transformación Instantánea",
            content: "Resulta que el cerebro no espera explicaciones, espera impacto. Por eso esta estructura comienza mostrando el resultado final —el “wow”— y en cuestión de segundos corta al origen amateur. Ese contraste crea tensión inmediata.\n\nLuego introduces la promesa: qué vas a lograr y en cuánto tiempo. No explicas todo, solo lo suficiente para que la audiencia quiera quedarse.\n\nDespués viene el mecanismo. Aquí no se trata de teoría, sino de ejecución visible: la IA generando, CapCut trabajando, el fondo construyéndose. Ritmo rápido, sin distracciones.\n\nFinalmente llega el payoff. El resultado vuelve a aparecer, ahora con diseño sonoro, intención y contexto. La transformación ya no es magia, es sistema.",
            example: "Perfume flotando en galaxia → corte brusco a botella en mesa vieja → “Parece campaña de $10,000, pero lo hice en pijama” → proceso acelerado → resultado final con profundidad y lujo."
        },
        {
            title: "2. El Enemigo Común — Us vs Them",
            content: "Toda narrativa potente necesita fricción. Esta estructura funciona atacando una creencia popular.\n\nEmpieza señalando la mentira. No suavices el golpe. Algo que todos repiten, pero que tú cuestionas.\n\nDespués introduces tu verdad. Aquí aparece tu “Nicho de Uno”. No es opinión genérica; es postura.\n\nLuego presentas tu sistema como solución. No teoría, no motivación: método.\n\nCierras invitando a tomar posición. No es solo un CTA; es un cambio de identidad.",
            example: "“Te mintieron. No necesitas endeudarte en equipo de cine para cobrar como agencia.” → Presentas tu sistema con IA → Invitas a dejar de ser camarógrafo y pensar como estratega."
        },
        {
            title: "3. El Héroe Vulnerable — Origen",
            content: "Las personas no conectan con perfección, conectan con evolución.\n\nEmpiezas mostrando el dolor pasado. Una imagen real, cruda, sin maquillaje narrativo.\n\nLuego el punto de quiebre. El momento donde decidiste cambiar.\n\nDespués la victoria actual. No ostentación, sino contraste.\n\nY finalmente la invitación: si yo pude transformar esto, tú también puedes hacerlo con orden.",
            example: "Foto antigua en caos creativo → decisión de cambiar → hoy trabajando desde la montaña con IA → invitación a aprender el sistema."
        },
        {
            title: "4. El Bucle Infinito — Loop",
            content: "Esta estructura no se siente como una estructura, se siente como un error intencional.\n\nComienza con una frase incompleta o intrigante. Algo que parece estar fuera de contexto.\n\nLuego muestras el proceso rápido.\n\nY antes de terminar, conectas con la frase inicial de manera que el video pueda reiniciarse sin que se note.\n\nEl final se convierte en el principio.",
            example: "“…es la razón por la que cobro $1,000 por foto.” → tutorial rápido → “…pero en realidad…” → vuelve a escucharse el inicio."
        },
        {
            title: "5. Paralelismo Concreto — Comparación",
            content: "Aquí no discutes, comparas.\n\nPrimero presentas la Opción A. Método tradicional. Esfuerzo excesivo. Estrés.\n\nLuego presentas la Opción B. Tu método. Claridad. Eficiencia.\n\nNo necesitas decir cuál es mejor. El contraste habla solo.",
            example: "Pantalla dividida → izquierda alguien editando 10 horas → derecha tú dirigiendo IA en minutos → veredicto: el mundo premia soluciones, no sufrimiento."
        },
        {
            title: "6. Detrás de Cámaras — Prueba Real",
            content: "Empiezas con algo que parece producido en un estudio enorme.\n\nLuego la cámara se aleja y revela la realidad: entorno sencillo, laptop, lámpara común.\n\nEl contraste genera credibilidad.\n\nDespués explicas la técnica. El entorno no importa; el sistema sí.\n\nCierras con una invitación suave.",
            example: "Comercial impresionante → revelas que estás en tu cocina → explicas cómo el software supera el entorno."
        },
        {
            title: "7. Speedrun Tutorial — Valor Puro",
            content: "Aquí no hay introducciones largas.\n\nDeclaras el objetivo: “Te enseño X en 20 segundos”.\n\nEjecutas los pasos uno tras otro, sin pausas.\n\nY cierras mostrando el resultado final.\n\nEl valor está en la densidad, no en la duración.",
            example: "Keyframe → máscara → movimiento → resultado cinematográfico → “Guarda esto”."
        },
        {
            title: "8. Falsable — Datos Reales",
            content: "Esta estructura elimina el escepticismo mostrando cifras exactas.\n\nEmpiezas con el dato concreto.\n\nLuego muestras evidencia visual.\n\nY finalmente explicas cómo lo lograste.\n\nNo es promesa. Es demostración.",
            example: "Captura de pago → campañas entregadas → explicación del sistema."
        },
        {
            title: "9. Pregunta Filosófica — Autoridad",
            content: "Comienza con una pregunta que incomoda.\n\nDespués compartes tu reflexión personal.\n\nY aterrizas la idea en algo práctico.\n\nNo es discurso motivacional; es visión aplicada.",
            example: "“¿Por qué seguimos creando contenido que nadie recuerda?” → reflexión sobre arte vs contenido → aplicación al negocio."
        },
        {
            title: "10. ASMR Visual — Satisfacción",
            content: "Aquí no hablas.\n\nEl sonido es protagonista: clics, whooshes, teclas.\n\nVisuales limpios, ritmo preciso.\n\nTexto mínimo al final.\n\nEl dominio se muestra en silencio.",
            example: "Enter → barra de carga → retoque → resultado → “De la idea a la realidad en 3 clics”."
        }
    ];

    const howToChoose = {
        title: "Cómo elegir la estructura correcta",
        content: "No se trata de usar todas.\n\nSi quieres atraer: Visual Heist, Loop o Speedrun.\nSi quieres autoridad: Enemigo, Comparación o Falsable.\nSi quieres conexión o venta: Héroe, Detrás de cámaras, Filosófica o ASMR.\n\nLa clave no es creatividad.\nEs intención estratégica."
    };
    
    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Estructuras de Guiones <br/>para Contenido Viral.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Diez marcos narrativos probados para crear contenido de alto impacto que vende sin vender.
                    </p>

                    <div className="space-y-12">
                        {structures.map((structure, index) => (
                            <div key={index} className="p-8 border-l-4 border-gray-100 hover:border-gold transition-colors group">
                                <h3 className="text-3xl serif italic mb-4 text-gray-900 group-hover:text-black">{structure.title}</h3>
                                {structure.content.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                                ))}
                                {structure.example && (
                                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 text-sm">
                                        <p className="text-gray-500 whitespace-pre-wrap">{structure.example}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="p-8 border-t-4 border-gold bg-black text-white mt-16">
                            <h3 className="text-3xl serif italic mb-4 text-gold">{howToChoose.title}</h3>
                             {howToChoose.content.split('\n\n').map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ScriptStructuresPage;
