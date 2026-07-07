'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Phone, Shield, Rocket, CircleDollarSign } from 'lucide-react';

const SalesScriptsPage = () => {
    const router = useRouter();

    const scenarios = [
        {
            title: "ESCENARIO 1: Contacto en Frío (Outbound)",
            icon: MessageSquare,
            color: "text-green-400",
            borderColor: "border-green-400/30",
            description: "Usar cuando el alumno ha hecho el 'Atraco Visual' (buscó la foto fea y ya tiene la versión mejorada lista).",
            steps: [
                {
                    title: "Paso 1: El Gancho (Romper el hielo + El Regalo)",
                    script: `Hola [Nombre del Negocio] 👋. Pasé por su perfil y me encanta el concepto de su [mencionar algo positivo: hamburguesa/local/servicio].\nSoy diseñador digital y, como práctica, tomé una de sus fotos y le di un retoque editorial de alta gama para que se vea más [lujosa/apetitosa/profesional].\n¿Te gustaría ver el 'Antes y Después' sin ningún compromiso? La hice solo para ustedes.`
                },
                {
                    title: "Paso 2: La Entrega (La Muestra de Poder)",
                    script: `[Enviar la Foto Original vs. la Foto Transformada con IA]\n\nAquí está. La idea es que su marca proyecte la misma calidad visual que las grandes franquicias, pero sin gastar miles de dólares en sesiones de fotos.`
                },
                {
                    title: "Paso 3: La Transición a Venta",
                    script: `¿Qué te pareció el cambio? Si te gusta este estilo, tengo un paquete de lanzamiento donde transformo 10 fotos de tu perfil con esta misma calidad. ¿Te interesaría saber cómo funciona?`
                }
            ]
        },
        {
            title: "ESCENARIO 2: Lead Entrante (Inbound)",
            icon: Phone,
            color: "text-blue-400",
            borderColor: "border-blue-400/30",
            description: "Usar cuando alguien responde al Anuncio de Meta Ads (Módulo 3) pidiendo info.",
            steps: [
                {
                    title: "Paso 1: El Diagnóstico (Autoridad)",
                    script: `Hola 👋, gracias por escribir. Para saber si mi sistema se adapta a tu marca, cuéntame brevemente:\n- ¿Qué tipo de negocio tienes?\n- ¿Actualmente tomas las fotos con celular o contratas fotógrafo?`
                },
                {
                    title: "Paso 2: La Solución",
                    script: `Entiendo. Justo ayudamos a negocios como el tuyo que tienen un gran producto pero cuyas fotos no le hacen justicia.\nNosotros no hacemos sesiones de fotos tradicionales (que son caras y lentas). Usamos Tecnología Generativa para transformar tus fotos actuales de celular en campañas de nivel revista. Mira este ejemplo: [Enviar foto de Antes/Después de su nicho]`
                }
            ]
        },
        {
            title: "ESCENARIO 3: Presentación del Precio (El Cierre)",
            icon: CircleDollarSign,
            color: "text-gold",
            borderColor: "border-gold/30",
            description: "Usar en ambos casos cuando pregunten '¿Cuánto cuesta?'. Nunca des el precio solo, dalo con anclaje.",
            steps: [
                {
                    title: "El Guion de Cierre:",
                    script: `Normalmente, una sesión de fotos profesional más edición te costaría entre $250 y $400 USD.\nPero como usamos nuestro propio software de optimización, podemos reducir costos.\nEl 'Pack Transformación' incluye:\n✅ 10 Imágenes editadas estilo Editorial/Lujo.\n✅ Retoque de iluminación y fondo perfecto.\n✅ Entrega en 24 horas.\nTodo el paquete queda hoy en solo $97 USD.\n¿Te gustaría que empecemos con tus primeras 10 fotos hoy mismo?`
                }
            ]
        },
        {
            title: "ESCENARIO 4: Manejo de Objeciones",
            icon: Shield,
            color: "text-red-400",
            borderColor: "border-red-400/30",
            description: "Si dicen 'Es muy caro' o 'Déjame pensarlo'.",
            steps: [
                {
                    title: "Respuesta a 'Está caro':",
                    script: `Lo entiendo. Pero piénsalo como una inversión, no un gasto. Estás pagando menos de $10 dólares por foto. Con que UNA sola de estas imágenes te traiga UN cliente nuevo (que pague por tu servicio/producto), el pack se paga solo. El resto es ganancia pura.\n¿Prefieres seguir perdiendo clientes que juzgan tu marca por fotos oscuras, o invertir $97 y verte como el líder del mercado?`
                },
                {
                    title: "Respuesta a 'Déjame pensarlo / Te aviso luego':",
                    script: `Claro, piénsalo. Solo ten en cuenta que como el proceso es manual y detallado, solo acepto 5 clientes por semana para mantener la calidad, y me quedan 2 cupos para esta semana.\nSi quieres asegurar el precio de $97, puedo reservarte el cupo con el 50% hoy. ¿Te parece justo?`
                }
            ]
        },
        {
            title: "ESCENARIO 5: El Upsell (Venta del Video Motion)",
            icon: Rocket,
            color: "text-purple-400",
            borderColor: "border-purple-400/30",
            description: "Usar INMEDIATAMENTE después de que el cliente paga los $97 USD. Momento de euforia.",
            steps: [
                {
                    title: "El Guion de Multiplicador:",
                    script: `¡Recibido! Mañana tienes tus fotos listas. 🚀\nPor cierto, [Nombre], el algoritmo de Instagram y TikTok ahora le está dando 80% más alcance a los Videos (Reels) que a las fotos fijas.\nYa que tenemos tus imágenes listas... ¿Te gustaría que les demos vida? Podemos animar el [humo/agua/luces] para que sean videos que detienen el scroll.\nPor solo $47 USD extra, te entrego 5 de estas imágenes convertidas en Video Motion de alta definición.\n¿Lo agregamos al pedido y aprovechas el impulso?`
                }
            ]
        }
    ];

    const notes = [
        "Velocidad: Responde rápido. El interés en redes sociales dura minutos.",
        "Audio: Si puedes, envía la parte del 'Cierre' (Escenario 3) en Nota de Voz. La voz genera mucha más confianza que el texto y hace más difícil que te digan que no.",
        "No ruegues: Tú tienes la 'medicina' para su dolor (fotos feas). Mantén una postura de experto que quiere ayudar, no de vendedor desesperado."
    ];

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Guiones de Venta<br/>de Alto Impacto.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Copia y pega estas estructuras probadas para cerrar clientes, manejar objeciones y maximizar el valor de cada interacción.
                    </p>

                    <div className="space-y-16">
                        {scenarios.map((scenario, index) => (
                            <div key={index} className={`p-8 border-l-4 ${scenario.borderColor} bg-gray-50/50`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <scenario.icon className={`${scenario.color} h-8 w-8`} />
                                    <h3 className={`text-2xl serif italic ${scenario.color}`}>{scenario.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500 italic mb-8">{scenario.description}</p>
                                <div className="space-y-6">
                                    {scenario.steps.map((step, sIndex) => (
                                        <div key={sIndex} className="bg-white p-6 border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                            <p className="text-gray-700 whitespace-pre-wrap font-mono text-sm">{step.script}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        
                        <div className="mt-24 p-10 bg-black text-white">
                            <h3 className="text-3xl serif italic text-gold mb-6">📝 Notas del Director</h3>
                            <ul className="space-y-4">
                                {notes.map((note, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-gold mr-3 mt-1 font-bold">&rarr;</span>
                                        <p className="text-gray-300">{note}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SalesScriptsPage;
