'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Download,
  Copy,
  RefreshCw,
  Search,
  CheckCircle2,
  Mail,
  ArrowLeft,
  Headphones,
  Check,
  Lock,
  LogOut,
  Eye,
  EyeOff,
} from 'lucide-react';
import {
  fetchVivienneWaitlistLeads,
  VivienneWaitlistLead,
} from '@/lib/vivienne-waitlist-client';

const LOCAL_LEADS_LIST_KEY = 'vivienne_waitlist_all_leads_v1';
const ADMIN_SESSION_KEY = 'vivienne_audios_admin_unlocked_v1';

// Contraseñas válidas para acceder al panel
const VALID_PASSWORDS = ['Vivienne2026!', 'vivienne2026', 'Wolski2026!'];

const GOOGLE_APPS_SCRIPT_DRIP_CODE = `/**
 * ROBOT PERPETUO DE 10 CORREOS DIARIOS DE VIVIENNE WOLSKI
 * Remitente: Vivienne Wolski <vivienne@wearethesilent.com>
 * Enlace en todos: https://wearethesilent.com/audios/escuchar
 */

const PROJECT_ID = 'mesaya-e9644';
const API_KEY = 'AIzaSyA7yo4QDODdnfneSDrfVXwHQv5ESCJdm7c';
const ALIAS_REMITENTE = 'vivienne@wearethesilent.com';
const NOMBRE_REMITENTE = 'Vivienne Wolski';
const ENLACE_AUDIOS = 'https://wearethesilent.com/audios/escuchar';

const CORREOS_VIVIENNE = [
  {
    dia: 1,
    titulo: 'Mentalidad',
    asunto: 'Lo que nadie te dijo del dinero, cariño',
    vistaPrevia: 'El dinero no es para presumir. Es otra cosa.',
    cuerpo: 'Hola, cariño. Hoy empezamos por lo más importante: cómo piensas sobre el dinero. Casi todo el mundo cambia horas por un sueldo. Pero las horas se acaban: solo tienes veinticuatro cada día, y nadie puede fabricar más. En el audio de hoy te cuento cuál es la salida, y por qué un bolso caro no te da libertad, pero un ahorro sí.',
    frase: 'El dinero es una forma de comprar tiempo. Tiempo para dormir tranquila. Tiempo para tu familia. Tiempo para decir que no.',
    tarea: 'Escribe tres problemas de otras personas que tú podrías resolver. Solo tres.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 2,
    titulo: 'Presupuesto 25-15-50-10',
    asunto: 'Cuatro números para que tu dinero deje de desaparecer',
    vistaPrevia: '25, 15, 50 y 10. Y el último es para disfrutar.',
    cuerpo: 'Hola, cariño. Tu dinero no desaparece. Se va porque nadie le dijo a dónde ir. Hoy te doy un sistema de cuatro números: cuánto va a crecer, cuánto a protegerte, cuánto a lo esencial y cuánto a disfrutar. Sí, a disfrutar, y sin culpa. Escúchalo con lápiz en mano.',
    frase: 'Un dinero que gastas en lo que te da alegría es parte del plan, no un pecado.',
    tarea: 'Toma tu último ingreso y repártelo con estos cuatro números. Solo en papel.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 3,
    titulo: 'Deuda',
    asunto: 'El mejor negocio seguro que existe',
    vistaPrevia: 'Y no es una inversión, cariño.',
    cuerpo: 'Hola, cariño. No toda deuda es igual. Hay una que te destruye y otra que trabaja a tu favor. Si debes cinco mil dólares con un interés de veinticuatro por ciento, pagas unos mil doscientos al año solo en intereses. Dinero que no compra nada. En el audio de hoy te enseño a distinguirlas con una sola pregunta.',
    frase: 'Pagar una deuda cara es el mejor negocio seguro que existe.',
    tarea: 'Anota todas tus deudas con su interés. Empieza por la que más te cobra y no añadas más.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 4,
    titulo: 'Los primeros 10 mil',
    asunto: 'La etapa en la que casi todos se rinden',
    vistaPrevia: 'Si sientes que no pasa nada, escucha esto.',
    cuerpo: 'Hola, cariño. El camino al dinero tiene una parte difícil. Es la etapa en la que ahorras, inviertes y sientes que no pasa nada. Hoy te cuento por qué esa etapa vale la pena, qué ocurre cuando la atraviesas y tres cosas para no quemarte en el camino.',
    frase: 'Trabajas, ahorras, inviertes y sientes que no pasa nada. Es el momento en que muchos se cansan.',
    tarea: 'Define tu primera meta: una cifra concreta, con fecha.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 5,
    titulo: 'Invertir sin ser experta',
    asunto: 'Cómo invertir sin ser experta',
    vistaPrevia: 'Ni los expertos adivinan. Tú no tienes que hacerlo.',
    cuerpo: 'Hola, cariño. Una verdad incómoda: en periodos largos, alrededor de nueve de cada diez profesionales no logran ganarle al mercado. Entonces, ¿qué hacemos las demás? Algo muy sencillo. Hoy te explico qué es un fondo indexado y cómo invertir cada mes sin tener que adivinar nada.',
    frase: 'Nadie sabe adivinar los ciclos, ni siquiera los expertos.',
    tarea: 'Investiga qué fondos indexados de bajo costo existen donde vives y anota sus comisiones.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: 'Esto es educación, no una recomendación personal. Antes de invertir, revisa tu caso con un profesional de tu país.'
  },
  {
    dia: 6,
    titulo: 'Lo que no debes comprar',
    asunto: 'Deuda con buen maquillaje',
    vistaPrevia: 'Tres compras que una mujer con dinero no hace.',
    cuerpo: 'Hola, cariño. Hoy te aviso: este audio puede incomodar. Te hablo de tres trampas: el auto nuevo financiado, las suscripciones fantasma y comprar para aparentar. Cuarenta dólares al mes en cosas que no usas son cuatrocientos ochenta al año. Y te doy una regla simple para las compras por impulso.',
    frase: 'Lo que ves en vitrina muchas veces es deuda con buen maquillaje.',
    tarea: 'Revisa tus últimos tres meses de movimientos, marca lo que no usas y cancélalo hoy. Hoy, no mañana.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 7,
    titulo: 'Segunda entrada de dinero',
    asunto: 'Tu primera venta importa más que tu mejor idea',
    vistaPrevia: 'Un ingreso extra no es trabajar el doble.',
    cuerpo: 'Hola, cariño. Un ingreso extra no significa trabajar el doble. Significa elegir bien qué vendes y cómo. Hoy te doy tres caminos accesibles para empezar sin una fortuna, y una regla para no gastar de más antes de saber si alguien te va a pagar.',
    frase: 'Tu primera venta importa más que tu mejor idea.',
    tarea: 'Escribe una cosa que sabes hacer y a quién le podría servir.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: ''
  },
  {
    dia: 8,
    titulo: 'Inflación',
    asunto: 'El dinero que se encoge sin que lo notes',
    vistaPrevia: 'No lo pierdes en la cuenta. Lo pierdes en lo que compra.',
    cuerpo: 'Hola, cariño. Si la inflación es de tres por ciento al año, tus diez mil dólares guardados compran, un año después, lo que costaban nueve mil setecientos. Hoy te explico por qué el dinero parado es un mal plan, y cómo algunos países te dejan ahorrar pagando menos impuestos, legalmente.',
    frase: 'No perdiste dinero en la cuenta, pero perdiste lo que ese dinero puede comprar.',
    tarea: 'Averigua qué cuentas con ventajas fiscales existen en tu país y quién puede usarlas.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: 'Esto es educación, no asesoría fiscal personal. Antes de decidir, consulta con un contador o asesor de tu país.'
  },
  {
    dia: 9,
    titulo: 'Cuando el mercado cae',
    asunto: 'Cuando todo está en rojo',
    vistaPrevia: 'El problema no es la matemática.',
    cuerpo: 'Hola, cariño. Todo en rojo, gente asustada y unas ganas enormes de vender y salir corriendo. Seguro lo has visto. Hoy te cuento por qué las caídas son parte normal del mercado, por qué yo las veo como rebajas y las tres reglas para que el miedo no decida por ti.',
    frase: 'El problema no es la matemática, cariño. Es el miedo.',
    tarea: 'Escribe en una hoja qué harás cuando el mercado caiga, y guárdala.',
    despedida: 'Mañana te espero con el siguiente, cariño.',
    notaLegal: 'Esto es educación, no una recomendación personal.'
  },
  {
    dia: 10,
    titulo: 'Libertad',
    asunto: '¿Cuánto necesitas para ser libre?',
    vistaPrevia: 'La pregunta más hermosa de todas. Y tiene fórmula.',
    cuerpo: 'Hola, cariño. Hoy cerramos la serie con la pregunta más hermosa de todas: ¿cuánto dinero necesito para ser libre? Hay una fórmula sencilla, y te la explico con un ejemplo. También te dejo una hoja de ruta de cinco pasos. Ha sido un placer acompañarte estos diez días.',
    frase: 'El dinero es tiempo, y el tiempo es lo único que no se recupera.',
    tarea: 'Calcula tus gastos de un año y multiplícalos por 25. Ese es tu número de libertad.',
    despedida: 'Gracias por acompañarme, cariño.',
    notaLegal: 'Esto es educación, no una recomendación personal.'
  }
];

function enviarCorreosDiariosVivienne() {
  const url = 'https://firestore.googleapis.com/v1/projects/' + PROJECT_ID + '/databases/(default)/documents/vivienne_waitlist?pageSize=300&key=' + API_KEY;
  const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) return;

  const data = JSON.parse(res.getContentText());
  const docs = data.documents || [];
  const ahora = new Date();
  const hoyMedianoche = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());

  const aliases = GmailApp.getAliases();
  const usarAlias = aliases.indexOf(ALIAS_REMITENTE) !== -1;

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const fields = doc.fields || {};
    const email = (fields.email && fields.email.stringValue || '').trim().toLowerCase();
    if (!email || email === 'prueba@viviennewolski.com') continue;

    // Si la persona respondió BAJA o fue marcada de baja, no enviar
    if (fields.unsubscribed && fields.unsubscribed.booleanValue === true) continue;

    const createdAtStr = (fields.createdAtIso && fields.createdAtIso.stringValue) || doc.createTime;
    const fechaReg = new Date(createdAtStr);
    if (isNaN(fechaReg.getTime())) continue;

    const regMedianoche = new Date(fechaReg.getFullYear(), fechaReg.getMonth(), fechaReg.getDate());
    const diasTranscurridos = Math.floor((hoyMedianoche.getTime() - regMedianoche.getTime()) / (1000 * 60 * 60 * 24));
    const diaUsuario = diasTranscurridos + 1;

    if (diaUsuario < 1 || diaUsuario > 10) continue;

    const ultimoDiaEnviado = Number((fields.lastEmailSentDay && fields.lastEmailSentDay.integerValue) || 0);
    if (ultimoDiaEnviado >= diaUsuario) continue;

    const item = CORREOS_VIVIENNE[diaUsuario - 1];

    const textoPlano =
      item.cuerpo + '\\n\\n' +
      '“' + item.frase + '”\\n\\n' +
      'Escucha el audio de hoy: ' + ENLACE_AUDIOS + '\\n\\n' +
      'Tu tarea de hoy: ' + item.tarea + '\\n\\n' +
      item.despedida + '\\n' +
      'Vivienne' +
      (item.notaLegal ? '\\n\\n' + item.notaLegal : '') +
      '\\n\\n— Si ya no quieres recibir estos correos, responde con la palabra BAJA.';

    const htmlBody =
      '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">' + item.vistaPrevia + '</div>' +
      '<div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;background:#F7F1E6;color:#2B1D14;padding:36px 28px;border-radius:16px;border:1px solid #D8CBB8;line-height:1.7;">' +
        '<p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6B1F2A;margin:0 0 16px;">Día ' + item.dia + ' · ' + item.titulo + '</p>' +
        '<p style="font-size:16px;color:#2B1D14;margin:0 0 18px;">' + item.cuerpo + '</p>' +
        '<blockquote style="border-left:3px solid #6B1F2A;padding-left:14px;margin:22px 0;font-style:italic;font-size:17px;color:#2B1D14;">“' + item.frase + '”</blockquote>' +
        '<p style="font-size:15px;margin:22px 0;"><strong>Escucha el audio de hoy:</strong> <a href="' + ENLACE_AUDIOS + '" style="color:#6B1F2A;text-decoration:underline;">' + ENLACE_AUDIOS + '</a></p>' +
        '<div style="background:#FAF5EC;border:1px solid #D8CBB8;padding:16px 18px;border-radius:12px;margin:22px 0;">' +
          '<p style="margin:0;font-size:15px;color:#2B1D14;"><strong>Tu tarea de hoy:</strong> ' + item.tarea + '</p>' +
        '</div>' +
        '<p style="font-size:15px;color:#2B1D14;margin:22px 0 6px;">' + item.despedida + '</p>' +
        '<p style="font-size:16px;font-weight:bold;color:#6B1F2A;margin:0 0 18px;">Vivienne</p>' +
        (item.notaLegal ? '<p style="font-size:12px;color:#8A7665;margin:16px 0;">' + item.notaLegal + '</p>' : '') +
        '<hr style="border:none;border-top:1px solid #D8CBB8;margin:20px 0;" />' +
        '<p style="font-size:12px;color:#8A7665;margin:0;">— Si ya no quieres recibir estos correos, responde con la palabra BAJA.</p>' +
      '</div>';

    const opciones = { name: NOMBRE_REMITENTE, htmlBody: htmlBody };
    if (usarAlias) opciones.from = ALIAS_REMITENTE;

    GmailApp.sendEmail(email, item.asunto, textoPlano, opciones);

    fields.lastEmailSentDay = { integerValue: String(diaUsuario) };
    UrlFetchApp.fetch('https://firestore.googleapis.com/v1/' + doc.name + '?key=' + API_KEY, {
      method: 'patch',
      contentType: 'application/json',
      payload: JSON.stringify({ fields: fields }),
      muteHttpExceptions: true
    });
  }
}`;

