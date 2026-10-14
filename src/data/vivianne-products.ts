export interface VivianneProduct {
  id: string;
  name: string;
  title: string;
  shortTitle: string;
  brand: string;
  category: 'bolsos' | 'knitwear' | 'abrigos' | 'calzado';
  categoryLabel: string;
  price: string;
  priceNum: number;
  currency: string;
  image: string;
  description: string;
  affiliateUrl: string;
  originalUrl: string;
  viviNote: string;
  bullets: [string, string, string];
  howSheWearsIt: string;
  tags: string[];
  badge?: string;
  isHeroLook?: boolean;
  details?: string[];
}

export const VIVIANNE_PRODUCTS: VivianneProduct[] = [
  {
    id: 'perry-tote-black',
    name: 'Perry Tote in Black',
    title: 'Perry Tote in Black | Tory Burch',
    shortTitle: 'Bolso Tote Perry en Cuero Negro',
    brand: 'Tory Burch',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Carteras',
    price: '$395 USD',
    priceNum: 395,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/bolso-tote-perry-angle.TB_169476_001_SLANG.pdp-1200x1200.jpg',
    description: 'El bolso insignia que llevo en mi día a día. Cuero granulado italiano de máxima resistencia, triple compartimento con divisor central para portátil o documentos, colgante de logo desmontable y asas largas reforzadas. La definición de lujo funcional.',
    affiliateUrl: 'https://go.shopmy.us/p-92983886',
    originalUrl: 'https://www.toryburch.com/es-us/bolsos/bolsos-tote/bolso-tote-perry/169476.html?color=001',
    viviNote: 'Un bolso se conoce por lo que no necesita mostrar. Sin logos gritando. Solo la certeza de que adentro todo está en orden.',
    bullets: [
      'Piel granulada italiana de textura densa y gran resistencia al uso continuo',
      'División interna en tres secciones con espacio impecable para portátil de 13"',
      'Asas largas estructuradas que no resbalan sobre abrigos gruesos'
    ],
    howSheWearsIt: 'Al hombro con un suéter de lana mostaza o abrigo de solapa ancha, sin cargar nada en las manos.',
    tags: ['Bolsos', 'Lujo Funcional', 'Cuero Italiano', 'Pieza Insignia'],
    badge: 'El Favorito de Vivienne',
    isHeroLook: true,
    details: [
      'Piel granulada auténtica con ribetes lacados a mano',
      'Compartimento central con cremallera y 2 secciones abiertas',
      'Capacidad para portátil de hasta 13"',
      'Medidas: Alto 29 cm, Largo 36 cm, Fondo 13.5 cm'
    ]
  },
  {
    id: 'sueter-lana-cuello-redondo',
    name: 'Suéter de Lana Pura Cuello Redondo',
    title: 'TORY BURCH | Suéter De Lana Cuello Redondo',
    shortTitle: 'Suéter de Lana Pura Cuello Redondo',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Prendas de Punto',
    price: '$595 USD',
    priceNum: 595,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-front.TB_189693_543_SLFRO.pdp-1200x1200.jpg',
    description: 'El suéter de punto por excelencia. Confeccionado en 100% lana premium de caída holgada, cuello redondo con textura suave que aporta luz y vitalidad a cualquier conjunto urbano o sastre.',
    affiliateUrl: 'https://go.shopmy.us/p-92158272',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/sueteres/sueter-de-lana/189693.html?color=543',
    viviNote: 'Hay colores que piden disculpas y colores que entran primero. Este entra primero. Combínalo con camel y deja que él haga la conversación.',
    bullets: [
      '100% lana virgen tejida con densidad y peso noble',
      'Cuello redondo con ribete grueso que enmarca el rostro con nitidez',
      'Tinte amarillo azafrán profundo que aporta luz en días grises'
    ],
    howSheWearsIt: 'Metido levemente al frente en un pantalón sastre de tiro alto, con pulseras doradas discretas.',
    tags: ['Punto', 'Lana Virgen', 'Color Insignia', 'Look de Portada'],
    badge: 'Look de Portada',
    isHeroLook: true,
    details: [
      '100% lana virgen de textura suave al tacto',
      'Cuello, puños y bajo acanalados',
      'Corte relajado sofisticado',
      'Ideal para combinar con sastrería negra o denim premium'
    ]
  },
  {
    id: 'bolso-bucket-mini-romy',
    name: 'Bolso Bucket Mini de Borreguillo Romy',
    title: 'Bolso Bucket Mini de Borreguillo Romy | Tory Burch',
    shortTitle: 'Bolso Bucket Mini de Borreguillo Romy',
    brand: 'Tory Burch',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Carteras',
    price: '$395 USD',
    priceNum: 395,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/bolso-bucket-mini-de-borreguillo-romy-angle.TB_185957_254_SLANG.pdp-1200x1200.jpg',
    description: 'Una pieza extrovertida, cálida y magnética. El bolso bombonera Romy combina suave borreguillo natural con detalles en piel estructurada y cierre de cordón con herrajes dorados. Perfecto para elevar atuendos de entretiempo e invierno.',
    affiliateUrl: 'https://go.shopmy.us/p-92982093',
    originalUrl: 'https://www.toryburch.com/es-us/bolsos/bolsos-bandolera/bolso-bucket-mini-de-borreguillo-romy/185957.html?color=254',
    viviNote: 'El borreguillo no es para esconderse. Es para quien sabe acariciar los días fríos con audacia y un toque de ironía.',
    bullets: [
      'Borreguillo natural suave combinado con ribetes de piel oscura',
      'Cierre de cordón ceñido con herrajes dorados de latón pulido',
      'Correa bandolera desmontable para llevar al hombro o en la muñeca'
    ],
    howSheWearsIt: 'Cruzado sobre una gabardina sobria para romper cualquier exceso de seriedad.',
    tags: ['Bolsos', 'Borreguillo', 'Textura', 'Tendencia'],
    badge: 'Tendencia Texturas',
    details: [
      'Cuerpo en borreguillo de tacto envolvente',
      'Correa bandolera desmontable y asa de mano en piel',
      'Forro interior de microfibra con acabado aterciopelado',
      'Cierre fruncido mediante tiradores metálicos con logo'
    ]
  },
  {
    id: 'botas-altas-charlie',
    name: 'Botas Altas Charlie Hasta la Rodilla',
    title: 'Botas Altas Charlie Hasta la Rodilla | Tory Burch',
    shortTitle: 'Botas Altas Charlie en Piel de Montar',
    brand: 'Tory Burch',
    category: 'calzado',
    categoryLabel: 'Calzado & Botas',
    price: '$695 USD',
    priceNum: 695,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/botas-altas-charlie-side.TB_186848_047_SLSID.pdp-1200x1200.jpg',
    description: 'La silueta ecuestre definitiva. Caña alta hasta la rodilla elaborada en cuero de becerro seleccionado con brillo sutil, tacón en bloque equilibrado para caminar durante horas y detalle de hebilla con el emblema icónico en metal envejecido.',
    affiliateUrl: 'https://go.shopmy.us/p-92982013',
    originalUrl: 'https://www.toryburch.com/es-us/calzado/botas-hasta-la-rodilla/botas-altas-charlie/186848.html?color=047',
    viviNote: 'La compostura empieza en los pies. Una buena bota de montar no pide permiso sobre ningún pavimento del mundo.',
    bullets: [
      'Piel de becerro pulida con acabado satinado natural',
      'Caña recta estructurada que mantiene la forma sin arrugarse',
      'Tacón bloque de 45 mm ideado para caminar con aplomo sin cansancio'
    ],
    howSheWearsIt: 'Debajo de faldas midi de lana o sobre pantalones ceñidos en tono marfil.',
    tags: ['Calzado', 'Piel de Becerro', 'Silueta Ecuestre', 'Inversión'],
    badge: 'Must-Have Calzado',
    details: [
      'Piel de becerro de primera calidad pulida a mano',
      'Cremallera lateral completa para calce fácil',
      'Suela de cuero y caucho antideslizante',
      'Tacón cuadrado de 45 mm para máxima ergonomía'
    ]
  },
  {
    id: 'gabardina-lana-clasica',
    name: 'Gabardina Clásica en Mezcla de Lana',
    title: 'Gabardina de Lana de Diseñador | Tory Burch',
    shortTitle: 'Gabardina Clásica en Mezcla de Lana',
    brand: 'Tory Burch',
    category: 'abrigos',
    categoryLabel: 'Abrigos & Sastrería',
    price: '$998 USD',
    priceNum: 998,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    description: 'La reinvención de la gabardina tradicional en un tejido de lana tupida con cuerpo y caída arquitectónica. Cuello con solapas amplias, trabillas en hombros y cinturón con hebilla para ceñir la silueta con prestancia.',
    affiliateUrl: 'https://go.shopmy.us/p-92981926',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/abrigos/gabardina-de-lana/168010.html?color=201',
    viviNote: 'Una gabardina jamás se abrocha con prisa. Se anuda con indolencia al frente y se deja que el viento haga la mitad del trabajo.',
    bullets: [
      'Paño de lana estructurado de peso contundente y caída impecable',
      'Doble botonadura con botones de cuerno auténtico grabados',
      'Solapas amplias y cinturón largo para marcar la cintura con holgura'
    ],
    howSheWearsIt: 'Abierta sobre un cuello cisne negro o anudada sobre los hombros en mañanas frescas.',
    tags: ['Abrigos', 'Lana Italiana', 'Sastrería', 'Atemporal'],
    badge: 'Inversión Atemporal',
    details: [
      'Mezcla de lana italiana estructurada y cálida',
      'Doble botonadura con botones de cuerno grabados',
      'Bolsillos laterales diagonales profundos',
      'Abertura trasera para mayor libertad de movimiento'
    ]
  },
  {
    id: 'sueter-fair-isle',
    name: 'Suéter de Lana Motivo Fair Isle',
    title: 'Suéter de Lana Fair Isle | Tory Burch',
    shortTitle: 'Suéter de Lana Motivo Fair Isle',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Prendas de Punto',
    price: '$395 USD',
    priceNum: 395,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-fair-isle-front.TB_183785_243_SLFRO.pdp-1200x1200.jpg',
    description: 'El encanto del après-ski llevado al armario de ciudad. Patrón geométrico Fair Isle en yugo circular con tonalidades tierra y crudo. Una pieza cálida que habla de tradición artesanal y sofisticación relajada.',
    affiliateUrl: 'https://go.shopmy.us/p-92229921',
    originalUrl: 'https://www.toryburch.com/es-us/clothing/sweaters/fair-isle-wool-sweater/183785.html?color=243',
    viviNote: 'El recuerdo de los Alpes sin la incomodidad de esquiar. Cálido, comedido y con la medida exacta de tradición.',
    bullets: [
      'Jacquard artesanal en gama de tierras, crudos y marfil',
      'Punto medio que abriga sin añadir volumen excesivo',
      'Cuello acanalado ceñido que protege la garganta con suavidad'
    ],
    howSheWearsIt: 'Con pantalón de pana acanalada y botines de cuero marrón para un domingo de galerías.',
    tags: ['Punto', 'Fair Isle', 'Après-ski', 'Artesanal'],
    badge: 'Pieza de Colección',
    details: [
      'Punto jacquard Fair Isle en lana gruesa pero ligera',
      'Cuello semicisne protector',
      'Puños y dobladillo acanalados anchos',
      'Perfecto para estilismos en capas'
    ]
  },
  {
    id: 'atorie-lazy-retro-bag',
    name: 'Lazy Retro Leather Shoulder Bag',
    title: 'ATORIE | Lazy Retro Shoulder Bag',
    shortTitle: 'Lazy Retro Leather Shoulder Bag',
    brand: 'Atorie',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Carteras',
    price: '$199 USD',
    priceNum: 199,
    currency: 'USD',
    image: 'https://d3sxx0v5qcg9oj.cloudfront.net/product-images/060c1925-7536-4bfc-95b7-115b46da923f.jpg',
    description: 'Bolso de hombro estructurado con solapa suavemente curvada y cerradura giratoria en dorado cepillado. Fusiona el encanto retro de los años 70 con el minimalismo moderno. Cuerpo suave, liviano y con correa ajustable.',
    affiliateUrl: 'https://go.shopmy.us/p-92166610',
    originalUrl: 'https://atorie.com/products/lazy-retro-shoulder-bag',
    viviNote: 'Un broche de oro cepillado y líneas limpias. Parece heredado de una tía milanesa que sabía exactamente qué comprar.',
    bullets: [
      'Piel vacuna lisa de curtición vegetal con brillo mate sedoso',
      'Herraje giratorio bañado en oro claro de inspiración años setenta',
      'Formato baguette alargado que descansa con naturalidad bajo el brazo'
    ],
    howSheWearsIt: 'Bajo el brazo con un blazer oscuro de corte masculino y mocasines de suela fina.',
    tags: ['Bolsos', 'Piel Vacuna', 'Retro Chic', 'Oro Cepillado'],
    badge: 'Favorito Indie Luxury',
    details: [
      'Piel vacuna de tacto sedoso con pátina natural',
      "Cierre 'turn-lock' bañado en oro claro antidesgaste",
      'Interior forrado con bolsillo organizador para móvil',
      'Correa desmontable para llevar al hombro o cruzado'
    ]
  },
  {
    id: 'sueter-estilo-rugby',
    name: 'Suéter Estilo Rugby a Rayas',
    title: 'TORY BURCH | Suéter Estilo Rugby en Punto',
    shortTitle: 'Suéter Estilo Rugby a Rayas',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Prendas de Punto',
    price: '$495 USD',
    priceNum: 495,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-estilo-rugby-front.TB_189625_741_SLFRO.pdp-1200x1200.jpg',
    description: 'Una visión audaz y extrovertida del clásico polo de rugby. Rayas en bloque de alto contraste con cuello camisero en popelina blanca y tapeta con botones ocultos. Para looks que rompen con lo predecible con total garbo.',
    affiliateUrl: 'https://go.shopmy.us/p-92161514',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/sueteres/sueter-estilo-rugby/189625.html?color=741',
    viviNote: 'Las rayas anchas exigen una espalda erguida. El cuello blanco en popelina da luz a la cara sin necesidad de afeites.',
    bullets: [
      'Punto compacto de mezcla de lana merino y seda de tacto fluido',
      'Cuello camisero blanco impoluto con tapeta de botones invisibles',
      'Bloques de color de alto contraste que estilizan los hombros'
    ],
    howSheWearsIt: 'Con pantalones anchos de lana cruda y un recogido pulido.',
    tags: ['Punto', 'Lana Merino & Seda', 'Estilo Rugby', 'Contraste'],
    badge: 'Estilo Audaz',
    details: [
      'Punto fino de mezcla de lana merino y seda',
      'Cuello de popelín nítido en contraste',
      'Tapeta frontal con botones cubiertos',
      'Largo a la cadera favorecedor para llevar por dentro o suelto'
    ]
  }
];

