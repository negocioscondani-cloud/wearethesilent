import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vivianne Wolski · The Curated Closet | Luxury Fashion & Style',
  description:
    'El clóset personal y curaduría de moda de Vivianne Wolski. Bolsos icónicos, prendas de punto premium, abrigos y calzado seleccionados con compra directa en tiendas oficiales.',
  keywords: [
    'Vivianne Wolski',
    'The Curated Closet',
    'Tory Burch',
    'Atorie',
    'Perry Tote',
    'ShopMy',
    'Moda de Lujo',
    'Quiet Luxury',
    'Estilo Personal',
  ],
  openGraph: {
    title: 'Vivianne Wolski · The Curated Closet',
    description:
      'Curaduría exclusiva de moda, bolsos y prendas de autor por Vivianne Wolski. Compra directa en distribuidores oficiales.',
    images: [
      {
        url: '/images/vivianne-wolski-hero.jpg',
        width: 1200,
        height: 1200,
        alt: 'Vivianne Wolski · The Curated Closet',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivianne Wolski · The Curated Closet',
    description:
      'Curaduría exclusiva de moda, bolsos y prendas de autor por Vivianne Wolski.',
    images: ['/images/vivianne-wolski-hero.jpg'],
  },
};

export default function VivianneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#080808] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black">{children}</div>;
}
