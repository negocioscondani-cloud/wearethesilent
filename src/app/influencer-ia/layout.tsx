import type { Metadata } from 'next';

const COVER_IMAGE = 'https://public-files.gumroad.com/vj68f1cbj2d8p504jfs6a06bfqhs';

export const metadata: Metadata = {
  title: 'Influencer IA: De Cero a tu Primera Venta ($47 USD) | Guía Práctica Paso a Paso',
  description:
    'El sistema exacto en 9 pasos para crear, lanzar y monetizar un Influencer con Inteligencia Artificial sin mostrar tu cara. Incluye caso de estudio real Vivienne Wolski.',
  keywords: [
    'Influencer IA',
    'Crear influencer con IA',
    'Cómo ganar dinero con IA',
    'Monetizar avatares IA',
    'Vivienne Wolski caso de estudio',
    'The Silent Studio',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/influencer-ia',
  },
  openGraph: {
    title: 'Influencer IA: De Cero a tu Primera Venta | Método en 9 Pasos',
    description:
      'Aprende a construir y monetizar tu propio personaje digital con IA desde cero. Oferta especial de lanzamiento: $47 USD.',
    url: 'https://wearethesilent.com/influencer-ia',
    images: [
      {
        url: COVER_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Influencer IA: De Cero a tu Primera Venta',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer IA: De Cero a tu Primera Venta ($47 USD)',
    description:
      'El método probado en 9 pasos para crear y monetizar un Influencer con Inteligencia Artificial.',
    images: [COVER_IMAGE],
  },
};

export default function InfluencerIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Influencer IA: De Cero a tu Primera Venta',
    description:
      'Guía práctica en 9 pasos para diseñar, dar voz, animar y monetizar un influencer virtual creado con Inteligencia Artificial.',
    image: COVER_IMAGE,
    brand: {
      '@type': 'Brand',
      name: 'The Silent Studio',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://wearethesilent.com/influencer-ia',
      priceCurrency: 'USD',
      price: '47.00',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
