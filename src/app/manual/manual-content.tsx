
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Cake, ChevronRight, Facebook, Heart, MessageCircle, Phone, X, ChevronLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';


const resultImages = [
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-highend-culinary-editorial-luxury__20536.avif', alt: 'Resultado Salsa' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-vogue-italia-haute-couture-editor__94954.avif', alt: 'Resultado Plato de Comida' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__hyperrealistic-cinematic-portrait-of-a-rugged-stou__41956.avif', alt: 'Resultado Boceto' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__65122.avif', alt: 'Resultado Rosquitas' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif', alt: 'Resultado Queque' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagestyle-fine-art-still-life-chiaroscuro-b__20544.avif', alt: 'Resultado Platano' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-ethereal-hyperrealism-hasselbla__45393.avif', alt: 'Resultado Hamburguesa 1' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-masterpiece-fidelity-phase-one-__45394.avif', alt: 'Resultado Hamburguesa 2' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-phase-on__69031-scaled.avif', alt: 'Resultado Botella' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif', alt: 'Resultado CGI' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__35668-scaled.avif', alt: 'Resultado Arri Ale 1' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46360-scaled.avif', alt: 'Resultado Arri Ale 2' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__46365-scaled.avif', alt: 'Resultado Arri Ale 3' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-surgical-hyperfidelity-arri-ale__29273-scaled.avif', alt: 'Resultado Arri Ale 4' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/tomafotografa-lifestyle-editorial-instante-cotidia__87806-scaled.avif', alt: 'Pura Coco Campaña 1' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093830.avif', alt: 'Pura Coco Campaña 2' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093837.avif', alt: 'Pura Coco Campaña 3' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093844.avif', alt: 'Pura Coco Campaña 4' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093850.avif', alt: 'Pura Coco Campaña 5' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093856.avif', alt: 'Pura Coco Campaña 6' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093902.avif', alt: 'Pura Coco Campaña 7' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__mejora-el-color-y-la-resolucin__37825.avif', alt: 'Resultado Despues 1' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/5-Pistachos.avif', alt: 'Resultado Despues 2' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-culinary-editorial-advert__66326-scaled.avif', alt: 'Resultado Despues 3' },
    { src: 'http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58444-scaled.avif', alt: 'Vanity Fair Style' }
];

