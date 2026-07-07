
import type { Metadata } from 'next';
import { posts } from '@/lib/blog';

const BASE_URL = 'https://thesilent.studioboom.online';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
        title: post.title,
        description: post.description,
        url: `${BASE_URL}/blog/${post.slug}`,
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
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    }
  };
}


export default function PostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
