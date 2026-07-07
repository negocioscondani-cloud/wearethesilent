
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

function NeuroScoringGptPage() {
  const { t } = useTranslation();
  const usageGuide = [
    {
      title: 'Submit Content for Analysis',
      description: 'Provide any text, script, ad, or image. NeuroGPT will perform an ultra-brief summary to understand its objective.',
    },
    {
      title: 'Receive a Full NeuroMap Diagnosis',
      description: 'The AI identifies the primary and secondary pain points, evaluates all claims, and calculates the "Gain" using the official formula.',
    },
    {
      title: 'Get a Detailed NeuroScoring',
      description: 'Your content is scored across 6 key stimuli (Personal, Tangible, Contrastable, Memorable, Visual, Emotional) for a total of up to 240 points.',
    },
    {
      title: 'Optimize with Tactical Recommendations',
      description: 'Based on cognitive biases, persuasion catalysts, and power words, you get 5-10 specific, actionable recommendations to improve your content.',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
              <Image
                  src="http://studioboom.online/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-16-110928.avif"
                  alt="Neuro Scoring GPT"
                  fill
                  className="object-cover"
                  data-ai-hint="neuroscience brain"
              />
          </figure>
          <header className="text-left">
            <h1 className="text-4xl font-headline md:text-5xl mb-4">
              Neuro Scoring GPT
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your master analyst in NeuroMap, primary brain neuromarketing, and cognitive biases. Analyze, score, and enhance any content for maximum persuasive impact.
            </p>
             <div className="mt-8 border-t border-b border-border py-6">
                  <h2 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground">Advantage in the Process</h2>
                  <p className="mt-2 text-muted-foreground">Neuro Scoring is the quality control engine of the generative process. Its benefit is to scientifically validate the persuasive effectiveness of each audiovisual piece before its launch. This intelligence analyzes scripts, images, and narratives to identify cognitive weak points and provides concrete optimizations, ensuring that every second of content is designed to capture attention and trigger a response.</p>
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
              How to Use Your Neuro-Analyst
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, simply provide the content you want to analyze.
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

export default NeuroScoringGptPage;
