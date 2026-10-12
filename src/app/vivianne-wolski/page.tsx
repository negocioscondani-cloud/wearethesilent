'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import {
  VIVIANNE_PRODUCTS,
  VIVIANNE_CATEGORIES,
  VivianneProduct,
} from '@/data/vivianne-products';
import {
  ShoppingBag,
  ExternalLink,
  Heart,
  Sparkles,
  Search,
  SlidersHorizontal,
  X,
  Check,
  Eye,
  ShieldCheck,
  Truck,
  RotateCcw,
  Share2,
  Tag,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

export default function VivianneWolskiPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<VivianneProduct | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

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
          title: 'Vivianne Wolski · The Curated Closet',
          text: 'Descubre el clóset digital y piezas de inversión curadas por Vivianne Wolski.',
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

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((prod) => {
      const matchesCategory =
        activeCategory === 'all' || prod.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        prod.title.toLowerCase().includes(query) ||
        prod.shortTitle.toLowerCase().includes(query) ||
        prod.brand.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isHeroLook && !b.isHeroLook) return -1;
        if (!a.isHeroLook && b.isHeroLook) return 1;
        return 0;
      }
      if (sortBy === 'price-asc') return a.priceNum - b.priceNum;
      if (sortBy === 'price-desc') return b.priceNum - a.priceNum;
      if (sortBy === 'alpha') return a.shortTitle.localeCompare(b.shortTitle);
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Wishlist products
  const wishlistProducts = useMemo(() => {
    return VIVIANNE_PRODUCTS.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  // Styling notes specific to each item
  const STYLING_NOTES: Record<string, string> = {
    'perry-tote-black':
      'Mi bolso insignia de cabecera. Llévalo al hombro con un suéter de lana vibrante o un abrigo camel estructurado. Su división interna permite portar laptop y documentos manteniendo intacta su arquitectura visual.',
    'sueter-lana-cuello-redondo':
      'El tono amarillo radiante rompe la monotonía del asfalto. Me gusta combinarlo con gafas oscuras de sol de acetato negro y pantalones sastre de tiro alto para una presencia imponente.',
    'bolso-bucket-mini-romy':
      'Una caricia de borreguillo. Úsalo cruzado sobre sastrería monocromática o de mano con asa corta para citas informales o cenas donde la textura sea la protagonista.',
    'botas-altas-charlie':
      'La bota de montar llevada a la cúspide del refinamiento. Su caña alta estiliza inmediatamente cualquier silueta sobre faldas midi o vaqueros ceñidos.',
    'gabardina-lana-clasica':
      'Una inversión patrimonial. Olvida abrochar la hebilla de forma rígida; átala con un nudo relajado al frente para lograr un movimiento teatral y desenfadado.',
    'sueter-fair-isle':
      'El encanto del après-ski llevado al armario de asfalto. Acompaña con pantalones de pana o denim crudo de corte recto para un domingo de galerías y café.',
    'atorie-lazy-retro-bag':
      'La pieza que despierta miradas curiosas. Su herraje en oro cepillado y silueta baguette de inspiración vintage son el broche de oro para estilismos minimalistas.',
    'sueter-estilo-rugby':
      'Audaz, deportivo y de alta costura. El cuello blanco en popelina nítida aporta luz al rostro mientras que las franjas anchas transmiten seguridad y dinamismo.',
  };

  const heroTote = VIVIANNE_PRODUCTS.find((p) => p.id === 'perry-tote-black');
  const heroKnit = VIVIANNE_PRODUCTS.find((p) => p.id === 'sueter-lana-cuello-redondo');

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#f5f2eb] font-sans antialiased overflow-x-hidden">
      {/* Editorial Announcement Bar */}
      <div className="bg-[#121212] border-b border-[#232323] px-4 py-2.5 text-xs text-[#dcd7cb] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-block w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] font-medium text-[#c5a059]">
            Curaduría Oficial
          </span>
          <span className="hidden md:inline text-[#555]">|</span>
          <span className="hidden md:inline text-[#999]">
            Piezas auténticas adquiridas directamente en distribuidores oficiales (Tory Burch & Atorie)
          </span>
        </div>

        <div className="flex items-center gap-4 mx-auto sm:mx-0 text-[11px] tracking-wider uppercase">
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="flex items-center gap-1.5 text-[#e5dec9] hover:text-[#c5a059] transition cursor-pointer"
          >
            <Heart className={`w-3.5 h-3.5 ${wishlist.length > 0 ? 'fill-[#c5a059] text-[#c5a059]' : ''}`} />
            <span>Mi Clóset ({wishlist.length})</span>
          </button>
          <span className="text-[#333]">|</span>
          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-[#aaa] hover:text-white transition cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? '¡Enlace Copiado!' : 'Compartir'}</span>
          </button>
        </div>
      </div>

      {/* Luxury Brand Header */}
      <header className="sticky top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Signature */}
          <div className="flex flex-col">
            <a
              href="#top"
              className="text-2xl sm:text-3xl font-serif tracking-[0.22em] text-[#f8f5ee] uppercase font-light hover:opacity-90 transition"
            >
              Vivianne Wolski
            </a>
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c5a059] font-medium">
              The Curated Closet · Haute Selection
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#9f9b90]">
            <a href="#hero-look" className="hover:text-[#c5a059] transition">
              Look de Portada
            </a>
            <a href="#closet-catalog" className="hover:text-[#c5a059] transition">
              El Clóset
            </a>
            <a href="#claves-estilo" className="hover:text-[#c5a059] transition">
              Claves de Estilo
            </a>
            <a href="#autenticidad" className="hover:text-[#c5a059] transition">
              Autenticidad
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#closet-catalog"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c5a059]/40 bg-[#c5a059]/10 text-xs text-[#e8dcb8] tracking-widest uppercase hover:bg-[#c5a059] hover:text-black transition duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Ver Colección ({VIVIANNE_PRODUCTS.length})</span>
            </a>
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Ver piezas guardadas"
              className="relative p-2.5 rounded-full border border-[#262626] bg-[#111] hover:border-[#c5a059] text-[#e8dcb8] transition cursor-pointer"
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'fill-[#c5a059] text-[#c5a059]' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c5a059] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top">
        {/* HERO SECTION: "The Signature Look" with interactive photo */}
        <section id="hero-look" className="relative py-12 sm:py-20 border-b border-[#1b1b1b] overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#c5a059]/5 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Editorial Photo with Interactive Hotspots */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-[500px] lg:max-w-none rounded-2xl overflow-hidden border border-[#2b2b2b] bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                  {/* Aspect wrapper */}
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/vivianne-wolski-hero.jpg"
                      alt="Vivianne Wolski luciendo el suéter de lana amarillo y el bolso Perry Tote de Tory Burch"
                      fill
                      priority
                      className="object-cover object-center filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Hotspot 1: Tory Burch Perry Tote (Bag / Shoulder area) */}
                    <div className="absolute top-[68%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-20">
                      <button
                        onClick={() => {
                          if (heroTote) setSelectedProduct(heroTote);
                        }}
                        onMouseEnter={() => setActiveHotspot('tote')}
                        onMouseLeave={() => setActiveHotspot(null)}
                        aria-label="Ver detalles del bolso Perry Tote"
                        className="relative group/pin p-2 cursor-pointer focus:outline-none"
                      >
                        <span className="absolute -inset-1 rounded-full bg-[#c5a059]/40 animate-ping" />
                        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#c5a059] text-black font-bold text-xs shadow-lg hover:scale-110 transition">
                          1
                        </span>
                      </button>

                      {/* Floating tooltip */}
                      <div
                        className={`absolute bottom-full right-0 mb-3 w-56 p-3 rounded-xl bg-[#141414]/95 border border-[#c5a059]/40 backdrop-blur-md shadow-2xl transition-all duration-300 pointer-events-auto z-30 ${
                          activeHotspot === 'tote' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-wider text-[#c5a059] font-medium">Pieza 01 · Bolso</p>
                        <p className="text-xs font-semibold text-white">Perry Tote in Black</p>
                        <p className="text-[11px] text-[#bbb] mt-0.5">$395 USD · Tory Burch</p>
                        <a
                          href="https://go.shopmy.us/p-92983886"
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="mt-2 block w-full py-1 text-center bg-[#c5a059] text-black text-[10px] font-bold uppercase tracking-wider rounded hover:bg-white transition"
                        >
                          Comprar en Tienda ↗
                        </a>
                      </div>
                    </div>

                    {/* Hotspot 2: Wool Sweater (Chest area) */}
                    <div className="absolute top-[48%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20">
                      <button
                        onClick={() => {
                          if (heroKnit) setSelectedProduct(heroKnit);
                        }}
                        onMouseEnter={() => setActiveHotspot('knit')}
                        onMouseLeave={() => setActiveHotspot(null)}
                        aria-label="Ver detalles del suéter de lana amarillo"
                        className="relative group/pin p-2 cursor-pointer focus:outline-none"
                      >
                        <span className="absolute -inset-1 rounded-full bg-[#c5a059]/40 animate-ping" />
                        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#c5a059] text-black font-bold text-xs shadow-lg hover:scale-110 transition">
                          2
                        </span>
                      </button>

                      {/* Floating tooltip */}
                      <div
                        className={`absolute bottom-full left-0 mb-3 w-56 p-3 rounded-xl bg-[#141414]/95 border border-[#c5a059]/40 backdrop-blur-md shadow-2xl transition-all duration-300 pointer-events-auto z-30 ${
                          activeHotspot === 'knit' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-wider text-[#c5a059] font-medium">Pieza 02 · Knitwear</p>
                        <p className="text-xs font-semibold text-white">Suéter de Lana Pura</p>
                        <p className="text-[11px] text-[#bbb] mt-0.5">$595 USD · Tory Burch</p>
                        <a
                          href="https://go.shopmy.us/p-92158272"
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="mt-2 block w-full py-1 text-center bg-[#c5a059] text-black text-[10px] font-bold uppercase tracking-wider rounded hover:bg-white transition"
                        >
                          Comprar en Tienda ↗
                        </a>
                      </div>
                    </div>

                    {/* Badge on Photo */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <div className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#c5a059]/40 text-[#f5ebd2] text-xs font-medium tracking-wide flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>Look de Portada · Vivianne Signature</span>
                      </div>
                      <span className="text-[11px] text-[#aaa] font-mono tracking-widest uppercase">
                        2 Piezas Activas
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Text & Quick Shop */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1812] border border-[#c5a059]/30 text-[#c5a059] text-xs tracking-[0.25em] uppercase w-fit mb-5">
                  <Tag className="w-3 h-3" />
                  <span>The Signature Statement</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#faf7f0] font-light tracking-tight leading-[1.15] mb-6">
                  La audacia de vestir con <span className="italic font-normal text-[#c5a059]">intención</span> y presencia.
                </h1>

                <div className="relative pl-5 border-l-2 border-[#c5a059]/50 mb-8">
                  <p className="text-sm sm:text-base text-[#cfc8b8] leading-relaxed italic font-serif">
                    &ldquo;El estilo maduro no busca pedir permiso: define el estándar. Este clóset digital es mi selección personal de prendas de inversión: donde un bolso de cuero estructurado y un suéter de punto impecable construyen una presencia magnética en cualquier ciudad del mundo.&rdquo;
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
                    — Vivianne Wolski
                  </p>
                </div>

                {/* Direct Look Summary Cards */}
                <div className="space-y-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-[#111] border border-[#222] hover:border-[#c5a059]/50 transition flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold text-xs flex items-center justify-center">
                        1
                      </span>
                      <div>
                        <h2 className="text-xs sm:text-sm font-semibold text-white">Perry Tote in Black · Tory Burch</h2>
                        <p className="text-[11px] text-[#999]">Piel granulada italiana de alta resistencia</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-[#c5a059]">$395 USD</p>
                      <a
                        href="https://go.shopmy.us/p-92983886"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-[10px] text-white hover:text-[#c5a059] flex items-center gap-1 underline underline-offset-2 transition"
                      >
                        Comprar Oficial <ArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#111] border border-[#222] hover:border-[#c5a059]/50 transition flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#c5a059] text-black font-bold text-xs flex items-center justify-center">
                        2
                      </span>
                      <div>
                        <h2 className="text-xs sm:text-sm font-semibold text-white">Suéter de Lana Cuello Redondo · Tory Burch</h2>
                        <p className="text-[11px] text-[#999]">100% lana virgen en tono mostaza de alta vibración</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-bold text-[#c5a059]">$595 USD</p>
                      <a
                        href="https://go.shopmy.us/p-92158272"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-[10px] text-white hover:text-[#c5a059] flex items-center gap-1 underline underline-offset-2 transition"
                      >
                        Comprar Oficial <ArrowRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#closet-catalog"
                    className="px-6 py-3 rounded-full bg-[#c5a059] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.25)] flex items-center gap-2"
                  >
                    <span>Explorar Todo el Clóset</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      if (heroTote) setSelectedProduct(heroTote);
                    }}
                    className="px-5 py-3 rounded-full border border-[#333] hover:border-[#c5a059] text-xs text-[#cfc8b8] tracking-[0.15em] uppercase hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Detalles del Look</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSET SECTION: Interactive Walk-in Closet & Filters */}
        <section id="closet-catalog" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#2d2d2d] text-[#c5a059] text-xs tracking-[0.25em] uppercase mb-4">
              <ShoppingBag className="w-3 h-3" />
              <span>The Walk-in Closet Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#faf7f0] font-light tracking-wide mb-4">
              Las 8 Piezas Escogidas por Vivianne
            </h2>
            <p className="text-sm text-[#a39e93] leading-relaxed">
              Explora las prendas y accesorios seleccionados por su corte arquitectónico, materiales nobles y durabilidad de alta gama. Haz clic en cualquier pieza para adquirirla de forma segura en la tienda oficial del diseñador.
            </p>
          </div>

          {/* Interactive Filtering & Controls Bar */}
          <div className="bg-[#101010] border border-[#222] rounded-2xl p-4 sm:p-5 mb-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {VIVIANNE_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-xs tracking-wider uppercase transition cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#c5a059] text-black font-bold shadow-md'
                          : 'bg-[#181818] text-[#aaa] hover:text-white hover:bg-[#222] border border-[#282828]'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-black/20 text-black' : 'bg-black/40 text-[#777]'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex items-center gap-3">
                {/* Search Input */}
                <div className="relative flex-1 md:w-56">
                  <Search className="w-3.5 h-3.5 text-[#777] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar en el clóset..."
                    className="w-full bg-[#181818] border border-[#2b2b2b] rounded-full pl-9 pr-8 py-2 text-xs text-white placeholder-[#666] focus:outline-none focus:border-[#c5a059] transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777] hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Ordenar productos"
                    className="bg-[#181818] border border-[#2b2b2b] rounded-full px-3.5 py-2 text-xs text-[#cfc8b8] focus:outline-none focus:border-[#c5a059] cursor-pointer"
                  >
                    <option value="featured">Destacados</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="alpha">Nombre: A - Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Active filter count indicator */}
          <div className="flex items-center justify-between text-xs text-[#888] mb-6 px-1">
            <p>
              Mostrando <span className="text-[#f5ebd2] font-semibold">{filteredProducts.length}</span> de {VIVIANNE_PRODUCTS.length} piezas en el clóset
            </p>
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="text-[#c5a059] hover:underline cursor-pointer"
              >
                Limpiar filtro de categoría
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-[#111] border border-[#222]">
              <SlidersHorizontal className="w-10 h-10 text-[#444] mx-auto mb-3" />
              <p className="text-base text-[#cfc8b8]">No se encontraron piezas con ese término.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#c5a059] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Restablecer Clóset
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {filteredProducts.map((product) => {
                const isSaved = wishlist.includes(product.id);
                return (
                  <article
                    key={product.id}
                    className="group relative flex flex-col rounded-2xl bg-[#0f0f0f] border border-[#202020] hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(197,160,89,0.12)]"
                  >
                    {/* Image Container with Badges */}
                    <div
                      className="relative aspect-square w-full bg-[#181818] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none">
                        {product.badge ? (
                          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-semibold tracking-wider uppercase">
                            {product.badge}
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          onClick={(e) => toggleWishlist(product.id, e)}
                          aria-label="Guardar en mi clóset"
                          className="pointer-events-auto p-2 rounded-full bg-black/70 backdrop-blur-md border border-[#333] hover:border-[#c5a059] text-white transition hover:scale-110 cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#c5a059] text-[#c5a059]' : 'text-white'}`}
                          />
                        </button>
                      </div>

                      {/* Quick view hover pill */}
                      <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-[#f5ebd2] text-xs font-medium border border-[#333] flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                          <span>Ver Detalles</span>
                        </span>
                      </div>
                    </div>

                    {/* Product Card Details */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Brand & Category */}
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#888] mb-1.5">
                          <span className="text-[#c5a059] font-semibold">{product.brand}</span>
                          <span>{product.categoryLabel}</span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => setSelectedProduct(product)}
                          className="font-serif text-base sm:text-lg text-[#faf7f0] font-light leading-snug line-clamp-2 hover:text-[#c5a059] transition cursor-pointer mb-2"
                        >
                          {product.shortTitle}
                        </h3>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-base font-bold text-white tracking-wide">
                            {product.price}
                          </span>
                          <span className="text-[10px] text-[#777] uppercase tracking-wider">
                            PVP Oficial
                          </span>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-[#a09a8c] line-clamp-2 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-3 border-t border-[#1d1d1d] flex flex-col gap-2">
                        {/* Primary Affiliate Buy Button */}
                        <a
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="w-full py-2.5 px-3 rounded-xl bg-[#c5a059] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(197,160,89,0.2)] hover:shadow-none"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Comprar en Tienda Oficial</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>

                        {/* Secondary Details Button */}
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="w-full py-1.5 text-center text-[11px] text-[#888] hover:text-[#c5a059] transition uppercase tracking-wider cursor-pointer"
                        >
                          Ver Estilismo & Medidas
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* EDITORIAL SECTION: Vivianne's Styling Philosophy */}
        <section id="claves-estilo" className="py-16 sm:py-24 bg-[#0a0a0a] border-t border-b border-[#1b1b1b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-medium">
                Filosofía de Armario
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#faf7f0] font-light mt-3 mb-4">
                Las 3 Claves del Clóset Vivianne Wolski
              </h2>
              <p className="text-sm text-[#9f9a8e] leading-relaxed">
                Cómo construir una identidad visual contundente invirtiendo en pocas piezas seleccionadas con criterio editorial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Rule 1 */}
              <div className="p-7 rounded-2xl bg-[#111] border border-[#222] relative group hover:border-[#c5a059]/50 transition">
                <span className="text-3xl font-serif font-light text-[#c5a059]/40 group-hover:text-[#c5a059] transition">
                  01
                </span>
                <h3 className="text-lg font-serif text-white font-medium mt-3 mb-2">
                  La Proporción y la Arquitectura
                </h3>
                <p className="text-xs text-[#a09b8f] leading-relaxed">
                  Un bolso de hombro o tote estructurado en piel granulada no es un accesorio secundario: es el ancla que da rigor formal a prendas sueltas o texturas envolventes.
                </p>
                <div className="mt-4 pt-4 border-t border-[#1d1d1d] flex items-center justify-between text-[11px] text-[#c5a059]">
                  <span>Pieza sugerida: Perry Tote</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Rule 2 */}
              <div className="p-7 rounded-2xl bg-[#111] border border-[#222] relative group hover:border-[#c5a059]/50 transition">
                <span className="text-3xl font-serif font-light text-[#c5a059]/40 group-hover:text-[#c5a059] transition">
                  02
                </span>
                <h3 className="text-lg font-serif text-white font-medium mt-3 mb-2">
                  El Color como Declaración
                </h3>
                <p className="text-xs text-[#a09b8f] leading-relaxed">
                  El amarillo mostaza y los motivos jacquard en lana virgen no buscan la discreción tímida: inyectan luz, energía y sofisticación al paisaje invernal con total distinción.
                </p>
                <div className="mt-4 pt-4 border-t border-[#1d1d1d] flex items-center justify-between text-[11px] text-[#c5a059]">
                  <span>Pieza sugerida: Suéter Lana Pura</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Rule 3 */}
              <div className="p-7 rounded-2xl bg-[#111] border border-[#222] relative group hover:border-[#c5a059]/50 transition">
                <span className="text-3xl font-serif font-light text-[#c5a059]/40 group-hover:text-[#c5a059] transition">
                  03
                </span>
                <h3 className="text-lg font-serif text-white font-medium mt-3 mb-2">
                  La Pisada Inquebrantable
                </h3>
                <p className="text-xs text-[#a09b8f] leading-relaxed">
                  Las botas altas en piel de becerro hasta la rodilla con tacón bloque alargan la silueta y brindan la estabilidad necesaria para transitar el día con elegancia natural.
                </p>
                <div className="mt-4 pt-4 border-t border-[#1d1d1d] flex items-center justify-between text-[11px] text-[#c5a059]">
                  <span>Pieza sugerida: Botas Charlie</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST & AUTHENTICITY PILLARS */}
        <section id="autenticidad" className="py-12 bg-[#0c0c0c] border-b border-[#1c1c1c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center p-4">
                <ShieldCheck className="w-6 h-6 text-[#c5a059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Tiendas Oficiales
                </h4>
                <p className="text-[11px] text-[#888] mt-1">
                  Redirección directa y segura a Tory Burch y Atorie
                </p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Truck className="w-6 h-6 text-[#c5a059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Envíos Globales
                </h4>
                <p className="text-[11px] text-[#888] mt-1">
                  Cobertura internacional con packaging oficial de lujo
                </p>
              </div>

              <div className="flex flex-col items-center p-4">
                <RotateCcw className="w-6 h-6 text-[#c5a059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Garantía & Devoluciones
                </h4>
                <p className="text-[11px] text-[#888] mt-1">
                  Respaldadas por las políticas oficiales de la firma
                </p>
              </div>

              <div className="flex flex-col items-center p-4">
                <Sparkles className="w-6 h-6 text-[#c5a059] mb-2" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Afiliado Verificado
                </h4>
                <p className="text-[11px] text-[#888] mt-1">
                  Curaduría respaldada mediante red oficial ShopMy
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* QUICK VIEW MODAL (DIALOG) */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent className="max-w-3xl bg-[#111] border border-[#2b2b2b] text-[#f5f2eb] p-0 overflow-hidden sm:rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
              {/* Product Image */}
              <div className="relative aspect-square md:aspect-auto md:min-h-[420px] bg-[#1a1a1a]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {selectedProduct.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-bold uppercase tracking-wider">
                    {selectedProduct.badge}
                  </span>
                )}
              </div>

              {/* Product Details & Purchase CTA */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <DialogHeader className="p-0 text-left">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#888] mb-1">
                      <span className="text-[#c5a059] font-bold">{selectedProduct.brand}</span>
                      <span>{selectedProduct.categoryLabel}</span>
                    </div>
                    <DialogTitle className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight mb-2">
                      {selectedProduct.shortTitle}
                    </DialogTitle>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-xl font-bold text-white">{selectedProduct.price}</span>
                      <span className="text-[11px] text-[#777] uppercase tracking-wider">En tienda oficial</span>
                    </div>
                  </DialogHeader>

                  {/* Vivianne's Styling Note */}
                  <div className="p-3.5 rounded-xl bg-[#171717] border border-[#262626] mb-4">
                    <p className="text-[11px] uppercase tracking-wider text-[#c5a059] font-medium mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>Nota de Estilismo de Vivianne</span>
                    </p>
                    <p className="text-xs text-[#cfc8b8] leading-relaxed italic">
                      &ldquo;{STYLING_NOTES[selectedProduct.id] || selectedProduct.description}&rdquo;
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  {selectedProduct.details && selectedProduct.details.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[11px] uppercase tracking-wider text-[#888] font-semibold mb-2">
                        Especificaciones & Confección:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#bbb]">
                        {selectedProduct.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#222] space-y-2.5">
                  <a
                    href={selectedProduct.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-3 px-4 rounded-xl bg-[#c5a059] hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ir a Comprar en Tienda Oficial ↗</span>
                  </a>

                  <div className="flex items-center justify-between text-[11px] text-[#777] px-1">
                    <button
                      onClick={() => toggleWishlist(selectedProduct.id)}
                      className="hover:text-[#c5a059] transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          wishlist.includes(selectedProduct.id) ? 'fill-[#c5a059] text-[#c5a059]' : ''
                        }`}
                      />
                      <span>
                        {wishlist.includes(selectedProduct.id)
                          ? 'En tu clóset guardado'
                          : 'Guardar en mi selección'}
                      </span>
                    </button>
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3" />
                      Vía enlace ShopMy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* WISHLIST DRAWER (SHEET) */}
      <Sheet open={isWishlistOpen} onOpenChange={setIsWishlistOpen}>
        <SheetContent className="bg-[#101010] border-l border-[#262626] text-white p-6 w-full sm:max-w-md flex flex-col justify-between">
          <div>
            <SheetHeader className="text-left mb-6">
              <SheetTitle className="text-xl font-serif text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
                <span>Tu Clóset Guardado</span>
              </SheetTitle>
              <SheetDescription className="text-xs text-[#888]">
                Piezas seleccionadas para tu próxima compra de inversión.
              </SheetDescription>
            </SheetHeader>

            {wishlistProducts.length === 0 ? (
              <div className="text-center py-12 text-[#666]">
                <Heart className="w-10 h-10 text-[#333] mx-auto mb-3" />
                <p className="text-xs">Aún no has guardado piezas en tu clóset.</p>
                <p className="text-[11px] text-[#555] mt-1">
                  Haz clic en el corazón de cualquier artículo para conservarlo aquí.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {wishlistProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#161616] border border-[#222]"
                  >
                    <div className="relative w-14 h-14 rounded-lg bg-[#222] overflow-hidden shrink-0">
                      <Image src={p.image} alt={p.shortTitle} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-[#c5a059] uppercase tracking-wider">{p.brand}</p>
                      <h4 className="text-xs font-medium text-white truncate">{p.shortTitle}</h4>
                      <p className="text-xs font-bold text-[#e5dec9]">{p.price}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="p-2 rounded-lg bg-[#c5a059] text-black hover:bg-white transition"
                        title="Comprar en tienda oficial"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => toggleWishlist(p.id)}
                        className="p-1 text-[#666] hover:text-red-400 transition"
                        title="Eliminar de guardados"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {wishlistProducts.length > 0 && (
            <div className="pt-4 border-t border-[#222]">
              <div className="flex items-center justify-between text-xs text-[#aaa] mb-3">
                <span>Total estimado ({wishlistProducts.length} piezas):</span>
                <span className="text-sm font-bold text-[#c5a059]">
                  ${wishlistProducts.reduce((acc, curr) => acc + curr.priceNum, 0)} USD
                </span>
              </div>
              <button
                onClick={() => {
                  setWishlist([]);
                  localStorage.removeItem('vivianne_wishlist');
                }}
                className="w-full py-2 rounded-lg border border-[#2a2a2a] text-[#888] hover:text-white text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Vaciar Guardados
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* DEDICATED LUXURY FOOTER */}
      <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-12 text-[#999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#181818]">
            {/* Signature Brand */}
            <div>
              <p className="text-2xl font-serif tracking-[0.25em] text-[#faf7f0] uppercase font-light">
                Vivianne Wolski
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-medium mt-1">
                The Curated Closet · Haute Selection
              </p>
              <p className="text-xs text-[#777] mt-3 max-w-md leading-relaxed">
                Estilo personal, piezas de inversión y curaduría de autor. Cada prenda ha sido seleccionada por su excelencia en corte, confección y longevidad estética.
              </p>
            </div>

            {/* Quick anchors */}
            <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest text-[#bbb]">
              <a href="#hero-look" className="hover:text-[#c5a059] transition">
                Look de Portada
              </a>
              <a href="#closet-catalog" className="hover:text-[#c5a059] transition">
                Todo el Clóset
              </a>
              <a href="#claves-estilo" className="hover:text-[#c5a059] transition">
                Claves de Estilo
              </a>
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="hover:text-[#c5a059] transition cursor-pointer"
              >
                Mi Clóset ({wishlist.length})
              </button>
            </div>
          </div>

          {/* Legal and Affiliate Disclosure */}
          <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] leading-relaxed text-[#666]">
            <div className="max-w-2xl">
              <p className="font-semibold text-[#888] uppercase tracking-wider mb-1">
                Aviso de Transparencia & Afiliación ShopMy:
              </p>
              <p>
                Vivianne Wolski es afiliada oficial del programa de creadores de ShopMy. Al hacer clic en los enlaces de compra y adquirir productos en las plataformas de Tory Burch LLC y Atorie, podemos percibir una comisión de afiliación sin ningún coste adicional para ti. Todos los pedidos, cobros, envíos internacionales y garantías son gestionados y ejecutados de forma directa y exclusiva por las tiendas oficiales de cada marca.
              </p>
            </div>

            <div className="text-right text-[#555] shrink-0">
              <p>© {new Date().getFullYear()} Vivianne Wolski.</p>
              <p className="text-[10px] tracking-widest uppercase mt-0.5">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
