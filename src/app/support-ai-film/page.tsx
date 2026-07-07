'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, PlayCircle, Vote, Info } from 'lucide-react';

export default function SupportAiFilmPage() {
  const { t } = useTranslation();

  return (
    <div className="animate-in fade-in duration-1000 bg-background text-foreground flex flex-col items-center">
      {/* Header Section */}
      <section className="container mx-auto max-w-4xl py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-7xl font-headline italic mb-6">
          {t('supportFilm.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t('supportFilm.subtitle')}
        </p>
      </section>

      {/* Body Section: Steps */}
      <section className="container mx-auto max-w-5xl pb-24 space-y-24">
        {/* Step 1: Video */}
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <PlayCircle size={16} /> {t('supportFilm.step1')}
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(197,160,89,0.1)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/ZpDbLLAT0cI"
              title="The Silent Studio Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-muted-foreground italic">
            {t('supportFilm.viewNote')}
          </p>
        </div>

        {/* Step 2: CTA Button */}
        <div className="space-y-8 text-center bg-zinc-900/50 p-12 rounded-[2rem] border border-gold/10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Vote size={16} /> {t('supportFilm.step2')}
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <Button
              asChild
              size="lg"
              className="bg-[#ccff00] text-black font-black uppercase tracking-widest hover:bg-[#b3e600] transition-all py-10 px-8 md:px-16 text-xl md:text-2xl shadow-[0_0_40px_rgba(204,255,0,0.4)] hover:scale-105 duration-300 w-full whitespace-normal h-auto leading-tight"
            >
              <Link href="https://higgsfield.ai/contests/make-your-action-scene/submissions/50b28150-dddf-40ab-8502-30b4d6d48c28?utm_source=contest_submission_page_copy_link&utm_medium=share&utm_content=contest_submission" target="_blank" rel="noopener noreferrer">
                {t('supportFilm.cta')}
              </Link>
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Info size={14} className="text-gold" />
              <p>{t('supportFilm.loginNote')}</p>
            </div>
          </div>

          {/* Closing Context: Microspora Narrative */}
          <div className="mt-16 pt-12 border-t border-white/5 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Heart className="text-gold" size={24} />
              </div>
              <div>
                <h3 className="font-headline text-2xl mb-4 text-white">
                  {t('supportFilm.closing.title')}
                </h3>
                <div className="text-muted-foreground leading-loose text-sm md:text-base space-y-4">
                  <p className="italic">
                    {t('supportFilm.closing.body')}
                  </p>
                  <p className="text-xs text-gray-500 pt-4 border-t border-white/5">
                    I am Daniel Calderon, Motion Graphics specialist and founder of The Silent Studio. This action scene is just the beginning of a larger vision. Support generative AI talent by sharing this page.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="text-gold font-bold text-xs">#Microspora</span>
                  <span className="text-gold font-bold text-xs">#TheSilentStudio</span>
                  <span className="text-gold font-bold text-xs">#AIFilm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
