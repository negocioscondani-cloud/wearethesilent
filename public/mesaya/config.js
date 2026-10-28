/* =========================================================
   MesaYa · Configuración del restaurante
   Edita este archivo para cada restaurante. Es lo único que
   cambia entre un cliente y otro.
   ========================================================= */
window.MESAYA = {

  /* --- Firebase ---------------------------------------------
     Déjalo en null para usar el MODO DEMO (todo funciona en un
     mismo navegador, sin servidor). Para producción pega aquí el
     bloque firebaseConfig de tu proyecto (ver README.md).      */
  firebase: null,
  // firebase: {
  //   apiKey: "...",
  //   authDomain: "...firebaseapp.com",
  //   projectId: "...",
  //   storageBucket: "...appspot.com",
  //   messagingSenderId: "...",
  //   appId: "..."
  // },

  /* Correos que pueden entrar a los paneles (modo Firebase).
     Deben coincidir con los de firestore.rules.               */
  staffEmails: ["salon@sodalaceiba.com"],
  ownerEmails: ["dueno@sodalaceiba.com"],

  /* PIN de los paneles en modo demo (en Firebase se usa correo y contraseña) */
  demoStaffPin: "1234",
  demoOwnerPin: "4321",

  /* Texto secreto para generar la clave de cada QR de mesa.
     Cámbialo por restaurante y vuelve a imprimir los QR.      */
  tableSalt: "ceiba-2026-cambiame",

  restaurant: {
    id: "soda-la-ceiba",
    name: "Soda La Ceiba",
    tagline: "Comida tica de siempre, hecha al momento",
    address: "Escazú centro, 100 m norte de la iglesia",
    phone: "2222-0000",
    instagram: "sodalaceiba",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Soda+La+Ceiba+Escazu",
    lat: 9.9187,
    lng: -84.1397,
    radiusM: 150,            // distancia máxima para considerar que el cliente está en el local
    tables: 12,
    wifi: { name: "LaCeiba_Clientes", pass: "gallopinto2026" },
    sinpe: { number: "8888-1234", name: "Soda La Ceiba S.A." },
    hours: [
      { label: "Lunes a viernes", days: [1, 2, 3, 4, 5], open: "07:00", close: "21:00" },
      { label: "Sábado y domingo", days: [0, 6], open: "08:00", close: "22:00" }
    ]
  },

  rules: {
    requireLocation: "soft",  // "soft": sin permiso de ubicación deja pedir pero avisa al salón · "strict": lo bloquea
    sessionHours: 3,          // la visita vence a las X horas de escanear el QR
    colonesPerPoint: 1000,    // 1 punto por cada ₡1.000 de consumo
    scratchPrizes: [          // premios del Raspa y Gana (puntos extra) y su probabilidad
      { pts: 0, weight: 30 }, { pts: 5, weight: 35 }, { pts: 10, weight: 25 }, { pts: 20, weight: 10 }
    ],
    triviaBonus: 5
  },

  rewards: [
    { id: "cafe", img: "img/cafe.jpg",   name: "Café chorreado",     pts: 40,  g: ["#3B2316", "#8A5A3A"] },
    { id: "fresco", img: "img/cas.jpg", name: "Fresco natural",     pts: 50,  g: ["#E3C24A", "#F7EBA5"] },
    { id: "postre", img: "img/tresl.jpg", name: "Tres leches",        pts: 80,  g: ["#F1E3C8", "#D7B98A"] },
    { id: "casado", img: "img/casado.jpg", name: "Casado a elección",  pts: 200, g: ["#8B5A2B", "#3F7D3A"] }
  ],

  categories: [
    { id: "desayunos", name: "Desayunos" },
    { id: "platos",    name: "Casados y platos fuertes" },
    { id: "bocas",     name: "Bocas" },
    { id: "bebidas",   name: "Bebidas" },
    { id: "postres",   name: "Postres" }
  ],

  /* img: deja "" para usar el degradado, o pon la ruta/URL de la foto o un .mp4 (ej. "img/gallo-pinto.jpg") */
  menu: [
    { id: "gallo",    cat: "desayunos", name: "Gallo pinto completo", desc: "Huevos al gusto, natilla, plátano maduro, queso frito y tortilla", price: 3900, popular: true,  tags: ["Clásico"], img: "img/gallo.jpg", g: ["#7A4B2A", "#E3B04B"] },
    { id: "aliñada",  cat: "desayunos", name: "Tortilla aliñada",     desc: "Tortilla de maíz con queso Turrialba y natilla",                    price: 2500, popular: false, tags: ["Vegetariano"], img: "img/alinada.jpg", g: ["#C9A35B", "#F3E2B3"] },
    { id: "pancakes", cat: "desayunos", name: "Pancakes con frutas",  desc: "Tres pancakes, miel de caña y frutas de temporada",                 price: 3200, popular: false, tags: [], img: "img/pancakes.jpg", g: ["#D98E4B", "#F6D7A7"] },

    { id: "casado",   cat: "platos", name: "Casado de pollo",      desc: "Arroz, frijoles, ensalada, maduro, picadillo y pollo en salsa",   price: 4800, popular: true,  tags: ["Más pedido"], img: "img/casado.jpg", g: ["#8B5A2B", "#3F7D3A"] },
    { id: "casadoc",  cat: "platos", name: "Casado de bistec",     desc: "Bistec encebollado con todos los acompañamientos",                 price: 5400, popular: false, tags: [], img: "img/casadoc.jpg", g: ["#5E2E1A", "#A8743F"] },
    { id: "arrozcam", cat: "platos", name: "Arroz con camarones",  desc: "Arroz de la casa con camarones, papas y ensalada",                  price: 6500, popular: true,  tags: [], img: "img/arrozcam.jpg", g: ["#E2833D", "#F6D27A"] },
    { id: "olla",     cat: "platos", name: "Olla de carne",        desc: "Sopa de res con yuca, chayote, elote y tiquisque",                 price: 5200, popular: false, tags: ["Solo fines de semana"], img: "img/olla.jpg", g: ["#9C5B2E", "#D9A15B"] },

    { id: "chifrijo", cat: "bocas", name: "Chifrijo",              desc: "Chicharrón, frijoles tiernos, pico de gallo y aguacate",          price: 4200, popular: true,  tags: ["Más pedido"], img: "img/chifrijo.jpg", g: ["#6A3A1E", "#9BC25A"] },
    { id: "patacones",cat: "bocas", name: "Patacones con frijoles molidos", desc: "Con pico de gallo y queso rallado",                  price: 3100, popular: false, tags: ["Vegetariano"], img: "img/patacones.jpg", g: ["#C99A2E", "#F0D78C"] },
    { id: "ceviche",  cat: "bocas", name: "Ceviche de pescado",    desc: "Corvina, limón mandarina, culantro y galletas",                    price: 3800, popular: false, tags: [], img: "img/ceviche.jpg", g: ["#E8E2C4", "#9CC9B8"] },

    { id: "cas",      cat: "bebidas", name: "Fresco de cas",       desc: "Natural, en agua o en leche",                                       price: 1500, popular: true,  tags: [], img: "img/cas.jpg", g: ["#E3C24A", "#F7EBA5"] },
    { id: "cafe",     cat: "bebidas", name: "Café chorreado",      desc: "Grano de Tarrazú, chorreado en bolsita",                            price: 1300, popular: false, tags: [], img: "img/cafe.jpg", g: ["#3B2316", "#8A5A3A"] },
    { id: "agua",     cat: "bebidas", name: "Agua de pipa",        desc: "Pipa fría servida entera",                                          price: 1800, popular: false, tags: [], img: "img/agua.jpg", g: ["#7FB069", "#D9EBC0"] },
    { id: "horchata", cat: "bebidas", name: "Horchata",            desc: "De arroz con canela",                                               price: 1500, popular: false, tags: [], img: "img/horchata.jpg", g: ["#E9DCC4", "#C7AE88"] },

    { id: "tresl",    cat: "postres", name: "Tres leches",         desc: "Porción de la casa",                                                price: 2200, popular: true,  tags: [], img: "img/tresl.jpg", g: ["#F1E3C8", "#D7B98A"] },
    { id: "arrozleche",cat:"postres", name: "Arroz con leche",     desc: "Con canela y pasas",                                                price: 1800, popular: false, tags: [], img: "img/arrozleche.jpg", g: ["#F3EBDD", "#CBB38E"] }
  ],

  trivia: [
    { q: "¿Qué lleva un casado tradicional?", a: ["Arroz, frijoles, ensalada, maduro y una proteína", "Solo arroz con pollo", "Tortilla con queso y natilla"], ok: 0 },
    { q: "El cas del fresco de cas es…", a: ["Una variedad de mango", "Una fruta ácida pariente de la guayaba", "Un tipo de piña"], ok: 1 },
    { q: "¿Qué es un chifrijo?", a: ["Un postre de coco", "Una sopa de mariscos", "Chicharrón con frijoles, pico de gallo y aguacate"], ok: 2 }
  ]
};
