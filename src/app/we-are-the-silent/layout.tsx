import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'We Are The Silent · Academia y Comunidad de Dirección Creativa con IA ($9/mes)',
  description:
    'De una idea a un anuncio, un video publicitario o una película con Inteligencia Artificial. Aprende consistencia de personajes, prompting editorial, iluminación y monetización con IA.',
  keywords: [
    'We Are The Silent',
    'Comunidad de Inteligencia Artificial',
    'Academia de videos con IA',
    'Consistencia de personajes IA',
    'Dirección de arte con IA',
    'Crear anuncios con inteligencia artificial',
    'The Silent Studio Skool',
  ],
  alternates: {
    canonical: 'https://wearethesilent.com/we-are-the-silent',
  },
  openGraph: {
    title:
      'We Are The Silent | Academia y Comunidad Visual de Inteligencia Artificial',
    description:
      'Entrena tu criterio como Director de Arte Digital: domina personajes consistentes, videos publicitarios con IA y construye un portafolio comercial.',
    url: 'https://wearethesilent.com/we-are-the-silent',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function WeAreTheSilentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'We Are The Silent · Academia de Dirección Audiovisual con IA',
        description:
          'Programa y comunidad práctica para crear imágenes, videos publicitarios e influencers consistentes con Inteligencia Artificial.',
        provider: {
          '@type': 'Organization',
          name: 'The Silent Studio',
          sameAs: 'https://wearethesilent.com',
        },
        offers: {
          '@type': 'Offer',
          price: '9.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://wearethesilent.com/we-are-the-silent',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Necesito tener experiencia técnica o conocimientos de programación?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, en absoluto. La comunidad está estructurada para guiarte desde cero enfocándose en el criterio visual y en cómo dar instrucciones claras a los asistentes de IA.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué herramientas de IA aprenderemos a utilizar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Trabajamos principalmente con Flow, DeepSeek, ChatGPT, Claude, Magnific, Freepik (Nano Banana), Kling e Higgsfield, aprovechando al máximo sus versiones de acceso gratuito o bajo costo.',
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
