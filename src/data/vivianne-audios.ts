export interface AudioTrack {
  id: string;
  themeNum: number;
  themeTitle: string;
  trackNum: number;
  globalNum: number;
  title: string;
  audioUrl?: string;
  isSample: boolean;
  duration?: string;
  description: string;
}

export interface AudioTheme {
  num: number;
  title: string;
  tagline: string;
  tracks: AudioTrack[];
}

export const WOLSKI_THEMES: AudioTheme[] = [
  {
    num: 1,
    title: 'Empoderamiento',
    tagline: 'Criterio propio, límites firmes y la serenidad de quien no necesita validación ajena.',
    tracks: [
      {
        id: 'emp-01',
        themeNum: 1,
        themeTitle: 'Empoderamiento',
        trackNum: 1,
        globalNum: 1,
        title: 'Nadie te va a dar permiso',
        audioUrl: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/1-Empoderamiento-Nadie-te-va-a-dar-permiso.mp3',
        isSample: true,
        duration: '03:15',
        description: 'La espera por la aprobación ajena es la forma más refinada de sumisión. Empieza antes de que te den la venia.'
      },
      {
        id: 'emp-02',
        themeNum: 1,
        themeTitle: 'Empoderamiento',
        trackNum: 2,
        globalNum: 2,
        title: 'El no sin explicación',
        audioUrl: 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/El-no-sin-explicacion.mp3',
        isSample: true,
        duration: '03:40',
        description: 'Una respuesta completa no necesita justificaciones. Aprender a decir que no con sosiego y sin disculparse.'
      },
      {
        id: 'emp-03',
        themeNum: 1,
        themeTitle: 'Empoderamiento',
        trackNum: 3,
        globalNum: 3,
        title: 'Pedir lo que vales',
        isSample: false,
        duration: '04:10',
        description: 'El mercado no premia la modestia silenciosa. La técnica de Vivienne para fijar tu tarifa con autoridad.'
      },
      {
        id: 'emp-04',
        themeNum: 1,
        themeTitle: 'Empoderamiento',
        trackNum: 4,
        globalNum: 4,
        title: 'La ambición no pide perdón',
        isSample: false,
        duration: '03:55',
        description: 'Deseo de grandeza sin culpa. Cómo desarmar la incomodidad ajena ante tus proyectos más ambiciosos.'
      },
      {
        id: 'emp-05',
        themeNum: 1,
        themeTitle: 'Empoderamiento',
        trackNum: 5,
        globalNum: 5,
        title: 'La edad como ventaja',
        isSample: false,
        duration: '04:25',
        description: 'A los 82 años, Vivienne demuestra por qué el tiempo vivido es el activo más contundente en cualquier negociación.'
      }
    ]
  },
  {
    num: 2,
    title: 'Finanzas',
    tagline: 'El ritual del dinero honesto, el orden semanal y la soberanía patrimonial.',
    tracks: [
      {
        id: 'fin-01',
        themeNum: 2,
        themeTitle: 'Finanzas',
        trackNum: 1,
        globalNum: 6,
        title: 'Primero el colchón',
        isSample: false,
        duration: '04:05',
        description: 'La tranquilidad psicológica antes de cualquier riesgo: los 6 meses que compran tu derecho a no aceptar estupideces.'
      },
      {
        id: 'fin-02',
        themeNum: 2,
        themeTitle: 'Finanzas',
        trackNum: 2,
        globalNum: 7,
        title: 'El reparto del sueldo',
        isSample: false,
        duration: '03:50',
        description: 'El sistema de 3 partes de Vivienne: lo fijo, lo sagrado para el futuro y el margen discrecional sin culpas.'
      },
      {
        id: 'fin-03',
        themeNum: 2,
        themeTitle: 'Finanzas',
        trackNum: 3,
        globalNum: 8,
        title: 'Invertir es saber esperar',
        isSample: false,
        duration: '04:30',
        description: 'El ruido financiero promete euforia rápida. La riqueza seria se cocina en el aburrimiento y la paciencia matemática.'
      },
      {
        id: 'fin-04',
        themeNum: 2,
        themeTitle: 'Finanzas',
        trackNum: 4,
        globalNum: 9,
        title: 'Hablar de dinero en pareja',
        isSample: false,
        duration: '04:15',
        description: 'Claridad contractual sin perder la calidez. La conversación incómoda de 20 minutos que ahorra años de reproches.'
      },
      {
        id: 'fin-05',
        themeNum: 2,
        themeTitle: 'Finanzas',
        trackNum: 5,
        globalNum: 10,
        title: 'Cuentas con tu nombre',
        isSample: false,
        duration: '03:45',
        description: 'La regla dorada de Vivienne: jamás dependas de una firma que no sea la tuya para disponer de tu dinero.'
      }
    ]
  },
  {
    num: 3,
    title: 'Seguridad',
    tagline: 'Protección personal, discreción inteligente y blindaje ante el ruido exterior.',
    tracks: [
      {
        id: 'seg-01',
        themeNum: 3,
        themeTitle: 'Seguridad',
        trackNum: 1,
        globalNum: 11,
        title: 'Nadie llama por cortesía',
        isSample: false,
        duration: '03:30',
        description: 'Reconocer el interés disfrazado de amabilidad y proteger tu energía de los cazadores de favores.'
      },
      {
        id: 'seg-02',
        themeNum: 3,
        themeTitle: 'Seguridad',
        trackNum: 2,
        globalNum: 12,
        title: 'La puerta con dos cerraduras',
        isSample: false,
        duration: '04:00',
        description: 'Límites físicos y digitales. El arte de estar accesible solo para quien ha demostrado lealtad probada.'
      },
      {
        id: 'seg-03',
        themeNum: 3,
        themeTitle: 'Seguridad',
        trackNum: 3,
        globalNum: 13,
        title: 'Tu vida no es contenido',
        isSample: false,
        duration: '04:20',
        description: 'La trampa de sobreexponer tu intimidad por atención efímera. Lo más valioso se conserva en reserva.'
      },
      {
        id: 'seg-04',
        themeNum: 3,
        themeTitle: 'Seguridad',
        trackNum: 4,
        globalNum: 14,
        title: 'La confianza se gana despacio',
        isSample: false,
        duration: '03:55',
        description: 'Auditoría silenciosa de círculos cercanos. Cómo observar actos en lugar de escuchar promesas líricas.'
      }
    ]
  },
  {
    num: 4,
    title: 'Creación de contenido',
    tagline: 'Construir una audiencia fiel con inteligencia, estética noble y constancia comercial.',
    tracks: [
      {
        id: 'con-01',
        themeNum: 4,
        themeTitle: 'Creación de contenido',
        trackNum: 1,
        globalNum: 15,
        title: 'Decidir antes de publicar',
        isSample: false,
        duration: '03:45',
        description: 'El filtro editorial de Vivienne: si no aporta belleza, verdad o valor de compra, se queda en el cajón.'
      },
      {
        id: 'con-02',
        themeNum: 4,
        themeTitle: 'Creación de contenido',
        trackNum: 2,
        globalNum: 16,
        title: 'La voz antes del algoritmo',
        isSample: false,
        duration: '04:10',
        description: 'Los algoritmos cambian cada mes; un punto de vista original perdura décadas. Encuentra tu timbre inconfundible.'
      },
      {
        id: 'con-03',
        themeNum: 4,
        themeTitle: 'Creación de contenido',
        trackNum: 3,
        globalNum: 17,
        title: 'Constancia, no viralidad',
        isSample: false,
        duration: '03:50',
        description: 'La viralidad es un accidente pasajero; la presencia semanal ininterrumpida construye un imperio comercial.'
      },
      {
        id: 'con-04',
        themeNum: 4,
        themeTitle: 'Creación de contenido',
        trackNum: 4,
        globalNum: 18,
        title: 'Vender sin rogar',
        isSample: false,
        duration: '04:15',
        description: 'Elegancia en la oferta. Cuando tu producto está bien resuelto, presentarlo con orgullo es un servicio, no una molestia.'
      },
      {
        id: 'con-05',
        themeNum: 4,
        themeTitle: 'Creación de contenido',
        trackNum: 5,
        globalNum: 19,
        title: 'Lo humano y lo artificial',
        isSample: false,
        duration: '04:35',
        description: 'La tecnología como mano de obra; la sensibilidad y la dirección estética como alma irreemplazable.'
      }
    ]
  },
  {
    num: 5,
    title: 'Escritura',
    tagline: 'El pensamiento claro reflejado en palabras precisas, cartas meditadas y edición rigurosa.',
    tracks: [
      {
        id: 'esc-01',
        themeNum: 5,
        themeTitle: 'Escritura',
        trackNum: 1,
        globalNum: 20,
        title: 'Escribir para saber qué piensas',
        isSample: false,
        duration: '03:40',
        description: 'No escribimos para adornar; escribimos para ordenar el caos interior y salir con una postura firme.'
      },
      {
        id: 'esc-02',
        themeNum: 5,
        themeTitle: 'Escritura',
        trackNum: 2,
        globalNum: 21,
        title: 'Quince minutos, cuatro noches',
        isSample: false,
        duration: '03:55',
        description: 'El método de Vivienne para no sufrir frente a la página en blanco. Micro-sesiones de enfoque absoluto.'
      },
      {
        id: 'esc-03',
        themeNum: 5,
        themeTitle: 'Escritura',
        trackNum: 3,
        globalNum: 22,
        title: 'La frase corta',
        isSample: false,
        duration: '03:30',
        description: 'La fuerza de cortar adjetivos innecesarios. Las verdades más contundentes entran en diez palabras o menos.'
      },
      {
        id: 'esc-04',
        themeNum: 5,
        themeTitle: 'Escritura',
        trackNum: 4,
        globalNum: 23,
        title: 'La carta que no se envía',
        isSample: false,
        duration: '04:10',
        description: 'El desahogo privado como ejercicio de higiene mental antes de tomar cualquier decisión en frío.'
      },
      {
        id: 'esc-05',
        themeNum: 5,
        themeTitle: 'Escritura',
        trackNum: 5,
        globalNum: 24,
        title: 'Editar es querer bien',
        isSample: false,
        duration: '03:50',
        description: 'El cariño por el lector se demuestra podando lo superfluo y entregando solo lo esencial pulido.'
      }
    ]
  },
  {
    num: 6,
    title: 'Arte',
    tagline: 'Aprender a mirar despacio, valorar lo noble y coleccionar con criterio y mesura.',
    tracks: [
      {
        id: 'art-01',
        themeNum: 6,
        themeTitle: 'Arte',
        trackNum: 1,
        globalNum: 25,
        title: 'Mirar despacio',
        isSample: false,
        duration: '04:00',
        description: 'El entrenamiento de la mirada en una época de sobredosis visual. Cómo detenerse en una sola pieza por diez minutos.'
      },
      {
        id: 'art-02',
        themeNum: 6,
        themeTitle: 'Arte',
        trackNum: 2,
        globalNum: 26,
        title: 'Cuánto vale lo que cuelga',
        isSample: false,
        duration: '04:20',
        description: 'Desmontar el esnobismo del mercado del arte. El valor real de un cuadro reside en lo que despierta en tu habitación.'
      },
      {
        id: 'art-03',
        themeNum: 6,
        themeTitle: 'Arte',
        trackNum: 3,
        globalNum: 27,
        title: 'El arte que cuida',
        isSample: false,
        duration: '03:45',
        description: 'Rodeares de objetos que calmen el pulso y eleven el estándar de tu día a día en casa.'
      },
      {
        id: 'art-04',
        themeNum: 6,
        themeTitle: 'Arte',
        trackNum: 4,
        globalNum: 28,
        title: 'Coleccionar con criterio',
        isSample: false,
        duration: '04:15',
        description: 'No comprar por tendencia ni por firma. Las directrices de Vivienne para adquirir piezas que envejezcan contigo.'
      },
      {
        id: 'art-05',
        themeNum: 6,
        themeTitle: 'Arte',
        trackNum: 5,
        globalNum: 29,
        title: 'Hacer, no solo mirar',
        isSample: false,
        duration: '03:50',
        description: 'El derecho de todo adulto a pintar, esculpir o coser por puro placer manual sin buscar la aprobación de nadie.'
      }
    ]
  },
  {
    num: 7,
    title: 'Moda 2026',
    tagline: 'Siluetas arquitectónicas, tejidos nobles y el lujo silencioso de vestir con intención.',
    tracks: [
      {
        id: 'mod-01',
        themeNum: 7,
        themeTitle: 'Moda 2026',
        trackNum: 1,
        globalNum: 30,
        title: 'El blanco que no grita',
        isSample: false,
        duration: '03:35',
        description: 'Los neutros densos: marfil, crudo y hueso. Por qué el tono apagado siempre comunica más peso que el blanco puro.'
      },
      {
        id: 'mod-02',
        themeNum: 7,
        themeTitle: 'Moda 2026',
        trackNum: 2,
        globalNum: 31,
        title: 'Volver al archivo',
        isSample: false,
        duration: '04:05',
        description: 'Rescatar siluetas de hace cuatro décadas y reinterpretarlas con la frescura y la comodidad de hoy.'
      },
      {
        id: 'mod-03',
        themeNum: 7,
        themeTitle: 'Moda 2026',
        trackNum: 3,
        globalNum: 32,
        title: 'Hombros y cintura',
        isSample: false,
        duration: '03:50',
        description: 'La geometría de la presencia. Cómo estructurar la parte superior para caminar erguida en cualquier entorno.'
      },
      {
        id: 'mod-04',
        themeNum: 7,
        themeTitle: 'Moda 2026',
        trackNum: 4,
        globalNum: 33,
        title: 'Menos prendas, mejor elegidas',
        isSample: false,
        duration: '04:15',
        description: 'La trampa del armario abarrotado. La fórmula de 12 piezas esenciales de inversión que cubren todo el año.'
      },
      {
        id: 'mod-05',
        themeNum: 7,
        themeTitle: 'Moda 2026',
        trackNum: 5,
        globalNum: 34,
        title: 'Vestirse para una misma',
        isSample: false,
        duration: '04:30',
        description: 'La liberación definitiva del vestuario femenino: elegir texturas por el tacto en tu piel, no por la mirada ajena.'
      }
    ]
  }
];

export const ALL_AUDIO_TRACKS: AudioTrack[] = WOLSKI_THEMES.flatMap(t => t.tracks);

export const SAMPLE_AUDIO_TRACKS: AudioTrack[] = ALL_AUDIO_TRACKS.filter(t => t.isSample);
