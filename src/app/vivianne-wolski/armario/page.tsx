'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  VIVIANNE_PRODUCTS,
  VIVIANNE_CATEGORIES,
  VIVIANNE_LOOKS,
  VivianneProduct,
} from '@/data/vivianne-products';
import {
  ExternalLink,
  Heart,
  Search,
  X,
  Share2,
  ArrowLeft,
  SlidersHorizontal,
  Bookmark,
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

export default function ElArmarioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<VivianneProduct | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

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
    const url =
      typeof window !== 'undefined'
        ? window.location.href
        : 'https://wearethesilent.com/vivianne-wolski/armario';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'El Armario de Vivienne · Vivienne Wolski',
          text: 'Lo que Vivienne usa. Lo que Vivienne cuenta. Piezas de inversión curadas.',
          url,
        });
      } catch {
        // ignore
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

  const filteredProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((prod) => {
      const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
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

  const wishlistProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] font-sans antialiased selection:bg-[#B08D57]/30 selection:text-[#2B1D14]">
      {/* Sticky Minimal Boutique Header */}
      <header className="sticky top-0 z-40 bg-[#F7F1E6]/95 backdrop-blur-md border-b border-[#B08D57]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Left: Back to Vivienne Home */}
            <Link
              href="/vivianne-wolski"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#2B1D14] hover:text-[#6B1F2A] border border-[#B08D57]/40 hover:border-[#6B1F2A] bg-[#FAF5EC] px-3.5 py-2 rounded-xs transition"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#6B1F2A]" />
              <span>Vivienne</span>
            </Link>

            {/* Center: Section Title */}
            <div className="text-center">
              <Link href="/vivianne-wolski" className="inline-block">
                <span className="font-serif font-light text-xl sm:text-3xl tracking-tight text-[#2B1D14] block">
                  El Armario de Vivienne
                </span>
              </Link>
            </div>

            {/* Right: Quick Switchers & Saved Pieces */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/vivianne-wolski/club"
                className="hidden md:inline-block font-serif text-xs uppercase tracking-[0.18em] text-[#5A4D44] hover:text-[#6B1F2A] transition px-2"
              >
                Club Vivi
              </Link>
              <Link
                href="/domingo"
                className="hidden md:inline-block font-serif text-xs uppercase tracking-[0.18em] text-[#5A4D44] hover:text-[#6B1F2A] transition px-2"
              >
                Honestidad Financiera
              </Link>

              <button
                onClick={handleShare}
                aria-label="Compartir armario"
                className="p-2 text-[#7C6E65] hover:text-[#2B1D14] transition cursor-pointer"
                title="Compartir"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                className="flex items-center gap-2 border border-[#B08D57]/40 hover:border-[#B08D57] px-3 py-1.5 rounded-xs bg-[#FAF5EC] text-[#2B1D14] hover:text-[#6B1F2A] transition cursor-pointer"
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
          <div className="bg-[#6B1F2A] text-[#F7F1E6] text-center text-xs py-1 font-mono tracking-widest uppercase">
            Enlace copiado al portapapeles
          </div>
        )}
      </header>

      <main>
        {/* 1. CATÁLOGO DE PIEZAS */}
        <section id="catalogo" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
              PIEZAS DE INVERSIÓN CURADAS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#2B1D14] font-light tracking-tight mb-3">
              El Armario
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-[#6B1F2A] leading-relaxed">
              &ldquo;A los 82 años una ya no tiene tiempo para comprar dos veces la misma tontería. Se elige con rigor y se deja que la prenda hable.&rdquo;
            </p>
          </div>

          {/* Category Tabs */}
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

          {/* Search & Sort Bar */}
          <div className="border-y border-[#B08D57]/25 py-4 mb-12 bg-[#FAF5EC]/70 rounded-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2 sm:px-4">
              <div className="font-mono text-xs text-[#7C6E65] uppercase tracking-wider text-center md:text-left">
                Mostrando <span className="text-[#2B1D14] font-semibold">{filteredProducts.length}</span> de{' '}
                {VIVIANNE_PRODUCTS.length} piezas
              </div>

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

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 px-6 bg-[#FAF5EC] border border-[#B08D57]/30 rounded-sm max-w-xl mx-auto my-8">
              <SlidersHorizontal className="w-8 h-8 text-[#B08D57] mx-auto mb-4" />
              <p className="font-serif italic text-lg sm:text-xl text-[#6B1F2A] mb-3">
                &ldquo;Aquí todavía no hay nada, querida. Y eso también es elegancia.&rdquo;
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

                        {prod.badge && (
                          <div className="absolute top-3 left-3 bg-[#F7F1E6]/95 border border-[#B08D57]/40 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#2B1D14]">
                            {prod.badge}
                          </div>
                        )}

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

                      <div className="p-5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold mb-1">
                          {prod.brand}
                        </p>

                        <h2
                          onClick={() => setSelectedProduct(prod)}
                          className="font-serif text-lg text-[#2B1D14] font-normal leading-snug hover:text-[#6B1F2A] transition cursor-pointer mb-2 line-clamp-2"
                        >
                          {prod.name}
                        </h2>

                        <p className="font-mono text-xs uppercase tracking-wider text-[#6B1F2A] font-bold mb-4">
                          {prod.price}
                        </p>

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

        {/* 2. LOS LOOKS DE VIVI */}
        <section id="looks" className="py-16 sm:py-24 bg-[#FAF5EC] border-t border-[#B08D57]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
                COMPOSICIONES COMPLETAS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1D14] font-light tracking-tight">
                Los looks de Vivi
              </h2>
              <p className="font-serif italic text-sm sm:text-base text-[#7C6E65] mt-2">
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
                    className="bg-[#F7F1E6] border border-[#B08D57]/30 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#B08D57] transition-all duration-300 group shadow-xs"
                  >
                    <div>
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

                      <div className="p-6">
                        <h3 className="font-serif text-xl text-[#2B1D14] font-normal mb-2">
                          {look.name}
                        </h3>
                        <p className="text-xs text-[#7C6E65] leading-relaxed mb-6 font-normal">
                          {look.description}
                        </p>

                        <div className="space-y-2 border-t border-[#B08D57]/20 pt-4">
                          <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold">
                            Piezas que lo componen:
                          </p>
                          <ul className="space-y-1.5">
                            {lookProducts.map((p) => (
                              <li key={p.id}>
                                <button
                                  onClick={() => setSelectedProduct(p)}
                                  className="w-full text-left text-xs text-[#2B1D14] hover:text-[#6B1F2A] flex items-center justify-between group/item py-1 cursor-pointer"
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

        {/* 3. CORRESPONDENCIA PRIVADA */}
        <section className="py-16 sm:py-20 border-t border-[#B08D57]/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold block mb-2">
              CORRESPONDENCIA PRIVADA
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B1D14] font-light tracking-tight mb-2">
              Las señales de Vivienne
            </h2>
            <p className="font-serif italic text-sm sm:text-base text-[#6B1F2A] mb-6">
              Una señal a la semana. Sin ruido. Con elegancia.
            </p>

            {newsletterSent ? (
              <div className="p-6 bg-[#FAF5EC] border border-[#B08D57]/40 rounded-sm max-w-md mx-auto">
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
                  Suscribirse
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF5EC] border-t border-[#B08D57]/30 py-10 text-center text-xs text-[#7C6E65] space-y-3 px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 font-serif uppercase tracking-[0.18em]">
          <Link href="/vivianne-wolski" className="text-[#2B1D14] hover:text-[#6B1F2A]">
            ← Volver a Vivienne
          </Link>
          <span>·</span>
          <Link href="/vivianne-wolski/club" className="hover:text-[#6B1F2A]">
            Club Vivi
          </Link>
          <span>·</span>
          <Link href="/domingo" className="hover:text-[#6B1F2A]">
            Honestidad Financiera
          </Link>
        </div>
        <p className="text-[11px] max-w-xl mx-auto">
          Algunos enlaces son de afiliado (ShopMy): si compra desde ellos, podemos recibir una comisión sin costo adicional para usted. Vivienne Wolski es un personaje creado con inteligencia artificial.
        </p>
      </footer>

      {/* Product Quick View Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-[#F7F1E6] border border-[#B08D57]/40 text-[#2B1D14] p-0 overflow-hidden rounded-sm shadow-2xl">
          {selectedProduct && (
            <div className="grid sm:grid-cols-2">
              <div className="relative aspect-[4/5] bg-[#E8DFD0] overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

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

                  <div className="border-l-2 border-[#B08D57] pl-3 py-1 mb-4 bg-[#FAF5EC]">
                    <p className="font-serif italic text-xs text-[#6B1F2A] leading-relaxed">
                      &ldquo;{selectedProduct.viviNote}&rdquo;
                    </p>
                    <span className="font-script text-base text-[#B08D57] block text-right">
                      — Vivi
                    </span>
                  </div>

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

                  <div className="mb-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#7C6E65] font-semibold mb-1">
                      Cómo lo lleva:
                    </p>
                    <p className="text-xs text-[#7C6E65] italic leading-relaxed">
                      {selectedProduct.howSheWearsIt}
                    </p>
                  </div>
                </div>

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
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Wishlist Slide-Over Sheet */}
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
              Cerrar
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
