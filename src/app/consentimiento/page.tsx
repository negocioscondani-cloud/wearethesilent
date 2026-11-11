'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function ConsentimientoDatosPage() {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    try {
      localStorage.setItem('vivienne_data_consent_v1', 'accepted');
    } catch {
      // ignore
    }
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#2B1D14] flex flex-col justify-between font-body">
      <header className="w-full px-6 md:px-12 py-5 border-b border-[#D8CBB8]/80 flex items-center justify-between bg-[#F7F1E6]">
        <Link href="/audios" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#6B1F2A] hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a los Audios</span>
        </Link>
        <span className="font-headline text-lg text-[#2B1D14]">Vivienne Wolski</span>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border border-[#B08D57]/60 shadow-sm space-y-5">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#6B1F2A]">
            <ShieldCheck className="w-4 h-4" />
            <span>Protección de Datos & Consentimiento Informado</span>
          </div>

          <h1 className="font-headline text-2xl sm:text-3xl text-[#2B1D14]">
            Consentimiento para Guardar Datos y Recibir Información del Equipo de Vivienne
          </h1>

          <div className="space-y-3 text-xs sm:text-sm text-[#5C4A3E] leading-relaxed">
            <p>
              Al marcar la casilla de aprobación y confirmar este consentimiento en <strong>wearethesilent.com</strong>, autorizas de manera expresa y voluntaria al <strong>equipo de Vivienne Wolski</strong> a:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Almacenar tus datos de contacto</strong> (nombre, correo electrónico y capítulo de interés) de forma segura en nuestra base de datos privada de la lista de espera.
              </li>
              <li>
                <strong>Enviarte comunicaciones e información</strong> relacionada con el lanzamiento de los <em>Audios Semanales de Vivienne: Dominio del Dinero y Libertad Financiera</em>, crónicas editoriales y novedades seleccionadas por el equipo de Vivienne.
              </li>
              <li>
                <strong>Respetar tu privacidad:</strong> Tus datos nunca serán vendidos ni cedidos a terceros ajenos al universo de Vivienne Wolski, y podrás solicitar la baja o eliminación de tu registro en cualquier momento.
              </li>
            </ul>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            {confirmed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#6B1F2A] bg-[#6B1F2A]/10 px-4 py-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>Consentimiento confirmado · Puedes regresar al formulario</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleConfirm}
                className="px-6 py-3.5 rounded-xl bg-[#6B1F2A] hover:bg-[#2B1D14] text-[#F7F1E6] font-mono text-xs uppercase tracking-[0.2em] transition cursor-pointer"
              >
                Confirmar mi consentimiento ahora
              </button>
            )}

            <Link
              href="/audios#formulario-lista"
              className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C4A3E] hover:text-[#6B1F2A] underline underline-offset-4"
            >
              Ir al formulario de registro →
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full px-6 py-5 border-t border-[#D8CBB8]/70 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-[#8A7665]">
        © {new Date().getFullYear()} Vivienne Wolski · Privacidad y Consentimiento
      </footer>
    </div>
  );
}
