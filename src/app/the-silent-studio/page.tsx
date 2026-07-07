
'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

function TheSilentStudioPage() {
  const { t } = useTranslation();
  const bundleFeatures = t('suiteOffer.bundle.features') as string[];
  const paypalHtml = `<div><style>.pp-JZR4QNRMLSQ3N{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style> <form action="https://www.paypal.com/ncp/payment/JZR4QNRMLSQ3N" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;"> <input class="pp-JZR4QNRMLSQ3N" type="submit" value="Comprar ahora" /> <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" /> <section style="font-size: 0.75rem;"> Con la tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section> </form> </div>`


  const tools = [
    {
      key: 'ugc-society',
      href: '/the-ugc-society',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110917.avif',
        alt: 'The UGC Society',
        hint: 'modern office',
      },
    },
    {
      key: 'luxe-prompt-studio',
      href: '/luxe-prompt-studio',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110858.avif',
        alt: 'Luxe Prompt Studio',
        hint: 'fabric texture',
      },
    },
    {
      key: 'oracle-luxe-agency',
      href: '/the-oracle-luxe-agency',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110938.avif',
        alt: 'The Oracle Luxe Agency',
        hint: 'sewing detail',
      },
    },
    {
      key: 'neuro-scoring',
      href: '/neuro-scoring',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif',
        alt: 'Neuro Scoring GPT',
        hint: 'neuroscience brain',
      },
    },
    {
      key: 'alpha-content',
      href: '/alpha-content',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif',
        alt: 'Alpha Content GPT',
        hint: 'calm man nature',
      },
    },
    {
      key: 'cine-ai-director',
      href: '/cine-ai-visual-director',
      image: {
        src: 'http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif',
        alt: 'CineAI Visual Director GPT',
        hint: 'cinema director',
      },
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-6xl py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-headline md:text-5xl mb-4">
            {t('studio.title')}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('studio.subtitle')}
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {tools.map((tool) => (
              <div
                key={tool.key}
                className="flex flex-col text-center"
              >
                <figure className="relative aspect-[3/4] w-full overflow-hidden border">
                  <Image
                    src={tool.image.src}
                    alt={tool.image.alt}
                    fill
                    className="object-cover"
                    data-ai-hint={tool.image.hint}
                  />
                </figure>
                <div className="border-t border-border pt-6 mt-6 flex-grow flex flex-col">
                  <span className="font-headline text-2xl text-muted-foreground">
                    {t(`studio.tools.${tool.key}.number`)}
                  </span>
                  <h3 className="mt-4 font-headline text-2xl md:text-3xl">
                    {t(`studio.tools.${tool.key}.title`)}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-grow">
                    {t(`studio.tools.${tool.key}.description`)}
                  </p>
                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={tool.href}>
                        {t('studio.discover')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="acquire-suite" className="border-t border-border w-full py-24 md:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
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
              <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: paypalHtml }} />
              <p className="text-xs text-muted-foreground mt-4">*{t('suiteOffer.bundle.note')}*</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TheSilentStudioPage;
