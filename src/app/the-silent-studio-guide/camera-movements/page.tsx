'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CameraMovementsPage = () => {
    const router = useRouter();

    const cameraMovements = [
        { name: 'Pan (Izquierda/Derecha)', description: 'La cámara rota horizontalmente. Ideal para seguir a un sujeto o revelar un paisaje.' },
        { name: 'Tilt (Arriba/Abajo)', description: 'La cámara se inclina verticalmente. Revela la altura de un objeto o personaje.' },
        { name: 'Zoom In/Out', description: "'Zoom In' para drama o detalle. 'Zoom Out' para contexto." },
        { name: 'Dolly In/Out', description: 'Movimiento físico de la cámara. Se siente más inmersivo que un zoom digital.' },
        { name: 'Orbit', description: 'Movimiento circular alrededor de un elemento específico.', highlight: true },
        { name: 'Crane / Jib Shot', description: 'Movimiento vertical amplio y fluido. Altamente cinematográfico.' },
        { name: 'Handheld / Shaky Cam', description: 'Simula una cámara en mano. Aporta realismo y urgencia.' },
    ];

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Guía de Movimientos<br/>de Cámara.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Domina el lenguaje del cine para dirigir tus escenas de IA con intención y precisión.
                    </p>

                    <div className="space-y-8">
                        {cameraMovements.map(move => (
                            <div key={move.name} className={`p-6 border-l-4 ${move.highlight ? 'border-gold' : 'border-gray-200'}`}>
                                <h4 className={`text-xl font-bold mb-2 serif ${move.highlight ? 'text-gold' : 'text-black'}`}>{move.name}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{move.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CameraMovementsPage;
