'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Bell,
  BarChart3,
  QrCode,
  Columns,
  ShieldCheck,
  Gift,
  UtensilsCrossed,
  ChefHat,
  ExternalLink,
  LayoutGrid,
  Camera,
  TrendingUp,
} from 'lucide-react';

const WHATSAPP_NUM = '50664194111';

function computeMesaKey(mesa: number): string {
  let h = 2166136261;
  const s = `soda-la-ceiba|${mesa}|ceiba-2026-cambiame`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36).slice(0, 6);
}

type ViewMode = 'home' | 'client' | 'salon' | 'kitchen' | 'admin' | 'qr' | 'split';

export default function MesaYaShowcasePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [splitRightPanel, setSplitRightPanel] = useState<'salon' | 'kitchen'>('salon');
  const [activeMesa, setActiveMesa] = useState<number>(7);
  const activeMesaUrl = useMemo(
    () => `/mesaya/index.html?m=${activeMesa}&k=${computeMesaKey(activeMesa)}`,
    [activeMesa]
  );

  const whatsappOfferUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    '¡Hola! Vi la presentación de MesaYa (Menú QR, Panel de Salón, Pantalla de Cocina, SINPE Móvil, Puntos y Panel del Dueño) y me interesa cotizarlo para mi restaurante.'
  )}`;

  const sections = [
    {
      id: 'client' as ViewMode,
      num: '01',
      badge: `Mesa ${activeMesa} Activa`,
      title: 'Menú Digital del Cliente',
      desc: 'Lo que ve el comensal al escanear el QR: historias de platos, carrito a cocina, llamar al mesero, pago por SINPE Móvil, Raspa y Gana y Club de Puntos.',
      cta: 'MOSTRAR MENÚ CLIENTE',
      icon: Smartphone,
      externalHref: activeMesaUrl,
    },
    {
      id: 'salon' as ViewMode,
      num: '02',
      badge: 'Meseros y Caja',
      title: 'Panel del Salón en Vivo',
      desc: 'Recibe al instante llamadas de mesa, acepta pedidos para enviarlos a cocina y verifica pagos por SINPE Móvil, tarjeta o efectivo con alerta sonora.',
      cta: 'MOSTRAR PANEL SALÓN',
      icon: Bell,
      externalHref: '/mesaya/salon.html',
    },
    {
      id: 'kitchen' as ViewMode,
      num: '03',
      badge: 'KDS Tablet / TV',
      title: 'Pantalla de Cocina',
      desc: 'Cuando el salón acepta el pedido, la mesa se ilumina en rojo con alarma en cocina. El cocinero marca "Empezar a preparar" y "Listo · avisar al salón".',
      cta: 'MOSTRAR COCINA',
      icon: ChefHat,
      externalHref: '/mesaya/cocina.html',
    },
    {
      id: 'admin' as ViewMode,
      num: '04',
      badge: 'Estadísticas + Catálogo',
      title: 'Panel del Dueño (Admin)',
      desc: 'Estadísticas desde cero (Hoy, Ayer, 7 días, 1 mes, 1 año), agregar nuevos productos con fotografía al instante, cambiar precios, agotados e inventario.',
      cta: 'MOSTRAR PANEL DUEÑO',
      icon: BarChart3,
      externalHref: '/mesaya/admin.html',
    },
    {
      id: 'qr' as ViewMode,
      num: '05',
      badge: 'Personalizable en Vivo',
      title: 'Generador de QR por Mesa',
      desc: 'Escribe el nombre del restaurante prospecto en vivo, genera los QR firmados de todas sus mesas, pruébalos con un clic, descárgalos en PNG o imprímelos.',
      cta: 'MOSTRAR GENERADOR QR',
      icon: QrCode,
      externalHref: '/mesaya/mesas.html',
    },
    {
      id: 'split' as ViewMode,
      num: '06',
      badge: '2 Pantallas a la vez',
      title: 'Demo Simultánea en Vivo',
      desc: 'Muestra en una sola pantalla cómo el pedido sale del celular del cliente y suena inmediatamente en el Panel del Salón o en la Pantalla de Cocina.',
      cta: 'ABRIR DEMO SIMULTÁNEA',
      icon: Columns,
      externalHref: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0D0E] text-[#F5F3EF] flex flex-col justify-between font-sans selection:bg-[#C5A059] selection:text-black">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-[#0A0D0E]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C8C0B3] hover:text-[#D8B982] transition"
            >
              <ArrowLeft className="w-4 h-4 text-[#D8B982]" />
              <span>Inicio</span>
            </Link>
            <span className="text-white/15">|</span>
            <button
              type="button"
              onClick={() => setViewMode('home')}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <span className="font-fraunces font-bold text-lg text-white group-hover:text-[#D8B982] transition">
                MesaYa<span className="text-[#D4AF6A]">.</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                Home Vendedor · En Vivo
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            {viewMode !== 'home' && (
              <button
                type="button"
                onClick={() => setViewMode('home')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 font-mono text-[11px] uppercase tracking-wider text-emerald-300 font-bold transition cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>← Volver al Home del Vendedor</span>
              </button>
            )}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12161A] border border-white/10 text-xs font-mono">
              <span className="text-zinc-400 text-[10px] uppercase">Mesa:</span>
              <select
                value={activeMesa}
                onChange={(e) => setActiveMesa(Number(e.target.value))}
                aria-label="Seleccionar Mesa Activa"
                className="bg-transparent text-emerald-400 font-bold text-xs focus:outline-none cursor-pointer"
              >
                {Array.from({ length: 14 }, (_, idx) => idx + 1).map((m) => (
                  <option key={m} value={m} className="bg-[#12161A] text-white">
                    Mesa {m}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={whatsappOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#D8B982] text-black font-mono text-[11px] uppercase tracking-wider font-bold transition whitespace-nowrap"
            >
              <span>Cotizar Sistema</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-14">
        {viewMode === 'home' ? (
          /* ================= PANTALLA HOME DEL VENDEDOR ================= */
          <section className="space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-3 max-w-3xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D8B982] font-bold block">
                  PANEL COMERCIAL INTERACTIVO · TOCA CADA SECCIÓN PARA DEMOSTRAR
                </span>
                <h1 className="font-fraunces text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.08]">
                  Todo el restaurante conectado en un solo sistema.
                </h1>
                <p className="text-[#C8C0B3] text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                  Toca cualquier tarjeta para abrir el módulo en vivo frente al dueño del restaurante: desde el{' '}
                  <strong className="text-white">Menú QR del cliente</strong> hasta{' '}
                  <strong className="text-white">Salón</strong>, <strong className="text-white">Cocina</strong> y el{' '}
                  <strong className="text-white">Panel del Dueño</strong> con estadísticas desde cero y carga de productos con foto.
                </p>
              </div>

              {/* Status Summary Box */}
              <div className="p-4 rounded-2xl bg-[#111518] border border-[#C5A059]/35 flex flex-wrap items-center gap-4 text-xs font-mono shrink-0">
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Estadísticas</span>
                  <strong className="text-emerald-400">Iniciadas en ₡0</strong>
                </div>
                <span className="text-white/10">|</span>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Periodos Admin</span>
                  <strong className="text-[#E5C88D]">Hoy · Ayer · 7D · 1M · 1A</strong>
                </div>
                <span className="text-white/10">|</span>
                <div>
                  <span className="text-zinc-400 block text-[10px] uppercase">Catálogo</span>
                  <strong className="text-white">+ Productos y Fotos</strong>
                </div>
              </div>
            </div>

            {/* 6 Interactive Sales Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((sec) => {
                const IconComponent = sec.icon;
                return (
                  <div
                    key={sec.id}
                    onClick={() => setViewMode(sec.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setViewMode(sec.id);
                      }
                    }}
                    className="group relative rounded-2xl bg-[#111518] hover:bg-[#151A1F] border border-white/10 hover:border-[#C5A059] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-[0_0_35px_rgba(197,160,89,0.16)]"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold tracking-widest text-[#D8B982] px-2.5 py-1 rounded-md bg-[#C5A059]/10 border border-[#C5A059]/30">
                          {sec.num} · {sec.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#C5A059]/50 group-hover:bg-[#C5A059]/15 flex items-center justify-center text-[#D8B982] transition">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h2 className="font-fraunces text-2xl font-bold text-white group-hover:text-[#E5C88D] transition">
                        {sec.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black bg-[#C5A059] group-hover:bg-[#E5C88D] px-4 py-2.5 rounded-xl transition">
                        <span>{sec.cta}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>

                      {sec.externalHref && (
                        <a
                          href={sec.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Abrir en pestaña completa"
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-mono text-[11px] transition"
                        >
                          <span>Pantalla completa</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Pitch Guide for the Salesperson */}
            <div className="rounded-2xl bg-[#111518] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-400 font-bold block">
                    GUÍA RÁPIDA DE DEMOSTRACIÓN (2 MINUTOS)
                  </span>
                  <h3 className="font-fraunces text-xl sm:text-2xl font-bold text-white">
                    Cómo mostrar el recorrido completo al dueño del restaurante
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewMode('split')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer shrink-0"
                >
                  Iniciar Demo en Pantalla Dividida →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                  <strong className="text-[#E5C88D] font-mono block">Paso 1 · Agregar Plato con Foto</strong>
                  <p className="text-[#C8C0B3] font-light">
                    Entra a <b>04 · Panel del Dueño → Menú, Productos y Fotos</b>, sube una foto desde tu celular y crea un plato. Aparece al instante en el menú.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                  <strong className="text-[#E5C88D] font-mono block">Paso 2 · Hacer Pedido en Mesa</strong>
                  <p className="text-[#C8C0B3] font-light">
                    En <b>01 · Menú del Cliente</b> agrega el plato al carrito y envíalo a cocina, o toca la campana para llamar al mesero.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                  <strong className="text-[#E5C88D] font-mono block">Paso 3 · Salón a Cocina</strong>
                  <p className="text-[#C8C0B3] font-light">
                    En <b>02 · Salón</b> acepta el pedido. Verás cómo se pone en rojo en <b>03 · Cocina</b> hasta que el cocinero marca "Listo".
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1.5">
                  <strong className="text-[#E5C88D] font-mono block">Paso 4 · Ver Estadísticas Subir de 0</strong>
                  <p className="text-[#C8C0B3] font-light">
                    Confirma el cobro en <b>Salón</b> y abre <b>04 · Panel del Dueño</b>: los números que empezaron en <b>₡0</b> suben en tiempo real (Hoy, Ayer, 7 días, 1 mes, 1 año).
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ================= VISTA ACTIVA DE MÓDULO ================= */
          <section className="space-y-5">
            {/* Module Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#111518] border border-white/10 rounded-2xl p-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setViewMode('home')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition cursor-pointer"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('client')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'client'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>01. Cliente (M{activeMesa})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('salon')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'salon'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>02. Salón</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('kitchen')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'kitchen'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>03. Cocina</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('admin')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'admin'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>04. Dueño (Admin)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('qr')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'qr'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>05. QR Mesas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('split')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                    viewMode === 'split'
                      ? 'bg-[#C5A059] text-black'
                      : 'bg-[#181D22] text-[#C8C0B3] hover:text-white'
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>06. Simultánea</span>
                </button>
              </div>
            </div>

            {/* Active Module Viewport */}
            {viewMode === 'split' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5 flex flex-col items-center bg-[#111518] border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="w-full flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/10 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">📱 Cliente · Mesa {activeMesa}</span>
                    <span className="text-zinc-400">Pide o toca la campana 🔔</span>
                  </div>
                  <iframe
                    src={activeMesaUrl}
                    title={`MesaYa Menú del Cliente Mesa ${activeMesa}`}
                    className="w-full max-w-[440px] h-[740px] rounded-xl border border-white/10 bg-white"
                  />
                </div>

                <div className="lg:col-span-7 flex flex-col bg-[#111518] border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <div className="w-full flex flex-wrap items-center justify-between gap-2 px-2 pb-3 mb-2 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSplitRightPanel('salon')}
                        className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                          splitRightPanel === 'salon'
                            ? 'bg-[#C5A059] text-black'
                            : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        🛎️ Panel Salón
                      </button>
                      <button
                        type="button"
                        onClick={() => setSplitRightPanel('kitchen')}
                        className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                          splitRightPanel === 'kitchen'
                            ? 'bg-[#C5A059] text-black'
                            : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        👨‍🍳 Pantalla Cocina
                      </button>
                    </div>
                    <span className="text-zinc-400">
                      {splitRightPanel === 'salon'
                        ? 'Acepta el pedido para enviarlo a Cocina'
                        : 'Recibe pedidos aceptados y avisa cuando están listos'}
                    </span>
                  </div>
                  <iframe
                    src={splitRightPanel === 'salon' ? '/mesaya/salon.html' : '/mesaya/cocina.html'}
                    title={
                      splitRightPanel === 'salon'
                        ? 'MesaYa Panel del Salón'
                        : 'MesaYa Pantalla de Cocina'
                    }
                    className="w-full h-[740px] rounded-xl border border-white/10 bg-white"
                  />
                </div>
              </div>
            )}

            {viewMode === 'client' && (
              <div className="flex flex-col items-center bg-[#111518] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="w-full max-w-[460px] flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-emerald-400 font-bold">📱 01. Menú Digital del Cliente · Mesa {activeMesa}</span>
                  <a
                    href={activeMesaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8B982] hover:underline flex items-center gap-1"
                  >
                    <span>Pantalla completa</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src={activeMesaUrl}
                  title="MesaYa Menú Cliente"
                  className="w-full max-w-[460px] h-[780px] rounded-xl border border-white/10 bg-white"
                />
              </div>
            )}

            {viewMode === 'salon' && (
              <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#E5C88D] font-bold">
                    🛎️ 02. Panel del Salón y Meseros · Acceso con Google o Correo
                  </span>
                  <a
                    href="/mesaya/salon.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8B982] hover:underline flex items-center gap-1"
                  >
                    <span>Abrir en nueva pestaña</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src="/mesaya/salon.html"
                  title="MesaYa Panel del Salón"
                  className="w-full h-[780px] rounded-xl border border-white/10 bg-white"
                />
              </div>
            )}

            {viewMode === 'kitchen' && (
              <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#E5C88D] font-bold">
                    👨‍🍳 03. Pantalla de Cocina (KDS en vivo para Tablet o TV) · Acceso con Google o Correo
                  </span>
                  <a
                    href="/mesaya/cocina.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8B982] hover:underline flex items-center gap-1"
                  >
                    <span>Abrir en nueva pestaña</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src="/mesaya/cocina.html"
                  title="MesaYa Pantalla de Cocina"
                  className="w-full h-[780px] rounded-xl border border-white/10 bg-[#101512]"
                />
              </div>
            )}

            {viewMode === 'admin' && (
              <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#E5C88D] font-bold">
                    📊 04. Panel del Dueño (Estadísticas en 0: Hoy, Ayer, 7D, 1M, 1A · + Productos y Fotos)
                  </span>
                  <a
                    href="/mesaya/admin.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8B982] hover:underline flex items-center gap-1"
                  >
                    <span>Abrir en nueva pestaña</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src="/mesaya/admin.html"
                  title="MesaYa Panel del Dueño"
                  className="w-full h-[820px] rounded-xl border border-white/10 bg-white"
                />
              </div>
            )}

            {viewMode === 'qr' && (
              <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#E5C88D] font-bold">
                    🖨️ 05. Generador e Impresora de Códigos QR por Mesa con Clave de Seguridad
                  </span>
                  <a
                    href="/mesaya/mesas.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8B982] hover:underline flex items-center gap-1"
                  >
                    <span>Abrir para imprimir</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <iframe
                  src="/mesaya/mesas.html"
                  title="MesaYa Generador de QR"
                  className="w-full h-[780px] rounded-xl border border-white/10 bg-white"
                />
              </div>
            )}
          </section>
        )}

        {/* Commercial Value Proposition Section */}
        <section id="caracteristicas" className="space-y-10 pt-8 border-t border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D8B982] font-bold block">
              SOLUCIÓN LLAVE EN MANO PARA RESTAURANTES, SODAS Y CAFETERÍAS
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white tracking-tight">
              ¿Qué incluye el sistema que ofrecemos al restaurante?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <UtensilsCrossed className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                1. Menú Digital + Carrito a Cocina
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Historias de platos más pedidos, fotos reales, notas para cocina ("sin cebolla", "término medio") y envío inmediato al panel del salón.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <Bell className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                2. Llamar Mesero y Pago SINPE Móvil
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Botón de campana para llamar al mesero o pedir la cuenta. Si el cliente elige SINPE Móvil, recibe el monto exacto, copia el número con un toque y reporta el comprobante.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <ChefHat className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                3. Salón + Pantalla de Cocina (KDS)
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Cuando el salón acepta un pedido, la mesa se ilumina en rojo con alarma en la Pantalla de Cocina. El cocinero marca "Empezar a preparar" y "Listo · avisar al salón".
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <Camera className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                4. Autogestión de Productos y Fotos
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                El dueño puede agregar nuevos platos, subir fotografías desde su celular o computadora, ajustar precios y marcar platos agotados en 1 segundo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <TrendingUp className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                5. Estadísticas: Hoy, Ayer, 7D, 1M y 1 Año
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Reportes claros de ventas, ticket promedio, horas pico, métodos de pago (SINPE, tarjeta, efectivo), platos más vendidos y control de inventario.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <Gift className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                6. Club de Puntos, Juegos y Blindaje QR
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Fidelización con puntos, Raspa y Gana y Trivia mientras esperan su comida, más códigos QR firmados por mesa con validación de presencia en el local.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <span>© The Silent Studio · MesaYa Sistema QR para Restaurantes</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="hover:text-[#D8B982] transition">
            Inicio
          </Link>
          <Link href="/oferta" className="hover:text-[#D8B982] transition">
            Videos IA
          </Link>
          <Link href="/menu-digital" className="hover:text-[#D8B982] transition">
            Menú Express WhatsApp
          </Link>
        </div>
      </footer>
    </div>
  );
}
