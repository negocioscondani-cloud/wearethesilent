'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Headphones,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { VIVIANNE_PRODUCTS } from '@/data/vivianne-products';
import { getFirebase } from '@/lib/firebase-client';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

interface ViviArticle {
  id: string;
  number: string;
  category: 'Dinero & Libertad' | 'Maison Wolski & Estilo' | 'Carácter & Criterio';
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  image: string;
  quote: string;
  paragraphs: string[];
  relatedProductIds: string[];
  relatedAudioEp: string;
}

const VIVI_ARTICLES: ViviArticle[] = [
  {
    id: 'bolso-caro-vs-libertad',
    number: 'Crónica 01',
    category: 'Dinero & Libertad',
    title: 'Por qué un bolso caro no te da libertad (pero el orden sí)',
    subtitle:
      'La diferencia entre comprar para que otros miren y elegir piezas que acompañen una vida con las cuentas en paz.',
    readTime: '3 min',
    date: 'Noviembre 2026',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BC/1BC499/ZO6F0002/1BC499_ZO6_F0002_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    quote:
      'Lo que ves en vitrina muchas veces es deuda con buen maquillaje. La verdadera elegancia es dormir sin deberle explicaciones al banco.',
    paragraphs: [
      'Hola, cariño. Te voy a decir algo que aprendí después de muchas décadas observando salones en París y Milán: la gente que realmente tiene patrimonio casi nunca grita con lo que lleva puesto. Confundir riqueza con lujo ruidoso es una de las trampas más caras de nuestra época.',
      'El dinero no sirve para presumir ante desconocidos en un semáforo. El dinero sirve para comprar tiempo. Tiempo para dormir tranquila un domingo por la noche, tiempo para tu familia y, sobre todo, tiempo para poder decir que no cuando algo no va con tus principios.',
      '¿Significa eso que no debas disfrutar de una buena prenda de lana o de un bolso de piel impecable? Todo lo contrario. En Maison Wolski selecciono piezas que duran veinte años, pero solo tienen sentido cuando primero construiste tu colchón de tranquilidad y tu dinero ya está trabajando para ti.',
    ],
    relatedProductIds: ['prada-cleo-small-leather', 'perry-tote-black', 'atorie-lazy-retro-bag'],
    relatedAudioEp: 'Ep. 01 · Mentalidad y Ep. 06 · Compras trampa',
  },
  {
    id: 'regla-25-15-50-10-disfrutar-sin-culpa',
    number: 'Crónica 02',
    category: 'Dinero & Libertad',
    title: 'La Regla 25-15-50-10 y el arte de gastar tu 10% sin culpa',
    subtitle:
      'Cuatro números sencillos para que tu ingreso deje de evaporarse y cada gusto que te des esté respaldado por tu plan.',
    readTime: '3 min',
    date: 'Noviembre 2026',
    image:
      'https://s7.toryburch.com/is/image/ToryBurch/style/su%C3%A9ter-de-lana-front.TB_189693_543_SLFRO.pdp-1200x1200.jpg',
    quote:
      'Un dinero que gastas en lo que te da alegría, cuando tus cuentas ya están cubiertas, no es un pecado: es parte del sistema.',
    paragraphs: [
      'Muchas mujeres me escriben sintiendo culpa cada vez que se compran un suéter hermoso o salen a cenar. Cariño, la culpa financiera no aparece por gastar; aparece por gastar a ciegas, sin saber si estás comprometiendo tu futuro.',
      'Por eso uso la regla 25-15-50-10 cada vez que entra dinero. El 25% va directo a crecer (tu inversión a largo plazo). El 15% construye tu colchón de estabilidad hasta completar entre 3 y 6 meses de gastos esenciales. El 50% cubre lo indispensable para vivir con dignidad. Y el 10% restante es tuyo, para disfrutar sin pedir perdón.',
      'Si ganas $2,000 al mes, ya sabes que $500 construyen tu libertad, $300 blindan tu paz, $1,000 sostienen tu casa y $200 son para ese pañuelo de seda o esa tarde que te regala alegría.',
    ],
    relatedProductIds: ['sueter-lana-cuello-redondo', 'prada-printed-silk-scarf', 'collar-forget-me-not'],
    relatedAudioEp: 'Ep. 02 · La regla 25-15-50-10',
  },
  {
    id: 'uniforme-otono-milan-maison-wolski',
    number: 'Crónica 03',
    category: 'Maison Wolski & Estilo',
    title: 'Mi uniforme de otoño en Milán: 5 piezas que resuelven diez años',
    subtitle:
      'Por qué comprar menos pero mejor ahorra dinero, despeja la mente cada mañana y proyecta presencia inmediata.',
    readTime: '4 min',
    date: 'Noviembre 2026',
    image:
      'https://s7.toryburch.com/is/image/ToryBurch/style/gabardina-de-lana-front.TB_168010_201_SLFRO.pdp-1200x1200.jpg',
    quote:
      'A los 82 años una ya no tiene tiempo para comprar dos veces la misma tontería. Se elige con rigor y se deja que la pieza hable.',
    paragraphs: [
      'Un armario lleno de ropa barata que no te sienta bien es una fuga financiera silenciosa. Compras por impulso, lo usas dos veces y a los tres meses vuelves a sentir que no tienes qué ponerte.',
      'Mi regla en Maison Wolski es armar un uniforme de piezas nobles que se conozcan entre sí: una buena gabardina de mezcla de lana que caiga con peso propio, un pantalón sastre en tono mocha que no se arrugue, unas botas ecuestres de cuero hasta la rodilla con tacón cómodo para caminar horas, y un bolso estructurado donde quepa tu día entero.',
      'Cuando inviertes en corte y material —lana virgen, cuero cepillado, seda twill—, dejas de perseguir tendencias semanales y tu costo por uso cae a centavos.',
    ],
    relatedProductIds: ['gabardina-lana-clasica', 'botas-altas-charlie', 'era-james-pant', 'prada-bonnie-small-suede'],
    relatedAudioEp: 'Ep. 06 · Compras trampa',
  },
  {
    id: 'los-primeros-100-mil-y-la-paciencia',
    number: 'Crónica 04',
    category: 'Carácter & Criterio',
    title: 'La travesía hacia tus primeros $100,000 (y por qué vale cada paso)',
    subtitle:
      'El tramo donde casi todos se cansan justo antes de que el interés compuesto empiece a empujar a tu favor.',
    readTime: '3 min',
    date: 'Noviembre 2026',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2FPTF0009/1BA426_2FPT_F0009_V_OTM_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    quote:
      'Tus primeros diez mil dependen de tu disciplina. Después de los cien mil, tu dinero empieza a trabajar más rápido que tus manos.',
    paragraphs: [
      'Nadie te advierte lo solitaria que se siente la primera etapa del ahorro. Cuando estás juntando tus primeros $10,000, todo depende de tu esfuerzo directo. Y el camino hacia los primeros $100,000 exige carácter porque sientes que avanzas despacio.',
      'Pero mira lo que ocurre cuando cruzas esa frontera: al 7% anual histórico de referencia, $100,000 generan alrededor de $7,000 en un año sin que tengas que vender más horas de tu vida. Y al año siguiente, esos $7,000 también producen rendimiento.',
      '¿El secreto para no quemarte en el camino? Automatizar tus aportes el mismo día que cobras, celebrar metas intermedias y jamás compararte con el ritmo ajeno.',
    ],
    relatedProductIds: ['prada-bonnie-medium-suede', 'sueter-fair-isle', 'prada-sunglasses-b15s'],
    relatedAudioEp: 'Ep. 04 · Los primeros $10,000 y $100,000',
  },
  {
    id: 'liquidar-deuda-cara-mejor-negocio',
    number: 'Crónica 05',
    category: 'Dinero & Libertad',
    title: 'Liquidar una tarjeta al 24% es la inversión más elegante del año',
    subtitle:
      'Antes de buscar inversiones sofisticadas, cierra el grifo por donde se escapan tus intereses cada mes.',
    readTime: '3 min',
    date: 'Noviembre 2026',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1MF/1MF048/2CLQF0135/1MF048_2CLQ_F0135_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg',
    quote:
      'Ningún mercado del mundo te garantiza un 24% libre de riesgo. Pagar tu tarjeta cara sí te lo garantiza hoy mismo.',
    paragraphs: [
      'A veces me preguntan en qué invertir cuando al mismo tiempo cargan una tarjeta de crédito al 24% anual. Cariño, hagamos la cuenta con calma: deber $5,000 al 24% significa regalar unos $1,200 al año por nada.',
      'Hay deuda que construye —como una herramienta o negocio que te devuelve más de lo que cuesta— y deuda que destruye. La pregunta para distinguirlas cabe en una línea: lo que compré con esta deuda, ¿me devuelve dinero o me lo quita?',
      'Pon en una hoja todas tus deudas ordenadas por tasa de interés, ataca primero la más alta y verás cómo vuelve el aire a tus finanzas.',
    ],
    relatedProductIds: ['prada-saffiano-envelope-clutch', 'skims-cable-zip-hoodie', 'ritual-multivitamin-women'],
    relatedAudioEp: 'Ep. 03 · Deuda que destruye, deuda que construye',
  },
  {
    id: 'la-regla-del-25-numero-de-libertad',
    number: 'Crónica 06',
    category: 'Carácter & Criterio',
    title: 'La Regla del 25: cómo calcular tu cifra de libertad en una servilleta',
    subtitle:
      'Cuánto necesitas realmente para que tu patrimonio pague tus gastos anuales y por qué vivir con sobriedad acelera el reloj.',
    readTime: '3 min',
    date: 'Noviembre 2026',
    image:
      'https://www.prada.com/content/dam/pradabkg_products/1/1BG/1BG644/2G6RF0K74/1BG644_2G6R_F0K74_V_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1200.1200.jpg',
    quote:
      'Cada mil dólares que recortas de gastos superfluos al año reduce tu meta de libertad financiera en veinticinco mil.',
    paragraphs: [
      'La pregunta más hermosa de las finanzas no es cuánto ganas hoy, sino cuánto necesitas para ser dueña de tu tiempo. La fórmula se conoce como la Regla del 25: toma tus gastos anuales y multiplícalos por 25.',
      'Si vives plena y serenamente con $30,000 al año, tu cifra de libertad es $750,000, porque retirando una guía del 4% anual cubres exactamente tus $30,000.',
      'Y aquí está la magia del criterio: cuando eliminas gastos vacíos que ni siquiera te daban felicidad, ganas por partida doble. Ahorras más rápido cada mes y necesitas un patrimonio menor para ser libre.',
    ],
    relatedProductIds: ['prada-route-large-tote', 'atorie-coyote-parka', 'prada-paradoxe-edp'],
    relatedAudioEp: 'Ep. 10 · La regla del 25',
  },
];

