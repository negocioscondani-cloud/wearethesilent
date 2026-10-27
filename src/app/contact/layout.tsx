import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Contacto Directo · Cotizar Videos con IA e Influencers Virtuales | The Silent Studio',
  description:
    'Habla directamente con un estratega creativo de The Silent Studio en Costa Rica. Cotiza producción de videos publicitarios con IA (1 video $50 USD, Pack 4 $170 USD y Pack 8 $300 USD), paquetes para Meta Ads o creación de Influencers IA.',
  keywords: [
    'Contacto The Silent Studio',
    'Agencia de videos con IA Costa Rica',
    'Cotizar videos publicitarios con IA',
    'Crear influencer IA para mi marca',
    'Studio Boom Daniel Calderón',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/contact',
  },
  openGraph: {
    title: 'Contacto Directo | The Silent Studio · Agencia Creativa IA',
    description:
      'Agenda una consulta o cotiza por WhatsApp tus videos publicitarios con Inteligencia Artificial e Influencers IA.',
    url: 'https://wearethesilent.com/contact',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto · The Silent Studio',
    url: 'https://wearethesilent.com/contact',
    description:
      'Canal oficial de contacto de The Silent Studio para cotizar producción de videos UGC con IA, Influencers virtuales y consultoría creativa.',
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
