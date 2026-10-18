import type { Metadata } from 'next';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://wearethesilent.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | The Silent Studio',
    };
  }

  return {
    title: `${post.title} | The Silent Studio`,
    description: post.description,
    keywords: post.tags || [
      'Inteligencia Artificial',
      'Publicidad con IA',
      'Influencer IA',
      'Anuncios UGC IA',
      'Marketing con IA',
      'The Silent Studio',
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'The Silent Studio',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image.imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
