'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShoppingBag, 
  UtensilsCrossed, 
  Flame, 
  Sparkles, 
  Clock, 
  Truck, 
  Phone, 
  Search, 
  Plus, 
  Minus, 
  Trash2, 
  Gift, 
  Sliders, 
  ChevronRight, 
  Check, 
  X, 
  ExternalLink, 
  Calculator, 
  Percent, 
  MessageCircle, 
  ShieldCheck, 
  Smartphone,
  ChevronDown
} from 'lucide-react';

// --- CONFIGURACIÓN Y TIPOS ---
interface MenuItem {
  id: number;
  name: string;
  category: string;
  desc: string;
  price: number;
  badge: string | null;
  img: string;
}

interface ComboItem {
  id: number;
  title: string;
  desc: string;
  oldPrice: number;
  price: number;
  discount: string;
  img: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  isCombo: boolean;
  notes?: string;
}

interface RoulettePrize {
  text: string;
  color: string;
  code: string;
  highlight?: boolean;
}

export default function MenuDigitalLanding() {
  // Configuración de la demo personalizable
  const [appConfig, setAppConfig] = useState({
    restaurantName: "Fuego & Sabor",
    tagline: "Brasa, Cortes & Street Food de Autor",
    phone: "50650015000",
    agencyPhone: "50664194111", // The Silent Studio agency phone
    currency: "₡"
  });

  // Formato de moneda
  const formatPrice = (amount: number) => {
    return `${appConfig.currency}${Math.round(amount).toLocaleString('es-CR')}`;
  };

  // Ítems de la carta
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Smash Doble Truffle & Bacon",
      category: "burgers",
      desc: "Doble medallón angus 110g, queso gouda fundido, tocineta ahumada crujiente, cebolla caramelizada y mayonesa de trufa negra en pan brioche artesanal.",
      price: 6400,
      badge: "Signature",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Smash Clásica Cheddar Supreme",
      category: "burgers",
      desc: "Doble carne madurada, triple cheddar inglés añejo, pepinillos dulces encurtidos en casa y salsa tártara especiada.",
      price: 5200,
      badge: "Favorito",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Crispy Chipotle Fried Chicken",
      category: "burgers",
      desc: "Pechuga marinada 24h en suero de mantequilla, rebozado crujiente, ensalada coleslaw fresca y glaseado chipotle con miel silvestre.",
      price: 5800,
      badge: "Crujiente",
      img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "Papas Rústicas Trufadas al Romero",
      category: "entradas",
      desc: "Papas de altura con cáscara dorada, aceite de trufa blanca, sal marina de Guancaste y lluvia de queso parmesano reggiano rallado al momento.",
      price: 3400,
      badge: "Para Compartir",
      img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "Tequeños Artesanales de Queso Palmitero",
      category: "entradas",
      desc: "6 rollos crujientes de masa hojaldrada rellenos de abundante queso blanco derretido, acompañados de dip de maracuyá y chile dulce.",
      price: 3600,
      badge: "Artesanal",
      img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "Croquetas de Asado de Tira al Carbón",
      category: "entradas",
      desc: "4 bocados cremosos de carne braseada a fuego lento con alioli de ajo asado y brotes tiernos.",
      price: 4200,
      badge: "Chef's Pick",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      name: "Cerveza Artesanal IPA Tropical 500ml",
      category: "bebidas",
      desc: "Cerveza artesanal de microcervecería costarricense con notas cítricas de maracuyá y mango, servida helada.",
      price: 2900,
      badge: "Fría",
      img: "https://images.unsplash.com/photo-1608270119238-8a8b27878347?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      name: "Limonada Silvestre Menta & Jengibre",
      category: "bebidas",
      desc: "Infusión fresca de limones criollos recién exprimidos, hojas de menta del huerto y jarabe orgánico de jengibre.",
      price: 2100,
      badge: "Natural",
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 9,
      name: "Cheesecake Vasco Caramelizado",
      category: "postres",
      desc: "Interior ultra cremoso, superficie tostada al punto y coulis de frutos rojos silvestres cosechados en el Poás.",
      price: 3600,
      badge: "De Autor",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop&q=80"
    }
  ];

  // Combos Destacados
  const combos: ComboItem[] = [
    {
      id: 101,
      title: "Combo Dúo Signature (2 Burgers + Papas Trufadas + 2 Bebidas)",
      desc: "2 Smash Doble Truffle & Bacon + 1 Porción grande de Papas Rústicas Trufadas + 2 Bebidas a elegir (Cervezas IPA o Refrescos Naturales).",
      oldPrice: 18100,
      price: 14500,
      discount: "-20% AHORRO",
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 102,
      title: "Combo Friends & Street Box (1 Truffle + 1 Clásica + Tequeños + Papas)",
      desc: "1 Smash Truffle + 1 Smash Clásica + 1 Porción de Tequeños Artesanales x6 + 1 Papas Rústicas.",
      oldPrice: 18600,
      price: 14900,
      discount: "-21% AHORRO",
      img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop&q=80"
    }
  ];

  // Premios de la Ruleta (Colores elegantes oro, grafito y bronce)
  const roulettePrizes: RoulettePrize[] = [
    { text: "10% OFF en tu Orden", color: "#C5A059", code: "SILENT10", highlight: true },
    { text: "Papas Rústicas Gratis", color: "#1E262B", code: "FREEPAPAS" },
    { text: "Bebida de la Casa", color: "#9A7B38", code: "FREEBEBIDA" },
    { text: "15% OFF en Combos", color: "#2B1B12", code: "COMBO15" },
    { text: "Postre de Autor Gratis", color: "#D4AF37", code: "FREEPOSTRE", highlight: true },
    { text: "Salsa Trufada Extra", color: "#171F22", code: "FREESALSA" }
  ];

  // Estados interactivos
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [wonPrize, setWonPrize] = useState<RoulettePrize | null>(null);
  const [hasSpun, setHasSpun] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; icon: string } | null>(null);

  // Formulario del pedido
  const [orderForm, setOrderForm] = useState({
    name: '',
    type: 'delivery', // delivery | pickup | table
    address: '',
    payment: 'Sinpe Móvil'
  });

  // Modal de Personalización de Demo
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerInputs, setCustomizerInputs] = useState({
    name: appConfig.restaurantName,
    phone: appConfig.phone,
    currency: appConfig.currency
  });

  // Modal de Propuesta / Lead
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadInputs, setLeadInputs] = useState({
    businessName: '',
    city: 'San José'
  });

  // Calculadora interactiva de comisiones
  const [calcSales, setCalcSales] = useState<number>(2000000);

  // Temporizador de combos
  const [timeLeft, setTimeLeft] = useState(4 * 3600 + 28 * 60 + 45);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentAngleRef = useRef(0);

  // Contador regresivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Renderizar la ruleta en Canvas
  const drawRoulette = (angle: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numSegments = roulettePrizes.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 12;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSegments; i++) {
      const startAngle = angle + i * anglePerSegment;
      const endAngle = startAngle + anglePerSegment;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = roulettePrizes[i].color;
      ctx.fill();

      // Borde refinado oro entre sectores
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Texto del premio
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = roulettePrizes[i].highlight ? '#07090A' : '#FFFFFF';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(roulettePrizes[i].text, radius - 18, 4);
      ctx.restore();
    }

    // Aro exterior dorado
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#C5A059';
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  useEffect(() => {
    drawRoulette(currentAngleRef.current);
  }, []);

  const spinRoulette = () => {
    if (isSpinning) return;
    if (hasSpun) {
      showToast('Ya has usado tu tirada de hoy', '⏳');
      return;
    }

    setIsSpinning(true);
    const selectedIndex = Math.floor(Math.random() * roulettePrizes.length);
    const numSegments = roulettePrizes.length;
    const segmentAngle = (2 * Math.PI) / numSegments;
    
    // Calcular parada centrada con el puntero superior
    const targetSegmentCenter = -Math.PI / 2 - (selectedIndex * segmentAngle + segmentAngle / 2);
    const extraRounds = (6 + Math.floor(Math.random() * 3)) * (2 * Math.PI);
    const totalRotation = extraRounds + (targetSegmentCenter - (currentAngleRef.current % (2 * Math.PI)));

    const duration = 4200;
    const startTime = performance.now();
    const initialAngle = currentAngleRef.current;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing suave desacelerado
      const easeOut = 1 - Math.pow(1 - progress, 4);
      currentAngleRef.current = initialAngle + totalRotation * easeOut;
      drawRoulette(currentAngleRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setHasSpun(true);
        const won = roulettePrizes[selectedIndex];
        setWonPrize(won);
        showToast(`¡Ganaste: ${won.text}!`, '🎉');
      }
    };

    requestAnimationFrame(animate);
  };

  // Toast
  const showToast = (text: string, icon = '✨') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Manejo del carrito
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && !i.isCombo);
      if (existing) {
        return prev.map(i => i.id === item.id && !i.isCombo ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, isCombo: false }];
    });
    showToast(`Añadido: ${item.name}`, '🍔');
  };

  const addComboToCart = (combo: ComboItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === combo.id && i.isCombo);
      if (existing) {
        return prev.map(i => i.id === combo.id && i.isCombo ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: combo.id, name: combo.title, price: combo.price, qty: 1, isCombo: true }];
    });
    showToast(`Combo añadido al pedido`, '🔥');
  };

  const updateQty = (index: number, delta: number) => {
    setCart(prev => {
      const updated = [...prev];
      updated[index].qty += delta;
      if (updated[index].qty <= 0) {
        updated.splice(index, 1);
      }
      return updated;
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Enviar a WhatsApp
  const sendOrderToWhatsApp = () => {
    if (cart.length === 0) {
      showToast('Tu pedido está vacío', '⚠️');
      return;
    }

    const name = orderForm.name.trim() || 'Cliente';
    const address = orderForm.address.trim() || 'No especificada';

    let modalityText = '🛵 Servicio Express a Domicilio';
    if (orderForm.type === 'pickup') modalityText = '🥡 Para Llevar (Recoger en Local)';
    if (orderForm.type === 'table') modalityText = '🍽️ Consumo en Mesa';

    let msg = `*NUEVO PEDIDO DIGITAL — ${appConfig.restaurantName.toUpperCase()}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📍 *Modalidad:* ${modalityText}\n`;
    msg += `🏠 *Dirección/Señas:* ${address}\n`;
    msg += `💳 *Método de Pago:* ${orderForm.payment}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    msg += `*DETALLE DE LA ORDEN:*\n`;

    cart.forEach(item => {
      msg += `▪ ${item.qty}x ${item.name} (${formatPrice(item.price * item.qty)})\n`;
    });

    if (wonPrize) {
      msg += `\n🎁 *BENEFICIO RULETA APLICADO:* ${wonPrize.text} (Código: ${wonPrize.code})\n`;
    }

    msg += `\n💰 *TOTAL A PAGAR:* ${formatPrice(cartSubtotal)}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Orden procesada mediante la Web Oficial de Pedidos._`;

    const cleanPhone = appConfig.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  // Contactar a la Agencia por un Plan
  const contactAgencyForPlan = (planName: string) => {
    const msg = `Hola The Silent Studio! Estuve revisando la demo de Menú Web Interactivo y Pedidos por WhatsApp para restaurantes. Me interesa cotizar el *Plan ${planName}* para mi negocio gastronómico. ¿Podrían brindarme información de tiempos y montaje?`;
    window.open(`https://wa.me/${appConfig.agencyPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Enviar Lead a la Agencia
  const sendLeadToAgency = () => {
    const biz = leadInputs.businessName.trim() || 'Mi Restaurante';
    const city = leadInputs.city.trim() || 'Costa Rica';
    const msg = `Hola The Silent Studio! Me gustaría digitalizar la carta de mi negocio: *${biz}* ubicado en *${city}*. Quiero ver cómo luciría una muestra con mis platos y logotipo oficial.`;
    window.open(`https://wa.me/${appConfig.agencyPhone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Guardar configuración de la demo
  const applyCustomizer = () => {
    setAppConfig(prev => ({
      ...prev,
      restaurantName: customizerInputs.name || prev.restaurantName,
      phone: customizerInputs.phone || prev.phone,
      currency: customizerInputs.currency || prev.currency
    }));
    setIsCustomizerOpen(false);
    showToast('Ajustes de la demo aplicados', '✅');
  };

  // Filtrado de platos
  const filteredDishes = menuItems.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Cálculo de comisiones
  const monthlyLoss = calcSales * 0.25;
  const annualSavings = monthlyLoss * 12;

  return (
    <div className="bg-[#07090A] text-[#EDE8DF] min-h-screen font-sans antialiased selection:bg-[#C5A059] selection:text-black">
      
      {/* ================= BARRA SUPERIOR PITCH DE AGENCIA ================= */}
      <div className="bg-[#11171A] border-b border-white/[0.08] text-xs py-2.5 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="bg-[#C5A059] text-black font-mono font-bold text-[10px] px-2 py-0.5 rounded tracking-wider uppercase">
              Demo de Servicio Web
            </span>
            <p className="text-gray-300">
              <span className="text-[#C5A059] font-semibold">¿Tienes un restaurante o cafetería en Costa Rica?</span> Así de rápida, elegante y sin comisiones es tu nueva web.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => {
                document.getElementById('propuesta-comercial')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono font-bold px-3.5 py-1.5 rounded-sm transition text-[11px] uppercase tracking-wider"
            >
              Ver Propuesta para Negocios
            </button>
            <button 
              onClick={() => setIsCustomizerOpen(true)}
              className="border border-white/20 hover:border-[#C5A059] text-gray-300 hover:text-white font-mono text-[11px] px-3 py-1.5 rounded-sm transition flex items-center gap-1.5"
            >
              <Sliders className="w-3 h-3 text-[#C5A059]" />
              <span>Personalizar Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR DEL LOCAL ================= */}
      <header className="sticky top-[45px] z-40 bg-[#07090A]/90 backdrop-blur-lg border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-[#C5A059] transition" title="Volver al inicio">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="w-10 h-10 rounded-sm bg-[#12161A] border border-[#C5A059]/30 flex items-center justify-center text-xl shadow-lg">
              🔥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-fraunces font-bold text-lg sm:text-xl text-white tracking-tight leading-none">
                  {appConfig.restaurantName}
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ABIERTO
                </span>
              </div>
              <p className="text-[11px] font-mono text-gray-400 mt-1">{appConfig.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                document.getElementById('ruleta-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-sm border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] hover:bg-[#C5A059]/20 font-mono text-xs uppercase tracking-wider transition font-semibold"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Ruleta de Premios</span>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4AF37] text-black px-4 py-2 rounded-sm font-mono text-xs uppercase font-bold tracking-wider transition shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Tu Pedido</span>
              <span className="bg-black text-[#C5A059] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-10">

        {/* ================= HERO EDITORIAL DEL LOCAL ================= */}
        <section className="relative rounded-sm border border-white/[0.08] bg-[#0E1316] p-8 sm:p-14 mb-16 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              SABOR DE AUTOR • PEDIDOS DIRECTOS SIN RECARGOS
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              El fuego auténtico, directo a tu mesa o express.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl">
              Explora nuestra carta gastronómica en Colones, aprovecha los combos del día y envía tu orden desglosada a nuestro WhatsApp oficial sin pagar comisiones a plataformas de terceros.
            </p>

            {/* Badges de servicio */}
            <div className="flex flex-wrap gap-3 text-xs font-mono mb-8 text-gray-300">
              <div className="flex items-center gap-2 bg-[#141B1F] px-3.5 py-2 rounded-sm border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>25–40 min promedio</span>
              </div>
              <div className="flex items-center gap-2 bg-[#141B1F] px-3.5 py-2 rounded-sm border border-white/10">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Express & Para Llevar</span>
              </div>
              <div className="flex items-center gap-2 bg-[#141B1F] px-3.5 py-2 rounded-sm border border-white/10">
                <Smartphone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Sinpe Móvil o Datáfono</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#menu-completo"
                className="bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider px-7 py-4 rounded-sm transition flex items-center gap-2 shadow-lg"
              >
                <span>Explorar la Carta</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <button 
                onClick={() => {
                  document.getElementById('ruleta-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white/20 hover:border-[#C5A059] text-white hover:text-[#C5A059] font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-sm transition flex items-center gap-2"
              >
                <Gift className="w-4 h-4 text-[#C5A059]" />
                <span>Girar Ruleta de Premios</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= RULETA DEL SABOR INTERACTIVA ================= */}
        <section id="ruleta-section" className="mb-20 rounded-sm border border-[#C5A059]/30 bg-gradient-to-b from-[#14191C] to-[#0A0D0E] p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
                EXPERIENCIA INTERACTIVA
              </div>
              <h3 className="font-fraunces font-bold text-2xl sm:text-4xl text-white mb-4 leading-tight">
                Gira la Ruleta y reclama un beneficio en tu orden.
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">
                Una herramienta gamificada diseñada para disparar la conversión y fidelidad: el cliente gira una vez al día y su premio o descuento se suma automáticamente al desglose enviado por WhatsApp.
              </p>

              {/* Caja de premio ganado */}
              {wonPrize && (
                <div className="p-5 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/40 mb-6 text-left animate-fade-in">
                  <div className="font-fraunces font-bold text-lg text-white flex items-center gap-2">
                    <span>🎉 ¡Felicidades! Has desbloqueado:</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-[#C5A059] mt-1">
                    {wonPrize.text}
                  </div>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    Código de verificación: <span className="text-white font-bold">{wonPrize.code}</span> (Se aplicará automáticamente al enviar tu orden).
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={spinRoulette}
                  disabled={isSpinning || hasSpun}
                  className={`bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-sm transition shadow-lg flex items-center gap-2 ${isSpinning || hasSpun ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isSpinning ? "Girando Ruleta..." : hasSpun ? "Tirada Usada Hoy" : "¡Girar Ruleta Ahora!"}</span>
                </button>
                <span className="text-xs font-mono text-gray-400">1 tirada por cliente al día</span>
              </div>
            </div>

            {/* Visual Canvas de la Ruleta */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center relative">
              <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px]">
                {/* Puntero Superior */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-[#C5A059] drop-shadow-md" />
                {/* Canvas */}
                <canvas 
                  ref={canvasRef} 
                  width={340} 
                  height={340} 
                  className="w-full h-full rounded-full shadow-2xl"
                />
                {/* Centro Decorativo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#07090A] border-2 border-[#C5A059] flex items-center justify-center shadow-lg text-xl">
                  🥩
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= COMBOS Y PROMOCIONES DEL DÍA ================= */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase mb-1">
                OFERTAS DE ALTO RENDIMIENTO
              </div>
              <h3 className="font-fraunces font-bold text-2xl sm:text-3xl text-white">
                Combos & Experiencias Signature
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-3.5 py-1.5 rounded-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>TERMINA EN: <strong className="text-white">{formatTimer(timeLeft)}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {combos.map(combo => (
              <div 
                key={combo.id}
                className="rounded-sm border border-white/[0.08] bg-[#0E1316] overflow-hidden flex flex-col sm:flex-row hover:border-[#C5A059]/40 transition duration-300 group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-black">
                  <img 
                    src={combo.img} 
                    alt={combo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                  />
                  <span className="absolute top-3 left-3 bg-[#C5A059] text-black font-mono text-[10px] font-bold px-2 py-1 rounded-sm shadow">
                    {combo.discount}
                  </span>
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-fraunces font-bold text-lg text-white mb-2 leading-snug">
                      {combo.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
                      {combo.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                    <div>
                      <span className="text-xs font-mono line-through text-gray-500 block">
                        {formatPrice(combo.oldPrice)}
                      </span>
                      <span className="text-xl font-mono font-bold text-[#C5A059]">
                        {formatPrice(combo.price)}
                      </span>
                    </div>
                    <button 
                      onClick={() => addComboToCart(combo)}
                      className="bg-[#C5A059] hover:bg-[#D4AF37] text-black px-4 py-2 rounded-sm font-mono text-xs uppercase font-bold tracking-wider transition flex items-center gap-1.5 shadow"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Agregar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MENÚ DIGITAL INTERACTIVO ================= */}
        <section id="menu-completo" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-white/[0.08] pb-6">
            <div>
              <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase mb-1">
                SELECCIÓN GASTRONÓMICA
              </div>
              <h3 className="font-fraunces font-bold text-3xl sm:text-4xl text-white">
                Carta Digital Interactiva
              </h3>
            </div>
            
            {/* Buscador de Platos */}
            <div className="relative w-full md:w-80">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar corte, burger, coctel..."
                className="w-full bg-[#11171A] border border-white/10 rounded-sm px-4 py-2.5 pl-10 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {[
              { id: 'all', label: '🍽️ Toda la Carta' },
              { id: 'burgers', label: '🥩 Cortes & Burgers' },
              { id: 'entradas', label: '🍟 Entradas & Tapas' },
              { id: 'bebidas', label: '🍷 Coctelería & Bebidas' },
              { id: 'postres', label: '🍨 Postres de Autor' }
            ].map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-sm transition shrink-0 border ${selectedCategory === cat.id ? 'bg-[#C5A059] border-[#C5A059] text-black font-bold' : 'bg-[#11171A] border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grilla de Platos */}
          {filteredDishes.length === 0 ? (
            <div className="py-16 text-center text-gray-500 border border-dashed border-white/10 rounded-sm">
              <p className="text-3xl mb-2">🔍</p>
              <p className="font-mono text-sm">No encontramos opciones con esa búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map(dish => (
                <div 
                  key={dish.id}
                  className="rounded-sm border border-white/[0.08] bg-[#0E1316] overflow-hidden hover:border-[#C5A059]/30 transition duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-black">
                      <img 
                        src={dish.img} 
                        alt={dish.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                      />
                      {dish.badge && (
                        <span className="absolute top-3 right-3 bg-[#07090A]/90 border border-[#C5A059]/40 text-[#C5A059] font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm backdrop-blur-sm">
                          {dish.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h4 className="font-fraunces font-bold text-lg text-white mb-2 leading-snug">
                        {dish.name}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-3">
                        {dish.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-white/[0.04] mt-4">
                    <span className="font-mono text-xl font-bold text-white">
                      {formatPrice(dish.price)}
                    </span>
                    <button 
                      onClick={() => addToCart(dish)}
                      className="bg-[#141B1F] hover:bg-[#C5A059] text-gray-200 hover:text-black border border-white/10 hover:border-[#C5A059] px-4 py-2 rounded-sm font-mono text-xs uppercase font-bold tracking-wider transition flex items-center gap-1.5 shadow"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Pedir</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= PROPUESTA COMERCIAL PARA LOCALES ================= */}
        <section id="propuesta-comercial" className="my-28 rounded-sm border border-[#C5A059]/30 bg-gradient-to-b from-[#11171A] to-[#07090A] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="font-mono text-xs text-[#C5A059] tracking-widest uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#C5A059] inline-block"></span>
              SOLUCIÓN PARA NEGOCIOS GASTRONÓMICOS EN COSTA RICA
            </div>
            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-white mb-6 leading-tight">
              ¿Por qué cambiar el PDF o menú físico por esta web interactiva?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Los menús en PDF son incómodos de leer en celulares, lentos y obligan al cliente a escribir todo a mano por WhatsApp. Con este sistema de The Silent Studio, tus comensales arman su pedido en segundos y lo recibes 100% desglosado sin pagar el 30% a apps intermediarias.
            </p>
          </div>

          {/* Comparativa Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-sm bg-[#0A0D0E] border border-red-900/30 relative">
              <div className="text-red-400 font-mono text-xs uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                <span>✕</span> Carta en PDF o Apps de Delivery
              </div>
              <ul className="space-y-3.5 text-xs text-gray-400 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>El cliente debe hacer zoom incómodo en pantalla para leer ingredientes y precios.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Modificar o agregar un plato implica rediseñar y reexportar un archivo PDF completo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Comisiones agresivas del 25% al 30% en plataformas como UberEats o PedidosYa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>Mensajes caóticos por WhatsApp con notas incompletas que generan errores en cocina.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-sm bg-[#12181C] border border-[#C5A059]/40 relative">
              <div className="text-[#C5A059] font-mono text-xs uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                <span>✓</span> Web Propia con The Silent Studio
              </div>
              <ul className="space-y-3.5 text-xs text-gray-200 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>El cliente añade ítems y te llega el ticket <strong className="text-white font-semibold">100% totalizado y desglosado en colones</strong> a WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span><strong className="text-[#C5A059] font-semibold">0% de comisiones por venta</strong>: el 100% de la ganancia entra directo a tu caja.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Ruleta gamificada y combos con reloj que elevan el ticket promedio entre un 20% y 35%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>Compatible con pagos por Sinpe Móvil, efectivo o datáfono contra entrega.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Calculadora Interactiva de Comisiones */}
          <div className="bg-[#0E1316] border border-white/10 rounded-sm p-8 sm:p-10 mb-16">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <div className="font-mono text-[11px] text-[#C5A059] uppercase tracking-widest mb-1">
                CALCULADORA DE RENTABILIDAD
              </div>
              <h4 className="font-fraunces font-bold text-2xl text-white mb-2">
                Deja de regalar tus ganancias a las aplicaciones
              </h4>
              <p className="text-xs text-gray-400 font-light">
                Mueve el selector según las ventas mensuales estimadas por express de tu local:
              </p>
            </div>
            
            <div className="max-w-xl mx-auto space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono text-gray-300 mb-2">
                  <span>Ventas estimadas por express:</span>
                  <span className="text-[#C5A059] font-bold text-sm">
                    {formatPrice(calcSales)} / mes
                  </span>
                </div>
                <input 
                  type="range" 
                  min="500000" 
                  max="10000000" 
                  step="250000" 
                  value={calcSales} 
                  onChange={(e) => setCalcSales(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#1A2226] rounded-sm cursor-pointer h-2"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                  <span>₡500.000</span>
                  <span>₡5.000.000</span>
                  <span>₡10.000.000</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-sm bg-[#07090A] border border-red-500/20 text-center">
                  <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block mb-1">
                    Comisión de apps (aprox. 25%)
                  </span>
                  <span className="text-2xl font-mono font-bold text-red-500">
                    -{formatPrice(monthlyLoss)}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 block mt-1">
                    Dinero que pierde tu negocio al mes
                  </span>
                </div>
                <div className="p-5 rounded-sm bg-[#07090A] border border-emerald-500/30 text-center">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Tu ahorro con web propia
                  </span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">
                    +{formatPrice(annualSavings)}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 block mt-1">
                    Rentabilidad recuperada al año
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Planes de Implementación */}
          <div className="mb-14">
            <h4 className="font-fraunces font-bold text-2xl sm:text-3xl text-white text-center mb-10">
              Planes de Montaje & Entrega en 48 Horas
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Plan 1 */}
              <div className="p-8 rounded-sm bg-[#0A0D0E] border border-white/10 flex flex-col justify-between">
                <div>
                  <h5 className="font-fraunces font-bold text-xl text-white mb-2">Carta Digital Express</h5>
                  <p className="text-xs text-gray-400 font-light mb-6 leading-relaxed">
                    Ideal para reemplazar el PDF o menú físico y recibir pedidos ordenados en WhatsApp.
                  </p>
                  <div className="font-mono text-3xl font-bold text-white mb-6">
                    ₡75.000 <span className="text-xs font-normal text-gray-500">pago único</span>
                  </div>
                  <ul className="text-xs font-mono space-y-3 text-gray-300 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Menú digital responsivo para móviles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Carrito y botón directo a WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Precios en Colones y fotos optimizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Código QR para mesas y mostrador</span>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => contactAgencyForPlan('Carta Digital Express')}
                  className="w-full py-3.5 rounded-sm bg-[#141B1F] hover:bg-white/10 text-white font-mono text-xs uppercase font-bold tracking-wider transition border border-white/10"
                >
                  Solicitar Carta Express
                </button>
              </div>

              {/* Plan 2 — Más Solicitado */}
              <div className="p-8 rounded-sm bg-[#12181C] border-2 border-[#C5A059] flex flex-col justify-between relative shadow-2xl">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-black font-mono text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  MÁS POPULAR
                </span>
                <div>
                  <h5 className="font-fraunces font-bold text-xl text-white mb-2">Web Promos & Ruleta</h5>
                  <p className="text-xs text-gray-300 font-light mb-6 leading-relaxed">
                    La experiencia completa de este demo: ruleta de beneficios, combos con reloj y alta conversión.
                  </p>
                  <div className="font-mono text-3xl font-bold text-[#C5A059] mb-6">
                    ₡140.000 <span className="text-xs font-normal text-gray-400">pago único</span>
                  </div>
                  <ul className="text-xs font-mono space-y-3 text-gray-200 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Todo lo del plan Carta Digital</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span><strong className="text-white">Ruleta de Premios</strong> interactiva en Canvas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Módulo de Combos con cuenta regresiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Integración con Sinpe Móvil y modalidad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Entrega configurada y lista en 48 horas</span>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => contactAgencyForPlan('Web Promos & Ruleta')}
                  className="w-full py-4 rounded-sm bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider transition shadow-lg"
                >
                  Quiero este para mi Negocio
                </button>
              </div>

              {/* Plan 3 */}
              <div className="p-8 rounded-sm bg-[#0A0D0E] border border-white/10 flex flex-col justify-between">
                <div>
                  <h5 className="font-fraunces font-bold text-xl text-white mb-2">Ecosistema VIP Gastronómico</h5>
                  <p className="text-xs text-gray-400 font-light mb-6 leading-relaxed">
                    Para marcas consolidadas, múltiples sucursales o franquicias con alto volumen de pedidos.
                  </p>
                  <div className="font-mono text-3xl font-bold text-white mb-6">
                    ₡225.000+ <span className="text-xs font-normal text-gray-500">según alcance</span>
                  </div>
                  <ul className="text-xs font-mono space-y-3 text-gray-300 mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Todo lo del plan Promos & Ruleta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Soporte para múltiples sucursales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Integración de pasarela de pago online</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Dominio propio (.com o .cr) y hosting anual</span>
                    </li>
                  </ul>
                </div>
                <button 
                  onClick={() => contactAgencyForPlan('Ecosistema VIP Gastronómico')}
                  className="w-full py-3.5 rounded-sm bg-[#141B1F] hover:bg-white/10 text-white font-mono text-xs uppercase font-bold tracking-wider transition border border-white/10"
                >
                  Consultar Proyecto VIP
                </button>
              </div>

            </div>
          </div>

          {/* CTA Lead final */}
          <div className="text-center p-8 rounded-sm bg-[#0A0D0E] border border-white/10 max-w-2xl mx-auto">
            <h4 className="font-fraunces font-bold text-xl text-white mb-2">
              ¿Quieres ver cómo luciría con el logo y platos de tu local?
            </h4>
            <p className="text-xs text-gray-400 font-light mb-6">
              Te preparamos una demostración visual personalizada en 24 horas y sin costo de compromiso.
            </p>
            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider px-8 py-4 rounded-sm transition inline-flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Muestra Personalizada por WhatsApp</span>
            </button>
          </div>
        </section>

      </main>

      {/* ================= BARRA FLOTANTE DEL CARRITO ================= */}
      <div 
        className={`fixed bottom-6 left-6 right-6 max-w-lg mx-auto bg-[#141A1E] text-white border border-[#C5A059]/40 rounded-sm p-4 shadow-2xl z-40 flex items-center justify-between transition-all duration-300 ${cartCount > 0 ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-sm bg-[#C5A059] text-black flex items-center justify-center font-bold text-lg">
            🛍️
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
              {cartCount} {cartCount === 1 ? 'ítem agregado' : 'ítems agregados'}
            </div>
            <div className="font-mono text-xl font-bold text-white">
              {formatPrice(cartSubtotal)}
            </div>
          </div>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-sm transition shadow flex items-center gap-1.5"
        >
          <span>Ver Orden & Enviar</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ================= MODAL DEL CARRITO / CHECKOUT ================= */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1215] border border-white/10 rounded-sm w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Header Modal */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#07090A]">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-fraunces font-bold text-lg text-white">Tu Pedido</h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lista de Ítems */}
            <div className="p-5 overflow-y-auto flex-1 space-y-3.5">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <span className="text-3xl block mb-2">🛒</span>
                  <p className="font-mono text-xs">Tu orden está vacía.</p>
                  <p className="text-[11px] text-gray-600 mt-1">Elige tus platos favoritos de la carta.</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-sm bg-[#12171A] border border-white/[0.06] text-xs font-mono"
                  >
                    <div className="flex-1 pr-3">
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-gray-400 text-[11px] mt-0.5">{formatPrice(item.price)} c/u</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQty(idx, -1)}
                        className="w-6 h-6 rounded-sm bg-[#1A2226] text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-white w-4 text-center">{item.qty}</span>
                      <button 
                        onClick={() => updateQty(idx, 1)}
                        className="w-6 h-6 rounded-sm bg-[#1A2226] text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                      <span className="font-bold text-[#C5A059] ml-3 w-20 text-right">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                ))
              )}

              {/* Cupón Ruleta */}
              {wonPrize && cart.length > 0 && (
                <div className="p-3 rounded-sm bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-between text-xs font-mono text-[#C5A059]">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    <span>Premio aplicado: <strong>{wonPrize.text}</strong></span>
                  </div>
                  <span className="bg-[#C5A059] text-black font-bold px-2 py-0.5 rounded-sm text-[10px]">
                    GRATIS
                  </span>
                </div>
              )}
            </div>

            {/* Formulario de Checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-white/10 bg-[#07090A] space-y-3.5">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="block text-gray-400 mb-1">Tu Nombre:</label>
                    <input 
                      type="text" 
                      value={orderForm.name}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ej. Carlos Mora"
                      className="w-full bg-[#12171A] border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1">Modalidad:</label>
                    <select 
                      value={orderForm.type}
                      onChange={(e) => setOrderForm(prev => ({ ...prev, type: e.target.value }))}
                      className="w-full bg-[#12171A] border border-white/10 rounded-sm px-3 py-2 text-white text-xs focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="delivery">🛵 Servicio Express</option>
                      <option value="pickup">🥡 Para Llevar (Pickup)</option>
                      <option value="table">🍽️ Mesa en Local</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono mb-1">
                    Dirección exacta / Señas / Notas:
                  </label>
                  <input 
                    type="text" 
                    value={orderForm.address}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Barrio, número de casa, o notas (ej: sin cebolla)"
                    className="w-full bg-[#12171A] border border-white/10 rounded-sm px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono mb-1">
                    Método de Pago:
                  </label>
                  <select 
                    value={orderForm.payment}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, payment: e.target.value }))}
                    className="w-full bg-[#12171A] border border-white/10 rounded-sm px-3 py-2 text-white text-xs font-mono focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Sinpe Móvil">📱 Sinpe Móvil</option>
                    <option value="Efectivo en Colones">💵 Efectivo al recibir</option>
                    <option value="Tarjeta / Datáfono">💳 Tarjeta / Datáfono contra entrega</option>
                  </select>
                </div>

                {/* Total y botón de envío */}
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Total a Pagar
                    </span>
                    <div className="text-2xl font-mono font-bold text-white">
                      {formatPrice(cartSubtotal)}
                    </div>
                  </div>
                  <button 
                    onClick={sendOrderToWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase font-bold tracking-wider px-6 py-3.5 rounded-sm transition shadow-lg flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir por WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= MODAL PERSONALIZADOR DE DEMO ================= */}
      {isCustomizerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1215] border border-white/10 rounded-sm w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-fraunces font-bold text-lg text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#C5A059]" />
                <span>Personalizar Demo en Vivo</span>
              </h3>
              <button onClick={() => setIsCustomizerOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-6 font-light leading-relaxed">
              Prueba cómo luce esta web con el nombre y teléfono del restaurante o soda al que le vas a presentar la propuesta.
            </p>

            <div className="space-y-4 text-xs font-mono mb-6">
              <div>
                <label className="block text-gray-400 mb-1">Nombre del Restaurante:</label>
                <input 
                  type="text" 
                  value={customizerInputs.name}
                  onChange={(e) => setCustomizerInputs(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#141B1F] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">WhatsApp del Local (con código de país):</label>
                <input 
                  type="text" 
                  value={customizerInputs.phone}
                  onChange={(e) => setCustomizerInputs(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Ej: 50650015000"
                  className="w-full bg-[#141B1F] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#C5A059]"
                />
                <span className="text-[10px] text-gray-500 block mt-1">Número donde se recibirán las órdenes por WhatsApp.</span>
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Símbolo de Moneda:</label>
                <input 
                  type="text" 
                  value={customizerInputs.currency}
                  onChange={(e) => setCustomizerInputs(prev => ({ ...prev, currency: e.target.value }))}
                  className="w-full bg-[#141B1F] border border-white/10 rounded-sm p-2.5 text-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsCustomizerOpen(false)}
                className="px-4 py-2 text-xs font-mono text-gray-400 hover:text-white"
              >
                Cancelar
              </button>
              <button 
                onClick={applyCustomizer}
                className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-mono font-bold text-xs uppercase rounded-sm transition"
              >
                Aplicar Cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL DE CONTACTO / LEAD ================= */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1215] border border-white/10 rounded-sm w-full max-w-md p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mx-auto mb-4 text-xl">
              🤝
            </div>
            <h3 className="font-fraunces font-bold text-xl text-white mb-2">
              Digitalicemos la carta de tu negocio
            </h3>
            <p className="text-xs text-gray-400 font-light mb-6 leading-relaxed">
              Escríbenos el nombre de tu restaurante o envíanos tu menú actual para prepararte una propuesta visual personalizada en menos de 24 horas.
            </p>

            <div className="space-y-3 mb-6 text-left text-xs font-mono">
              <input 
                type="text" 
                value={leadInputs.businessName}
                onChange={(e) => setLeadInputs(prev => ({ ...prev, businessName: e.target.value }))}
                placeholder="Nombre de tu local (ej: Soda La Esquina, Burger Co)"
                className="w-full bg-[#141B1F] border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#C5A059]"
              />
              <input 
                type="text" 
                value={leadInputs.city}
                onChange={(e) => setLeadInputs(prev => ({ ...prev, city: e.target.value }))}
                placeholder="Ubicación (ej: San José, Heredia, Alajuela...)"
                className="w-full bg-[#141B1F] border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <button 
                onClick={sendLeadToAgency}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase font-bold tracking-wider py-3.5 rounded-sm transition flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar por WhatsApp</span>
              </button>
              <button 
                onClick={() => setIsLeadModalOpen(false)}
                className="text-gray-500 hover:text-gray-300 font-mono text-xs py-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TOAST NOTIFICATION ================= */}
      {toastMessage && (
        <div className="fixed bottom-24 right-6 z-50 bg-[#12181C] border border-[#C5A059]/50 text-white font-mono text-xs px-4 py-3 rounded-sm shadow-2xl flex items-center gap-2.5 animate-bounce">
          <span>{toastMessage.icon}</span>
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-[#050607] border-t border-white/[0.06] text-center font-mono text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-white font-bold">{appConfig.restaurantName}</span> • Menú Digital & Delivery Directo
          </div>
          <div>
            Desarrollado con criterio estratégico por <span className="text-[#C5A059]">The Silent Studio</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
