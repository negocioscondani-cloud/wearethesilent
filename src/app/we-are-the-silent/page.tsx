'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Film, 
  Image as ImageIcon, 
  Compass, 
  FileText, 
  Layers,
  ChevronDown,
  CheckCircle,
  HelpCircle,
  Play,
  Monitor,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function WeAreTheSilentPage() {
  const [activeTab, setActiveTab] = useState('workflow');

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workflowModules = [
    {
      number: '01',
      title: 'Transformación de Producto',
      label: 'De foto normal a publicidad premium',
      description: 'Para transformar una foto de producto normal en una pieza publicitaria premium, el truco está en cómo combinamos herramientas clave como Flow, asistentes de IA (DeepSeek, ChatGPT, Gemini, Claude) y Pinterest para extraer ideas. Si la base es buena, la IA hará magia.',
      image: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif',
      steps: [
        '<strong>Base de calidad:</strong> Asegúrate de que la foto de tu producto sea de alta calidad, el logo se vea claro y el texto se entienda perfectamente.',
        '<strong>Los 3 Caminos de Prompting:</strong> 1) <em>Específico:</em> Sube referencias de Pinterest y pídele a la IA replicar el estilo. 2) <em>Autónomo:</em> Pide a la IA que analice tu producto y genere 15 prompts publicitarios de una vez. 3) <em>Inspiración masiva:</em> Sube varias referencias de Pinterest para combinar ideas.',
        '<strong>Fase de Ejecución en Flow:</strong> Pasa el prompt ganador a Flow, sube tu producto y el logo, y selecciona el modelo <em>nano banana 2</em> o <em>pro</em>. Repite, ajusta y aplica tu control de calidad final.'
      ]
    },
    {
      number: '02',
      title: 'Personajes y Avatares',
      label: 'Creación de consistencia y clones de rostros',
      description: 'Dale vida a tus narraciones creando personajes consistentes o avatares con tu propio rostro desde cero.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif',
      steps: [
        '<strong>Estructura en JSON:</strong> Pídele a DeepSeek o tu asistente IA favorito que genere un prompt en formato JSON con los detalles de etnia, ropa, rasgos, deformaciones y estilo (UGC, cinematográfico, 3D, 2D o Stop Motion).',
        '<strong>Generación inicial:</strong> Pega el prompt en Flow y escoge tu personaje favorito.',
        '<strong>Hoja de Personaje (Character Sheet):</strong> Sube tu personaje a DeepSeek y pídele una hoja con vistas (frontal, lateral, trasera y expresiones). Luego ejecuta este prompt en Flow con la imagen de referencia.',
        '<strong>Tu propio Avatar:</strong> Si es para ti, sube 4 fotos tuyas (frente, perfil, cuerpo completo) a DeepSeek y solicita tu hoja de personaje.'
      ]
    },
    {
      number: '03',
      title: 'Escenarios y Props',
      label: 'Construcción de consistencia espacial y objetos',
      description: 'Define los escenarios ideales donde situarás a tus personajes, asegurando consistencia en la iluminación y la ambientación.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif',
      steps: [
        '<strong>Definición del entorno:</strong> En DeepSeek, define con precisión el escenario (ej. <em>"Exterior, día, soleado, 1803, arquitectura rústica del viejo oeste"</em>) y sé muy específico con la luz (natural, estudio o neón).',
        '<strong>Variación de Planos:</strong> Genera encuadres diversos en Flow (plano medio, detalle, gran angular, POV, primer plano, plano general, toma aérea) para dar dinamismo a la narrativa.',
        '<strong>Accesorios y Vestimenta (Props):</strong> Lista lo que tu personaje necesita según su rol (ej. <em>"bandido vaquero"</em>). Genera una hoja de personaje para producción con fondo blanco y luego intégralo en acción en el escenario.'
      ]
    },
    {
      number: '04',
      title: 'Guiones y Estructuras',
      label: 'Escribir para enganchar y retener',
      description: 'Escribe guiones magnéticos garantizando que tus videos tengan retención y cumplan una estructura publicitaria o cinematográfica.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif',
      steps: [
        '<strong>Investigación Inteligente:</strong> Instala la extensión "YouTube to NotebookLM", busca un referente exitoso de tu nicho en YouTube, y carga sus subtítulos como fuente de conocimiento en tu cuaderno.',
        '<strong>Redacción de Series Cortas:</strong> Pídele guiones de 30 a 45 segundos siguiendo el arco de: <em>Hook, intro, re-hook, desarrollo, moraleja y llamado a la acción</em>.',
        '<strong>Narrativa de Ficción:</strong> Si creas cortometrajes, implementa estructuras de guion clásicas como la estructura aristotélica o el viaje del héroe.'
      ]
    },
    {
      number: '05',
      title: 'Videos y Animación',
      label: 'Dar movimiento y dirección a las tomas',
      description: 'El momento clave: animar tus secuencias controlando cada variable visual y sonora a través de la inteligencia artificial.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif',
      steps: [
        '<strong>Elección de Motor:</strong> Sube tu hoja de personaje y escenarios a la herramienta. Selecciona el modelo (Gemini Omni o Veo 3.1) según los puntos de tu plan.',
        '<strong>Estructura de la Instrucción:</strong> Define la acción de inicio a fin (ej. <em>"El rey camina del comedor a la sala de trono"</em>), la emoción (tenso, asustado), vestimenta, entorno e iluminación.',
        '<strong>Diálogos y Voz:</strong> Escribe diálogos breves (máximo una línea y media) entre comillas. Configura el idioma, acento y decide si integrarás música.',
        '<strong>Movimiento y Texto:</strong> Indica los movimientos de cámara y define la tipografía y animación de los subtítulos.'
      ]
    },
    {
      number: '06',
      title: 'Edición y Storyboard',
      label: 'El montaje final y control de calidad',
      description: 'Ordena tus tomas en el editor, realiza los cortes necesarios y crea tu mapa visual previo para asegurar coherencia.',
      image: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093856.avif',
      steps: [
        '<strong>El Storyboard de Apoyo:</strong> Genera una cuadrícula de storyboard (ej. 3x4) en Flow basándote en tu guion frase por frase. Sube la imagen a DeepSeek para obtener los prompts individuales en formato JSON.',
        '<strong>Limpieza de Clips:</strong> En tu editor de video (CapCut, Premiere), corta y selecciona las mejores tomas. Elimina deformaciones y transiciones no deseadas.',
        '<strong>Sonido y B-Roll:</strong> Añade tomas de apoyo y selecciona música que actúe como un elemento integrado en la puesta en escena, manteniendo el estándar de cine.'
      ]
    }
  ];

  const exercises = [
    {
      title: "1. Diario de Narrativa Digital",
      content: "Grábate un video corto diario con tu celular. No tienes que publicarlo, es tu diario personal. Cuenta de forma simple lo que hiciste ayer, como cuando te topas a alguien y le dices: 'Ayer fui a la pulpería, me topé a don Gustavo, me contó que Doña Lela anda enferma y tiene que ir a Cartago por unos medicamentos en el bus de las 9'."
    },
    {
      title: "2. Bocetos Rápidos de Personajes",
      content: "Dedica 10 minutos al día a hacer bocetos de personajes. Escoge tres palabras al azar (ej. 'castillo', 'princesa', 'dragón'), cierra los ojos, dibuja lo primero que imagines y luego pídele a la IA que cree una fotografía épica basándose en ello."
    },
    {
      title: "3. Gimnasia del Humor",
      content: "Busca y lee tres chistes al día. El humor es un lubricante excelente para aflojar la rigidez del cerebro y disparar la creatividad."
    },
    {
      title: "4. Sinopsis de Un Solo Golpe",
      content: "Intenta escribir sinopsis de distintos géneros (ciencia ficción, documentales, etc.) resumiendo una película completa en una sola frase."
    },
    {
      title: "5. Vendedor Improvisado",
      content: "Toma cualquier objeto que veas a tu alrededor e invéntate un anuncio publicitario para venderlo en ese instante."
    },
    {
      title: "6. Semillero de Libros",
      content: "Trata de idear tres premisas o ideas de libros de géneros totalmente distintos: uno infantil, uno de acción y uno de autoayuda."
    },
    {
      title: "7. El Reparto del Pasado",
      content: "Piensa en tres personas reales de tu pasado (amigos, conocidos, profesores) que serían los actores perfectos para interpretar papeles en una película."
    },
    {
      title: "8. El Interrogador Creativo",
      content: "Elige a dos personas (reales o imaginarias) y escribe las tres mejores preguntas que les harías para conocer a fondo su personalidad."
    },
    {
      title: "9. Modificaciones a Clásicos",
      content: "Toma tres personajes icónicos de películas que ya conozcas y cámbiales un detalle fundamental (su vestimenta, su compañero, su actitud, su misión o su archienemigo) y analiza cómo cambiaría toda su historia."
    },
    {
      title: "10. El Embudo de Selección",
      content: "Crea 10 imágenes con IA. Descarta hasta quedarte con 5. Reduce a 3 y al final conserva únicamente la mejor. Esto te entrena para aplicar criterio estricto y no conformarte con lo primero que genera la IA."
    }
  ];

  return (
    <div className="silent-guide-body min-h-screen bg-[#0a0a0a] text-[#f9f7f2] font-body selection:bg-gold/30 antialiased">
      
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0a0a] z-0" />
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="text-gold uppercase tracking-[0.4em] text-[11px] font-bold block mb-4 animate-pulse">
            Ecosistema de Comunidad 2026
          </span>
          <h1 className="text-6xl md:text-9xl font-light leading-none tracking-tight italic">
            We Are <br />
            <span className="not-italic font-bold text-gold">The Silent.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed serif italic">
            La comunidad de Inteligencia Artificial para Directores Creativos y Creadores Audiovisuales.
          </p>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Aprende a transformar fotos cotidianas en piezas de lujo editorial, crear personajes consistentes, dirigir escenarios y animar comerciales de cine.
          </p>
          
          <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToId('manual-indice')} 
              className="btn-premium border border-[#f9f7f2] hover:border-gold px-8 py-4 text-xs tracking-[0.2em] font-semibold"
            >
              Explorar el Protocolo
            </button>
            <button 
              onClick={() => scrollToId('ejercicios')} 
              className="btn-premium bg-gold text-black border border-gold hover:bg-white hover:border-white px-8 py-4 text-xs tracking-[0.2em] font-semibold"
            >
              Entrenar Creatividad
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-36">
        
        {/* Intro Manifesto */}
        <section className="text-center max-w-3xl mx-auto border-y border-white/10 py-16">
          <h2 className="text-4xl serif italic text-gold mb-6">El Manifiesto de la Comunidad</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            "Este no es un manual de herramientas. Es un protocolo de ejecución. La lógica de trabajo que aprenderás es universal y funciona igual en <strong>Flow</strong>, <strong>Magnific</strong>, <strong>Freepik</strong>, <strong>Higgsfield</strong>, <strong>Kling</strong> o <strong>Seedance</strong>. La IA es solo tu equipo de ejecución; tú eres el Director de Arte que mantiene el control de calidad final."
          </p>
        </section>

        {/* Workflow Sections - Imitating The Silent Studio Guide */}
        <section id="manual-indice" className="space-y-32">
          <div className="text-center">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">El Camino Visual</span>
            <h2 className="text-5xl md:text-7xl serif italic mt-2 text-white">Protocolo de Operación</h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">Sigue cada paso secuencial para estructurar tus historias y dotar de consistencia a tus producciones de IA.</p>
          </div>

          <div className="space-y-32">
            {workflowModules.map((mod, index) => (
              <div 
                key={mod.number} 
                className={`grid lg:grid-cols-2 gap-16 items-center border-t border-white/5 pt-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual / Image */}
                <div className={`relative aspect-[3/4] w-full max-w-md mx-auto border border-white/10 overflow-hidden shadow-2xl group ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}>
                  <Image 
                    src={mod.image} 
                    alt={mod.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 border border-gold/40 text-gold text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                    Módulo {mod.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <span className="text-gold font-bold text-xs tracking-[0.3em] uppercase block">
                    {mod.label}
                  </span>
                  <h3 className="text-4xl md:text-5xl serif italic text-white">
                    {mod.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {mod.description}
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    {mod.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 text-sm text-gray-400">
                        <span className="step-number-circle mt-1">{idx + 1}</span>
                        <p dangerouslySetInnerHTML={{ __html: step }} className="leading-relaxed" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compatibility banner */}
        <section className="bg-gradient-to-r from-zinc-950 via-[#0d0d0d] to-zinc-950 border border-gold/20 p-8 md:p-16 text-center space-y-6 relative overflow-hidden rounded-sm">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-9xl text-gold font-black rotate-12 pointer-events-none">Ecosistema</div>
          <Sparkles className="mx-auto text-gold h-10 w-10 animate-pulse" />
          <h3 className="text-3xl md:text-4xl serif italic text-white">Compatibilidad con Todo el Ecosistema IA</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            ¿Te preguntas si este método es exclusivo de <strong>Flow</strong>? La verdad es que te funciona en todas las herramientas del mercado: <strong>Magnific, Freepik, Higgsfield</strong>, o modelos avanzados de video como <strong>Kling 3.0</strong> o <strong>Seedance 2.0</strong>. La lógica es universal. Puedes usar a tu asistente favorito (ChatGPT, Claude, DeepSeek, Gemini) para adaptar el prompt final al modelo que desees utilizar.
          </p>
        </section>

        {/* Creative Workout / Exercises */}
        <section id="ejercicios" className="space-y-12">
          <div className="text-center">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">El Músculo Creativo</span>
            <h2 className="text-4xl md:text-6xl serif italic text-white mt-2">10 Ejercicios Diarios</h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Integra estos ejercicios en tu rutina para entrenar tu ojo y soltar tu mano creativa. No hace falta que los hagas todos de golpe, lo importante es la constancia.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {exercises.map((ex, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="border border-white/5 bg-[#0e0e0e] px-6 rounded-sm"
                >
                  <AccordionTrigger className="text-white hover:text-gold hover:no-underline font-serif text-lg py-5 text-left">
                    {ex.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-6 pt-2">
                    {ex.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Community Call to Action */}
        <section className="text-center py-20 bg-zinc-950 border border-white/10 space-y-8 rounded-sm">
          <Users className="mx-auto text-gold h-12 w-12" />
          <h2 className="text-4xl md:text-6xl serif italic text-white">Únete a We Are The Silent</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
            De ahora en adelante seguiremos creando diferentes tipos de videos utilizando exactamente este mismo método. Ve ahora mismo a la comunidad, cuéntanos cuál es tu nicho y comparte tus creaciones para recibir feedback colectivo de la comunidad.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-gold text-black font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black py-6 px-10 transition-all text-xs">
              <a href="https://www.skool.com/we-are-the-silent-ia-8224/about" target="_blank" rel="noopener noreferrer">
                Entrar a la Comunidad
              </a>
            </Button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-24 bg-[#050505] px-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
        &copy; 2026 WE ARE THE SILENT | COMUNIDAD GLOBAL DE CREADORES DE IA
      </footer>

    </div>
  );
}
