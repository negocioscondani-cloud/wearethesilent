import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Producción de Videos Publicitarios con IA e Influencers Virtuales (Desde $50 USD)',
  description:
    'Creamos Influencers con Inteligencia Artificial hiperrealistas y videos publicitarios UGC verticales 9:16 listos para Meta Ads, TikTok e Instagram. Incluye guion, edición y caption: 1 video $50 USD, Pack 4 $170 USD (antes $200) y Pack 8 $300 USD (antes $400).',
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
      'Tecnología generativa de punta para crear anuncios UGC, entrevistas y voceros IA hiperrealistas con guion y caption incluidos. Desde $50 USD por video.',
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
        priceRange: '$50 - $300 USD',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Paquetes de Producción de Video con IA',
          itemListElement: [
            {
              '@type': 'Offer',
              name: '1 Video Individual IA (9:16 + Caption) — $50 USD',
              price: '50',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              name: 'Pack 4 Videos Comerciales IA — $170 USD (Antes $200 USD)',
              price: '170',
              priceCurrency: 'USD',
            },
            {
              '@type': 'Offer',
              name: 'Pack 8 Videos Comerciales IA — $300 USD (Antes $400 USD)',
              price: '300',
              priceCurrency: 'USD',
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
              text: 'Ofrecemos 1 Video Individual por $50 USD, Pack de 4 Videos por $170 USD (precio regular $200 USD) y Pack de 8 Videos por $300 USD (precio regular $400 USD).',
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
