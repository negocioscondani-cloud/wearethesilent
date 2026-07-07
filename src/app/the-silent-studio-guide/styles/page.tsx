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

const stylesData = [
    {
      category: "ESTILOS CINEMATOGRÁFICOS (Cine & Narrativa)",
      sections: [
        {
          title: "Narrativos clásicos",
          items: [
            { name: "Cinematográfico clásico (Hollywood style)", moment: "Cuando lanzas marca, curso premium o proyecto grande.", usage: "Elevar percepción, construir autoridad y narrativa épica." },
            { name: "Film Noir", moment: "Cuando quieres comunicar misterio, lujo oscuro o tensión.", usage: "Perfumes, fitness masculino, marcas con carácter fuerte." },
            { name: "Neorrealismo", moment: "Cuando necesitas autenticidad cruda.", usage: "Marca personal honesta, historias reales, impacto social." },
            { name: "Nouvelle Vague", moment: "Cuando quieres romper estructura tradicional.", usage: "Creativos, artistas, campañas disruptivas." },
            { name: "Cine Arte / Arthouse", moment: "Cuando el objetivo es profundidad, no ventas rápidas.", usage: "Posicionamiento intelectual o cultural." },
            { name: "Cine Experimental", moment: "Cuando buscas diferenciarte radicalmente.", usage: "Branding artístico o nichos alternativos." },
            { name: "Cine Mudo", moment: "Cuando quieres que la imagen comunique sola.", usage: "Mensajes universales sin idioma." },
            { name: "Cine Documental", moment: "Cuando necesitas confianza inmediata.", usage: "Testimonios, procesos reales, credibilidad." },
            { name: "Mockumentary", moment: "Cuando vendes entretenimiento o ironía.", usage: "Marcas juveniles o humor inteligente." },
            { name: "Cine Ensayo", moment: "Cuando comunicas ideas profundas.", usage: "Marca personal reflexiva o educativa." }
          ]
        },
        {
          title: "Estéticos contemporáneos",
          items: [
            { name: "Dark cinematic", moment: "Para productos premium o poder masculino.", usage: "Transmitir exclusividad." },
            { name: "High contrast dramatic", moment: "Para impacto visual fuerte en anuncios.", usage: "Captar atención rápida." },
            { name: "Moody atmospheric", moment: "Cuando vendes emoción más que producto.", usage: "Perfumes, moda, lifestyle aspiracional." },
            { name: "Minimalist cinematic", moment: "Para comunicar claridad y lujo moderno.", usage: "Tecnología, coaching premium." },
            { name: "Epic fantasy", moment: "Para contar historias grandes o transformaciones.", usage: "Lanzamientos, storytelling de marca." },
            { name: "Cyberpunk", moment: "Productos tecnológicos o gaming.", usage: "Futurismo y disrupción." },
            { name: "Dystopian", moment: "Cuando el mensaje es “esto está mal y debe cambiar”.", usage: "Campañas de transformación." },
            { name: "Retro 80s / VHS", moment: "Cuando apelas a nostalgia.", usage: "Públicos 30–45 años." },
            { name: "Hyperreal cinematic", moment: "Cuando quieres exagerar detalles del producto.", usage: "Alta calidad percibida." },
            { name: "Slow cinema", moment: "Cuando quieres transmitir calma y lujo.", usage: "Bienestar, hoteles, gastronomía." },
            { name: "Natural light realism", moment: "Cuando necesitas cercanía sin parecer producido.", usage: "Marca personal y lifestyle." }
          ]
        },
        {
          title: "Técnicos",
          items: [
            { name: "Plano secuencia", moment: "Para demostrar profesionalismo.", usage: "Impacto narrativo continuo." },
            { name: "Cámara en mano", moment: "Cuando quieres realismo.", usage: "UGC más cinematográfico." },
            { name: "Found footage", moment: "Cuando quieres parecer espontáneo.", usage: "Viralidad o campañas inmersivas." },
            { name: "POV", moment: "Para aumentar identificación.", usage: "Experiencias y tutoriales." },
            { name: "Cámara lenta", moment: "Para magnificar emoción o textura.", usage: "Producto premium." },
            { name: "Time-lapse / Hyperlapse", moment: "Para mostrar proceso o evolución.", usage: "Construcción, transformación, eventos." }
          ]
        }
      ]
    },
    {
      category: "ESTILOS PUBLICITARIOS",
      sections: [
        {
          title: "Alta gama",
          items: [
            { name: "Luxury editorial", moment: "Subir precio.", usage: "Posicionamiento premium." },
            { name: "Brutalismo", moment: "Marca fuerte, masculina o disruptiva.", usage: "Diferenciación visual." },
            { name: "Minimalismo premium", moment: "Tecnología o consultoría.", usage: "Claridad y elegancia." },
            { name: "High gloss commercial", moment: "Belleza o glamour.", usage: "Deseabilidad." }
          ]
        },
        {
          title: "Producto",
          items: [
            { name: "Packshot", moment: "Mostrar producto claro.", usage: "Confianza." },
            { name: "Floating product", moment: "Innovación visual.", usage: "Impacto." },
            { name: "Macro detail", moment: "Justificar precio alto.", usage: "Percepción de calidad." },
            { name: "Lifestyle", moment: "Hacerlo aspiracional.", usage: "Identificación." }
          ]
        },
        {
          title: "Marketing directo",
          items: [
            { name: "Direct response", moment: "Lanzamiento o ads.", usage: "Conversión inmediata." },
            { name: "Testimonial", moment: "Reducir objeciones.", usage: "Credibilidad." },
            { name: "Before/After", moment: "Mostrar transformación.", usage: "Venta rápida." },
            { name: "Problem-Solution", moment: "Cuando el dolor es claro.", usage: "ROI alto." }
          ]
        }
      ]
    },
    {
      category: "REDES SOCIALES",
      sections: [{ items: [
        { name: "UGC", moment: "Venta directa.", usage: "Confianza." },
        { name: "Talking head", moment: "Educación o autoridad.", usage: "Marca personal." },
        { name: "Vlog", moment: "Humanizar marca.", usage: "Comunidad." },
        { name: "ASMR", moment: "Retención visual.", usage: "Engagement." },
        { name: "Greenscreen", moment: "Responder tendencia.", usage: "Viralidad." }
      ]}]
    },
    {
      category: "ANIMACIÓN",
      sections: [{ items: [
        { name: "Explainer 2D", moment: "Explicar procesos.", usage: "Educación clara." },
        { name: "Pixar style", moment: "Conectar emocionalmente.", usage: "Storytelling." },
        { name: "3D hiperreal", moment: "Tecnología o lujo.", usage: "Impacto." },
        { name: "Stop motion", moment: "Diferenciación creativa.", usage: "Recordación." }
      ]}]
    },
    {
      category: "IA Y DIGITAL",
      sections: [{ items: [
        { name: "AI Avatars", moment: "Escalar contenido.", usage: "Automatización." },
        { name: "Virtual influencer", moment: "Construir marca digital.", usage: "Innovación." },
        { name: "AI editorial", moment: "Subir estética sin producción física.", usage: "Premium accesible." },
        { name: "Digital twin", moment: "Marca personal escalable.", usage: "Productividad." }
      ]}]
    },
    {
      category: "FOTOGRÁFICOS",
      sections: [{ items: [
        { name: "Editorial fashion", moment: "Posicionamiento alto.", usage: "Branding." },
        { name: "Street", moment: "Autenticidad urbana.", usage: "Cultura." },
        { name: "Fine art", moment: "Marca artística.", usage: "Diferenciación." },
        { name: "Low key", moment: "Misterio.", usage: "Exclusividad." },
        { name: "High key", moment: "Pureza, limpieza.", usage: "Belleza, salud." }
      ]}]
    },
    {
      category: "HÍBRIDOS MODERNOS",
      sections: [{ items: [
        { name: "Se usan cuando el mercado está saturado y necesitas destacar.", moment: "N/A", usage: "Elevar percepción sin perder conversión." },
      ]}]
    },
    {
        category: "EMOCIONAL",
        sections: [{ items: [
            { name: "Aspiracional", moment: "N/A", usage: "vender estilo de vida" },
            { name: "Intimista", moment: "N/A", usage: "generar conexión" },
            { name: "Crudo", moment: "N/A", usage: "romper ilusiones" },
            { name: "Épico", moment: "N/A", usage: "lanzar grande" },
            { name: "Autoritario", moment: "N/A", usage: "liderazgo" },
            { name: "Minimal zen", moment: "N/A", usage: "calma y claridad" }
        ]}]
    },
    {
        category: "TÉCNICOS",
        sections: [{ items: [
            { name: "Drone", moment: "N/A", usage: "escala" },
            { name: "FPV", moment: "N/A", usage: "dinamismo" },
            { name: "9:16", moment: "N/A", usage: "redes" },
            { name: "Anamorphic", moment: "N/A", usage: "cine real" },
            { name: "120fps", moment: "N/A", usage: "lujo visual" }
        ]}]
    }
];


