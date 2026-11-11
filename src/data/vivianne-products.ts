export interface VivianneProduct {
  id: string;
  name: string;
  title: string;
  shortTitle: string;
  brand: string;
  category: 'bolsos' | 'knitwear' | 'abrigos' | 'calzado' | 'accesorios';
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
    id: 'sueter-lana-cuello-redondo',
    name: 'Suéter de Lana Pura Cuello Redondo',
    title: 'TORY BURCH | Suéter De Lana',
    shortTitle: 'Suéter de Lana Pura Cuello Redondo',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Punto & Sastrería',
    price: '$595 USD',
    priceNum: 595,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-front.TB_189693_543_SLFRO.pdp-1200x1200.jpg',
    description:
      'El suéter de punto por excelencia en Maison Wolski. Confeccionado en 100% lana virgen de caída holgada y cuello redondo que aporta luz y presencia a cualquier conjunto.',
    affiliateUrl: 'https://go.shopmy.us/p-92158272',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/jerséis/suéter-de-lana/189693.html?color=543&size=XS',
    viviNote:
      'Hay colores que piden disculpas y colores que entran primero. Este entra primero. Combínalo con camel y deja que él haga la conversación.',
    bullets: [
      '100% lana virgen tejida con densidad y peso noble',
      'Cuello redondo con ribete grueso que enmarca el rostro con nitidez',
      'Tinte profundo que aporta luz instantánea en días grises',
    ],
    howSheWearsIt: 'Metido levemente al frente en un pantalón sastre de tiro alto, con pulseras doradas discretas.',
    tags: ['Punto', 'Lana Virgen', 'Tory Burch', 'Look de Portada'],
    badge: 'Más Pedido · Top #1',
    isHeroLook: true,
  },
  {
    id: 'perry-tote-black',
    name: 'Perry Tote in Black',
    title: 'Perry Tote In Black | Tory Burch',
    shortTitle: 'Bolso Tote Perry en Cuero Negro',
    brand: 'Tory Burch',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$398 USD',
    priceNum: 398,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/bolso-tote-perry-angle.TB_169476_001_SLANG.pdp-1200x1200.jpg',
    description:
      'El bolso insignia del día a día. Cuero granulado italiano de máxima resistencia, triple compartimento con divisor central con cierre y asas largas reforzadas.',
    affiliateUrl: 'https://go.shopmy.us/p-92983886',
    originalUrl: 'https://www.toryburch.com/es-us/bolsos/bolsos-tote/bolso-tote-perry/169476.html?color=001',
    viviNote:
      'Un bolso se conoce por lo que no necesita mostrar. Sin logos gritando. Solo la certeza de que adentro todo está en orden.',
    bullets: [
      'Piel granulada italiana de textura densa y gran resistencia',
      'División interna en tres secciones con espacio para portátil de 13"',
      'Asas largas estructuradas que no resbalan sobre abrigos gruesos',
    ],
    howSheWearsIt: 'Al hombro con un suéter de lana o abrigo de solapa ancha, sin cargar nada en las manos.',
    tags: ['Bolsos', 'Lujo Funcional', 'Cuero Italiano', 'Pieza Insignia'],
    badge: 'El Favorito de Vivienne',
    isHeroLook: true,
  },
  {
    id: 'prada-cleo-small-leather',
    name: 'Cleo Small Brushed Leather Shoulder Bag',
    title: 'Prada | Cleo Small Leather Shoulder Bag',
    shortTitle: 'Bolso Prada Cleo en Piel Cepillada',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$3,200 USD',
    priceNum: 3200,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC499/ZO6F0002/1BC499_ZO6_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Geometría curva e impecable piel cepillada italiana. El modelo Cleo reinterpreta los archivos clásicos de Prada de los años 90 con una silueta arquitectónica ligera y eterna.',
    affiliateUrl: 'https://go.shopmy.us/p-94490609',
    originalUrl: 'https://www.prada.com/us/en/p/prada-cleo-brushed-leather-shoulder-bag/1BC499_ZO6_F0002_V_OOO',
    viviNote:
      'Una curva bien trazada en cuero cepillado dura más que diez modas pasajeras. Es sobrio, firme y entra en cualquier salón con autoridad.',
    bullets: [
      'Cuero cepillado icónico de Prada con acabado espejo sutil',
      'Base inclinada ergonómica que descansa con precisión bajo el brazo',
      'Interior en napa suave con cierre magnético oculto',
    ],
    howSheWearsIt: 'En cenas de invierno o reuniones privadas con sastrería oscura y foulard de seda.',
    tags: ['Prada', 'Bolsos', 'Cuero Cepillado', 'Archivo Milán'],
    badge: 'Icono de Milán',
    isHeroLook: true,
  },
  {
    id: 'gabardina-lana-clasica',
    name: 'Gabardina Clásica en Mezcla de Lana',
    title: 'Gabardina de Lana: Abrigos de Diseñador Para Mujer | Tory Burch',
    shortTitle: 'Gabardina Clásica en Mezcla de Lana',
    brand: 'Tory Burch',
    category: 'abrigos',
    categoryLabel: 'Abrigos & Parkas',
    price: '$998 USD',
    priceNum: 998,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    description:
      'La reinvención de la gabardina tradicional en un tejido de lana tupida con cuerpo y caída arquitectónica. Solapas amplias, doble botonadura de cuerno y cinturón largo.',
    affiliateUrl: 'https://go.shopmy.us/p-92981926',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/abrigos/gabardina-de-lana/168010.html?color=201',
    viviNote:
      'Una gabardina jamás se abrocha con prisa. Se anuda con indolencia al frente y se deja que el viento haga la mitad del trabajo.',
    bullets: [
      'Paño de lana estructurado de peso contundente y caída impecable',
      'Doble botonadura con botones de cuerno auténtico grabados',
      'Solapas amplias y cinturón largo para marcar la cintura con holgura',
    ],
    howSheWearsIt: 'Abierta sobre un cuello cisne negro o anudada sobre los hombros en mañanas frescas.',
    tags: ['Abrigos', 'Lana Italiana', 'Sastrería', 'Atemporal'],
    badge: 'Inversión Atemporal',
    isHeroLook: true,
  },
  {
    id: 'atorie-lazy-retro-bag',
    name: 'Lazy Retro Leather Shoulder Bag',
    title: 'ATORIE | Lazy Retro Shoulder Bag',
    shortTitle: 'Lazy Retro Leather Shoulder Bag',
    brand: 'Atorie',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$199 USD',
    priceNum: 199,
    currency: 'USD',
    image: 'https://d3sxx0v5qcg9oj.cloudfront.net/product-images/060c1925-7536-4bfc-95b7-115b46da923f.jpg',
    description:
      'Bolso de hombro estructurado con solapa suavemente curvada y cerradura giratoria en dorado cepillado. Fusiona el encanto retro de los años 70 con el minimalismo moderno.',
    affiliateUrl: 'https://go.shopmy.us/p-92166610',
    originalUrl: 'https://atorie.com/products/lazy-retro-shoulder-bag',
    viviNote:
      'Un broche de oro cepillado y líneas limpias. Parece heredado de una tía milanesa que sabía exactamente qué comprar sin pagar de más.',
    bullets: [
      'Piel vacuna lisa de curtición vegetal con brillo mate sedoso',
      'Herraje giratorio bañado en oro claro de inspiración años setenta',
      'Formato baguette alargado que descansa con naturalidad bajo el brazo',
    ],
    howSheWearsIt: 'Bajo el brazo con un blazer oscuro de corte masculino y mocasines de suela fina.',
    tags: ['Bolsos', 'Atorie', 'Piel Vacuna', 'Retro Chic'],
    badge: 'Compra Inteligente',
  },
  {
    id: 'sueter-estilo-rugby',
    name: 'Suéter Estilo Rugby en Lana y Seda',
    title: 'TORY BURCH | Suéter Estilo Rugby',
    shortTitle: 'Suéter Estilo Rugby a Rayas',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Punto & Sastrería',
    price: '$495 USD',
    priceNum: 495,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-estilo-rugby-front.TB_189625_741_SLFRO.pdp-1200x1200.jpg',
    description:
      'Una visión audaz y refinada del clásico polo de rugby. Rayas en bloque con cuello camisero en popelina blanca y tapeta con botones ocultos.',
    affiliateUrl: 'https://go.shopmy.us/p-92161514',
    originalUrl: 'https://www.toryburch.com/es-us/ropa/jerséis/suéter-estilo-rugby/189625.html?color=741&size=XL',
    viviNote:
      'Las rayas anchas exigen una espalda erguida. El cuello blanco en popelina da luz a la cara sin necesidad de artificios.',
    bullets: [
      'Punto compacto de mezcla de lana merino y seda de tacto fluido',
      'Cuello camisero blanco impoluto con tapeta de botones invisibles',
      'Bloques de color de alto contraste que estilizan los hombros',
    ],
    howSheWearsIt: 'Con pantalones anchos de lana cruda y un recogido pulido.',
    tags: ['Punto', 'Lana Merino & Seda', 'Estilo Rugby', 'Tory Burch'],
    badge: 'Carácter Clásico',
  },
  {
    id: 'sueter-fair-isle',
    name: 'Suéter de Lana Motivo Fair Isle',
    title: 'Suéter de Lana Fair Isle: Jerséis de Diseñador Para Mujer | Tory Burch',
    shortTitle: 'Suéter de Lana Motivo Fair Isle',
    brand: 'Tory Burch',
    category: 'knitwear',
    categoryLabel: 'Punto & Sastrería',
    price: '$395 USD',
    priceNum: 395,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-fair-isle-front.TB_183785_243_SLFRO.pdp-1200x1200.jpg',
    description:
      'El encanto alpino llevado al armario de ciudad. Patrón geométrico Fair Isle en yugo circular con tonalidades tierra y marfil.',
    affiliateUrl: 'https://go.shopmy.us/p-92229921',
    originalUrl: 'https://www.toryburch.com/es-us/clothing/sweaters/fair-isle-wool-sweater/183785.html?color=243',
    viviNote:
      'El recuerdo de los Alpes sin la incomodidad de esquiar. Cálido, comedido y con la medida exacta de tradición.',
    bullets: [
      'Jacquard artesanal en gama de tierras, crudos y marfil',
      'Punto medio que abriga sin añadir volumen excesivo',
      'Cuello acanalado ceñido que protege la garganta con suavidad',
    ],
    howSheWearsIt: 'Con pantalón de sastrería o pana y botines de cuero marrón para un domingo de lectura.',
    tags: ['Punto', 'Fair Isle', 'Après-ski', 'Artesanal'],
    badge: 'Pieza de Colección',
  },
  {
    id: 'bolso-bucket-mini-romy',
    name: 'Bolso Bucket Mini de Borreguillo Romy',
    title: 'Bolso Bucket Mini de Borreguillo Romy | Tory Burch',
    shortTitle: 'Bolso Bucket Mini de Borreguillo Romy',
    brand: 'Tory Burch',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$395 USD',
    priceNum: 395,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/bolso-bucket-mini-de-borreguillo-romy-angle.TB_185957_254_SLANG.pdp-1200x1200.jpg',
    description:
      'El bolso bombonera Romy combina suave borreguillo natural con detalles en piel estructurada y cierre de cordón con herrajes dorados.',
    affiliateUrl: 'https://go.shopmy.us/p-92982093',
    originalUrl: 'https://www.toryburch.com/es-us/bolsos/bolsos-bandolera/bolso-bucket-mini-de-borreguillo-romy/185957.html?color=254',
    viviNote:
      'El borreguillo no es para esconderse. Es para quien sabe acariciar los días fríos con audacia y un toque de ironía.',
    bullets: [
      'Borreguillo natural suave combinado con ribetes de piel oscura',
      'Cierre de cordón ceñido con herrajes dorados de latón pulido',
      'Correa bandolera desmontable para llevar al hombro o en la mano',
    ],
    howSheWearsIt: 'Cruzado sobre una gabardina sobria para romper cualquier exceso de rigidez.',
    tags: ['Bolsos', 'Borreguillo', 'Textura', 'Tory Burch'],
    badge: 'Textura de Invierno',
  },
  {
    id: 'botas-altas-charlie',
    name: 'Botas Altas Charlie Hasta la Rodilla',
    title: 'Botas Altas Charlie: Botas Hasta La Rodilla de Diseñador Para Mujer | Tory Burch',
    shortTitle: 'Botas Altas Charlie en Piel de Montar',
    brand: 'Tory Burch',
    category: 'calzado',
    categoryLabel: 'Calzado & Botas',
    price: '$695 USD',
    priceNum: 695,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/botas-altas-charlie-side.TB_186848_047_SLSID.pdp-1200x1200.jpg',
    description:
      'La silueta ecuestre definitiva. Caña alta hasta la rodilla elaborada en cuero de becerro seleccionado con tacón en bloque equilibrado para caminar durante horas.',
    affiliateUrl: 'https://go.shopmy.us/p-92982013',
    originalUrl: 'https://www.toryburch.com/es-us/calzado/botas-hasta-la-rodilla/botas-altas-charlie/186848.html?color=047',
    viviNote:
      'La compostura empieza en los pies. Una buena bota de montar no pide permiso sobre ningún pavimento del mundo.',
    bullets: [
      'Piel de becerro pulida con acabado satinado natural',
      'Caña recta estructurada que mantiene la forma sin arrugarse',
      'Tacón bloque de 45 mm ideado para caminar con aplomo sin cansancio',
    ],
    howSheWearsIt: 'Debajo de faldas midi de lana o sobre pantalones ceñidos en tono marfil.',
    tags: ['Calzado', 'Piel de Becerro', 'Silueta Ecuestre', 'Tory Burch'],
    badge: 'Esencial Ecuestre',
  },
  {
    id: 'prada-bonnie-medium-suede',
    name: 'Bonnie Medium Printed Linen & Leather Handbag',
    title: 'Prada | Bonnie Medium Suede Handbag',
    shortTitle: 'Bolso Prada Bonnie Mediano',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$2,950 USD',
    priceNum: 2950,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2FPTF0009/1BA426_2FPT_F0009_V_OTM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Silueta alargada con asas largas tubulares y cinturón decorativo perimetral. Una pieza de archivo con aire relajado y maestría marroquinera italiana.',
    affiliateUrl: 'https://go.shopmy.us/p-94490592',
    originalUrl: 'https://www.prada.com/us/en/p/prada-bonnie-medium-printed-linen-and-leather-handbag/1BA426_2FPT_F0009_V_OTM',
    viviNote:
      'Tiene esa proporción exacta que permite llevar tu agenda financiera, tus gafas y un libro sin deformarse jamás.',
    bullets: [
      'Combinación magistral de texturas nobles y detalles en piel',
      'Asas alargadas para llevar cómodamente al hombro o en el pliegue del brazo',
      'Herrajes metálicos en oro envejecido con emblema triangular',
    ],
    howSheWearsIt: 'Con traje de dos piezas en tonos arena o camel.',
    tags: ['Prada', 'Bolsos', 'Bonnie', 'Marroquinería'],
    badge: 'Selección Maison',
  },
  {
    id: 'prada-bonnie-small-suede',
    name: 'Bonnie Small Suede Shoulder Bag',
    title: 'Prada | Bonnie Suede Handbag',
    shortTitle: 'Bolso Prada Bonnie en Ante Cálido',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$2,850 USD',
    priceNum: 2850,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2C4SF0324/1BA426_2C4S_F0324_V_MOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'El tacto aterciopelado del ante italiano en tono tabaco cálido. Un bolso de hombro envolvente que gana personalidad y carácter con cada año de uso.',
    affiliateUrl: 'https://go.shopmy.us/p-94490597',
    originalUrl: 'https://prada.com/us/en/p/prada-bonnie-small-suede-shoulder-bag/1BA426_2C4S_F0324_V_MOO',
    viviNote:
      'El ante en color tabaco es el verdadero uniforme de otoño en Milán. No grita riqueza: la susurra.',
    bullets: [
      'Ante italiano seleccionado de tacto profundo y cálido',
      'Cinturón superior decorativo con hebilla metálica',
      'Incluye correa ajustable adicional para uso cruzado',
    ],
    howSheWearsIt: 'Con abrigo de cachemira crudo y guantes de piel al tono.',
    tags: ['Prada', 'Ante', 'Bolsos', 'Quiet Luxury'],
    badge: 'Lujo Silencioso',
  },
  {
    id: 'prada-arque-suede-shoulder',
    name: 'Arqué Mini Suede & Leather Shoulder Bag',
    title: 'Prada | Arqué Leather-Trimmed Re-Nylon Shoulder Bag',
    shortTitle: 'Bolso Prada Arqué Media Luna',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$2,750 USD',
    priceNum: 2750,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC194/2C4SF0324/1BC194_2C4S_F0324_V_TOM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Diseño en media luna con construcción curva en ante y ribetes de piel napa. Versátil gracias a sus dos correas intercambiables para hombro o bandolera.',
    affiliateUrl: 'https://go.shopmy.us/p-94490605',
    originalUrl: 'https://www.prada.com/us/en/p/prada-arque-mini-suede-shoulder-bag/1BC194_2C4S_F0324_V_TOM',
    viviNote:
      'La curva media luna del Arqué abraza el hombro sin esfuerzo. Es la pieza que eliges cuando sales a caminar por París sin prisa.',
    bullets: [
      'Silueta creciente escultural con ribetes en cuero liso',
      'Interior forrado en piel napa con bolsillo plano',
      'Doble asa intercambiable y herrajes dorados',
    ],
    howSheWearsIt: 'Al hombro sobre un suéter de cuello alto negro y falda recta.',
    tags: ['Prada', 'Arqué', 'Media Luna', 'Ante'],
  },
  {
    id: 'prada-route-large-tote',
    name: 'Route Large Leather Tote Bag',
    title: 'Prada | Route Large Leather Tote Bag',
    shortTitle: 'Bolso Tote Prada Route en Piel',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$3,600 USD',
    priceNum: 3600,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BG/1BG644/2G6RF0K74/1BG644_2G6R_F0K74_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Tote de gran capacidad en piel suave color piedra/talco con bolsillos exteriores funcionales de inspiración viajera y correas con hebillas.',
    affiliateUrl: 'https://go.shopmy.us/p-94490631',
    originalUrl: 'https://www.prada.com/us/en/p/prada-route-large-leather-tote-bag/1BG644_2G6R_F0K74_V_OOO',
    viviNote:
      'Para viajar en primera o cruzar la ciudad con toda tu vida resuelta adentro. Los bolsillos laterales son pura inteligencia práctica.',
    bullets: [
      'Piel flexible de grano sutil en tono mineral luminoso',
      'Bolsillos exteriores con solapa para acceso inmediato',
      'Capacidad generosa para jornadas largas o escapadas de fin de semana',
    ],
    howSheWearsIt: 'Con gabardina larga desabrochada y gafas oscuras.',
    tags: ['Prada', 'Tote', 'Viaje', 'Cuero'],
    badge: 'Pieza de Viaje',
  },
  {
    id: 'prada-saffiano-envelope-clutch',
    name: 'Saffiano Leather Envelope Clutch',
    title: 'Prada | Saffiano Leather Envelope Clutch',
    shortTitle: 'Cartera Sobre en Piel Saffiano',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$1,150 USD',
    priceNum: 1150,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1MF/1MF048/2CLQF0135/1MF048_2CLQ_F0135_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg',
    description:
      'Cartera tipo sobre en la legendaria piel Saffiano patentada por Prada, resistente a rasguños y al agua, con destello metálico sutil.',
    affiliateUrl: 'https://go.shopmy.us/p-94490628',
    originalUrl: 'https://www.prada.com/us/en/p/saffiano-leather-envelope-clutch/1MF048_2CLQ_F0135',
    viviNote:
      'El orden financiero empieza por dónde guardas tus documentos y tarjetas. Este sobre en Saffiano es indestructible y cabe dentro de cualquier tote.',
    bullets: [
      'Piel Saffiano con entramado cruzado resistente al paso de las décadas',
      'Formato sobre ultradelgado para llevar en mano o dentro del bolso',
      'Ranuras internas para tarjetas y documentos importantes',
    ],
    howSheWearsIt: 'En la mano para un almuerzo ejecutivo o dentro del Perry Tote.',
    tags: ['Prada', 'Saffiano', 'Clutch', 'Orden'],
  },
  {
    id: 'prada-re-edition-2005-nylon',
    name: 'Re-Edition 2000/2005 Mini Re-Nylon Bag',
    title: 'Prada | 2005 Mini Nylon Shoulder Bag (Re-Edition)',
    shortTitle: 'Prada Re-Edition Mini Re-Nylon',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$1,320 USD',
    priceNum: 1320,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1NE/1NE515/RDH0F0002/1NE515_RDH0_F0002_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'El clásico ligero e impermeable de Prada confeccionado en Re-Nylon regenerado con detalles en piel Saffiano y asa de cinta tejida.',
    affiliateUrl: 'https://go.shopmy.us/p-94490624',
    originalUrl: 'https://www.prada.com/us/en/p/re-nylon-prada-re-edition-2000-mini-bag/1NE515_RDH0_F0002',
    viviNote:
      'Para los días de lluvia o cuando solo necesitas las llaves, el teléfono y la libertad de caminar ligera.',
    bullets: [
      'Tejido Re-Nylon resistente al agua y ultraligero',
      'Detalles y etiqueta de llavero en piel Saffiano',
      'Cierre superior con cremallera de deslizamiento suave',
    ],
    howSheWearsIt: 'Con parka impermeable o conjunto de punto en días de diligencias.',
    tags: ['Prada', 'Re-Nylon', 'Mini Bag', 'Práctico'],
  },
  {
    id: 'prada-wish-silk-pouch',
    name: 'Wish Silk Duchesse Pouch',
    title: 'Prada | Wish Silk Duchesse Pouch',
    shortTitle: 'Bolso Bombonera Prada en Seda Duquesa',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$1,650 USD',
    priceNum: 1650,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1NK/1NK063/2G6BF0388/1NK063_2G6B_F0388_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Pouch de noche confeccionado en luminosa seda duquesa con cierre fruncido y silueta delicada para veladas especiales.',
    affiliateUrl: 'https://go.shopmy.us/p-94490619',
    originalUrl: 'https://www.prada.com/us/en/p/prada-wish-silk-duchesse-pouch/1NK063_2G6B_F0388',
    viviNote:
      'De noche no se carga un escritorio a cuestas. Una bombonera de seda duquesa en la muñeca basta y sobra.',
    bullets: [
      'Seda duquesa italiana con brillo perlado natural',
      'Cierre de cordones en piel fina para llevar en la muñeca',
      'Peso pluma y presencia de alta etiqueta',
    ],
    howSheWearsIt: 'En el teatro o cenas formales con vestido negro o sastrería de terciopelo.',
    tags: ['Prada', 'Seda Duquesa', 'Noche', 'Pouch'],
  },
  {
    id: 'prada-crochet-tote-natural',
    name: 'Crochet Raffia-Effect Tote Bag',
    title: 'Prada | Crochet Tote Bag',
    shortTitle: 'Tote Prada Tejido en Crochet',
    brand: 'Prada',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$2,100 USD',
    priceNum: 2100,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BG/1BG393/2C2TF0018/1BG393_2C2T_F0018_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Bolso tote tejido en punto crochet de efecto rafia natural con silueta desestructurada y el emblema bordado al frente.',
    affiliateUrl: 'https://go.shopmy.us/p-94490621',
    originalUrl: 'https://www.prada.com/us/en/p/crochet-tote-bag/1BG393_2C2T_F0018_V_OOO',
    viviNote:
      'El verdadero descanso en la costa pide texturas que respiren. Se pliega en la maleta y sale intacto.',
    bullets: [
      'Tejido crochet artesanal flexible y fresco',
      'Doble asa superior tejida para llevar al hombro',
      'Estructura plegable ideal para maletas de viaje',
    ],
    howSheWearsIt: 'En escapadas de sol con camisa de lino blanca y gafas de acetato.',
    tags: ['Prada', 'Crochet', 'Verano', 'Resort'],
  },
  {
    id: 'prada-crochet-tote-mytheresa',
    name: 'Crochet Tote Bag Edición Resort (Mytheresa)',
    title: 'Prada | Crochet Tote Bag (Mytheresa)',
    shortTitle: 'Tote Prada Crochet Edición Beige',
    brand: 'Prada · Mytheresa',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: '$2,100 USD',
    priceNum: 2100,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BG/1BG393/2C2TF0018/1BG393_2C2T_F0018_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Edición curada en Mytheresa del icónico tote en crochet beige de Prada. Ligero, luminoso y pensado para días de terraza y costa.',
    affiliateUrl: 'https://go.shopmy.us/p-94490611',
    originalUrl: 'https://www.mytheresa.com/us/en/women/prada-logo-raffia-effect-crochet-tote-bag-beige-p00997471',
    viviNote:
      'Siempre dejo dos enlaces para las piezas más buscadas por si se agota en una boutique antes que en la otra.',
    bullets: [
      'Acabado efecto rafia en tono beige arena',
      'Disponibilidad internacional vía Mytheresa',
      'Silueta amplia para libros, pañuelo de seda y gafas',
    ],
    howSheWearsIt: 'Con pantalón fluido color hueso y sandalias de cuero.',
    tags: ['Prada', 'Mytheresa', 'Crochet', 'Tote'],
  },
  {
    id: 'tory-burch-coleccion-bolsos',
    name: 'Archivo Completo de Bolsos Tory Burch',
    title: 'De Diseñador Para Mujer | Tory Burch',
    shortTitle: 'Selección General de Bolsos Tory Burch',
    brand: 'Tory Burch',
    category: 'bolsos',
    categoryLabel: 'Bolsos & Marroquinería',
    price: 'Desde $298 USD',
    priceNum: 298,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/bolso-tote-perry-angle.TB_169476_001_SLANG.pdp-1200x1200.jpg',
    description:
      'Acceso directo al catálogo completo de marroquinería y bolsos de temporada de Tory Burch curado desde Maison Wolski.',
    affiliateUrl: 'https://go.shopmy.us/p-93720652',
    originalUrl: 'https://www.toryburch.com/es-us/bolsos/ver-todo/',
    viviNote:
      'Si buscas otro color o tamaño dentro de la misma casa, entra por aquí y aplica la misma regla: líneas limpias y piel duradera.',
    bullets: [
      'Catálogo oficial completo de bolsos tote, bandoleras y hombro',
      'Nuevos tonos de temporada en piel granulada y ante',
      'Envío directo desde la boutique oficial',
    ],
    howSheWearsIt: 'Elige siempre colores tierra, negro profundo o burdeos que combinen con el 90% de tu guardarropa.',
    tags: ['Tory Burch', 'Colección', 'Bolsos'],
  },
  {
    id: 'atorie-coyote-parka',
    name: 'Coyote Fur Collar Down Parka',
    title: 'Atorie | Coyote Fur Collar Down Parka',
    shortTitle: 'Parka Térmica de Plumón Atorie',
    brand: 'Atorie',
    category: 'abrigos',
    categoryLabel: 'Abrigos & Parkas',
    price: '$380 USD',
    priceNum: 380,
    currency: 'USD',
    image: 'https://d3sxx0v5qcg9oj.cloudfront.net/cropped-images/20239a79-c80d-4edf-bfd6-a8d77b0fbc14.png',
    description:
      'Parka invernal de alto abrigo rellena de plumón con cuello envolvente y corte arquitectónico que protege del viento helado sin perder compostura.',
    affiliateUrl: 'https://go.shopmy.us/p-97783429',
    originalUrl: 'https://atorie.com/products/coyote-fur-collar-down-parka',
    viviNote:
      'En enero en Milán o Nueva York el frío no se negocia. Esta parka te abriga de verdad por una fracción de las marcas infladas.',
    bullets: [
      'Relleno térmico de alta densidad para temperaturas bajo cero',
      'Tejido exterior repelente al viento y la humedad',
      'Corte entallado que conserva la silueta elegante',
    ],
    howSheWearsIt: 'Sobre punto fino de lana merino y botas altas de cuero.',
    tags: ['Atorie', 'Abrigos', 'Invierno', 'Parka'],
    badge: 'Especial Invierno',
  },
  {
    id: 'atorie-firelady-parka',
    name: 'Firelady Fur Collar Winter Parka',
    title: 'ATORIE - Fireladyfur Fur Collar Parka',
    shortTitle: 'Parka Invernal Cuello Envolvente',
    brand: 'Atorie',
    category: 'abrigos',
    categoryLabel: 'Abrigos & Parkas',
    price: '$410 USD',
    priceNum: 410,
    currency: 'USD',
    image: 'https://d3sxx0v5qcg9oj.cloudfront.net/product-images/1780181678605-luxgqh.jpg',
    description:
      'Segunda versión de la parka de invierno de Atorie con cuello generoso, cierre frontal protegido y bolsillos térmicos forrados.',
    affiliateUrl: 'https://go.shopmy.us/p-97786484',
    originalUrl: 'https://atorie.com/products/fur-collar-parka-10?image=6',
    viviNote:
      'Cuando el termómetro cae, la elegancia consiste en no parecer que estás tiritando. Cálida, sobria y duradera.',
    bullets: [
      'Cuello envolvente de gran volumen que protege rostro y nuca',
      'Herrajes metálicos resistentes y costuras selladas',
      'Largo medio ideal para caminar por ciudad con comodidad',
    ],
    howSheWearsIt: 'Con pantalón recto oscuro y bolso estructurado al hombro.',
    tags: ['Atorie', 'Parka', 'Abrigos', 'Frío Extremo'],
  },
  {
    id: 'era-james-pant',
    name: 'James Pant in Suiting Twill (Mocha)',
    title: 'ERA (INTHIS-ERA.COM) | James Pant in Suiting Twill',
    shortTitle: 'Pantalón Sastre James en Twill Mocha',
    brand: 'ERA',
    category: 'knitwear',
    categoryLabel: 'Punto & Sastrería',
    price: '$245 USD',
    priceNum: 245,
    currency: 'USD',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    description:
      'El pantalón de pinzas definitivo en tono mocha profundo. Caída líquida, tiro medio-alto que alarga la pierna y tejido twill que no se arruga durante el día.',
    affiliateUrl: 'https://go.shopmy.us/p-94489311',
    originalUrl: 'https://inthis-era.com/products/james-pant-in-mocha-lightweight-crepe',
    viviNote:
      'Un buen pantalón sastre en color café moca resuelve la mitad de las mañanas del año. Te viste en treinta segundos.',
    bullets: [
      'Tejido twill de caída fluida que estiliza sin apretar',
      'Pinzas frontales de sastrería clásica y tiro favorecedor',
      'Tono mocha versátil que combina con negro, marfil, mostaza y burdeos',
    ],
    howSheWearsIt: 'Con el suéter de lana mostaza de Tory Burch y mocasines o botas Charlie.',
    tags: ['ERA', 'Sastrería', 'Pantalón', 'Fondo de Armario'],
    badge: 'Base de Armario',
  },
  {
    id: 'skims-cable-zip-hoodie',
    name: 'Sweater Knit Cable Zip Up Hoodie (Fog)',
    title: 'SKIMS | Sweater Knit Cable Zip Up Hoodie',
    shortTitle: 'Chaqueta de Punto Trenzado SKIMS',
    brand: 'SKIMS',
    category: 'knitwear',
    categoryLabel: 'Punto & Sastrería',
    price: '$138 USD',
    priceNum: 138,
    currency: 'USD',
    image: 'https://skims.imgix.net/s/files/1/0259/5448/4284/files/TP-LSL-13391W-FOG-BC-SKIMS-LOUNGEWEAR_0014-FR.webp',
    description:
      'Tejido de punto trenzado suave en tono niebla (Fog) con cierre frontal completo. Pensado para domingos de lectura, vuelos largos o mañanas de trabajo en casa.',
    affiliateUrl: 'https://go.shopmy.us/p-94489353',
    originalUrl: 'https://skims.com/products/sweater-knit-zip-up-hoodie-fog',
    viviNote:
      'Estar en casa haciendo tu Domingo de los Números no es excusa para vestir sin dignidad. Suave, cálido y en el gris niebla perfecto.',
    bullets: [
      'Punto trenzado ultrasuave al tacto en tono gris niebla',
      'Cremallera frontal cómoda para superponer sobre camisetas o camisas',
      'Ideal para vuelos largos o mañanas tranquilas en casa',
    ],
    howSheWearsIt: 'Los domingos por la mañana con una taza de café mientras revisa sus cuentas.',
    tags: ['SKIMS', 'Punto', 'Descanso', 'Viaje'],
  },
  {
    id: 'collar-forget-me-not',
    name: 'Collar de Varias Hebras Forget-Me-Not',
    title: 'Collar de Varias Hebras Forget Me Not: Collares de Diseñador Para Mujer | Tory Burch',
    shortTitle: 'Collar Multi-Hebra Forget-Me-Not',
    brand: 'Tory Burch',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$348 USD',
    priceNum: 348,
    currency: 'USD',
    image:
      'https://s7.toryburch.com/is/image/ToryBurch/style/collar-de-varias-hebras-forget-me-not-front.TB_185345_700_SLFRO.pdp-1200x1200.jpg',
    description:
      'Collar escultórico de múltiples hebras en acabado dorado antiguo que ilumina el cuello sobre camisas blancas o suéteres de cuello redondo.',
    affiliateUrl: 'https://go.shopmy.us/p-93743311',
    originalUrl: 'https://www.toryburch.com/es-us/joyas/collares/collar-de-varias-hebras-forget-me-not/185345.html?color=700',
    viviNote:
      'Una sola joya con carácter vale más que diez baratijas. Este collar levanta cualquier suéter liso al instante.',
    bullets: [
      'Diseño de varias hebras con caída orgánica sobre la clavícula',
      'Acabado en tono oro cálido que favorece todos los tonos de piel',
      'Cierre seguro y regulable para ajustar a distintos escotes',
    ],
    howSheWearsIt: 'Sobre un cuello cisne oscuro o asomando bajo una camisa blanca entreabierta.',
    tags: ['Tory Burch', 'Joyas', 'Collar', 'Oro'],
    badge: 'Toque Maestro',
  },
  {
    id: 'prada-printed-silk-scarf',
    name: 'Printed Silk Twill Scarf (43x43)',
    title: 'Prada | Printed Silk Scarf',
    shortTitle: 'Pañuelo Prada en Seda Twill Estampada',
    brand: 'Prada',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$320 USD',
    priceNum: 320,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1FF/1FF078/2ZVLF0964/1FF078_2ZVL_F0964_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Foulard en pura seda twill italiana estampada. El sello inconfundible de Vivienne para anudar al cuello, en el cabello o en el asa del bolso.',
    affiliateUrl: 'https://go.shopmy.us/p-97788006',
    originalUrl: 'https://www.prada.com/us/en/p/printed-silk-twill-scarf-43-x-43/1FF078_2ZVL_F0964_V_OOO',
    viviNote:
      'Nunca salgo de casa sin un pañuelo de seda en el cuello. Protege la voz, enmarca el rostro y dice quién eres sin abrir la boca.',
    bullets: [
      '100% seda twill italiana de bordes enrollados',
      'Estampado gráfico de archivo en tonos cálidos',
      'Tamaño versátil para cuello, muñeca o asa de bolso',
    ],
    howSheWearsIt: 'Anudado corto al cuello bajo el suéter de lana o la gabardina.',
    tags: ['Prada', 'Seda', 'Pañuelo', 'Firma Vivienne'],
    badge: 'Sello de Vivienne',
    isHeroLook: true,
  },
  {
    id: 'prada-sunglasses-b15s',
    name: 'PR B15S Sunglasses con Placa Metálica',
    title: 'Prada | PR B15S Sunglasses',
    shortTitle: 'Gafas de Sol Prada PR B15S',
    brand: 'Prada',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$515 USD',
    priceNum: 515,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB15/F29CFE05Z/SPRB15_F29C_FE05Z_C_051_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Gafas de sol de acetato esculpido en carey cálido con la placa metálica icónica en las varillas y protección UV total.',
    affiliateUrl: 'https://go.shopmy.us/p-97787615',
    originalUrl: 'https://prada.com/us/en/p/prada-sunglasses-with-the-iconic-metal-plaque/SPRB15_F29C_FE05Z_C_051',
    viviNote:
      'Unas buenas gafas de carey son el mejor filtro de privacidad cuando una quiere tomarse su espresso en paz.',
    bullets: [
      'Armazón de acetato italiano en carey miel y habana',
      'Varillas anchas con la placa metálica histórica de la maison',
      'Cristales con protección 100% UVA/UVB',
    ],
    howSheWearsIt: 'Con pañuelo de seda al cuello y labios hidratados.',
    tags: ['Prada', 'Gafas de Sol', 'Carey', 'Accesorios'],
  },
  {
    id: 'prada-paradoxe-edp',
    name: 'Paradoxe Eau de Parfum',
    title: 'Prada | Paradoxe Eau de Parfum',
    shortTitle: 'Perfume Prada Paradoxe EDP',
    brand: 'Prada',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$97 USD',
    priceNum: 97,
    currency: 'USD',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1A1/1A1351/2HDZF0Z99/1A1351_2HDZ_F0Z99_P_ML030_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    description:
      'Fragancia floral ambarina con notas de neroli recién brotado, acorde de ámbar cálido y almizcle blanco en el frasco triangular recargable de Prada.',
    affiliateUrl: 'https://go.shopmy.us/p-94490540',
    originalUrl: 'https://www.prada.com/us/en/p/paradoxe-edp-30-ml/1A1351_2HDZ_F0Z99_P_ML030',
    viviNote:
      'El perfume no debe inundar la habitación antes de que llegues; debe quedarse en la memoria cuando ya te fuiste.',
    bullets: [
      'Notas luminosas de neroli, jazmín y fondo cálido de ámbar',
      'Formato de 30 ml ideal para llevar en el bolso',
      'Frasco triangular icónico diseñado para perdurar',
    ],
    howSheWearsIt: 'Dos toques detrás de las orejas y uno sobre la muñeca antes de salir.',
    tags: ['Prada', 'Perfume', 'Belleza', 'Fragancia'],
  },
  {
    id: 'make-cream-blush-stick',
    name: 'Cream Stroke Cream Blush Stick',
    title: 'MAKE | Cream Stroke Cream Blush Stick',
    shortTitle: 'Rubor en Barra Hidratante MAKE',
    brand: 'MAKE Beauty',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$30 USD',
    priceNum: 30,
    currency: 'USD',
    image: '/images/vivianne-wolski-hero.jpg',
    description:
      'Rubor en crema de acabado natural y nutritivo que se funde con la piel en segundos para dar ese aspecto descansado de caminata matutina.',
    affiliateUrl: 'https://go.shopmy.us/p-94486578',
    originalUrl: 'https://makebeauty.com/products/cream-stroke-cream-blush-stick',
    viviNote:
      'Nada de polvos pesados que marcan las líneas. Un toque en crema sobre los pómulos devuelve la frescura en diez segundos.',
    bullets: [
      'Textura cremosa hidratante que no reseca la piel madura ni joven',
      'Formato en barra práctico para retocar sin brochas',
      'Acabado luminoso de piel sana y descansada',
    ],
    howSheWearsIt: 'Difuminado con la yema de los dedos cada mañana.',
    tags: ['MAKE', 'Belleza', 'Piel Luminosa'],
  },
  {
    id: 'ritual-multivitamin-women',
    name: 'Essential for Women Multivitamin 18+',
    title: 'RITUAL | Multivitamin 18+',
    shortTitle: 'Multivitamínico Esencial Ritual',
    brand: 'Ritual',
    category: 'accesorios',
    categoryLabel: 'Joyas, Seda & Belleza',
    price: '$33 USD',
    priceNum: 33,
    currency: 'USD',
    image: '/images/vivianne-wolski-hero.jpg',
    description:
      'Fórmula limpia y trazable con 9 nutrientes esenciales (Vitamina D3, Omega-3 DHA, B12, Hierro y Magnesio) en cápsulas de liberación retardada con toque de menta.',
    affiliateUrl: 'https://go.shopmy.us/p-94489251',
    originalUrl: 'https://ritual.com/products/essential-for-women-multivitamin',
    viviNote:
      'La primera inversión financiera es tu propia energía, cariño. Sin salud no hay tiempo que disfrutar.',
    bullets: [
      'Ingredientes 100% trazables sin rellenos artificiales',
      'Cápsula de liberación lenta suave para el estómago',
      'Hábito diario de dos cápsulas junto con el vaso de agua matutino',
    ],
    howSheWearsIt: 'Cada mañana antes del primer espresso del día.',
    tags: ['Ritual', 'Bienestar', 'Hábito Diario'],
  },
];

