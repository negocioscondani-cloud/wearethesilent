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
  Check,
  ShieldCheck,
  Gift,
  UtensilsCrossed,
  ExternalLink,
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

type ViewMode = 'split' | 'client' | 'salon' | 'admin' | 'qr';

export default function MesaYaShowcasePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [activeMesa, setActiveMesa] = useState<number>(7);
  const activeMesaUrl = useMemo(
    () => `/mesaya/index.html?m=${activeMesa}&k=${computeMesaKey(activeMesa)}`,
    [activeMesa]
  );

  const whatsappOfferUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    '¡Hola! Vi la demo interactiva de MesaYa (Menú QR, Panel de Salón, SINPE Móvil, Puntos y Panel del Dueño) y me interesa cotizarlo para mi restaurante.'
  )}`;

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
            <div className="flex items-center gap-2">
              <span className="font-fraunces font-bold text-lg text-white">
                MesaYa<span className="text-[#D4AF6A]">.</span>
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                Demo en Vivo · Soda La Ceiba
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#caracteristicas"
              className="hidden md:inline-flex px-4 py-2 rounded-lg border border-white/15 hover:border-[#C5A059] font-mono text-[11px] uppercase tracking-wider text-[#E5DEC9] transition"
            >
              ¿Qué incluye?
            </a>
            <a
              href={whatsappOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#D8B982] text-black font-mono text-[11px] uppercase tracking-wider font-bold transition whitespace-nowrap"
            >
              <span>Solicitar para mi Restaurante</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Interactive Demo Section */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-16">
        {/* Intro & Mode Switcher */}
        <section className="space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D8B982] font-bold block">
                SISTEMA GASTRONÓMICO INTERACTIVO · 0% COMISIONES
              </span>
              <h1 className="font-fraunces text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Menú QR, Salón en Tiempo Real, SINPE, Puntos y Analítica.
              </h1>
              <p className="text-[#C8C0B3] text-sm sm:text-base font-light leading-relaxed">
                Prueba el sistema completo ahora mismo: haz un pedido o toca la campana en la{' '}
                <strong className="text-white">Mesa 7</strong> y mira cómo suena al instante en el{' '}
                <strong className="text-white">Panel del Salón</strong>.
              </p>
            </div>

            {/* Credentials Pill & Table Switcher */}
            <div className="p-3.5 rounded-xl bg-[#12161A] border border-[#C5A059]/40 flex flex-wrap items-center gap-4 text-xs font-mono shrink-0">
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">PIN Salón / Meseros</span>
                <strong className="text-[#E5C88D] text-sm">1234</strong>
              </div>
              <span className="text-white/10">|</span>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">PIN Dueño / Admin</span>
                <strong className="text-[#E5C88D] text-sm">4321</strong>
              </div>
              <span className="text-white/10">|</span>
              <div>
                <span className="text-zinc-400 block text-[10px] uppercase">Mesa Simulada</span>
                <select
                  value={activeMesa}
                  onChange={(e) => setActiveMesa(Number(e.target.value))}
                  aria-label="Seleccionar Mesa Activa"
                  className="bg-emerald-950/70 text-emerald-400 font-bold text-xs px-2 py-0.5 rounded border border-emerald-500/40 focus:outline-none cursor-pointer"
                >
                  {Array.from({ length: 14 }, (_, idx) => idx + 1).map((m) => (
                    <option key={m} value={m} className="bg-[#12161A] text-white">
                      Mesa {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Interactive View Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                  viewMode === 'split'
                    ? 'bg-[#C5A059] text-black shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                    : 'bg-[#12161A] text-[#C8C0B3] border border-white/10 hover:border-[#C5A059]/50'
                }`}
              >
                <Columns className="w-4 h-4" />
                <span>Vista Simultánea (Cliente + Salón)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('client')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                  viewMode === 'client'
                    ? 'bg-[#C5A059] text-black'
                    : 'bg-[#12161A] text-[#C8C0B3] border border-white/10 hover:border-[#C5A059]/50'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>1. Menú Cliente (Mesa {activeMesa})</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('salon')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                  viewMode === 'salon'
                    ? 'bg-[#C5A059] text-black'
                    : 'bg-[#12161A] text-[#C8C0B3] border border-white/10 hover:border-[#C5A059]/50'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>2. Panel Salón (PIN 1234)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('admin')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                  viewMode === 'admin'
                    ? 'bg-[#C5A059] text-black'
                    : 'bg-[#12161A] text-[#C8C0B3] border border-white/10 hover:border-[#C5A059]/50'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>3. Panel Dueño (PIN 4321)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('qr')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                  viewMode === 'qr'
                    ? 'bg-[#C5A059] text-black'
                    : 'bg-[#12161A] text-[#C8C0B3] border border-white/10 hover:border-[#C5A059]/50'
                }`}
              >
                <QrCode className="w-4 h-4" />
                <span>4. Generador QR de Mesas</span>
              </button>
            </div>

            {/* Direct Fullscreen Links */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <a
                href={activeMesaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D8B982] border border-white/10 transition"
              >
                <span>Abrir Menú (M{activeMesa})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="/mesaya/salon.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D8B982] border border-white/10 transition"
              >
                <span>Abrir Salón</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="/mesaya/admin.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D8B982] border border-white/10 transition"
              >
                <span>Abrir Admin</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="/mesaya/mesas.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#E5C88D] border border-[#C5A059]/40 transition"
              >
                <span>Abrir Generador QR</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Embedded Live App Viewport */}
          {viewMode === 'split' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: Mobile Client Menu */}
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

              {/* Right: Salon Live Panel */}
              <div className="lg:col-span-7 flex flex-col bg-[#111518] border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="w-full flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#E5C88D] font-bold">
                    🛎️ Panel del Salón / Caja (Ingresa el PIN: 1234)
                  </span>
                  <span className="text-zinc-400">Recibe pedidos y pagos SINPE en vivo</span>
                </div>
                <iframe
                  src="/mesaya/salon.html"
                  title="MesaYa Panel del Salón"
                  className="w-full h-[740px] rounded-xl border border-white/10 bg-white"
                />
              </div>
            </div>
          )}

          {viewMode === 'client' && (
            <div className="flex flex-col items-center bg-[#111518] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="w-full max-w-[460px] flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-emerald-400 font-bold">📱 Vista Cliente · Mesa {activeMesa}</span>
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
                  🛎️ Panel del Salón y Meseros · PIN de acceso: 1234
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

          {viewMode === 'admin' && (
            <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-[#E5C88D] font-bold">
                  📊 Panel del Dueño (Analítica 30 días, Inventario y Precios) · PIN: 4321
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
                className="w-full h-[780px] rounded-xl border border-white/10 bg-white"
              />
            </div>
          )}

          {viewMode === 'qr' && (
            <div className="bg-[#111518] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-[#E5C88D] font-bold">
                  🖨️ Generador e Impresora de Códigos QR por Mesa con Clave de Seguridad
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

        {/* Commercial Value Proposition Section */}
        <section id="caracteristicas" className="space-y-10 pt-8 border-t border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D8B982] font-bold block">
              SOLUCIÓN LLAVE EN MANO PARA RESTAURANTES, SODAS Y CAFETERÍAS
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Todo lo que tu restaurante necesita en un solo código QR
            </h2>
            <p className="text-[#C8C0B3] text-sm sm:text-base font-light leading-relaxed">
              Sin aplicaciones que descargar ni comisiones por pedido. Tus clientes escanean el QR de su mesa y tienen toda la experiencia conectada con tu salón.
            </p>
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
              <Gift className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                3. Club de Puntos, Raspa y Gana y Trivia
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Fidelización automática: el cliente acumula puntos por cada ₡1.000 de consumo, juega Raspa y Gana o Trivia mientras espera su comida y canjea premios reales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <Columns className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                4. Panel del Salón en Tiempo Real
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Alertas sonoras y visuales para meseros y caja: muestra qué mesa pide orden, cuál solicita la cuenta, cuál llamó al mesero y el historial de cobros del día.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <BarChart3 className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                5. Panel del Dueño: Analítica e Inventario
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Ventas por día, hora pico y método de pago (SINPE, tarjeta, efectivo), platos más vistos vs. más vendidos, control de inventario de insumos y botón para marcar platos agotados en 1 segundo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111518] border border-white/10 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#D8B982]" />
              <h3 className="font-fraunces text-xl font-bold text-white">
                6. Blindaje Anti-Pedidos Falsos (GPS + QR)
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light leading-relaxed">
                Cada mesa tiene un QR con firma criptográfica única y verificación de ubicación GPS para que solo los clientes dentro de tu local puedan llamar al mesero o enviar órdenes.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#17130D] via-[#12161A] to-[#17130D] border border-[#C5A059]/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#D8B982] font-bold block">
                IMPLEMENTACIÓN PERSONALIZADA CON TU MARCA Y MENÚ
              </span>
              <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
                ¿Quieres instalar MesaYa en tu restaurante o cafetería?
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C0B3] font-light">
                Lo configuramos con tus platos, fotografías, número de SINPE Móvil, reglas de puntos y tarjetas QR listas para imprimir en tus mesas.
              </p>
            </div>

            <a
              href={whatsappOfferUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#BA965A] via-[#E5CBA1] to-[#B58F50] text-[#14110C] font-mono text-xs uppercase tracking-[0.18em] font-bold flex items-center gap-2 whitespace-nowrap hover:brightness-110 transition shadow-[0_0_30px_rgba(216,185,130,0.3)]"
            >
              <span>Cotizar por WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
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
