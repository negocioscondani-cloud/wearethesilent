import type { Metadata } from 'next';

const BASE_URL = 'https://wearethesilent.com';
const HERO_IMAGE = `${BASE_URL}/images/vivianne-wolski-hero.jpg`;

export const metadata: Metadata = {
  title: 'El Blog de Vivi · Crónicas de Dinero, Estilo y Carácter | Vivienne Wolski',
  description:
    'El diario editorial de Vivienne Wolski. Ensayos íntimos sobre libertad financiera, piezas de inversión de Maison Wolski, la regla 25-15-50-10 y el arte del lujo silencioso.',
  alternates: {
    canonical: `${BASE_URL}/diario`,
  },
  openGraph: {
    title: 'El Blog de Vivi · Crónicas de Vivienne Wolski',
    description:
      'Cartas y ensayos sobre dinero, tiempo, estilo atemporal y criterio propio por Vivienne Wolski.',
    url: `${BASE_URL}/diario`,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 1500,
        alt: 'El Blog de Vivi · Vivienne Wolski',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function DiarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
