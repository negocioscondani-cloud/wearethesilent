
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';

function OracleLuxeAgencyGptPage() {
  const { t } = useTranslation();

  const usageGuide = [
    {
      title: 'Define Your Campaign Goal',
      description:
        'Start by telling the GPT the objective of your campaign, such as "launching a new perfume" or "creating an evergreen content series."',
    },
    {
      title: 'Request a Narrative Framework',
      description:
        'Ask for a storytelling structure for your campaign. Example: "Give me a three-part story arc for a 60-second video about a new fashion collection."',
    },
    {
      title: 'Generate Scripts for Platforms',
      description:
        'Get platform-specific scripts. Example: "Write a script for an Instagram Reel and a longer one for YouTube for a luxury travel brand."',
    },
    {
      title: 'Maintain a Consistent Tone',
      description:
        'Use the GPT to review your copy and ensure it aligns with a consistent luxury tone across all your marketing channels.',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-4xl py-16 md:py-24">
        <header className="text-center">
          <Bot className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-headline md:text-5xl">
            The Oracle Luxe Agency GPT
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your strategic brain for luxury audiovisual campaigns. Use this tool to generate scripts, storytelling frameworks, and consistent brand launches.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link
              href="/suite-offer/checkout"
            >
              Open The Oracle Luxe Agency GPT <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </header>

        <section className="mt-20">
          <div className="text-center">
            <h2 className="font-headline text-3xl">
              How to Use Your Strategist
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, simply type 'Start' in the chat to activate your strategist.
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

export default OracleLuxeAgencyGptPage;