export const VIVIANNE_CATEGORIES = [
  { id: 'all', label: 'Toda la Maison', count: VIVIANNE_PRODUCTS.length },
  {
    id: 'bolsos',
    label: 'Bolsos & Marroquinería',
    count: VIVIANNE_PRODUCTS.filter((p) => p.category === 'bolsos').length,
  },
  {
    id: 'knitwear',
    label: 'Punto & Sastrería',
    count: VIVIANNE_PRODUCTS.filter((p) => p.category === 'knitwear').length,
  },
  {
    id: 'abrigos',
    label: 'Abrigos & Parkas',
    count: VIVIANNE_PRODUCTS.filter((p) => p.category === 'abrigos').length,
  },
  {
    id: 'calzado',
    label: 'Calzado & Botas',
    count: VIVIANNE_PRODUCTS.filter((p) => p.category === 'calzado').length,
  },
  {
    id: 'accesorios',
    label: 'Joyas, Seda & Belleza',
    count: VIVIANNE_PRODUCTS.filter((p) => p.category === 'accesorios').length,
  },
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
    name: 'Look 01: La Firma de Maison Wolski',
    tagline: 'Presencia sin estridencias',
    description:
      'El suéter de lana mostaza combinado con el pañuelo de seda Prada al cuello y el bolso Perry Tote en piel negra. La silueta insignia de Vivienne.',
    image: '/images/vivianne-wolski-hero.jpg',
    productIds: ['sueter-lana-cuello-redondo', 'perry-tote-black', 'prada-printed-silk-scarf'],
  },
  {
    id: 'look-milan',
    name: 'Look 02: Criterio en Milán',
    tagline: 'Arquitectura y piel cepillada',
    description:
      'Gabardina clásica de lana sobre el pantalón sastre James en tono mocha, acompañada del bolso Prada Cleo y las gafas de carey.',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    productIds: ['gabardina-lana-clasica', 'prada-cleo-small-leather', 'era-james-pant', 'prada-sunglasses-b15s'],
  },
  {
    id: 'look-invierno',
    name: 'Look 03: Invierno de Inversión',
    tagline: 'Texturas nobles y abrigo real',
    description:
      'Suéter Fair Isle o parka térmica Atorie junto con las botas ecuestres Charlie hasta la rodilla y el bolso Prada Bonnie en ante tabaco.',
    image: 'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-fair-isle-front.TB_183785_243_SLFRO.pdp-1200x1200.jpg',
    productIds: ['sueter-fair-isle', 'botas-altas-charlie', 'prada-bonnie-small-suede', 'atorie-coyote-parka'],
  },
];

