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
      promo: "PRODUCCIÓN POR CUPOS LIMITADOS:",
      spots: "Solo trabajamos con 10 negocios por ciclo (Quedan {spots} disponibles)",
      cta: "Chatear al 6419-4111 →"
    },
    nav: {
      strategy: "Estrategia IA",
      whatsapp: "WhatsApp 6419-4111"
    },
    hero: {
      badge: "Producción con IA · San José, Costa Rica",
      title: "5 ANUNCIOS PARA TU NEGOCIO.",
      subtitle: "5 conceptos diferentes para vender tu producto.",
      ctaWhatsapp: "QUIERO MIS 5 ANUNCIOS",
      ctaDemo: "Ver Muestra Vertical (9:16)",
      trust: ["5 videos verticales", "Guiones incluidos", "$150 USD", "Aceptamos SINPE Móvil"]
    },
    stamp: {
      was: "$2,500 USD",
      now: "$150",
      promo: "Precio Lanzamiento",
      sinpe: "(o SINPE ₡78,000)",
      badge: "Cupos Limitados"
    },
    work: {
      badge: "SERVICIO 01: CREACIÓN DE ANUNCIOS (5 VIDEOS)",
      title: "5 Estilos de Video diseñados para vender en redes.",
      subtitle: "En lugar de probar una sola idea, te entregamos 5 formatos distintos en alta resolución para Instagram Reels, TikTok y YouTube Shorts.",
      demoCta: "Ver demo 9:16",
      styles: [
        { key: "ugc", title: "UGC con IA", desc: "Estilo creador de contenido orgánico con avatares humanos hiperrealistas recomendando tu producto." },
        { key: "podcast", title: "PodCast Clip", desc: "Extracto conversacional tipo entrevista de podcast que genera autoridad e interés inmediato." },
        { key: "dualcast", title: "Dual Cast", desc: "Interacción dinámica de dos avatares o voces debatiendo una necesidad y mostrando la solución." },
        { key: "animados", title: "Animados", desc: "Animaciones vectoriales y visuales gráficos con ritmo alto enfocados en retener la atención." },
        { key: "miniseries", title: "Mini Series", desc: "Micro-historia o secuencia narrativa por episodios que engancha al público para seguir viendo." }
      ]
    },
    campaignSection: {
      badge: "SERVICIO 02: CAMPAÑAS Y UNIVERSO DE MARCA",
      title: "Campaña Completa & Universo de Contenido",
      subtitle: "Un servicio premium continuo para estructurar toda tu identidad de marca, estilo visual y generar contenido recurrente. Contratación mínima a 6 meses. El costo es cotizable personalizado y se gestiona vía WhatsApp.",
      includesTitle: "¿Qué incluye el Servicio de Campaña?",
      includes: [
        { t: "Estructura de Marca y Universo Visual", d: "Definición estética del tono de marca, estilo gráfico y consistencia visual." },
        { t: "Producción de Contenido Constante", d: "Distribución periódica de videos de IA y UGC para mantener tus canales activos." },
        { t: "9 Variaciones de UGC Ads por Campaña", d: "Variantes de hooks y enfoques creativos para encontrar tus anuncios ganadores." },
        { t: "Optimización de Embudos de Conversión", d: "Redirección fluida del tráfico hacia tu WhatsApp de ventas o tienda online." }
      ],
      samplesTitle: "Showcase de Campaña: UGC Ads Nueva Colección",
      samplesSubtitle: "Haz clic en cualquier variante para ver el nivel de calidad de los UGC Ads:",
      ctaBtn: "COTIZAR CAMPAÑA POR WHATSAPP",
      prefill: "Hola! Me interesa cotizar el servicio premium de campaña y contenido constante de 6 meses para mi negocio."
    },
    roi: {
      badge: "Estrategia de Marketing Eficiente",
      title: "El verdadero riesgo es apostarle todo a un solo video.",
      subtitle: "En publicidad digital nadie sabe qué video va a explotar en ventas hasta probarlo. Nuestro modelo está pensado para encontrar tu anuncio ganador (Winning Ad) al menor costo posible.",
      traditional: {
        title: "El Riesgo Tradicional",
        desc: "Invertir un gran presupuesto en un único video rodado tradicionalmente.",
        items: [
          "Si a tu audiencia no le gusta ese único ángulo, perdiste toda la inversión.",
          "Cero capacidad de hacer Test A/B para comparar resultados.",
          "Meses esperando entre preproducción, rodaje y edición final.",
          "Alto costo por intento de anuncio ($1,500+ a $2,500+)."
        ],
        badgeAlert: "Alto Riesgo: Si el video no convierte, tenés que volver a pagar desde cero."
      },
      ai: {
        badge: "Estrategia Recomendada",
        title: "Probar 5 Ángulos Creativos en Paralelo",
        desc: "Diversificación inteligente para maximizar el retorno de tu publicidad.",
        items: [
          "Recibís 5 estilos diferentes (UGC, Podcast, Dual Cast, Animado, Mini Serie).",
          "Pones a competir los 5 videos en tus redes para ver cuál genera más ventas.",
          "Entrega rápida: Lanzás tus campañas de inmediato.",
          "Trato transparente: 50% de adelanto para producir y 50% al entregar."
        ],
        saving: "Encontrá el Video Ganador",
        savingSub: "5 intentos de venta por solo $150",
        total: "$150 USD"
      }
    },
    offer: {
      badge: "Oferta Exclusiva de Lanzamiento en Costa Rica",
      colones: "Equivalente a ₡78,000 colones (aceptamos SINPE Móvil)",
      body: "Recibís 5 videos en formato vertical 9:16 (UGC IA, Podcast Clip, Dual Cast, Animado y Mini Serie) redactados y producidos bajo cupos limitados.",
      terms: "Esquema de pago transparente: 50% de adelanto ($75 / ₡39,000) para iniciar producción. 50% final ($75 / ₡39,000) contra entrega. Solo trabajamos con 10 negocios por ciclo.",
      btnWhatsapp: "Reservar por WhatsApp (6419-4111)",
      btnForm: "Completar Formulario Web",
      limit: "Producción por cupos limitados. Solo trabajamos con 10 negocios por ciclo."
    },
    process: {
      badge: "Proceso Agilizado",
      title: "Tres pasos. Cupos limitados.",
      yourPart: {
        title: "Tu única parte:",
        desc: "Brindarnos información básica de tu PYME en Costa Rica: qué producto/servicio vendés, tu provincia, fotos o enlace de Instagram y la oferta que querés destacar.",
        sub: "Podés enviárnoslo por el formulario web o directo al WhatsApp 6419-4111."
      },
      ourPart: {
        steps: [
          { t: "Estrategia y Guionaje de Ventas", d: "Escribimos 5 guiones con ganchos psicológicos para captar la atención en los primeros 3 segundos." },
          { t: "Confirmación y Pago Inicial (50%)", d: "Aprobados los enfoques, se realiza el adelanto del 50% ($75 / ₡39,000 SINPE) e iniciamos generación." },
          { t: "Generación e Integración IA", d: "Avatares, gráficos animados, voces con acento nativo/neutro y subtítulos llamativos en formato vertical (9:16)." },
          { t: "Entrega Final y Pago del 50% restante", d: "Recibís tus 5 videos listos para subir a Reels, TikTok y Shorts, cancelando el saldo final." }
        ]
      }
    },
    form: {
      badge: "Formulario Rápido",
      title: "Solicitá tus 5 videos en 2 minutos",
      subtitle: "Completá los datos clave o si lo preferís, hablá directamente a nuestro WhatsApp +506 6419-4111.",
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
        desc: "¿Qué producto o servicio querés promocionar? *",
        descPlace: "Ej: Servicio de ortodoncia invisible, menú ejecutivo, ropa de temporada, asesoría financiera, etc.",
        promo: "¿Tenés alguna promoción especial?",
        promoPlace: "Ej: 15% de descuento pagando por SINPE, valoración gratis, etc.",
        prev: "Anterior",
        next: "Siguiente Paso"
      },
      step3: {
        title: "3. Enlaces o Fotos",
        link: "Enlace a Instagram, Facebook o Google Drive",
        drag: "Toca aquí para seleccionar fotos o imágenes de tu producto desde tu celular/PC",
        dragSub: "(O podés enviárnoslas directo a WhatsApp más tarde)",
        prev: "Anterior",
        next: "Siguiente Paso"
      },
      step4: {
        title: "4. Confirmación de Producción",
        styleTitle: "Estilos que se incluirán en tu paquete (Vertical 9:16)",
        stylesList: ["01. UGC con IA", "02. PodCast Clip", "03. Dual Cast", "04. Animados", "05. Mini Series"],
        termsTitle: "CONDICIONES TRANSPARENTES",
        termsDesc: "Precio de lanzamiento: $150 USD (o ₡78,000 SINPE). Pago en dos tractos: 50% inicial para coordinar guiones y producir, y 50% final contra entrega. Producción por cupos limitados (máximo 10 negocios por ciclo).",
        prev: "Anterior",
        submit: "Enviar y Chatear por WhatsApp"
      },
      success: {
        title: "¡Reserva Iniciada!",
        body: "Excelente {business} ({province}). Hemos registrado tu solicitud de 5 videos por $150.",
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
      badge: "Preguntas Frecuentes",
      title: "Lo que preguntan los dueños de negocio.",
      items: [
        {
          q: "¿En qué formato recibo los videos?",
          a: "Los 5 videos se entregan en formato 100% Vertical (9:16) en HD, listos para publicar o pautar directamente en Instagram Reels, TikTok, YouTube Shorts o estados de WhatsApp."
        },
        {
          q: "¿Cuáles son los 5 estilos que incluye el paquete?",
          a: "Incluye 1 video de cada estilo: UGC IA (creador orgánico), PodCast Clip (autoridad conversacional), Dual Cast (diálogo entre 2 voces), Animados (explicativo dinámico) y Mini Series (narrativa por episodio)."
        },
        {
          q: "¿Cómo funciona el esquema de pago?",
          a: "El valor total es de $150 USD (o ₡78,000 colones). Se abona un 50% ($75 / ₡39,000) de adelantado por SINPE Móvil o transferencia para iniciar la investigación y producción, y el 50% restante contra la entrega final."
        },
        {
          q: "¿Tengo que grabar algo con mi teléfono o cámara?",
          a: "No. Nosotros generamos los avatares, voces, guiones y elementos animados. Solo necesitamos que nos enviés fotos de tu producto, servicio o local desde WhatsApp o el formulario."
        }
      ]
    },
    finalCta: {
      badge: "Contacto Directo",
      title: "Encontrá el anuncio que sí haga crecer tu negocio.",
      btn: "Escribir por WhatsApp (+506 6419-4111)"
    },
    whatsapp: {
      float: "WhatsApp 6419-4111",
      prefill: "Hola! Me interesan los 5 videos publicitarios con IA ($150)"
    },
    modal: {
      title: "Formato Nativo Vertical (9:16)",
      sub: "Optimizado para Reels / TikTok / Shorts",
      soundOn: "Activar Audio",
      soundOff: "Audio Activado",
      badgeTitle: "¿Qué incluye este estilo?",
      footerQuestion: "¿Te gusta este estilo?",
      footerBtn: "Pedir por WhatsApp"
    }
  },
  en: {
    banner: {
      promo: "LIMITED PRODUCTION SLOTS:",
      spots: "We only work with 10 businesses per cycle ({spots} left)",
      cta: "Chat at 6419-4111 →"
    },
    nav: {
      strategy: "AI Strategy",
      whatsapp: "WhatsApp 6419-4111"
    },
    hero: {
      badge: "AI Video Production · San Jose, Costa Rica",
      title: "5 ADS FOR YOUR BUSINESS.",
      subtitle: "5 different concepts to sell your product.",
      ctaWhatsapp: "I WANT MY 5 ADS",
      ctaDemo: "View Vertical Demo (9:16)",
      trust: ["5 vertical videos", "Scripts included", "$150 USD", "SINPE Mobile accepted"]
    },
    stamp: {
      was: "$2,500 USD",
      now: "$150",
      promo: "Launch Price",
      sinpe: "(or SINPE ₡78,000)",
      badge: "Limited Slots"
    },
    work: {
      badge: "SERVICE 01: ADS CREATION (5 VIDEOS)",
      title: "5 Video Styles designed to sell on social networks.",
      subtitle: "Instead of testing just one idea, we deliver 5 different formats in high resolution for Instagram Reels, TikTok and YouTube Shorts.",
      demoCta: "View 9:16 demo",
      styles: [
        { key: "ugc", title: "UGC with AI", desc: "Organic content creator style with hyper-realistic human avatars recommending your product." },
        { key: "podcast", title: "PodCast Clip", desc: "Conversational extract like a podcast interview that generates immediate authority and interest." },
        { key: "dualcast", title: "Dual Cast", desc: "Dynamic interaction of two avatars or voices debating a need and showing the solution." },
        { key: "animados", title: "Animated", desc: "High-paced vector animations and graphics focused on retaining attention." },
        { key: "miniseries", title: "Mini Series", desc: "Micro-story or narrative sequence by episodes that hooks the audience to keep watching." }
      ]
    },
    campaignSection: {
      badge: "SERVICE 02: CAMPAIGNS & BRAND UNIVERSE",
      title: "Full Campaign & Content Universe",
      subtitle: "A premium continuous service to structure your entire brand identity, visual style, and generate recurring content. Minimum 6-month contract duration. Cost is custom quote-based and managed via WhatsApp.",
      includesTitle: "What does the Campaign Service include?",
      includes: [
        { t: "Brand Structure & Visual Universe", d: "Esthetic definition of your brand tone, graphic styles, and visual consistency." },
        { t: "Constant Content Production", d: "Periodic deployment of AI and UGC video ads to keep your channels highly active." },
        { t: "9 UGC Ad Variations per Campaign", d: "Variations of hooks and creative angles to find your winning ads." },
        { t: "Conversion Funnel Optimization", d: "Smooth traffic redirection to your sales WhatsApp or online store." }
      ],
      samplesTitle: "Campaign Showcase: UGC Ads New Collection",
      samplesSubtitle: "Click on any variant to see the quality level of the UGC Ads:",
      ctaBtn: "QUOTE CAMPAIGN VIA WHATSAPP",
      prefill: "Hi! I am interested in quoting the premium 6-month campaign and constant content service for my business."
    },
    roi: {
      badge: "Efficient Marketing Strategy",
      title: "The real risk is betting everything on a single video.",
      subtitle: "In digital advertising, no one knows which video will explode in sales until it's tested. Our model is designed to find your winning ad at the lowest possible cost.",
      traditional: {
        title: "The Traditional Risk",
        desc: "Investing a large budget in a single traditionally shot video.",
        items: [
          "If your audience doesn't like that single angle, you lost the entire investment.",
          "Zero ability to do A/B testing to compare results.",
          "Months of waiting between preproduction, shooting and final editing.",
          "High cost per ad attempt ($1,500+ to $2,500+)."
        ],
        badgeAlert: "High Risk: If the video does not convert, you have to pay again from scratch."
      },
      ai: {
        badge: "Recommended Strategy",
        title: "Test 5 Creative Angles in Parallel",
        desc: "Smart diversification to maximize the return on your advertising.",
        items: [
          "You receive 5 different styles (UGC, Podcast, Dual Cast, Animated, Mini Series).",
          "Put the 5 videos to compete on your networks to see which generates more sales.",
          "Fast delivery: Launch your campaigns immediately.",
          "Transparent terms: 50% upfront to produce and 50% upon delivery."
        ],
        saving: "Find the Winning Video",
        savingSub: "5 sales attempts for only $150",
        total: "$150 USD"
      }
    },
    offer: {
      badge: "Exclusive Launch Offer in Costa Rica",
      colones: "Equivalent to ₡78,000 colones (we accept SINPE Mobile)",
      body: "You receive 5 video ads in vertical format 9:16 (UGC AI, Podcast Clip, Dual Cast, Animated and Mini Series) written and produced under limited slots.",
      terms: "Transparent payment scheme: 50% upfront ($75 / ₡39,000) to start production. 50% final ($75 / ₡39,000) against delivery. We only work with 10 businesses per cycle.",
      btnWhatsapp: "Book via WhatsApp (6419-4111)",
      btnForm: "Complete Web Form",
      limit: "Limited production slots. We only work with 10 businesses per cycle."
    },
    process: {
      badge: "Streamlined Process",
      title: "Three steps. Limited slots.",
      yourPart: {
        title: "Your only part:",
        desc: "Provide us with basic information about your SME in Costa Rica: what product/service you sell, your province, photos or Instagram link, and the offer you want to highlight.",
        sub: "You can send it through the web form or directly to WhatsApp 6419-4111."
      },
      ourPart: {
        steps: [
          { t: "Sales Strategy & Scripting", d: "We write 5 scripts with psychological hooks to grab attention in the first 3 seconds." },
          { t: "Confirmation & Initial Payment (50%)", d: "Once angles are approved, the 50% advance ($75 / ₡39,000 SINPE) is paid and we start generation." },
          { t: "Generation & AI Integration", d: "Avatars, animated graphics, native/neutral accent voices and eye-catching subtitles in vertical format (9:16)." },
          { t: "Final Delivery & Final 50% Payment", d: "You receive your 5 videos ready to upload to Reels, TikTok and Shorts, paying the remaining balance." }
        ]
      }
    },
    form: {
      badge: "Quick Form",
      title: "Request your 5 videos in 2 minutes",
      subtitle: "Complete the key details or if you prefer, talk directly to our WhatsApp +506 6419-4111.",
      indicator: "Step {step} of 4: {name}",
      stepNames: ["Business Info", "Offer & Product", "Links or Photos", "Confirmation"],
      step1: {
        title: "1. Your SME Info",
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
        title: "4. Production Confirmation",
        styleTitle: "Styles that will be included in your package (Vertical 9:16)",
        stylesList: ["01. UGC with AI", "02. PodCast Clip", "03. Dual Cast", "04. Animated", "05. Mini Series"],
        termsTitle: "TRANSPARENT TERMS",
        termsDesc: "Launch price: $150 USD (or ₡78,000 SINPE). Payment in two parts: 50% initial to coordinate scripts and produce, and 50% final against delivery. Limited production slots (maximum 10 businesses per cycle).",
        prev: "Previous",
        submit: "Submit and Chat on WhatsApp"
      },
      success: {
        title: "Booking Initiated!",
        body: "Great {business} ({province}). We have registered your request for 5 videos for $150.",
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
      badge: "Frequently Asked Questions",
      title: "What business owners ask.",
      items: [
        {
          q: "What format do I receive the videos in?",
          a: "The 5 videos are delivered in 100% Vertical format (9:16) in HD, ready to publish or run ads directly on Instagram Reels, TikTok, YouTube Shorts or WhatsApp status."
        },
        {
          q: "What are the 5 styles included in the package?",
          a: "It includes 1 video of each style: UGC AI (organic creator), PodCast Clip (conversational authority), Dual Cast (dialogue between 2 voices), Animated (dynamic explainer) and Mini Series (episodic narrative)."
        },
        {
          q: "How does the payment scheme work?",
          a: "The total value is $150 USD (or ₡78,000 colones). An advance of 50% ($75 / ₡39,000) is paid via SINPE Mobile or transfer to start research and production, and the remaining 50% against final delivery."
        },
        {
          q: "Do I have to record anything with my phone or camera?",
          a: "No. We generate the avatars, voices, scripts and animated elements. We only need you to send us photos of your product, service or local from WhatsApp or the form."
        }
      ]
    },
    finalCta: {
      badge: "Direct Contact",
      title: "Find the ad that actually grows your business.",
      btn: "Write on WhatsApp (+506 6419-4111)"
    },
    whatsapp: {
      float: "WhatsApp 6419-4111",
      prefill: "Hi! I am interested in the 5 AI video ads ($150)"
    },
    modal: {
      title: "Native Vertical Format (9:16)",
      sub: "Optimized for Reels / TikTok / Shorts",
      soundOn: "Turn Sound On",
      soundOff: "Sound Activated",
      badgeTitle: "What does this style include?",
      footerQuestion: "Do you like this style?",
      footerBtn: "Order via WhatsApp"
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
    toast.className = 'fixed top-24 right-6 z-50 bg-[#1F2A2E] text-[#FBF6EC] border-2 border-[#FF8C42] p-4 rounded shadow-2xl font-mono text-xs max-w-sm flex items-center gap-3 animate-bounce';
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
    <div className="bg-[#FBF6EC] text-[#1F2A2E] font-sans antialiased selection:bg-[#1F2A2E] selection:text-[#FBF6EC] min-h-screen flex flex-col justify-between relative overflow-x-hidden">
      
      {/* Top Live Banner */}
      <div id="top-banner" className="bg-[#1F2A2E] text-[#FBF6EC] py-2.5 px-4 text-xs font-mono border-b border-[rgba(31,42,46,0.14)] sticky top-0 z-50 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-[#FF8C42]">{text.banner.promo}</span>
            <span className="hidden md:inline">
              {text.banner.spots.replace('{spots}', spotsLeft.toString())}
            </span>
          </div>
          <a 
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#FF8C42] hover:text-[#F2C14E] underline font-bold transition flex items-center gap-1"
          >
            <span>{text.banner.cta}</span>
          </a>
        </div>
      </div>

      {/* HEADER & HERO SECTION */}
      <header className="pt-6 pb-12 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Navbar */}
          <nav className="flex justify-between items-center pb-12">
            <Link href="/" className="font-fraunces font-black text-2xl tracking-tight">
              The Silent<span className="text-[#E8672A]">Studio</span>
            </Link>
            <div className="flex items-center gap-4">
              <a href="#estrategia" className="hidden sm:inline-block font-mono text-xs uppercase tracking-wider border border-[#1F2A2E] px-4 py-2 hover:bg-[#1F2A2E] hover:text-[#FBF6EC] transition">
                {text.nav.strategy}
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-xs uppercase tracking-wider bg-emerald-600 text-white border border-emerald-600 px-4 py-2 hover:bg-emerald-700 transition flex items-center gap-1.5 font-bold"
              >
                <span>{text.nav.whatsapp}</span>
              </a>
            </div>
          </nav>

          {/* Hero Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-center pb-8">
            <div className="lg:col-span-7">
              <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#00879F] inline-block"></span>
                {text.hero.badge}
              </div>
              <h1 className="font-fraunces font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
                {text.hero.title}
              </h1>
              <p className="text-[#4A5A5E] text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                {text.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                    language === 'es'
                      ? 'Hola! Quiero pedir mis 5 videos publicitarios para mi negocio'
                      : 'Hi! I want to order my 5 AI video ads for my business'
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-3 bg-[#E8672A] hover:bg-[#FF8C42] text-white font-mono text-xs uppercase tracking-wider px-7 py-4 border border-[#E8672A] hover:border-[#FF8C42] transition transform hover:-translate-y-0.5 shadow-md font-bold"
                >
                  <span>{text.hero.ctaWhatsapp}</span>
                </a>
                <button 
                  onClick={() => openStyleModal('ugc', 0)} 
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-[#1F2A2E] font-mono text-xs uppercase tracking-wider px-6 py-4 border border-[#1F2A2E]/30 hover:border-[#1F2A2E] transition"
                >
                  <Play className="w-4 h-4 text-[#E8672A] fill-[#E8672A]" />
                  <span>{text.hero.ctaDemo}</span>
                </button>
              </div>

              {/* Trust metrics */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[#4A5A5E] pt-4 border-t border-[rgba(31,42,46,0.14)]">
                {text.hero.trust.map((t, idx) => (
                  <div key={idx}>
                    <b className="text-[#1F2A2E]">{t.split(' ')[0]}</b> {t.substring(t.indexOf(' ') + 1)}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Stamp Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-dashed border-[#E8672A] flex items-center justify-center bg-[#FBF6EC] shadow-inner animate-spin-slow">
                  <div className="text-center animate-spin-rev">
                    <div className="font-mono text-sm line-through text-[#4A5A5E]">{text.stamp.was}</div>
                    <div className="font-fraunces font-black text-6xl text-[#E8672A] leading-none my-1">{text.stamp.now}</div>
                    <div className="font-mono text-xs text-[#1F2A2E] tracking-widest uppercase mt-1">{text.stamp.promo}</div>
                    <div className="font-mono text-[10px] text-[#00879F] mt-1">{text.stamp.sinpe}</div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#1F2A2E] text-[#FBF6EC] font-mono text-[11px] p-2.5 border border-[#F2C14E] shadow-lg rotate-3">
                  <Clock className="w-4 h-4 text-[#F2C14E] inline mr-1 animate-pulse" /> {text.stamp.badge}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slate mt-8"></div>
      </header>

      {/* WORK & STYLES SECTION */}
      <section className="py-16 bg-[#FBF6EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-10">
            <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.work.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl">{text.work.title}</h2>
            <p className="text-[#4A5A5E] text-sm mt-2">{text.work.subtitle}</p>
          </div>

          {/* Styles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {text.work.styles.map((style, idx) => (
              <div 
                key={style.key} 
                onClick={() => openStyleModal(style.key as any, 0)} 
                className="group border border-[rgba(31,42,46,0.14)] p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between h-60 relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(251, 246, 236, 0.95), rgba(251, 246, 236, 0.98)), url(${STYLE_PREVIEWS[style.key as keyof typeof STYLE_PREVIEWS]?.thumbnail || ''})`,
                }}
              >
                {/* Hover overlays */}
                <div className="absolute inset-0 bg-[#1F2A2E] opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${STYLE_PREVIEWS[style.key as keyof typeof STYLE_PREVIEWS]?.thumbnail || ''})`,
                  }}
                />

                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="font-mono text-[11px] text-[#00879F] group-hover:text-[#FF8C42] font-bold">
                      0{idx+1} / {language === 'es' ? "ESTILO" : "STYLE"}
                    </div>
                    <h3 className="font-fraunces font-semibold text-xl mt-3 group-hover:text-white">
                      {style.title}
                    </h3>
                    <p className="text-xs text-[#4A5A5E] group-hover:text-[#FBF6EC]/70 mt-2">
                      {style.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#E8672A] group-hover:text-[#FF8C42] pt-2 border-t border-[rgba(31,42,46,0.14)] group-hover:border-[#FBF6EC]/20 w-full font-bold">
                    <span>{text.work.demoCta}</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREACIÓN DE CAMPAÑAS */}
      <section className="py-20 bg-[#1F2A2E] text-[#FBF6EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="font-mono text-xs text-[#F2C14E] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#F2C14E] inline-block"></span> {text.campaignSection.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-white">{text.campaignSection.title}</h2>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">{text.campaignSection.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: What's included */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="font-fraunces font-semibold text-xl text-[#FF8C42] border-b border-white/10 pb-2">
                {text.campaignSection.includesTitle}
              </h3>
              <ul className="space-y-4 font-sans text-sm">
                {text.campaignSection.includes.map((inc, iIdx) => (
                  <li key={iIdx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                    <div>
                      <b className="text-white block">{inc.t}</b>
                      <span className="text-gray-400 text-xs">{inc.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Collection Showcase */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="font-fraunces font-semibold text-xl text-[#FF8C42] border-b border-white/10 pb-2">
                {text.campaignSection.samplesTitle}
              </h3>
              <p className="text-gray-400 text-xs font-mono">
                {text.campaignSection.samplesSubtitle}
              </p>

              {/* Grid of 9 Videos */}
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2.5">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => openStyleModal('campaign', idx)}
                    className="group bg-[#1F2A2E] text-white p-2 border border-white/10 hover:border-[#FF8C42] transition flex flex-col justify-center items-center gap-1.5 aspect-[9/16] rounded shadow-md relative overflow-hidden shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-35 transition" />
                    <span className="font-mono text-[8px] tracking-wider text-[#FF8C42] z-20 font-bold">V{idx+1}</span>
                    <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FF8C42] text-white group-hover:text-[#1F2A2E] flex items-center justify-center transition z-20">
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </div>
                    <span className="font-sans text-[8px] text-gray-400 group-hover:text-white z-20">Demo</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Custom Quote CTA Button */}
          <div className="mt-16 text-center border-t border-white/10 pt-10">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent((text.campaignSection as any).prefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF8C42] hover:bg-[#E8672A] text-[#1F2A2E] hover:text-white font-mono text-xs uppercase font-bold tracking-wider px-8 py-5 transition transform hover:-translate-y-0.5 shadow-xl"
            >
              <span>{(text.campaignSection as any).ctaBtn}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* MARKETING STRATEGY & ROI SECTION */}
      <section id="estrategia" className="py-16 bg-white border-y border-[rgba(31,42,46,0.14)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.roi.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl">{text.roi.title}</h2>
            <p className="text-[#4A5A5E] text-sm mt-2">{text.roi.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Risky Approach */}
            <div className="border border-red-200 bg-red-50/40 p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-red-600 uppercase tracking-widest font-bold mb-2">
                  <AlertTriangle className="w-3 h-3 inline mr-1" /> {text.roi.traditional.title}
                </div>
                <h3 className="font-fraunces font-bold text-2xl text-[#1F2A2E]">{language === 'es' ? "Apostar todo a 1 solo Anuncio" : "Bet everything on 1 single Ad"}</h3>
                <p className="text-[#4A5A5E] text-xs mb-6">{text.roi.traditional.desc}</p>

                <ul className="space-y-3 font-sans text-sm text-[#4A5A5E] border-t border-red-200 pt-4 mb-6">
                  {text.roi.traditional.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-mono text-xs text-red-700 bg-red-100 p-3 rounded text-center border border-red-200">
                {text.roi.traditional.badgeAlert}
              </div>
            </div>

            {/* Smart AI Approach */}
            <div className="border-2 border-[#FF8C42] bg-[#FBF6EC] p-8 rounded-sm relative flex flex-col justify-between shadow-md">
              <div className="absolute -top-3 right-6 bg-[#FF8C42] text-[#1F2A2E] font-mono text-[11px] font-bold px-3 py-0.5 uppercase tracking-wider">
                {text.roi.ai.badge}
              </div>
              <div>
                <div className="font-mono text-xs text-[#E8672A] uppercase tracking-widest font-bold mb-2">
                  <Check className="w-3 h-3 inline mr-1" /> {text.roi.ai.title}
                </div>
                <h3 className="font-fraunces font-bold text-2xl text-[#1F2A2E]">{language === 'es' ? "Probar 5 Ángulos Creativos en Paralelo" : "Test 5 Creative Angles in Parallel"}</h3>
                <p className="text-[#4A5A5E] text-xs mb-6">{text.roi.ai.desc}</p>

                <ul className="space-y-3 font-sans text-sm text-[#4A5A5E] border-t border-[rgba(31,42,46,0.14)] pt-4 mb-6">
                  {text.roi.ai.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-between border-t border-[rgba(31,42,46,0.14)] pt-4">
                <div>
                  <span className="font-mono text-xs text-emerald-700 font-bold block">{text.roi.ai.saving}</span>
                  <span className="font-mono text-[11px] text-[#4A5A5E]">{text.roi.ai.savingSub}</span>
                </div>
                <div className="font-fraunces text-4xl font-black text-[#E8672A]">
                  {text.roi.ai.total}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="slate orange"></div>

      {/* PRICE BAND SECTION */}
      <section id="precio" className="bg-[#1F2A2E] text-[#FBF6EC] py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-mono text-xs text-[#F2C14E] tracking-widest uppercase inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#F2C14E] inline-block"></span> {text.offer.badge}
          </div>

          <div className="flex items-baseline justify-center gap-4 my-4 flex-wrap">
            <span className="font-mono text-2xl sm:text-3xl line-through text-[#FBF6EC]/40">{text.stamp.was}</span>
            <span className="font-fraunces font-black text-6xl sm:text-8xl text-[#FF8C42]">{text.stamp.now}</span>
            <span className="font-mono text-lg text-[#F2C14E] font-bold">USD</span>
          </div>
          <p className="font-mono text-xs text-[#FBF6EC]/70 mb-6">{text.offer.colones}</p>

          <p className="text-[#FBF6EC]/80 max-w-xl mx-auto mb-8 text-base">
            {text.offer.body}
          </p>

          {/* Balanced payment terms box */}
          <div className="inline-block bg-[#FBF6EC]/10 border border-[#F2C14E]/40 p-4 rounded mb-8 text-xs font-mono text-[#F2C14E] max-w-md mx-auto">
            {language === 'es' ? (
              <>
                <strong>Esquema de pago transparente:</strong><br />
                50% de adelanto ($75 / ₡39,000) para iniciar producción.<br />
                50% final ($75 / ₡39,000) contra entrega.
              </>
            ) : (
              <>
                <strong>Transparent payment terms:</strong><br />
                50% advance ($75 / ₡39,000) to start production.<br />
                50% final ($75 / ₡39,000) upon delivery.
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
                language === 'es'
                  ? 'Hola! Quiero reservar el paquete de 5 videos IA por $150 (SINPE)'
                  : 'Hi! I want to book the 5 AI video ads package for $150'
              )}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider font-bold px-8 py-5 transition transform hover:-translate-y-0.5 shadow-xl"
            >
              <span>{text.offer.btnWhatsapp}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#formulario" 
              className="inline-flex items-center justify-center gap-2 border border-[#FBF6EC]/30 text-[#FBF6EC] font-mono text-xs uppercase tracking-wider px-6 py-5 hover:border-[#FF8C42] hover:text-[#FF8C42] transition"
            >
              <span>{text.offer.btnForm}</span>
            </a>
          </div>

          <div className="mt-6 font-mono text-xs text-[#FBF6EC]/50 flex items-center justify-center gap-2">
            <span>{text.offer.limit}</span>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-[#FBF6EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.process.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl">{text.process.title}</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Client part */}
            <div className="lg:col-span-5 border-l-4 border-[#E8672A] pl-6 py-2 bg-[#FF8C42]/5 p-6 rounded-r">
              <h3 className="font-fraunces font-semibold text-2xl mb-3">{text.process.yourPart.title}</h3>
              <p className="text-[#4A5A5E] text-sm leading-relaxed mb-4">
                {text.process.yourPart.desc}
              </p>
              <div className="font-mono text-xs text-[#00879F] font-bold flex items-center gap-2">
                <span>{text.process.yourPart.sub}</span>
              </div>
            </div>

            {/* Studio part */}
            <div className="lg:col-span-7">
              <ul className="divide-y divide-[rgba(31,42,46,0.14)] border-y border-[rgba(31,42,46,0.14)]">
                {text.process.ourPart.steps.map((step, idx) => (
                  <li key={idx} className="py-5 grid grid-cols-12 gap-4 items-start">
                    <span className="col-span-2 font-fraunces font-black text-3xl text-[#00B4D8]">0{idx+1}</span>
                    <div className="col-span-10">
                      <b className="font-fraunces font-semibold text-lg block mb-1">{step.t}</b>
                      <span className="text-[#4A5A5E] text-sm">{step.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE FORM SECTION (#formulario) */}
      <section id="formulario" className="py-20 bg-white border-y border-[rgba(31,42,46,0.14)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.form.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl">{text.form.title}</h2>
            <p className="text-[#4A5A5E] text-sm mt-2">{text.form.subtitle}</p>
          </div>

          {/* Multi-step Form Wizard */}
          <div className="bg-[#FBF6EC] border-2 border-[#1F2A2E] p-6 sm:p-10 shadow-xl relative">
            
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <Check className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="font-fraunces font-bold text-3xl text-[#1F2A2E]">
                  {text.form.success.title}
                </h3>
                <p className="text-[#4A5A5E] text-sm max-w-md mx-auto leading-relaxed">
                  {text.form.success.body
                    .replace('{business}', formData.businessName)
                    .replace('{province}', formData.province)}
                </p>
                <div className="bg-amber-50 border border-[#F2C14E] p-4 text-xs font-mono text-left max-w-md mx-auto">
                  <b>{text.form.success.stepsTitle}</b>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-[#4A5A5E]">
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
                      ? `¡Hola! Acabo de enviar el formulario para mi negocio *${formData.businessName}* en *${formData.province}*.`
                      : `Hi! I just completed the form for *${formData.businessName}* in *${formData.province}*.`
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase font-bold px-6 py-3.5 transition shadow"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{text.form.success.btnWhatsapp}</span>
                </a>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between font-mono text-xs text-[#4A5A5E] mb-2">
                    <span>
                      {text.form.indicator
                        .replace('{step}', currentStep.toString())
                        .replace('{name}', text.form.stepNames[currentStep - 1])}
                    </span>
                    <span>{currentStep * 25}%</span>
                  </div>
                  <div className="w-full h-2 bg-[rgba(31,42,46,0.14)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#FF8C42] transition-all duration-300"
                      style={{ width: `${currentStep * 25}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleFormSubmit}>
                  {/* STEP 1: General Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="font-fraunces font-semibold text-xl text-[#1F2A2E] mb-4 border-b border-[rgba(31,42,46,0.14)] pb-2">
                        {text.form.step1.title}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step1.name}</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.businessName}
                            onChange={(e) => handleInputChange('businessName', e.target.value)}
                            placeholder={text.form.step1.namePlace} 
                            className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step1.province}</label>
                          <select 
                            value={formData.province}
                            onChange={(e) => handleInputChange('province', e.target.value)}
                            required 
                            className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
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
                          <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step1.phone}</label>
                          <input 
                            type="tel" 
                            required 
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder={text.form.step1.phonePlace} 
                            className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step1.email}</label>
                          <input 
                            type="email" 
                            required 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="contacto@tunegocio.cr" 
                            className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button 
                          type="button" 
                          onClick={() => validateStep(2)} 
                          className="bg-[#1F2A2E] text-[#FBF6EC] font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-[#E8672A] transition flex items-center gap-2"
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
                      <h3 className="font-fraunces font-semibold text-xl text-[#1F2A2E] mb-4 border-b border-[rgba(31,42,46,0.14)] pb-2">
                        {text.form.step2.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step2.desc}</label>
                        <textarea 
                          required 
                          rows={3} 
                          value={formData.productDesc}
                          onChange={(e) => handleInputChange('productDesc', e.target.value)}
                          placeholder={text.form.step2.descPlace}
                          className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step2.promo}</label>
                        <input 
                          type="text" 
                          value={formData.promo}
                          onChange={(e) => handleInputChange('promo', e.target.value)}
                          placeholder={text.form.step2.promoPlace}
                          className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                        />
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(1)} 
                          className="border border-[#1F2A2E] font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-[#1F2A2E] hover:text-[#FBF6EC] transition"
                        >
                          {text.form.step2.prev}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => validateStep(3)} 
                          className="bg-[#1F2A2E] text-[#FBF6EC] font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-[#E8672A] transition flex items-center gap-2"
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
                      <h3 className="font-fraunces font-semibold text-xl text-[#1F2A2E] mb-4 border-b border-[rgba(31,42,46,0.14)] pb-2">
                        {text.form.step3.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-1">{text.form.step3.link}</label>
                        <input 
                          type="url" 
                          value={formData.driveUrl}
                          onChange={(e) => handleInputChange('driveUrl', e.target.value)}
                          placeholder="https://instagram.com/tunegocio o enlace de Drive con tus fotos"
                          className="w-full bg-white border border-[rgba(31,42,46,0.14)] p-3 font-sans text-sm focus:outline-none focus:border-[#1F2A2E]"
                        />
                      </div>

                      {/* Simulated Upload Area */}
                      <div 
                        onClick={handleUploadClick} 
                        className="border-2 border-dashed border-[rgba(31,42,46,0.14)] bg-white p-6 text-center rounded cursor-pointer hover:border-[#FF8C42] transition-colors"
                      >
                        <UploadCloud className="w-8 h-8 text-[#00879F] mx-auto mb-2" />
                        <p className="font-sans text-xs text-[#4A5A5E] font-semibold">{text.form.step3.drag}</p>
                        <p className="font-mono text-[9px] text-[#4A5A5E]/70 mt-1">{text.form.step3.dragSub}</p>
                        
                        {attachedFiles.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2 justify-center">
                            {attachedFiles.map((file, fIdx) => (
                              <span key={fIdx} className="bg-[#1F2A2E] text-[#FBF6EC] font-mono text-[9px] px-2.5 py-1 rounded flex items-center gap-1">
                                <Check className="w-3 h-3 text-[#FF8C42]" /> {file}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(2)} 
                          className="border border-[#1F2A2E] font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-[#1F2A2E] hover:text-[#FBF6EC] transition"
                        >
                          {text.form.step3.prev}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => validateStep(4)} 
                          className="bg-[#1F2A2E] text-[#FBF6EC] font-mono text-xs uppercase tracking-wider px-6 py-3.5 hover:bg-[#E8672A] transition flex items-center gap-2"
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
                      <h3 className="font-fraunces font-semibold text-xl text-[#1F2A2E] mb-4 border-b border-[rgba(31,42,46,0.14)] pb-2">
                        {text.form.step4.title}
                      </h3>

                      <div>
                        <label className="block font-mono text-xs uppercase text-[#4A5A5E] mb-2">{text.form.step4.styleTitle}</label>
                        <div className="grid sm:grid-cols-2 gap-2 font-mono text-xs">
                          {text.form.step4.stylesList.map((style, sIdx) => (
                            <label key={sIdx} className="flex items-center gap-2 p-2.5 bg-white border border-[rgba(31,42,46,0.14)] cursor-not-allowed">
                              <input 
                                type="checkbox" 
                                checked 
                                disabled
                                className="accent-[#FF8C42]" 
                              />
                              <span>{style}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Guarantee box */}
                      <div className="bg-amber-50 border border-[#F2C14E] p-4 text-xs space-y-1">
                        <div className="font-bold text-[#1F2A2E] flex items-center gap-1.5 font-mono">
                          <Check className="w-4 h-4 text-[#E8672A]" /> {text.form.step4.termsTitle}
                        </div>
                        <p className="text-[#4A5A5E] leading-relaxed">
                          {text.form.step4.termsDesc}
                        </p>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCurrentStep(3)} 
                          className="border border-[#1F2A2E] font-mono text-xs uppercase tracking-wider px-5 py-3 hover:bg-[#1F2A2E] hover:text-[#FBF6EC] transition"
                        >
                          {text.form.step4.prev}
                        </button>
                        <button 
                          type="submit" 
                          className="bg-emerald-600 text-white font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 border border-emerald-600 hover:bg-emerald-700 transition flex items-center gap-2 shadow-lg"
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
      <section className="py-20 bg-[#FBF6EC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.faq.badge}
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl">{text.faq.title}</h2>
          </div>

          <div className="divide-y divide-[rgba(31,42,46,0.14)] border-y border-[rgba(31,42,46,0.14)]">
            {text.faq.items.map((item, idx) => (
              <div key={idx} className="py-6">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full flex justify-between items-center text-left font-fraunces font-semibold text-xl text-[#1F2A2E] gap-4"
                >
                  <span>{item.q}</span>
                  <span className="font-mono text-2xl text-[#E8672A]">
                    {openFaq === idx ? "×" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 mt-3' : 'max-h-0'}`}
                >
                  <p className="text-[#4A5A5E] text-sm leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 text-center bg-[#FBF6EC] border-t border-[rgba(31,42,46,0.14)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-mono text-xs text-[#00879F] tracking-widest uppercase inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#00879F] inline-block"></span> {text.finalCta.badge}
          </div>
          <h2 className="font-fraunces font-bold text-4xl sm:text-5xl max-w-lg mx-auto mb-6">
            {language === 'es' ? (
              <>Encontrá el anuncio que <em>sí</em> haga crecer tu negocio.</>
            ) : (
              <>Find the ad that <em>actually</em> grows your business.</>
            )}
          </h2>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
              language === 'es'
                ? 'Hola! Quiero comenzar mi paquete de 5 videos IA para mi negocio'
                : 'Hi! I want to start my package of 5 AI video ads for my business'
            )}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase font-bold px-8 py-5 transition transform hover:-translate-y-0.5 shadow-lg"
          >
            <Smartphone className="w-5 h-5 text-white" />
            <span>{text.finalCta.btn}</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#1F2A2E] text-[#FBF6EC]/70 font-mono text-xs border-t border-[rgba(31,42,46,0.14)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <b className="text-white font-fraunces text-base">The Silent Studio</b> · Video Ads con IA para PYMEs en Costa Rica
          </div>
          <div>
            {language === 'es' ? 'WhatsApp Directo: ' : 'Direct WhatsApp: '} 
            <a href={`https://wa.me/${WHATSAPP_NUM}`} className="text-[#FF8C42] underline">+506 6419-4111</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text.whatsapp.prefill)}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition duration-300 flex items-center justify-center group" 
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
          <div className="bg-[#FBF6EC] border-2 border-[#1F2A2E] w-full max-w-md rounded-sm shadow-2xl overflow-hidden relative flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="p-4 bg-[#1F2A2E] text-[#FBF6EC] flex justify-between items-center font-mono text-xs border-b border-[rgba(31,42,46,0.14)]">
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
                      className={`px-2.5 py-1 border shrink-0 transition rounded-sm ${activeSourceIndex === sIdx ? 'bg-[#FF8C42] border-[#FF8C42] text-[#1F2A2E] font-bold' : 'bg-[#1F2A2E] border-white/10 text-white hover:border-white'}`}
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
              <div className="bg-amber-50 p-3.5 border border-[#F2C14E] text-xs font-sans space-y-1">
                <b className="font-fraunces text-[#1F2A2E] font-semibold text-sm block">
                  {currentStyleData?.heading[langKey]}
                </b>
                <p className="text-[#4A5A5E] leading-relaxed text-xs">
                  {currentStyleData?.desc[langKey]}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#FBF6EC] border-t border-[rgba(31,42,46,0.14)] flex justify-between items-center">
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
