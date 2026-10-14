'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Settings, X, Check } from 'lucide-react';

interface CookiePreferences {
  technical: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'silent_cookie_consent';

export function CookieConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setShowBanner(true);
      } else {
        const parsed: CookiePreferences = JSON.parse(stored);
        applyConsent(parsed);
      }
    } catch (e) {
      setShowBanner(true);
    }

    // Allow opening via custom event from policy page or footer
    const handleOpenBanner = () => {
      setShowBanner(true);
      setShowModal(true);
    };
    window.addEventListener('open-cookie-banner', handleOpenBanner);
    return () => window.removeEventListener('open-cookie-banner', handleOpenBanner);
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    if (typeof window !== 'undefined') {
      // Configure Google Analytics Consent Mode
      const w = window as any;
      if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          ad_user_data: prefs.marketing ? 'granted' : 'denied',
          ad_personalization: prefs.marketing ? 'granted' : 'denied',
        });
      }
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      applyConsent(prefs);
    } catch (e) {
      console.error('Failed to save cookie preferences', e);
    }
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      technical: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    savePreferences(prefs);
  };

  const handleRejectAll = () => {
    const prefs: CookiePreferences = {
      technical: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    savePreferences(prefs);
  };

  const handleSaveCustom = () => {
    const prefs: CookiePreferences = {
      technical: true,
      analytics: analyticsAllowed,
      marketing: marketingAllowed,
      timestamp: new Date().toISOString(),
    };
    savePreferences(prefs);
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      {/* FLOATING CONSENT BAR / BANNER */}
      <div 
        role="dialog" 
        aria-label="Consentimiento de cookies"
        className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-[#0E1216]/95 backdrop-blur-md border border-[#C5A059]/40 text-zinc-200 p-5 rounded-xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-4 duration-300 font-sans"
      >
        <div className="flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-sm">
                Control y Privacidad de Cookies (RGPD / AEPD)
              </h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Utilizamos cookies técnicas necesarias y, con tu consentimiento previo, cookies de analítica (Google Analytics) y publicidad (Meta Pixel) para medir el rendimiento de la web y optimizar campañas. Puedes aceptar todas, rechazarlas o configurar tus preferencias.
            </p>
            <div className="text-[11px] font-mono text-zinc-400 pt-0.5">
              Consulta nuestra{' '}
              <Link href="/cookie-policy" className="text-[#C5A059] underline hover:text-amber-300">
                Política de Cookies
              </Link>{' '}
              y nuestra{' '}
              <Link href="/privacy-policy" className="text-[#C5A059] underline hover:text-amber-300">
                Política de Privacidad
              </Link>.
            </div>
            
            {/* ACTION BUTTONS (EQUAL PROMINENCE AS PER AEPD GUIDANCE) */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-initial px-3.5 py-2 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-[11px] font-bold uppercase tracking-wider rounded transition"
              >
                Aceptar Todas
              </button>
              
              <button
                type="button"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-initial px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-mono text-[11px] font-semibold uppercase tracking-wider rounded transition"
              >
                Rechazar Opcionales
              </button>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3 py-2 text-zinc-400 hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition ml-auto"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Configurar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED PREFERENCE MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#12161A] border border-zinc-700 text-zinc-100 max-w-lg w-full rounded-2xl p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-bold text-white text-base">Configuración de Cookies</h3>
              </div>
              <button 
                type="button"
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Personaliza qué categorías de cookies permites en tu navegador. Las cookies técnicas son imprescindibles para que el sitio funcione y no pueden desactivarse.
            </p>

            <div className="space-y-3 text-xs">
              {/* Technical */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block font-medium">Cookies Técnicas Necesarias</strong>
                  <span className="text-[11px] text-zinc-400">Sesión, seguridad y registro legal del consentimiento.</span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
                  Siempre Activas
                </span>
              </div>

              {/* Analytics */}
              <label className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                <div>
                  <strong className="text-white block font-medium">Cookies Analíticas</strong>
                  <span className="text-[11px] text-zinc-400">Google Analytics 4 para métricas de tráfico anonimizadas.</span>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  className="w-4 h-4 accent-[#C5A059] cursor-pointer"
                />
              </label>

              {/* Marketing */}
              <label className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-between cursor-pointer hover:border-zinc-700">
                <div>
                  <strong className="text-white block font-medium">Cookies de Publicidad y Conversión</strong>
                  <span className="text-[11px] text-zinc-400">Meta Pixel para atribución de anuncios en Instagram y Facebook.</span>
                </div>
                <input
                  type="checkbox"
                  checked={marketingAllowed}
                  onChange={(e) => setMarketingAllowed(e.target.checked)}
                  className="w-4 h-4 accent-[#C5A059] cursor-pointer"
                />
              </label>
            </div>

            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-3.5 py-2 text-zinc-400 hover:text-white font-mono text-xs uppercase"
              >
                Rechazar Todo
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs uppercase rounded"
                >
                  Guardar Preferencias
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-[#C5A059] hover:bg-[#B38F48] text-black font-mono text-xs font-bold uppercase rounded"
                >
                  Aceptar Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
