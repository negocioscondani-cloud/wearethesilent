'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PeticionesPage = () => {
    const router = useRouter();

    const peticionesData = [
        {
            title: "1) Restaurante / Gastronomía",
            prompts: [
                "De esta imagen dame una publicidad elegante estilo estudio, editorial gastronómico premium, que haga que el plato se sienta “de chef Michelin”, con iluminación cálida controlada y textura hiperrealista.",
                "De esta imagen dame una campaña tipo “menú de lujo”, minimalista y limpia, con fondo oscuro sofisticado, vapor y brillo controlado, que provoque hambre inmediata.",
                "De esta imagen dame un anuncio estilo food commercial, ultra apetitoso, con composición de revista, resaltando jugosidad, crocancia y detalle de ingredientes."
            ]
        },
        {
            title: "2) Bebidas / Café / Cocteles",
            prompts: [
                "De esta imagen dame una publicidad elegante estilo bar premium, editorial de lujo, con condensación perfecta, hielo detallado y luz lateral dramática.",
                "De esta imagen dame una campaña para café con estética “quiet luxury”, vapor suave, textura del grano y crema resaltada, fondo minimalista de estudio.",
                "De esta imagen dame un anuncio moderno tipo “brand film still”, con atmósfera sofisticada y sensación de frescura extrema."
            ]
        },
        {
            title: "3) Cosmética / Skincare / Perfume",
            prompts: [
                "De esta imagen dame una publicidad de skincare estilo laboratorio premium, clean pharmaceutical, iluminación blanca suave, piel y producto ultra nítidos, sensación de confianza clínica.",
                "De esta imagen dame un anuncio editorial de perfume de lujo, dramático, minimalista, con reflejos controlados y aura de poder silencioso.",
                "De esta imagen dame una campaña cosmética tipo Vogue backstage, premium, con textura realista y composición de marca internacional."
            ]
        },
        {
            title: "4) Salud / Odontología / Clínica estética",
            prompts: [
                "De esta imagen dame una publicidad clínica premium, clean tech, sensación de higiene y confianza, diseño minimalista, luz blanca impecable.",
                "De esta imagen dame una campaña estética de alto valor, “before/after” implícito sin mostrarlo, con feeling de transformación elegante y profesional.",
                "De esta imagen dame una imagen de anuncio para odontología que inspire precisión, tecnología y resultados, estilo estudio limpio y moderno."
            ]
        },
        {
            title: "5) Bienes raíces / Arquitectura",
            prompts: [
                "De esta imagen dame una publicidad inmobiliaria estilo editorial arquitectónico, luz natural perfecta, líneas rectas, sensación de exclusividad y amplitud.",
                "De esta imagen dame un anuncio de propiedad tipo “revista de diseño”, con estética minimalista premium y enfoque en materiales (madera, concreto, vidrio).",
                "De esta imagen dame una campaña brutalista moderna que exprese estatus, orden y poder silencioso."
            ]
        },
        {
            title: "6) Moda / Accesorios / Joyería",
            prompts: [
                "De esta imagen dame una publicidad editorial de lujo para accesorios, macro detalle de materiales, luz dramática y fondo minimalista.",
                "De esta imagen dame un anuncio tipo “high fashion campaign”, con estética de marca europea, composición de revista, sensación de exclusividad.",
                "De esta imagen dame una campaña para joyería que se sienta $100k: reflejos controlados, oro realista, textura premium, aura de poder."
            ]
        },
        {
            title: "7) Tecnología / Apps / SaaS",
            prompts: [
                "De esta imagen dame una publicidad estilo tech premium, clean minimal, iluminación de estudio, sensación de innovación, claridad y orden.",
                "De esta imagen dame una campaña tipo Apple-style, fondo limpio, producto protagonista, sombras suaves, enfoque ultra nítido y elegante.",
                "De esta imagen dame un anuncio moderno que inspire confianza y alto rendimiento, con composición de landing page premium."
            ]
        },
        {
            title: "8) Gimnasio / Fitness / Suplementos (sin extremos)",
            prompts: [
                "De esta imagen dame una publicidad fitness premium, estética fuerte pero elegante, sensación de disciplina y energía, iluminación dramática sin exageraciones.",
                "De esta imagen dame una campaña de suplementos estilo laboratorio moderno, clean, confiable, textura realista y enfoque en calidad.",
                "De esta imagen dame un anuncio que inspire “consistencia y progreso”, con estética editorial sobria y poderosa."
            ]
        },
        {
            title: "9) Educación / Cursos / Mentorías",
            prompts: [
                "De esta imagen dame una publicidad educativa premium, estética de autoridad, limpia y profesional, que inspire confianza y claridad.",
                "De esta imagen dame una campaña tipo “masterclass”, con sensación de alto valor, orden, elegancia y aspiración.",
                "De esta imagen dame un anuncio para mentoría que exprese transformación real, pero con estilo editorial minimalista."
            ]
        },
        {
            title: "10) Turismo / Hoteles / Experiencias",
            prompts: [
                "De esta imagen dame una publicidad turística editorial de lujo, sensación de exclusividad, calma, y experiencia premium.",
                "De esta imagen dame una campaña para hotel tipo revista, con luz hermosa, atmósfera aspiracional y composición elegante.",
                "De esta imagen dame un anuncio de experiencia (tour/spa) que inspire escape y estatus, con estética cinematográfica suave."
            ]
        },
        {
            title: "11) Automotriz / Detailing (sin riesgos)",
            prompts: [
                "De esta imagen dame una publicidad automotriz premium, brillo controlado, reflejos elegantes, sensación de poder y precisión.",
                "De esta imagen dame un anuncio para detailing con estética de lujo, textura de pintura perfecta, agua/espuma editorial, calidad extrema.",
                "De esta imagen dame una campaña tipo “garage de lujo”, minimalista, oscura, refinada, con presencia brutal."
            ]
        },
        {
            title: "12) Finanzas / Seguros / Legal",
            prompts: [
                "De esta imagen dame una publicidad corporativa premium, que inspire confianza y solidez, estética minimalista, seria y elegante.",
                "De esta imagen dame un anuncio para seguros con sensación de protección de alto nivel, calmado, limpio, con look de marca grande.",
                "De esta imagen dame una campaña legal tipo “autoridad silenciosa”, elegante, sobria, con estética editorial."
            ]
        }
    ];

    const miniFormula = {
        title: "Mini fórmula para que Luxe te lo devuelva aún mejor",
        content: `Cuando pegues cualquiera, al final agrega una línea como:\n“Devuélveme un prompt completo + un JSON listo para Freepik, con cámara, luz, fondo, textura, composición y restricciones.”`,
        extra: `Si me dices tu nicho principal (por ejemplo alimentos, clínica, inmobiliaria, etc.), te hago 20 peticiones solo para ese nicho, ya con variaciones de estilo (editorial, 3D, brutalista, pharma, lifestyle) y con ángulos de campaña (estatus, deseo, confianza, frescura, etc.).`
    };

    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Biblioteca de Peticiones.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Instrucciones: Dale click al desplegable para ver todos las peticiones.
                    </p>

                    <Accordion type="multiple" className="w-full">
                        {peticionesData.map((peticion, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-xl serif italic hover:no-underline">{peticion.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-4 pt-4">
                                        {peticion.prompts.map((prompt, pIndex) => (
                                            <div key={pIndex} className="p-4 bg-gray-50 border-l-2 border-gray-200 text-sm font-mono text-gray-700">
                                                {prompt}
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    
                    <div className="mt-24 p-10 bg-black text-white">
                        <h3 className="text-3xl serif italic text-gold mb-6">{miniFormula.title}</h3>
                        <div className="space-y-4 font-mono text-sm">
                            <p className="whitespace-pre-wrap">{miniFormula.content}</p>
                            <p className="italic pt-4 border-t border-gold/20">{miniFormula.extra}</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default PeticionesPage;