const StylesPage = () => {
    const router = useRouter();
    
    return (
        <main className="bg-white text-black">
            <div className="pt-40 pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-gray-100 text-sm text-gray-500 hover:text-black">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Módulo
                    </Button>
                    <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">Biblioteca de Estilos.</h2>
                    <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed mb-16">
                        Instrucciones: Dale click al desplegable para ver todos los estilos.
                    </p>

                    <Accordion type="multiple" className="w-full">
                        {stylesData.map((categoryData, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-2xl serif italic hover:no-underline">{categoryData.category}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-8 pt-4">
                                    {categoryData.sections.map((section, sIndex) => (
                                        <div key={sIndex}>
                                            {section.title && <h4 className="font-bold text-lg mb-4 text-gold">{section.title}</h4>}
                                            <div className="space-y-6">
                                            {section.items.map((item, iIndex) => (
                                                <div key={iIndex} className="p-4 border-l-2 border-gray-200">
                                                    <h5 className="font-bold">{item.name}</h5>
                                                    {item.moment !== "N/A" && <p className="text-xs text-gray-500"><strong className="text-gray-700">Momento:</strong> {item.moment}</p>}
                                                    {item.usage && <p className="text-xs text-gray-500"><strong className="text-gray-700">Uso:</strong> {item.usage}</p>}
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </main>
    );
};

export default StylesPage;
