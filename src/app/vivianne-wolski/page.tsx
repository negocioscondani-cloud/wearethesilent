'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  VIVIANNE_PRODUCTS,
  VIVIANNE_CATEGORIES,
  VIVIANNE_LOOKS,
  DOMINGO_DE_LOS_NUMEROS,
  VivianneProduct,
} from '@/data/vivianne-products';
import {
  ExternalLink,
  Heart,
  Search,
  X,
  Share2,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  Bookmark,
  Check,
  Headphones,
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import AudioPlaylist from '@/components/vivianne/audio-playlist';

export default function VivianneWolskiPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<VivianneProduct | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  // Load wishlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vivianne_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleWishlist = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('vivianne_wishlist', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://go.shopmy.us/p-92983886';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'El Armario de Vivienne · Vivienne Wolski',
          text: 'Lo que Vivienne usa. Lo que Vivienne cuenta. Piezas de inversión curadas.',
          url,
        });
      } catch {
        // ignore share cancellation
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSent(true);
    }
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((prod) => {
      const matchesCategory =
        activeCategory === 'all' || prod.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        prod.name.toLowerCase().includes(query) ||
        prod.title.toLowerCase().includes(query) ||
        prod.shortTitle.toLowerCase().includes(query) ||
        prod.brand.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.viviNote.toLowerCase().includes(query) ||
        prod.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isHeroLook && !b.isHeroLook) return -1;
        if (!a.isHeroLook && b.isHeroLook) return 1;
        return 0;
      }
      if (sortBy === 'price-asc') return a.priceNum - b.priceNum;
      if (sortBy === 'price-desc') return b.priceNum - a.priceNum;
      if (sortBy === 'alpha') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Wishlist products
  const wishlistProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] font-sans antialiased selection:bg-[#B08D57]/30 selection:text-[#2B1D14]">
      {/* 1. EDITORIAL ANNOUNCEMENT & TRANSPARENCY BAR */}
      <div className="bg-[#FAF5EC] border-b border-[#B08D57]/25 px-4 py-2 text-center">
        <p className="font-mono text-[10px] sm:text-xs text-[#7C6E65] uppercase tracking-[0.2em]">
          El Armario de Vivienne · Piezas de inversión curadas · Enlaces directos a tiendas oficiales
        </p>
      </div>

      {/* 2. MAIN BOUTIQUE HEADER */}
      <header className="sticky top-0 z-40 bg-[#F7F1E6]/95 backdrop-blur-md border-b border-[#B08D57]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Left: Quiet Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#catalogo"
                className="font-serif text-xs uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition"
              >
                Catálogo
              </a>
              <a
                href="#looks"
                className="font-serif text-xs uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition"
              >
                Los Looks
              </a>
              <Link
                href="/domingo"
                className="font-serif text-xs uppercase tracking-[0.2em] text-[#6B1F2A] font-semibold hover:text-[#2B1D14] transition"
              >
                El Domingo
              </Link>
              <a
                href="#wolski-club"
                className="font-serif text-xs uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition"
              >
                Wolski Club
              </a>
              <a
                href="#sobre-vivienne"
                className="font-serif text-xs uppercase tracking-[0.2em] text-[#2B1D14] hover:text-[#6B1F2A] transition"
              >
                Sobre Vivienne
              </a>
            </nav>

            {/* Center: Brand Crest */}
            <div className="text-center">
              <Link href="/vivianne-wolski" className="inline-block group">
                <span className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2B1D14] group-hover:text-[#6B1F2A] transition block">
                  El Armario de Vivienne
                </span>
                <span className="font-serif italic text-xs sm:text-sm text-[#B08D57] tracking-wider block mt-0.5">
                  Lo que Vivienne usa. Lo que Vivienne cuenta.
                </span>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href="https://www.instagram.com/vivianne_wolski/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @vivianne_wolski"
                className="p-2 text-[#7C6E65] hover:text-[#6B1F2A] transition cursor-pointer"
                title="Instagram @vivianne_wolski"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <button
                onClick={handleShare}
                aria-label="Compartir catálogo"
                className="p-2 text-[#7C6E65] hover:text-[#2B1D14] transition cursor-pointer"
                title="Compartir"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                className="flex items-center gap-2 border border-[#B08D57]/40 hover:border-[#B08D57] px-3.5 py-1.5 rounded-sm bg-[#FAF5EC] text-[#2B1D14] hover:text-[#6B1F2A] transition cursor-pointer"
                title="Ver piezas guardadas"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    wishlist.length > 0 ? 'fill-[#6B1F2A] text-[#6B1F2A]' : 'text-[#7C6E65]'
                  }`}
                />
                <span className="font-mono text-[10px] uppercase tracking-wider hidden sm:inline">
                  Guardadas
                </span>
                {wishlist.length > 0 && (
                  <span className="font-mono text-[10px] text-[#6B1F2A] font-bold">
                    ({wishlist.length})
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        {copiedLink && (
          <div className="bg-[#6B1F2A] text-[#F7F1E6] text-center text-xs py-1 font-mono tracking-widest uppercase animate-fade-in">
            Enlace copiado al portapapeles
          </div>
        )}
      </header>

      <main>
        {/* 3. HERO SECTION: EDITORIAL SALON */}
        <section className="relative pt-8 pb-16 sm:pb-24 border-b border-[#B08D57]/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-[#E8DFD0] rounded-sm overflow-hidden border border-[#B08D57]/30 shadow-xl group">
                  <Image
                    src="/images/vivianne-wolski-hero.jpg"
                    alt="Vivienne Wolski con suéter amarillo de lana y bolso de mano Tory Burch"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top filter contrast-[1.03] transition duration-700 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1D14]/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle caption */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#F7F1E6]/90 backdrop-blur-sm p-3 border border-[#B08D57]/30 rounded-xs flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xs text-[#2B1D14] font-medium">Vivienne Wolski, 82 años</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#7C6E65]">Criterio propio e indiscutible</p>
                    </div>
                    <span className="font-script text-xl text-[#6B1F2A]">V. Wolski</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Claim & Manifesto */}
              <div className="lg:col-span-6 flex flex-col justify-center max-w-xl mx-auto lg:max-w-none text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#FAF5EC] border border-[#B08D57]/40 text-[#B08D57] font-mono text-[10px] tracking-[0.25em] uppercase w-fit mx-auto lg:mx-0 mb-6">
                  <span>Edición de Otoño & Invierno</span>
                </div>

                <h1 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-[#2B1D14] tracking-tight leading-[1.08] mb-6">
                  Lo que Vivienne usa.
                  <span className="block italic text-[#6B1F2A] font-normal mt-1">Y por qué.</span>
                </h1>

                <p className="font-serif italic text-lg sm:text-xl text-[#6B1F2A] leading-relaxed mb-6 border-l-0 lg:border-l-2 lg:border-[#B08D57] lg:pl-5">
                  &ldquo;A los 82 años una ya no tiene tiempo para comprar dos veces la misma tontería. Se elige con rigor, se lleva con aplomo y se deja que la prenda hable.&rdquo;
                </p>

                <p className="text-sm text-[#7C6E65] leading-relaxed mb-8 font-normal max-w-lg mx-auto lg:mx-0">
                  Una selección estricta de prendas de inversión donde cada textura, forro y corte tiene una razón observable de ser. Sin prisas, sin logotipos ruidosos y sin trucos de ocasión.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#catalogo"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-[#2B1D14] text-[#F7F1E6] hover:bg-[#6B1F2A] font-mono text-xs uppercase tracking-[0.2em] transition duration-300 shadow-md text-center"
                  >
                    Ver el armario
                  </a>
                  <a
                    href="#wolski-club"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-sm border border-[#B08D57]/60 hover:border-[#2B1D14] text-[#2B1D14] hover:text-[#6B1F2A] font-mono text-xs uppercase tracking-[0.15em] transition duration-300 text-center"
                  >
                    Entrar al Wolski Club
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED BAND: EL WOLSKI CLUB & EL DOMINGO DE LOS NÚMEROS */}
        <section id="wolski-club" className="py-16 sm:py-20 bg-[#FAF5EC] border-b border-[#B08D57]/20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-[#B08D57]/40 p-8 sm:p-12 bg-[#F7F1E6] rounded-sm shadow-sm relative">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#B08D57]/20">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold border border-[#B08D57]/30 bg-[#FAF5EC] px-2.5 py-1 rounded-xs">
                      <Headphones className="w-3 h-3 text-[#6B1F2A]" />
                      <span>{DOMINGO_DE_LOS_NUMEROS.badge}</span>
                    </span>
                    <span className="text-[#B08D57]">·</span>
                    <span className="font-mono text-[10px] text-[#6B1F2A] font-bold">
                      USD {DOMINGO_DE_LOS_NUMEROS.priceFormatted}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1D14] font-normal tracking-tight">
                    {DOMINGO_DE_LOS_NUMEROS.title}
                  </h2>

                  <p className="font-serif italic text-base sm:text-lg text-[#6B1F2A] leading-relaxed">
                    &ldquo;{DOMINGO_DE_LOS_NUMEROS.description}&rdquo;
                  </p>
                </div>

                <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3 text-left lg:text-right">
                  <a
                    href={DOMINGO_DE_LOS_NUMEROS.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] rounded-sm transition duration-300 shadow-md text-center"
                  >
                    <span>{DOMINGO_DE_LOS_NUMEROS.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/domingo"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-3.5 border border-[#B08D57] hover:border-[#6B1F2A] bg-[#FAF5EC] hover:bg-white text-[#6B1F2A] font-mono text-xs uppercase tracking-[0.18em] rounded-sm transition duration-300 text-center"
                  >
                    <span>Abrir Compañero Web</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B08D57]" />
                  </Link>

                  <p className="font-mono text-[9px] text-[#7C6E65] text-center lg:text-right">
                    Acceso inmediato a los audios y herramienta interactiva
                  </p>
                </div>
              </div>

              {/* 3 Pillars Grid: Carácter, Finanzas, Estilo */}
              <div className="pt-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-4 text-center sm:text-left">
                  LOS TRES PILARES DEL WOLSKI CLUB
                </p>
                <div className="grid sm:grid-cols-3 gap-6">
                  {DOMINGO_DE_LOS_NUMEROS.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#FAF5EC] border border-[#B08D57]/25 rounded-xs space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#6B1F2A] font-bold">0{idx + 1}.</span>
                        <h4 className="font-serif text-base text-[#2B1D14] font-medium">{pillar.title}</h4>
                      </div>
                      <p className="text-xs text-[#7C6E65] leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="font-mono text-[10px] text-[#7C6E65] uppercase tracking-wider pt-6 text-center sm:text-left">
                  {DOMINGO_DE_LOS_NUMEROS.label}
                </p>
              </div>

              {/* SPOTIFY-STYLE AUDIO PLAYLIST */}
              <div className="pt-10 mt-8 border-t border-[#B08D57]/25">
                <AudioPlaylist />
              </div>
            </div>
          </div>
        </section>

        {/* 5. "LOS LOOKS DE VIVI" (Curated Complete Outfits) */}
        <section id="looks" className="py-20 sm:py-28 border-b border-[#B08D57]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
                COMPOSICIONES COMPLETAS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1D14] font-light tracking-tight">
                Los looks de Vivi
              </h2>
              <p className="font-serif italic text-sm sm:text-base text-[#7C6E65] mt-3">
                Prendas que se conocen entre sí. Tres conjuntos armados con las piezas de su armario.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {VIVIANNE_LOOKS.map((look) => {
                const lookProducts = VIVIANNE_PRODUCTS.filter((p) =>
                  look.productIds.includes(p.id)
                );

                return (
                  <div
                    key={look.id}
                    className="bg-[#FAF5EC] border border-[#B08D57]/30 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#B08D57] transition-all duration-300 group shadow-xs"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[4/5] w-full bg-[#E8DFD0] overflow-hidden border-b border-[#B08D57]/20">
                        <Image
                          src={look.image}
                          alt={look.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-[#F7F1E6]/95 border border-[#B08D57]/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest text-[#2B1D14]">
                          {look.tagline}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-serif text-xl text-[#2B1D14] font-normal mb-2">
                          {look.name}
                        </h3>
                        <p className="text-xs text-[#7C6E65] leading-relaxed mb-6 font-normal">
                          {look.description}
                        </p>

                        {/* Pieces in look */}
                        <div className="space-y-2 border-t border-[#B08D57]/20 pt-4">
                          <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold">
                            Piezas que lo componen:
                          </p>
                          <ul className="space-y-1.5">
                            {lookProducts.map((p) => (
                              <li key={p.id}>
                                <button
                                  onClick={() => setSelectedProduct(p)}
                                  className="w-full text-left text-xs text-[#2B1D14] hover:text-[#6B1F2A] flex items-center justify-between group/item py-1"
                                >
                                  <span className="font-serif group-hover/item:underline underline-offset-2 truncate pr-2">
                                    {p.name}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#6B1F2A] shrink-0 font-medium">
                                    {p.price}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => {
                          const firstPiece = lookProducts[0];
                          if (firstPiece) setSelectedProduct(firstPiece);
                        }}
                        className="w-full py-2.5 border border-[#2B1D14]/30 hover:border-[#2B1D14] text-[#2B1D14] hover:text-[#6B1F2A] font-mono text-[10px] uppercase tracking-[0.18em] transition text-center rounded-xs cursor-pointer"
                      >
                        Ver piezas del look
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. CATÁLOGO: EXPANSIVE, AIRY TORY BURCH STYLE */}
        <section id="catalogo" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
              SELECCIÓN EDITORIAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1D14] font-light tracking-tight mb-4">
              El Catálogo
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#7C6E65] leading-relaxed">
              Ocho piezas escogidas por su corte arquitectónico, materiales nobles y durabilidad de alta gama.
            </p>
          </div>

          {/* ROW 1: CATEGORY TABS (TORY BURCH STYLE - SPACIOUS, UNHURRIED, NO CROWDED PILLS) */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-6 sm:gap-10 overflow-x-auto scrollbar-none pb-2 border-b border-[#B08D57]/20">
              {VIVIANNE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap pb-3 transition-all duration-300 font-serif text-xs sm:text-sm tracking-[0.18em] uppercase cursor-pointer flex items-center gap-1.5 relative ${
                      isActive
                        ? 'text-[#2B1D14] font-semibold border-b-2 border-[#B08D57]'
                        : 'text-[#7C6E65] hover:text-[#2B1D14] border-b-2 border-transparent'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="font-mono text-[10px] text-[#B08D57] font-normal">
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ROW 2: SEPARATED REFINEMENT BAR (SEARCH, COUNT & SORT WITH GENEROUS AIR) */}
          <div className="border-y border-[#B08D57]/25 py-4 mb-12 bg-[#FAF5EC]/70 rounded-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2 sm:px-4">
              {/* Left: Product Counter */}
              <div className="font-mono text-xs text-[#7C6E65] uppercase tracking-wider text-center md:text-left">
                Mostrando <span className="text-[#2B1D14] font-semibold">{filteredProducts.length}</span> de{' '}
                {VIVIANNE_PRODUCTS.length} piezas en el armario
              </div>

              {/* Center: Clean Luxury Search */}
              <div className="relative w-full sm:w-80">
                <Search className="w-3.5 h-3.5 text-[#B08D57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar prenda, tono o material..."
                  className="w-full bg-[#F7F1E6] border border-[#B08D57]/40 focus:border-[#2B1D14] rounded-sm pl-9 pr-8 py-2 text-xs text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none transition font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7C6E65] hover:text-[#2B1D14] p-1"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Right: Clean Luxury Sort */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#7C6E65] hidden lg:inline">
                  Ordenar:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Ordenar piezas"
                  className="bg-[#F7F1E6] border border-[#B08D57]/40 focus:border-[#2B1D14] rounded-sm px-3 py-1.5 text-xs text-[#2B1D14] font-serif tracking-wider focus:outline-none cursor-pointer w-full sm:w-auto"
                >
                  <option value="featured">Selección de Vivi</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="alpha">Nombre: A - Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID: 4:5 IMAGE RATIO, TORY BURCH LUXURY AIR, NOTA DE VIVI */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 px-6 bg-[#FAF5EC] border border-[#B08D57]/30 rounded-sm max-w-xl mx-auto my-8">
              <SlidersHorizontal className="w-8 h-8 text-[#B08D57] mx-auto mb-4" />
              <p className="font-serif italic text-lg sm:text-xl text-[#6B1F2A] mb-3">
                &ldquo;Aquí todavía no hay nada, querida. Y eso también es elegancia.&rdquo;
              </p>
              <p className="text-xs text-[#7C6E65] mb-6 font-normal">
                No hay piezas que coincidan con la búsqueda actual.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-6 py-2.5 bg-[#2B1D14] text-[#F7F1E6] hover:bg-[#6B1F2A] font-mono text-[10px] uppercase tracking-[0.2em] rounded-sm transition"
              >
                Ver todo el armario
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
              {filteredProducts.map((prod) => {
                const isSaved = wishlist.includes(prod.id);

                return (
                  <div
                    key={prod.id}
                    className="bg-[#FAF7F2] border border-[#E8DFD0] hover:border-[#B08D57] transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md"
                  >
                    <div>
                      {/* 4:5 Product Image Box */}
                      <div
                        onClick={() => setSelectedProduct(prod)}
                        className="relative aspect-[4/5] w-full bg-[#E8DFD0] overflow-hidden cursor-pointer"
                      >
                        <Image
                          src={prod.image}
                          alt={prod.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover object-center transition duration-700 group-hover:scale-105"
                        />

                        {/* Top Overlay Badge */}
                        {prod.badge && (
                          <div className="absolute top-3 left-3 bg-[#F7F1E6]/95 border border-[#B08D57]/40 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#2B1D14]">
                            {prod.badge}
                          </div>
                        )}

                        {/* Wishlist Button */}
                        <button
                          onClick={(e) => toggleWishlist(prod.id, e)}
                          aria-label={isSaved ? 'Quitar de guardadas' : 'Guardar para después'}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F7F1E6]/90 hover:bg-[#F7F1E6] border border-[#B08D57]/30 flex items-center justify-center transition shadow-xs cursor-pointer z-10"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 transition ${
                              isSaved ? 'fill-[#6B1F2A] text-[#6B1F2A]' : 'text-[#7C6E65] hover:text-[#6B1F2A]'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        {/* Brand */}
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-1">
                          {prod.brand}
                        </p>

                        {/* Name */}
                        <h3
                          onClick={() => setSelectedProduct(prod)}
                          className="font-serif text-lg text-[#2B1D14] font-normal leading-snug hover:text-[#6B1F2A] transition cursor-pointer mb-2 line-clamp-2"
                        >
                          {prod.name}
                        </h3>

                        {/* Price in small-caps */}
                        <p className="font-mono text-xs uppercase tracking-wider text-[#6B1F2A] font-bold mb-4">
                          {prod.price}
                        </p>

                        {/* Vivienne's Note (Burgundy handwritten/italic style) */}
                        <div className="border-l-2 border-[#B08D57]/50 pl-3 py-1 mb-4 bg-[#F7F1E6]/60">
                          <p className="font-serif italic text-xs text-[#6B1F2A] leading-relaxed">
                            &ldquo;{prod.viviNote}&rdquo;
                          </p>
                          <span className="font-script text-base text-[#B08D57] block text-right mt-0.5">
                            — Vivi
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-5 pt-0 space-y-2">
                      <a
                        href={prod.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="w-full py-3 bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-[10px] uppercase tracking-[0.18em] transition duration-300 text-center flex items-center justify-center gap-1.5 rounded-sm shadow-xs"
                      >
                        <span>Ver en la tienda</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="w-full py-2 border border-[#B08D57]/30 hover:border-[#2B1D14] text-[#7C6E65] hover:text-[#2B1D14] font-mono text-[9px] uppercase tracking-[0.15em] transition text-center rounded-sm cursor-pointer"
                      >
                        Detalles de la pieza
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 7. SOBRE VIVIENNE WOLSKI */}
        <section id="sobre-vivienne" className="py-20 sm:py-28 bg-[#FAF5EC] border-y border-[#B08D57]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
              EL MANIFIESTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B1D14] font-light tracking-tight mb-8">
              Sobre Vivienne
            </h2>

            <div className="space-y-6 font-serif text-lg sm:text-xl text-[#2B1D14] leading-relaxed max-w-2xl mx-auto">
              <p>
                &ldquo;Tengo 82 años. He visto pasar suficientes modas pasajeras como para saber que la elegancia no es hacer ruido, sino saber salir de una habitación dejando una estela de orden.&rdquo;
              </p>
              <p className="font-sans text-sm text-[#7C6E65] leading-relaxed font-normal">
                Vivienne no vende promociones ni novedades semanales. Su clóset digital es un archivo vivo de piezas de diseñador y marcas independientes seleccionadas por su arquitectura, resistencia y capacidad de trascender temporadas.
              </p>
            </div>

            {/* MANDATORY AI DISCLOSURE */}
            <div className="mt-12 inline-block border border-[#B08D57]/40 bg-[#F7F1E6] px-6 py-3 rounded-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#7C6E65]">
                Nota de transparencia: Vivienne Wolski es un personaje creado con inteligencia artificial.
              </p>
            </div>
          </div>
        </section>

        {/* 8. NEWSLETTER: LAS SEÑALES DE VIVIENNE */}
        <section className="py-20 sm:py-24 border-b border-[#B08D57]/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
              CORRESPONDENCIA PRIVADA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1D14] font-light tracking-tight mb-3">
              Las señales de Vivienne
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-[#6B1F2A] mb-8">
              Una señal a la semana. Sin ruido. Con elegancia.
            </p>

            {newsletterSent ? (
              <div className="p-6 bg-[#FAF5EC] border border-[#B08D57]/40 rounded-sm animate-fade-in max-w-md mx-auto">
                <p className="font-serif italic text-base text-[#6B1F2A]">
                  &ldquo;Anotada. Le avisaré cuando haya algo digno de su tiempo.&rdquo;
                </p>
                <span className="font-script text-xl text-[#B08D57] block mt-1">— Vivienne</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Su correo electrónico..."
                  className="flex-1 bg-[#FAF5EC] border border-[#B08D57]/40 focus:border-[#2B1D14] rounded-sm px-4 py-3 text-xs text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-[10px] uppercase tracking-[0.2em] rounded-sm transition cursor-pointer"
                >
                  Quiero las señales
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* 9. FOOTER & COMPREHENSIVE DISCLOSURES */}
      <footer className="bg-[#FAF5EC] border-t border-[#B08D57]/30 py-16 text-[#7C6E65]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-[#B08D57]/20">
            <div className="md:col-span-5 space-y-3">
              <span className="font-serif text-2xl text-[#2B1D14] font-normal block">
                El Armario de Vivienne
              </span>
              <p className="font-serif italic text-xs text-[#6B1F2A]">
                Lo que Vivienne usa. Lo que Vivienne cuenta.
              </p>
              <p className="text-xs text-[#7C6E65] leading-relaxed max-w-sm">
                Boutique editorial de piezas de inversión. Los enlaces de productos dirigen a tiendas oficiales de cada diseñador.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#2B1D14] font-bold">
                Aviso de Afiliación & Precios
              </p>
              <p className="text-xs text-[#7C6E65] leading-relaxed">
                Algunos enlaces son de afiliado: si compra desde ellos, puedo recibir una comisión, sin costo extra para usted. Precios y disponibilidad según la tienda oficial del vendedor.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#2B1D14] font-bold">
                Navegación
              </p>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a href="#catalogo" className="hover:text-[#2B1D14] transition">
                    Ver el armario
                  </a>
                </li>
                <li>
                  <a href="#looks" className="hover:text-[#2B1D14] transition">
                    Los looks de Vivi
                  </a>
                </li>
                <li>
                  <Link href="/domingo" className="hover:text-[#2B1D14] transition font-medium text-[#6B1F2A]">
                    El Domingo de los Números (Compañero)
                  </Link>
                </li>
                <li>
                  <a href="#wolski-club" className="hover:text-[#2B1D14] transition">
                    El Wolski Club (Audios)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vivianne_wolski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#6B1F2A] transition flex items-center gap-1.5"
                  >
                    <span>Instagram (@vivianne_wolski)</span>
                    <ExternalLink className="w-3 h-3 text-[#B08D57]" />
                  </a>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-[#2B1D14] transition">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#2B1D14] transition">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-[#2B1D14] transition">
                    Política de cookies
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-[#2B1D14] transition">
                    Política de reembolso
                  </Link>
                </li>
                <li>
                  <Link href="/legal-notice" className="hover:text-[#2B1D14] transition">
                    Aviso legal (LSSI-CE)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#B08D57]/20 text-[10px] text-[#7C6E65] leading-relaxed">
            <p>
              <strong>Aviso de Afiliación Comercial (FTC / Directiva UE):</strong> Los enlaces salientes de compra en este armario utilizan enlaces de afiliación de ShopMy y marcas oficiales. Al comprar a través de ellos, podemos percibir una comisión editorial sin coste adicional para usted. Las transacciones, pagos, garantías y envíos se completan exclusivamente en las plataformas externas oficiales.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#9C8F85]">
            <p>© {new Date().getFullYear()} El Armario de Vivienne · Todos los derechos reservados.</p>
            <p>Vivienne Wolski es un personaje creado con inteligencia artificial · Fines de entretenimiento e inspiración de estilo.</p>
          </div>
        </div>
      </footer>

      {/* PRODUCT QUICK VIEW MODAL */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-[#F7F1E6] border border-[#B08D57]/40 text-[#2B1D14] p-0 overflow-hidden rounded-sm shadow-2xl">
          {selectedProduct && (
            <div>
              <div className="grid sm:grid-cols-2">
                {/* Product Image */}
                <div className="relative aspect-[4/5] bg-[#E8DFD0] overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-xs bg-[#F7F1E6]/95 border border-[#B08D57]/40 text-[9px] font-mono uppercase tracking-widest text-[#2B1D14]">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div>
                    <DialogHeader className="p-0 text-left mb-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold">
                        {selectedProduct.brand}
                      </p>
                      <DialogTitle className="font-serif text-xl sm:text-2xl text-[#2B1D14] font-normal leading-tight mt-1">
                        {selectedProduct.name}
                      </DialogTitle>
                      <p className="font-mono text-sm text-[#6B1F2A] font-bold mt-1">
                        {selectedProduct.price}
                      </p>
                    </DialogHeader>

                    {/* Nota de Vivi */}
                    <div className="border-l-2 border-[#B08D57] pl-3 py-1 mb-4 bg-[#FAF5EC]">
                      <p className="font-serif italic text-xs text-[#6B1F2A] leading-relaxed">
                        &ldquo;{selectedProduct.viviNote}&rdquo;
                      </p>
                      <span className="font-script text-base text-[#B08D57] block text-right">
                        — Vivi
                      </span>
                    </div>

                    {/* Lo que ella ve (3 bullets) */}
                    <div className="space-y-2 mb-4">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#7C6E65] font-semibold">
                        Lo que ella ve:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#2B1D14]">
                        {selectedProduct.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0 mt-1.5" />
                            <span className="leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cómo lo lleva */}
                    <div className="mb-4">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#7C6E65] font-semibold mb-1">
                        Cómo lo lleva:
                      </p>
                      <p className="text-xs text-[#7C6E65] italic leading-relaxed">
                        {selectedProduct.howSheWearsIt}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2 pt-2 border-t border-[#B08D57]/20">
                    <a
                      href={selectedProduct.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full py-3 bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-[10px] uppercase tracking-[0.18em] transition text-center flex items-center justify-center gap-1.5 rounded-sm shadow-sm"
                    >
                      <span>Ver en la tienda</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex items-center justify-between text-[10px] text-[#7C6E65] pt-1">
                      <button
                        onClick={() => toggleWishlist(selectedProduct.id)}
                        className="hover:text-[#6B1F2A] flex items-center gap-1 font-mono uppercase tracking-wider cursor-pointer"
                      >
                        <Heart
                          className={`w-3 h-3 ${
                            wishlist.includes(selectedProduct.id)
                              ? 'fill-[#6B1F2A] text-[#6B1F2A]'
                              : ''
                          }`}
                        />
                        <span>
                          {wishlist.includes(selectedProduct.id)
                            ? 'Guardada'
                            : 'Guardar para después'}
                        </span>
                      </button>

                      <span className="font-mono text-[9px]">Tienda Oficial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* WISHLIST SLIDE-OVER SHEET */}
      <Sheet open={isWishlistOpen} onOpenChange={setIsWishlistOpen}>
        <SheetContent className="bg-[#F7F1E6] border-l border-[#B08D57]/40 text-[#2B1D14] w-full sm:max-w-md p-6 flex flex-col justify-between">
          <div>
            <SheetHeader className="text-left pb-4 border-b border-[#B08D57]/20">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57]">
                Colección Personal
              </span>
              <SheetTitle className="font-serif text-2xl text-[#2B1D14] font-normal">
                Piezas Guardadas
              </SheetTitle>
              <SheetDescription className="text-xs text-[#7C6E65]">
                {wishlist.length === 0
                  ? 'Aún no ha seleccionado piezas para su archivo personal.'
                  : `${wishlist.length} pieza(s) apartada(s) para su posterior revisión.`}
              </SheetDescription>
            </SheetHeader>

            <div className="py-6 space-y-4 overflow-y-auto max-h-[60vh] pr-1">
              {wishlistProducts.length === 0 ? (
                <div className="text-center py-12 text-[#7C6E65]">
                  <Bookmark className="w-8 h-8 text-[#B08D57]/50 mx-auto mb-3" />
                  <p className="font-serif italic text-sm text-[#6B1F2A]">
                    &ldquo;Aquí todavía no hay nada, querida.&rdquo;
                  </p>
                  <p className="text-xs mt-1">Guarde piezas desde el catálogo para tenerlas a mano.</p>
                </div>
              ) : (
                wishlistProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-3 p-3 bg-[#FAF5EC] border border-[#B08D57]/30 rounded-sm"
                  >
                    <div className="relative w-14 h-16 bg-[#E8DFD0] rounded-xs overflow-hidden shrink-0">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[9px] text-[#B08D57] uppercase">{p.brand}</p>
                      <h4 className="font-serif text-xs text-[#2B1D14] font-medium truncate">
                        {p.name}
                      </h4>
                      <p className="font-mono text-[10px] text-[#6B1F2A] font-bold">{p.price}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="px-2.5 py-1 bg-[#2B1D14] hover:bg-[#6B1F2A] text-[#F7F1E6] font-mono text-[9px] uppercase tracking-wider rounded-xs"
                      >
                        Tienda ↗
                      </a>
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="text-[10px] text-[#7C6E65] hover:text-[#6B1F2A]"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#B08D57]/20 text-center">
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="w-full py-2.5 border border-[#2B1D14]/30 hover:border-[#2B1D14] text-[#2B1D14] font-mono text-[10px] uppercase tracking-[0.18em] rounded-sm transition"
            >
              Volver al armario
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
