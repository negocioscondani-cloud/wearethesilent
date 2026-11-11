import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'El Domingo de los Números · Compañero Ritual de Vivienne Wolski',
  description:
    'Quince minutos cada domingo. Un cuaderno interactivo de claridad financiera, carácter y orden personal por Vivienne Wolski.',
  keywords: [
    'El Domingo de los Números',
    'Vivienne Wolski',
    'Finanzas Personales',
    'Claridad Financiera',
    'Hábitos Financieros',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/domingo',
  },
  openGraph: {
    title: 'El Domingo de los Números · Compañero de Vivienne Wolski',
    description:
      'Quince minutos cada domingo. Sin culpas, sin teatro y con una taza caliente al lado. Cuaderno interactivo de claridad financiera.',
    url: 'https://wearethesilent.com/domingo',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function DomingoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
