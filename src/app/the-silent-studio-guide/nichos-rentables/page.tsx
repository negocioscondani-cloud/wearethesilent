'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Martini, Scissors, Car, Store, Mountain } from 'lucide-react';

const NichosRentablesPage = () => {
    const router = useRouter();

    const categories = [
        {
            title: "Gastronomía y Bebidas",
            subtitle: "El deseo entra por los ojos",
            icon: Martini,
            niches: [
                {
                    title: "1. Bares de Coctelería & Mixología",
                    pain: "Fotos oscuras con flash de celular donde el trago se ve plano y aburrido.",
                    contribution: "Creas atmósferas nocturnas elegantes (Nano Banana). Con Higgfield, haces que el líquido se mueva suavemente o que el hielo brille."
                },
                {
                    title: "2. Repostería de Diseño (Pasteles de Boda/Cumpleaños)",
                    pain: "Toman la foto en la cocina con el fondo sucio. Se pierde el detalle del decorado.",
                    contribution: "Colocas el pastel en una mesa de mármol o en un jardín de fantasía. Resaltas texturas de cremas y frutas."
                },
                {
                    title: "3. Cafeterías de Especialidad",
                    pain: "El café se ve frío en la foto. No transmite el aroma.",
                    contribution: "Añades vapor saliendo de la taza (Motion AI) y una iluminación cálida 'cozy' que invita a entrar."
                },
                {
                    title: "4. Cervecerías Artesanales",
                    pain: "Latas o vasos fotografiados en una mesa cualquiera. No se ve refrescante.",
                    contribution: "Añades gotas de condensación hiperrealistas en la botella y movimiento de burbujas subiendo en el vaso."
                }
            ]
        },
        {
            title: "Estética y Cuidado Personal",
            subtitle: "Venta de aspiración",
            icon: Scissors,
            niches: [
                 {
                    title: "5. Barberías 'High End'",
                    pain: "Fotos de cortes con malas luces que muestran imperfecciones en la piel o pelos en el cuello.",
                    contribution: "Estética 'Peaky Blinders' o urbana oscura. Limpias la piel con IA y resaltas la nitidez del degradado (fade)."
                },
                {
                    title: "6. Artistas del Tatuaje",
                    pain: "Fotos con la piel enrojecida e hinchada y mucho brillo por la crema.",
                    contribution: "Eliminas el enrojecimiento para que se vea el arte puro. Añades contraste dramático para que la tinta resalte."
                },
                {
                    title: "7. Maquillistas (MUA) para Novias",
                    pain: "Selfies mal encuadradas que no hacen justicia al trabajo de detalle.",
                    contribution: "Creas un look 'Editorial de Revista'. Suavizas la piel sin perder textura y das brillo a los ojos (efecto 'catchlight')."
                },
                {
                    title: "8. Clínicas de Depilación Láser / Spa",
                    pain: "Fotos clínicas frías que asustan o parecen de hospital.",
                    contribution: "Transformas la sala en un santuario zen con velas, orquídeas y luz tenue relajante."
                }
            ]
        },
        {
            title: "Automotriz y Oficios",
            subtitle: "Detalles técnicos",
            icon: Car,
            niches: [
                {
                    title: "9. Car Detailing (Lavado de lujo y cerámica)",
                    pain: "Fotos en el taller con mangueras tiradas. No se aprecia el brillo del tratamiento cerámico.",
                    contribution: "Pones el auto en una carretera épica al atardecer o en un garaje futurista de neón. Con Higgfield, haces que la luz 'resbale' por la carrocería."
                },
                {
                    title: "10. Instaladores de Piscinas",
                    pain: "Fotos de piscinas vacías o con agua quieta que parece estanque.",
                    contribution: "Agua azul cristalina con movimiento suave (ondas). Añades muebles de exterior de lujo alrededor."
                },
                {
                    title: "11. Paisajismo y Jardinería",
                    pain: "Jardines recién plantados que se ven 'tristes' o con tierra removida.",
                    contribution: "Haces que las plantas se vean frondosas y verdes vibrantes. Añades movimiento de viento en las hojas."
                },
                {
                    title: "12. Instaladores de Paneles Solares",
                    pain: "Fotos técnicas aburridas de techos sucios.",
                    contribution: "Muestras una casa moderna y ecológica con un cielo azul perfecto. Transmites 'tecnología y ahorro' en lugar de 'obra'."
                }
            ]
        },
        {
            title: "E-commerce y Retail",
            subtitle: "Producto físico",
            icon: Store,
            niches: [
                 {
                    title: "13. Resellers de Sneakers (Zapatillas)",
                    pain: "Zapatillas de $500 fotografiadas sobre la alfombra de la casa.",
                    contribution: "Creas fondos urbanos (graffiti, asfalto mojado, canchas de basket). Hype visual puro."
                },
                {
                    title: "14. Marcas de Ropa de Baño (Bikinis)",
                    pain: "Fotos de maniquí o sobre la cama. Falta el contexto de 'playa/vacaciones'.",
                    contribution: "Integras a la modelo (o la prenda) en una playa paradisíaca con el mar moviéndose de fondo."
                },
                {
                    title: "15. Muebles Artesanales / Carpintería",
                    pain: "Fotos en el taller lleno de aserrín.",
                    contribution: "'Home Staging'. Pones esa mesa de madera en un comedor nórdico perfectamente decorado."
                },
                {
                    title: "16. Tiendas de PC Gaming / Tech",
                    pain: "Fotos con los cables desordenados y reflejos en las pantallas.",
                    contribution: "Exageras las luces RGB (neón) y creas un ambiente 'Cyberpunk'. Haces que los ventiladores giren con Motion AI."
                }
            ]
        },
        {
            title: "Experiencias y Estilo de Vida",
            subtitle: "",
            icon: Mountain,
            niches: [
                {
                    title: "17. Estudios de Yoga / Pilates",
                    pain: "Salones vacíos con colchonetas tiradas.",
                    contribution: "Atmósfera de paz, rayos de luz solar entrando por la ventana (God Rays) y partículas de polvo flotando (Motion AI)."
                },
                {
                    title: "18. Glamping y Turismo Ecológico",
                    pain: "Fotos tomadas en días nublados donde el lugar se ve triste.",
                    contribution: "Cielos estrellados impresionantes, fogatas con fuego en movimiento y naturaleza vibrante."
                },
                {
                    title: "19. Organizadores de Bodas (Wedding Planners)",
                    pain: "Fotos de mesas vacías antes de que lleguen los invitados.",
                    contribution: "Iluminación mágica, velas parpadeando y destellos (bokeh) en las luces colgantes."
                },
                {
                    title: "20. Clínicas Veterinarias / Grooming (Peluquería Canina)",
                    pain: "Perros nerviosos con correas feas y fondo de azulejo blanco.",
                    contribution: "Fondos de parque soleado o estudio de color pastel. Haces que el pelaje se vea suave y esponjoso ('Fluffy')."
                }
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
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">20 Nichos de Alto Valor<br/>para tu Agencia IA.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Una guía curada para identificar oportunidades de alto margen donde un 'Atraco Visual' puede transformar un negocio de la noche a la mañana.
                    </p>

                    <div className="space-y-20">
                        {categories.map((category, catIndex) => (
                            <div key={catIndex}>
                                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
                                    <category.icon className="h-10 w-10 text-gold" />
                                    <div>
                                        <h3 className="text-3xl serif italic text-gray-900">{category.title}</h3>
                                        <p className="text-gray-500 italic">{category.subtitle}</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {category.niches.map((niche, nicheIndex) => (
                                        <div key={nicheIndex} className="bg-gray-50/50 p-6 border-l-2 border-gray-200 hover:border-gold transition-colors">
                                            <h4 className="font-bold text-lg mb-4">{niche.title}</h4>
                                            <p className="text-red-600/70 text-xs font-semibold mb-2"><strong className="text-red-800">El Dolor:</strong> {niche.pain}</p>
                                            <p className="text-green-600/80 text-xs font-semibold"><strong className="text-green-800">Tu Aporte:</strong> {niche.contribution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                         <div className="mt-24 p-10 bg-black text-white rounded-lg">
                            <h3 className="text-3xl serif italic text-gold mb-6">💬 Tip Estratégico</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300">No elijas al azar. Busca en Google Maps en tu ciudad cuál de estos nichos tiene más competencia.</p>
                                <p className="text-gray-400 italic">Si ves 50 barberías: Ese es tu nicho. Hay competencia, lo que significa que necesitan destacar urgentemente.</p>
                                <p className="text-gray-400 italic">Si ves solo 1 tienda de paneles solares: Evítalo, no tienen presión por mejorar su imagen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NichosRentablesPage;
