'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { submitApplication } from '../actions';
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
  Smartphone
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
      badge: "AGENCIA DE INTELIGENCIA CREATIVA",
      title: "Tu empresa no necesita más contenido. Necesita mejores ideas.",
      subtitle: "Creamos contenido y anuncios con IA + creatividad estratégica para ayudarte a captar atención, construir autoridad y generar oportunidades de venta.",
      ctaTest: "QUIERO PROBAR THE SILENT",
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
      badge: "SERVICIOS Y TARIFAS",
      title: "Elige cómo quieres crecer",
      subtitle: "Tres formas de trabajar con nosotros, desde pruebas creativas rápidas hasta un partner creativo recurrente.",
      test: {
        title: "CREATIVE TEST",
        price: "₡75.000",
        usd: "o $150",
        period: "Pago único",
        desc: "Antes de contratar un sistema mensual, prueba nuestra metodología con 5 conceptos publicitarios diferentes.",
        includes: [
          "5 videos verticales de alta resolución",
          "5 conceptos creativos únicos",
          "5 hooks persuasivos testeables",
          "Guiones estructurados de ventas",
          "Producción de video con IA y UGC",
          "Edición profesional y ritmo dinámico",
          "Subtítulos de alto impacto para retención"
        ],
        cta: "QUIERO PROBAR THE SILENT"
      },
      engine: {
        title: "CREATIVE ENGINE",
        price: "₡450.000",
        usd: "/ mes",
        period: "Suscripción mensual",
        desc: "Servicio mensual para empresas que necesitan producción constante de contenido y creatividades publicitarias.",
        recommended: "RECOMENDADO",
        includes: [
          "10 videos verticales mensuales",
          "6 piezas gráficas de diseño premium",
          "Estrategia de contenido mensual",
          "Investigación profunda de audiencias",
          "Desarrollo constante de nuevos conceptos",
          "Hooks y ganchos de retención",
          "Guiones adaptados al acento local",
          "Producción audiovisual con IA",
          "Edición, colorización y ritmo",
          "Subtítulos dinámicos optimizados",
          "2 conceptos publicitarios mensuales",
          "Adaptaciones para Reels, TikTok y Stories",
          "Optimización creativa constante con datos",
          "Reunión estratégica mensual de análisis"
        ],
        cta: "QUIERO EL CREATIVE ENGINE"
      },
      partner: {
        title: "CREATIVE PARTNER",
        price: "Desde ₡750.000",
        usd: "/ mes",
        period: "Retainer personalizado",
        desc: "Para empresas que necesitan un equipo creativo externo y dirección estratégica dedicada de alto nivel.",
        includes: [
          "16 a 20 videos verticales al mes",
          "Creatividades a la medida para campañas",
          "UGC Ads con avatares de IA y personas reales",
          "Videos de venta de formato largo (VSL)",
          "Conceptos integrados de campaña anual",
          "Testing creativo constante y Test A/B",
          "Planificación de contenido orgánico",
          "Adaptaciones de formatos de anuncios",
          "Estrategia de embudos de conversión",
          "Dirección creativa y de arte dedicada",
          "Optimización y reportes mensuales de ROI"
        ],
        cta: "HABLEMOS DE MI EMPRESA"
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
          client: "Super Pet (Alimentos Premium)",
          problem: "Alto costo de adquisición de clientes con imágenes estáticas tradicionales en redes.",
          concept: "Avatar de IA simulando una videollamada selfie informal, recomendando la marca de forma orgánica y cercana.",
          result: "Disminución del 42% en costo por lead y aumento inmediato de la tasa de detención (scroll-stop rate).",
          demoName: "Ejemplo 1 (Super Pet)"
        },
        {
          key: "podcast",
          client: "Dental Care Costa Rica",
          problem: "Desconfianza en tratamientos dentales de alto costo y baja autoridad en medios.",
          concept: "Fragmento explicativo de doctor de IA con tono clínico y subtítulos dinámicos de alto impacto visual.",
          result: "Aumento del 57% en consultas calificadas por WhatsApp mediante la generación rápida de autoridad.",
          demoName: "Podcast Clip (Studio Talk)"
        },
        {
          key: "campaign",
          client: "Café Naranjo (Cata de Especialidad)",
          problem: "Anuncios publicitarios agresivos que el usuario salta tras el primer segundo.",
          concept: "Formato documental de entrevista corta explicando el origen del grano y los procesos de selección gourmet.",
          result: "CTR de 4.8% en Meta Ads y alta tracción de reproducciones orgánicas completas.",
          demoName: "Entrevista de Éxito"
        },
        {
          key: "miniseries",
          client: "Boutique Hueles Delicioso",
          problem: "Mercado saturado y baja retención de clientes en anuncios de fragancias.",
          concept: "Mini serie narrativa con intriga y ganchos olfativos para incentivar al usuario a ver el siguiente episodio.",
          result: "120,000 reproducciones acumuladas y alta conversión en compras directas de e-commerce.",
          demoName: "Cap 27 (Hueles Delicioso)"
        },
        {
          key: "animados",
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
          q: "¿Necesito aparecer frente a cámara?",
          a: "No. Estructuramos la producción utilizando avatares de IA de alta fidelidad, voces sintéticas profesionales, material de archivo cinemático o recursos gráficos, de modo que tu equipo no necesita perder tiempo frente a las cámaras."
        },
        {
          q: "¿Los videos son creados con IA?",
          a: "Sí, utilizamos herramientas avanzadas de generación de video, síntesis de voz y postproducción digital. Sin embargo, toda la estrategia de ventas, la redacción de guiones y la dirección de arte son 100% ideadas y validadas por nuestros directores creativos."
        },
        {
          q: "¿Puedo utilizar los videos para publicidad?",
          a: "Totalmente. Todos los videos se entregan optimizados y licenciados para su uso en campañas de Meta Ads (Facebook/Instagram), TikTok Ads, YouTube Ads o uso orgánico en tus redes sociales."
        },
        {
          q: "¿Cuánto tarda la producción?",
          a: "Para el Creative Test (5 ads), el tiempo de entrega es de 3 a 5 días hábiles una vez aprobados los guiones. Para los planes mensuales (Engine / Partner), trabajamos con un calendario constante de entregas semanales."
        },
        {
          q: "¿Trabajan únicamente con empresas de Costa Rica?",
          a: "No, aunque nuestro foco principal está en marcas consolidadas de Costa Rica (San José, Heredia, Alajuela, etc.) para facilitar la facturación (SINPE o transferencia bancaria), también atendemos clientes internacionales en Latinoamérica y Estados Unidos."
        },
        {
          q: "¿Puedo contratar únicamente un proyecto?",
          a: "Sí. Si deseas probar nuestro flujo de trabajo e ideas antes de pasar a un esquema de retención mensual, puedes iniciar con el paquete 'Creative Test' de 5 anuncios por ₡75,000 / $150."
        },
        {
          q: "¿Qué pasa si necesito más contenido?",
          a: "Podemos escalar el volumen de piezas en el plan Creative Partner. Diseñamos un paquete a la medida que se adapte al volumen mensual de anuncios o publicaciones orgánicas que requiera tu embudo de ventas."
        },
        {
          q: "¿Trabajan con campañas publicitarias?",
          a: "Nos especializamos en el desarrollo creativo de las campañas (anuncios, ángulos y copywriting). No gestionamos la pauta en sí (media buying), pero trabajamos de la mano con tu equipo de marketing o agencia de pauta para entregarles los formatos ganadores que necesitan para optimizar el ROI."
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
      badge: "CREATIVE INTELLIGENCE AGENCY",
      title: "Your company doesn't need more content. It needs better ideas.",
      subtitle: "We create content and ads with AI + strategic creativity to help you capture attention, build authority, and generate sales opportunities.",
      ctaTest: "I WANT TO TEST THE SILENT",
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
      badge: "SERVICES & RATES",
      title: "Choose how you want to grow",
      subtitle: "Three ways to work with us, from quick creative tests to a dedicated recurring creative partner.",
      test: {
        title: "CREATIVE TEST",
        price: "₡75,000",
        usd: "or $150",
        period: "One-time payment",
        desc: "Before hiring a monthly system, test our methodology with 5 different advertising concepts.",
        includes: [
          "5 high-resolution vertical videos",
          "5 unique creative concepts",
          "5 testable persuasive hooks",
          "Structured sales scripts",
          "AI and UGC video production",
          "Professional editing and dynamic pacing",
          "High-impact subtitles for retention"
        ],
        cta: "I WANT TO TEST THE SILENT"
      },
      engine: {
        title: "CREATIVE ENGINE",
        price: "₡450,000",
        usd: "/ mo",
        period: "Monthly subscription",
        desc: "Monthly service for companies that need constant production of content and ad creatives.",
        recommended: "RECOMMENDED",
        includes: [
          "10 vertical videos monthly",
          "6 premium design graphic pieces",
          "Monthly content strategy",
          "Deep audience research",
          "Constant development of new concepts",
          "Hooks and retention angles",
          "Scripts adapted to local accents",
          "AI audiovisual production",
          "Editing, color grading and pacing",
          "Subtitles optimized for retention",
          "2 monthly advertising concepts",
          "Adaptations for Reels, TikTok and Stories",
          "Constant creative optimization with data",
          "Monthly strategic analysis meeting"
        ],
        cta: "I WANT THE CREATIVE ENGINE"
      },
      partner: {
        title: "CREATIVE PARTNER",
        price: "From ₡750,000",
        usd: "/ mo",
        period: "Custom retainer",
        desc: "For companies that need an external creative team and high-level dedicated strategic direction.",
        includes: [
          "16 to 20 vertical videos per month",
          "Custom creatives for campaigns",
          "UGC Ads with AI avatars and real people",
          "Long-form video sales letters (VSL)",
          "Integrated annual campaign concepts",
          "Constant creative testing and A/B testing",
          "Organic content planning",
          "Ad format adaptations",
          "Conversion funnel strategy",
          "Dedicated creative and art direction",
          "Monthly optimization and ROI reports"
        ],
        cta: "LET'S TALK ABOUT MY BUSINESS"
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
          client: "Super Pet (Premium Pet Food)",
          problem: "High customer acquisition costs using traditional static social media images.",
          concept: "AI avatar simulating an informal selfie video call, recommending the brand organically and closely.",
          result: "42% decrease in cost per lead and immediate increase in scroll-stop rate.",
          demoName: "Example 1 (Super Pet)"
        },
        {
          key: "podcast",
          client: "Dental Care Costa Rica",
          problem: "Lack of perceived authority and low trust in high-ticket dental treatments.",
          concept: "AI doctor explanatory clip with clinical tone and high-contrast dynamic subtitles.",
          result: "57% increase in qualified inquiries via WhatsApp by generating quick authority.",
          demoName: "Podcast Clip (Studio Talk)"
        },
        {
          key: "campaign",
          client: "Cafe Naranjo (Specialty Coffee)",
          problem: "Aggressive promotional ads that users skip after the first second.",
          concept: "Short documentary interview format explaining bean origin and gourmet selection processes.",
          result: "4.8% CTR in Meta Ads and high organic full-view traction.",
          demoName: "Success Interview"
        },
        {
          key: "miniseries",
          client: "Hueles Delicioso Boutique",
          problem: "Saturated market and low customer retention in fragrance advertisements.",
          concept: "Narrative mini-series with intrigue and olfactory hooks to encourage users to watch the next episode.",
          result: "120,000 cumulative views and high direct e-commerce sales conversion.",
          demoName: "Cap 27 (Hueles Delicioso)"
        },
        {
          key: "animados",
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
          q: "Do I need to appear in front of the camera?",
          a: "No. We structure the production using high-fidelity AI avatars, professional synthetic voices, cinematic stock footage, or graphic resources, so your team doesn't need to waste time in front of cameras."
        },
        {
          q: "Are the videos created with AI?",
          a: "Yes, we use advanced video generation tools, speech synthesis, and digital postproduction. However, the entire sales strategy, scriptwriting, and art direction are 100% conceptualized and validated by our creative directors."
        },
        {
          q: "Can I use the videos for advertising?",
          a: "Absolutely. All videos are delivered optimized and licensed for use in campaigns on Meta Ads (Facebook/Instagram), TikTok Ads, YouTube Ads, or organic social postings."
        },
        {
          q: "How long does production take?",
          a: "For the Creative Test (5 ads), delivery takes 3 to 5 business days once scripts are approved. For monthly plans (Engine / Partner), we work with a constant weekly delivery schedule."
        },
        {
          q: "Do you work exclusively with companies in Costa Rica?",
          a: "No, although our main focus is on consolidated brands in Costa Rica (San José, Heredia, Alajuela, etc.) to facilitate billing (SINPE or bank transfer), we also serve international clients in Latin America and the United States."
        },
        {
          q: "Can I hire a single project only?",
          a: "Yes. If you wish to test our workflow and ideas before moving to a monthly retainer model, you can start with the 'Creative Test' package of 5 ads for ₡75,000 / $150."
        },
        {
          q: "What if I need more content?",
          a: "We can scale the volume of pieces in the Creative Partner plan. We design a tailored package that adapts to the monthly volume of ads or organic posts required by your sales funnel."
        },
        {
          q: "Do you manage ad campaigns?",
          a: "We specialize in campaign creative development (ads, angles, and copywriting). We do not manage the media buying ourselves, but we work hand-in-hand with your marketing team or ad agency to deliver the winning formats they need to optimize ROI."
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
        name: "Ejemplo 1 (Super Pet)",
        url: "https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/08/Super-Pet.mp4",
        script: {
          es: "«¡Gente de Costa Rica! Si tienen su propio negocio y quieren atraer clientes por Instagram sin pagar fortunas en agencias, tienen que ver esto...»",
          en: "«People of Costa Rica! If you have your own business and want to attract customers on Instagram without spending fortunes on agencies, you need to see this...»"
        },
        cta: {
          es: "👉 Tocá aquí para hablar por WhatsApp",
          en: "👉 Click here to talk via WhatsApp"
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

export default function OfertaPage() {
  const { language } = useLanguage();
  const text = language === 'es' ? TRANSLATIONS.es : TRANSLATIONS.en;
  const langKey = language === 'es' ? 'es' : 'en';

  // Clock state
  const [spotsLeft, setSpotsLeft] = useState(7);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form step wizard state
  const [currentStep, setCurrentStep] = useState(1);
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
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);

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
    setFormSubmitted(true);
    setSpotsLeft(prev => Math.max(1, prev - 1));

    // Call server action to notify owner and client via Resend in the background
    submitApplication(formData).catch(err => {
      console.error("Error submitting server email:", err);
    });

    const messageText = language === 'es' 
      ? `¡Hola! Acabo de enviar el formulario para mi negocio *${formData.businessName}* en *${formData.province}*. Quiero reservar el paquete de 5 videos publicitarios con IA por $150 USD. Mi correo es ${formData.email} y celular ${formData.phone}.`
      : `Hi! I just submitted the form for *${formData.businessName}* in *${formData.province}*. I want to book the 5 AI video ads package for $150 USD. My email is ${formData.email} and phone ${formData.phone}.`;
    
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
          <nav className="flex justify-between items-center pb-16 border-b border-white/5">
            <Link href="/" className="font-fraunces font-black text-2xl tracking-tight text-white hover:opacity-85 transition">
              The Silent<span className="text-[#C5A059]">.</span>
            </Link>
            <div className="flex items-center gap-4">
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.services.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">{text.services.title}</h2>
            <p className="text-gray-400 text-sm mt-3">{text.services.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* TIER 1: CREATIVE TEST */}
            <div className="bg-[#0A0D0E] border border-white/10 p-8 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/30 transition duration-300">
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-4">
                  {text.services.test.period}
                </span>
                <h3 className="font-fraunces font-bold text-2xl text-white mb-2">{text.services.test.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">{text.services.test.desc}</p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-fraunces text-4xl font-black text-white">{text.services.test.price}</span>
                  <span className="font-mono text-xs text-gray-500">{text.services.test.usd}</span>
                </div>

                <ul className="space-y-3 font-sans text-xs text-gray-300 mb-8 border-t border-white/10 pt-6">
                  {text.services.test.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full text-center bg-transparent border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white font-mono text-xs uppercase font-bold tracking-wider py-4 transition"
              >
                {text.services.test.cta}
              </button>
            </div>

            {/* TIER 2: CREATIVE ENGINE (RECOMMENDED) */}
            <div className="bg-[#0A0D0E] border-2 border-[#C5A059] p-8 rounded-sm flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black font-mono text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full">
                {text.services.engine.recommended}
              </div>
              
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-4 mt-2">
                  {text.services.engine.period}
                </span>
                <h3 className="font-fraunces font-bold text-2xl text-white mb-2">{text.services.engine.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6 font-light">{text.services.engine.desc}</p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-fraunces text-4xl font-black text-[#C5A059]">{text.services.engine.price}</span>
                  <span className="font-mono text-xs text-gray-500">{text.services.engine.usd}</span>
                </div>

                <ul className="space-y-3 font-sans text-xs text-gray-200 mb-8 border-t border-white/10 pt-6">
                  {text.services.engine.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className={idx < 2 ? "font-bold text-white" : ""}>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es' 
                    ? 'Hola! Quiero contratar el servicio mensual Creative Engine (₡450.000/mes) para mi negocio.'
                    : 'Hi! I want to book the Creative Engine subscription (₡450,000/mo) for my business.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs uppercase font-bold tracking-wider py-4 transition shadow-lg block"
              >
                {text.services.engine.cta}
              </a>
            </div>

            {/* TIER 3: CREATIVE PARTNER */}
            <div className="bg-[#0A0D0E] border border-white/10 p-8 rounded-sm flex flex-col justify-between hover:border-[#C5A059]/30 transition duration-300">
              <div>
                <span className="font-mono text-[9px] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-4">
                  {text.services.partner.period}
                </span>
                <h3 className="font-fraunces font-bold text-2xl text-white mb-2">{text.services.partner.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light">{text.services.partner.desc}</p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-fraunces text-3xl font-black text-white">{text.services.partner.price}</span>
                  <span className="font-mono text-xs text-gray-500">{text.services.partner.usd}</span>
                </div>

                <ul className="space-y-3 font-sans text-xs text-gray-300 mb-8 border-t border-white/10 pt-6">
                  {text.services.partner.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                  language === 'es' 
                    ? 'Hola! Me interesa el servicio premium Creative Partner para estructurar la estrategia creativa de mi empresa.'
                    : 'Hi! I am interested in the premium Creative Partner retainer for my company.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-transparent border border-white/20 hover:border-white text-white font-mono text-xs uppercase font-bold tracking-wider py-4 transition block"
              >
                {text.services.partner.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS / PORTAFOLIO SECTION */}
      <section className="py-24 bg-[#0A0D0E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              {text.cases.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white">{text.cases.title}</h2>
            <p className="text-gray-400 text-sm mt-3">{text.cases.subtitle}</p>
          </div>

          <div className="space-y-12">
            {text.cases.items.map((c, idx) => (
              <div 
                key={idx} 
                className="bg-[#12161A] border border-white/10 p-6 sm:p-10 rounded-sm grid md:grid-cols-12 gap-8 items-center hover:border-[#C5A059]/25 transition duration-300 relative overflow-hidden"
              >
                {/* Left case specs */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-[#C5A059] text-xs font-bold uppercase tracking-wider block mb-1">
                      {text.cases.labels.client}
                    </span>
                    <h3 className="font-fraunces font-bold text-2xl text-white leading-tight">
                      {c.client}
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                    <div>
                      <span className="font-mono text-gray-500 text-[10px] uppercase font-bold tracking-widest block mb-1">
                        {text.cases.labels.problem}
                      </span>
                      <p className="text-gray-300 text-xs leading-relaxed font-light">
                        {c.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-gray-500 text-[10px] uppercase font-bold tracking-widest block mb-1">
                        {text.cases.labels.concept}
                      </span>
                      <p className="text-[#C5A059] text-xs leading-relaxed font-medium">
                        {c.concept}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <span className="font-mono text-gray-500 text-[10px] uppercase font-bold tracking-widest block mb-1">
                      {text.cases.labels.result}
                    </span>
                    <p className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0"></span>
                      {c.result}
                    </p>
                  </div>
                </div>

                {/* Right phone mockup overlay click to play */}
                <div className="md:col-span-5 flex justify-center">
                  <div 
                    onClick={() => openStyleModal(c.key as any, 0)}
                    className="relative cursor-pointer group rounded-lg overflow-hidden border border-white/15 bg-black aspect-[9/16] w-48 shadow-2xl transition hover:scale-105"
                  >
                    {/* Background image preview */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105 opacity-80"
                      style={{ backgroundImage: `url(${(STYLE_PREVIEWS[c.key as keyof typeof STYLE_PREVIEWS] as any)?.thumbnail || ''})` }}
                    />
                    {/* Black fade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 transition group-hover:via-black/20" />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                      <span className="bg-black/60 text-white font-mono text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-wider w-fit">
                        {c.demoName}
                      </span>
                      
                      <div className="my-auto text-center">
                        <div className="w-12 h-12 rounded-full bg-[#C5A059] text-black flex items-center justify-center mx-auto transition group-hover:scale-110 shadow-lg">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                        <span className="font-mono text-[9px] text-[#C5A059] uppercase tracking-widest block mt-3 font-bold">
                          {text.cases.labels.viewDemo}
                        </span>
                      </div>

                      <span className="text-white/60 font-mono text-[8px] text-center block">
                        9:16 vertical format
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
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
                        <label className="block font-mono text-[10px] uppercase text-gray-400 mb-2">{text.form.step4.styleTitle}</label>
                        <div className="grid sm:grid-cols-2 gap-2 font-mono text-xs">
                          {text.form.step4.stylesList.map((style, sIdx) => (
                            <label key={sIdx} className="flex items-center gap-2 p-2.5 bg-[#12161A] border border-white/10 cursor-not-allowed">
                              <input 
                                type="checkbox" 
                                checked 
                                disabled
                                className="accent-[#C5A059]" 
                              />
                              <span className="text-gray-300">{style}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Guarantee box */}
                      <div className="bg-[#12161A] border border-[#C5A059]/40 p-4 text-xs space-y-1">
                        <div className="font-bold text-[#C5A059] flex items-center gap-1.5 font-mono">
                          <Check className="w-4 h-4 text-[#C5A059]" /> {text.form.step4.termsTitle}
                        </div>
                        <p className="text-gray-300 leading-relaxed font-light">
                          {text.form.step4.termsDesc}
                        </p>
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
