'use client';

import { posts as postsEs } from '@/lib/blog';
import { posts as postsEn } from '@/lib/blog-en';
import { useLanguage } from '@/context/language-context';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { language } = useLanguage();
  const posts = language === 'es' ? postsEs : postsEn;
  const post = posts.find((p) => p.slug === slug);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (post) {
      setFormattedDate(
        new Date(post.date).toLocaleDateString(t('locale') as string, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      );
    }
  }, [post, t, slug]);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://wearethesilent.com/blog/${post.slug}`,
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
      <article className="animate-in fade-in duration-500 pb-20">
        {/* Top Back Navigation */}
        <div className="container mx-auto max-w-4xl px-5 pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-zinc-900 hover:bg-[#C5A059] text-zinc-100 hover:text-black border border-white/15 hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold transition shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'es' ? 'Volver a la Revista de IA' : 'Back to AI Journal'}</span>
            </Link>

            <div className="flex items-center gap-2 font-mono text-xs">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A059]/40 text-zinc-300 hover:text-white transition"
              >
                {language === 'es' ? 'Inicio' : 'Home'}
              </Link>
              <Link
                href="/oferta"
                className="px-3.5 py-2 rounded-xs bg-[#C5A059]/15 hover:bg-[#C5A059] text-[#C5A059] hover:text-black border border-[#C5A059]/40 font-semibold transition"
              >
                {language === 'es' ? 'Servicios IA (₡30.000 / $60)' : 'AI Videos (₡30,000 / $60)'}
              </Link>
            </div>
          </div>
        </div>

        {/* Article Header */}
        <header className="container mx-auto max-w-4xl px-5 py-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {post.category && (
              <span className="px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] font-bold uppercase tracking-wider rounded-xs">
                {post.category}
              </span>
            )}
            <span className="text-zinc-400">{post.author}</span>
            <span className="text-zinc-600">&bull;</span>
            {formattedDate ? (
              <span className="text-zinc-300">{formattedDate}</span>
            ) : (
              <span className="inline-block h-4 w-28 animate-pulse rounded bg-zinc-800" />
            )}
            <span className="text-zinc-600">&bull;</span>
            <span className="inline-flex items-center gap-1 text-[#C5A059]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime || '5 min'}
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light border-l-2 border-[#C5A059] pl-4">
            {post.description}
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-white/10 bg-zinc-900 shadow-2xl">
            <Image
              src={post.image.imageUrl}
              alt={post.image.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={post.image.imageHint}
            />
          </div>
        </header>

        {/* Article Body (Optimal 65ch reading measure) */}
        <div className="container mx-auto max-w-3xl px-5 py-10">
          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:text-white prose-p:text-zinc-200 prose-p:leading-relaxed prose-li:text-zinc-200 prose-strong:text-white prose-a:text-[#C5A059] hover:prose-a:underline prose-img:rounded-sm"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-zinc-400 mr-2">Temas:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-zinc-900 border border-white/10 text-zinc-300 font-mono text-[11px] rounded-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Bottom Back Navigation Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xs bg-zinc-900 hover:bg-[#C5A059] text-zinc-100 hover:text-black border border-white/20 hover:border-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                {language === 'es'
                  ? 'Volver a todos los artículos del Blog'
                  : 'Back to all Blog articles'}
              </span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xs bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-mono text-xs uppercase tracking-wider transition"
            >
              <span>{language === 'es' ? 'Ir al Inicio' : 'Go to Home'}</span>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className="container mx-auto max-w-5xl px-5 pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold text-white">
              {language === 'es' ? 'Continúa Leyendo' : 'Continue Reading'}
            </h2>
            <Link
              href="/blog"
              className="font-mono text-xs uppercase tracking-wider text-[#C5A059] hover:underline flex items-center gap-1"
            >
              <span>{language === 'es' ? 'Ver todo el archivo' : 'View all articles'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group p-5 bg-zinc-950 border border-white/10 hover:border-[#C5A059]/50 rounded-sm flex flex-col justify-between transition"
              >
                <div className="space-y-2">
                  {rel.category && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C5A059] block">
                      {rel.category}
                    </span>
                  )}
                  <h3 className="font-headline text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#C5A059] uppercase">
                  <span>{language === 'es' ? 'Leer ahora' : 'Read now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
