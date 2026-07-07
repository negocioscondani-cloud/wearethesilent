
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const deptDetails = {
    estrategia: {
        title: "Departamento de Estrategia",
        content: `
            <p class="text-white/70 text-sm italic mb-8">El arquitecto de la ventaja competitiva y la rentabilidad.</p>
            <div class="space-y-8">
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Misión Operativa:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        Su responsabilidad central es la viabilidad del negocio del cliente. No se trata de "tener ideas", sino de diseñar un roadmap táctico basado en Keyword Research y auditoría de mercado real. Define el posicionamiento de estatus y los pilares de autoridad.
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Hitos de Gestión:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        1. <strong>Auditoría Corporativa:</strong> Análisis de debilidades visuales de la marca.<br>
                        2. <strong>Roadmap Táctico:</strong> Planificación de contenidos orientada a la facturación.<br>
                        3. <strong>Validación de Pilares:</strong> Asegurar que la marca hable desde la autoridad, no desde la necesidad.
                    </p>
                </div>
            </div>`
    },
    editorial: {
        title: "Departamento Editorial",
        content: `
            <p class="text-white/70 text-sm italic mb-8">Gestión de la identidad comunicativa y el patrimonio narrativo.</p>
            <div class="space-y-8">
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Misión Operativa:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        Guardián de la voz de la marca. Su responsabilidad es transformar el roadmap estratégico en guiones y textos que activen gatillos psicológicos. Evita la mediocridad lingüística y garantiza que la marca suene experta en cada canal.
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Hitos de Gestión:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        1. <strong>Definición de Tono:</strong> Construcción de la personalidad de voz.<br>
                        2. <strong>Ingeniería de Guionismo:</strong> Estructuración narrativa para retención máxima.<br>
                        3. <strong>Auditoría de Conversión:</strong> Filtrado de cada mensaje bajo criterios de neuro-psicología.
                    </p>
                </div>
            </div>`
    },
    diseno: {
        title: "Departamento de Diseño",
        content: `
            <p class="text-white/70 text-sm italic mb-8">Dirección de arte y curaduría de la percepción estética.</p>
            <div class="space-y-8">
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Misión Operativa:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        Responsable de que la marca "venda" sin hablar. Define la estética que el cliente recordará. Gestiona la jerarquía visual, las texturas y la iluminación que posicionan a la marca en el segmento Premium del mercado.
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Hitos de Gestión:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        1. <strong>Moodboarding de Élite:</strong> Curaduría de referencias visuales de lujo.<br>
                        2. <strong>Dirección de Arte Técnica:</strong> Especificación de parámetros de iluminación y composición.<br>
                        3. <strong>Control de Calidad:</strong> Garantizar el estándar editorial en cada activo gráfico.
                    </p>
                </div>
            </div>`
    },
    multimedia: {
        title: "Departamento Multimedia",
        content: `
            <p class="text-white/70 text-sm italic mb-8">Producción audiovisual generativa de alta fidelidad.</p>
            <div class="space-y-8">
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Misión Operativa:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        Ejecución técnica definitiva. Su propósito es producir activos de video y audio que detengan el scroll mediante una estética cinematográfica. Responsable de la fluidez, el color grading y la inmersión sonora 2026.
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Hitos de Gestión:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        1. <strong>Producción AV 4K:</strong> Generación de clips con coherencia de movimiento.<br>
                        2. <strong>Ingeniería de Sonido:</strong> Implementación de SFX y locuciones de alta gama.<br>
                        3. <strong>Optimización Multi-plataforma:</strong> Finalización de formatos para impacto móvil.
                            </p>
                        </div>
                    </div>`
    },
    cuentas: {
        title: "Departamento de Cuentas",
        content: `
            <p class="text-white/70 text-sm italic mb-8">Liderazgo de relación estratégica y éxito del socio comercial.</p>
            <div class="space-y-8">
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Misión Operativa:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        El nexo directivo. No se limita a entregar archivos; entrega resultados de negocio. Su propósito es blindar la relación a largo plazo mediante una comunicación de alto nivel, briefings ejecutivos y reportes de rentabilidad visual.
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] gold-text uppercase tracking-widest mb-4">Hitos de Gestión:</h4>
                    <p class="text-white/50 text-xs leading-loose">
                        1. <strong>Briefing Corporativo:</strong> Alineación de objetivos cliente-agencia.<br>
                        2. <strong>Entrega de Estatus:</strong> Presentación de activos con diseño editorial.<br>
                        3. <strong>Análisis de KPIs:</strong> Demostración del crecimiento de autoridad de la marca.
                    </p>
                </div>
            </div>`
    }
};

type ModalContent = {
    title: string;
    content: string;
} | null;

