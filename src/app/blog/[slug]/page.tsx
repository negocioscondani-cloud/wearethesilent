'use client';

import { posts } from '@/lib/blog';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { useEffect, useState } from 'react';

export default function PostPage() {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useTranslation();
    const post = posts.find((p) => p.slug === slug);
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (post) {
            // Using a client-side effect to avoid hydration errors with date formatting.
            setFormattedDate(new Date(post.date).toLocaleDateString(t('locale') as string, { year: 'numeric', month: 'long', day: 'numeric' }));
        }
    }, [post, t, slug]);


    if (!post) {
        notFound();
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://thesilent.studioboom.online/blog/${post.slug}`,
      },
      headline: post.title,
      description: post.description,
      image: post.image.imageUrl,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'The Silent Studio',
        logo: {
          '@type': 'ImageObject',
          url: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-wall-papers.avif',
        },
      },
      datePublished: post.date,
      dateModified: post.date,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="animate-in fade-in duration-500">
                <header className="relative h-[50vh] flex items-center justify-center text-center text-white">
                    <Image
                        src={post.image.imageUrl}
                        alt={post.image.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={post.image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 mx-auto w-full max-w-4xl px-5">
                        <h1 className="font-headline text-4xl md:text-6xl">
                            {post.title}
                        </h1>
                        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-zinc-300">
                            <span>{post.author}</span>
                            <span>&bull;</span>
                            {formattedDate ? <span>{formattedDate}</span> : <span className="inline-block h-5 w-32 animate-pulse rounded-md bg-zinc-400/50" />}
                        </div>
                    </div>
                </header>

                <div className="container mx-auto max-w-3xl py-16 md:py-24">
                    <div
                        className="prose prose-lg dark:prose-invert prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg"
                        dangerouslySetInnerHTML={{ __html: post.body }}
                    />
                </div>
            </article>
        </>
    );
}
