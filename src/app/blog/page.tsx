
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { posts } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const PostDate = ({ date, className }: { date: string, className?: string }) => {
    const { t } = useTranslation();
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        setFormattedDate(new Date(date).toLocaleDateString(t('locale'), { year: 'numeric', month: 'long', day: 'numeric' }));
    }, [date, t]);

    if (!formattedDate) {
        return <div className="h-5 w-24 animate-pulse rounded-md bg-muted" />;
    }
    
    return <p className={className}>{formattedDate}</p>;
}

export default function BlogPage() {
    const { t } = useTranslation();

    return (
        <div className="container max-w-6xl mx-auto py-12 md:py-24 animate-in fade-in duration-500 px-5">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="text-4xl md:text-6xl font-headline mb-4">
                    {t('blog.title')}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('blog.subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex">
                         <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-card border border-border/40 hover:border-gold/30 flex flex-col justify-between w-full bg-zinc-950">
                            <div>
                                <figure className="relative aspect-[3/2] w-full overflow-hidden">
                                    <Image
                                        src={post.image.imageUrl}
                                        alt={post.image.description}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        data-ai-hint={post.image.imageHint}
                                    />
                                </figure>
                                <CardHeader className="p-6 pb-3">
                                    <PostDate date={post.date} className="text-xs text-gold uppercase tracking-wider mb-2" />
                                    <CardTitle className="font-headline text-xl md:text-2xl group-hover:text-gold transition-colors leading-tight">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 pt-0">
                                    <CardDescription className="leading-relaxed text-sm text-gray-400 line-clamp-3">
                                        {post.description}
                                    </CardDescription>
                                </CardContent>
                            </div>
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex items-center text-gold text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                                    {t('blog.readMore')} <ArrowRight className="ml-2 h-3.5 w-3.5" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
