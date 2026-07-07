
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const suiteOfferImage = {
  imageUrl:
    'https://cdn.midjourney.com/3dbd124a-f1e0-42b7-830b-3347fbbc0408/0_1.png',
  description: 'A wide shot of a modern, minimalist interior with clean lines and neutral tones.',
  imageHint: 'modern interior',
};

export default function SuiteOfferCheckoutPage() {
  const { t } = useTranslation();
  const bundleFeatures = t('suiteOffer.bundle.features') as string[];
  const paypalHtml = `<div><style>.pp-JZR4QNRMLSQ3N{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style> <form action="https://www.paypal.com/ncp/payment/JZR4QNRMLSQ3N" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;"> <input class="pp-JZR4QNRMLSQ3N" type="submit" value="Comprar ahora" /> <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" /> <section style="font-size: 0.75rem;"> Con la tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section> </form> </div>`

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] animate-in items-center justify-center py-12 fade-in duration-500">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl w-full">
        <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
          <Image
            src={suiteOfferImage.imageUrl}
            alt={suiteOfferImage.description}
            fill
            className="object-cover"
            data-ai-hint={suiteOfferImage.imageHint}
          />
        </figure>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">
              {t('suiteOffer.bundle.offerTitle')}
            </CardTitle>
            <CardDescription>{t('suiteOffer.bundle.description')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="mb-4 text-sm text-muted-foreground">
                {t('suiteOffer.bundle.title')}
              </p>
              <ul className="space-y-3">
                {bundleFeatures.map((item, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Check className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between rounded-lg border bg-card p-4">
              <span className="font-headline text-xl">Acceso</span>
              <div className="text-right">
                <p className="text-3xl font-bold text-foreground">$197</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-4">
            <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: paypalHtml }} />
             <p className="text-xs text-muted-foreground text-center">*{t('suiteOffer.bundle.note')}*</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
