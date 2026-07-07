'use client';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (pathname.startsWith('/the-silent-studio-guide') || pathname.startsWith('/manual')) {
    return null;
  }

  return (
    <footer className="border-t border-border py-12 text-xs text-muted-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <p className="uppercase tracking-wider">{t('header.brand')}</p>
        <div className="flex items-center gap-6">
           <Link
            href="/the-silent-studio"
            className="transition hover:text-foreground"
          >
            {t('header.studio')}
          </Link>
          <Link
            href="/blog"
            className="transition hover:text-foreground"
          >
            {t('header.blog')}
          </Link>
          <Link
            href="/editorial-resources"
            className="transition hover:text-foreground"
          >
            {t('footer.links.resources')}
          </Link>
          <Link href="/contact" className="transition hover:text-foreground">
            {t('footer.links.contact')}
          </Link>
        </div>
         <p>{currentYear ? t('footer.copyright', { year: currentYear }) : ' '}</p>
      </div>
    </footer>
  );
}