export default function DiarioViviPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<ViviArticle>(VIVI_ARTICLES[0]);

  // Embedded waitlist capture state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filteredArticles =
    selectedCategory === 'all'
      ? VIVI_ARTICLES
      : VIVI_ARTICLES.filter((a) => a.category === selectedCategory);

  const relatedProducts = VIVIANNE_PRODUCTS.filter((p) =>
    activeArticle.relatedProductIds.includes(p.id)
  );

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanName || !cleanEmail) return;

    setIsSubmitting(true);
    const nowIso = new Date().toISOString();
    const docId = cleanEmail.replace(/[^a-z0-9@._-]/g, '_');

    try {
      // 1. Guardar en respaldo local compartido con /audios
      try {
        const raw = localStorage.getItem('vivienne_waitlist_all_leads_v1');
        const list = raw ? JSON.parse(raw) : [];
        const filtered = Array.isArray(list)
          ? list.filter((x: { email?: string }) => x.email?.toLowerCase() !== cleanEmail)
          : [];
        filtered.unshift({
          id: docId,
          name: cleanName,
          email: cleanEmail,
          favoriteEp: activeArticle.relatedAudioEp,
          createdAtIso: nowIso,
        });
        localStorage.setItem('vivienne_waitlist_all_leads_v1', JSON.stringify(filtered));
      } catch {
        // ignore
      }

      // 2. Guardar en Firebase Authentication + Firestore vía /api/vivienne-waitlist
      await fetch('/api/vivienne-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          favoriteEp: activeArticle.relatedAudioEp,
          source: `wearethesilent.com/diario (${activeArticle.id})`,
        }),
      }).catch(() => {});

      // 3. Intento silencioso en Firestore cliente
      try {
        const { firestore } = getFirebase();
        if (firestore) {
          const payload = {
            name: cleanName,
            email: cleanEmail,
            favoriteEp: activeArticle.relatedAudioEp,
            series: 'El Blog de Vivi + Lista de Espera Audios',
            source: `wearethesilent.com/diario (${activeArticle.id})`,
            createdAtIso: nowIso,
            updatedAt: serverTimestamp(),
          };
          await setDoc(doc(firestore, 'vivienne_waitlist', docId), payload, { merge: true }).catch(
            () => {}
          );
          await setDoc(
            doc(firestore, 'restaurants', 'vivienne-wolski', 'customers', docId),
            payload,
            { merge: true }
          ).catch(() => {});
        }
      } catch {
        // ignore
      }

      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between selection:bg-[#6B1F2A] selection:text-[#F7F1E6]">
      {/* Sticky Editorial Header */}
      <header className="sticky top-0 z-40 bg-[#F7F1E6]/95 backdrop-blur-md border-b border-[#D8CBB8]/70 px-5 sm:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#6B1F2A]" />
          <span>Vivienne</span>
        </Link>

        <span className="font-headline text-sm sm:text-base tracking-[0.28em] uppercase text-[#2B1D14]">
          El Blog de Vivi · Crónicas de Wolski
        </span>

        <div className="flex items-center gap-3">
          <Link
            href="/vivianne-wolski/armario"
            className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-[#5C4A3E] hover:text-[#6B1F2A] transition"
          >
            Maison Wolski
          </Link>
          <Link
            href="/audios"
            className="text-[10px] font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#6B1F2A] text-[#F7F1E6] hover:bg-[#2B1D14] transition"
          >
            Audios Semanales
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-5 sm:px-8 py-12 sm:py-16 space-y-14">
        {/* Blog Masthead */}
        <section className="text-center max-w-3xl mx-auto space-y-3 border-b border-[#D8CBB8] pb-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.28em] text-[#6B1F2A]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Archivo Editorial · París & Milán</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl text-[#2B1D14] tracking-tight">
            El Blog de <span className="italic font-light text-[#6B1F2A]">Vivi</span>
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#5C4A3E]">
            &ldquo;Notas sobre dinero que compra tiempo, piezas que duran décadas y la serenidad de tener tus cuentas en orden.&rdquo;
          </p>

          {/* Category Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {['all', 'Dinero & Libertad', 'Maison Wolski & Estilo', 'Carácter & Criterio'].map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.18em] transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#2B1D14] text-[#F7F1E6]'
                      : 'bg-[#FAF5EC] border border-[#D8CBB8] text-[#5C4A3E] hover:border-[#2B1D14]'
                  }`}
                >
                  {cat === 'all' ? 'Todas las Crónicas' : cat}
                </button>
              )
            )}
          </div>
        </section>

        {/* Active Featured Article Reader */}
        <section
          id="lector-cronica"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FAF5EC] border border-[#D8CBB8] rounded-2xl p-6 sm:p-10 shadow-sm"
        >
          {/* Article Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
              <span>{activeArticle.number}</span>
              <span>·</span>
              <span>{activeArticle.category}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 text-[#8A7665]">
                <Clock className="w-3 h-3" /> {activeArticle.readTime}
              </span>
            </div>

            <h2 className="font-headline text-2xl sm:text-4xl text-[#2B1D14] leading-tight">
              {activeArticle.title}
            </h2>

            <p className="text-sm sm:text-base text-[#5C4A3E] font-medium leading-relaxed">
              {activeArticle.subtitle}
            </p>

            <blockquote className="border-l-2 border-[#6B1F2A] pl-4 py-1 bg-[#F7F1E6] rounded-r-lg">
              <p className="font-serif italic text-sm sm:text-base text-[#6B1F2A]">
                &ldquo;{activeArticle.quote}&rdquo;
              </p>
            </blockquote>

            <div className="space-y-4 text-sm sm:text-[15px] text-[#2B1D14] leading-relaxed">
              {activeArticle.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#D8CBB8]/70 text-xs text-[#8A7665]">
              <span className="font-serif italic text-base text-[#6B1F2A]">— Vivienne Wolski</span>
              <Link
                href="/audios"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A]"
              >
                <Headphones className="w-3.5 h-3.5 text-[#6B1F2A]" />
                <span>Relacionado con {activeArticle.relatedAudioEp} →</span>
              </Link>
            </div>
          </div>

          {/* Right Sidebar: Related Maison Wolski Pieces + Waitlist Capture */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#B08D57] font-semibold">
                  Piezas de Maison Wolski en esta crónica
                </span>
                <Link
                  href="/vivianne-wolski/armario"
                  className="text-[10px] font-mono uppercase tracking-wider text-[#6B1F2A] hover:underline"
                >
                  Ver toda la Maison →
                </Link>
              </div>

              <div className="space-y-3">
                {relatedProducts.map((prod) => (
                  <a
                    key={prod.id}
                    href={prod.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group flex items-center gap-3.5 p-3 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] hover:border-[#6B1F2A] transition"
                  >
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-[#EFE6D5] shrink-0">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-[#8A7665]">
                        {prod.brand}
                      </p>
                      <h4 className="font-headline text-sm text-[#2B1D14] group-hover:text-[#6B1F2A] truncate">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-mono font-bold text-[#6B1F2A] mt-0.5">
                        {prod.price}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#8A7665] group-hover:text-[#6B1F2A] shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mini Waitlist Box inside the Blog */}
            <div className="p-5 rounded-xl bg-[#F7F1E6] border border-[#B08D57]/50 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
                <Sparkles className="w-3 h-3" />
                <span>Audios Semanales · Lista de Espera</span>
              </div>
              <h3 className="font-headline text-lg text-[#2B1D14]">
                Recibe los audios y crónicas de Vivienne en tu correo
              </h3>

              {submitted ? (
                <div className="flex items-start gap-2 text-xs text-[#6B1F2A] font-medium py-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>¡Anotada en la lista privada! Te acabamos de enviar un correo de confirmación a tu bandeja de entrada.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF5EC] border border-[#D8CBB8] text-xs text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none focus:border-[#6B1F2A]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF5EC] border border-[#D8CBB8] text-xs text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none focus:border-[#6B1F2A]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-[10px] uppercase tracking-[0.2em] transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Guardando...' : 'Unirme a la Lista de Espera'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Grid of All Chronicles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-2xl text-[#2B1D14]">
              Todas las Crónicas ({filteredArticles.length})
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665]">
              Selecciona una crónica para leerla arriba
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => {
              const isCurrent = art.id === activeArticle.id;
              return (
                <article
                  key={art.id}
                  onClick={() => {
                    setActiveArticle(art);
                    const el = document.getElementById('lector-cronica');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`group rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#FAF5EC] border-[#6B1F2A] shadow-md'
                      : 'bg-[#FAF5EC]/70 border-[#D8CBB8] hover:border-[#2B1D14]'
                  }`}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-[#EFE6D5] overflow-hidden border-b border-[#D8CBB8]/60">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#F7F1E6]/95 text-[9px] font-mono uppercase tracking-widest text-[#6B1F2A]">
                        {art.number}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#8A7665]">
                        {art.category} · {art.readTime}
                      </p>
                      <h4 className="font-headline text-lg text-[#2B1D14] group-hover:text-[#6B1F2A] transition leading-snug">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#5C4A3E] line-clamp-3 leading-relaxed">
                        {art.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B1F2A]">
                    <span>{isCurrent ? 'Leyendo ahora' : 'Leer crónica'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7665]">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="hover:text-[#2B1D14] transition">
            ← Volver a Vivienne
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/armario" className="hover:text-[#2B1D14] transition">
            Maison Wolski
          </Link>
          <span>·</span>
          <Link href="/audios" className="hover:text-[#2B1D14] transition">
            Audios Semanales
          </Link>
          <span>·</span>
          <Link href="/domingo" className="hover:text-[#2B1D14] transition">
            Honestidad Financiera
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Vivienne Wolski · Maison Wolski</span>
      </footer>
    </div>
  );
}