export const VIVIANNE_CATEGORIES = [
  { id: 'all', label: 'Todo el Armario', count: 8 },
  { id: 'bolsos', label: 'Bolsos & Carteras', count: 3 },
  { id: 'knitwear', label: 'Prendas de Punto', count: 3 },
  { id: 'abrigos', label: 'Abrigos & Sastrería', count: 1 },
  { id: 'calzado', label: 'Calzado & Botas', count: 1 }
] as const;

export interface VivianneLook {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  productIds: string[];
}

export const VIVIANNE_LOOKS: VivianneLook[] = [
  {
    id: 'look-urbano',
    name: 'Look 01: El Estándar Urbano',
    tagline: 'Presencia sin estridencias',
    description: 'La combinación de suéter mostaza vibrante con el bolso Perry en piel negra estructurada. Una silueta pensada para caminar deprisa y no pedir disculpas.',
    image: '/images/vivianne-wolski-hero.jpg',
    productIds: ['perry-tote-black', 'sueter-lana-cuello-redondo']
  },
  {
    id: 'look-asfalto',
    name: 'Look 02: La Arquitectura de Invierno',
    tagline: 'Líneas limpias y peso noble',
    description: 'Gabardina de lana de caída contundente sobre botas de caña alta Charlie y el contraste táctil del bolso bombonera de borreguillo.',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    productIds: ['gabardina-lana-clasica', 'botas-altas-charlie', 'bolso-bucket-mini-romy']
  },
  {
    id: 'look-domingo',
    name: 'Look 03: El Retiro Intelectual',
    tagline: 'Tradición y sosiego',
    description: 'Punto jacquard Fair Isle o rayas tipo rugby combinados con el bolso baguette Atorie en piel suave de inspiración años setenta.',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-fair-isle-front.TB_183785_243_SLFRO.pdp-1200x1200.jpg',
    productIds: ['sueter-fair-isle', 'atorie-lazy-retro-bag', 'sueter-estilo-rugby']
  }
];

