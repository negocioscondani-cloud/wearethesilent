'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Globe, ArrowLeft, Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useLanguage } from '@/context/language-context';
import { useTranslation } from '@/hooks/use-translation';
import { ThemeToggle } from './theme-toggle';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const hiddenRoutes = ['/', '/oferta', '/influencer-ia', '/galeria', '/we-are-the-silent', '/menu-digital', '/reels-ia', '/reels'];
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

  const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog';

  const mainNavLinks = [
    { href: '/', label: language === 'es' ? 'Inicio' : 'Home' },
    { href: '/oferta', label: language === 'es' ? 'Servicios Video IA' : 'AI Video Services' },
    { href: '/influencer-ia', label: language === 'es' ? 'Guía Influencer IA' : 'AI Influencer Guide' },
    { href: '/blog', label: t('header.blog') },
    { href: '/vivianne-wolski', label: 'Vivienne Wolski' },
    { href: '/contact', label: t('header.contact') },
  ];

  const mobileNavLinks = [...mainNavLinks];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0D0E]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 gap-3">
        {/* Left: Explicit Back Button + Brand */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {isBlogPost ? (
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/5 hover:bg-[#C5A059] text-zinc-200 hover:text-black border border-white/15 hover:border-[#C5A059] font-mono text-[11px] uppercase tracking-wider font-semibold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Volver al Blog' : 'Back to Blog'}</span>
            </Link>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/5 hover:bg-[#C5A059] text-zinc-200 hover:text-black border border-white/15 hover:border-[#C5A059] font-mono text-[11px] uppercase tracking-wider font-semibold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
            </Link>
          )}

          <Link
            href="/"
            className="font-headline text-base sm:text-xl tracking-wider uppercase text-white hover:text-[#C5A059] transition hidden xs:inline-block"
          >
            {t('header.brand')}
          </Link>
        </div>

        {/* Right: Navigation & Controls */}
        <div className="flex items-center gap-1 md:gap-4">
          <nav className="hidden items-center gap-5 text-xs font-mono uppercase tracking-wider text-zinc-400 lg:flex">
            {mainNavLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`transition hover:text-[#C5A059] ${
                    isActive ? 'text-[#C5A059] font-bold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change language">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'text-gold font-semibold' : ''}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'text-gold font-semibold' : ''}
              >
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] bg-[#0A0D0E] border-l border-white/10 text-white">
                <nav className="flex flex-col space-y-5 mt-8">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#C5A059] pb-4 border-b border-white/10 text-left"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'es' ? 'Regresar a la página anterior' : 'Go back'}</span>
                  </button>
                  {mobileNavLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-semibold text-zinc-200 hover:text-[#C5A059] transition"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
