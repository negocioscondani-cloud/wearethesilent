
'use client';
import { Button } from '@/components/ui/button';
import { Bot, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function SuiteGptPage() {
  const gptTools = [
    {
      title: 'The UGC Society GPT',
      description:
        'Your silent mentor for creating luxury UGC content. Generate strategies, scripts, and ideas with editorial precision.',
      href: '/suite-offer/checkout',
    },
    {
      title: 'Luxe Prompt Studio GPT',
      description:
        'Your invisible art director. Transform abstract ideas into editorial luxury images with cinematic prompts.',
      href: '/suite-offer/checkout',
    },
    {
      title: 'The Oracle Luxe Agency GPT',
      description:
        'Your strategic brain for campaigns. Generate scripts, storytelling frameworks, and consistent brand launches.',
      href: '/suite-offer/checkout',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-4xl py-16 md:py-24">
        <header className="text-center">
          <Sparkles className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-4xl font-headline md:text-5xl">
            The Complete Suite AI Tools
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Access all three exclusive intelligences. Your complete toolkit for mentorship, visual direction, and strategic execution.
          </p>
        </header>

        <section className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            {gptTools.map((tool, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Bot className="h-6 w-6 text-accent" />
                    <span>{tool.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={tool.href}>
                      Open Tool <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SuiteGptPage;
