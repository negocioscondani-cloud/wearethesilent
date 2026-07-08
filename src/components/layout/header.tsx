'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/use-translation';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();

  if (pathname.startsWith('/the-silent-studio-guide') || pathname.startsWith('/manual')) {
    return null;
  }

  const mainNavLinks = [
    { href: '/blog', label: t('header.blog') },
    { href: '/editorial-resources', label: t('header.resources') },
    { href: '/contact', label: t('header.contact') },
  ];

  const mobileNavLinks = [...mainNavLinks];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-headline text-xl tracking-wider uppercase">
          {t('header.brand')}
        </Link>
        <div className="flex items-center gap-1 md:gap-4">
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {mainNavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] bg-background">
                <nav className="flex flex-col space-y-6 mt-8">
                  {mobileNavLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-semibold hover:text-foreground"
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