export const WOLSKI_CLUB = {
  title: 'El Wolski Club · El Domingo de los Números',
  badge: 'CÍRCULO PRIVADO · FORMACIÓN EN AUDIOS',
  subtitle: 'Carácter, finanzas y estilo en su oído',
  price: '9',
  priceFormatted: '$9 USD',
  description: 'El carácter, las finanzas y el estilo no se improvisan: se entrenan. En el Wolski Club le entrego formaciones en audio, directas y sin rodeos, para dominar sus cuentas cada domingo, vestir con criterio propio y sostener una presencia inquebrantable. Sin ruido ni promesas vacías: rigor y elegancia.',
  pillars: [
    { title: 'El Carácter', desc: 'Templanza, criterio propio y la serenidad de quien no necesita validación externa.' },
    { title: 'Las Finanzas', desc: 'El Domingo de los Números: una hora semanal para saber con exactitud adónde va cada peso.' },
    { title: 'El Estilo', desc: 'Aprender a vestir con intención, siluetas que perduran y prendas de inversión.' }
  ],
  label: 'Formación en audio y contenido educativo, no es asesoría financiera.',
  buttonText: 'Unirme al Wolski Club',
  link: 'https://thesilentstudiomk.gumroad.com/l/ltfbhx',
  companionLink: '/domingo',
  companionButtonText: 'Abrir Compañero Interactivo'
};

export const DOMINGO_DE_LOS_NUMEROS = WOLSKI_CLUB;
