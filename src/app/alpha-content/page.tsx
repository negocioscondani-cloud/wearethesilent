
'use client';
import { Button } from '@/components/ui/button';
import { Bot, Lightbulb, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

function AlphaContentGptPage() {
  const { t } = useTranslation();
  const usageGuide = [
    {
      title: 'Define Your Offer and Avatar',
      description: 'Provide the main offer (what you sell), the avatar (who you sell to), and the desired format (Ebook, Guide, etc.).',
    },
    {
      title: 'Receive a Viral-Hook Title',
      description: 'The AI suggests 3 titles with viral hooks combining curiosity and benefit, plus a subtitle that breaks an objection.',
    },
    {
      title: 'Get a Complete Document Structure',
      description: 'From a compelling introduction to a step-by-step "meaty" content section, the AI builds the entire lead magnet structure.',
    },
    {
      title: 'Seamlessly Transition to Your Offer',
      description: 'The content includes a natural bridge to your high-ticket offer, with a soft but firm call-to-action.',
    },
  ];

  return (
    <div className="animate-in fade-in duration-500 flex flex-col items-center">
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border">
                <Image
                    src="http://studioboom.online/wp-content/uploads/2025/12/calde11th_A_calm_grounded_man_in_natural_surroundings_soft_da_8f00816a-b5cb-443b-a6d8-cf0a808652bf_2.avif"
                    alt="Alpha Content GPT"
                    fill
                    className="object-cover"
                    data-ai-hint="calm man nature"
                />
            </figure>
            <header className="text-left">
              <h1 className="text-4xl font-headline md:text-5xl mb-4">
                Alpha Content Architect GPT
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                An elite info-product strategist that transforms your offer into a complete, irresistible lead magnet ready for design.
              </p>
              <div className="mt-8 border-t border-b border-border py-6">
                    <h2 className="text-lg font-semibold tracking-wide uppercase text-muted-foreground">Advantage in the Process</h2>
                    <p className="mt-2 text-muted-foreground">Alpha Content Architect serves to package knowledge into high-value assets. Within the audiovisual process, its benefit is to create lead magnets (guides, ebooks) that act as a narrative preamble to a larger campaign. This intelligence transforms expertise into a tangible product that not only educates but also creates a deep desire for the main offer, generating qualified leads for the final conversion.</p>
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
              How to Use Your Content Architect
            </h2>
            <p className="mt-4 text-muted-foreground">
              To begin, provide your main offer, avatar, and desired format.
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

export default AlphaContentGptPage;
