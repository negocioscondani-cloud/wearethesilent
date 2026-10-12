export interface VivianneProduct {
  id: string;
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
  badge?: string;
  isHeroLook?: boolean;
  details?: string[];
}

export const VIVIANNE_PRODUCTS: VivianneProduct[] = [
  {
    id: 'perry-tote-black',
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
    badge: 'El Favorito de Vivianne',
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
  { id: 'all', label: 'Todo el Clóset', count: 8 },
  { id: 'bolsos', label: 'Bolsos & Carteras', count: 3 },
  { id: 'knitwear', label: 'Prendas de Punto', count: 3 },
  { id: 'abrigos', label: 'Abrigos & Sastrería', count: 1 },
  { id: 'calzado', label: 'Calzado & Botas', count: 1 }
] as const;
