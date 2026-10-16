'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { submitApplication } from '../actions';
import { recordConsent } from '@/lib/consent-tracker';
import { 
  ArrowRight,
  Play,
  Check,
  X,
  Volume2,
  VolumeX,
  Clock,
  UploadCloud,
  Send,
  AlertTriangle,
  HelpCircle,
  Video,
  User,
  Users,
  Podcast,
  Sparkles,
  Clapperboard,
  CheckCircle2,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const WHATSAPP_NUM = "50664194111";

const TRANSLATIONS = {
  es: {
    banner: {
      promo: "CREATIVE INTELLIGENCE AGENCY:",
      spots: "Cupos limitados. Trabajamos con 10 empresas por ciclo (Quedan {spots} disponibles)",
      cta: "Contacto Directo por WhatsApp →"
    },
    nav: {
      strategy: "Estrategia",
      whatsapp: "Contacto"
    },
    hero: {
      badge: "CREACIÓN DE INFLUENCERS IA · TECNOLOGÍA DE PUNTA",
      title: "Influencers IA y videos de alto impacto que detienen el scroll y convierten.",
      subtitle: "Combinamos tecnología de vanguardia y dirección creativa innovadora para diseñar influencers con inteligencia artificial hiperrealistas. Creamos videos y anuncios listos para Meta Ads, contenido recurrente para redes sociales o páginas web, ya sea alrededor de tu propia marca o para ofrecer a tus clientes.",
      ctaTest: "COTIZAR MIS VIDEOS",
      ctaDemo: "HABLAR CON UN ESTRATEGA"
    },
    problem: {
      badge: "EL DIAGNÓSTICO",
      title: "Publicar más no significa vender más.",
      subtitle: "La mayoría de las empresas gastan recursos publicando contenido genérico sin una estrategia detrás.",
      items: [
        "Publicar sin estrategia ni objetivos comerciales claros.",
        "Repetir los mismos formatos aburridos que todos ignoran.",
        "Crear contenido genérico que tu audiencia no recuerda.",
        "Gastar dinero en anuncios fríos que no generan conversiones.",
        "No saber con certeza qué mensaje o ángulo conecta con tu cliente."
      ],
      footer: "El problema no es que necesites más contenido. El problema es que todavía no sabes qué contenido funciona mejor para tu audiencia."
    },
    mechanism: {
      badge: "NUESTRO MECANISMO",
      title: "THE SILENT CREATIVE ENGINE",
      subtitle: "Un ciclo continuo de optimización donde cada mes creamos, probamos y aprendemos para maximizar tus ventas.",
      steps: [
        { t: "RESEARCH", d: "Analizamos tu nicho, cliente ideal y los ángulos de tu competencia." },
        { t: "CONCEPT", d: "Desarrollamos ideas únicas y ganchos persuasivos." },
        { t: "CREATE", d: "Producimos piezas visuales de alta conversión con tecnología e IA." },
        { t: "TEST", d: "Lanzamos y medimos el comportamiento real de tu audiencia." },
        { t: "LEARN", d: "Identificamos con datos precisos qué ganchos y ofertas convierten." },
        { t: "OPTIMIZE", d: "Escalamos los creativos ganadores y descartamos lo que no funciona." }
      ]
    },
    services: {
      badge: "SERVICIOS Y TARIFAS TRANSPARENTES",
      title: "Elige el paquete ideal para tu negocio o marca",
      subtitle: "Producción audiovisual de influencers IA con tecnología de punta. Desde videos individuales hasta paquetes de escala y planes de crecimiento.",
      scopeNotice: {
        title: "Alcance y Transparencia del Servicio",
        content: "En todos nuestros paquetes entregamos el contenido 100% terminado y listo para publicar: video vertical 9:16 en alta resolución + subtítulos animados + guión + el respectivo caption para Instagram o Facebook. NO incluye la administración diaria de redes sociales ni la gestión de pauta publicitaria. Si necesitas que administremos tus redes sociales o gestionemos tu pauta publicitaria en Meta Ads / TikTok Ads, es un costo aparte que cotizamos de forma personalizada según tus requerimientos."
      },
      single: {
        title: "VIDEO INDIVIDUAL",
        price: "$50 USD",
        local: "o ₡25.000 CRC",
        period: "Por video · A la carta",
        desc: "Prueba la calidad y el impacto de nuestro influencer IA con un video vertical publicitario u orgánico de alta fidelidad.",
        includes: [
          "1 Video vertical de alta resolución (9:16)",
          "Avatar / Influencer IA hiperrealista con voz natural",
          "Concepto creativo y gancho persuasivo",
          "Guión de ventas estructurado para retención",
          "Edición dinámica y subtítulos animados de alto impacto",
          "Entrega con su respectivo caption listo para Instagram o Facebook",
          "Entrega ágil en 48-72h lista para publicar"
        ],
        cta: "PEDIR 1 VIDEO ($50)"
      },
      pack10: {
        title: "PACK 10 VIDEOS",
        price: "$420 USD",
        local: "o ₡210.000 CRC",
        period: "Ahorras $80 · $42/video",
        badge: "OFERTA ESPECIAL",
        desc: "El paquete perfecto para lanzar una campaña publicitaria multi-ángulo o mantener consistencia semanal en tus redes.",
        includes: [
          "10 Videos verticales 9:16 de alta fidelidad",
          "Diseño y consistencia de tu Influencer IA exclusivo",
          "10 Conceptos y ganchos multi-ángulo testeables",
          "Guiones adaptados al tono de tu cliente ideal",
          "Edición profesional con subtítulos dinámicos",
          "10 Captions completos para Instagram y Facebook con CTA",
          "Variedad de formatos: UGC moda, hablado a cámara, Meta Ads",
          "Soporte directo de producción vía WhatsApp"
        ],
        cta: "APROVECHAR PACK 10 ($420)"
      },
      pack20: {
        title: "PACK 20 VIDEOS",
        price: "$750 USD",
        local: "o ₡375.000 CRC",
        period: "Ahorras $250 · $37.5/video",
        badge: "GRAN OFERTA · MÁS POPULAR",
        recommended: "MEJOR VALOR",
        desc: "Cobertura masiva para dominar el algoritmo con publicaciones casi diarias o realizar testeo agresivo en Meta Ads.",
        includes: [
          "20 Videos verticales 9:16 de calidad cinematográfica",
          "Creación de tu Influencer IA institucional a medida",
          "Matriz de 20 conceptos de contenido y conversión",
          "Guiones persuasivos con variaciones de ganchos (hooks)",
          "Edición prémium con música comercial y subtítulos pro",
          "20 Captions estratégicos redactados para Instagram y Facebook",
          "Mix equilibrado: venta directa, educativo, stories y reels",
          "Entregas programadas semanales o en bloque"
        ],
        cta: "QUIERO EL PACK 20 ($750)"
      },
      growth: {
        title: "PLAN DE CRECIMIENTO EN REDES",
        price: "A Cotizar",
        local: "Según requerimientos",
        period: "Estrategia + Producción Continua",
        badge: "RETAINER INTEGRAL",
        desc: "Para empresas que buscan una solución completa de largo plazo: estrategia, creación de personaje y producción mensual recurrente.",
        includes: [
          "Diseño de Estrategia Integral de Crecimiento en redes",
          "Creación de Personaje / Influencer IA permanente para tu marca",
          "Producción recurrente mensual de videos de alto rendimiento",
          "Planificación de contenidos con calendario editorial",
          "Entrega de cada video con guión y caption para Instagram/Facebook",
          "Análisis mensual de métricas creativas y optimización continua",
          "Opción de cotizar adicionalmente gestión de redes o pauta publicitaria"
        ],
        cta: "COTIZAR PLAN DE CRECIMIENTO"
      }
    },
    cases: {
      badge: "ESTUDIOS DE CASO",
      title: "Ideas que generan resultados.",
      subtitle: "Mira cómo estructuramos el problema, concepto, creatividad y resultado de conversión para marcas en Costa Rica.",
      labels: {
        client: "Cliente",
        problem: "Problema",
        concept: "Concepto",
        creativity: "Creatividad",
        result: "Resultado",
        viewDemo: "Ver Demo de Anuncio"
      },
      items: [
        {
          key: "ugc",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Woman_taking_selfie_with_dog_202608141035.jpeg",
          client: "Super Pet (Alimentos Premium)",
          problem: "Alto costo de adquisición de clientes con imágenes estáticas tradicionales en redes.",
          concept: "Avatar de IA simulando una videollamada selfie informal, recomendando la marca de forma orgánica y cercana.",
          result: "Disminución del 42% en costo por lead y aumento inmediato de la tasa de detención (scroll-stop rate).",
          demoName: "Ejemplo 1 (Super Pet)"
        },
        {
          key: "podcast",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Coffee_expert_sitting_at_microphone_202608141035.jpeg",
          client: "Dental Care Costa Rica",
          problem: "Desconfianza en tratamientos dentales de alto costo y baja autoridad en medios.",
          concept: "Fragmento explicativo de doctor de IA con tono clínico y subtítulos dinámicos de alto impacto visual.",
          result: "Aumento del 57% en consultas calificadas por WhatsApp mediante la generación rápida de autoridad.",
          demoName: "Podcast Clip (Studio Talk)"
        },
        {
          key: "podcast",
          sourceIndex: 1,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Coffee_expert_sitting_at_microphone_202608141035.jpeg",
          client: "Café Naranjo (Cata de Especialidad)",
          problem: "Anuncios publicitarios agresivos que el usuario salta tras el primer segundo.",
          concept: "Formato documental de entrevista corta explicando el origen del grano y los procesos de selección gourmet.",
          result: "CTR de 4.8% en Meta Ads y alta tracción de reproducciones orgánicas completas.",
          demoName: "Entrevista de Éxito"
        },
        {
          key: "miniseries",
          sourceIndex: 0,
          thumbnail: "http://wearethesilent.com/wp-content/uploads/2026/08/Change_character_angles_composit%E2%80%A6_2K_202608011711-scaled.jpeg",
          client: "Boutique Hueles Delicioso",
          problem: "Mercado saturado y baja retención de clientes en anuncios de fragancias.",
          concept: "Mini serie narrativa con intriga y ganchos olfativos para incentivar al usuario a ver el siguiente episodio.",
          result: "120,000 reproducciones acumuladas y alta conversión en compras directas de e-commerce.",
          demoName: "Cap 27 (Hueles Delicioso)"
        },
        {
          key: "campaign",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Woman_taking_selfie_with_dog_202608141035.jpeg",
          client: "Estudio Urbano / Colección Urbana",
          problem: "Fotografías tradicionales que no transmiten la dinámica de la tela en movimiento ni las variantes.",
          concept: "Anuncios dinámicos que mezclan modelaje cinemático e Inteligencia Artificial Generativa rápida.",
          result: "Incremento del 34% en el ticket promedio en compras de tienda directa.",
          demoName: "UGC Anuncio (Moda)"
        }
      ]
    },
    diff: {
      badge: "DIFERENCIACIÓN",
      title: "La IA no reemplazó la creatividad. La hizo más rápida.",
      items: [
        {
          title: "VELOCIDAD",
          desc: "Creamos conceptos y piezas en mucho menos tiempo, eliminando preproducción y rodajes físicos de semanas."
        },
        {
          title: "VOLUMEN",
          desc: "Podemos probar más ideas y variaciones (hooks, ganchos) sin aumentar proporcionalmente los costos de producción."
        },
        {
          title: "CREATIVIDAD",
          desc: "La tecnología produce. La estrategia decide qué producir. Enfocamos la IA únicamente en aquello que genera resultados comerciales."
        }
      ]
    },
    who: {
      badge: "CLIENTE IDEAL",
      title: "¿Para quién es The Silent?",
      subtitle: "Trabajamos exclusivamente con empresas que ven el contenido como un motor comercial, no como relleno.",
      points: [
        "Ya tienen un producto o servicio validado en el mercado.",
        "Necesitan generar más oportunidades comerciales y prospectos.",
        "Quieren crecer mediante redes sociales y publicidad digital activa.",
        "Tienen capacidad financiera para invertir mensualmente en su marca.",
        "Entienden que el contenido es una herramienta comercial estratégica."
      ],
      sectorsTitle: "Sectores Prioritarios en Costa Rica",
      sectors: ["Salud", "Inmobiliario", "Turismo", "Educación", "Servicios profesionales", "Automotriz", "Tecnología", "Gastronomía premium"]
    },
    finalCta: {
      badge: "HAGAMOS CONTACTO",
      title: "Tu próximo cliente puede estar a un buen concepto de distancia.",
      subtitle: "Cuéntanos qué vendes, quién es tu cliente y qué quieres conseguir. Nosotros te diremos qué podemos crear.",
      btn: "QUIERO CRECER CON THE SILENT"
    },
    whatsapp: {
      float: "WhatsApp 6419-4111",
      prefill: "Hola! Me interesa conversar sobre la estrategia creativa y contenido constante de mi negocio con The Silent."
    },
    modal: {
      title: "Formato Nativo Vertical (9:16)",
      sub: "Optimizado para Reels / TikTok / Shorts",
      soundOn: "Activar Audio",
      soundOff: "Audio Activado",
      badgeTitle: "¿Qué incluye este estilo?",
      footerQuestion: "¿Te gusta este estilo?",
      footerBtn: "Pedir por WhatsApp"
    },
    form: {
      badge: "CREATIVE TEST",
      title: "Comenzá tu Creative Test",
      subtitle: "Completá los datos clave o si lo preferís, iniciá directamente por WhatsApp +506 6419-4111.",
      indicator: "Paso {step} de 4: {name}",
      stepNames: ["Datos del Negocio", "Oferta y Producto", "Enlaces o Fotos", "Confirmación"],
      step1: {
        title: "1. Datos de tu PYME",
        name: "Nombre de tu Negocio / PYME *",
        namePlace: "Ej: Clínica Dental San José",
        province: "Provincia (Costa Rica) *",
        phone: "WhatsApp de contacto (+506) *",
        phonePlace: "Ej: 6419-4111",
        email: "Correo para recibir entregables *",
        next: "Siguiente Paso"
      },
      step2: {
        title: "2. Oferta y Producto",
        desc: "¿Qué producto o servicio quieres promocionar? *",
        descPlace: "Ej: Servicio de ortodoncia invisible, menú ejecutivo, ropa de temporada, asesoría financiera, etc.",
        promo: "¿Tienes alguna promoción especial?",
        promoPlace: "Ej: 15% de descuento pagando por SINPE, valoración gratis, etc.",
        prev: "Anterior",
        next: "Siguiente Paso"
      },
      step3: {
        title: "3. Enlaces o Fotos",
        link: "Enlace a Instagram, Facebook o Google Drive",
        drag: "Toca aquí para seleccionar fotos o imágenes de tu producto desde tu celular/PC",
        dragSub: "(O puedes enviárnoslas directo a WhatsApp más tarde)",
        prev: "Anterior",
        next: "Siguiente Paso"
      },
      step4: {
        title: "4. Confirmación de Creative Test",
        styleTitle: "Estilos que se incluirán en tu Creative Test (Vertical 9:16)",
        stylesList: ["01. UGC con IA", "02. PodCast Clip", "03. Dual Cast", "04. Animados", "05. Mini Series"],
        termsTitle: "CONDICIONES TRANSPARENTES",
        termsDesc: "Precio del Creative Test: ₡75.000 / $150. Pago en dos tractos: 50% inicial para coordinar guiones y producir, y 50% final contra entrega. Producción por cupos limitados (máximo 10 negocios por ciclo).",
        prev: "Anterior",
        submit: "Enviar y Chatear por WhatsApp"
      },
      success: {
        title: "¡Prueba Iniciada!",
        body: "Excelente {business} ({province}). Hemos registrado tu solicitud de Creative Test por ₡75.000 / $150.",
        stepsTitle: "Redireccionando a WhatsApp...",
        steps: [
          "Se abrirá tu chat con nuestro WhatsApp para coordinar el adelanto del 50%.",
          "Te enviaremos los guiones en unas horas.",
          "Los 5 videos estarán listos al finalizar el ciclo de producción."
        ],
        btnWhatsapp: "Chatear Directo ahora"
      }
    },
    faq: {
      badge: "PREGUNTAS FRECUENTES",
      title: "Dudas comunes resueltas.",
      items: [
        {
          q: "¿Cómo funciona la creación de un Influencer IA?",
          a: "Utilizamos tecnología de punta en generación visual y consistencia facial para diseñar un personaje digital exclusivo que represente a tu marca o la de tus clientes. Definimos su estética, vestuario, tono de voz y personalidad para que siempre mantenga el mismo rostro y realismo en todos los videos."
        },
        {
          q: "¿Cada video incluye su caption para publicar?",
          a: "Sí, absolutamente. No solo entregamos el video vertical 9:16 con subtítulos dinámicos de retención, sino que cada pieza incluye su respectivo caption redactado para Instagram o Facebook con gancho persuasivo, llamada a la acción clara y hashtags estratégicos."
        },
        {
          q: "¿Administran mis redes sociales o la pauta publicitaria?",
          a: "No directamente dentro de los paquetes de producción. Nuestro servicio se enfoca en la dirección creativa y producción de contenido listo para publicar. No incluye community management ni compra de medios. Sin embargo, si necesitas que gestionemos tus redes sociales o pauta en Meta Ads / TikTok Ads, es un servicio adicional que cotizamos por separado previa evaluación."
        },
        {
          q: "¿Puedo revender este servicio a mis clientes o para marcas de terceros?",
          a: "Totalmente. Trabajamos en formato marca blanca con agencias de marketing, consultores y creadores. Puedes encargar la creación de influencers IA y paquetes de videos para tus clientes y comercializarlos con tu propio margen."
        },
        {
          q: "¿Los videos se pueden usar para anuncios pagados en Meta Ads y TikTok?",
          a: "Sí, todos los videos se entregan en formato nativo vertical 9:16 optimizados técnica y comercialmente para campañas de Meta Ads (Facebook/Instagram), TikTok Ads o contenido orgánico."
        },
        {
          q: "¿Cuáles son los tiempos de entrega?",
          a: "Para un Video Individual entregamos en 48 a 72 horas. Para el Pack de 10 o 20 videos, podemos realizar entregas escalonadas semanales o una entrega en bloque en 5 a 8 días hábiles según la dinámica de tu campaña."
        }
      ]
    }
  },
  en: {
    banner: {
      promo: "CREATIVE INTELLIGENCE AGENCY:",
      spots: "Limited slots. We work with 10 companies per cycle ({spots} left)",
      cta: "Direct WhatsApp Contact →"
    },
    nav: {
      strategy: "Strategy",
      whatsapp: "Contact"
    },
    hero: {
      badge: "AI INFLUENCER CREATION · CUTTING-EDGE TECH",
      title: "AI Influencers and high-impact videos that stop the scroll and convert.",
      subtitle: "We combine cutting-edge technology and innovative creative direction to design hyper-realistic AI influencers. We produce ready-to-run videos for Meta Ads, social media content, and landing pages — whether to scale your own brand or to offer as a service to your clients.",
      ctaTest: "QUOTE MY VIDEOS",
      ctaDemo: "TALK TO A STRATEGIST"
    },
    problem: {
      badge: "THE DIAGNOSTIC",
      title: "Publishing more doesn't mean selling more.",
      subtitle: "Most companies waste resources publishing generic content without a strategy behind it.",
      items: [
        "Publishing without a strategy or clear business goals.",
        "Repeating the same boring formats that everyone ignores.",
        "Creating generic content that your audience doesn't remember.",
        "Spending money on cold ads that do not generate conversions.",
        "Not knowing with certainty which message or angle connects with your client."
      ],
      footer: "The problem is not that you need more content. The problem is that you still don't know what content works best for your audience."
    },
    mechanism: {
      badge: "OUR MECHANISM",
      title: "THE SILENT CREATIVE ENGINE",
      subtitle: "A continuous optimization cycle where each month we create, test, and learn to maximize your sales.",
      steps: [
        { t: "RESEARCH", d: "We analyze your niche, ideal client, and your competitors' angles." },
        { t: "CONCEPT", d: "We develop unique ideas and persuasive hooks." },
        { t: "CREATE", d: "We produce high-converting visual pieces using technology and AI." },
        { t: "TEST", d: "We launch and measure the real behavior of your audience." },
        { t: "LEARN", d: "We identify with precise data which hooks and offers convert." },
        { t: "OPTIMIZE", d: "We scale the winning creatives and discard what doesn't work." }
      ]
    },
    services: {
      badge: "TRANSPARENT SERVICES & RATES",
      title: "Choose the ideal package for your brand",
      subtitle: "Cutting-edge AI influencer video production. From single on-demand videos to scale packages and recurring growth plans.",
      scopeNotice: {
        title: "Service Scope & Transparency",
        content: "In all packages we deliver 100% finished, ready-to-publish content: 9:16 vertical video in high-res + animated retention subtitles + scripts + corresponding caption for Instagram or Facebook. We do NOT manage social accounts (community management) or ad spend (media buying). If you require active account management or paid ad campaign buying on Meta Ads / TikTok Ads, it is an additional service quoted separately."
      },
      single: {
        title: "SINGLE VIDEO",
        price: "$50 USD",
        local: "or ₡25,000 CRC",
        period: "Per video · On demand",
        desc: "Test the realism and conversion power of our AI influencer with a single high-fidelity ad or organic vertical video.",
        includes: [
          "1 Vertical high-resolution video (9:16)",
          "Hyper-realistic AI Avatar / Influencer with natural voice",
          "Creative concept and persuasive hook",
          "Structured sales script optimized for retention",
          "Dynamic editing and animated retention subtitles",
          "Delivered with ready-to-post caption for Instagram or Facebook",
          "Fast delivery in 48-72h ready to publish"
        ],
        cta: "ORDER 1 VIDEO ($50)"
      },
      pack10: {
        title: "PACK 10 VIDEOS",
        price: "$420 USD",
        local: "or ₡210,000 CRC",
        period: "Save $80 · $42/video",
        badge: "SPECIAL OFFER",
        desc: "The perfect bundle to launch a multi-angle ad campaign or maintain weekly consistency on your social channels.",
        includes: [
          "10 High-fidelity vertical videos (9:16)",
          "Consistent design of your exclusive AI Influencer",
          "10 Multi-angle testable concepts and hooks",
          "Scripts tailored to your ideal customer voice",
          "Professional editing with dynamic subtitles",
          "10 Full captions for Instagram & Facebook with clear CTA",
          "Mixed formats: Fashion UGC, direct-to-camera, Meta Ads",
          "Direct production support via WhatsApp"
        ],
        cta: "GET PACK 10 ($420)"
      },
      pack20: {
        title: "PACK 20 VIDEOS",
        price: "$750 USD",
        local: "or ₡375,000 CRC",
        period: "Save $250 · $37.5/video",
        badge: "BEST VALUE · MOST POPULAR",
        recommended: "MOST POPULAR",
        desc: "Massive monthly coverage to dominate the algorithm with daily posting or conduct aggressive creative testing on Meta Ads.",
        includes: [
          "20 Cinematic quality vertical videos (9:16)",
          "Tailor-made institutional AI Influencer persona",
          "Matrix of 20 high-converting sales & content concepts",
          "Persuasive scripts with hook variations",
          "Premium editing with commercial music & pro subtitles",
          "20 Strategic captions written for Instagram and Facebook",
          "Balanced mix: direct sales, educational, stories and reels",
          "Scheduled weekly or bulk deliveries based on your workflow"
        ],
        cta: "GET PACK 20 ($750)"
      },
      growth: {
        title: "SOCIAL GROWTH PLAN",
        price: "Custom Quote",
        local: "Tailored to needs",
        period: "Strategy + Continuous Production",
        badge: "COMPREHENSIVE RETAINER",
        desc: "For brands and agencies looking for a complete long-term solution: growth strategy, permanent persona creation, and recurring monthly video batches.",
        includes: [
          "Comprehensive social media growth strategy design",
          "Permanent AI Influencer / persona built for your brand",
          "Recurring monthly batches of high-performing videos",
          "Content planning with editorial calendar",
          "Each video delivered with script and caption for Instagram/Facebook",
          "Monthly creative metrics analysis and continuous optimization",
          "Option to add social account management or media buying"
        ],
        cta: "QUOTE GROWTH PLAN"
      }
    },
    cases: {
      badge: "CASE STUDIES",
      title: "Ideas that generate results.",
      subtitle: "See how we structure the problem, concept, creativity, and conversion results for brands in Costa Rica.",
      labels: {
        client: "Client",
        problem: "Problem",
        concept: "Concept",
        creativity: "Creativity",
        result: "Result",
        viewDemo: "View Ad Demo"
      },
      items: [
        {
          key: "ugc",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Woman_taking_selfie_with_dog_202608141035.jpeg",
          client: "Super Pet (Premium Pet Food)",
          problem: "High customer acquisition costs using traditional static social media images.",
          concept: "AI avatar simulating an informal selfie video call, recommending the brand organically and closely.",
          result: "42% decrease in cost per lead and immediate increase in scroll-stop rate.",
          demoName: "Example 1 (Super Pet)"
        },
        {
          key: "podcast",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Coffee_expert_sitting_at_microphone_202608141035.jpeg",
          client: "Dental Care Costa Rica",
          problem: "Lack of perceived authority and low trust in high-ticket dental treatments.",
          concept: "AI doctor explanatory clip with clinical tone and high-contrast dynamic subtitles.",
          result: "57% increase in qualified inquiries via WhatsApp by generating quick authority.",
          demoName: "Podcast Clip (Studio Talk)"
        },
        {
          key: "podcast",
          sourceIndex: 1,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Coffee_expert_sitting_at_microphone_202608141035.jpeg",
          client: "Cafe Naranjo (Specialty Coffee)",
          problem: "Aggressive promotional ads that users skip after the first second.",
          concept: "Short documentary interview format explaining bean origin and gourmet selection processes.",
          result: "4.8% CTR in Meta Ads and high organic full-view traction.",
          demoName: "Success Interview"
        },
        {
          key: "miniseries",
          sourceIndex: 0,
          thumbnail: "http://wearethesilent.com/wp-content/uploads/2026/08/Change_character_angles_composit%E2%80%A6_2K_202608011711-scaled.jpeg",
          client: "Hueles Delicioso Boutique",
          problem: "Saturated market and low customer retention in fragrance advertisements.",
          concept: "Narrative mini-series with intrigue and olfactory hooks to encourage users to watch the next episode.",
          result: "120,000 cumulative views and high direct e-commerce sales conversion.",
          demoName: "Cap 27 (Hueles Delicioso)"
        },
        {
          key: "campaign",
          sourceIndex: 0,
          thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Woman_taking_selfie_with_dog_202608141035.jpeg",
          client: "Estudio Urbano / Urban Collection",
          problem: "Traditional photos that do not convey fabric motion or clothing variations.",
          concept: "Dynamic ads blending rapid cinematic modeling and fast Generative AI.",
          result: "34% average order value increase in direct e-commerce purchases.",
          demoName: "UGC Ad (Fashion)"
        }
      ]
    },
    diff: {
      badge: "DIFFERENTIATION",
      title: "AI didn't replace creativity. It made it faster.",
      items: [
        {
          title: "SPEED",
          desc: "We create concepts and assets in much less time, eliminating weeks of preproduction and physical shoots."
        },
        {
          title: "VOLUME",
          desc: "We can test more ideas and variations (hooks, angles) without proportionally increasing production costs."
        },
        {
          title: "CREATIVITY",
          desc: "Technology produces. Strategy decides what to produce. We focus AI purely on what generates business results."
        }
      ]
    },
    who: {
      badge: "IDEAL CLIENT",
      title: "Who is The Silent for?",
      subtitle: "We work exclusively with companies that see content as a commercial engine, not as fluff.",
      points: [
        "They already have a validated product or service in the market.",
        "They need to generate more commercial opportunities and prospects.",
        "They want to grow through social networks and active digital ads.",
        "They have the financial capacity to invest monthly in their brand.",
        "They understand that content is a strategic commercial tool."
      ],
      sectorsTitle: "Priority Sectors in Costa Rica",
      sectors: ["Healthcare", "Real Estate", "Tourism", "Education", "Professional Services", "Automotive", "Technology", "Premium Gastronomy"]
    },
    finalCta: {
      badge: "LET'S CONNECT",
      title: "Your next client may be one good concept away.",
      subtitle: "Tell us what you sell, who your client is, and what you want to achieve. We'll tell you what we can create.",
      btn: "I WANT TO GROW WITH THE SILENT"
    },
    whatsapp: {
      float: "WhatsApp 6419-4111",
      prefill: "Hi! I am interested in discussing my business's creative strategy and constant content with The Silent."
    },
    modal: {
      title: "Native Vertical Format (9:16)",
      sub: "Optimized for Reels / TikTok / Shorts",
      soundOn: "Turn Sound On",
      soundOff: "Sound Activated",
      badgeTitle: "What does this style include?",
      footerQuestion: "Do you like this style?",
      footerBtn: "Order via WhatsApp"
    },
    form: {
      badge: "CREATIVE TEST",
      title: "Start your Creative Test",
      subtitle: "Complete key details or if you prefer, start directly via WhatsApp +506 6419-4111.",
      indicator: "Step {step} of 4: {name}",
      stepNames: ["Business Info", "Offer & Product", "Links or Photos", "Confirmation"],
      step1: {
        title: "1. Your Business Info",
        name: "Business / SME Name *",
        namePlace: "e.g. San Jose Dental Clinic",
        province: "Province (Costa Rica) *",
        phone: "Contact WhatsApp (+506) *",
        phonePlace: "e.g. 6419-4111",
        email: "Email to receive deliverables *",
        next: "Next Step"
      },
      step2: {
        title: "2. Offer and Product",
        desc: "What product or service do you want to promote? *",
        descPlace: "e.g. Invisible orthodontics service, lunch specials, seasonal clothing, financial consulting, etc.",
        promo: "Do you have any special promotion?",
        promoPlace: "e.g. 15% discount paying via SINPE, free assessment, etc.",
        prev: "Previous",
        next: "Next Step"
      },
      step3: {
        title: "3. Links or Photos",
        link: "Link to Instagram, Facebook or Google Drive",
        drag: "Tap here to select photos or images of your product from your mobile/PC",
        dragSub: "(Or you can send them directly to WhatsApp later)",
        prev: "Previous",
        next: "Next Step"
      },
      step4: {
        title: "4. Creative Test Confirmation",
        styleTitle: "Styles that will be included in your Creative Test (Vertical 9:16)",
        stylesList: ["01. UGC with AI", "02. PodCast Clip", "03. Dual Cast", "04. Animated", "05. Mini Series"],
        termsTitle: "TRANSPARENT TERMS",
        termsDesc: "Creative Test price: ₡75,000 / $150. Payment in two parts: 50% initial to coordinate scripts and produce, and 50% final against delivery. Limited production slots (maximum 10 businesses per cycle).",
        prev: "Previous",
        submit: "Submit and Chat on WhatsApp"
      },
      success: {
        title: "Test Initiated!",
        body: "Great {business} ({province}). We have registered your request for Creative Test for ₡75,000 / $150.",
        stepsTitle: "Redirecting to WhatsApp...",
        steps: [
          "Your chat with our WhatsApp will open to coordinate the 50% advance.",
          "We will send you the scripts in a few hours.",
          "The 5 videos will be ready when the production cycle completes."
        ],
        btnWhatsapp: "Chat Direct Now"
      }
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Common doubts resolved.",
      items: [
        {
          q: "How does the creation of an AI Influencer work?",
          a: "We use state-of-the-art visual generation and facial consistency technology to design an exclusive digital persona that represents your brand or your clients. We define their aesthetics, wardrobe, voice tone, and personality so they consistently maintain the exact same face and realism in all videos."
        },
        {
          q: "Does each video include a ready-to-post caption?",
          a: "Yes, absolutely. We do not just deliver the high-res 9:16 vertical video with dynamic retention subtitles; each piece comes with its corresponding caption written for Instagram or Facebook with a persuasive hook, clear CTA, and strategic hashtags."
        },
        {
          q: "Do you manage social accounts or paid advertising?",
          a: "Not directly within our core production packages. Our service specializes in high-level creative direction and delivery of ready-to-publish content. It does not include community management or ad buying. However, if you require social media management or paid ads management on Meta Ads / TikTok Ads, it is an additional service quoted separately."
        },
        {
          q: "Can I resell this service to my clients or third-party brands?",
          a: "Absolutely. We work in white-label format with marketing agencies, consultants, and creators. You can order custom AI influencers and video batches for your clients and market them under your own brand."
        },
        {
          q: "Can the videos be used for paid ads on Meta Ads and TikTok?",
          a: "Yes, all videos are delivered in native vertical 9:16 format, technically and commercially optimized for Meta Ads (Facebook/Instagram), TikTok Ads, or organic social posts."
        },
        {
          q: "What are the turnaround times?",
          a: "For a Single Video, we deliver within 48 to 72 hours. For 10 or 20-video packages, we can deliver in weekly staggered batches or a full block delivery in 5 to 8 business days depending on your campaign needs."
        }
      ]
    }
  }
};

const STYLE_PREVIEWS = {
  ugc: {
    badge: "UGC CON IA",
    icon: "user",
    thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Woman_taking_selfie_with_dog_202608141035.jpeg",
    heading: {
      es: "Formato Creador de Contenido Orgánico",
      en: "Organic Content Creator Format"
    },
    desc: {
      es: "Avatar hiperrealista actuando como cliente o creador recomendando tu negocio de forma cercana e informal.",
      en: "Hyper-realistic avatar acting as a client or creator recommending your business in a close and casual way."
    },
    sources: [
      {
        name: "Comercial Bolso (Moda UGC)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/comercial-bolso.mp4",
        script: {
          es: "«Comercial UGC para moda y accesorios con modelo e influencer IA, iluminación cinemática y textura de alta gama...»",
          en: "«Fashion UGC commercial for accessories with AI influencer, cinematic lighting, and high-end texture...»"
        },
        cta: {
          es: "👉 Consultar este formato por WhatsApp",
          en: "👉 Inquire about this format on WhatsApp"
        }
      },
      {
        name: "Ejemplo 2 (UGC Ads)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads.mp4",
        script: {
          es: "«¿Buscando aumentar ventas con contenido orgánico hecho por IA? Mirá cómo se ve un video de marca...»",
          en: "«Looking to increase sales with organic content made by AI? See how a branded video looks...»"
        },
        cta: {
          es: "👉 Consultar por WhatsApp ahora",
          en: "👉 Query via WhatsApp now"
        }
      },
      {
        name: "Ejemplo 3 (Variedad)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Crea-videos-con-IA-UGC-podcast-dual-cast-entrevistas.mp4",
        script: {
          es: "«Crea videos con IA en múltiples formatos: UGC, podcast, dual cast y entrevistas...»",
          en: "«Create AI videos in multiple formats: UGC, podcast, dual cast and interviews...»"
        },
        cta: {
          es: "👉 Solicitá tu paquete de videos",
          en: "👉 Request your video package"
        }
      }
    ]
  },
  podcast: {
    badge: "PODCAST CLIP",
    icon: "podcast",
    thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Coffee_expert_sitting_at_microphone_202608141035.jpeg",
    heading: {
      es: "Formato Extracto de Podcast",
      en: "Podcast Clip Format"
    },
    desc: {
      es: "Simula un fragmento de entrevista o podcast con tono de autoridad que retiene la atención al instante.",
      en: "Simulates a fragment of an interview or podcast with an authoritative tone that retains attention instantly."
    },
    sources: [
      {
        name: "Ejemplo 1 (Podcast)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/PODCAST-The-Silent-Studio.mp4",
        script: {
          es: "«El error número uno que cometen las PYMEs en Costa Rica es subir fotos aburridas a sus redes en lugar de contar una buena historia...»",
          en: "«The number one error that SMEs in Costa Rica make is uploading boring photos to their networks instead of telling a good story...»"
        },
        cta: {
          es: "👉 Mirá la estrategia completa por WhatsApp",
          en: "👉 See the complete strategy on WhatsApp"
        }
      },
      {
        name: "Ejemplo 2 (Café Naranjo)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cafe-naranjo.mp4",
        script: {
          es: "«Cómo este productor local de café logró duplicar sus pedidos online mediante la automatización de envíos...»",
          en: "«How this local coffee producer managed to double their online orders through automated shipping...»"
        },
        cta: {
          es: "👉 Conversar por WhatsApp ahora",
          en: "👉 Chat on WhatsApp now"
        }
      }
    ]
  },
  dualcast: {
    badge: "DUAL CAST",
    icon: "users",
    thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Two_women_talking_in_gym_202608141038.jpeg",
    heading: {
      es: "Formato Diálogo de 2 Personajes",
      en: "2-Character Dialogue Format"
    },
    desc: {
      es: "Dinámica entre dos avatares o interlocutores debatiendo un problema y mostrando tu solución como la mejor opción.",
      en: "Dynamics between two speakers debating a problem and showing your solution as the best option."
    },
    sources: [
      {
        name: "Ejemplo 1 (Simulación)",
        url: "",
        script: {
          es: "— «¿Mae, pero cómo hiciste para llenar el local esta semana?»\n— «Sencillo, puse a competir 5 videos hechos con IA en redes...»",
          en: "— «Dude, but how did you fill your shop this week?»\n— «Simple, I ran 5 AI-generated videos against each other on socials...»"
        },
        cta: {
          es: "👉 Cotizá tus 5 videos en 48h",
          en: "👉 Quote your 5 videos in 48h"
        }
      }
    ]
  },
  animados: {
    badge: "ANIMADOS",
    icon: "sparkles",
    thumbnail: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/magnific_cinematic-highspeed-anima_ohZXVUW829-2.00_00_04_04.Imagen-fija006.jpg",
    heading: {
      es: "Formato Animación y Gráficos Dinámicos",
      en: "Animated & Dynamic Graphics Format"
    },
    desc: {
      es: "Animaciones vectoriales, transiciones ágiles e infografías orientadas a explicar servicios o productos complejos de forma visual.",
      en: "Vector animations, agile transitions and infographics focused on explaining complex services or products visually."
    },
    sources: [
      {
        name: "Ejemplo 1 (Simulación)",
        url: "",
        script: {
          es: "«¿Buscás una forma rápida de vender más en San José? Te mostramos en 3 pasos cómo funciona nuestro servicio...»",
          en: "«Looking for a fast way to sell more in San Jose? We show you in 3 steps how our service works...»"
        },
        cta: {
          es: "👉 Solicitá tu video de prueba",
          en: "👉 Request your test video"
        }
      }
    ]
  },
  miniseries: {
    badge: "MINI SERIES",
    icon: "clapperboard",
    thumbnail: "http://wearethesilent.com/wp-content/uploads/2026/08/Change_character_angles_composit%E2%80%A6_2K_202608011711-scaled.jpeg",
    heading: {
      es: "Formato Narrativo por Episodios",
      en: "Episodic Narrative Format"
    },
    desc: {
      es: "Estructura narrativa por episodios que engancha a los usuarios para volver a ver más contenido y seguir tu marca.",
      en: "Episodic narrative structure that hooks users to come back for more content and follow your brand."
    },
    sources: [
      {
        name: "Ejemplo 1 (Hueles Delicioso)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cap-27-Hueles-Delicioso.mp4",
        script: {
          es: "«Episodio 27: ¿Sentís que tu fragancia no dura todo el día? Con nuestro nuevo perfume de lujo...»",
          en: "«Episode 27: Feel like your fragrance doesn\'t last all day? With our new luxury perfume...»"
        },
        cta: {
          es: "👉 Ver siguiente episodio en WhatsApp",
          en: "👉 Watch next episode on WhatsApp"
        }
      },
      {
        name: "Ejemplo 2 (Herencia)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/CAP-26-Herencia.mp4",
        script: {
          es: "«Episodio 26: La tradición de una familia unida por el sabor del verdadero café costarricense...»",
          en: "«Episode 26: The tradition of a family united by the taste of real Costa Rican coffee...»"
        },
        cta: {
          es: "👉 Ver siguiente episodio en WhatsApp",
          en: "👉 Watch next episode on WhatsApp"
        }
      },
      {
        name: "Ejemplo 3 (Transparente - Horizontal)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Cap-21-Transparente_202607172109.mp4",
        script: {
          es: "«Episodio 21: Sin secretos, sin letra pequeña. Transparencia total en cada uno de nuestros procesos...»",
          en: "«Episode 21: No secrets, no fine print. Total transparency in each of our processes...»"
        },
        cta: {
          es: "👉 Ver siguiente episodio en WhatsApp",
          en: "👉 Watch next episode on WhatsApp"
        },
        isHorizontal: true
      },
      {
        name: "Ejemplo 4 (Stop Motion)",
        url: "http://wearethesilent.com/wp-content/uploads/2026/08/Stop_motion_characters_travel_in%E2%80%A6_202608070824.mp4",
        script: {
          es: "«Viajá a través de la magia del stop-motion y descubrí rincones inolvidables de Costa Rica...»",
          en: "«Travel through the magic of stop-motion and discover unforgettable corners of Costa Rica...»"
        },
        cta: {
          es: "👉 Ver siguiente episodio en WhatsApp",
          en: "👉 Watch next episode on WhatsApp"
        }
      }
    ]
  },
  campaign: {
    badge: "CAMPAÑA IA",
    icon: "video",
    heading: {
      es: "Showcase de Campaña UGC (Colección Completa)",
      en: "UGC Campaign Showcase (Full Collection)"
    },
    desc: {
      es: "Variantes creativas de anuncios UGC para una misma campaña de producto, optimizados para testeo multi-ángulo en redes.",
      en: "Creative variants of UGC ads for the same product campaign, optimized for multi-angle testing on social networks."
    },
    sources: [
      { name: "Variante 1", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion.mp4", script: { es: "Campaña Anuncio 1", en: "Campaign Ad 1" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 2", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-2.mp4", script: { es: "Campaña Anuncio 2", en: "Campaign Ad 2" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 3", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-3.mp4", script: { es: "Campaña Anuncio 3", en: "Campaign Ad 3" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 4", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-4.mp4", script: { es: "Campaña Anuncio 4", en: "Campaign Ad 4" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 5", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-5.mp4", script: { es: "Campaña Anuncio 5", en: "Campaign Ad 5" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 6", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-6.mp4", script: { es: "Campaña Anuncio 6", en: "Campaign Ad 6" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 7", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-7.mp4", script: { es: "Campaña Anuncio 7", en: "Campaign Ad 7" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 8", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-8.mp4", script: { es: "Campaña Anuncio 8", en: "Campaign Ad 8" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } },
      { name: "Variante 9", url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/UGC-ads-nueva-coleccion-9.mp4", script: { es: "Campaña Anuncio 9", en: "Campaign Ad 9" }, cta: { es: "👉 Reservar Campaña por WhatsApp", en: "👉 Book Campaign on WhatsApp" } }
    ]
  }
};

const CAROUSEL_VIDEOS = [
  {
    tag: "UGC MODA",
    title: { es: "Comercial UGC · Moda & Accesorios", en: "UGC Commercial · Fashion & Accessories" },
    desc: { es: "Comercial UGC enfocado en moda y bolsos con modelo/influencer IA, iluminación de estudio, dinamismo visual y textura hiperrealista.", en: "Fashion UGC commercial showcasing designer accessories with AI model, studio lighting, visual rhythm and striking realism." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/comercial-bolso.mp4"
  },
  {
    tag: "ENTREVISTA MODERNA",
    title: { es: "Formato Entrevista Dinámica", en: "Modern Dynamic Interview" },
    desc: { es: "Formato moderno de entrevista con estética editorial contemporánea; ideal para responder preguntas clave, derrumbar objeciones y posicionar autoridad de marca.", en: "Modern editorial interview format; ideal for answering key customer questions, breaking objections, and building strong brand authority." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/Entrevista.mp4"
  },
  {
    tag: "DIRECT TO CAMERA",
    title: { es: "Hablado a Cámara de Alto Impacto", en: "High-Impact Direct to Camera" },
    desc: { es: "Avatar IA con presencia magnética hablando directo al espectador; dicción fluida, gestos naturales y retención absoluta en los primeros 3 segundos.", en: "AI avatar with magnetic presence speaking directly to viewer; fluid delivery, organic gestures, and instant 3-second retention." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/68de8fbe-675f-4463-958d-45f031a2d433.mp4"
  },
  {
    tag: "EDUCATIVO",
    title: { es: "Educativo · Creación de Influencer IA", en: "Educational · AI Influencer Creation" },
    desc: { es: "Formato tutorial de alto valor donde el influencer enseña el paso a paso para crear personajes con IA, generando autoridad y engagement.", en: "High-value tutorial format where the influencer teaches the step-by-step to create AI personas, driving authority and engagement." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/playground-result-1790652290876.mp4"
  },
  {
    tag: "REEL / STORIES",
    title: { es: "Micro-Reel & Stories para Instagram", en: "Micro-Reel & Instagram Stories" },
    desc: { es: "Micro-video vertical ágil optimizado para consumo rápido en Instagram y TikTok, con llamada a la acción precisa para disparar clicks y mensajes directos.", en: "Agile vertical micro-video optimized for fast consumption on Instagram and TikTok, with a crisp CTA to trigger clicks and direct messages." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/playground-result-1790632005574.mp4"
  },
  {
    tag: "STREET Q&A",
    title: { es: "Street Q&A · Preguntas en la Calle", en: "Street Q&A · Urban Micro-Interview" },
    desc: { es: "Interacción espontánea en exteriores estilo documental urbano con micrófono; genera curiosidad natural y conexión empática inmediata con el público.", en: "Spontaneous outdoor street-style documentary interaction; fuels organic curiosity and immediate empathetic audience connection." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/37f2aac3-33a4-436a-9b1f-f7a7013dacf2.mp4"
  },
  {
    tag: "META ADS",
    title: { es: "Anuncio Directo para Meta Ads & Conversión", en: "High-Converting Meta Ads Creative" },
    desc: { es: "Creativo publicitario estructurado con gancho visual, propuesta de valor clara y llamado a la acción probado para pauta pagada en Facebook, Instagram y TikTok.", en: "Direct-response advertising creative structured with a strong hook, clear value proposition, and proven CTA for paid ads on Facebook, Instagram and TikTok." },
    url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/4adccb1c-ce25-44b8-80f1-bffd22a2d8dc.mp4"
  }
];

export default function OfertaPage() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;
  const langKey = language === 'es' ? 'es' : 'en';

  const [spotsLeft, setSpotsLeft] = useState(7);
  const [openFaq, setOpenFaq] = useState(null);

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string>('pack20');
  const [formData, setFormData] = useState({
    businessName: '',
    province: 'San José',
    phone: '',
    email: '',
    productDesc: '',
    promo: '',
    driveUrl: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [legalConsentError, setLegalConsentError] = useState('');

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackage(pkgId);
  };

  // Video Demo Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStyle, setActiveStyle] = useState<'ugc' | 'podcast' | 'dualcast' | 'animados' | 'miniseries' | 'campaign'>('ugc');
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video element play state when changing source or opening modal
  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => {
        console.log("Autoplay was blocked or interaction required: ", e);
      });
    }
  }, [modalOpen, activeStyle, activeSourceIndex]);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVideoMuted(videoRef.current.muted);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (targetStep: number) => {
    if (targetStep > currentStep) {
      if (currentStep === 1) {
        if (!formData.businessName.trim() || !formData.phone.trim() || !formData.email.trim()) {
          alertCustom(language === 'es' ? "Por favor completá todos los campos requeridos." : "Please fill out all required fields.");
          return;
        }
      } else if (currentStep === 2) {
        if (!formData.productDesc.trim()) {
          alertCustom(language === 'es' ? "Por favor escribí una breve descripción del producto." : "Please write a brief description of the product.");
          return;
        }
      }
    }
    setCurrentStep(targetStep);
  };

  const handleUploadClick = () => {
    setAttachedFiles(['Foto_Local_1.jpg', 'Menu_Productos.png', 'Logo_PYME.png']);
    alertCustom(language === 'es' ? "Fotos simuladas adjuntadas con éxito." : "Simulated photos attached successfully.");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted || !privacyAccepted) {
      setLegalConsentError(
        language === 'es'
          ? 'Debe marcar ambas casillas legales obligatorias de forma separada antes de enviar su solicitud.'
          : 'You must check both mandatory legal checkboxes separately before submitting your request.'
      );
      return;
    }
    setLegalConsentError('');

    // Traceable consent audit record (AEPD / RGPD)
    recordConsent({
      userIdentifier: formData.email || formData.phone || formData.businessName,
      formOrigin: '/oferta (Formulario de Cotización)',
      termsAccepted: true,
      privacyAccepted: true,
      extraMetadata: {
        businessName: formData.businessName,
        province: formData.province,
        phone: formData.phone,
        packageChoice: selectedPackage,
      },
    });

    setFormSubmitted(true);
    setSpotsLeft(prev => Math.max(1, prev - 1));

    const packageLabels: Record<string, { es: string; en: string }> = {
      single: { es: '1 Video Individual ($50 USD)', en: '1 Single Video ($50 USD)' },
      pack10: { es: 'Pack 10 Videos ($420 USD - Oferta)', en: 'Pack 10 Videos ($420 USD - Special Offer)' },
      pack20: { es: 'Pack 20 Videos ($750 USD - Gran Oferta)', en: 'Pack 20 Videos ($750 USD - Best Value)' },
      growth: { es: 'Plan de Crecimiento & Estrategia Integral', en: 'Social Growth & Strategy Plan' },
    };
    const chosenLabel = packageLabels[selectedPackage]?.[langKey] || selectedPackage;

    // Call server action to notify owner and client via Resend in the background
    submitApplication({
      ...formData,
      packageChoice: chosenLabel
    }).catch(err => {
      console.error("Error submitting server email:", err);
    });

    const messageText = language === 'es' 
      ? `¡Hola! Acabo de enviar el formulario para mi negocio *${formData.businessName}* en *${formData.province}*. Me interesa el paquete *${chosenLabel}*. Mi correo es ${formData.email} y celular ${formData.phone}.`
      : `Hi! I just submitted the form for *${formData.businessName}* in *${formData.province}*. I am interested in *${chosenLabel}*. My email is ${formData.email} and phone ${formData.phone}.`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(messageText)}`;
    
    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const alertCustom = (msg: string) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 right-6 z-50 bg-[#0A0D0E] text-black border-2 border-[#FF8C42] p-4 rounded shadow-2xl font-mono text-xs max-w-sm flex items-center gap-3 animate-bounce';
    toast.innerHTML = `<svg class="w-5 h-5 text-[#FF8C42] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg> <span>${msg}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'user': return <User className="w-8 h-8 text-zinc-300 mx-auto" />;
      case 'users': return <Users className="w-8 h-8 text-zinc-300 mx-auto" />;
      case 'podcast': return <Podcast className="w-8 h-8 text-zinc-300 mx-auto" />;
      case 'sparkles': return <Sparkles className="w-8 h-8 text-zinc-300 mx-auto" />;
      case 'clapperboard': return <Clapperboard className="w-8 h-8 text-zinc-300 mx-auto" />;
      default: return <Video className="w-8 h-8 text-zinc-300 mx-auto" />;
    }
  };

  const openStyleModal = (styleKey: 'ugc' | 'podcast' | 'dualcast' | 'animados' | 'miniseries' | 'campaign', sourceIndex = 0) => {
    setActiveStyle(styleKey);
    setActiveSourceIndex(sourceIndex);
    setModalOpen(true);
  };

  const currentStyleData = STYLE_PREVIEWS[activeStyle];
  const sources = currentStyleData?.sources || [];
  const currentSource = sources[activeSourceIndex] || sources[0] || { name: '', url: '', script: { es: '', en: '' }, cta: { es: '', en: '' } };
  const isHorizontal = 'isHorizontal' in currentSource ? (currentSource as any).isHorizontal : false;

  return (
    <div className="bg-[#0A0D0E] text-[#F5F3EF] font-sans antialiased selection:bg-[#C5A059] selection:text-black min-h-screen flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Top Live Banner */}
      <div id="top-banner" className="bg-[#12161A] text-white py-2.5 px-4 text-xs font-mono border-b border-white/10 sticky top-0 z-50 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="font-bold text-[#C5A059] uppercase tracking-wider">{text.banner.promo}</span>
            <span className="hidden md:inline text-gray-300">
              {text.banner.spots.replace('{spots}', spotsLeft.toString())}
            </span>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#C5A059] hover:text-white underline font-bold transition flex items-center gap-1"
          >
            <span>{text.banner.cta}</span>
          </a>
        </div>
      </div>

      {/* HEADER & HERO SECTION */}
      <header className="pt-6 pb-16 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Navbar */}
          <nav className="flex flex-wrap justify-between items-center gap-4 pb-12 border-b border-white/10">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-white/5 hover:bg-[#C5A059] text-zinc-200 hover:text-black border border-white/15 hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
              </Link>
              <Link href="/" className="font-fraunces font-black text-2xl tracking-tight text-white hover:opacity-85 transition hidden sm:inline-block">
                The Silent<span className="text-[#C5A059]">.</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/blog" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-[#C5A059] px-3 py-2 transition">
                {language === 'es' ? 'Blog IA' : 'AI Blog'}
              </Link>
              <Link href="/influencer-ia" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-[#C5A059] px-3 py-2 transition">
                {language === 'es' ? 'Guía $47' : '$47 Guide'}
              </Link>
              <a href="#estrategia" className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition">
                {text.nav.strategy}
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-xs uppercase tracking-wider bg-[#C5A059] text-black border border-[#C5A059] px-4 py-2 hover:bg-[#B38F48] transition flex items-center gap-1.5 font-bold"
              >
                <span>{text.nav.whatsapp}</span>
              </a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center pt-20 pb-10">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.hero.badge}
            </div>
            <h1 className="font-fraunces font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-white tracking-tight">
              {text.hero.title}
            </h1>
            <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              {text.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase tracking-wider px-7 py-4.5 transition transform hover:-translate-y-0.5 shadow-lg font-bold"
              >
                <span>{text.hero.ctaTest}</span>
              </button>
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es'
                    ? 'Hola! Me interesa agendar una llamada estratégica con un estratega creativo para mi negocio.'
                    : 'Hi! I want to book a creative strategy call for my business.'
                )}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-mono text-xs uppercase tracking-wider px-6 py-4.5 border border-white/20 hover:border-white transition"
              >
                <span>{text.hero.ctaDemo}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* VIDEOS CAROUSEL SECTION */}
      <section className="py-24 bg-[#0A0D0E] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
                {language === 'es' ? "SHOWCASE DE FORMATOS · TECNOLOGÍA DE PUNTA" : "FORMATS SHOWCASE · CUTTING-EDGE TECH"}
              </div>
              <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">
                {language === 'es' ? "Formatos de Video Diseñados para Vender" : "Video Formats Engineered to Convert"}
              </h2>
              <p className="text-gray-400 text-sm mt-3 max-w-2xl leading-relaxed">
                {language === 'es' 
                  ? "Explora nuestros 7 formatos de mayor rendimiento generados con tecnología de punta: moda UGC, entrevistas modernas, hablado a cámara, contenido educativo, reels, street Q&A y anuncios para Meta Ads."
                  : "Explore our 7 top-performing formats generated with cutting-edge tech: fashion UGC, modern interviews, direct to camera, educational, reels, street Q&A, and Meta Ads creatives."}
              </p>
            </div>
            
            {/* Scroll buttons */}
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#C5A059]/40 hover:text-[#C5A059] transition cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#C5A059]/40 hover:text-[#C5A059] transition cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CAROUSEL_VIDEOS.map((v, idx) => (
              <div 
                key={idx} 
                className="w-[280px] sm:w-[310px] shrink-0 snap-start bg-[#12161A] border border-white/10 p-4 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/40 transition duration-300 shadow-xl group"
              >
                <div>
                  <div className="relative aspect-[9/16] w-full bg-black rounded-sm overflow-hidden mb-4 border border-white/5">
                    <video 
                      src={v.url}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                    />
                    {(v as any).tag && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] font-mono text-[9px] uppercase tracking-wider font-bold z-10 pointer-events-none">
                        {(v as any).tag}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-fraunces font-bold text-base text-white leading-tight">
                      {v.title[langKey]}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {v.desc[langKey]}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-500 uppercase">Vertical 9:16</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                      language === 'es'
                        ? `¡Hola! Me gustaría cotizar un video en el formato: ${v.title.es}`
                        : `Hi! I want to quote a video in the format: ${v.title.en}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase font-bold text-[#C5A059] hover:text-white transition flex items-center gap-1"
                  >
                    <span>Pedir este formato →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — EL PROBLEMA */}
      <section className="py-24 bg-[#12161A] border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.problem.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">{text.problem.title}</h2>
            <p className="text-gray-400 text-sm mt-3">{text.problem.subtitle}</p>
          </div>

          <div className="bg-[#0A0D0E] border border-white/10 p-8 sm:p-12 rounded-sm space-y-8 relative">
            <div className="absolute top-0 left-8 w-12 h-[2px] bg-[#C5A059]" />
            <ul className="space-y-5 font-sans text-sm sm:text-base text-gray-300">
              {text.problem.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#C5A059] font-mono text-xs font-bold mt-1.5 shrink-0">0{idx+1} /</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="font-fraunces italic text-lg sm:text-xl text-white text-center leading-relaxed max-w-2xl mx-auto">
                "{text.problem.footer}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — NUEVO MECANISMO */}
      <section id="estrategia" className="py-24 bg-[#0A0D0E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.mechanism.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">{text.mechanism.title}</h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">{text.mechanism.subtitle}</p>
          </div>

          {/* Process Timeline Flowchart */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {text.mechanism.steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#12161A] border border-white/5 hover:border-[#C5A059]/40 p-6 rounded-sm flex flex-col justify-between transition-all duration-300 relative group"
              >
                <div>
                  <div className="font-mono text-[#C5A059] text-xs font-bold mb-4 flex items-center justify-between">
                    <span>STEP 0{idx+1}</span>
                    {idx < 5 && <ArrowRight className="w-3.5 h-3.5 text-white/20 hidden lg:inline group-hover:text-[#C5A059] transition" />}
                  </div>
                  <h3 className="font-fraunces font-bold text-lg text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition">
                    {step.t}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="py-24 bg-[#12161A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.services.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">{text.services.title}</h2>
            <p className="text-gray-400 text-sm mt-3">{text.services.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* TIER 1: VIDEO INDIVIDUAL */}
            <div className="bg-[#0A0D0E] border border-white/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/40 transition duration-300">
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-3">
                  {text.services.single.period}
                </span>
                <h3 className="font-fraunces font-bold text-xl sm:text-2xl text-white mb-2">{text.services.single.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5 font-light">{text.services.single.desc}</p>
                
                <div className="flex flex-col mb-6">
                  <span className="font-fraunces text-3xl sm:text-4xl font-black text-white">{text.services.single.price}</span>
                  <span className="font-mono text-[11px] text-gray-500 mt-0.5">{text.services.single.local}</span>
                </div>

                <ul className="space-y-2.5 font-sans text-xs text-gray-300 mb-6 border-t border-white/10 pt-5">
                  {text.services.single.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className={inc.includes("caption") || inc.includes("Caption") ? "font-bold text-white" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPackage('single');
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center bg-transparent border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white font-mono text-[11px] uppercase font-bold tracking-wider py-3.5 transition cursor-pointer"
              >
                {text.services.single.cta}
              </button>
            </div>

            {/* TIER 2: PACK 10 VIDEOS */}
            <div className="bg-[#0A0D0E] border border-white/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/40 transition duration-300">
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/40 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-3">
                  {text.services.pack10.badge}
                </span>
                <h3 className="font-fraunces font-bold text-xl sm:text-2xl text-white mb-2">{text.services.pack10.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5 font-light">{text.services.pack10.desc}</p>
                
                <div className="flex flex-col mb-6">
                  <span className="font-fraunces text-3xl sm:text-4xl font-black text-white">{text.services.pack10.price}</span>
                  <span className="font-mono text-[11px] text-[#C5A059] font-semibold mt-0.5">{text.services.pack10.period}</span>
                </div>

                <ul className="space-y-2.5 font-sans text-xs text-gray-300 mb-6 border-t border-white/10 pt-5">
                  {text.services.pack10.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className={inc.includes("caption") || inc.includes("Caption") || idx === 0 ? "font-bold text-white" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPackage('pack10');
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center bg-transparent border border-[#C5A059]/50 hover:border-[#C5A059] text-[#C5A059] hover:text-white font-mono text-[11px] uppercase font-bold tracking-wider py-3.5 transition cursor-pointer"
              >
                {text.services.pack10.cta}
              </button>
            </div>

            {/* TIER 3: PACK 20 VIDEOS (RECOMENDADO / POPULAR) */}
            <div className="bg-[#0A0D0E] border-2 border-[#C5A059] p-6 sm:p-7 rounded-sm flex flex-col justify-between shadow-[0_0_35px_rgba(197,160,89,0.2)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black font-mono text-[9px] font-black px-3.5 py-0.5 uppercase tracking-widest rounded-full whitespace-nowrap">
                {text.services.pack20.recommended}
              </div>
              
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] bg-[#C5A059]/15 border border-[#C5A059]/40 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-3 mt-1">
                  {text.services.pack20.badge}
                </span>
                <h3 className="font-fraunces font-bold text-xl sm:text-2xl text-white mb-2">{text.services.pack20.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5 font-light">{text.services.pack20.desc}</p>
                
                <div className="flex flex-col mb-6">
                  <span className="font-fraunces text-3xl sm:text-4xl font-black text-[#C5A059]">{text.services.pack20.price}</span>
                  <span className="font-mono text-[11px] text-[#C5A059] font-bold mt-0.5">{text.services.pack20.period}</span>
                </div>

                <ul className="space-y-2.5 font-sans text-xs text-gray-200 mb-6 border-t border-white/10 pt-5">
                  {text.services.pack20.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className={idx < 2 || inc.includes("caption") || inc.includes("Caption") ? "font-bold text-white" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPackage('pack20');
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-[11px] uppercase font-bold tracking-wider py-3.5 transition shadow-lg cursor-pointer"
              >
                {text.services.pack20.cta}
              </button>
            </div>

            {/* TIER 4: PLAN DE CRECIMIENTO EN REDES */}
            <div className="bg-[#0A0D0E] border border-white/10 p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/40 transition duration-300">
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-3">
                  {text.services.growth.badge}
                </span>
                <h3 className="font-fraunces font-bold text-xl sm:text-2xl text-white mb-2">{text.services.growth.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-5 font-light">{text.services.growth.desc}</p>
                
                <div className="flex flex-col mb-6">
                  <span className="font-fraunces text-2xl sm:text-3xl font-black text-white">{text.services.growth.price}</span>
                  <span className="font-mono text-[11px] text-gray-500 mt-0.5">{text.services.growth.period}</span>
                </div>

                <ul className="space-y-2.5 font-sans text-xs text-gray-300 mb-6 border-t border-white/10 pt-5">
                  {text.services.growth.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className={idx === 0 || inc.includes("caption") ? "font-bold text-white" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es' 
                    ? 'Hola! Me interesa cotizar el Plan de Crecimiento en Redes con estrategia integral, creación de personaje y producción constante de videos.'
                    : 'Hi! I am interested in quoting the Social Media Growth Plan with comprehensive strategy, character creation and recurring videos.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-white/20 hover:border-white text-white font-mono text-[11px] uppercase font-bold tracking-wider py-3.5 transition block cursor-pointer"
              >
                {text.services.growth.cta}
              </a>
            </div>
          </div>

          {/* DEDICATED TRANSPARENCY & SCOPE BANNER */}
          <div className="mt-12 bg-[#0A0D0E] border-2 border-[#C5A059]/40 p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="font-mono text-xs uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>{text.services.scopeNotice.title}</span>
                </div>
                <h3 className="font-fraunces text-xl sm:text-2xl text-white font-bold">
                  {language === 'es' ? "¿Qué incluye y qué NO incluye cada paquete?" : "What is included and NOT included?"}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  <strong className="text-white">✓ Lo que entregamos:</strong> Producimos el 100% del contenido audiovisual vertical en alta resolución (9:16) con subtítulos dinámicos + guiones persuasivos + <strong>cada video con su respectivo caption para Instagram o Facebook</strong> listo para copiar y publicar con ganchos, llamada a la acción y hashtags.
                </p>
                <div className="bg-[#161410] border-l-4 border-[#C5A059] p-3 text-xs sm:text-sm text-amber-200/90 leading-relaxed font-light">
                  <strong className="text-white">⚠️ Importante sobre administración y pauta:</strong> Solo entregamos el contenido terminado. <u>NO administramos las redes sociales</u> (community management o publicación) ni gestionamos la pauta publicitaria (media buying). Si necesitas administración de redes o gestión de pauta en Meta Ads / TikTok Ads, es un servicio adicional independiente que cotizamos por separado previa evaluación técnica.
                </div>
              </div>

              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es'
                    ? 'Hola! Me gustaría cotizar videos de influencers IA para mi negocio o clientes y consultar sobre servicios adicionales de pauta o redes.'
                    : 'Hi! I would like to quote AI influencer videos and ask about ad/social media management services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold tracking-wider px-7 py-4.5 transition shadow-lg text-center"
              >
                {language === 'es' ? "Conversar por WhatsApp" : "Chat on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* SECCIÓN 9 — DIFERENCIACIÓN */}
      <section className="py-24 bg-[#12161A] border-y border-white/5 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
            {text.diff.badge}
          </div>
          <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white max-w-3xl mx-auto mb-16 leading-tight">
            {text.diff.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {text.diff.items.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#0A0D0E] border border-white/10 p-8 rounded-sm text-left flex flex-col justify-between hover:border-[#C5A059]/30 transition duration-300"
              >
                <div>
                  <span className="font-mono text-[#C5A059] text-sm font-bold block mb-4">
                    0{idx+1} /
                  </span>
                  <h3 className="font-fraunces font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 10 — PARA QUIÉN ES */}
      <section className="py-24 bg-[#0A0D0E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Qualification list */}
            <div>
              <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
                {text.who.badge}
              </div>
              <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white leading-tight mb-8">
                {text.who.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{text.who.subtitle}</p>

              <ul className="space-y-4 font-sans text-sm sm:text-base text-gray-300 border-l border-white/10 pl-6">
                {text.who.points.map((pt, idx) => (
                  <li key={idx} className="relative">
                    <span className="absolute -left-[30px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Grid */}
            <div className="bg-[#12161A] border border-white/10 p-8 sm:p-10 rounded-sm">
              <h3 className="font-fraunces font-bold text-xl text-white mb-6 pb-3 border-b border-white/10">
                {text.who.sectorsTitle}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {text.who.sectors.map((sec, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#0A0D0E] border border-white/5 p-3 font-mono text-xs text-gray-300 rounded-sm flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE FORM SECTION (#formulario) */}
      <section id="formulario" className="py-24 bg-[#12161A] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span> {text.form.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-white">{text.form.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{text.form.subtitle}</p>
          </div>

          {/* Multi-step Form Wizard */}
          <div className="bg-[#0A0D0E] border-2 border-white/10 p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 left-6 w-16 h-[2px] bg-[#C5A059]" />
            
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl border border-emerald-500/30">
                  <Check className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-fraunces font-bold text-3xl text-white">
                  {text.form.success.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                  {text.form.success.body
                    .replace('{business}', formData.businessName)
                    .replace('{province}', formData.province)}
                </p>

                <div className="bg-amber-950/20 border border-[#C5A059]/40 p-4 text-xs font-mono text-left max-w-md mx-auto text-[#C5A059] rounded-sm">
                  <b>{text.form.success.stepsTitle}</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                    {text.form.success.steps.map((step, idx) => (
                      <li key={idx}>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                    language === 'es' 
                      ? `¡Hola! Acabo de enviar el formulario para mi negocio *${formData.businessName}* en *${formData.province}*. Quiero reservar mi Creative Test de ₡75.000.`
                      : `Hi! I just completed the form for *${formData.businessName}* in *${formData.province}*. I want to book my Creative Test.`
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold px-6 py-4.5 transition shadow-lg"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{text.form.success.btnWhatsapp}</span>
                </a>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between font-mono text-xs text-gray-400 mb-2">
                    <span>
                      {text.form.indicator
                        .replace('{step}', currentStep.toString())
                        .replace('{name}', text.form.stepNames[currentStep - 1])}
                    </span>
                    <span>{currentStep * 25}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#C5A059] transition-all duration-300"
                      style={{ width: `${currentStep * 25}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleFormSubmit}>
                  {/* STEP 1: General Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="font-fraunces font-semibold text-xl text-white mb-4 border-b border-white/5 pb-2">
                        {text.form.step1.title}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step1.name}</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.businessName}
                            onChange={(e) => handleInputChange('businessName', e.target.value)}
                            placeholder={text.form.step1.namePlace} 
                            className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step1.province}</label>
                          <select 
                            value={formData.province}
                            onChange={(e) => handleInputChange('province', e.target.value)}
                            required 
                            className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          >
                            <option value="San José">San José</option>
                            <option value="Alajuela">Alajuela</option>
                            <option value="Cartago">Cartago</option>
                            <option value="Heredia">Heredia</option>
                            <option value="Guanacaste">Guanacaste</option>
                            <option value="Puntarenas">Puntarenas</option>
                            <option value="Limón">Limón</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step1.phone}</label>
                          <input 
                            type="tel" 
                            required 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder={text.form.step1.phonePlace} 
                            className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step1.email}</label>
                          <input 
                            type="email" 
                            required 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="contacto@tunegocio.cr" 
                            className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button 
                          type="button" 
                          onClick={() => validateStep(2)} 
                          className="bg-[#C5A059] text-black font-mono text-xs uppercase font-bold tracking-wider px-6 py-3.5 hover:bg-[#B38F48] transition flex items-center gap-2"
                        >
                          <span>{text.form.step1.next}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Product & Offer Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="font-fraunces font-semibold text-xl text-white mb-4 border-b border-white/5 pb-2">
                        {text.form.step2.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step2.desc}</label>
                        <textarea 
                          required 
                          rows={3} 
                          value={formData.productDesc}
                          onChange={(e) => handleInputChange('productDesc', e.target.value)}
                          placeholder={text.form.step2.descPlace}
                          className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step2.promo}</label>
                        <input 
                          type="text" 
                          value={formData.promo}
                          onChange={(e) => handleInputChange('promo', e.target.value)}
                          placeholder={text.form.step2.promoPlace}
                          className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(1)} 
                          className="border border-white/20 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 hover:border-white transition"
                        >
                          {text.form.step2.prev}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => validateStep(3)} 
                          className="bg-[#C5A059] text-black font-mono text-xs uppercase font-bold tracking-wider px-6 py-3.5 hover:bg-[#B38F48] transition flex items-center gap-2"
                        >
                          <span>{text.form.step2.next}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Photos / Visual Material */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="font-fraunces font-semibold text-xl text-white mb-4 border-b border-white/5 pb-2">
                        {text.form.step3.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-gray-400 mb-1">{text.form.step3.link}</label>
                        <input 
                          type="url" 
                          value={formData.driveUrl}
                          onChange={(e) => handleInputChange('driveUrl', e.target.value)}
                          placeholder="https://instagram.com/tunegocio o enlace de Drive con tus fotos"
                          className="w-full bg-[#12161A] text-white border border-white/10 p-3 font-sans text-sm focus:outline-none focus:border-[#C5A059]"
                        />
                      </div>

                      {/* Simulated Upload Area */}
                      <div 
                        onClick={handleUploadClick} 
                        className="border-2 border-dashed border-white/10 bg-[#12161A] p-6 text-center rounded cursor-pointer hover:border-[#C5A059] transition-colors"
                      >
                        <UploadCloud className="w-8 h-8 text-[#C5A059] mx-auto mb-2" />
                        <p className="font-sans text-xs text-gray-300 font-semibold">{text.form.step3.drag}</p>
                        <p className="font-mono text-[9px] text-gray-400 mt-1">{text.form.step3.dragSub}</p>
                        
                        {attachedFiles.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2 justify-center">
                            {attachedFiles.map((file, fIdx) => (
                              <span key={fIdx} className="bg-black text-[#C5A059] border border-[#C5A059]/20 font-mono text-[9px] px-2.5 py-1 rounded flex items-center gap-1">
                                <Check className="w-3 h-3 text-[#C5A059]" /> {file}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(2)} 
                          className="border border-white/20 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 hover:border-white transition"
                        >
                          {text.form.step3.prev}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => validateStep(4)} 
                          className="bg-[#C5A059] text-black font-mono text-xs uppercase font-bold tracking-wider px-6 py-3.5 hover:bg-[#B38F48] transition flex items-center gap-2"
                        >
                          <span>{text.form.step3.next}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Preferences & Confirmation */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <h3 className="font-fraunces font-semibold text-xl text-white mb-4 border-b border-white/5 pb-2">
                        {text.form.step4.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-[#C5A059] font-bold mb-2">
                          {language === 'es' ? "Selecciona el paquete deseado:" : "Select your desired package:"}
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2.5 font-mono text-xs">
                          {[
                            { id: 'single', label: language === 'es' ? '1 Video Individual ($50 USD)' : '1 Single Video ($50 USD)', tag: '$50' },
                            { id: 'pack10', label: language === 'es' ? 'Pack 10 Videos ($420 USD)' : 'Pack 10 Videos ($420 USD)', tag: 'Oferta' },
                            { id: 'pack20', label: language === 'es' ? 'Pack 20 Videos ($750 USD)' : 'Pack 20 Videos ($750 USD)', tag: 'Popular' },
                            { id: 'growth', label: language === 'es' ? 'Plan de Crecimiento (Cotizar)' : 'Growth Plan (Quote)', tag: 'Estrategia' },
                          ].map((pkg) => (
                            <label 
                              key={pkg.id} 
                              onClick={() => setSelectedPackage(pkg.id)}
                              className={`flex items-center justify-between p-3 border cursor-pointer transition rounded-sm ${
                                selectedPackage === pkg.id 
                                  ? 'bg-[#C5A059]/15 border-[#C5A059] text-white font-bold' 
                                  : 'bg-[#12161A] border-white/10 text-gray-300 hover:border-white/30'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <input 
                                  type="radio" 
                                  name="packageChoice"
                                  checked={selectedPackage === pkg.id} 
                                  onChange={() => setSelectedPackage(pkg.id)}
                                  className="accent-[#C5A059]" 
                                />
                                <span className="text-xs">{pkg.label}</span>
                              </div>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 text-[#C5A059] font-mono uppercase">
                                {pkg.tag}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Guarantee and Scope box */}
                      <div className="bg-[#12161A] border border-[#C5A059]/40 p-4 text-xs space-y-2 rounded-sm">
                        <div className="font-bold text-[#C5A059] flex items-center gap-1.5 font-mono">
                          <Check className="w-4 h-4 text-[#C5A059]" />
                          <span>{language === 'es' ? "Términos Transparentes y Entrega" : "Transparent Terms & Delivery"}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed font-light">
                          {language === 'es'
                            ? "Entregamos cada video vertical en alta resolución (9:16) con subtítulos dinámicos de retención y su respectivo caption redactado para Instagram o Facebook con copy persuasivo y llamadas a la acción. No administramos redes sociales ni pauta publicitaria (si se requiere, se cotiza de forma independiente)."
                            : "We deliver each vertical high-res video (9:16) with dynamic retention subtitles and its corresponding ready-to-post caption for Instagram or Facebook. We do not manage social accounts or paid media (quoted separately upon request)."}
                        </p>
                      </div>

                      {/* TWO SEPARATE MANDATORY LEGAL CHECKBOXES (RGPD / AEPD BLINDAJE) */}
                      <div className="pt-2 space-y-3 border-t border-white/10">
                        <span className="block font-mono text-[10px] uppercase text-[#C5A059] font-bold tracking-wider">
                          {language === 'es' ? "Consentimiento Legal Obligatorio (Marcado Individual)" : "Mandatory Legal Consent (Individual Check)"}
                        </span>

                        {/* Checkbox 1: Terms */}
                        <label className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition ${
                          termsAccepted ? 'border-[#C5A059]/60 bg-[#C5A059]/5' : 'border-white/15 bg-black/30 hover:border-white/30'
                        }`}>
                          <input
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => {
                              setTermsAccepted(e.target.checked);
                              if (e.target.checked && privacyAccepted) setLegalConsentError('');
                            }}
                            className="mt-0.5 w-4 h-4 rounded border-zinc-600 accent-[#C5A059] cursor-pointer shrink-0"
                          />
                          <span className="text-xs text-zinc-300 leading-snug">
                            {language === 'es' ? (
                              <>
                                He leído y acepto expresamente los{' '}
                                <Link 
                                  href="/terms-of-service" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#C5A059] underline hover:text-amber-300 font-medium inline-flex items-center gap-1"
                                >
                                  Términos y Condiciones de Uso y Contratación
                                </Link>{' '}
                                (versión v2.1-2026-10), incluyendo el alcance de producción audiovisual con IA. *
                              </>
                            ) : (
                              <>
                                I have read and expressly accept the{' '}
                                <Link 
                                  href="/terms-of-service" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#C5A059] underline hover:text-amber-300 font-medium inline-flex items-center gap-1"
                                >
                                  Terms and Conditions of Use & Contracting
                                </Link>{' '}
                                (v2.1-2026-10), including the AI audiovisual scope. *
                              </>
                            )}
                          </span>
                        </label>

                        {/* Checkbox 2: Privacy */}
                        <label className={`flex items-start gap-3 p-3 rounded border cursor-pointer transition ${
                          privacyAccepted ? 'border-[#C5A059]/60 bg-[#C5A059]/5' : 'border-white/15 bg-black/30 hover:border-white/30'
                        }`}>
                          <input
                            type="checkbox"
                            checked={privacyAccepted}
                            onChange={(e) => {
                              setPrivacyAccepted(e.target.checked);
                              if (e.target.checked && termsAccepted) setLegalConsentError('');
                            }}
                            className="mt-0.5 w-4 h-4 rounded border-zinc-600 accent-[#C5A059] cursor-pointer shrink-0"
                          />
                          <span className="text-xs text-zinc-300 leading-snug">
                            {language === 'es' ? (
                              <>
                                He leído y consiento el tratamiento de mis datos de contacto conforme a la{' '}
                                <Link 
                                  href="/privacy-policy" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#C5A059] underline hover:text-amber-300 font-medium inline-flex items-center gap-1"
                                >
                                  Política de Privacidad
                                </Link>{' '}
                                (RGPD/LOPDGDD) para el envío de propuestas y soporte directo. *
                              </>
                            ) : (
                              <>
                                I have read and consent to the processing of my contact details according to the{' '}
                                <Link 
                                  href="/privacy-policy" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#C5A059] underline hover:text-amber-300 font-medium inline-flex items-center gap-1"
                                >
                                  Privacy Policy
                                </Link>{' '}
                                (GDPR) for project proposals and direct production support. *
                              </>
                            )}
                          </span>
                        </label>

                        {/* Legal Error Banner if attempted submit without both */}
                        {legalConsentError && (
                          <div className="p-3 bg-red-950/50 border border-red-500/50 rounded text-xs text-red-200 flex items-center gap-2 animate-in fade-in">
                            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                            <span>{legalConsentError}</span>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(3)} 
                          className="border border-white/20 text-white font-mono text-xs uppercase tracking-wider px-5 py-3 hover:border-white transition"
                        >
                          {text.form.step4.prev}
                        </button>
                        <button 
                          type="submit" 
                          className="bg-[#C5A059] hover:bg-[#B38F48] text-black font-bold text-white font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 flex items-center gap-2 shadow-lg"
                        >
                          <Send className="w-4 h-4" />
                          <span>{text.form.step4.submit}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#0A0D0E]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span> {text.faq.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-white">{text.faq.title}</h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {text.faq.items.map((item, idx) => (
              <div key={idx} className="py-6">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full flex justify-between items-center text-left font-fraunces font-semibold text-lg sm:text-xl text-white gap-4"
                >
                  <span>{item.q}</span>
                  <span className="font-mono text-xl text-[#C5A059]">
                    {openFaq === idx ? "×" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 mt-3' : 'max-h-0'}`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-light">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 text-center bg-[#12161A] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#C5A059] inline-block"></span> {text.finalCta.badge}
          </div>
          <h2 className="font-fraunces font-bold text-4xl sm:text-6xl max-w-2xl mx-auto mb-6 text-white leading-tight">
            {text.finalCta.title}
          </h2>
          <p className="text-gray-300 text-sm max-w-md mx-auto mb-10 leading-relaxed font-light">
            {text.finalCta.subtitle}
          </p>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
              language === 'es'
                ? 'Hola! Me gustaría coordinar un espacio con The Silent para analizar la estrategia creativa de mi negocio y qué contenido podemos crear.'
                : 'Hi! I would like to book a chat with The Silent to analyze my business creative strategy.'
            )}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold px-8 py-5 transition transform hover:-translate-y-0.5 shadow-xl"
          >
            <Smartphone className="w-5 h-5" />
            <span>{text.finalCta.btn}</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#0A0D0E] text-gray-500 font-mono text-xs border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <b className="text-white font-fraunces text-base">The Silent<span className="text-[#C5A059]">.</span></b> · Creative Intelligence Agency in Costa Rica
          </div>
          <div>
            {language === 'es' ? 'WhatsApp Directo: ' : 'Direct WhatsApp: '} 
            <a href={`https://wa.me/${WHATSAPP_NUM}`} className="text-[#C5A059] underline hover:text-white">+506 6419-4111</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-zinc-500">
          <Link href="/terms-of-service" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Términos y Condiciones
          </Link>
          <span>·</span>
          <Link href="/privacy-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Privacidad
          </Link>
          <span>·</span>
          <Link href="/cookie-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Cookies
          </Link>
          <span>·</span>
          <Link href="/refund-policy" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Política de Reembolso
          </Link>
          <span>·</span>
          <Link href="/legal-notice" className="hover:text-[#C5A059] transition underline underline-offset-4">
            Aviso Legal LSSI-CE
          </Link>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition duration-300 flex items-center justify-center group" 
        title={text.whatsapp.float}
      >
        <Smartphone className="w-6 h-6 shrink-0 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-mono text-xs font-bold pl-0 group-hover:pl-2">
          {text.whatsapp.float}
        </span>
      </a>

      {/* VIDEO PREVIEW MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F2A2E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12161A] border border-[#C5A059]/30 w-full max-w-md rounded-sm shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#1F2A2E] text-[#FBF6EC] flex justify-between items-center font-mono text-xs border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold uppercase tracking-wider text-[#FF8C42] ml-2">
                  {text.modal.title}
                </span>
              </div>
              <button 
                onClick={() => setModalOpen(false)} 
                className="text-[#FBF6EC]/70 hover:text-white font-bold text-lg px-2"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="text-center font-mono text-xs text-[#00879F] font-bold uppercase tracking-wider">
                <i className="fa-solid fa-mobile-screen mr-1"></i> {isHorizontal ? 'Horizontal (16:9)' : text.modal.sub}
              </div>

              {/* Sub-tab example selector if multiple examples exist */}
              {sources.length > 1 && (
                <div className="flex justify-start gap-1 overflow-x-auto pb-2 font-mono text-[9px] scrollbar-thin border-b border-[rgba(31,42,46,0.14)]">
                  {sources.map((src, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveSourceIndex(sIdx)}
                      className={`px-2.5 py-1 border shrink-0 transition rounded-sm ${activeSourceIndex === sIdx ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold font-bold' : 'bg-[#1F2A2E] border-white/10 text-white hover:border-white'}`}
                    >
                      {src.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Vertical or Horizontal Video Container */}
              <div className="flex justify-center bg-black/95 p-3 rounded-sm border border-[rgba(31,42,46,0.14)]">
                <div 
                  className={`relative bg-zinc-900 overflow-hidden flex flex-col justify-between p-4 transition-all duration-300 rounded border border-zinc-700 shadow-2xl ${
                    isHorizontal ? 'w-full aspect-video h-auto' : 'w-56 h-[380px]'
                  }`}
                >
                  
                  {/* Background cover image if no video URL is present */}
                  {!currentSource.url && (currentStyleData as any).thumbnail && (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${(currentStyleData as any).thumbnail})` }}
                      />
                      <div className="absolute inset-0 bg-black/60 z-0" />
                    </>
                  )}

                  {/* Simulated Badge - Only shown when no video is playing */}
                  {!currentSource.url && (
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/80 z-10">
                      <span className="bg-[#FF8C42]/90 text-[#1F2A2E] px-2 py-0.5 rounded font-bold uppercase">
                        {currentStyleData?.badge}
                      </span>
                      <span className="bg-black/60 px-2 py-0.5 rounded text-[#00B4D8] font-bold">
                        {language === 'es' ? "⚡ Cupos Limitados" : "⚡ Limited Slots"}
                      </span>
                    </div>
                  )}

                  {/* Simulated Fallback (shown when no video URL) */}
                  {!currentSource.url && (
                    <div className="my-auto text-center z-10 px-2">
                      <div className="w-20 h-20 rounded-full border-2 border-[#FF8C42] mx-auto overflow-hidden mb-3 bg-zinc-800/80 flex items-center justify-center relative shadow-lg">
                        {renderIcon(currentStyleData?.icon)}
                        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-zinc-900 animate-ping"></div>
                      </div>
                      <p className="text-white font-fraunces font-medium text-xs leading-relaxed drop-shadow-md">
                        {currentSource.script[langKey]}
                      </p>
                    </div>
                  )}

                  {/* Actual Video Player */}
                  {currentSource.url && (
                    <div className="absolute inset-0 z-0 bg-black">
                      <video 
                        ref={videoRef}
                        src={currentSource.url}
                        poster={(currentStyleData as any).thumbnail}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        loop
                        muted={videoMuted}
                        autoPlay
                      />
                    </div>
                  )}

                  {/* Simulated CTA Bar */}
                  {!currentSource.url && (
                    <div className="z-10 bg-black/80 p-2 rounded text-center border border-white/10">
                      <span className="text-[#F2C14E] font-mono text-[10px] font-bold block">
                        {currentSource.cta[langKey]}
                      </span>
                      <span className="text-white/60 font-mono text-[9px]">
                        Costa Rica · Formato 9:16
                      </span>
                    </div>
                  )}

                </div>
              </div>

              {/* Detail box */}
              <div className="bg-[#1F2A2E]/50 p-3.5 border border-[#C5A059]/20 text-xs font-sans space-y-1">
                <b className="font-fraunces text-[#C5A059] font-bold text-sm block">
                  {currentStyleData?.heading[langKey]}
                </b>
                <p className="text-gray-300 leading-relaxed text-xs">
                  {currentStyleData?.desc[langKey]}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#12161A] border-t border-[rgba(31,42,46,0.14)] flex justify-between items-center">
              <span className="font-mono text-xs text-[#4A5A5E]">{text.modal.footerQuestion}</span>
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es'
                    ? `Hola! Me interesa la variante ${currentSource.name} del estilo ${currentStyleData?.badge}`
                    : `Hi! I am interested in the ${currentSource.name} variant of the ${currentStyleData?.badge} style`
                )}`} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalOpen(false)} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase font-bold tracking-wider px-4 py-2.5 transition flex items-center gap-1.5"
              >
                <Smartphone className="w-3.5 h-3.5 text-white" />
                <span>{text.modal.footerBtn}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
