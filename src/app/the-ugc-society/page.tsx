
'use client';
import { Button } from '@/components/ui/button';
import { Check, Info, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

const allProductsData = [
  {
    id: 'luxe-prompt-studio',
    image: {
      imageUrl: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif',
      description: 'A detailed shot of luxurious, textured fabric with soft lighting.',
      imageHint: 'fabric texture',
    },
    href: '/luxe-prompt-studio',
    titleKey: 'home.pillars.atelier.title'
  },
  {
    id: 'oracle-agency',
    image: {
      imageUrl: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110938.avif',
      description: 'A close-up view of intricate sewing details on a high-fashion garment.',
      imageHint: 'sewing detail',
    },
    href: '/the-oracle-luxe-agency',
    titleKey: 'home.pillars.authority.title'
  },
  {
    id: 'ugc-society',
    href: '/suite-offer/checkout',
    titleKey: 'home.pillars.influence.title',
    subtitleKey: 'home.pillars.influence.subtitle',
    bodyKey: 'home.pillars.influence.body'
  },
];

export default function TheUgcSocietyPage() {
  const { t } = useTranslation();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'product-1');
  const bundleFeatures = t('suiteOffer.bundle.features') as string[];

  const currentPageProductData = allProductsData.find(p => p.id === 'ugc-society');
  const otherProductsData = allProductsData.filter(p => p.id !== 'ugc-society');
  
  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        {currentPageProductData && (
          <section id="product-main">
            <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-12">
              <div className="text-center">
                <figure className="relative aspect-[4/3] w-full max-w-2xl mx-auto overflow-hidden rounded-lg border mb-8">
                    <Image
                        src="http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif"
                        alt="The UGC Society"
                        fill
                        className="object-cover"
                        data-ai-hint="modern office"
                    />
                </figure>
                <h1 className="font-headline text-3xl md:text-4xl">
                  {t(currentPageProductData.titleKey)}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  {t(currentPageProductData.subtitleKey)}
                </p>
                <p className="mt-4 max-w-prose mx-auto leading-relaxed text-muted-foreground">
                  {t(currentPageProductData.bodyKey)}
                </p>
                <div className="mt-8 border-t border-b border-border py-6">
                    <h2 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground">Advantage in the Process</h2>
                    <p className="mt-2 text-muted-foreground max-w-prose mx-auto">Within the generative audiovisual process, The UGC Society acts as your strategic foundation. Instead of creating isolated content, this intelligence ensures every visual, script, and narrative is anchored to a coherent and monetizable brand identity. Its advantage is transforming your creative intuition into a structured system, giving your entire audiovisual output a clear purpose and a direct path to influence and profitability.</p>
                </div>
                <Button asChild size="lg" className="mt-8">
                  <Link href="/suite-offer/checkout">{t('home.offer.cta')}</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
      
      <section id="other-suite-products" className="border-t border-border py-24 md:py-36">
        <div className="container mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <h3 className="font-headline text-2xl md:text-3xl">Explore The Trinity</h3>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
             {otherProductsData.map((product) => {
               return (
                  <article key={product.id} className="group flex flex-col">
                    {product.image && (
                        <figure className="relative aspect-[3/4] overflow-hidden border">
                        <Image
                            src={product.image.imageUrl}
                            alt={product.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={product.image.imageHint}
                        />
                        </figure>
                    )}
                    <div className="mt-5 flex flex-col flex-grow text-center">
                      <h4 className="font-headline text-xl">{t(product.titleKey)}</h4>
                      <div className="mt-auto">
                        <Button asChild variant="outline" className="mt-4">
                          <Link href={product.href}>
                             Discover
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
               )
            })}
          </div>
        </div>
      </section>

      <section id="apply" className="border-t border-border py-24 md:py-32">
        <div className="container mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-headline text-3xl md:text-4xl">{t('suiteOffer.bundle.title')}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t('suiteOffer.bundle.description')}
                </p>
                <ul className="mt-6 space-y-3">
                  {bundleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-lg p-8 text-center">
                <h4 className="font-headline text-2xl">{t('suiteOffer.bundle.offerTitle')}</h4>
                <div className="my-6 flex items-center justify-center gap-4">
                  <p className="text-5xl font-bold text-foreground">$197</p>
                </div>
                <Button asChild size="lg" className="w-full">
                  <Link href="/suite-offer/checkout">{t('suiteOffer.bundle.button')}</Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-4">*{t('suiteOffer.bundle.note')}*</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
