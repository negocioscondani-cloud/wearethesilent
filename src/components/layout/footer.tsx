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

  const hiddenRoutes = ['/', '/oferta', '/galeria', '/we-are-the-silent', '/menu-digital', '/reels-ia', '/reels'];
  if (
    pathname.startsWith('/the-silent-studio-guide') || 
    pathname.startsWith('/manual') ||
    pathname.startsWith('/vivianne') ||
    pathname.startsWith('/closet') ||
    pathname.startsWith('/domingo') ||
    hiddenRoutes.includes(pathname)
  ) {
    return null;
  }

  return (
    <footer className="border-t border-border py-12 text-xs text-muted-foreground bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <p className="uppercase tracking-wider">{t('header.brand')}</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
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

      {/* LEGAL ROW */}
      <div className="mx-auto mt-6 pt-6 border-t border-border/40 max-w-6xl px-5 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-500 font-mono">
        <Link href="/terms-of-service" className="hover:text-zinc-300 transition underline underline-offset-4">
          Términos y Condiciones
        </Link>
        <span>·</span>
        <Link href="/privacy-policy" className="hover:text-zinc-300 transition underline underline-offset-4">
          Política de Privacidad (RGPD)
        </Link>
        <span>·</span>
        <Link href="/cookie-policy" className="hover:text-zinc-300 transition underline underline-offset-4">
          Política de Cookies
        </Link>
        <span>·</span>
        <Link href="/refund-policy" className="hover:text-zinc-300 transition underline underline-offset-4">
          Política de Reembolso
        </Link>
        <span>·</span>
        <Link href="/legal-notice" className="hover:text-zinc-300 transition underline underline-offset-4">
          Aviso Legal LSSI-CE
        </Link>
      </div>
    </footer>
  );
}
