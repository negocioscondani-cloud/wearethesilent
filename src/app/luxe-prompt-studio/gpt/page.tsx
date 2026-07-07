
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

function LuxePromptStudioGptPage() {
  const { t } = useTranslation();

  const usageGuide = [
    {
      title: 'Select Your Style',
      description: 'Specify the visual style you want to replicate, such as "minimal Prada" or "timeless Hermès," to guide the AI in generating appropriate prompts.',
    },
    {
      title: 'Describe Your Concept',
      description: 'Provide a clear concept for your image, like "a close-up of a luxury watch on a marble surface," to get precise and relevant visual outputs.',
    },
    {
      title: 'Control the Details',
      description: 'Ask the GPT to generate prompts that control camera angles, lighting, and textures to achieve a professional, editorial look.',
    },
    {
      title: 'Generate Variations',
      description: 'Request multiple prompt variations for the same concept to explore different creative directions and select the best fit for your campaign.',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-4xl py-16 md:py-24">
        <header className="text-center">
          <Bot className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-headline md:text-5xl">
            Luxe Prompt Studio GPT
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your invisible art director for generating cinematic prompts. Transform abstract ideas into editorial luxury images with precision.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link
              href="/suite-offer/checkout"
            >
              Open Luxe Prompt Studio GPT <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </header>

        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-headline text-3xl">
              How to Use Your Art Director
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, simply type 'Start' in the chat to activate your art director.
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

export default LuxePromptStudioGptPage;