function calculateUserDay(iso?: string): number {
  if (!iso) return 1;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return 1;
  const now = new Date();
  const regMid = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const nowMid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((nowMid.getTime() - regMid.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, Math.min(10, diff + 1));
}

export default function AudiosAdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const [leads, setLeads] = useState<VivienneWaitlistLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hideTestEmails, setHideTestEmails] = useState(true);
  const [copiedAllEmails, setCopiedAllEmails] = useState(false);
  const [copiedPairs, setCopiedPairs] = useState(false);
  const [copiedSingleId, setCopiedSingleId] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [showDripScriptModal, setShowDripScriptModal] = useState(false);
  const [copiedDripScript, setCopiedDripScript] = useState(false);

  useEffect(() => {
    try {
      const savedSession = sessionStorage.getItem(ADMIN_SESSION_KEY);
      if (savedSession === 'true') {
        setIsUnlocked(true);
      }
    } catch {
      // ignore
    } finally {
      setCheckingSession(false);
    }
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    const mapByEmail = new Map<string, VivienneWaitlistLead>();

    // 1. Cargar registros locales del navegador (si hubiera)
    try {
      const localRaw = localStorage.getItem(LOCAL_LEADS_LIST_KEY);
      if (localRaw) {
        const parsed = JSON.parse(localRaw);
        if (Array.isArray(parsed)) {
          parsed.forEach((item) => {
            if (item && item.email) {
              const cleanEmail = String(item.email).toLowerCase().trim();
              mapByEmail.set(cleanEmail, {
                id: item.id || cleanEmail,
                name: item.name || 'Sin nombre',
                email: cleanEmail,
                favoriteEp: item.favoriteEp || 'Todos los episodios',
                source: item.source || 'wearethesilent.com/audios',
                consentAccepted: true,
                createdAtIso: item.createdAtIso || '',
              });
            }
          });
        }
      }
    } catch {
      // ignore
    }

    // 2. Cargar directamente desde Firestore Database (colección vivienne_waitlist)
    const remoteLeads = await fetchVivienneWaitlistLeads();
    remoteLeads.forEach((lead) => {
      mapByEmail.set(lead.email.toLowerCase(), lead);
    });

    const combined = Array.from(mapByEmail.values());
    combined.sort((a, b) => (b.createdAtIso || '').localeCompare(a.createdAtIso || ''));
    setLeads(combined);
    setLastUpdated(
      new Date().toLocaleTimeString('es-CR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (isUnlocked) {
      loadLeads();
    }
  }, [isUnlocked]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const trimmed = passwordInput.trim();
    if (VALID_PASSWORDS.includes(trimmed)) {
      setIsUnlocked(true);
      setPasswordInput('');
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      } catch {
        // ignore
      }
    } else {
      setAuthError('Contraseña incorrecta. Verifica e intenta nuevamente.');
    }
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setLeads([]);
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      // ignore
    }
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      if (hideTestEmails && lead.email === 'prueba@viviennewolski.com') {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        lead.name.toLowerCase().includes(q) ||
        lead.email.toLowerCase().includes(q) ||
        lead.favoriteEp.toLowerCase().includes(q)
      );
    });
  }, [leads, searchQuery, hideTestEmails]);

  const handleCopyAllEmails = async () => {
    if (!filteredLeads.length) return;
    const allEmails = filteredLeads.map((l) => l.email).join(', ');
    try {
      await navigator.clipboard.writeText(allEmails);
      setCopiedAllEmails(true);
      setTimeout(() => setCopiedAllEmails(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleCopyNameAndEmails = async () => {
    if (!filteredLeads.length) return;
    const lines = filteredLeads.map((l) => `${l.name} <${l.email}>`).join('\n');
    try {
      await navigator.clipboard.writeText(lines);
      setCopiedPairs(true);
      setTimeout(() => setCopiedPairs(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleCopySingleEmail = async (email: string, id: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedSingleId(id);
      setTimeout(() => setCopiedSingleId(null), 1800);
    } catch {
      // ignore
    }
  };

  const handleExportCsv = () => {
    if (!filteredLeads.length) return;
    const header = [
      'Nombre',
      'Correo Electronico',
      'Capitulo de Interes',
      'Consentimiento Aprobado',
      'Origen',
      'Fecha ISO',
    ];
    const rows = filteredLeads.map((l) => [
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.favoriteEp || '').replace(/"/g, '""')}"`,
      `"${l.consentAccepted ? 'Si' : 'No'}"`,
      `"${(l.source || '').replace(/"/g, '""')}"`,
      `"${l.createdAtIso || ''}"`,
    ]);
    const csv = '\uFEFF' + [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vivienne-audios-registrados-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (iso: string) => {
    if (!iso) return '—';
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso.slice(0, 16).replace('T', ' ');
      return d.toLocaleString('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return iso.slice(0, 16).replace('T', ' ');
    }
  };

  if (checkingSession) {
    return <div className="min-h-screen bg-[#F7F1E6]" />;
  }

  // PANTALLA DE BLOQUEO CON CONTRASEÑA
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between font-body selection:bg-[#6B1F2A] selection:text-[#F7F1E6]">
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />

        <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex items-center justify-between">
          <Link
            href="/audios"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#6B1F2A] hover:text-[#2B1D14] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a /audios</span>
          </Link>
          <span className="font-headline text-lg text-[#2B1D14]">Vivienne Wolski</span>
        </header>

        <main className="flex-1 flex items-center justify-center px-5 py-12">
          <div className="w-full max-w-md p-7 sm:p-9 rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/60 shadow-[0_24px_60px_rgba(43,29,20,0.10)] space-y-6">
            <div className="space-y-2 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#6B1F2A]/10 border border-[#6B1F2A]/25 text-[#6B1F2A] flex items-center justify-center mx-auto">
                <Lock className="w-5 h-5" />
              </div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.25em] text-[#6B1F2A]">
                Acceso Restringido
              </span>
              <h1 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
                Admin · Audios de Vivienne
              </h1>
              <p className="text-xs text-[#5C4A3E]">
                Ingresa la contraseña privada para consultar y descargar la lista de nombres y correos registrados.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="admin-pass"
                  className="block text-[10px] font-mono uppercase tracking-[0.18em] text-[#5C4A3E] mb-1.5"
                >
                  Contraseña de Administrador
                </label>
                <div className="relative">
                  <input
                    id="admin-pass"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoFocus
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Ingresa tu contraseña..."
                    className="w-full pl-4 pr-11 py-3 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] focus:border-[#6B1F2A] text-sm text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A7665] hover:text-[#2B1D14] cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <p className="text-xs text-[#6B1F2A] font-medium bg-[#6B1F2A]/10 px-3 py-2 rounded-lg text-center">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.22em] transition shadow-md cursor-pointer"
              >
                Desbloquear Panel
              </button>
            </form>
          </div>
        </main>

        <footer className="w-full px-6 py-5 border-t border-[#D8CBB8]/70 text-center text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A7665]">
          Acceso Privado · No indexado en buscadores
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between font-body selection:bg-[#6B1F2A] selection:text-[#F7F1E6]">
      <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />

      {/* Top Bar */}
      <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex flex-wrap items-center justify-between gap-4 bg-[#F7F1E6]/95 sticky top-0 z-30 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/audios"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#6B1F2A] hover:text-[#2B1D14] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ir a /audios</span>
          </Link>
          <span className="text-[#D8CBB8]">|</span>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#6B1F2A]" />
            <span className="font-headline text-lg sm:text-xl text-[#2B1D14]">
              Admin · Audios de Vivienne
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {lastUpdated && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A7665] hidden sm:inline">
              Actualizado: {lastUpdated}
            </span>
          )}
          <button
            type="button"
            onClick={loadLeads}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#D8CBB8] hover:border-[#2B1D14] bg-[#FAF5EC] text-xs font-mono uppercase tracking-wider text-[#2B1D14] transition cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? 'Cargando...' : 'Actualizar'}</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            title="Bloquear panel"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#D8CBB8] hover:border-[#6B1F2A] bg-[#FAF5EC] text-xs font-mono uppercase tracking-wider text-[#6B1F2A] transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 py-10 space-y-8">
        {/* Summary Header + Quick Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1F2A]/10 border border-[#6B1F2A]/25 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-[0.22em]">
              <Users className="w-3.5 h-3.5" />
              <span>Base de Datos en Vivo · Firestore (vivienne_waitlist)</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#2B1D14]">
              Personas Registradas en los Audios ({filteredLeads.length})
            </h1>
            <p className="text-xs sm:text-sm text-[#5C4A3E]">
              Aquí puedes ver en tiempo real el nombre y correo electrónico de cada persona inscrita, copiar los correos o descargar la lista en Excel (CSV).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowDripScriptModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#6B1F2A] bg-[#6B1F2A]/10 hover:bg-[#6B1F2A] text-[#6B1F2A] hover:text-[#F7F1E6] text-xs font-mono uppercase tracking-wider transition cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Robot 10 Correos Diarios</span>
            </button>

            <button
              type="button"
              onClick={handleCopyAllEmails}
              disabled={!filteredLeads.length}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D8CBB8] hover:border-[#6B1F2A] bg-[#FAF5EC] text-xs font-mono uppercase tracking-wider text-[#2B1D14] transition cursor-pointer disabled:opacity-50"
            >
              {copiedAllEmails ? (
                <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
              ) : (
                <Mail className="w-3.5 h-3.5 text-[#6B1F2A]" />
              )}
              <span>{copiedAllEmails ? '¡Correos copiados!' : 'Copiar solo correos'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyNameAndEmails}
              disabled={!filteredLeads.length}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#D8CBB8] hover:border-[#6B1F2A] bg-[#FAF5EC] text-xs font-mono uppercase tracking-wider text-[#2B1D14] transition cursor-pointer disabled:opacity-50"
            >
              {copiedPairs ? (
                <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#6B1F2A]" />
              )}
              <span>{copiedPairs ? '¡Nombres y correos copiados!' : 'Copiar Nombre + Correo'}</span>
            </button>

            <button
              type="button"
              onClick={handleExportCsv}
              disabled={!filteredLeads.length}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] text-xs font-mono uppercase tracking-wider transition shadow-sm cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Excel / CSV</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#D8CBB8] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665]">
              Total Inscritos Reales
            </span>
            <p className="font-headline text-3xl text-[#2B1D14]">{filteredLeads.length}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#D8CBB8] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665]">
              Consentimiento de Datos Aprobado
            </span>
            <p className="font-headline text-3xl text-[#6B1F2A]">
              {filteredLeads.filter((l) => l.consentAccepted).length} / {filteredLeads.length}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#D8CBB8] space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665]">
              Último Registro
            </span>
            <p className="font-headline text-lg text-[#2B1D14] truncate">
              {filteredLeads[0] ? `${filteredLeads[0].name} (${filteredLeads[0].email})` : '—'}
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF5EC] border border-[#D8CBB8]">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8A7665] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, correo o capítulo..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F1E6] border border-[#D8CBB8] focus:border-[#6B1F2A] text-xs sm:text-sm text-[#2B1D14] placeholder-[#9C8F85] focus:outline-none"
            />
          </div>

          <label className="inline-flex items-center gap-2 text-xs text-[#5C4A3E] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hideTestEmails}
              onChange={(e) => setHideTestEmails(e.target.checked)}
              className="w-4 h-4 accent-[#6B1F2A] rounded cursor-pointer"
            />
            <span>Ocultar correo de prueba técnica</span>
          </label>
        </div>

        {/* Main Table */}
        <div className="rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/60 shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-16 text-center space-y-2">
              <RefreshCw className="w-6 h-6 text-[#6B1F2A] animate-spin mx-auto" />
              <p className="text-xs font-mono uppercase tracking-widest text-[#8A7665]">
                Cargando registros desde Firebase Firestore...
              </p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-16 text-center space-y-2 px-4">
              <p className="font-headline text-xl text-[#2B1D14]">
                No se encontraron registros con ese filtro
              </p>
              <p className="text-xs text-[#8A7665]">
                Prueba limpiando el buscador o haciendo clic en Actualizar.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#D8CBB8] bg-[#F7F1E6]/70 text-[10px] font-mono uppercase tracking-[0.18em] text-[#8A7665]">
                    <th className="py-3.5 pl-6 pr-3">#</th>
                    <th className="py-3.5 px-4">Nombre</th>
                    <th className="py-3.5 px-4">Correo Electrónico</th>
                    <th className="py-3.5 px-4">Día de Audios</th>
                    <th className="py-3.5 px-4">Capítulo de Interés</th>
                    <th className="py-3.5 px-4">Consentimiento</th>
                    <th className="py-3.5 pl-4 pr-6">Fecha de Registro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D8CBB8]/60 text-xs sm:text-sm">
                  {filteredLeads.map((lead, index) => {
                    const userDay = calculateUserDay(lead.createdAtIso);
                    return (
                    <tr key={lead.id} className="hover:bg-[#F7F1E6]/70 transition">
                      <td className="py-4 pl-6 pr-3 font-mono text-xs text-[#8A7665]">
                        {index + 1}
                      </td>
                      <td className="py-4 px-4 font-medium text-[#2B1D14]">
                        {lead.name}
                      </td>
                      <td className="py-4 px-4">
                        <div className="inline-flex items-center gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="font-mono text-[#6B1F2A] hover:underline"
                          >
                            {lead.email}
                          </a>
                          <button
                            type="button"
                            onClick={() => handleCopySingleEmail(lead.email, lead.id)}
                            title="Copiar correo"
                            className="p-1 rounded hover:bg-[#EFE6D5] text-[#8A7665] hover:text-[#2B1D14] transition cursor-pointer"
                          >
                            {copiedSingleId === lead.id ? (
                              <Check className="w-3.5 h-3.5 text-[#6B1F2A]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#2B1D14] text-[#F7F1E6] text-[10px] font-mono uppercase tracking-wider">
                          Día {userDay} de 10
                        </span>
                      </td>
                      <td className="py-4 px-4 text-xs text-[#5C4A3E]">
                        {lead.favoriteEp}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#6B1F2A]/10 text-[#6B1F2A] text-[10px] font-mono uppercase tracking-wider">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Aprobado</span>
                        </span>
                      </td>
                      <td className="py-4 pl-4 pr-6 font-mono text-xs text-[#8A7665] whitespace-nowrap">
                        {formatDate(lead.createdAtIso)}
                      </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 py-6 border-t border-[#D8CBB8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#8A7665]">
        <span>Panel Privado · No indexado en Google</span>
        <div className="flex items-center gap-4">
          <Link href="/audios" className="hover:text-[#2B1D14] transition">
            Página de Audios
          </Link>
          <span>·</span>
          <Link href="/" className="hover:text-[#2B1D14] transition">
            Inicio
          </Link>
        </div>
      </footer>

      {/* Modal con el Robot Perpetuo de 10 Correos Diarios */}
      {showDripScriptModal && (
        <div
          onClick={() => setShowDripScriptModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E140E]/75 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full rounded-3xl bg-[#FAF5EC] border-2 border-[#B08D57] p-6 sm:p-8 shadow-2xl space-y-5 text-[#2B1D14]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A] font-semibold">
                Automatización Perpetua · Día 1 al Día 10 por Usuario
              </span>
              <button
                type="button"
                onClick={() => setShowDripScriptModal(false)}
                className="text-xs font-mono uppercase tracking-wider text-[#8A7665] hover:text-[#2B1D14] cursor-pointer"
              >
                Cerrar ✕
              </button>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
              Robot de Correos Diarios (vivienne@wearethesilent.com)
            </h3>

            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
              <li>
                Abre{' '}
                <a
                  href="https://script.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B1F2A] underline font-medium"
                >
                  script.google.com
                </a>{' '}
                y haz clic en <strong>Nuevo proyecto</strong>.
              </li>
              <li>
                Haz clic en el botón de abajo <strong>&ldquo;Copiar código del Robot&rdquo;</strong> y pégalo ahí.
              </li>
              <li>
                En el menú izquierdo de Google Apps Script entra al ícono de reloj (<strong>Activadores / Triggers</strong>) → <strong>+ Añadir activador</strong> → elige la función <code>enviarCorreosDiariosVivienne</code> → <strong>Según tiempo</strong> → <strong>Temporizador por horas (Cada hora)</strong> o <strong>Por días</strong> y dale a Guardar.
              </li>
            </ol>

            <pre className="p-4 rounded-xl bg-[#2B1D14] text-[#F7F1E6] text-[11px] font-mono overflow-x-auto max-h-60 leading-relaxed">
              {GOOGLE_APPS_SCRIPT_DRIP_CODE}
            </pre>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_DRIP_CODE);
                    setCopiedDripScript(true);
                    setTimeout(() => setCopiedDripScript(false), 2500);
                  } catch {
                    // ignore
                  }
                }}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] transition cursor-pointer"
              >
                {copiedDripScript ? '¡Código Copiado al Portapapeles!' : 'Copiar Código del Robot'}
              </button>
              <button
                type="button"
                onClick={() => setShowDripScriptModal(false)}
                className="py-3.5 px-5 rounded-xl border border-[#D8CBB8] hover:border-[#2B1D14] text-xs font-mono uppercase tracking-wider text-[#5C4A3E] cursor-pointer"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
