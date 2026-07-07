
'use client';
import { Film, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

const tutorials = [
  {
    videoId: '33Y-GAOvRng',
    title: 'Crea un Moodboard Profesional con FreePic',
    description: "En este video, les muestro cómo crear un moodboard en FreePic utilizando la práctica herramienta 'Space'. Aprenderán el proceso paso a paso, desde la selección de plantillas hasta la creación de imágenes inspiradas en mood boards. Aquí les explico cómo hacer un moodboard para cualquier proyecto de diseño gráfico.",
    links: [],
  },
  {
    videoId: 'PKIxl3yr10U',
    title: 'Revoluciona tu Contenido con Higgsfield AI',
    description: "¡Hola a todos! 👋 En el video de hoy exploramos una herramienta que está revolucionando la creación de contenido: Higgsfield. Si alguna vez quisiste dirigir tus propias escenas de cine pero no tienes cámaras costosas ni actores, esta plataforma es para ti.\n\nHoy les muestro mi flujo de trabajo completo usando sus modelos más potentes (como Kling 2.6 y Nano Banana Pro) y cómo usar el nuevo Cinema Studio para tener control total sobre el movimiento y el audio. ¡Es increíble lo fácil que es pasar de una idea a un video terminado!\n\nEn este tutorial, ponemos a prueba la capacidad de Higgsfield para generar tomas cinematográficas, consistencia de personajes y efectos de sonido sincronizados. Verás por qué se considera una de las plataformas más amigables para creadores hoy en día.",
    links: [
        { text: 'Empieza a crear tus videos aquí', href: 'https://higgsfield.ai/create/video' },
        { text: 'Aprende más en el blog oficial', href: 'https://higgsfield.ai/blog/AI-Video-Generator-How-to-Create-on-Higgsfield' }
    ]
  },
  {
    videoId: 'kNfb3Nec4-A',
    title: 'Crea Cortometrajes con Herramientas de IA Gratuitas',
    description: "Hola creadores, ¿quieres saber cómo producir cortometrajes o videos de alta calidad usando únicamente herramientas de Inteligencia Artificial gratis?\n\nEn este tutorial paso a paso, te muestro mi flujo de trabajo completo para transformar un guion simple en escenas animadas, manteniendo la consistencia del personaje y un movimiento de cámara fluido.\n\nDescubre cómo lo hacemos:\n\nGuion a Prompt Avanzado (The Silent Studio): Usamos una IA especializada (Cine AI) dentro de The Silent Studio para analizar un guion y fragmentarlo en prompts detallados y listos para usar en cualquier generador de imágenes. ¡Esto asegura que cada escena sea perfecta!\n\nGeneración de Imagen con Consistencia (WHISK): Te muestro cómo subir un personaje previo y usar prompts avanzados para generar imágenes con fidelidad, utilizando la función de ajuste y los prompts maestros para describir al personaje a fondo.\n\nAnimación de Video Profesional GRATIS (Meta AI): Finalmente, animamos las imágenes con Meta AI, logrando un movimiento de paneo sutil, consistencia en el fondo y una calidad asombrosa, ¡todo sin pagar un centavo!\n\nSi buscas una forma rápida, económica y de alta calidad para crear contenido audiovisual con IA, este video es para ti. ¡No olvides suscribirte para más tutoriales y flujos de trabajo avanzados!",
    links: []
  },
  {
    videoId: 'yrszsZgbO_s',
    title: 'Transforma Imágenes en Video Cinematográfico con Hailuo AI',
    description: "Aprendé paso a paso cómo transformar una simple imagen o idea en un video cinematográfico de alta calidad utilizando Hailuo AI, una de las herramientas más poderosas de inteligencia artificial para creadores de contenido.\n\nEn este tutorial te mostramos:\n✅ Cómo generar una imagen base profesional con IA\n✅ Cómo usar el GPT Luxe Prompt Studio para crear prompts precisos y realistas\n✅ Cómo transformar ese prompt en una animación cinematográfica con Hailuo AI\n✅ Configuración correcta: modelo, resolución, duración y cantidad\n✅ Consejos para lograr una estética visual premium con cámara real, luz imperfecta y textura editorial\n\nAdemás, vas a aprender cómo combinar Hailuo AI y Luxe Prompt Studio para lograr resultados de nivel profesional en tus proyectos audiovisuales:\n\nImagen estática → Prompt de lujo (fotográfico)\n\nVideo animado → Prompt cinematográfico (con cámara y acción)\n\nPerfecto para:\n🎥 Creadores de contenido\n🧠 Emprendedores digitales\n📸 Fotógrafos y directores de arte\n💡 Agencias creativas y productoras",
    links: [
        { text: 'Accede a Hailuo Ai en este enlace', href: 'https://hailuoai.video/' },
        { text: 'GPT Luxe Prompt Agency', href: 'https://thesilent.studioboom.online/' }
    ]
  }
];


export default function TutorialsPage() {
  const { t } = useTranslation();
  return (
    <div className="animate-in fade-in duration-500 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl py-24 md:py-32 px-5 md:px-8">
        <section id="tutorials">
          <div className="text-center mb-12 md:mb-16">
            <Film className="h-16 w-16 mx-auto text-primary mb-6" />
            <h2 className="font-headline text-4xl md:text-5xl">
              Cinematic Tutorials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Step-by-step guides on creating cinematic content, from scripting
              to final execution.
            </p>
          </div>
          <div className="space-y-16">
            {tutorials.map((tutorial) => (
              <div key={tutorial.videoId} className="grid md:grid-cols-2 gap-8 items-start">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg border"
                    src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-2xl">{tutorial.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{tutorial.description}</p>
                  {tutorial.links.length > 0 && (
                      <div className="flex flex-col items-start space-y-2 pt-2">
                          {tutorial.links.map((link, index) => (
                              <Button key={index} asChild variant="link" className="p-0 h-auto text-base">
                                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                    {link.text} <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                              </Button>
                          ))}
                      </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className="border-t border-border py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1180px] px-5 text-center md:px-8">
          <h3 className="font-headline text-3xl md:text-4xl">
            {t('suiteOffer.title')}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t('suiteOffer.subtitle')}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/the-silent-studio">{t('header.access')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