export const WOLSKI_CLUB = {
  title: 'El Wolski Club · El Domingo de los Números',
  badge: 'CÍRCULO PRIVADO · FORMACIÓN EN AUDIOS',
  subtitle: 'Carácter, finanzas y estilo en su oído',
  price: '9',
  priceFormatted: '$9 USD',
  description:
    'El carácter, las finanzas y el estilo no se improvisan: se entrenan. En el Wolski Club le entrego formaciones en audio, directas y sin rodeos, para dominar sus cuentas cada domingo, vestir con criterio propio y sostener una presencia inquebrantable. Sin ruido ni promesas vacías: rigor y elegancia.',
  pillars: [
    {
      title: 'El Carácter',
      desc: 'Templanza, criterio propio y la serenidad de quien no necesita validación externa.',
    },
    {
      title: 'Las Finanzas',
      desc: 'El Domingo de los Números: una hora semanal para saber con exactitud adónde va cada peso.',
    },
    {
      title: 'El Estilo',
      desc: 'Aprender a vestir con intención, siluetas que perduran y prendas de inversión.',
    },
  ],
  label: 'Formación en audio y contenido educativo, no es asesoría financiera.',
  buttonText: 'Unirme al Wolski Club',
  link: 'https://thesilentstudiomk.gumroad.com/l/ltfbhx',
  companionLink: '/domingo',
  companionButtonText: 'Abrir Compañero Interactivo',
};

export const DOMINGO_DE_LOS_NUMEROS = WOLSKI_CLUB;
