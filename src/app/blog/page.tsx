'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { posts as postsEs, type Post } from '@/lib/blog';
import { posts as postsEn } from '@/lib/blog-en';
import type { ArticleCategory } from '@/lib/daily-ai-articles';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { ArrowLeft, ArrowRight, Search, X, Clock, Sparkles, Video, BookOpen } from 'lucide-react';

const CATEGORIES: { id: 'all' | ArticleCategory; labelEs: string; labelEn: string }[] = [
  { id: 'all', labelEs: 'Todos los Artículos', labelEn: 'All Articles' },
  { id: 'Anuncios & UGC', labelEs: 'Anuncios & UGC', labelEn: 'AI Ads & UGC' },
  { id: 'Tutoriales', labelEs: 'Tutoriales', labelEn: 'Tutorials' },
  { id: 'Casos de Éxito', labelEs: 'Casos de Éxito', labelEn: 'Case Studies' },
  { id: 'Monetización', labelEs: 'Monetización', labelEn: 'Monetization' },
  { id: 'Usos Prácticos', labelEs: 'Usos Prácticos', labelEn: 'Practical Uses' },
  { id: 'Planes de Trabajo', labelEs: 'Planes de Trabajo', labelEn: 'Action Plans' },
];

function inferCategory(post: Post): ArticleCategory {
  if (post.category) return post.category;
  const text = `${post.slug} ${post.title} ${post.description}`.toLowerCase();
  if (text.includes('ugc') || text.includes('ad') || text.includes('anuncio') || text.includes('comercial')) {
    return 'Anuncios & UGC';
  }
  if (text.includes('guia') || text.includes('guide') || text.includes('protocol') || text.includes('mastering') || text.includes('como')) {
    return 'Tutoriales';
  }
  if (text.includes('monetiz') || text.includes('agency') || text.includes('agencia') || text.includes('director')) {
    return 'Monetización';
  }
  if (text.includes('plan') || text.includes('roadmap') || text.includes('arquitectura')) {
    return 'Planes de Trabajo';
  }
  return 'Usos Prácticos';
}

const PostDate = ({ date, className }: { date: string; className?: string }) => {
  const { t } = useTranslation();
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    setFormattedDate(
      new Date(date).toLocaleDateString(t('locale') as string, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    );
  }, [date, t]);

  if (!formattedDate) {
    return <span className="inline-block h-4 w-20 animate-pulse rounded bg-muted" />;
  }

  return <span className={className}>{formattedDate}</span>;
};

