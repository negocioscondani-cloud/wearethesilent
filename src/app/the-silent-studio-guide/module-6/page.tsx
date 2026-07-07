'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const Module6Page = () => {
  return (
    <main className="bg-white text-black">
      {/* Header */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl serif italic mb-8 leading-tight">MÓDULO 06: <br/>La Agencia IA.</h2>
          <p className="text-xl md:text-2xl serif italic text-gray-800 leading-relaxed">
            Guía paso a paso para emprender un negocio de creación de contenido con IA (de 0 a entregar y escalar).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 bg-gray-50 text-black">
        <div className="max-w-4xl mx-auto space-y-20">
          
          <div className="text-center border-b border-gray-200 pb-12">
            <h3 className="text-3xl serif italic"><span className="text-gold">Paso 0 —</span> Entiende lo que estamos construyendo</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-6">
             No estás creando una agencia “de diseño”. Estás creando una fábrica de percepción + creatividad + performance, impulsada por IA.
            </p>
             <div className="w-full my-8">
              <Image src="http://studioboom.online/wp-content/uploads/2026/02/freepik__crea-una-infografa-vertical-45-estilo-editorial-pr__10363-scaled.avif" alt="Pipeline de Agencia" width={1024} height={4096} className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl serif italic"><span className="text-gold">Paso 1 —</span> Elige el nicho y la promesa</h3>
              <p className="text-gray-600 leading-relaxed font-semibold">(para nacer con ventaja)</p>
              <p className="text-gray-600 leading-relaxed">Si intentas servir a todos, compites por precio. Si eliges un nicho, compites por autoridad.</p>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">1.1 Elige 1 nicho principal</h4>
                  <p className="text-gray-500 text-sm mb-4">Escoge uno para empezar (puedes expandir luego):</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>alimentos/restaurantes</li>
                    <li>e-commerce (productos)</li>
                    <li>clínicas/estética</li>
                    <li>bienes raíces</li>
                    <li>marcas personales</li>
                    <li>turismo/hoteles</li>
                    <li>eventos/marcas</li>
                  </ul>
                  <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold w-full mt-6">
                    <Link href="/the-silent-studio-guide/nichos-rentables">Ver 20 Nichos Rentables</Link>
                  </Button>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">1.2 Define 1 promesa concreta (en una frase)</h4>
                  <p className="text-gray-500 text-sm mb-4">Ejemplos:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 italic">
                    <li>“Hacemos que tu producto se vea premium sin sesión de fotos.”</li>
                    <li>“Creamos anuncios en video listos para pauta en 7 días.”</li>
                    <li>“Te construimos un embajador digital que genera contenido cada semana.”</li>
                  </ul>
                </div>
              </div>
              <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold mt-6">Resultado esperado: Nicho + promesa clara.</p>
            </div>
             <div className="relative aspect-[3/4] shadow-xl">
              <Image src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_Elegant_cinematic_portrait_of_a_sophisticated_man_i_d50efa04-ac8b-465e-b336-6e4e52fc8e8e_1.avif" alt="Nicho y Promesa" fill className="object-cover rounded-lg"/>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl serif italic"><span className="text-gold">Paso 2 —</span> Construye la marca de tu agencia con IA</h3>
             <p className="text-gray-600 leading-relaxed font-semibold">(nombre, estilo, color, logo)</p>
            <p className="text-gray-600 leading-relaxed max-w-3xl">La agencia debe verse como lo que vende. Si vendes lujo y te ves amateur, se rompe la credibilidad.</p>
            <div className="relative h-96 w-full my-8">
                <Image src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif" alt="Estética de Agencia" fill className="object-cover rounded-lg"/>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                <div>
                    <h4 className="font-bold mb-2">2.1 Nombre (Naming con IA + criterio humano)</h4>
                    <p className="text-xs text-gray-500">Pide a IA 30 opciones y filtra con estas reglas:</p>
                     <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mt-2">
                      <li>1 a 3 palabras</li>
                      <li>se recuerda fácil</li>
                      <li>suena coherente con tu estética (lujo/tech/etc.)</li>
                      <li>se ve bien escrito como logo</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-2">2.2 Estética rectora (tu intención como agencia)</h4>
                     <p className="text-xs text-gray-500">Elige 1 línea visual para todo:</p>
                     <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mt-2">
                        <li>editorial lujo</li>
                        <li>minimal premium</li>
                        <li>brutalismo moderno</li>
                        <li>clean tech</li>
                        <li>natural sofisticado</li>
                     </ul>
                     <p className="text-xs text-gray-500 mt-2">Esta elección será tu “intención estratégica” permanente.</p>
                </div>
                 <div>
                    <h4 className="font-bold mb-2">2.3 Paleta (3 colores, no más)</h4>
                     <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mt-2">
                        <li>principal (identidad)</li>
                        <li>neutro (fondos, texto)</li>
                        <li>acento (botones, llamados)</li>
                     </ul>
                </div>
                 <div>
                    <h4 className="font-bold mb-2">2.4 Logo (IA genera, tú eliges)</h4>
                    <p className="text-xs text-gray-500">Tu proceso:</p>
                     <p className="text-xs text-gray-500">10 conceptos → eliges 1 dirección → 10 variaciones → 1 final</p>
                    <p className="text-xs text-gray-500 mt-2">Checklist:</p>
                     <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mt-2">
                        <li>funciona en blanco/negro</li>
                        <li>se entiende pequeno (perfil)</li>
                        <li>se ve serio en web y propuestas</li>
                     </ul>
                </div>
            </div>
            <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold">Resultado esperado: Nombre + estilo rector + paleta + logo.</p>
          </div>
            
           <div className="space-y-8">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl serif italic"><span className="text-gold">Paso 3 —</span> Define tu oferta como paquetes</h3>
                  <p className="text-gray-600 leading-relaxed font-semibold">(para vender fácil y escalar)</p>
                  <p className="text-gray-600 leading-relaxed">No vendas “servicios”. Vende resultados empaquetados.</p>
                </div>
                <div className="relative aspect-[4/3] shadow-xl">
                    <Image src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_close-up_structured_black_leather__ccf2610e-62b7-4670-8b9c-521bfb7178bf_1.avif" alt="Oferta de Paquetes" fill className="object-cover rounded-lg"/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                  <div className="p-6 bg-white border border-gray-100 rounded-md">
                      <h4 className="font-bold mb-2">Paquete 1 (Entrada) — basado en Módulo 1: Transformación con flujo de IA</h4>
                      <p className="text-xs text-gray-500 font-semibold mb-2">Prospección Quirúrgica</p>
                      <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>5–15 mejoras (antes/después)</li>
                        <li>formatos listos para redes + ads</li>
                      </ul>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-md">
                      <h4 className="font-bold mb-2">Paquete 2 (Producción) — basado en Módulo 2: Imágenes</h4>
                      <p className="text-xs text-gray-500 font-semibold mb-2">Catálogo IA</p>
                       <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>10–30 imágenes nuevas (editorial/3D/lifestyle)</li>
                        <li>variaciones para test</li>
                      </ul>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-md">
                      <h4 className="font-bold mb-2">Paquete 3 (Cinemático) — basado en Módulo 3: Video</h4>
                       <p className="text-xs text-gray-500 font-semibold mb-2">Video IA</p>
                       <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>6–12 clips + 1–2 comerciales (15–30s)</li>
                      </ul>
                  </div>
                   <div className="p-6 bg-white border border-gray-100 rounded-md">
                      <h4 className="font-bold mb-2">Paquete 4 (Guiones + Ads) — basado en Módulo 4: Neuro-Scripting</h4>
                      <p className="text-xs text-gray-500 font-semibold mb-2">Neuro-Scripting</p>
                       <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                          <li>hooks + guiones + copy para campañas</li>
                          <li>optimización por Neuro Scoring</li>
                      </ul>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-md col-span-1 sm:col-span-2 lg:col-span-3">
                      <h4 className="font-bold mb-2">Paquete 5 (Máquina mensual) — basado en Módulo 5: Embajador Digital</h4>
                      <p className="text-xs text-gray-500 font-semibold mb-2">Embajador Digital</p>
                       <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                         <li>avatar + 12–30 videos mensuales</li>
                         <li>contenido orgánico + ads</li>
                      </ul>
                  </div>
              </div>
              <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold">Resultado esperado: Menú de agencia con escalera (de entrada a premium).</p>
           </div>
           
           <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-center">
                  <h3 className="text-3xl serif italic"><span className="text-gold">Paso 4 —</span> Arma tu sistema operativo</h3>
                  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-semibold">(cómo entra un cliente y cómo sale el trabajo)</p>
                  <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">Aquí conviertes tus módulos en una cadena única.</p>
                  <div className="grid md:grid-cols-2 gap-8 pt-6 text-left">
                      <div className="p-6 bg-white border border-gray-100 rounded-md">
                          <h4 className="font-bold mb-2">4.1 Entrada: Brief obligatorio</h4>
                          <p className="text-xs text-gray-500 mb-4">El cliente debe darte:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                              <li>qué vende, a quién, precio, promesa</li>
                              <li>objetivo (ventas/leads/awareness)</li>
                              <li>3 referencias visuales</li>
                              <li>5–15 fotos reales</li>
                              <li>restricciones (qué NO decir/mostrar)</li>
                          </ul>
                      </div>
                      <div className="p-6 bg-white border border-gray-100 rounded-md">
                          <h4 className="font-bold mb-2">4.2 Diagnóstico (aquí entra Módulo 1: Transformación con flujo de IA)</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                              <li>eliges la foto con mayor potencial</li>
                              <li>defines intención estratégica del proyecto (estilo)</li>
                              <li>decides el camino de producción:
                                  <ul className="list-['-_'] list-inside ml-4">
                                      <li>mejora foto real (Módulo 1: Transformación con flujo de IA)</li>
                                      <li>generación catálogo (Módulo 2: Imágenes)</li>
                                      <li>video/comercial (Módulo 3: Video)</li>
                                      <li>guion/copy (Módulo 4: Neuro-Scripting)</li>
                                      <li>avatar (Módulo 5: Embajador Digital)</li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold inline-block">Resultado esperado: Ruta clara antes de producir.</p>
              </div>
          </div>
            
          <div className="space-y-8">
            <h3 className="text-3xl serif italic"><span className="text-gold">Paso 5 —</span> Producción IA por módulos</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl font-semibold">(la fábrica trabajando)</p>
            <p className="text-gray-600 leading-relaxed max-w-3xl">Aquí ejecutas sin improvisar.</p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">5.1 Imágenes / Retoque (Módulo 1: Transformación con flujo de IA + Módulo 2: Imágenes)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>Módulo 1: Transformación con flujo de IA si hay foto real base (subes percepción sin inventar)</li>
                        <li>Módulo 2: Imágenes si necesitas catálogo completo o campañas nuevas</li>
                    </ul>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">5.2 Textos y Guiones (Módulo 4: Neuro-Scripting)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>guion estructurado</li>
                        <li>conversación con IA hasta quedar satisfechos</li>
                        <li>optimización por Neuro Scoring</li>
                        <li>guion final en formato profesional</li>
                    </ul>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">5.3 Video (Módulo 3: Video)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>animación directa de imágenes ganadoras</li>
                        <li>storyboard si es comercial</li>
                        <li>montaje final</li>
                    </ul>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">5.4 Avatar (Módulo 5: Embajador Digital)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                        <li>defines 4Ps (alma)</li>
                        <li>generas base visual</li>
                        <li>animación/lip-sync según ruta</li>
                        <li>biblioteca de guiones reutilizables</li>
                    </ul>
                </div>
            </div>
            <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold">Resultado esperado: Producción completa sin salirte del sistema.</p>
        </div>

        <div className="space-y-6">
            <h3 className="text-3xl serif italic text-center"><span className="text-gold">Paso 6 —</span> Control de calidad</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">(lo que te convierte en agencia real)</p>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">Antes de entregar, siempre QA.</p>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="bg-white p-6 border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">QA Imagen</h4>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>producto manda</li>
                        <li>textura real (no plástico)</li>
                        <li>luz coherente</li>
                        <li>fondo no distrae</li>
                        <li>se siente “marca grande”</li>
                    </ul>
                </div>
                <div className="bg-white p-6 border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">QA Guion/Copy</h4>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>se entiende rápido</li>
                        <li>hay tensión o curiosidad</li>
                        <li>CTA claro</li>
                        <li>tono coherente con estilo rector</li>
                    </ul>
                </div>
                <div className="bg-white p-6 border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">QA Video</h4>
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                        <li>movimiento sin deformaciones</li>
                        <li>ritmo correcto (premium o energético)</li>
                        <li>safe area y formato correcto</li>
                        <li>audio/SFX no arruina la escena</li>
                    </ul>
                </div>
            </div>
            <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold">Resultado esperado: Estándar consistente.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-3xl serif italic"><span className="text-gold">Paso 7 —</span> Entrega profesional</h3>
                 <p className="text-gray-600 leading-relaxed max-w-3xl">(carpetas, formatos, orden)</p>
                <p className="text-gray-600 leading-relaxed max-w-3xl">Tu entrega siempre igual, para que parezcas empresa:</p>
                <ul className="list-decimal list-inside text-sm text-gray-600 space-y-2 mt-4 p-6 bg-white border border-gray-100 rounded-md">
                    <li>01 Final Ads: 9:16 / 1:1 / 4:5</li>
                    <li>02 Organic: reels/carruseles + portadas</li>
                    <li>03 Copy: hooks, textos, titulares, CTAs</li>
                    <li>04 Guiones: versión final + storyboard si aplica</li>
                    <li>05 Variaciones: A/B listos para test</li>
                </ul>
                <p className="text-sm text-gray-600">Incluyes una hoja corta: “Orden recomendado de publicación y pruebas”.</p>
            </div>
             <div className="relative aspect-[4/3] shadow-xl">
                 <Image src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_editorial_cinematic_shot_-_mujer_joven_sentada_sost_123f2d6e-ec6c-4189-a485-3229b9803771_1.avif" alt="Entrega Profesional" fill className="object-cover rounded-lg"/>
            </div>
        </div>

        <div className="space-y-6">
            <h3 className="text-3xl serif italic"><span className="text-gold">Paso 8 —</span> Pauta (Meta + Google) como parte del producto</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl">(Tu ventaja con IA es el volumen de variaciones. Tu valor como agencia es decidir qué gana)</p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">Meta Ads (rutina simple)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>pruebas muchas variaciones con bajo presupuesto</li>
                        <li>apagas perdedores</li>
                        <li>duplicas ganadores</li>
                        <li>iteras semanalmente</li>
                    </ul>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-md">
                    <h4 className="font-bold mb-2">Google Ads (mínimo vendible)</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>anuncios de búsqueda (copy + extensiones)</li>
                        <li>remarketing si tienes creativos</li>
                        <li>landing coherente con el contenido</li>
                    </ul>
                </div>
            </div>
            <p className="p-4 bg-white border-l-2 border-gold text-sm font-semibold">Resultado esperado: Campañas con aprendizaje y mejora continua.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] shadow-xl">
                <Image src="http://studioboom.online/wp-content/uploads/2025/09/calde11th_mid-shot_vertical_portrait_of_a_Latino_male_financi_8fcb2163-3f31-437f-863f-d1b36f5b88dd_1.avif" alt="Conseguir Clientes" fill className="object-cover rounded-lg"/>
            </div>
            <div className="space-y-6">
                <h3 className="text-3xl serif italic"><span className="text-gold">Paso 9 —</span> Cómo consigues clientes con este sistema</h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl">Tu entrada más fuerte es el antes/después (Módulo 1: Transformación con flujo de IA). Eso vende sin rogar.</p>
                <p className="text-gray-600 leading-relaxed max-w-3xl font-semibold">Sistema:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 p-6 bg-white border border-gray-100 rounded-md">
                    <li>eliges 1 nicho</li>
                    <li>haces 3 casos demo</li>
                    <li>publicas resultados</li>
                    <li>vendes Paquete 1</li>
                    <li>subes al cliente a Paquete 3–5</li>
                </ul>
                 <Button asChild variant="outline" className="text-gold border-gold/50 hover:bg-gold/10 hover:text-gold w-full">
                    <Link href="/the-silent-studio-guide/sales-scripts">Ver Guiones de Venta</Link>
                </Button>
            </div>
        </div>
            
        </div>
      </section>
      <footer className="py-12 bg-white text-black border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
            <Button asChild variant="ghost" className="hover:bg-gray-100">
                <Link href="/the-silent-studio-guide/module-5">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Módulo Anterior
                </Link>
            </Button>
             <Button asChild variant="ghost" className="hover:bg-gray-100">
                <Link href="/the-silent-studio-guide/module-7">
                    <ArrowRight className="ml-2 h-4 w-4" />
                    Módulo Siguiente
                </Link>
            </Button>
        </div>
      </footer>
    </main>
  );
};

export default Module6Page;
