'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TablaDiagnosticoPage = () => {
    const router = useRouter();

    const data = [
        { sintoma: 'El video “se siente largo” aunque dure 15–30s', causa: 'Inicio lento o demasiada introducción', correccion: 'Empieza directamente en la promesa o en el contraste. Corta todo lo que no empuja la idea central.' },
        { sintoma: 'Hay vistas, pero la retención cae en 1–3s', causa: 'Hook visual o verbal débil', correccion: 'Cambia el primer segundo: muestra resultado, problema, prueba o frase contundente. No ajustes el medio todavía.' },
        { sintoma: 'La gente llega al final, pero no comenta/guarda/DM', causa: 'Cierre sin intención', correccion: 'Cambia solo el cierre: CTA claro, pregunta específica o instrucción directa (“escribe X”).' },
        { sintoma: 'Se entiende, pero “no se siente pro”', causa: 'Falta de ritmo y de jerarquía visual', correccion: 'Aumenta microcambios cada 1.5–3s (corte, b-roll, texto). Subtítulos fraseados con highlights mínimos.' },
        { sintoma: 'Se ve “editado de más”', causa: 'Exceso de efectos, transiciones o zooms', correccion: 'Reduce recursos. Usa 1 tipo de zoom suave máximo y cortes limpios. El lujo es sobriedad.' },
        { sintoma: 'La voz suena lejos o “barata”', causa: 'Mala ecualización / ruido / música compitiendo', correccion: 'Prioriza voz: limpia ruido, sube presencia de la voz, baja música. Mejor música baja que voz forzada.' },
        { sintoma: 'El video está bien, pero “cansa”', causa: 'Subtítulos densos, demasiado texto o muy rápido', correccion: 'Reduce palabras. Bloques de 2–6 palabras. Mantén el texto el tiempo suficiente para leer sin pausar.' },
        { sintoma: 'El texto se tapa con la interfaz', causa: 'Ubicación incorrecta (safe zones)', correccion: 'Sube subtítulos y elementos clave a zona segura. Revisa con preview en pantalla completa.' },
        { sintoma: 'La música se siente “genérica”', causa: 'Track no corresponde al tono', correccion: 'Cambia por música más neutra o más elegante. Si no suma, elimínala.' },
        { sintoma: 'Todo está correcto, pero “falta impacto”', causa: 'Payoff sin énfasis', correccion: 'Inserta pausa breve antes del payoff + cambio visual + subtítulo corto. A veces el impacto es timing, no contenido.' },
    ];

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Tabla de Diagnóstico.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Usa esta tabla como “mecánico de edición”. No adivinas: detectas, corriges y vuelves a medir.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="p-4 text-sm font-bold uppercase text-gray-500">Síntoma (lo que se siente)</th>
                                    <th className="p-4 text-sm font-bold uppercase text-gray-500">Causa más probable</th>
                                    <th className="p-4 text-sm font-bold uppercase text-gray-500">Corrección premium (qué hacer)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                        <td className="p-4 font-semibold text-gray-800">{row.sintoma}</td>
                                        <td className="p-4 text-gray-600">{row.causa}</td>
                                        <td className="p-4 text-gray-600">{row.correccion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TablaDiagnosticoPage;
