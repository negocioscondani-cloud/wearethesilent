'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, Headphones, ExternalLink, Download, Mail, Trash2, Plus, Check } from 'lucide-react';

interface DomingoData {
  m_miro?: number;
  m_comodidad?: number;
  m_claridad?: number;
  m_frase?: string;
  d_pregunta?: string;
  nr_cuentas?: string;
  nr_ahorros?: string;
  nr_otros?: string;
  nr_tarjetas?: string;
  nr_otrasdeudas?: string;
  f_1?: string;
  f_2?: string;
  f_3?: string;
  c_nombre?: string;
  c_frase?: string;
  c_fecha?: string;
  b_p1?: string;
  b_p2?: string;
  b_p3?: string;
  b_p4?: string;
  b_p5?: string;
  fin_miro?: number;
  fin_comodidad?: number;
  inventario?: string[];
  domingos?: Array<{
    fecha: string;
    saldo: string;
    gasto: string;
    fuga: string;
    notas: string;
  }>;
}

const STORAGE_KEY = 'vivienne_domingo_v1';
const GUMROAD_CLUB_URL = 'https://thesilentstudiomk.gumroad.com/l/ltfbhx';

export default function DomingoPage() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'medicion' | 'domingo' | 'ritual' | 'bonos' | 'datos'>('inicio');
  const [data, setData] = useState<DomingoData>({
    m_miro: 5,
    m_comodidad: 5,
    m_claridad: 5,
    m_frase: '',
    d_pregunta: '',
    nr_cuentas: '',
    nr_ahorros: '',
    nr_otros: '',
    nr_tarjetas: '',
    nr_otrasdeudas: '',
    f_1: '',
    f_2: '',
    f_3: '',
    c_nombre: '',
    c_frase: '',
    c_fecha: '',
    b_p1: '',
    b_p2: '',
    b_p3: '',
    b_p4: '',
    b_p5: '',
    fin_miro: 5,
    fin_comodidad: 5,
    inventario: [''],
    domingos: []
  });

  const [isSavedBadgeVisible, setIsSavedBadgeVisible] = useState(false);
  const [showWipeConfirm, setShowWipeConfirm] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Weekly ritual form state
  const [rFecha, setRFecha] = useState('');
  const [rSaldo, setRSaldo] = useState('');
  const [rGasto, setRGasto] = useState('');
  const [rFuga, setRFuga] = useState('');
  const [rNotas, setRNotas] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setData(prev => ({
          ...prev,
          ...parsed,
          inventario: parsed.inventario && parsed.inventario.length > 0 ? parsed.inventario : [''],
          domingos: parsed.domingos || []
        }));
      }
    } catch (e) {
      console.error('Error loading data from localStorage', e);
    }
  }, []);

  // Save to localStorage helper
  const updateData = (newData: Partial<DomingoData>) => {
    setData(prev => {
      const updated = { ...prev, ...newData };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setIsSavedBadgeVisible(true);
        setTimeout(() => setIsSavedBadgeVisible(false), 1400);
      } catch (e) {
        console.error('Error saving data to localStorage', e);
      }
      return updated;
    });
  };

  // Inventory handlers
  const handleInventarioChange = (index: number, val: string) => {
    const list = [...(data.inventario || [])];
    list[index] = val;
    updateData({ inventario: list });
  };

  const handleAddInventario = () => {
    const list = [...(data.inventario || []), ''];
    updateData({ inventario: list });
  };

  const handleRemoveInventario = (index: number) => {
    const list = [...(data.inventario || [])];
    list.splice(index, 1);
    updateData({ inventario: list.length > 0 ? list : [''] });
  };

  // Calculate Numero Real
  const numeroReal = useMemo(() => {
    const cuentas = parseFloat(data.nr_cuentas || '0') || 0;
    const ahorros = parseFloat(data.nr_ahorros || '0') || 0;
    const otros = parseFloat(data.nr_otros || '0') || 0;
    const tarjetas = parseFloat(data.nr_tarjetas || '0') || 0;
    const otrasDeudas = parseFloat(data.nr_otrasdeudas || '0') || 0;

    const tengo = cuentas + ahorros + otros;
    const debo = tarjetas + otrasDeudas;
    const real = tengo - debo;
    return { tengo, debo, real };
  }, [data.nr_cuentas, data.nr_ahorros, data.nr_otros, data.nr_tarjetas, data.nr_otrasdeudas]);

  // Weekly Ritual handlers
  const handleAddDomingo = () => {
    if (!rFecha && !rSaldo && !rGasto && !rFuga && !rNotas) return;
    const newEntry = {
      fecha: rFecha,
      saldo: rSaldo,
      gasto: rGasto,
      fuga: rFuga,
      notas: rNotas
    };
    const updatedDomingos = [...(data.domingos || []), newEntry];
    updateData({ domingos: updatedDomingos });
    setRFecha('');
    setRSaldo('');
    setRGasto('');
    setRFuga('');
    setRNotas('');
  };

  const handleRemoveDomingo = (index: number) => {
    const updatedDomingos = [...(data.domingos || [])];
    updatedDomingos.splice(index, 1);
    updateData({ domingos: updatedDomingos });
  };

  // Build summary for export / email
  const buildSummary = () => {
    const d = data;
    const lines: string[] = [];
    lines.push('EL DOMINGO DE LOS NÚMEROS — Mis respuestas');
    lines.push('Compañero de Vivienne · The Silent Studio');
    lines.push('=========================================');
    lines.push('');
    lines.push('MI MEDICIÓN INICIAL');
    lines.push('Miro mis cuentas: ' + (d.m_miro !== undefined ? d.m_miro : '-') + '/10');
    lines.push('Comodidad con el número: ' + (d.m_comodidad !== undefined ? d.m_comodidad : '-') + '/10');
    lines.push('Claridad de mi fuga: ' + (d.m_claridad !== undefined ? d.m_claridad : '-') + '/10');
    lines.push('Frase para el futuro: ' + (d.m_frase || '-'));
    lines.push('');
    lines.push('EL DOMINGO (sesión guiada)');
    lines.push('Inventario: ' + (d.inventario || []).filter(Boolean).join(', '));
    lines.push('Mi número exacto: ' + (d.d_pregunta || '-'));
    lines.push(`Número real: tengo ${numeroReal.tengo.toLocaleString()}, debo ${numeroReal.debo.toLocaleString()}, real ${numeroReal.real.toLocaleString()}`);
    lines.push('Fugas: ' + [d.f_1, d.f_2, d.f_3].filter(Boolean).join(' / '));
    lines.push('Contrato: ' + (d.c_nombre || '-') + ' — ' + (d.c_frase || '-') + ' (' + (d.c_fecha || '-') + ')');
    lines.push('');
    lines.push('MIS DOMINGOS (' + (d.domingos || []).length + ')');
    (d.domingos || []).forEach((e, i) => {
      lines.push(`${i + 1}. ${e.fecha || ''} — saldo: ${e.saldo || ''} — gasto: ${e.gasto || ''} — fuga: ${e.fuga || ''} — notas: ${e.notas || ''}`);
    });
    if ((d.domingos || []).length >= 12 && d.fin_miro !== undefined && d.fin_comodidad !== undefined) {
      lines.push('');
      lines.push('EVALUACIÓN A LAS 12 SEMANAS');
      lines.push(`Miro mis cuentas: ${d.fin_miro}/10 (cambio: ${(d.fin_miro - (d.m_miro || 0)) >= 0 ? '+' : ''}${d.fin_miro - (d.m_miro || 0)})`);
      lines.push(`Comodidad con el número: ${d.fin_comodidad}/10 (cambio: ${(d.fin_comodidad - (d.m_comodidad || 0)) >= 0 ? '+' : ''}${d.fin_comodidad - (d.m_comodidad || 0)})`);
    }
    return lines.join('\n');
  };

  const handleExportTxt = () => {
    const summary = buildSummary();
    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mi-domingo-de-los-numeros.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSendEmail = () => {
    const body = encodeURIComponent(buildSummary()).slice(0, 1500);
    const subject = encodeURIComponent('Mi Domingo de los Números — Vivienne');
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleWipeData = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setData({
        m_miro: 5,
        m_comodidad: 5,
        m_claridad: 5,
        m_frase: '',
        d_pregunta: '',
        nr_cuentas: '',
        nr_ahorros: '',
        nr_otros: '',
        nr_tarjetas: '',
        nr_otrasdeudas: '',
        f_1: '',
        f_2: '',
        f_3: '',
        c_nombre: '',
        c_frase: '',
        c_fecha: '',
        b_p1: '',
        b_p2: '',
        b_p3: '',
        b_p4: '',
        b_p5: '',
        fin_miro: 5,
        fin_comodidad: 5,
        inventario: [''],
        domingos: []
      });
      setShowWipeConfirm(false);
    } catch (e) {
      console.error(e);
    }
  };

  const domingosCount = (data.domingos || []).length;
  const progressPct = Math.min(100, (domingosCount / 12) * 100);

  // Delta calculations for 12 weeks
  const dMiro = (data.fin_miro ?? 5) - (data.m_miro ?? 5);
  const dCom = (data.fin_comodidad ?? 5) - (data.m_comodidad ?? 5);

  return (
    <div className="min-h-screen bg-[#FBF5EA] text-[#2B2420] font-serif antialiased pb-20 selection:bg-[#6E1B2C] selection:text-[#FBF5EA]">
      {/* Dynamic font styles injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .font-pinyon {
          font-family: 'Pinyon Script', cursive;
        }
        .font-cormorant {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-sans-ui {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        input[type='range'] {
          accent-color: #6E1B2C;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .panel-fadein {
          animation: fadeIn 0.35s ease-out forwards;
        }
      `}</style>

      {/* TOPBAR */}
      <header className="sticky top-0 z-50 bg-[#FBF5EA]/95 backdrop-blur-sm border-b border-[#E8DCC0] py-2.5 transition">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Link
              href="/vivianne-wolski"
              className="inline-flex items-center gap-1.5 font-sans-ui text-[11px] uppercase tracking-wider text-[#7C8B6B] hover:text-[#6E1B2C] transition"
              title="Volver a la boutique"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Armario de Vivienne</span>
            </Link>

            <span className="text-[#E8DCC0] hidden sm:inline">|</span>

            <div>
              <div className="font-pinyon text-2xl text-[#6E1B2C] leading-none">Vivienne</div>
              <div className="font-sans-ui text-[8px] uppercase tracking-[0.08em] text-[#7C8B6B] leading-none mt-0.5">
                The Silent Studio
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`font-sans-ui text-[11px] text-[#7C8B6B] tracking-wide transition-opacity duration-300 ${
                isSavedBadgeVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ✓ Guardado
            </span>

            <a
              href={GUMROAD_CLUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#6E1B2C] hover:bg-[#2B2420] text-[#FBF5EA] font-sans-ui text-[10.5px] uppercase tracking-wider rounded-full transition shadow-xs"
            >
              <Headphones className="w-3 h-3 text-[#A9842C]" />
              <span className="hidden xs:inline">Wolski Club</span>
              <span>$9 USD</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-[760px] mx-auto px-4 sm:px-6 pt-7 pb-16">
        {/* Monogram & Title Banner */}
        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full border border-[#A9842C] mx-auto flex items-center justify-center font-pinyon text-2xl text-[#6E1B2C] mb-2 shadow-xs bg-[#FBF5EA]">
            V
          </div>
          <div className="font-sans-ui text-[10px] uppercase tracking-[0.14em] text-[#7C8B6B] font-medium mb-1">
            El ritual de honestidad financiera de Vivienne
          </div>
          <h1 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#6E1B2C] tracking-tight mb-2">
            El Domingo de los Números
          </h1>
          <hr className="w-28 mx-auto border-0 border-t-[1.4px] border-[#6E1B2C] mb-1" />
          <hr className="w-28 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-4" />
          <p className="font-serif italic text-sm sm:text-base text-[#6E1B2C] max-w-lg mx-auto">
            &ldquo;Una hora de verdad. Quince minutos cada domingo, para siempre.&rdquo;
          </p>
        </div>

        {/* TABS NAVIGATION */}
        <nav className="flex flex-wrap items-center gap-1.5 pb-3 mb-7 border-b border-[#E8DCC0]">
          {(
            [
              { id: 'inicio', label: 'Inicio' },
              { id: 'medicion', label: 'Mi medición' },
              { id: 'domingo', label: 'El Domingo' },
              { id: 'ritual', label: 'El Ritual' },
              { id: 'bonos', label: 'Bonos' },
              { id: 'datos', label: 'Mis datos' },
            ] as const
          ).map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-sans-ui text-[11.5px] tracking-wide px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#6E1B2C] border-[#6E1B2C] text-white shadow-xs'
                  : 'bg-transparent border-[#E8DCC0] text-[#2B2420] hover:border-[#A9842C] hover:bg-[#FAF5EC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* ============================================================== */}
        {/* TAB 1: INICIO */}
        {/* ============================================================== */}
        {activeTab === 'inicio' && (
          <section className="panel-fadein space-y-5">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">La carta de Vivienne</h2>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-1 mb-5" />
            </div>

            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4 text-[15px] sm:text-[15.5px] leading-relaxed text-[#2B2420]">
              <p className="font-serif italic text-[#6E1B2C] text-base">Cariño,</p>
              <p>
                Vas a abrir esto un domingo en el que preferirías estar haciendo cualquier otra cosa. Está bien. Yo también
                lo he evitado, y he tenido setenta años más de práctica que tú para evitarlo con estilo.
              </p>
              <p>
                Todo el mundo cree que su desorden con el dinero es el peor que existe. Y todo el mundo está equivocado. He
                visto los números de gente con mucho más y gente con mucho menos, y el patrón es siempre el mismo: no es la
                cantidad lo que avergüenza, es no mirar.
              </p>
              <p>
                Sé lo que estás pensando. Que qué me va a enseñar a mí una mujer que toma el té en una terraza con jardín
                inglés. Pero el jardín no es la excepción a esto. Es el recibo. El collar, el jardín, el silencio con el
                que manejo mi vida: todo eso se pagó exactamente igual que se paga cualquier otra cosa, con setenta años de
                mirar mis números un domingo, sin excepción y sin drama. La disciplina viene primero. Siempre. El lujo viene
                después, si acaso.
              </p>
              <p>
                Sé exactamente lo que pasa cuando pones el dedo sobre el ícono del banco y lo detienes a medio segundo del
                clic. No es que no sepas sumar. Es que tu cabeza ya inventó un número peor que el real, y ese número
                imaginado da más miedo que cualquier cifra que exista de verdad. Así que no miras. Y no mirar se siente, por
                un momento, como un alivio.
              </p>
              <p>
                Ese alivio miente. Mientras no miras, el interés sigue corriendo, la suscripción que ya no usas se sigue
                cobrando, y la fuga sigue goteando en la oscuridad, donde nadie la puede cerrar. Cada domingo que evitas, el
                número real se aleja más de lo que imaginas, y entre más se aleja, más miedo da mirar. Es un círculo, y se
                alimenta solo.
              </p>
              <p>
                Lo único que rompe ese círculo es mirar, y descubrir que no pasa nada. Nadie te regaña. El mundo no se
                acaba. El techo sigue en su lugar. Hazlo doce domingos seguidos y el miedo se cansa antes que tú. No te voy a
                prometer más dinero al final de esto. Te voy a prometer algo más simple, y con el tiempo, más valioso: que
                cuando llegue una notificación del banco, la vas a poder abrir sin que se te acelere el pulso.
              </p>
              <p>
                No te voy a pedir que cambies tu vida en treinta días. Te voy a pedir una hora, hoy, y quince minutos cada
                domingo después de eso. Solo los números, y tú, mirándolos de frente.
              </p>
              <p className="font-medium text-[#6E1B2C]">
                El dinero no se manifiesta. Se factura. Empecemos a llevar las cuentas.
              </p>
              <div className="font-pinyon text-3xl text-[#6E1B2C] pt-2">Vivienne</div>
            </div>

            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 shadow-xs">
              <span className="font-serif font-bold text-[#6E1B2C] text-sm block mb-1">Cómo usar esto</span>
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#2B2420] m-0">
                Esta página vive en tu navegador, en tu computadora o tu celular. Nadie más la ve. Empieza por{' '}
                <b>Mi medición</b>, sigue con <b>El Domingo</b> (una sola vez), y después vuelve cada semana a{' '}
                <b>El Ritual</b>. Todo se guarda solo, aquí mismo en tu dispositivo.
              </p>
            </div>

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “Mirar no mata. Evitar, sí, poco a poco.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* TAB 2: MEDICIÓN */}
        {/* ============================================================== */}
        {activeTab === 'medicion' && (
          <section className="panel-fadein space-y-5">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">Tu medición inicial</h2>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-1 mb-5" />
            </div>

            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-6">
              <p className="text-[14.5px] text-[#2B2420] leading-relaxed">
                Un número no miente, aunque tú a ti mismo te mientas de maravilla. Anota esto con la misma honestidad que le
                exigirías a cualquiera que te debiera dinero.
              </p>

              {/* Slider 1 */}
              <div>
                <label className="font-serif font-bold text-[#6E1B2C] text-sm block mb-1.5">
                  Qué tan a menudo miro mis cuentas sin que me lo pidan
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={data.m_miro ?? 5}
                  onChange={e => updateData({ m_miro: parseInt(e.target.value, 10) })}
                  className="w-full h-1.5 bg-[#E8DCC0] rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-sans-ui text-xs text-[#6E1B2C] block text-right font-medium mt-1">
                  {data.m_miro ?? 5} / 10
                </span>
              </div>

              {/* Slider 2 */}
              <div>
                <label className="font-serif font-bold text-[#6E1B2C] text-sm block mb-1.5">
                  Qué tanta comodidad siento al decir mi número en voz alta
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={data.m_comodidad ?? 5}
                  onChange={e => updateData({ m_comodidad: parseInt(e.target.value, 10) })}
                  className="w-full h-1.5 bg-[#E8DCC0] rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-sans-ui text-xs text-[#6E1B2C] block text-right font-medium mt-1">
                  {data.m_comodidad ?? 5} / 10
                </span>
              </div>

              {/* Slider 3 */}
              <div>
                <label className="font-serif font-bold text-[#6E1B2C] text-sm block mb-1.5">
                  Qué tan clara tengo cuál es mi fuga más grande
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={data.m_claridad ?? 5}
                  onChange={e => updateData({ m_claridad: parseInt(e.target.value, 10) })}
                  className="w-full h-1.5 bg-[#E8DCC0] rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-sans-ui text-xs text-[#6E1B2C] block text-right font-medium mt-1">
                  {data.m_claridad ?? 5} / 10
                </span>
              </div>

              {/* Textarea */}
              <div className="pt-2">
                <label className="font-serif font-bold text-[#6E1B2C] text-sm block mb-1.5">
                  Una frase para quien serás dentro de doce domingos
                </label>
                <textarea
                  value={data.m_frase || ''}
                  onChange={e => updateData({ m_frase: e.target.value })}
                  placeholder="Escribe aquí tu frase..."
                  rows={3}
                  className="w-full font-serif text-[14.5px] text-[#2B2420] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none p-1.5 transition resize-y"
                />
                <p className="font-sans-ui text-[11px] text-[#7C8B6B] mt-1.5">
                  Vuelve aquí después de tu domingo doce. Vas a poder comparar.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “El número no se juzga. Se mira.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* TAB 3: EL DOMINGO (Sesión guiada) */}
        {/* ============================================================== */}
        {activeTab === 'domingo' && (
          <section className="panel-fadein space-y-6">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">El Domingo</h2>
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C] mt-1">
                Una sola sesión guiada, de principio a fin. Tómate la hora.
              </p>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-2 mb-5" />
            </div>

            {/* Step 1: Inventario */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#6E1B2C] text-white font-sans-ui text-[10px] flex items-center justify-center font-bold">
                  1
                </span>
                <span className="font-serif font-bold text-[#6E1B2C] text-base">
                  El Inventario Sin Vergüenza
                </span>
              </div>
              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] -mt-1 mb-3">
                Cuenta cada cuenta, tarjeta, deuda o suscripción que pagas. No la juzgues, solo cuéntala.
              </p>

              <div className="space-y-2">
                {(data.inventario || []).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={e => handleInventarioChange(idx, e.target.value)}
                      placeholder="Cuenta, tarjeta, deuda o suscripción..."
                      className="flex-1 font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveInventario(idx)}
                      className="font-sans-ui text-[11px] text-[#7C8B6B] hover:text-[#6E1B2C] border border-[#E8DCC0] hover:border-[#6E1B2C] px-2.5 py-1 rounded-sm transition cursor-pointer"
                    >
                      Quitar
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleAddInventario}
                className="inline-flex items-center gap-1 font-sans-ui text-[11px] text-[#6E1B2C] hover:text-[#2B2420] border border-[#6E1B2C] hover:border-[#2B2420] px-3 py-1.5 rounded-sm transition mt-3 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                Agregar cuenta
              </button>
            </div>

            {/* Step 2: La Pregunta Prohibida */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#6E1B2C] text-white font-sans-ui text-[10px] flex items-center justify-center font-bold">
                  2
                </span>
                <span className="font-serif font-bold text-[#6E1B2C] text-base">
                  La Pregunta Prohibida
                </span>
              </div>
              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] italic -mt-1 mb-2">
                &ldquo;¿Cuánto tengo, realmente?&rdquo; — el número exacto, sin redondear.
              </p>
              <input
                type="text"
                value={data.d_pregunta || ''}
                onChange={e => updateData({ d_pregunta: e.target.value })}
                placeholder="Mi número exacto hoy es..."
                className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
              />
            </div>

            {/* Step 3: El Número Real */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#6E1B2C] text-white font-sans-ui text-[10px] flex items-center justify-center font-bold">
                  3
                </span>
                <span className="font-serif font-bold text-[#6E1B2C] text-base">El Número Real</span>
              </div>
              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] -mt-1">
                Un cálculo objetivo, no una opinión.
              </p>

              <div>
                <span className="font-serif font-semibold text-[#6E1B2C] text-xs uppercase tracking-wider block mb-2">
                  Lo que tengo
                </span>
                <div className="grid sm:grid-cols-3 gap-3">
                  <input
                    type="number"
                    value={data.nr_cuentas || ''}
                    onChange={e => updateData({ nr_cuentas: e.target.value })}
                    placeholder="Cuentas y efectivo"
                    className="font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                  <input
                    type="number"
                    value={data.nr_ahorros || ''}
                    onChange={e => updateData({ nr_ahorros: e.target.value })}
                    placeholder="Ahorros e inversiones"
                    className="font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                  <input
                    type="number"
                    value={data.nr_otros || ''}
                    onChange={e => updateData({ nr_otros: e.target.value })}
                    placeholder="Otros bienes de valor"
                    className="font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                </div>
              </div>

              <div className="pt-2">
                <span className="font-serif font-semibold text-[#6E1B2C] text-xs uppercase tracking-wider block mb-2">
                  Lo que debo
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="number"
                    value={data.nr_tarjetas || ''}
                    onChange={e => updateData({ nr_tarjetas: e.target.value })}
                    placeholder="Tarjetas y préstamos"
                    className="font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                  <input
                    type="number"
                    value={data.nr_otrasdeudas || ''}
                    onChange={e => updateData({ nr_otrasdeudas: e.target.value })}
                    placeholder="Otras deudas"
                    className="font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                </div>
              </div>

              {/* Real time output box */}
              <div className="p-3 bg-[#FAF5EC] border border-[#6E1B2C]/30 rounded-xs font-sans-ui text-xs sm:text-[12.5px] text-[#2B2420] mt-3">
                <span className="font-semibold text-[#7C8B6B]">Tengo:</span>{' '}
                <span className="font-mono font-medium">${numeroReal.tengo.toLocaleString()}</span> &nbsp;·&nbsp;{' '}
                <span className="font-semibold text-[#6E1B2C]">Debo:</span>{' '}
                <span className="font-mono font-medium">${numeroReal.debo.toLocaleString()}</span> &nbsp;·&nbsp;{' '}
                <span className="font-semibold text-[#2B2420]">Mi número real:</span>{' '}
                <span
                  className={`font-mono font-bold ${
                    numeroReal.real >= 0 ? 'text-[#7C8B6B]' : 'text-[#6E1B2C]'
                  }`}
                >
                  ${numeroReal.real.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Step 4: Las Tres Fugas */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#6E1B2C] text-white font-sans-ui text-[10px] flex items-center justify-center font-bold">
                  4
                </span>
                <span className="font-serif font-bold text-[#6E1B2C] text-base">Las Tres Fugas</span>
              </div>
              <div className="space-y-3 pt-1">
                <input
                  type="text"
                  value={data.f_1 || ''}
                  onChange={e => updateData({ f_1: e.target.value })}
                  placeholder="1. La suscripción olvidada..."
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.f_2 || ''}
                  onChange={e => updateData({ f_2: e.target.value })}
                  placeholder="2. La categoría de impulso..."
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.f_3 || ''}
                  onChange={e => updateData({ f_3: e.target.value })}
                  placeholder="3. El cargo invisible..."
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
              </div>
            </div>

            {/* Step 5: El Contrato Contigo */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#6E1B2C] text-white font-sans-ui text-[10px] flex items-center justify-center font-bold">
                  5
                </span>
                <span className="font-serif font-bold text-[#6E1B2C] text-base">El Contrato Contigo</span>
              </div>
              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] -mt-1">
                Una sola frase. No un plan de doce puntos.
              </p>
              <div className="space-y-3 pt-1">
                <input
                  type="text"
                  value={data.c_nombre || ''}
                  onChange={e => updateData({ c_nombre: e.target.value })}
                  placeholder="Tu nombre completo"
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <textarea
                  value={data.c_frase || ''}
                  onChange={e => updateData({ c_frase: e.target.value })}
                  placeholder="Me comprometo a..."
                  rows={2}
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1 resize-y"
                />
                <input
                  type="date"
                  value={data.c_fecha || ''}
                  onChange={e => updateData({ c_fecha: e.target.value })}
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
              </div>
            </div>

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “Lo que no se cuenta, se repite.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* TAB 4: EL RITUAL (15 minutos semanales) */}
        {/* ============================================================== */}
        {activeTab === 'ritual' && (
          <section className="panel-fadein space-y-6">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">El Ritual</h2>
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C] mt-1">
                Quince minutos, cada domingo, para siempre.
              </p>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-2 mb-4" />
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-[#E8DCC0] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#6E1B2C] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="font-sans-ui text-center text-xs text-[#7C8B6B] font-medium">
                Domingo {domingosCount} de 12
              </div>
            </div>

            {/* Today's template entry card */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                La plantilla de hoy
              </span>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-sans-ui text-[11px] text-[#7C8B6B] block mb-1">Fecha</label>
                  <input
                    type="date"
                    value={rFecha}
                    onChange={e => setRFecha(e.target.value)}
                    className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                </div>
                <div>
                  <label className="font-sans-ui text-[11px] text-[#7C8B6B] block mb-1">Saldo total hoy</label>
                  <input
                    type="number"
                    value={rSaldo}
                    onChange={e => setRSaldo(e.target.value)}
                    placeholder="Monto total disponible"
                    className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  value={rGasto}
                  onChange={e => setRGasto(e.target.value)}
                  placeholder="El gasto más grande de esta semana..."
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
              </div>

              <div>
                <input
                  type="text"
                  value={rFuga}
                  onChange={e => setRFuga(e.target.value)}
                  placeholder="Una fuga que noté..."
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
              </div>

              <div>
                <textarea
                  value={rNotas}
                  onChange={e => setRNotas(e.target.value)}
                  placeholder="Qué noté esta semana..."
                  rows={2}
                  className="w-full font-serif text-[14.5px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1 resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAddDomingo}
                  className="px-6 py-2.5 bg-[#6E1B2C] hover:bg-[#2B2420] text-white font-sans-ui text-xs uppercase tracking-wider rounded-sm transition cursor-pointer shadow-xs"
                >
                  Completar mi Domingo
                </button>
              </div>

              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] leading-relaxed pt-2 border-t border-[#E8DCC0]/60">
                <b>Dos cosas más, si hacen falta:</b> si tienes más de una deuda, el mínimo en todas y lo que te
                sobre a la más pequeña; cuando esa cierre, ese pago se suma a la siguiente. Y si necesitas un
                presupuesto, son tres números: lo que entra, lo que ya tiene dueño, lo que te queda para decidir
                tú. No hace falta más sistema que ese.
              </p>
            </div>

            {/* Registered Sundays Table */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">Tus domingos</span>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse font-sans-ui text-xs">
                  <thead>
                    <tr className="bg-[#FAF5EC] border-b border-[#E8DCC0]">
                      <th className="p-2 text-left font-semibold text-[#6E1B2C] w-8">#</th>
                      <th className="p-2 text-left font-semibold text-[#2B2420]">Fecha</th>
                      <th className="p-2 text-left font-semibold text-[#2B2420]">Saldo</th>
                      <th className="p-2 text-left font-semibold text-[#2B2420]">Fuga notada</th>
                      <th className="p-2 text-right w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(data.domingos || []).length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-4 text-center text-[#7C8B6B] italic font-serif">
                          Aún no has registrado ningún domingo. Completa la plantilla arriba.
                        </td>
                      </tr>
                    ) : (
                      (data.domingos || []).map((d, idx) => (
                        <tr key={idx} className="border-b border-[#E8DCC0]/50 hover:bg-[#FAF5EC]/50">
                          <td className="p-2 text-[#7C8B6B] font-mono">{idx + 1}</td>
                          <td className="p-2 font-mono">{d.fecha || '-'}</td>
                          <td className="p-2 font-mono font-medium">{d.saldo ? `$${d.saldo}` : '-'}</td>
                          <td className="p-2 text-[#6E1B2C] max-w-[200px] truncate">{d.fuga || '-'}</td>
                          <td className="p-2 text-right">
                            <button
                              type="button"
                              onClick={() => handleRemoveDomingo(idx)}
                              className="text-[#7C8B6B] hover:text-[#6E1B2C] font-bold px-1.5 py-0.5 rounded cursor-pointer"
                              title="Borrar entrada"
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assistance resources */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3 text-[14px]">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                Si el problema tiene dientes reales
              </span>
              <p className="text-[#2B2420] -mt-1 leading-relaxed">
                Yo sé llevar mis números. No sé de leyes de tu país. Esto es lo que sí sé: cuándo hace falta un
                profesional, y cuál.
              </p>
              <div className="space-y-2 text-xs sm:text-[13px] leading-relaxed pt-1">
                <p>
                  <b>Asesor financiero certificado:</b> decisiones de inversión, jubilación o planificación a largo
                  plazo.
                </p>
                <p>
                  <b>Organización de asesoría crediticia sin fines de lucro:</b> para negociar con acreedores o
                  consolidar deuda.
                </p>
                <p>
                  <b>Abogado especializado en insolvencia:</b> si la deuda ya superó lo que tu ingreso puede
                  resolver.
                </p>
                <p>
                  <b>Contador o asesor fiscal:</b> para impuestos, que cambian de país en país.
                </p>
                <p>
                  <b>Línea local de ayuda contra la violencia doméstica:</b> si el control sobre tu dinero viene de
                  otra persona.
                </p>
              </div>
            </div>

            {/* 12-week closure card */}
            {domingosCount >= 12 && (
              <div className="bg-white border border-[#A9842C] rounded-sm p-5 sm:p-7 shadow-sm space-y-4">
                <span className="font-serif font-bold text-[#6E1B2C] text-base block">El cierre</span>
                <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#2B2420]">
                  Llevas doce domingos o más. Vuelve a puntuarte igual que la primera vez, y compara con honestidad.
                </p>

                <div>
                  <label className="font-sans-ui text-xs font-semibold text-[#6E1B2C] block mb-1">
                    Qué tan a menudo miro mis cuentas
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={data.fin_miro ?? 5}
                    onChange={e => updateData({ fin_miro: parseInt(e.target.value, 10) })}
                    className="w-full h-1.5 bg-[#E8DCC0] rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="font-sans-ui text-xs text-[#6E1B2C] block text-right font-medium">
                    {data.fin_miro ?? 5} / 10
                  </span>
                </div>

                <div>
                  <label className="font-sans-ui text-xs font-semibold text-[#6E1B2C] block mb-1">
                    Qué tanta comodidad siento con mi número
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={data.fin_comodidad ?? 5}
                    onChange={e => updateData({ fin_comodidad: parseInt(e.target.value, 10) })}
                    className="w-full h-1.5 bg-[#E8DCC0] rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="font-sans-ui text-xs text-[#6E1B2C] block text-right font-medium">
                    {data.fin_comodidad ?? 5} / 10
                  </span>
                </div>

                <div className="p-4 bg-[#FDF4F0] border border-[#6E1B2C] rounded-sm font-sans-ui text-xs leading-relaxed text-[#2B2420]">
                  Miro mis cuentas {dMiro >= 0 ? '+' : ''}
                  {dMiro} puntos más que al inicio. Mi comodidad con el número cambió {dCom >= 0 ? '+' : ''}
                  {dCom} puntos. Eso es evidencia, no entusiasmo.
                </div>
              </div>
            )}

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “El domingo ya es tuyo. Nadie más lo necesita para ti.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* TAB 5: BONOS */}
        {/* ============================================================== */}
        {activeTab === 'bonos' && (
          <section className="panel-fadein space-y-6">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">Bonos</h2>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-1 mb-5" />
            </div>

            {/* Bono 1 */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                Bono 1 — Las Cinco Preguntas
              </span>
              <p className="font-sans-ui text-[11.5px] text-[#7C8B6B] -mt-1 mb-2">
                Para el domingo en que de verdad no tienes quince minutos.
              </p>
              <div className="space-y-2.5 pt-1">
                <input
                  type="text"
                  value={data.b_p1 || ''}
                  onChange={e => updateData({ b_p1: e.target.value })}
                  placeholder="1. ¿Cuánto tengo hoy, exactamente?"
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.b_p2 || ''}
                  onChange={e => updateData({ b_p2: e.target.value })}
                  placeholder="2. ¿Qué entró esta semana?"
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.b_p3 || ''}
                  onChange={e => updateData({ b_p3: e.target.value })}
                  placeholder="3. ¿Qué salió esta semana?"
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.b_p4 || ''}
                  onChange={e => updateData({ b_p4: e.target.value })}
                  placeholder="4. ¿Hubo algo que no esperaba?"
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
                <input
                  type="text"
                  value={data.b_p5 || ''}
                  onChange={e => updateData({ b_p5: e.target.value })}
                  placeholder="5. ¿Qué voy a hacer distinto la próxima semana?"
                  className="w-full font-serif text-[14px] border-b border-[#E8DCC0] focus:border-[#6E1B2C] bg-transparent outline-none py-1.5 px-1"
                />
              </div>
            </div>

            {/* Bono 2 */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3 text-[14px] leading-relaxed">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                Bono 2 — El Guion de Límites
              </span>
              <p>
                <b>Si alguien pregunta cuánto tienes:</b>
                <br />
                <span className="italic text-[#6E1B2C]">
                  &ldquo;Prefiero no hablar de números específicos. Pero te agradezco el interés.&rdquo;
                </span>
              </p>
              <p>
                <b>Si alguien interrumpe tu ritual del domingo:</b>
                <br />
                <span className="italic text-[#6E1B2C]">
                  &ldquo;Estoy en medio de mi ritual semanal. Hablamos en quince minutos.&rdquo;
                </span>
              </p>
              <p className="mb-0">
                <b>Si alguien presiona para que compartas o prestes:</b>
                <br />
                <span className="italic text-[#6E1B2C]">&ldquo;Lo voy a pensar y te digo.&rdquo;</span> Nunca
                respondas que sí en el momento.
              </p>
            </div>

            {/* Bono 3 */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-3 text-[14.5px]">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                Bono 3 — Las Tres Reglas de Mi Familia
              </span>
              <p className="border-b border-[#E8DCC0] pb-2">
                <b className="text-[#6E1B2C]">Uno.</b> Nunca dependas de un solo ingreso.
              </p>
              <p className="border-b border-[#E8DCC0] pb-2">
                <b className="text-[#6E1B2C]">Dos.</b> Siempre ten dinero que nadie más sepa que tienes.
              </p>
              <p className="mb-0">
                <b className="text-[#6E1B2C]">Tres.</b> Nunca le debas explicaciones a nadie por tu cuenta de
                banco.
              </p>
            </div>

            {/* Bono 4 */}
            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4">
              <span className="font-serif font-bold text-[#6E1B2C] text-base block">
                Bono 4 — Frases para Recordar
              </span>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  'El dinero no se manifiesta. Se factura.',
                  'No le debo explicaciones a nadie por mi cuenta de banco.',
                  'El número no se juzga. Se mira.',
                  'Eso no es lujo. Eso es la puerta.',
                  'Una vez. Nunca dos.',
                  'El hábito es la mitad del trabajo.',
                ].map((frase, i) => (
                  <div
                    key={i}
                    className="p-4 border border-[#A9842C] rounded-xs text-center font-serif italic text-sm text-[#6E1B2C] bg-[#FAF5EC]/70 flex items-center justify-center leading-relaxed"
                  >
                    &ldquo;{frase}&rdquo;
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “Una regla que se dice en voz alta se cumple más.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* TAB 6: MIS DATOS */}
        {/* ============================================================== */}
        {activeTab === 'datos' && (
          <section className="panel-fadein space-y-5">
            <div className="text-center">
              <h2 className="font-cormorant font-bold text-2xl text-[#6E1B2C]">Mis datos</h2>
              <hr className="w-24 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mt-1 mb-5" />
            </div>

            <div className="bg-white border border-[#E8DCC0] rounded-sm p-5 sm:p-7 shadow-xs space-y-4">
              <p className="text-[14.5px] text-[#2B2420] leading-relaxed">
                Todo lo que escribes aquí se queda en este archivo, en tu propio navegador. Nadie más lo ve, ni
                siquiera nosotros. No hay servidor externo almacenando tus números ni cuenta privada.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleExportTxt}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#6E1B2C] text-[#6E1B2C] hover:bg-[#6E1B2C] hover:text-white font-sans-ui text-xs rounded-sm transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar mis respuestas (.txt)
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#6E1B2C] text-[#6E1B2C] hover:bg-[#6E1B2C] hover:text-white font-sans-ui text-xs rounded-sm transition cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Enviármelas por correo
                </button>

                <button
                  type="button"
                  onClick={() => setShowWipeConfirm(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E8DCC0] text-[#7C8B6B] hover:text-[#6E1B2C] hover:border-[#6E1B2C] font-sans-ui text-xs rounded-sm transition cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Borrar todos mis datos
                </button>
              </div>

              {showWipeConfirm && (
                <div className="p-4 bg-[#FDF4F0] border border-[#6E1B2C] rounded-sm font-sans-ui text-xs text-[#2B2420] space-y-2 mt-3">
                  <p className="font-semibold text-[#6E1B2C]">
                    ¿Estás seguro de que deseas borrar tus datos? Esta acción no se puede deshacer.
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleWipeData}
                      className="px-3 py-1.5 bg-[#6E1B2C] text-white rounded-xs text-[11px] font-medium hover:bg-[#2B2420] transition cursor-pointer"
                    >
                      Sí, borrar todo
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowWipeConfirm(false)}
                      className="px-3 py-1.5 border border-[#E8DCC0] text-[#7C8B6B] rounded-xs text-[11px] hover:text-[#2B2420] transition cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-[#E8DCC0] rounded-sm p-4 font-sans-ui text-[11.5px] text-[#7C8B6B] leading-relaxed">
              Vivienne es un personaje de inteligencia artificial. Este compañero es contenido de desarrollo de
              hábitos y reflexión personal. No es asesoría financiera, legal ni de inversión, ni reemplaza a un
              contador o asesor financiero certificado. Si tu situación incluye control sobre tu dinero por parte de
              otra persona, contacta una línea de ayuda local contra la violencia doméstica.
            </div>

            <div className="text-center pt-4">
              <hr className="w-20 mx-auto border-0 border-t-[0.6px] border-[#A9842C] mb-2" />
              <p className="font-serif italic text-xs sm:text-sm text-[#6E1B2C]">
                “Tu dinero es tuyo. Y también es tuyo el silencio sobre él.”
              </p>
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* BANNER INVITACIÓN AL WOLSKI CLUB */}
        {/* ============================================================== */}
        <div className="mt-14 pt-8 border-t border-[#E8DCC0]">
          <div className="p-6 bg-[#FAF5EC] border border-[#A9842C]/40 rounded-sm text-center space-y-3">
            <span className="font-sans-ui text-[10px] uppercase tracking-[0.25em] text-[#A9842C] font-semibold block">
              CÍRCULO PRIVADO · FORMACIÓN EN AUDIOS
            </span>
            <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#6E1B2C]">
              El Wolski Club de Vivienne
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#7C8B6B] max-w-md mx-auto leading-relaxed">
              Carácter, finanzas y estilo en su oído. Acceda a las formaciones en audio de Vivienne por solo $9 USD.
            </p>
            <div className="pt-2">
              <a
                href={GUMROAD_CLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6E1B2C] hover:bg-[#2B2420] text-[#FBF5EA] font-sans-ui text-xs uppercase tracking-[0.15em] rounded-sm transition shadow-md"
              >
                <Headphones className="w-4 h-4 text-[#A9842C]" />
                <span>Unirme al Wolski Club ($9 USD)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center font-sans-ui text-[10.5px] text-[#A9842C] tracking-[0.1em] uppercase mt-12 pt-6 border-t border-[#E8DCC0]">
          <div>THE SILENT STUDIO · VIVIENNE WOLSKI</div>
          <div className="flex items-center justify-center gap-4 mt-2 text-[10px] text-[#7C8B6B] lowercase">
            <Link href="/vivianne-wolski" className="hover:text-[#6E1B2C] transition">
              boutique
            </Link>
            <span>·</span>
            <Link href="/domingo.html" className="hover:text-[#6E1B2C] transition">
              versión descargable
            </Link>
            <span>·</span>
            <a href={GUMROAD_CLUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E1B2C] transition">
              wolski club
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
