import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revista Diaria de IA Generativa: Anuncios, Tutoriales, Casos de Éxito y Monetización | The Silent Studio',
  description:
    'Artículos diarios sobre Inteligencia Artificial generativa aplicada a anuncios UGC, tutoriales paso a paso, casos de éxito como Vivienne Wolski, modelos de monetización y planes de trabajo.',
  keywords: [
    'Blog IA Generativa',
    'Anuncios con IA',
    'Tutoriales Influencer IA',
    'Casos de éxito IA',
    'Cómo monetizar IA generativa',
    'Planes de trabajo IA',
    'The Silent Studio',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/blog',
  },
  openGraph: {
    title: 'Revista Diaria de IA Generativa | The Silent Studio',
    description:
      'Publicaciones diarias sobre anuncios con IA, tutoriales técnicos, casos de éxito, monetización y planes de trabajo ejecutables.',
    url: 'https://wearethesilent.com/blog',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
