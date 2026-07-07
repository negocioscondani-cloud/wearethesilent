
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

function UgcSocietyGptPage() {
  const { t } = useTranslation();

  const usageGuide = [
    {
      title: 'Define Your Niche',
      description:
        'Start by telling the GPT about your luxury niche (e.g., "minimalist skincare," "equestrian lifestyle," "vintage timepieces"). This helps it tailor its responses.',
    },
    {
      title: 'Ask for Strategy',
      description:
        'Request a 30, 60, or 90-day content plan. Example: "Give me a 30-day content calendar for a UGC creator in the minimalist skincare niche."',
    },
    {
      title: 'Generate Scripts',
      description:
        'Ask for specific video scripts. Example: "Write a 15-second Reel script for an unboxing of a luxury watch."',
    },
    {
      title: 'Find Your Audience',
      description:
        'Use it to define your ideal client. Example: "Describe the target audience for a brand that sells sustainable, high-end yoga wear."',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-4xl py-16 md:py-24">
        <header className="text-center">
          <Bot className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-headline md:text-5xl">
            The UGC Society GPT
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your silent mentor for creating luxury UGC content. Use this tool to
            generate strategies, scripts, and ideas with editorial precision.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link
              href="/suite-offer/checkout"
            >
              Open The UGC Society GPT <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </header>

        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-headline text-3xl">
              How to Use Your Mentor
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, simply type 'Start' in the chat to activate your mentor.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
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

export default UgcSocietyGptPage;
