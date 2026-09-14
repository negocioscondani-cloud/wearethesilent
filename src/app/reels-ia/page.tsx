'use client';

import React, { useState, useEffect } from 'react';

export default function ReelsIaLanding() {
  const [secondsLeft, setSecondsLeft] = useState(14 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSec: number) => {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const HOTMART_URL = "https://pay.hotmart.com/G107582281U";

  const lessons = [
    {
      num: "Lección 01",
      title: "Introducción a FLOW",
      desc: "Navega la interfaz y prepara tu espacio de trabajo para optimizar la producción de assets."
    },
    {
      num: "Lección 02",
      title: "Introducción a Magnific",
      desc: "Aprende a reescalar imágenes agregando textura, definición y detalle hiperrealista."
    },
    {
      num: "Lección 03",
      title: "Por qué enfocarnos en FLOW",
      desc: "La ventaja estratégica para centralizar renders y acelerar tiempos de entrega en lote."
    },
    {
      num: "Lección 04",
      title: "Crear el Avatar",
      desc: "Diseño y delimitación de rasgos clave para tu personaje virtual desde la base."
    },
    {
      num: "Lección 05",
      title: "Crear la Tipografía",
      desc: "Selección y aplicación de tipografías legibles y de impacto para formatos verticales."
    },
    {
      num: "Lección 06",
      title: "Música y Efectos de Sonido",
      desc: "Diseño de audio estratégico para elevar la retención en los primeros segundos."
    },
    {
      num: "Lección 07",
      title: "Consistencia del Avatar",
      desc: "Técnicas avanzadas para mantener rostro, cuerpo y vestimenta iguales en cada toma."
    },
    {
      num: "Lección 08",
      title: "Crear la Locación",
      desc: "Construcción de escenarios y fondos con iluminación volumétrica y profundidad."
    },
    {
      num: "Lección 09",
      title: "Clonar la Voz",
      desc: "Sampleo, modulación y clonación con entonación natural sin pausas artificiales."
    },
    {
      num: "Lección 10",
      title: "Marca Personal",
      desc: "Definición de identidad visual, ritmo y pilares temáticos para diferenciarte."
    },
    {
      num: "Lección 11",
      title: "Investigación y Guion",
      desc: "Extracción de tendencias y redacción de ganchos virales con NotebookLM."
    },
    {
      num: "Lección 12",
      title: "Del Guion al Video",
      desc: "Traducción de cada línea en especificaciones de tomas listas para generar."
    },
    {
      num: "Lección 13",
      title: "Acciones del Personaje",
      desc: "Generación de poses, gestualidad y movimientos corporales alineados al guion."
    },
    {
      num: "Lección 14",
      title: "Formatos y Zonas Seguras",
      desc: "Ajuste de resoluciones (9:16) y márgenes seguros para Instagram, TikTok y Shorts."
    },
    {
      num: "Lección 15",
      title: "Animar Videos 1 x 1",
      desc: "Método de animación clip por clip con control de movimiento y sincronización."
    },
    {
      num: "Lección 16",
      title: "Animar con Agent",
      desc: "Delegación a agentes de IA para renderizar secuencias automáticas en minutos."
    },
    {
      num: "Lección 17",
      title: "Tomas de Apoyo (B-Roll)",
      desc: "Generación de inserts macro y recursos de soporte para dinamizar el relato."
    },
    {
      num: "Lección 18",
      title: "Edición y Montaje Final",
      desc: "Cortes de ritmo, subtitulado automático, mezcla de sonido y exportación optimizada."
    }
  ];

  return (
    <div className="reels-landing-wrapper">
      <style jsx global>{`
        .reels-landing-wrapper {
          --bg-primary: #FFFFFF;
          --bg-secondary: #F8FAFC;
          --bg-card: #FFFFFF;
          --text-main: #0F172A;
          --text-muted: #64748B;
          --accent: #2563EB;
          --accent-hover: #1D4ED8;
          --badge-bg: #EFF6FF;
          --badge-text: #1D4ED8;
          --border-color: #E2E8F0;
          --success: #10B981;
          --hotmart: #F04E23;

          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-main);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .reels-top-bar {
          background: #0F172A;
          color: #FFFFFF;
          text-align: center;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .reels-top-bar .timer {
          background: rgba(255, 255, 255, 0.15);
          padding: 3px 10px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-family: monospace;
        }

        .reels-container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .reels-hero {
          padding: 70px 0 50px;
          text-align: center;
          background: radial-gradient(circle at top, #F1F5F9 0%, #FFFFFF 70%);
        }

        .reels-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: var(--badge-bg);
          color: var(--badge-text);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 24px;
        }

        .reels-hero h1 {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-main);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .reels-hero h1 span {
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reels-hero p.lead {
          font-size: clamp(17px, 2vw, 20px);
          color: var(--text-muted);
          max-width: 760px;
          margin: 0 auto 36px;
          font-weight: 400;
        }

        .reels-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
          color: #FFFFFF !important;
          font-size: 18px;
          font-weight: 700;
          padding: 18px 36px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .reels-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -4px rgba(37, 99, 235, 0.5);
          color: #FFFFFF !important;
        }

        .reels-guarantee-note {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 18px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .reels-guarantee-note span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .reels-mockup-wrapper {
          margin-top: 44px;
          display: flex;
          justify-content: center;
        }

        .reels-mockup-img {
          width: 100%;
          max-width: 960px;
          height: auto;
          border-radius: 18px;
          box-shadow: 0 25px 60px -20px rgba(15, 23, 42, 0.2);
          display: block;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .reels-mockup-img:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px -15px rgba(37, 99, 235, 0.25);
        }

        /* Comparison Section */
        .reels-comparison-section {
          padding: 60px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .reels-section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .reels-section-title h2 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
          color: var(--text-main);
        }

        .reels-section-title p {
          color: var(--text-muted);
          font-size: 16px;
        }

        .reels-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 860px;
          margin: 0 auto;
        }

        @media (max-width: 720px) {
          .reels-compare-grid {
            grid-template-columns: 1fr;
          }
        }

        .reels-compare-card {
          background: #FFFFFF;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
        }

        .reels-compare-card.positive {
          border: 2px solid #2563EB;
          box-shadow: 0 12px 30px -10px rgba(37, 99, 235, 0.15);
        }

        .reels-compare-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 18px;
          color: var(--text-main);
        }

        .reels-compare-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .reels-compare-card li {
          font-size: 15px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-main);
        }

        .reels-compare-card.negative li::before {
          content: "✕";
          color: #EF4444;
          font-weight: 700;
          flex-shrink: 0;
        }

        .reels-compare-card.positive li::before {
          content: "✓";
          color: #10B981;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* Modules Curriculum */
        .reels-curriculum {
          padding: 80px 0;
        }

        .reels-modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .reels-module-item {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          padding: 24px;
          border-radius: 14px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .reels-module-item:hover {
          border-color: #94A3B8;
          transform: translateY(-2px);
        }

        .reels-module-num {
          font-size: 12px;
          font-weight: 800;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .reels-module-item h4 {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .reels-module-item p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Pricing Box */
        .reels-offer-box {
          background: #FFFFFF;
          border: 2px solid #0F172A;
          border-radius: 24px;
          padding: 48px;
          max-width: 680px;
          margin: 50px auto 0;
          text-align: center;
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.1);
        }

        .reels-pricing {
          margin: 24px 0;
        }

        .reels-pricing .old-price {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 20px;
          font-weight: 500;
        }

        .reels-pricing .current-price {
          font-size: 56px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1;
          margin: 8px 0;
        }

        .reels-offer-includes {
          text-align: left;
          max-width: 480px;
          margin: 28px auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
        }

        .reels-offer-includes li {
          list-style: none;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-main);
        }

        .reels-offer-includes li::before {
          content: "✓";
          color: var(--success);
          font-weight: 700;
          flex-shrink: 0;
        }

        /* FAQ */
        .reels-faq-section {
          padding: 60px 0 90px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .reels-faq-list {
          max-width: 760px;
          margin: 30px auto 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .reels-faq-item {
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 18px 24px;
          cursor: pointer;
        }

        .reels-faq-item summary {
          font-weight: 700;
          font-size: 16px;
          outline: none;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-main);
        }

        .reels-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .reels-faq-item summary::after {
          content: "+";
          font-size: 20px;
          font-weight: 600;
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .reels-faq-item[open] summary::after {
          content: "−";
        }

        .reels-faq-item p {
          margin-top: 12px;
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Footer */
        .reels-footer {
          padding: 36px 0;
          text-align: center;
          font-size: 13px;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          background: #FFFFFF;
        }
      `}</style>

      {/* Top Announcement Bar */}
      <aside className="reels-top-bar" aria-label="Aviso de oferta">
        <span>🔥 ACCESO CON 70% DE DESCUENTO DISPONIBLE</span>
        <span className="timer" id="countdown">
          {formatCountdown(secondsLeft)}
        </span>
      </aside>

      {/* Hero Section */}
      <header className="reels-hero">
        <div className="reels-container">
          <div className="reels-pill-badge">Flujo de Trabajo Automatizado</div>
          <h1>
            Crear Reels con IA<br />
            <span>en minutos</span>
          </h1>
          <p className="lead">
            Domina el sistema completo para producir videos cinematográficos verticales sin grabarte, sin equipo costoso y manteniendo consistencia absoluta en tus personajes y marca personal.
          </p>

          <a 
            href={HOTMART_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="reels-cta-btn"
          >
            ACCEDER AL CURSO POR $37 USD
          </a>

          <div className="reels-guarantee-note">
            <span>🔒 Pago 100% Seguro por Hotmart</span>
            <span>⚡ Acceso Inmediato</span>
            <span>🛡️ Garantía de 7 Días</span>
          </div>

          <div className="reels-mockup-wrapper">
            <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" title="Acceder al curso">
              <img 
                src="/images/reels-mockup.jpg" 
                alt="Curso Completo Reels con IA en 10 Minutos - Bundle de Recursos y Formación" 
                className="reels-mockup-img"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Comparison Section */}
      <section className="reels-comparison-section">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>¿Por qué este método cambia las reglas?</h2>
            <p>Compara el modelo tradicional frente al sistema optimizado de 10 minutos.</p>
          </div>

          <div className="reels-compare-grid">
            <article className="reels-compare-card negative">
              <h3>Método Convencional</h3>
              <ul>
                <li>Horas escribiendo guiones sin gancho claro</li>
                <li>Inseguridad frente a la cámara e iluminación deficiente</li>
                <li>Edición manual repetitiva de más de 4 horas por video</li>
                <li>Inconsistencia visual entre un reel y el siguiente</li>
                <li>Fatiga y abandono del canal al poco tiempo</li>
              </ul>
            </article>

            <article className="reels-compare-card positive">
              <h3>Sistema 10 Minutos con IA</h3>
              <ul>
                <li>Estructura de guiones virales con NotebookLM en segundos</li>
                <li>Avatar consistente con rostro, ropa y locación fijos</li>
                <li>Voz clonada con entonación natural sin grabar audio</li>
                <li>Animación en lote y delegación a agentes de IA</li>
                <li>Montaje rápido listo para publicar en minutos</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Modules Curriculum */}
      <main className="reels-curriculum">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>Plan de Estudio Paso a Paso</h2>
            <p>18 lecciones prácticas directo al grano diseñadas para implementación inmediata.</p>
          </div>

          <div className="reels-modules-grid">
            {lessons.map((lesson, idx) => (
              <article className="reels-module-item" key={idx}>
                <div className="reels-module-num">{lesson.num}</div>
                <h4>{lesson.title}</h4>
                <p>{lesson.desc}</p>
              </article>
            ))}
          </div>

          {/* Checkout Card */}
          <section className="reels-offer-box" id="checkout">
            <div className="reels-pill-badge">Oferta Especial de Lanzamiento</div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>
              Acceso Vitalicio + Actualizaciones
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px' }}>
              Aprende el sistema hoy y crea tus propios videos en minutos.
            </p>

            <div className="reels-pricing">
              <div className="old-price">Precio habitual: $127 USD</div>
              <div className="current-price">
                $37 <span style={{ fontSize: '20px', fontWeight: 600 }}>USD</span>
              </div>
            </div>

            <ul className="reels-offer-includes">
              <li>Acceso completo a las 18 lecciones en video HD</li>
              <li>Flujo de trabajo para avatares consistentes y clonación de voz</li>
              <li>Plantillas de guionismo viral y automatización con agentes</li>
              <li>Soporte y acceso inmediato en la plataforma de Hotmart</li>
              <li>Garantía total de satisfacción por 7 días</li>
            </ul>

            <a 
              href={HOTMART_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="reels-cta-btn" 
              style={{ width: '100%', marginTop: '10px' }}
            >
              OBTENER ACCESO INMEDIATO
            </a>

            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              Garantía incondicional de 7 días. Si el contenido no cumple tus expectativas, solicitas tu reembolso íntegro con un solo clic.
            </p>
          </section>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="reels-faq-section">
        <div className="reels-container">
          <div className="reels-section-title">
            <h2>Preguntas Frecuentes</h2>
            <p>Todo lo que necesitas saber antes de empezar.</p>
          </div>

          <div className="reels-faq-list">
            <details className="reels-faq-item">
              <summary>¿Necesito conocimientos previos de edición o programación?</summary>
              <p>No. El método está planteado paso a paso desde cero. Aprenderás a utilizar herramientas intuitivas con flujos directos pensados para cualquier nivel.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Cuánto tiempo tardo en ver resultados?</summary>
              <p>El curso está estructurado para que puedas implementar cada módulo el mismo día. Al finalizar el recorrido tendrás tu primer Reel completo y el flujo listo para replicar en 10 minutos.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Cómo y cuándo recibo el acceso?</summary>
              <p>El acceso es inmediato tras confirmarse el pago. Hotmart te enviará a tu correo electrónico los datos de acceso para comenzar de inmediato desde cualquier dispositivo.</p>
            </details>

            <details className="reels-faq-item">
              <summary>¿Qué ocurre si el curso no es lo que esperaba?</summary>
              <p>Cuentas con 7 días de garantía total. Puedes evaluar el material y, si decides que no es para ti, pedir el reembolso sin preguntas directo en Hotmart.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="reels-footer">
        <div className="reels-container">
          <p>© 2026 Crea Reels con IA en 10 Minutos. Todos los derechos reservados.</p>
          <p style={{ marginTop: '6px' }}>
            Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza control editorial previo de los productos.
          </p>
        </div>
      </footer>
    </div>
  );
}
