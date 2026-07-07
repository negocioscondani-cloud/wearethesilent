
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GalleryHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

const galleryImageIds = [
  'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 
  'gallery-6', 'gallery-7', 'gallery-8', 'gallery-9', 'gallery-10', 
  'gallery-11', 'gallery-12', 'gallery-13', 'gallery-14', 'gallery-15', 
  'gallery-16', 'gallery-17', 'gallery-18', 'gallery-19', 'gallery-20', 
  'gallery-21', 'gallery-22', 'gallery-23', 'gallery-24', 'gallery-25'
];

const allGalleryImages = galleryImageIds
  .map((id) => PlaceHolderImages.find((img) => img.id === id))
  .filter(Boolean) as (typeof PlaceHolderImages)[0][];

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default function ResourcesPage() {
  const { t } = useTranslation();
  const [galleryImages, setGalleryImages] = useState<(typeof PlaceHolderImages)[0][]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setGalleryImages(shuffleArray([...allGalleryImages]));
    }
  }, [isMounted]);


  return (
    <div className="animate-in fade-in duration-500 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl py-24 md:py-32 px-5 md:px-8">
        {/* Visual Gallery Section */}
        <section id="gallery">
          <div className="text-center mb-12 md:mb-16">
            <GalleryHorizontal className="h-16 w-16 mx-auto text-primary mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl">Visual Gallery</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of visual moods and editorial aesthetics to
              inspire your brand's direction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {(isMounted && galleryImages.length > 0 ? galleryImages : []).map((image, index) => (
              <figure
                key={image.id}
                className="relative aspect-[3/4] overflow-hidden rounded-lg border"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </figure>
            ))}
            {!isMounted && allGalleryImages.map((image) => (
                <div key={image.id} className="relative aspect-[3/4] bg-muted rounded-lg border" />
            ))
            }
          </div>
        </section>
      </div>
      {/* Final CTA Section */}
      <section className="border-t border-border py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1180px] px-5 text-center md:px-8">
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
