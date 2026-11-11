import type { Metadata } from 'next';

const BASE_URL = 'https://wearethesilent.com';
const HERO_IMAGE = `${BASE_URL}/images/vivianne-wolski-hero.jpg`;

export const metadata: Metadata = {
  title: 'Audios de Vivienne: Dominio del Dinero y Libertad Financiera · Lista de Espera',
  description:
    'Únete a la lista de espera privada para la serie de 10 audios semanales prácticos de Vivienne Wolski: mentalidad, la regla 25-15-50-10, deuda inteligente, inversión indexada y la regla del 25.',
  keywords: [
    'Audios de Vivienne',
    'Dominio del Dinero y Libertad Financiera',
    'Vivienne Wolski',
    'Regla 25-15-50-10',
    'La regla del 25',
    'Libertad Financiera',
    'Finanzas Personales',
  ],
  alternates: {
    canonical: `${BASE_URL}/audios`,
  },
  openGraph: {
    title: 'Audios de Vivienne: Dominio del Dinero y Libertad Financiera',
    description:
      '10 audios semanales para poner en práctica. Únete a la lista de espera con tu nombre y correo electrónico.',
    url: `${BASE_URL}/audios`,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 1500,
        alt: 'Audios de Vivienne · Dominio del Dinero y Libertad Financiera',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function AudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
