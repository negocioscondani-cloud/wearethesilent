
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
        <div className="container py-12 md:py-24 animate-in fade-in duration-500">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl font-headline mb-4">
                        {t('blog.title')}
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('blog.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                             <Card className="overflow-hidden transition-shadow hover:shadow-lg dark:bg-card">
                                <figure className="relative aspect-[16/9] w-full">
                                    <Image
                                        src={post.image.imageUrl}
                                        alt={post.image.description}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-ai-hint={post.image.imageHint}
                                    />
                                </figure>
                                <CardHeader>
                                    <PostDate date={post.date} className="text-sm text-muted-foreground" />
                                    <CardTitle className="font-headline text-3xl group-hover:text-primary transition-colors">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="leading-relaxed">
                                        {post.description}
                                    </CardDescription>
                                    <div className="mt-6 flex items-center text-primary font-semibold">
                                        {t('blog.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
