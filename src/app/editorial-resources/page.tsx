
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen } from 'lucide-react';

export default function EditorialResourcesPage() {
  const { t } = useTranslation();

  const resources = [
    {
      id: 'brand-strategy-guide',
      title: t('editorialResources.guide.title'),
      subtitle: t('editorialResources.guide.subtitle'),
      description: t('editorialResources.guide.description'),
      cta: t('editorialResources.guide.cta'),
      href: '/brand-strategy-guide',
      imageId: 'bsg-hero',
    },
    {
      id: 'nano-banana-manifesto',
      title: t('editorialResources.nanoBanana.title'),
      subtitle: t('editorialResources.nanoBanana.subtitle'),
      description: t('editorialResources.nanoBanana.description'),
      cta: t('editorialResources.nanoBanana.cta'),
      href: '/nano-banana',
      imageId: 'nano-banana-hero',
    },
    {
      id: 'visual-gallery',
      title: t('editorialResources.gallery.title'),
      subtitle: t('editorialResources.gallery.subtitle'),
      description: t('editorialResources.gallery.description'),
      cta: t('editorialResources.gallery.cta'),
      href: '/resources',
      imageId: 'gallery-24',
    },
    {
      id: 'cinematic-tutorials',
      title: t('editorialResources.tutorials.title'),
      subtitle: t('editorialResources.tutorials.subtitle'),
      description: t('editorialResources.tutorials.description'),
      cta: t('editorialResources.tutorials.cta'),
      href: '/tutorials',
      imageId: 'tutorials-placeholder',
    },
  ];

  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl font-headline mb-4">
            {t('editorialResources.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('editorialResources.subtitle')}
          </p>
        </div>

        <Tabs defaultValue="resources" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="resources">Recursos</TabsTrigger>
            <TabsTrigger value="proposals">Propuestas de Web</TabsTrigger>
          </TabsList>
          <TabsContent value="resources" className="mt-12">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              {resources.map((resource) => {
                const image = PlaceHolderImages.find(
                  (img) => img.id === resource.imageId
                );
                return (
                  <div
                    key={resource.id}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                  >
                    {image ? (
                      <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </figure>
                    ) : (
                      <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src="https://picsum.photos/seed/nanobanana-resource/800/600"
                          alt="Nano Banana Manifesto"
                          fill
                          className="object-cover"
                          data-ai-hint="luxury product"
                        />
                      </figure>
                    )}
                    <div className="text-left">
                      <p className="font-semibold text-primary">
                        {resource.subtitle}
                      </p>
                      <h2 className="font-headline text-3xl mt-2">
                        {resource.title}
                      </h2>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                      <Button asChild variant="outline" className="mt-6">
                        <Link href={resource.href}>{resource.cta}</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="proposals" className="mt-12">
            <div className="grid grid-cols-1 gap-12 md:gap-16">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
                  <Image
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
                    alt="Pastelería Inglesa"
                    fill
                    className="object-cover"
                    data-ai-hint="bakery cake"
                  />
                </figure>
                <div className="text-left">
                  <p className="font-semibold text-primary">
                    Propuesta de Diseño
                  </p>
                  <h2 className="font-headline text-3xl mt-2">
                    Pastelería Inglesa
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Una propuesta de diseño web para una pastelería de lujo,
                    combinando tradición y elegancia moderna.
                  </p>
                  <Button asChild variant="outline" className="mt-6">
                    <Link href="/proposals/bakery">Ver Propuesta</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
