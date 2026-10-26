import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Galería de Videos Publicitarios con IA (42 Ejemplos Reales UGC, Reels y Meta Ads)',
  description:
    'Explora nuestro portafolio con 42 videos reales creados con Inteligencia Artificial: comerciales UGC de moda, entrevistas en calle, avatares hablados a cámara y anuncios para Meta Ads y TikTok.',
  keywords: [
    'Ejemplos de videos con IA',
    'Portafolio videos publicitarios IA',
    'Anuncios UGC hechos con IA',
    'Videos comerciales con inteligencia artificial',
    'Reels con influencers IA',
    'The Silent Studio galería',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/galeria',
  },
  openGraph: {
    title: 'Galería de 42 Videos de Alto Impacto Creados con IA | The Silent Studio',
    description:
      'Mira ejemplos reales de comerciales UGC, entrevistas dinámicas, mini-series y anuncios para Meta Ads producidos con Influencers IA.',
    url: 'https://wearethesilent.com/galeria',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
