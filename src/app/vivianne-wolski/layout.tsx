import type { Metadata } from 'next';

const HERO_IMAGE = 'https://red-ibex-277532.hostingersite.com/wp-content/uploads/2026/10/descarga.png';

export const metadata: Metadata = {
  title: 'El Armario de Vivienne · Vivienne Wolski | Lo que Vivienne usa. Lo que Vivienne cuenta.',
  description:
    'El salón editorial y armario curado de Vivienne Wolski. Piezas de inversión, bolsos icónicos, prendas de punto, el Wolski Club de audios y El Domingo de los Números.',
  keywords: [
    'El Armario de Vivienne',
    'Vivienne Wolski',
    'Vivianne Wolski',
    'Wolski Club',
    'El Domingo de los Números',
    'Tory Burch',
    'Quiet Luxury',
    'Lujo Silencioso',
    'Moda Clásica',
    'ShopMy',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/vivianne-wolski',
  },
  openGraph: {
    title: 'El Armario de Vivienne · Vivienne Wolski',
    description:
      'Lo que Vivienne usa. Lo que Vivienne cuenta. Piezas de inversión curadas, notas manuscritas y fonoteca del Wolski Club.',
    url: 'https://wearethesilent.com/vivianne-wolski',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 1500,
        alt: 'Vivienne Wolski · El Armario de Vivienne',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Armario de Vivienne · Vivienne Wolski',
    description:
      'Lo que Vivienne usa. Lo que Vivienne cuenta. Boutique de lujo silencioso y archivo sonoro del Wolski Club.',
    images: [HERO_IMAGE],
  },
};

export default function VivianneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://wearethesilent.com/vivianne-wolski',
        name: 'El Armario de Vivienne · Vivienne Wolski',
        description:
          'Boutique curada de lujo silencioso, piezas de inversión, audios de formación del Wolski Club y El Domingo de los Números.',
        url: 'https://wearethesilent.com/vivianne-wolski',
        inLanguage: 'es',
      },
      {
        '@type': 'Person',
        name: 'Vivienne Wolski',
        description:
          'Aristócrata hecha a sí misma de 82 años y referente editorial de estilo, carácter y finanzas personales (Personaje digital de IA creado por The Silent Studio).',
        image: HERO_IMAGE,
        url: 'https://wearethesilent.com/vivianne-wolski',
        sameAs: ['https://www.instagram.com/vivianne_wolski/'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] selection:bg-[#B08D57]/30 selection:text-[#2B1D14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
