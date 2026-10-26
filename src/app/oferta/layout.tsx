import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Producción de Videos Publicitarios con IA e Influencers Virtuales (Desde ₡30.000 / $60 USD)',
  description:
    'Creamos Influencers con Inteligencia Artificial hiperrealistas y videos publicitarios UGC verticales 9:16 listos para Meta Ads, TikTok e Instagram. Incluye guion, edición y caption: 1 video ₡30.000 ($60), Pack 10 ₡420.000 ($840) y Pack 20 ₡750.000 ($1.500).',
  keywords: [
    'Videos con IA',
    'Crear videos publicitarios con IA',
    'Influencer IA para marcas',
    'Anuncios UGC con IA',
    'Videos para Meta Ads Costa Rica',
    'Reels con Inteligencia Artificial',
    'Agencia creativa IA',
    'The Silent Studio',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/oferta',
  },
  openGraph: {
    title:
      'Videos Comerciales e Influencers IA para Anuncios y Redes | The Silent Studio',
    description:
      'Tecnología generativa de punta para crear anuncios UGC, entrevistas y voceros IA hiperrealistas con guion y caption incluidos. Desde ₡30.000 ($60 USD) por video.',
    url: 'https://wearethesilent.com/oferta',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'The Silent Studio · Producción Audiovisual con IA',
        url: 'https://wearethesilent.com/oferta',
        description:
          'Agencia especializada en creación de influencers con Inteligencia Artificial, videos UGC verticales 9:16 y anuncios para Meta Ads, Instagram y TikTok.',
        priceRange: '₡30.000 - ₡750.000 CRC ($60 - $1,500 USD)',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Paquetes de Producción de Video con IA',
          itemListElement: [
            {
              '@type': 'Offer',
              name: '1 Video Individual IA (9:16 + Caption) — ₡30.000 CRC / $60 USD',
              price: '30000',
              priceCurrency: 'CRC',
            },
            {
              '@type': 'Offer',
              name: 'Pack 10 Videos Comerciales IA — ₡420.000 CRC / $840 USD',
              price: '420000',
              priceCurrency: 'CRC',
            },
            {
              '@type': 'Offer',
              name: 'Pack 20 Videos Comerciales IA — ₡750.000 CRC / $1,500 USD',
              price: '750000',
              priceCurrency: 'CRC',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Cómo funciona la creación de un Influencer IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilizamos tecnología de punta en generación visual y consistencia facial para diseñar un personaje digital exclusivo que represente a tu marca. Definimos su estética, vestuario, tono de voz y personalidad para que siempre mantenga el mismo rostro y realismo en todos los videos.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cada video incluye su caption para publicar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Entregamos el video vertical 9:16 con subtítulos dinámicos de retención más su respectivo caption redactado para Instagram o Facebook con gancho persuasivo y llamada a la acción.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cuáles son los precios de los videos con IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ofrecemos 1 Video Individual por ₡30.000 colones ($60 USD), Pack de 10 Videos por ₡420.000 colones ($840 USD) y Pack de 20 Videos por ₡750.000 colones ($1.500 USD).',
            },
          },
        ],
      },
    ],
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