const ArchitecturePage = () => {
    const [modalContent, setModalContent] = useState<ModalContent>(null);

    const openModal = (id: keyof typeof deptDetails) => {
        setModalContent(deptDetails[id]);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
        
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
            closeModal();
           }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.querySelectorAll('.reveal-element').forEach(el => observer.unobserve(el));
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        if (modalContent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalContent]);

    return (
        <div className="architecture-body-styles antialiased">
             {modalContent && (
                <div 
                    id="modal-overlay" 
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in-25" 
                    onClick={closeModal}
                >
                    <div 
                        className="modal-content text-left scrollbar-hide bg-[#0d0d0d] border border-gold/20 max-w-2xl w-[95%] max-h-[90vh] overflow-y-auto p-12 md:p-16 relative" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeModal} className="absolute top-6 right-6 text-white/40 hover:text-gold transition text-3xl">&times;</button>
                        <span className="text-[9px] gold-text uppercase tracking-[0.5em] mb-4 block">Manual Operativo de Arquitectura Corporativa</span>
                        <h2 className="serif text-4xl md:text-5xl text-white mb-8 italic tracking-tight font-light">{modalContent.title}</h2>
                        <div className="h-[1px] w-full bg-white/10 mb-10"></div>
                        <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
                    </div>
                </div>
            )}
            {/* Hero Section */}
            <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
                </div>
                
                <div className="serif text-xl font-light tracking-[0.3em] uppercase mb-12 opacity-40 reveal-element">The Silent Studio</div>
                
                <h2 className="serif italic text-lg md:text-xl gold-text mb-4 reveal-element">Ingeniería Visual & Alta Dirección</h2>
                <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight reveal-element">
                    Protocolo de <span className="block italic">Arquitectura Corporativa</span>
                </h1>
                <p className="max-w-2xl text-white/50 font-light leading-relaxed mb-12 reveal-element">
                    La sistematización definitiva para fundar una organización de contenidos High-Ticket. Procesos auditables diseñados para escalar el valor percibido.
                </p>
                <div className="reveal-element">
                    <Link href="/the-silent-studio" className="btn-luxury">
                        Acceder al Ecosistema
                    </Link>
                </div>
            </section>

            {/* Estructura Departamental */}
            <section id="estructura" className="py-24 px-6 max-w-7xl mx-auto reveal-element">
                <div className="text-center mb-16">
                    <h2 className="serif text-4xl md:text-5xl mb-4 italic">Organigrama de <span className="gold-text not-italic font-light">Estatus</span></h2>
                    <p className="text-white/30 uppercase text-[9px] tracking-[0.4em]">Gestión de Operaciones & Responsabilidades</p>
                </div>
                
                <div className="overflow-x-auto border border-white/10 rounded-sm shadow-2xl">
                    <table className="w-full text-left dept-table">
                        <thead className="bg-white/5 uppercase text-[10px] tracking-widest gold-text">
                            <tr>
                                <th className="p-8 font-semibold">Departamento</th>
                                <th className="p-8 hidden md:table-cell">Misión en la Agencia</th>
                                <th className="p-8 text-right">Mando Táctico</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light text-white/70">
                            <tr>
                                <td className="p-8 font-semibold text-white tracking-wide">Estrategia</td>
                                <td className="p-8 hidden md:table-cell italic">Diseño de la Ventaja Competitiva</td>
                                <td className="p-8 text-right">
                                    <button onClick={() => openModal('estrategia')} className="text-[9px] gold-text uppercase border border-gold/30 px-6 py-2 hover:bg-gold hover:text-black transition-all">Propósitos en la Agencia</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-semibold text-white tracking-wide">Editorial</td>
                                <td className="p-8 hidden md:table-cell italic">Ingeniería del Mensaje Central</td>
                                <td className="p-8 text-right">
                                    <button onClick={() => openModal('editorial')} className="text-[9px] gold-text uppercase border border-gold/30 px-6 py-2 hover:bg-gold hover:text-black transition-all">Propósitos en la Agencia</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-semibold text-white tracking-wide">Diseño</td>
                                <td className="p-8 hidden md:table-cell italic">Curaduría de Identidad Visual</td>
                                <td className="p-8 text-right">
                                    <button onClick={() => openModal('diseno')} className="text-[9px] gold-text uppercase border border-gold/30 px-6 py-2 hover:bg-gold hover:text-black transition-all">Propósitos en la Agencia</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-semibold text-white tracking-wide">Multimedia</td>
                                <td className="p-8 hidden md:table-cell italic">Ejecución Audiovisual de Élite</td>
                                <td className="p-8 text-right">
                                    <button onClick={() => openModal('multimedia')} className="text-[9px] gold-text uppercase border border-gold/30 px-6 py-2 hover:bg-gold hover:text-black transition-all">Propósitos en la Agencia</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-8 font-semibold text-white tracking-wide">Cuentas</td>
                                <td className="p-8 hidden md:table-cell italic">Liderazgo & Retención de Socios</td>
                                <td className="p-8 text-right">
                                    <button onClick={() => openModal('cuentas')} className="text-[9px] gold-text uppercase border border-gold/30 px-6 py-2 hover:bg-gold hover:text-black transition-all">Propósitos en la Agencia</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Narrative Section */}
            <section id="sistema" className="py-24 bg-[#0d0d0d] px-6 reveal-element">
                <div className="max-w-4xl mx-auto border-l border-gold/30 pl-10 md:pl-20">
                    <h3 className="serif text-3xl md:text-5xl mb-8 uppercase tracking-tighter">El Origen: <span className="gold-text italic lowercase text-6xl">recuperar la paz</span></h3>
                    <p className="text-white/50 leading-relaxed font-light text-xl mb-6 text-justify">
                        Fundar una agencia en 2026 requiere más que dominar herramientas; requiere dominar el sistema. <span className="text-white font-normal">The Silent Studio</span> nació de la necesidad de devolverle la paz al fundador, transformando el caos generativo en una maquinaria corporativa predecible y de alto estatus. Este es el fin de la improvisación visual.
                    </p>
                </div>
            </section>

            {/* GEMS Section */}
            <section id="gems" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20 reveal-element">
                    <h2 className="serif text-4xl md:text-5xl mb-4 italic">El Motor <span className="gold-text not-italic font-light">6 GEMS</span></h2>
                    <p className="text-white/30 uppercase text-[9px] tracking-[0.4em]">Fuerza Ejecutiva de la Organización</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-element">
                    <div className="step-card p-12">
                        <span className="serif text-4xl gold-text mb-6 block">#1 UGC Society</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Cimientos estratégicos. El cerebro analítico que define los pilares de mercado.</p>
                    </div>
                    <div className="step-card p-12">
                        <span className="serif text-4xl gold-text mb-6 block">#2 Oracle Luxe</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Guionista de élite. Especializado en convertir estrategias en narrativas de alto impacto.</p>
                    </div>
                    <div className="step-card p-12 border-gold/40">
                        <span className="serif text-4xl gold-text mb-6 block">#3 Neuro Scoring</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Filtro de conversión. Auditoría psicológica para maximizar el ROI del mensaje.</p>
                    </div>
                    <div className="step-card p-12">
                        <span className="serif text-4xl gold-text mb-6 block">#4 Luxe Prompt</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Ingeniería visual. Especificación técnica para resultados fotográficos superiores.</p>
                    </div>
                    <div className="step-card p-12">
                        <span className="serif text-4xl gold-text mb-6 block">#5 Visual Director</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Dirección creativa. Orquesta la secuencia de activos maestros de la agencia.</p>
                    </div>
                    <div className="step-card p-12">
                        <span className="serif text-4xl gold-text mb-6 block">#6 Alpha Content</span>
                        <p className="text-white/40 text-xs font-light leading-relaxed">Arquitecto de activos. Crea los materiales de entrega final con diseño editorial.</p>
                    </div>
                </div>

                <div className="mt-24 reveal-element">
                    <div className="gems-cta-block p-12 md:p-20 text-center rounded-sm">
                        <span className="gold-text uppercase text-[10px] tracking-[0.5em] mb-6 block italic serif">Acceso Tecnológico Directo</span>
                        <h3 className="serif text-3xl md:text-5xl mb-10 font-light leading-tight">Implementa el sistema con la <br/><span className="italic">Documentación Maestra</span></h3>
                        <p className="max-w-xl mx-auto text-white/40 text-sm font-light mb-12">
                            Desbloquea los protocolos técnicos internos, estructuras de prompts y flujos de trabajo de las 6 GEMS para tu organización de alto impacto.
                        </p>
                        <Link href="/the-silent-studio" className="btn-luxury group">
                            <span className="flex items-center space-x-3">
                                <span>Acceder al Ecosistema Completo</span>
                                <svg className="group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 border-t border-white/5 text-center px-6 reveal-element">
                <div className="mb-16">
                    <Link href="/manual" className="btn-luxury">
                        Volver al Manual
                    </Link>
                </div>
                <div className="serif text-4xl mb-8 italic opacity-60 italic text-gold">El silencio es el lenguaje del lujo.</div>
                <p className="text-[9px] uppercase tracking-[0.5em] text-white/20">The Silent Studio &copy; 2026 | Protocolo de Arquitectura Corporativa</p>
            </footer>
        </div>
    );
};

export default ArchitecturePage;

  

    