export default function BlogPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const rawPosts = language === 'es' ? postsEs : postsEn;

  const [selectedCategory, setSelectedCategory] = useState<'all' | ArticleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const enrichedPosts = useMemo(() => {
    return rawPosts.map((p) => ({
      ...p,
      resolvedCategory: inferCategory(p),
      resolvedReadTime: p.readTime || '5 min',
    }));
  }, [rawPosts]);

  const filteredPosts = useMemo(() => {
    return enrichedPosts.filter((p) => {
      const matchesCat = selectedCategory === 'all' || p.resolvedCategory === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.resolvedCategory.toLowerCase().includes(q) ||
        (p.tags && p.tags.some((tag) => tag.toLowerCase().includes(q)));
      return matchesCat && matchesSearch;
    });
  }, [enrichedPosts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="container max-w-6xl mx-auto py-8 md:py-16 animate-in fade-in duration-500 px-5 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 font-mono text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>
            {language === 'es'
              ? 'PUBLICACIÓN DIARIA · IA GENERATIVA APLICADA'
              : 'DAILY PUBLICATION · APPLIED GENERATIVE AI'}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
          {language === 'es' ? 'Revista de Inteligencia Creativa' : 'Creative Intelligence Journal'}
        </h1>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-light">
          {language === 'es'
            ? 'Artículos diarios sobre IA para anuncios, tutoriales paso a paso, casos de éxito reales, modelos de monetización, usos prácticos y planes de trabajo.'
            : 'Daily deep-dives on AI for ads, step-by-step tutorials, real case studies, monetization models, practical use cases, and execution plans.'}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-4 border-y border-white/10 py-5 bg-zinc-950/60 px-4 rounded-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xs font-mono text-xs uppercase tracking-wider transition cursor-pointer ${
                  active
                    ? 'bg-[#C5A059] text-black font-bold'
                    : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-white/10 hover:border-[#C5A059]/40'
                }`}
              >
                {language === 'es' ? cat.labelEs : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Search Input & Counter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'es'
                  ? 'Buscar por anuncios, tutorial, Vivienne, monetización...'
                  : 'Search ads, tutorial, Vivienne, monetization...'
              }
              className="w-full bg-black border border-white/15 focus:border-[#C5A059] rounded-xs pl-10 pr-8 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="font-mono text-xs text-zinc-400">
            {language === 'es'
              ? `Mostrando ${filteredPosts.length} artículos estratégicos`
              : `Showing ${filteredPosts.length} strategic articles`}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 border border-white/10 rounded-sm bg-zinc-950/50 space-y-4">
          <p className="text-zinc-300 text-base">
            {language === 'es'
              ? 'No encontramos artículos que coincidan con tu filtro actual.'
              : 'No articles matched your current filter.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 bg-[#C5A059] text-black font-mono text-xs font-bold uppercase tracking-wider rounded-xs"
          >
            {language === 'es' ? 'Ver todos los artículos' : 'Show all articles'}
          </button>
        </div>
      )}

      {/* Featured Article Hero Card */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="group block">
          <div className="grid lg:grid-cols-12 gap-6 bg-zinc-950 border border-[#C5A059]/40 hover:border-[#C5A059] rounded-sm overflow-hidden transition-all duration-300 shadow-xl">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[280px] overflow-hidden bg-zinc-900">
              <Image
                src={featuredPost.image.imageUrl}
                alt={featuredPost.image.description}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#C5A059] text-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-xs">
                  {language === 'es' ? 'DESTACADO DEL DÍA' : 'FEATURED TODAY'}
                </span>
                <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-[#C5A059] border border-[#C5A059]/40 font-mono text-[10px] uppercase tracking-wider rounded-xs">
                  {featuredPost.resolvedCategory}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <PostDate date={featuredPost.date} className="text-[#C5A059] font-semibold uppercase" />
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    {featuredPost.resolvedReadTime}
                  </span>
                </div>

                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {featuredPost.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider">
                <span>{language === 'es' ? 'Leer artículo completo' : 'Read full article'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Articles Grid */}
      {gridPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {gridPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-white/10 hover:border-[#C5A059]/50 flex flex-col justify-between w-full bg-zinc-950 rounded-sm">
                <div>
                  <figure className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-[#C5A059]/30 text-[#C5A059] font-mono text-[10px] uppercase tracking-wider rounded-xs">
                      {post.resolvedCategory}
                    </span>
                  </figure>
                  <CardHeader className="p-6 pb-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                      <PostDate date={post.date} className="text-[#C5A059] uppercase tracking-wider" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        {post.resolvedReadTime}
                      </span>
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-[#C5A059] transition-colors leading-snug text-white">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="leading-relaxed text-sm text-zinc-300 line-clamp-3 font-light">
                      {post.description}
                    </CardDescription>
                  </CardContent>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[#C5A059] text-xs font-mono font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Bottom Conversion Strip */}
      <section className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-[#12161A] via-[#161C22] to-[#12161A] border border-[#C5A059]/40 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl text-center lg:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block">
            {language === 'es' ? 'DE LA LECTURA A LA EJECUCIÓN' : 'FROM READING TO EXECUTION'}
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
            {language === 'es'
              ? '¿Listo para lanzar tu propio Influencer IA o pautar anuncios que convierten?'
              : 'Ready to launch your own AI Influencer or run high-converting video ads?'}
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed font-light">
            {language === 'es'
              ? 'Encarga tus videos verticales 9:16 con guion y caption desde $50 USD (Pack 4 por $170 · Pack 8 por $300) o descarga la guía paso a paso por $47 USD.'
              : 'Order custom 9:16 vertical AI videos from $50 USD (4-Pack $170 · 8-Pack $300) or get our step-by-step playbook for $47 USD.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <Link
            href="/oferta"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition"
          >
            <Video className="w-4 h-4" />
            <span>{language === 'es' ? 'Cotizar Videos (Desde $50 USD)' : 'Order Videos (From $50 USD)'}</span>
          </Link>
          <Link
            href="/influencer-ia"
            className="w-full sm:w-auto px-6 py-3.5 bg-black hover:bg-zinc-900 text-white border border-white/20 hover:border-[#C5A059] font-mono text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition"
          >
            <BookOpen className="w-4 h-4 text-[#C5A059]" />
            <span>{language === 'es' ? 'Guía Influencer IA ($47)' : 'AI Guide ($47)'}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
