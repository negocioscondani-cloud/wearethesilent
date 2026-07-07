
'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const sections = t('privacyPolicy.sections') as { title: string; content: string[] }[];

  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <Shield className="h-24 w-24 mx-auto text-primary mb-6" />
            <h1 className="text-4xl font-headline mb-4">{t('privacyPolicy.title')}</h1>
            <p className="text-muted-foreground text-lg">{t('privacyPolicy.lastUpdated')}: {t('privacyPolicy.updateDate')}</p>
        </div>
        <div className="space-y-8">
            {sections.map((section, index) => (
                <div key={index}>
                    <h2 className="text-2xl font-headline mb-4">{section.title}</h2>
                    <div className="space-y-4 text-muted-foreground">
                        {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
