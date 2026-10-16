import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producción de Videos IA, Anuncios UGC e Influencers Virtuales | The Silent Studio',
  description:
    'Creamos influencers con Inteligencia Artificial de hiperrealismo cinematográfico y anuncios UGC verticales 9:16 listos para Meta Ads, TikTok e Instagram. Desde ₡30.000 ($60 USD) por video.',
  keywords: [
    'Videos con IA',
    'Influencer IA para marcas',
    'Anuncios UGC con IA',
    'Videos para Meta Ads',
    'Reels con Inteligencia Artificial',
    'Agencia creativa IA',
    'The Silent Studio',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/oferta',
  },
  openGraph: {
    title: 'Videos Comerciales e Influencers IA para Anuncios y Redes | The Silent Studio',
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
