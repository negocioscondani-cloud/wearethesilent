
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight, Clapperboard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

function CineAIGptPage() {
  const { t } = useTranslation();
  const usageGuide = [
    {
      title: 'Define the Master Character Block',
      description: 'Provide a dense paragraph with the 6 pillars of Omnilook: age, ethnicity, skin, hair, facial features, and exact wardrobe.',
    },
    {
      title: 'Provide Your Script',
      description: 'The AI will take your script and break it down scene by scene, associating each line of dialogue with a specific timestamp.',
    },
    {
      title: 'Generate the Production Table',
      description: 'The AI outputs a technical table with 4 columns: Time, Narration, Image Prompt (for Midjourney), and Animation Prompt (for Veo/Gen-3).',
    },
    {
      title: 'Ensure Lip-Sync and Omnilook',
      description: 'The animation prompts include specific lip-sync instructions, and image prompts use the unvarying Master Block to ensure character consistency.',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
              <Image
                  src="http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110842.avif"
                  alt="CineAI Visual Director GPT"
                  fill
                  className="object-cover"
                  data-ai-hint="cinema director"
              />
          </figure>
          <header className="text-left">
            <h1 className="text-4xl font-headline md:text-5xl mb-4">
              CineAI Visual Director GPT
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your AI Cinematography Director and Visual Brand Architect. Turn scripts into a technical production table for absolute visual consistency.
            </p>
             <div className="mt-8 border-t border-b border-border py-6">
                  <h2 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground">Advantage in the Process</h2>
                  <p className="mt-2 text-muted-foreground">CineAI is the technical executor of the audiovisual process. Its primary benefit is ensuring absolute visual consistency and narrative synchronization across different generative platforms (images and video). By creating a master character block and detailed production tables, it guarantees that the final output is a coherent, professional film, not just a sequence of disconnected clips.</p>
              </div>
            <Button asChild size="lg" className="mt-8">
              <Link
                href="/suite-offer/checkout"
              >
                {t('home.offer.cta')}
              </Link>
            </Button>
          </header>
        </div>

        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-headline text-3xl">
              How to Use Your Visual Director
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, provide a script and describe your character to create the Master Block.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {usageGuide.map((item, index) => (
              <div
                key={index}
                className="border border-border p-6 rounded-lg flex items-start"
              >
                <Lightbulb className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CineAIGptPage;
