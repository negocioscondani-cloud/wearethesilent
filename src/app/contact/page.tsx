
'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Mail, User, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="h-24 w-24 mx-auto text-primary mb-6" />
        <h1 className="text-4xl font-headline mb-4">{t('contact.title')}</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          {t('contact.description')}
        </p>
        <div className="text-left bg-card p-8 rounded-lg border border-border inline-block">
          <ul className="space-y-4">
            <li className="flex items-center">
              <User className="h-5 w-5 text-accent mr-4" />
              <span>
                {t('contact.company')}: Studio Boom
              </span>
            </li>
            <li className="flex items-center">
              <User className="h-5 w-5 text-accent mr-4" />
              <span>
                {t('contact.name')}: {t('contact.personName')}
              </span>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-accent mr-4" />
              <span>
                {t('contact.email')}:{' '}
                <a
                  href={`mailto:${t('contact.emailAddress')}`}
                  className="underline hover:text-primary"
                >
                  {t('contact.emailAddress')}
                </a>
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-accent mr-4" />
              <span>
                {t('contact.whatsapp')}:{' '}
                <a
                  href={t('contact.whatsappLink')}
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.whatsappNumber')}
                </a>
              </span>
            </li>
            <li className="flex items-center">
              <MapPin className="h-5 w-5 text-accent mr-4" />
              <span>
                {t('contact.origin')}: {t('contact.country')}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
