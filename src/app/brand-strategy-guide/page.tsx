
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/use-translation';
import { Bot, Check, Lightbulb } from 'lucide-react';

export default function BrandStrategyGuidePage() {
  const { t } = useTranslation();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'bsg-hero');

  const contentSections = (
    t('brandStrategyGuide.contentSections') as any[]
  ).map((section) => ({
    ...section,
    imageId: section.imageId,
  }));

  const painPoints = t('brandStrategyGuide.painPoints') as any[];
  const systemWorks = (t('brandStrategyGuide.systemWorks') as any[]).map(
    (item, index) => ({
      ...item,
      image:
        index === 0
          ? 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif'
          : index === 1
          ? 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif'
          : index === 2
          ? 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110938.avif'
          : index === 3
          ? 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif'
          : index === 4
          ? 'http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif'
          : 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif',
    })
  );
  const achievements = t('brandStrategyGuide.achievements') as any[];

  return (
    <div className="animate-in fade-in duration-500 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5">
          <h1 className="font-headline text-4xl md:text-6xl">
            {t('brandStrategyGuide.hero.title')}
          </h1>
          <p className="mt-4 text-lg text-zinc-300 md:text-xl">
            {t('brandStrategyGuide.hero.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-24 md:py-32 px-5 md:px-8">
        <div className="grid grid-cols-1 gap-y-24 md:gap-y-32">
          {contentSections.map((section, index) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === section.imageId
            );
            const isReversed = index % 2 !== 0;
            return (
              <section
                key={section.title}
                className="grid items-center gap-12 md:grid-cols-2"
              >
                <div
                  className={cn(
                    'max-w-prose mx-auto',
                    isReversed && 'md:order-2'
                  )}
                >
                  <h2 className="font-headline text-3xl">{section.title}</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                </div>
                <div
                  className={cn('flex mx-auto', isReversed && 'md:order-1')}
                >
                  {image && (
                    <figure className="overflow-hidden rounded-lg aspect-[3/4] max-w-sm w-full relative">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </figure>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-24 md:mt-32 max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl text-center">
            {t('brandStrategyGuide.painPointsTitle')}
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {painPoints.map((item, index) => (
              <div
                key={index}
                className="border border-border p-6 rounded-lg"
              >
                <p className="font-semibold text-destructive">{item.title}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
                <p className="mt-2 text-primary">
                  <span className="font-medium">→</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <h2 className="font-headline text-3xl text-center mb-12">
            {t('brandStrategyGuide.systemWorksTitle')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {systemWorks.map((item, index) => (
              <div
                key={index}
                className="border border-border p-6 rounded-lg flex flex-col"
              >
                <figure className="relative aspect-video w-full overflow-hidden rounded-md mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <h3 className="font-headline text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32 max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl text-center mb-12">
            {t('brandStrategyGuide.achievementsTitle')}
          </h2>
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex items-start bg-card p-4 rounded-lg border border-border"
              >
                <Check className="h-5 w-5 text-accent mr-4 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 md:mt-32 grid items-center gap-12 md:grid-cols-2">
          <div className="max-w-prose mx-auto">
            <Lightbulb className="h-12 w-12 text-primary mb-6" />
            <h2 className="font-headline text-3xl">
              {t('brandStrategyGuide.promise.title')}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t('brandStrategyGuide.promise.description')}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t('brandStrategyGuide.promise.description2')}
            </p>
            <p className="mt-6 font-semibold text-primary">
              {t('brandStrategyGuide.promise.finalMessage')}
            </p>
          </div>
          <div className="flex mx-auto">
            {(() => {
              const image = PlaceHolderImages.find(
                (img) => img.id === 'bsg-promise-2'
              );
              return (
                image && (
                  <figure className="overflow-hidden rounded-lg aspect-[3/4] max-w-sm w-full relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </figure>
                )
              );
            })()}
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className="border-t border-border py-28 md:py-40">
        <div className="container mx-auto w-full max-w-6xl px-5 text-center md:px-8">
          <h3 className="font-headline text-3xl md:text-4xl">
            {t('suiteOffer.title')}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t('suiteOffer.subtitle')}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/the-silent-studio">{t('header.access')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