const gemImages = [
    { name: 'UGC Society', src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif' },
    { name: 'Luxe Prompt Studio', src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif' },
    { name: 'The Oracle Luxe Agency', src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110938.avif' },
    { name: 'Neuro Scoring', src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif' },
    { name: 'Alpha Content', src: 'http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif' },
    { name: 'CineAI Director', src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif' },
];


type Route = 'brand' | 'agency';

const content = {
  brand: {
    heroTitle: "THE SILENT STUDIO",
    heroSubtitle: "Eleva tu marca y vende más con contenido premium hecho con IA. Flujos probados para resultados rápidos, sin depender de una agencia.",
    forWho: [
      "Si manejas una marca y no puedes pagar una agencia o personal caro.",
      "Si estás saturado y necesitas resultados ya, sin experimentar con herramientas."
    ],
    quickResults: "Herramientas y pasos ya validados para mejorar tu imagen hoy y publicar contenido con estándar premium en menos tiempo.",
    // Module 1
    module1Title: "El Método & El Acelerador",
    module1Label: "Aplica para: Tu marca (mejora visual + anuncios simples).",
    module1Method1Title: "Prospección Quirúrgica",
    module1Description: "Tomamos una foto de baja calidad de tu propio producto, la mejoramos y la preparamos para tus campañas. Este es el flujo:",
    module1Steps: [
        "Audita tus fotos actuales y elige una con alto potencial de mejora.",
        "Mejora la foto usando nuestro flujo de trabajo de IA para alinearla con un estándar premium.",
        "Usa la imagen transformada en tus redes, web o anuncios para proyectar mayor valor."
    ],
    module1Method2Title: "El Acelerador de Anuncios",
    module1SubDescription: "Crea un anuncio de 'Antes y Después' con tus propias fotos. Esto comunica al instante tu compromiso con la calidad y atrae a clientes dispuestos a pagar más.",
     // Module 2
    module2Title: "Flujo: Generación de Imágenes (El Duelo: Pago vs Gratis)",
    module2Label: "Aplica para: Producto y marca personal. Objetivo: Dominar la creación visual tanto con herramientas Pro (Freepik) como con Laboratorios Gratuitos (Google).",
    module2OptionA: "OPCIÓN A (PRO): Luxe Prompt + Freepik (Control Total)",
    module2OptionADesc: "Usa este flujo para crear imágenes de catálogo con alta fidelidad.",
    module2OptionASteps: [
        "Entra a Luxe Prompt Studio y sube la foto de tu producto.",
        "Pide un estilo (Editorial, 3D, etc.) y obtén el JSON.",
        "En Freepik Pikaso, usa el modelo Nano Banana Pro.",
        "<strong>CRÍTICO:</strong> En \"Referencia\", sube la foto real de tu producto.",
        "Pega el JSON, selecciona aspect ratio y resolución 4k.",
        "Genera."
    ],
    module2OptionB: "OPCIÓN B (GRATIS): Google Labs \"Whisk\" (Creatividad Fluida)",
    module2OptionBDesc: "Usa este flujo para experimentación rápida sin costo usando ImageFX.",
    module2OptionBSteps: [
        "Entra a Google Labs Whisk.",
        "Carga la Referencia: Haz clic en subir imagen y selecciona tu producto.",
        "El Prompt (La Mezcla): En el cuadro de texto, describe el entorno deseado.",
        "Ejemplo: \"Sobre piedra volcánica, luz de atardecer, 8k\".",
        "Generar: Whisk mezclará el ADN de tu foto con el texto.",
        "Descargar: Haz clic en la flecha para bajar tu imagen en alta resolución."
    ],
    // Module 3
    module3Title: "Flujo: Generación de Video",
    module3Label: "Aplica para: Reels y anuncios de tu marca.",
    module3OptionA: "OPCIÓN A (PRO): Animación y Storyboard (Kling)",
    module3OptionADesc: "Usa Kling 2.6 para animar tus mejores fotos con control físico.",
    module3OptionAPrompt: "Prompt: [Zoom In], [Líquido sirviéndose], [Efecto vapor], [High Fidelity].",
    module3OptionASubDesc: "Para anuncios de tu marca, usa el modo <strong>Storyboard</strong> de Freepik. Describe la narrativa con apoyo de esta Gema para crear secuencias listas para animar.",
    module3OptionB: "OPCIÓN B (GRATIS): Google Labs \"Flow\" (Cinematografía)",
    module3OptionBDesc: "Usa VideoFX para crear movimiento cinematográfico desde una imagen estática.",
    module3OptionBSteps: [
        "Entra a Google Labs Flow.",
        "Sube la Imagen: Usa la foto que creaste en el Módulo 02.",
        "Prompt de Movimiento: Describe cómo debe moverse la cámara.",
        "Ejemplo: \"Slow cinematic zoom in, water ripples moving\".",
        "Generar y Descargar: Obtén un clip listo para redes en segundos."
    ],
    // Module 4
    module4Title: "Flujo: Ingeniería de Textos y Guiones",
    module4Label: "Aplica para: Copywriting, Reels hablados y Páginas de Venta.",
    module4Method: "El Método Neuro-Scripting",
    module4Desc: "Aprende a escribir para el cerebro primario usando la gema <strong>The Oracle Luxe Agency</strong> para la ingeniería del guion y <strong>Neuro Scoring</strong> para auditar su impacto con nuestra estructura Pain-Claim-Gain.",
    module4HookTitle: "El Hook (Gancho): Pide a la IA un gancho de 3 segundos que ataque un dolor.",
    module4HookPrompt: "Prompt: \"Escribe 3 ganchos cortos sobre el miedo a [Problema del cliente]\".",
    module4NarrativeTitle: "La Narrativa (Cuerpo): Desarrolla la historia.",
    module4NarrativePrompt: "Prompt: \"Usando el tono de [Tu Marca], explica cómo nuestro producto elimina ese dolor. Usa palabras sensoriales\".",
    module4CloseTitle: "El Cierre (Gain): La llamada a la acción.",
    module4ClosePrompt: "Prompt: \"Cierra con una frase de estatus y urgencia\".",
    // Module 5
    module5Title: "Flujo: El Embajador Digital (Avatar)",
    module5Label: "Aplica para: Humanizar la marca sin grabarte a ti mismo.",
    module5Method: "Creación del \"Human-AI\" con The UGC Society",
    module5Desc: "Diseña y clona un rostro y una voz para tu marca. La Gema <strong>The UGC Society</strong> te ayuda a definir el arquetipo de tu 'Fundador Ideal' para que la IA pueda generar un retrato que represente tus valores (confianza, lujo, energía).",
    module5FaceDesc: "Diseño del Rostro: Usa el flujo del Módulo 02 para generar un retrato de tu \"Fundador Ideal\".",
    module5FacePrompt: "Prompt: \"Portrait of a friendly expert, studio lighting, looking at camera.\"",
    module5VoiceDesc: "Clonación de Voz: Sube un audio de 1 minuto con tu voz (o una voz que te guste) a ElevenLabs para crear tu Voz de Marca.",
    module5SyncTitle: "Sincronización (HeyGen/Hedra):",
    module5SyncSteps: [
      "Sube la foto del paso 1.",
      "Sube el guion generado en el Módulo 04.",
      "Generar: Obtén un video de un humano hablando tu mensaje perfectamente."
    ],
    // Module 6
    module6Title: "Creación de Campañas",
    module6Label: "Aplica para: Lanzar ofertas y construir autoridad con activos de valor.",
    module6Desc: "En lugar de vender directamente, una campaña de alto valor educa y prepara a tu audiencia. Usa la gema <strong>Alpha Content</strong> para transformar tu conocimiento en un activo digital (como un PDF, una guía o una presentación) que puedes ofrecer a cambio de un correo electrónico. Esto no solo genera leads, sino que construye una relación de confianza antes de la venta.",
    // Module 7
    module7Title: "El Sistema The Silent Studio",
    module7Label: "Aplica para: Ejecutar como ‘equipo interno’ sin contratar.",
    module7Desc: "El sistema The Silent Studio está diseñado para funcionar como una agencia de alto rendimiento, donde cada Gema opera como un departamento especializado. A continuación, se detalla la estructura y las responsabilidades:",
    module7GemsTitle: "Las 6 GEMS",
    module7Gems: [
        "<strong>UGC Society:</strong> Es el estratega. Define la dirección de tu marca, tu arquetipo de cliente ideal y las tendencias de mercado a capitalizar.",
        "<strong>The Oracle Luxe Agency:</strong> Tu guionista de élite. Escribirá los textos persuasivos (guiones, anuncios, emails) usando la estructura Pain/Claim/Gain.",
        "<strong>Neuro Scoring:</strong> El auditor de calidad. Analizará tus mensajes y te dará un puntaje de impacto, sugiriendo mejoras basadas en neurociencia para maximizar la persuasión.",
        "<strong>Luxe Prompt Studio:</strong> Tu director de fotografía. Generará los prompts técnicos para crear imágenes de producto con calidad de revista.",
        "<strong>CineAI Visual Director:</strong> Tu director de cine. Tomará los guiones y los convertirá en una secuencia de video cinematográfico, especificando movimientos de cámara y escenas.",
        "<strong>Alpha Content:</strong> Tu arquitecto de activos. Creará la estructura de tus lead magnets (PDFs, guías) para capturar leads y construir autoridad."
    ],
    finalCta: "Si quieres acelerar y que te acompañe a implementar esto en tu marca: Mentoría 1 a 1."
  },
  agency: {
    heroTitle: "THE SILENT STUDIO",
    heroSubtitle: "Construye una agencia IA premium con resultados rápidos. Flujos probados para conseguir clientes, producir y vender sin perder tiempo experimentando.",
    forWho: [
      "Si quieres vender servicios pero aún no tienes herramientas ni proceso.",
      "Si estás saturado y necesitas un sistema probado para entregar resultados rápidos."
    ],
    quickResults: "Proceso validado para generar ‘Antes/Después’, cerrar clientes y entregar contenido premium con IA de forma consistente.",
    // Module 1
    module1Title: "El Método & El Acelerador",
    module1Label: "Aplica para: Conseguir clientes (prospección + anuncios).",
    module1Method1Title: "Método 1: Prospección Quirúrgica",
    module1Description: "Tomamos una foto de baja calidad de un prospecto, la mejoramos y se la enviamos como demostración. Este es el flujo:",
    module1Steps: [
        "Encuentra un negocio local con fotos de baja calidad.",
        "Mejora una de sus fotos usando nuestro flujo de trabajo de IA.",
        "Contáctalos, muéstrales el \"Antes y Después\" y presenta tus paquetes."
    ],
    module1Method2Title: "Método 2: El Acelerador de Anuncios",
    module1SubDescription: "Crea un anuncio de \"Antes y Después\" con la foto de un producto popular. Esto genera un flujo constante de clientes potenciales que ya están interesados.",
    // Module 2
    module2Title: "Flujo: Generación de Imágenes (El Duelo: Pago vs Gratis)",
    module2Label: "Aplica para: Producción para clientes.",
    module2OptionA: "OPCIÓN A (PRO): Luxe Prompt + Freepik (Control Total)",
    module2OptionADesc: "Aplica el flujo de transformación de imágenes para los productos o servicios de tus clientes. Es el servicio principal de tu agencia, entregando resultados rápidos y de alto impacto visual.",
    module2OptionASteps: [
        "Entra a <a href=\"https://gemini.google.com/gem/1hIvDXs8BsxVnIxgp9UErej2oVkAriXpa?usp=sharing\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-gold font-bold underline\">Luxe Prompt Studio</a> y sube la foto del cliente.",
        "Pide un estilo (Editorial, 3D, etc.) y obtén el JSON.",
        "En Freepik Pikaso, usa el modelo Nano Banana Pro.",
        "<strong>CRÍTICO:</strong> En \"Referencia\", sube la foto real del cliente.",
        "Pega el JSON, selecciona aspect ratio y resolución 4k.",
        "Genera."
    ],
    module2OptionB: "OPCIÓN B (GRATIS): Google Labs \"Whisk\" (Creatividad Fluida)",
    module2OptionBDesc: "Usa este flujo para experimentación rápida sin costo usando ImageFX.",
    module2OptionBSteps: [
        "Entra a Google Labs Whisk.",
        "Carga la Referencia: Haz clic en subir imagen y selecciona tu producto.",
        "El Prompt (La Mezcla): En el cuadro de texto, describe el entorno deseado.",
        "Ejemplo: \"Sobre piedra volcánica, luz de atardecer, 8k\".",
        "Generar: Whisk mezclará el ADN de tu foto con el texto.",
        "Descargar: Haz clic en la flecha para bajar tu imagen en alta resolución."
    ],
     // Module 3
    module3Title: "Flujo: Generación de Video",
    module3Label: "Aplica para: Comerciales y paquetes de agencia.",
    module3OptionA: "OPCIÓN A (PRO): Animación y Storyboard (Kling)",
    module3OptionADesc: "Usa Kling 2.6 para animar tus mejores fotos con control físico.",
    module3OptionAPrompt: "Prompt: [Zoom In], [Líquido sirviéndose], [Efecto vapor], [High Fidelity].",
    module3OptionASubDesc: "Para comerciales, usa el modo <strong>Storyboard</strong> de Freepik. Describe la narrativa con apoyo de <a href=\"https://gemini.google.com/gem/1u4JT_8K_-avT8PDK-OpOaSdVX3cvTERL?usp=sharing\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-gold font-bold underline\">esta Gema</a> para crear secuencias listas para animar.",
    module3OptionB: "OPCIÓN B (GRATIS): Google Labs \"Flow\" (Cinematografía)",
    module3OptionBDesc: "Usa VideoFX para crear movimiento cinematográfico desde una imagen estática.",
    module3OptionBSteps: [
        "Entra a Google Labs Flow.",
        "Sube la Imagen: Usa la foto que creaste en el Módulo 02.",
        "Prompt de Movimiento: Describe cómo debe moverse la cámara.",
        "Ejemplo: \"Slow cinematic zoom in, water ripples moving\".",
        "Generar y Descargar: Obtén un clip listo para redes en segundos."
    ],
    finalCta: "Si quieres escalar tu agencia con acompañamiento táctico directo: Mentoría 1 a 1."
  }
};

const PuraCocoProcessOverlay = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('#pura-coco-process-case-study .reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - 150) {
                    (el as HTMLElement).classList.add('active');
                }
            });
        };
        
        const initialReveals = document.querySelectorAll('#pura-coco-process-case-study .reveal');
        initialReveals.forEach((el, i) => { 
            if(el.getBoundingClientRect().top < window.innerHeight) {
                 (el as HTMLElement).classList.add('active');
            }
        });

        const container = document.querySelector('#pura-coco-process-case-study');
        container?.addEventListener('scroll', handleScroll);
        
        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="pura-coco-process-case-study" className="bg-luxury-black text-white">
            <header className="py-10 px-10 text-center border-b border-white/5 bg-black">
                <div className="serif text-2xl tracking-[0.2em] font-bold gold-text uppercase italic">The Silent Studio</div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 mt-2">Manual de Ejecución • Así lo hice con Pura Coco</p>
            </header>

            <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="max-w-4xl z-10">
                    <span className="gold-text uppercase text-[10px] tracking-[0.5em] mb-4 block reveal">Mi Metodología Paso a Paso</span>
                    <h1 className="serif text-5xl md:text-7xl mb-6 leading-tight reveal">Cómo tomé un diseño plano y lo elevé al lujo</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 reveal">
                        Ya tienes mi sistema en tus manos. Ahora quiero mostrarte cómo apliqué cada paso del proceso para transformar los assets de Pura Coco. Sigue mi rastro para tu primer posteo.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center border-y border-white/5 py-20">
                    <div className="reveal">
                        <div className="step-badge mb-6">El Comienzo</div>
                        <h3 className="serif text-3xl mb-6">No busqué una foto de baja calidad, tomé su diseño plano.</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Cuando contacté con Pura Coco, me encontré con que ya tenían un buen diseño: sus botellas azules en formato render. Pero les faltaba **vida**. Lo que hice fue tomar esa base y darle el "Contexto Aspiracional" que solo THE Silent Studio puede ofrecer.
                        </p>
                        <div className="image-card p-6 relative aspect-[9/16]">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-092810.avif" fill className="object-contain" alt="Diseño Plano Original" />
                            <p className="text-[10px] uppercase mt-4 tracking-widest text-center text-gray-400 absolute bottom-2 left-1/2 -translate-x-1/2">El render original que recibí</p>
                        </div>
                    </div>
                    <div className="reveal" style={{ transitionDelay: '200ms' }}>
                        <div className="step-badge mb-6">Mi Ejecución</div>
                        <h3 className="serif text-3xl mb-6">Así se ve cuando aplico mi acelerador.</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Utilicé ese mismo diseño plano como referencia visual. Mi objetivo era claro: posicionar el producto en un entorno de lujo sin gastar un dólar en producción física. El resultado fue esta campaña lifestyle editorial inmediata.
                        </p>
                        <div className="image-card p-6 border-gold/40 relative aspect-[9/16]">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__tomafotografa-lifestyle-editorial-instante-cotidia__87806-scaled.avif" fill className="object-cover" alt="Resultado Final Color" />
                            <p className="text-[10px] uppercase mt-4 tracking-widest text-center gold-text font-bold absolute bottom-2 left-1/2 -translate-x-1/2">Mi resultado final en segundos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#050505]">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="serif text-4xl text-center mb-20 italic">Mi Hoja de Ruta Personal</h2>
                    
                    <div className="space-y-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">1</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Mi uso de Luxe Prompt</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Lo primero que hice fue subir el diseño de la botella a mi Gema de **Luxe Prompt Studio**. Le pedí específicamente una estética editorial de revista de moda. Copié el JSON que me dio y ahí estaba toda la dirección de arte que necesitaba.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-[9/16]">
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093837.avif" fill className="object-cover shadow-2xl border border-white/5" alt="Pura Coco campaign" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className='order-1 md:order-1 relative aspect-[9/16]'>
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093850.avif" fill className="object-cover shadow-2xl border border-white/5" alt="Freepik setup" />
                            </div>
                            <div className="order-2 md:order-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">2</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Mi configuración en Freepik</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Me fui a Pikaso y activé el modelo **Nano Banana Pro**. En la sección de referencia, utilicé el botón de <strong>subir</strong> para cargar el diseño plano de Pura Coco. Si mi intención hubiese sido usar un personaje famoso o un avatar específico, habría subido esa foto directamente donde dice <strong>Personaje</strong>. Pegué el JSON y dejé que la IA hiciera el trabajo pesado.
                                </p>
                                <div className="text-[11px] text-gray-500 bg-white/5 p-4 border-l-2 border-gold italic">
                                    "Este método de carga asegura que la referencia del producto sea la prioridad absoluta para el modelo, manteniendo su integridad visual."
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-bold text-xs">3</span>
                                    <h4 className="gold-text uppercase text-xs font-bold tracking-[0.2em]">Cómo animé la escena</h4>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Llevé mi mejor imagen a Kling 2.6. No quería una animación loca, quería **elegancia**. Escribí mi dirección de cámara directamente: quería ver cómo el agua se condensaba en el vidrio mientras la cámara se elevaba.
                                </p>
                            </div>
                           <div className="order-1 md:order-2 aspect-video">
                               <iframe src="https://www.youtube.com/embed/QyVVGufp6Fw" className="w-full h-full border-0 rounded-lg" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <h3 className="serif text-3xl mb-12 italic text-center">Los movimientos que yo elijo</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 border border-white/5 bg-white/5 reveal">
                        <h5 className="font-bold gold-text mb-2 uppercase text-xs tracking-widest">Zoom In / Out</h5>
                        <p className="text-xs text-gray-400">Lo uso para crear tensión. Me encanta empezar en la tapa de Pura Coco y alejarme para mostrar el entorno.</p>
                    </div>
                    <div className="p-8 border border-white/5 bg-white/5 reveal" style={{ transitionDelay: '100ms' }}>
                        <h5 className="font-bold gold-text mb-2 uppercase text-xs tracking-widest">Orbit</h5>
                        <p className="text-xs text-gray-400">Mi favorito para botellas. Un giro lento de 360° grita 'lujo tridimensional' desde el primer segundo.</p>
                    </div>
                    <div className="p-8 border border-white/5 bg-white/5 reveal" style={{ transitionDelay: '200ms' }}>
                        <h5 className="font-bold gold-text mb-2 uppercase text-xs tracking-widest">Tilt Up / Down</h5>
                        <p className="text-xs text-gray-400">Lo apliqué en Pura Coco para recorrer su silueta. Es un movimiento 'heroico' que siempre funciona.</p>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white text-black text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="serif text-4xl mb-8 leading-tight italic">Yo nunca envío piezas sueltas</h3>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Mi secreto para que el cliente perciba más valor es usar el <strong>Storyboard</strong> de Freepik. Genero secuencias completas, no solo una imagen. Si quieres que te paguen bien, debes entregar una narrativa, no un archivo huérfano.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-12">
                        <div className="relative aspect-[9/16]">
                           <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093830.avif" fill className="object-cover" alt="Storyboard 1" />
                        </div>
                        <div className="relative aspect-[9/16]">
                           <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093837.avif" fill className="object-cover" alt="Storyboard 2" />
                        </div>
                        <div className="relative aspect-[9/16]">
                           <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093844.avif" fill className="object-cover" alt="Storyboard 3" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const UgcSocietyOverlay = ({ isAgency }: { isAgency: boolean }) => {
    const [isAvatarExamplesOpen, setIsAvatarExamplesOpen] = useState(false);
    
    const brandContent = (
      <>
        <Dialog open={isAvatarExamplesOpen} onOpenChange={setIsAvatarExamplesOpen}>
            <DialogContent className="max-w-4xl p-0 bg-black border-gold/20 text-white">
                <DialogHeader className="p-6">
                <DialogTitle className="text-gold serif text-2xl">Ejemplos de Arquetipos de Marca</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div>
                    <div className="relative aspect-[9/16] mb-4">
                    <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif" alt="Avatar Ejemplo 1: El Artesano de Lujo" fill className="object-cover rounded-lg" />
                    </div>
                    <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 1: El Artesano de Lujo</h4>
                    <p className="text-sm text-gray-400">Este avatar comunica sofisticación, experiencia y un toque de misterio. Ideal para marcas de alta gama (relojes, sastrería, licores premium) donde la tradición y la calidad son primordiales.</p>
                </div>
                <div>
                    <div className="relative aspect-[9/16] mb-4">
                    <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" alt="Avatar Ejemplo 2: El Visionario Relajado" fill className="object-cover rounded-lg" />
                    </div>
                    <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 2: El Visionario Relajado</h4>
                    <p className="text-sm text-gray-400">Este avatar proyecta creatividad, innovación y cercanía. Es perfecto para marcas modernas, agencias creativas o startups tecnológicas que quieren parecer accesibles pero a la vanguardia.</p>
                </div>
                </div>
            </DialogContent>
        </Dialog>

        <section>
          <h3 className="section-subtitle !text-black">Definiendo el Alma de tu Marca</h3>
          <p className="text-gray-600 text-sm mb-8">Antes de crear un avatar, debes entender la personalidad de tu marca. La gema UGC Society te guía a través del método 4Ps para construir una base sólida.</p>
        </section>
        <section>
          <h3 className="section-subtitle !text-black">Value Canvas (Adaptado para Marcas)</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <p><strong>Audiencia:</strong> Clientes que valoran la calidad y la estética, pero que actualmente ven tu marca como una opción más, no como la única opción.</p>
            <p><strong>Problema:</strong> El contenido visual de tu marca no comunica el verdadero valor de tu producto. Luce amateur y se pierde entre la competencia.</p>
            <p><strong>Solución:</strong> Un sistema para crear contenido de calidad premium de forma autónoma, elevando la percepción de tu marca al instante.</p>
          </div>
        </section>
        <section>
          <h3 className="section-subtitle !text-black">Método 4Ps (El Alma de TU Marca)</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <p><strong>Personaje:</strong> Define el arquetipo de tu "Fundador Ideal" o "Embajador de Marca". ¿Es un artesano experto y misterioso? ¿O un visionario joven y cercano? Este será el rostro de tu marca.</p>
            <p><strong>Producto:</strong> Tu propio producto o servicio. La meta es que su presentación visual esté a la altura de su calidad real.</p>
            <p><strong>Posicionamiento:</strong> ¿Quieres ser visto como la opción más lujosa, la más innovadora, la más confiable? Tu contenido visual debe reflejar esto.</p>
            <p><strong>Personalidad:</strong> El tono de tu marca. ¿Es directo y técnico, o cálido y aspiracional? Esto definirá tanto los textos como la estética.</p>
             <Button variant="outline" onClick={() => setIsAvatarExamplesOpen(true)} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold mt-4">Ver Ejemplos de Arquetipos</Button>
          </div>
        </section>
         <section>
            <h3 className="section-subtitle !text-black">Ingeniería de Dirección de Arte</h3>
             <div className="space-y-4 text-sm text-gray-700">
                <p><strong>ILUMINACIÓN:</strong> Rembrandt & Cinematic Bloom.</p>
                <p><strong>PALETA:</strong> Negros, Tierras y Acentos Neón Orgánico (estilo arte generado).</p>
                <p><strong>AUDIO:</strong> Eleven Labs (Voz: "Marcus" - Calma y Profundidad).</p>
            </div>
        </section>
         <section>
            <h3 className="section-subtitle !text-black">Sistema de Captación (Prompt de Lead Magnet)</h3>
             <div className="space-y-4 text-sm text-gray-700">
                <p>Una vez que elevas tu imagen, necesitas atraer clientes. Pide a Alpha Content que diseñe un PDF de 5 páginas titulado 'La Guía Definitiva para [Tu Nicho]'.</p>
                <p><strong>Estructura:</strong></p>
                <ol className="list-decimal list-inside ml-4">
                    <li>El error #1 que cometen los consumidores en tu nicho.</li>
                    <li>El secreto para elegir el producto perfecto.</li>
                    <li>Cómo [tu producto] resuelve este problema.</li>
                    <li>Una oferta exclusiva para los lectores de la guía.</li>
                </ol>
            </div>
        </section>
      </>
    );

    const agencyContent = (
         <>
            <Dialog open={isAvatarExamplesOpen} onOpenChange={setIsAvatarExamplesOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-gold/20 text-white">
                    <DialogHeader className="p-6">
                        <DialogTitle className="text-gold serif text-2xl">Ejemplos de Arquetipos de Marca de Agencia</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        <div>
                            <div className="relative aspect-[9/16] mb-4">
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-meta-imagestyle-highend-editorial-vanity-fair-gro__58442-scaled.avif" alt="Avatar Ejemplo 1: El Fundador Consolidado" fill className="object-cover rounded-lg" />
                            </div>
                            <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 1: El Fundador Consolidado</h4>
                            <p className="text-sm text-gray-400">Comunica experiencia, confianza y un historial de éxito. Ideal para agencias que apuntan a clientes corporativos o de alto valor que buscan seguridad y resultados probados.</p>
                        </div>
                        <div>
                            <div className="relative aspect-[9/16] mb-4">
                                <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__cinematic-portrait-of-a-25yearold-male-creative-di__78889-scaled.avif" alt="Avatar Ejemplo 2: El Disruptor Creativo" fill className="object-cover rounded-lg" />
                            </div>
                            <h4 className="font-bold serif text-xl text-gold mb-2">Arquetipo 2: El Disruptor Creativo</h4>
                            <p className="text-sm text-gray-400">Proyecta innovación, agilidad y una perspectiva fresca. Perfecto para agencias que se dirigen a startups, marcas de moda o nichos que valoran la originalidad y la vanguardia.</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <section>
                 <h3 className="section-subtitle !text-black">Value Canvas (Para tu Agencia)</h3>
                 <p className="text-gray-600 text-sm mb-8">Antes de buscar clientes, define tu propio valor. La gema UGC Society te ayuda a estructurar tu oferta.</p>
                 <div className="space-y-4 text-sm text-gray-700">
                    <p><strong>Audiencia:</strong> Creativos frustrados por la lentitud del flujo de trabajo tradicional y pequeñas marcas que necesitan volumen de contenido pero no tienen presupuesto para rodajes diarios.</p>
                    <p><strong>Competencia:</strong> Cursos teóricos de "prompteado". Tu hueco es la: Metodología de Agencia: Cómo vender, cómo producir en masa y cómo mantener la calidad de cine.</p>
                    <p><strong>Propuesta:</strong> "El Método Nexus: De 0 a Agencia de Contenido Generativo con Calidad Cinematográfica en 30 días".</p>
                </div>
            </section>
            <section>
                 <h3 className="section-subtitle !text-black">Método 4Ps (El Alma de TU Agencia)</h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <p><strong>Personaje:</strong> "El Arquitecto Visual". Arquetipo de El Creador. Joven, 25 años, viste streetwear minimalista, vive en un estudio lleno de arte físico y digital. Es un puente entre lo análogo y lo algorítmico.</p>
                    <p><strong>Producto:</strong> Generative Agency Mastery. Un curso que enseña el sistema de producción (Texto → Imagen → Video) y la estructura de negocio.</p>
                    <p><strong>Posicionamiento:</strong> La autoridad en "AI-Film" y "Contenido de Producto Generativo".</p>
                    <p><strong>Personalidad:</strong> Tono directo, visionario y técnico pero accesible. Usa términos como "Flujo de trabajo", "Latent Space" y "Dirección de Arte".</p>
                    <Button variant="outline" onClick={() => setIsAvatarExamplesOpen(true)} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold mt-4">Ver Ejemplos de Avatares</Button>
                </div>
            </section>
            <section>
                 <h3 className="section-subtitle !text-black">Ingeniería de Dirección de Arte para tu Agencia</h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <p><strong>ILUMINACIÓN:</strong> Rembrandt & Cinematic Bloom.</p>
                    <p><strong>PALETA:</strong> Negros, Tierras y Acentos Neón Orgánico (estilo arte generado).</p>
                    <p><strong>AUDIO:</strong> Eleven Labs (Voz: "Marcus" - Calma y Profundidad).</p>
                </div>
            </section>
             <section>
                <h3 className="section-subtitle !text-black">Sistema de Ventas (Prompt de Lead Magnet para tu Agencia)</h3>
                 <div className="space-y-4 text-sm text-gray-700">
                    <p>Pide a Alpha Content que diseñe un PDF de 5 páginas titulado 'Agencia IA: Guía de Inicio Rápido'.</p>
                    <p><strong>Estructura:</strong></p>
                    <ol className="list-decimal list-inside ml-4">
                       <li>El mercado de $10B que nadie está viendo.</li>
                        <li>Mi flujo de trabajo secreto (Texto a Video).</li>
                        <li>5 Prompts para contenido de producto que puedes vender hoy.</li>
                        <li>Cómo conseguir tu primer cliente en 7 días.</li>
                    </ol>
                </div>
            </section>
        </>
    );
    
    return (
        <div className="p-6 md:p-12 space-y-12">
            {isAgency ? agencyContent : brandContent}
        </div>
    );
};


const ManualContent = ({ route }: { route: Route }) => {
    const [activeOverlay, setActiveOverlay] = useState<string | null>(null);
    const [activeModuleOverlay, setActiveModuleOverlay] = useState<string | null>(null);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const moduleVideos = [
        { id: 'PA4RyBJIAnE', title: 'Módulo 1: El Método & El Acelerador' },
        { id: '_Bly8Rxokv0', title: 'Módulo 2: Flujo: Generación de Imágenes' },
        { id: '3IwVnXpW-x4', title: 'Módulo 3: Flujo: Generación de Video' },
        { id: 'kJS_gIGEed8', title: 'Módulo 4: Flujo: Ingeniería de Textos y Guiones' },
        { id: 'FaaBqLdK5oI', title: 'Módulo 5: Flujo: El Embajador Digital (Avatar)' },
    ];

    const openVideoModal = (index: number) => {
        setCurrentVideoIndex(index);
        setVideoModalOpen(true);
    };

    const goToNextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % moduleVideos.length);
    };

    const goToPrevVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + moduleVideos.length) % moduleVideos.length);
    };

    useEffect(() => {
        document.body.classList.add('manual-body-styles');
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                 if (videoModalOpen) {
                    setVideoModalOpen(false);
                    return;
                }
                if (activeOverlay) {
                    toggleOverlay(activeOverlay);
                    return;
                }
                if (activeModuleOverlay) {
                    toggleModuleOverlay(activeModuleOverlay);
                    return;
                }
            }
        };

        if (activeOverlay || activeModuleOverlay || videoModalOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('manual-body-styles');
            document.body.style.overflow = 'auto';
        };
    }, [activeOverlay, activeModuleOverlay, videoModalOpen]);
    
    const toggleOverlay = (id: string) => {
        setActiveOverlay(prev => (prev === id ? null : id));
    };

    const toggleModuleOverlay = (id: string) => {
        setActiveModuleOverlay(prev => (prev === id ? null : id));
    };
    
    const selectedContent = content[route];
    
    return (
        <div className="antialiased">
           
            <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
                <DialogContent className="max-w-4xl p-4 bg-black border-gold/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-gold serif text-2xl">{moduleVideos[currentVideoIndex].title}</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video">
                        <iframe
                            key={currentVideoIndex}
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${moduleVideos[currentVideoIndex].id}?autoplay=1`}
                            title={moduleVideos[currentVideoIndex].title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Button onClick={goToPrevVideo} className="bg-white/10 hover:bg-white/20">
                            <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                        </Button>
                        <p className="text-sm text-gray-400">{currentVideoIndex + 1} / {moduleVideos.length}</p>
                        <Button onClick={goToNextVideo} className="bg-white/10 hover:bg-white/20">
                            Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="serif italic text-2xl font-bold tracking-tighter uppercase">
                    The <span className="text-gold">Silent</span> Studio
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    <a href="#modulos" className="nav-link">Metodología</a>
                </div>
            </nav>
            
            <div id="ugc-society-deep-dive" className={cn('overlay-system', { 'active': activeOverlay === 'ugc-society-deep-dive' })}>
                 <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                    <h2 className="serif text-3xl italic">Módulo 5: <span className="text-gold">Profundización en UGC Society</span></h2>
                    <button onClick={() => toggleOverlay('ugc-society-deep-dive')} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest">Cerrar</button>
                </div>
                <UgcSocietyOverlay isAgency={route === 'agency'} />
            </div>

            <div id="pura-coco-case-study" className={cn('overlay-system', { 'active': activeOverlay === 'pura-coco-case-study' })}>
                <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                    <h2 className="serif text-3xl italic">Caso de Estudio: <span className="text-gold">Pura Coco</span></h2>
                    <button onClick={() => toggleOverlay('pura-coco-case-study')} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest">Cerrar</button>
                </div>
                <div className="case-study-content">
                    <PuraCocoProcessOverlay onClose={() => toggleOverlay('pura-coco-case-study')} />
                </div>
            </div>

             <div id="module-1-deep-dive" className={cn('overlay-system', { 'active': activeModuleOverlay === 'module-1-deep-dive' })}>
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                    <h2 className="serif text-3xl italic">Módulo 1: <span className="text-gold">El Método - Ejecución Detallada</span></h2>
                    <button onClick={() => toggleModuleOverlay('module-1-deep-dive')} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest">Cerrar</button>
                </div>
                <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">
                    <section>
                         <h3 className="section-subtitle !text-black">Prospección Quirúrgica: El Arte del 'Atraco Visual'</h3>
                        <p className="mb-8 text-gray-600">Este método es tu abridor de puertas. Se basa en demostrar valor de forma inmediata, haciendo que sea casi imposible que te ignoren.</p>
                        <ol className="space-y-6">
                            <li className="flex items-start"><span className="step-num">1</span><div><strong className="block font-bold text-lg">La Caza:</strong> Usa Google Maps e Instagram. Busca "[tu nicho] en [tu ciudad]". Abre 10 perfiles. Tu objetivo: encontrar negocios con fotos de baja calidad. Señales de foto de baja calidad: mala iluminación, fondos desordenados, baja resolución, selfies.</div></li>
                            <li className="flex items-start"><span className="step-num">2</span><div><strong className="block font-bold text-lg">La Selección:</strong> Elige la foto con más potencial. Generalmente es una foto de producto donde el objeto principal está claro, pero el entorno es pobre. Descarga esa imagen.</div></li>
                            <li className="flex items-start"><span className="step-num">3</span><div><strong className="block font-bold text-lg">La Ejecución del 'Heist':</strong> Sigue el flujo de trabajo del Módulo 2 para transformar la foto. No busques la perfección, busca una mejora dramática. El contraste Antes/Después es tu arma.</div></li>
                            <li className="flex items-start"><span className="step-num">4</span><div><strong className="block font-bold text-lg">El Contacto:</strong> Usa el "Guion de Contacto en Frío" del Módulo 4. Es una fórmula probada para iniciar la conversación sin sonar como un vendedor.</div></li>
                        </ol>
                    </section>
                     <section>
                        <h3 className="section-subtitle !text-black">El Acelerador de Anuncios: Creando una Máquina de Leads</h3>
                        <p className="mb-8 text-gray-600">Este método es para escalar. En lugar de cazar clientes uno por uno, haces que ellos vengan a ti, ya pre-calificados por su interés.</p>
                        <ol className="space-y-6">
                            <li className="flex items-start"><span className="step-num">1</span><div><strong className="block font-bold text-lg">Elección del 'Héroe':</strong> Elige un producto universalmente reconocible (ej. una Coca-Cola, un iPhone, un pastel de cumpleaños). Toma una foto de baja calidad tú mismo o busca una de mala calidad online. Transfórmala usando el método del Módulo 2. Ahora tienes tu anuncio de "Antes y Después".</div></li>
                            <li className="flex items-start"><span className="step-num">2</span><div><strong className="block font-bold text-lg">Diseño del Creativo:</strong> Crea una imagen simple con el Antes y el Después lado a lado. Texto del anuncio: "¿Tus fotos se ven así (Antes)? Puedo hacer que se vean así (Después). Toca para más info."</div></li>
                            <li className="flex items-start"><span className="step-num">3</span><div><strong className="block font-bold text-lg">Configuración de la Campaña (Meta Ads):</strong> Objetivo: Mensajes a WhatsApp. Segmentación: dueños de pequeños negocios en tu ciudad/país. Presupuesto: empieza con $5 al día.</div></li>
                             <li className="flex items-start"><span className="step-num">4</span><div><strong className="block font-bold text-lg">El Embudo de WhatsApp:</strong> Cuando alguien te escriba, ya está interesado. Usa el "Guion de Lead Entrante" del Módulo 4 para diagnosticar y cerrar la venta.</div></li>
                        </ol>
                    </section>
                </div>
            </div>
             <div id="module-2-deep-dive" className={cn('overlay-system', { 'active': activeModuleOverlay === 'module-2-deep-dive' })}>
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                    <h2 className="serif text-3xl italic">Módulo 2: <span className="text-gold">Flujo de Imágenes - Guía Maestra</span></h2>
                    <button onClick={() => toggleModuleOverlay('module-2-deep-dive')} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest">Cerrar</button>
                </div>
                <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">
                    <section>
                         <h3 className="section-subtitle !text-black">Dominando el Flujo Freepik + Luxe Prompt Studio</h3>
                        <p className="mb-8 text-gray-600">Este es el corazón técnico de tu agencia. Dominar este flujo te permite crear resultados de alta gama de forma consistente.</p>
                         <ol className="space-y-6">
                            <li className="flex items-start"><span className="step-num">1</span><div><strong className="block font-bold text-lg">El Activo Original:</strong> Sube la foto de baja calidad de tu cliente a Luxe Prompt Studio. Este es tu punto de partida.</div></li>
                            <li className="flex items-start"><span className="step-num">2</span><div><strong className="block font-bold text-lg">La Petición en Luxe:</strong> Sé específico. Pide el estilo deseado (ej. "dame un prompt para una imagen publicitaria de alta gama estilo editorial para esta salsa"). La Gema te dará un prompt en formato JSON. Cópialo.</div></li>
                            <li className="flex items-start"><span className="step-num">3</span><div><strong className="block font-bold text-lg">Configuración en Freepik (Pikaso):</strong> Ve a Freepik Pikaso. Elige el modelo "Nano Banana Pro". En la sección "Referencia", haz clic en "Subir" y carga la foto de baja calidad de tu cliente. Este es el paso más importante.</div></li>
                            <li className="flex items-start"><span className="step-num">4</span><div><strong className="block font-bold text-lg">La Ejecución:</strong> Pega el JSON de Luxe en el campo de prompt de Freepik. Ahora, elige el 'Aspect Ratio'.</div></li>
                        </ol>
                    </section>
                    <section>
                        <h3 className="section-subtitle !text-black">Análisis de Opciones Clave</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-lg mb-2">Aspect Ratios</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li><strong>1:1 (Cuadrado):</strong> Perfecto para el feed de Instagram y fotos de perfil.</li>
                                    <li><strong>9:16 (Vertical):</strong> Ideal para Instagram Stories, Reels y TikTok.</li>
                                    <li><strong>16:9 (Horizontal):</strong> Usado para banners de sitios web, YouTube y anuncios de Facebook.</li>
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-bold text-lg mb-2">Resolución</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                     <li><strong>1k:</strong> Rápido, bueno para pruebas iniciales.</li>
                                    <li><strong>2k:</strong> El estándar para redes sociales de alta calidad.</li>
                                    <li><strong>4k:</strong> Calidad de impresión. Úsalo para la entrega final al cliente.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                         <h3 className="section-subtitle !text-black">El Proceso Iterativo</h3>
                        <p className="text-gray-600">Presiona "Generar". Si el resultado no es perfecto, no te preocupes. Vuelve a Luxe Prompt Studio y refina tu petición. Ejemplo: "Hazlo más oscuro y con más contraste", o "cambia el fondo a un estudio minimalista". Copia el nuevo JSON, pégalo en Freepik y genera de nuevo. Repite hasta que el resultado sea impecable. Este es el trabajo del Director de Arte.</p>
                    </section>
                </div>
            </div>
             <div id="module-3-deep-dive" className={cn('overlay-system', { 'active': activeModuleOverlay === 'module-3-deep-dive' })}>
                <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-6 md:px-12 flex justify-between items-center z-[2100]">
                    <h2 className="serif text-3xl italic">Módulo 3: <span className="text-gold">Flujo de Video - De Estático a Cinematográfico</span></h2>
                    <button onClick={() => toggleModuleOverlay('module-3-deep-dive')} className="bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest">Cerrar</button>
                </div>
                 <div className="max-w-5xl mx-auto py-20 px-6 space-y-16">
                     <section>
                        <h3 className="section-subtitle !text-black">Animación Directa (Kling 2.5/2.6)</h3>
                        <p className="mb-8 text-gray-600">Este es tu 'Upsell' inmediato. Convertir una imagen ganadora en un video corto es extremadamente rentable.</p>
                         <ol className="space-y-6">
                            <li className="flex items-start"><span className="step-num">1</span><div><strong className="block font-bold text-lg">Punto de Partida:</strong> En Freepik, una vez generada tu imagen 4K, verás un botón de "Video". Haz clic ahí.</div></li>
                            <li className="flex items-start"><span className="step-num">2</span><div><strong className="block font-bold text-lg">La Dirección:</strong> Se abrirá la interfaz de video. Tu imagen ya está cargada. Ahora, en el prompt, debes dirigir la escena. Usa la estructura: [Movimiento de cámara], [Acción del objeto]. Ejemplo: "Zoom in lento, el vapor del café sube suavemente".</div></li>
                            <li className="flex items-start"><span className="step-num">3</span><div><strong className="block font-bold text-lg">Sonido y Magia:</strong> Asegúrate de usar el modelo Kling 2.6 y activa la opción "SFX" (efectos de sonido). La IA añadirá audio contextual (ej. el sonido de las burbujas, el viento, etc.).</div></li>
                        </ol>
                    </section>
                     <section>
                        <h3 className="section-subtitle !text-black">Creación de Comerciales con Storyboard</h3>
                        <p className="mb-8 text-gray-600">Este es un servicio de mayor valor. Creas una secuencia narrativa completa para un anuncio.</p>
                         <ol className="space-y-6">
                            <li className="flex items-start"><span className="step-num">1</span><div><strong className="block font-bold text-lg">La Narrativa:</strong> Ve a Freepik Pikaso &gt; Tools &gt; Variations. Sube una imagen de referencia (puede ser una de las que ya creaste). Selecciona el modo "Storyboard".</div></li>
                            <li className="flex items-start"><span className="step-num">2</span><div><strong className="block font-bold text-lg">El Guion:</strong> En el campo "Narrativa", escribe la secuencia de tu comercial. Usa la Gema de apoyo para estructurar la historia si lo necesitas. Ejemplo: "1. Una mujer se ve cansada. 2. Bebe un sorbo de Pura Coco. 3. Sonríe con energía."</div></li>
                            <li className="flex items-start"><span className="step-num">3</span><div><strong className="block font-bold text-lg">Generación de Escenas:</strong> Elige el formato (ej. 3x1 para 3 escenas) y la calidad. Freepik generará las imágenes clave de tu historia.</div></li>
                            <li className="flex items-start"><span className="step-num">4</span><div><strong className="block font-bold text-lg">Animación y Montaje:</strong> Anima cada imagen generada individualmente usando el método de "Animación Directa". Luego, lleva los clips a un editor (CapCut, Premiere) y móntalos para crear el comercial final.</div></li>
                        </ol>
                    </section>
                    <section>
                        <h3 className="section-subtitle !text-black">Ejemplo de YouTube Short</h3>
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg border"
                                src="https://www.youtube.com/embed/SaGB7raNuUc"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>

            <header className="relative min-h-screen flex items-center justify-center text-center pt-24 px-6 md:px-12 bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093856.avif"
                        alt="Fondo de Pura Coco"
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <span className="bg-gold text-black px-6 py-1.5 font-bold text-[10px] uppercase tracking-[0.4em] inline-block mb-8">Protocolo de Operaciones 2026</span>
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-10 uppercase" dangerouslySetInnerHTML={{__html:selectedContent.heroTitle}}></h1>
                    
                    <p className="text-xl md:text-3xl leading-tight border-l-4 border-gold pl-8 font-light max-w-2xl text-center">
                        {selectedContent.heroSubtitle}
                    </p>

                    <div className="mt-12 mb-24 grid md:grid-cols-2 gap-8 max-w-4xl">
                        <div className='py-6'>
                            <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-3">Para quién es</h4>
                            <ul className="space-y-2">
                            {selectedContent.forWho.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                                    <ChevronRight className="w-4 h-4 text-gold mt-0.5 shrink-0"/>
                                    <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className='py-6'>
                            <h4 className="font-bold text-gold text-sm uppercase tracking-widest mb-3">Resultados rápidos con flujos probados</h4>
                            <p className="text-gray-300 text-sm">{selectedContent.quickResults}</p>
                        </div>
                    </div>
                    
                </div>
            </header>

            <main id="modulos" className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-40">
                
                {/* Módulo 1 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 01</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.brand.module1Title}</h2>
                        <p className="text-sm text-gold/70 italic">{content.brand.module1Label}</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.brand.module1Method1Title}</h3>
                            <p className="text-lg text-gray-300">{content.brand.module1Description}</p>
                            <ol className="space-y-4 text-sm text-gray-400">
                                {content.brand.module1Steps.map((step, index) => (
                                    <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <span dangerouslySetInnerHTML={{ __html: step }}></span></li>
                                ))}
                            </ol>
                            <h3 className="section-subtitle mt-12">{content.brand.module1Method2Title}</h3>
                            <p className="text-lg text-gray-300">{content.brand.module1SubDescription}</p>
                            
                            <div className="mt-6 flex flex-wrap gap-4">
                               {route === 'agency' && <Button variant="outline" onClick={() => toggleModuleOverlay('module-1-deep-dive')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Profundizar Tema</Button>}
                               {route === 'agency' && <Button variant="outline" onClick={() => toggleOverlay('nichos-detalle')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver 20 Nichos Rentables</Button>}
                               <Button variant="destructive" onClick={() => openVideoModal(0)} className="py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver explicación</Button>
                            </div>
                        </div>
                         <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-highvelocity-commercial-cgi-pho__46366-scaled.avif" alt="Mejora visual de producto" fill className="object-contain" />
                        </div>
                    </div>
                </section>

                {/* Módulo 2 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 02</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.brand.module2Title}</h2>
                        <p className="text-sm text-gold/70 italic">{content.brand.module2Label}</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.brand.module2OptionA}</h3>
                            <p className="text-gray-300 mb-6">{content.brand.module2OptionADesc}</p>
                            <ol className="space-y-4 text-sm text-gray-400 mb-12">
                                {content.brand.module2OptionASteps.map((step, index) => (
                                    <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <span dangerouslySetInnerHTML={{ __html: step }}></span></li>
                                ))}
                            </ol>

                            <h3 className="section-subtitle">{content.brand.module2OptionB}</h3>
                            <p className="text-gray-300 mb-6">{content.brand.module2OptionBDesc}</p>
                            <ol className="space-y-4 text-sm text-gray-400">
                                {content.brand.module2OptionBSteps.map((step, index) => (
                                    <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <span dangerouslySetInnerHTML={{ __html: step }}></span></li>
                                ))}
                            </ol>
                             <div className="mt-8 flex flex-wrap gap-4">
                                {route === 'agency' && <Button variant="outline" onClick={() => toggleModuleOverlay('module-2-deep-dive')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Profundizar Tema</Button>}
                                {route === 'brand' && <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Comparar Resultados</Button>}
                                <Button variant="destructive" onClick={() => openVideoModal(1)} className="py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver explicación</Button>
                            </div>
                        </div>
                        <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__-prompt-a-highend-culinary-editorial-photograph-of__53352-scaled.avif" alt="Fotografía de producto IA" fill className="object-contain"/>
                        </div>
                    </div>
                </section>
                
                {/* Módulo 3 */}
                 <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 03</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.brand.module3Title}</h2>
                        <p className="text-sm text-gold/70 italic">{content.brand.module3Label}</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="section-subtitle">{content.brand.module3OptionA}</h3>
                            <p className="text-gray-300 mb-2">{content.brand.module3OptionADesc}</p>
                             <div className="bg-black text-white p-6 border-l-4 border-gold text-xs font-mono">
                                {content.brand.module3OptionAPrompt}
                            </div>
                            <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: content.brand.module3OptionASubDesc }}></p>
                            
                            <h3 className="section-subtitle mt-12">{content.brand.module3OptionB}</h3>
                            <p className="text-gray-300 mb-6">{content.brand.module3OptionBDesc}</p>
                            <ol className="space-y-4 text-sm text-gray-400">
                                {content.brand.module3OptionBSteps.map((step, index) => (
                                    <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <span dangerouslySetInnerHTML={{ __html: step }}></span></li>
                                ))}
                            </ol>
                             <div className="flex flex-wrap gap-4 mt-8">
                                <Button variant="outline" onClick={() => toggleOverlay('camera-movements')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver Movimientos de Cámara</Button>
                                {route === 'agency' && <Button variant="outline" onClick={() => toggleModuleOverlay('module-3-deep-dive')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Profundizar Tema</Button>}
                                <Button variant="destructive" onClick={() => openVideoModal(2)} className="py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver explicación</Button>
                            </div>
                        </div>
                         <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__un-comercial-en-donde-una-mojer-hermosa-latina-com__32792-scaled.avif" alt="Storyboard Generado" fill className="object-contain shadow-xl" />
                        </div>
                    </div>
                </section>

                {/* Módulo 4 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 04</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{selectedContent.module4Title}</h2>
                        <p className="text-sm text-gold/70 italic">{selectedContent.module4Label}</p>
                    </div>
                    <div className="grid lg:grid-cols-1 gap-12 items-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <h3 className="section-subtitle">{selectedContent.module4Method}</h3>
                                <p className="text-gray-300" dangerouslySetInnerHTML={{__html: selectedContent.module4Desc}}></p>
                                <div className="space-y-4 text-sm text-gray-400">
                                    <p><strong>{selectedContent.module4HookTitle}</strong></p>
                                    <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{selectedContent.module4HookPrompt}</div>
                                    <p><strong>{selectedContent.module4NarrativeTitle}</strong></p>
                                    <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{selectedContent.module4NarrativePrompt}</div>
                                    <p><strong>{selectedContent.module4CloseTitle}</strong></p>
                                    <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{selectedContent.module4ClosePrompt}</div>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver Plantillas de Prompts</Button>
                                    <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Copiar Estructura</Button>
                                    <Button variant="destructive" onClick={() => openVideoModal(3)} className="py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver explicación</Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 relative aspect-video w-full max-w-4xl mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif" alt="Neuro Scoring" fill className="object-contain shadow-xl rounded-lg" />
                        </div>
                    </div>
                </section>
                
                {/* Módulo 5 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 05</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{selectedContent.module5Title}</h2>
                        <p className="text-sm text-gold/70 italic">{selectedContent.module5Label}</p>
                    </div>
                     <div className="grid lg:grid-cols-1 gap-12 items-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <h3 className="section-subtitle">{selectedContent.module5Method}</h3>
                                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: selectedContent.module5Desc }} />
                                <div className="space-y-4 text-sm text-gray-400">
                                    <p dangerouslySetInnerHTML={{ __html: selectedContent.module5FaceDesc }} />
                                    <div className="bg-black/20 p-4 border-l-2 border-gold font-mono text-xs">{selectedContent.module5FacePrompt}</div>
                                    <p dangerouslySetInnerHTML={{ __html: selectedContent.module5VoiceDesc }} />
                                    <p><strong>{selectedContent.module5SyncTitle}</strong></p>
                                    <ol className="list-decimal list-inside space-y-2">
                                        {selectedContent.module5SyncSteps.map((step, index) => <li key={index} dangerouslySetInnerHTML={{ __html: step }}/>)}
                                    </ol>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Button variant="outline" onClick={() => toggleOverlay('ugc-society-deep-dive')} className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Profundizar en UGC Society</Button>
                                    <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Tutorial de Voz</Button>
                                    <Button variant="destructive" onClick={() => openVideoModal(4)} className="py-3 px-4 font-bold uppercase text-[9px] tracking-widest">Ver explicación</Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 relative aspect-video w-full max-w-4xl mx-auto">
                            <Image src="http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif" alt="The UGC Society" fill className="object-contain shadow-xl rounded-lg" />
                        </div>
                    </div>
                </section>

                {/* Módulo 6 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 06</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.brand.module6Title}</h2>
                        <p className="text-sm text-gold/70 italic">{content.brand.module6Label}</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gray-300 text-lg leading-relaxed">{content.brand.module6Desc}</p>
                        </div>
                        <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                                <Image src="http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif" alt="Alpha Content" fill className="object-contain shadow-xl rounded-lg" />
                        </div>
                    </div>
                </section>

                {/* Módulo 7 */}
                <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Módulo 07</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">{content.brand.module7Title}</h2>
                        <p className="text-sm text-gold/70 italic">{content.brand.module7Label}</p>
                    </div>
                     <div className="space-y-6">
                        <p className='text-gray-300' dangerouslySetInnerHTML={{ __html: content.brand.module7Desc }}></p>
                        
                        <h3 className="section-subtitle mt-12">{content.brand.module7GemsTitle}</h3>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column: Carousel */}
                            <div>
                                <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-md mx-auto">
                                    <CarouselContent>
                                        {gemImages.map((gem, index) => (
                                            <CarouselItem key={index}>
                                                <div className="p-1">
                                                    <Card className="bg-black/20 border-gray-800 overflow-hidden">
                                                        <CardContent className="flex aspect-[9/16] items-center justify-center p-4">
                                                            <div className="relative w-full h-full">
                                                                <Image src={gem.src} alt={gem.name} fill className="object-contain rounded-md" />
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                    <p className="text-sm text-gold/70 text-center font-semibold mt-4">{gem.name}</p>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="text-white bg-black/50 border-white/20 hover:bg-white/20 -left-4" />
                                    <CarouselNext className="text-white bg-black/50 border-white/20 hover:bg-white/20 -right-4" />
                                </Carousel>
                            </div>
                            
                            {/* Right Column: Descriptions */}
                            <div>
                                <ol className="space-y-4 text-gray-400 mb-8">
                                   {(content.brand.module7Gems).map((gem, index) => (
                                     <li key={index} className="flex items-start"><span className="step-num">{index + 1}</span> <div dangerouslySetInnerHTML={{ __html: gem }}></div></li>
                                   ))}
                                </ol>
                                 <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-gold/10">
                                   <Link href="/the-silent-studio" passHref>
                                        <Button asChild className="bg-gold text-black py-3 px-4 font-bold uppercase text-[9px] tracking-widest hover:bg-black hover:text-white transition-all w-full md:w-auto">
                                           <span>Explorar el Ecosistema</span>
                                        </Button>
                                    </Link>
                                     <Link href="/manual/architecture" passHref>
                                        <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold py-3 px-4 font-bold uppercase text-[9px] tracking-widest w-full md:w-auto">
                                           <span>Ver Arquitectura de Agencia</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                 <section>
                    <div className="module-header">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Resultados</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">Caso: Pura Coco</h2>
                    </div>
                     <div className="grid lg:grid-cols-2 gap-16 items-center">
                       <div className="relative aspect-[9/16] w-full max-w-sm mx-auto">
                           <Image src="http://studioboom.online/wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-06-093850.avif" alt="Pura Coco Resultado" fill className="object-contain shadow-xl" />
                       </div>
                       <div className="text-center lg:text-left">
                           <button onClick={() => toggleOverlay('pura-coco-case-study')} className="bg-gold text-black py-4 px-8 font-bold uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all shadow-lg shadow-gold/20">
                               Ver Caso de Estudio: Pura Coco
                           </button>
                       </div>
                   </div>
                </section>
                <section className="py-20">
                    <div className="module-header text-center">
                        <span className="text-gold font-bold text-sm tracking-[0.3em] uppercase">Resultados</span>
                        <h2 className="text-5xl md:text-7xl font-bold serif italic mb-4">Galería de Transformaciones</h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Una muestra del poder de la metodología aplicada a diferentes nichos y productos.</p>
                    </div>
                    <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-6xl mx-auto">
                        <CarouselContent>
                            {resultImages.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="bg-black/20 border-gray-800">
                                            <CardContent className="flex aspect-[9/16] items-center justify-center p-2">
                                                <div className="relative w-full h-full">
                                                    <Image src={image.src} alt={image.alt} fill className="object-cover rounded-md" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="text-white bg-black/50 border-white/20 hover:bg-white/20" />
                        <CarouselNext className="text-white bg-black/50 border-white/20 hover:bg-white/20" />
                    </Carousel>
                </section>

                <section>
                    <div className="module-header text-center">
                        <h2 className="text-4xl md:text-5xl font-bold serif italic mb-4">¿Quieres que lo hagamos por ti?</h2>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-300 mb-4">Si no tienes tiempo para aprender o ejecutar, puedes contratar el servicio.</p>
                            <p className="text-gray-300 mb-8">También puedes entrar a la comunidad y acceder a referidos: oportunidades de trabajo por estar dentro.</p>
                             <Button asChild variant='outline' className="border-gold text-gold hover:bg-gold hover:text-black transition-colors">
                                <a href="https://wa.me/50664194111?text=quiero%20cotizar%20el%20servicio%20de%20imagenes%20y%20videos%20IA...." target="_blank" rel="noopener noreferrer">Cotizar</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-black py-20 md:py-32 px-6 md:px-12 border-t-8 border-gold text-center overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-6xl md:text-9xl serif italic font-bold text-gold mb-8 md:mb-12">The Silent Studio</h2>
                    <div className="pt-20 mt-12 text-[9px] uppercase tracking-[0.5em] text-gray-700">© 2026 The Silent Studio | San José, Costa Rica</div>
                </div>
            </footer>
        </div>
    );
};

export default ManualContent;
