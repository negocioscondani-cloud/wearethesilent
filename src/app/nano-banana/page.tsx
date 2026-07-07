
'use client';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { CameraOff, CheckCircle, Clock, Server, Users, Infinity, X, Truck, Zap, Banknote, Cloud, Hourglass, Eye, Gem, Sparkles, Wand2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


export default function NanoBananaPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const forWho = [
    'Para quien quiere un negocio digital "Llave en Mano" sin inventar la rueda.',
    'Para quien entiende que la IA es la mayor transferencia de riqueza de la historia.',
    'Para quien quiere cobrar por RESULTADOS, no por horas de esfuerzo.',
  ];

  const notForWho = [
    'Para puristas de la fotografía que creen que "la IA es trampa".',
    'Para buscadores de dinero fácil que no quieren apretar ni un botón.',
    'Para quien tiene miedo de cobrar lo que vale su trabajo.',
  ];
  
  const includedItems = [
    { text: 'Módulo "Visual Heist" Avanzado: Domina Nano Banana y Freepik como un profesional.' },
    { text: 'El Sistema de Ads de $5 Dólares: Cómo llenar tu WhatsApp de clientes invirtiendo lo que cuesta un café al día (Copia mis campañas de Facebook e Instagram exactas).' },
    { text: 'Guiones de Cierre "Sin Rechazo": Qué decir palabra por palabra para que te paguen $97 por el primer pack y luego $150/mes recurrentes.' },
    { text: 'Kits de Nicho: Prompts listos para Dentistas, Real Estate y E-commerce.' },
  ];

  const galleryImages = [
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-ethereal-hyperrealism-hasselbla__45392.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-img1-surgical-hyperfidelity-pha__45391.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-ethereal-hyperrealism-hasselbla__45393.avif',
    'http://studioboom.online/wp-content/uploads/2026/01/freepik__-meta-imagequality-masterpiece-fidelity-phase-one-__45394.avif'
  ];

  return (
    <div className="bg-background text-foreground font-body animate-in fade-in duration-500">
      {/* 1. PORTADA */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-background relative overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-7xl text-foreground drop-shadow-md uppercase">
            EL PROTOCOLO "VISUAL HEIST"
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-semibold tracking-wide">
            Roba la atención (y los clientes) de tu ciudad usando Inteligencia Artificial, aunque no sepas tomar ni una selfie.
          </p>
          <p className="mt-2 text-md md:text-lg text-muted-foreground">
            La guía prohibida para facturar $500 - $1,000 extra al mes sin salir de tu habitación.
          </p>
          <figure className="relative w-full max-w-2xl mx-auto my-10">
              <Image
                src="http://studioboom.online/wp-content/uploads/2026/01/Antes-despues.avif"
                alt="Comparación de imagen de producto antes y después"
                width={1280}
                height={720}
                className="object-cover rounded-lg border-2 border-primary/20"
                data-ai-hint="product shot comparison"
              />
          </figure>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {galleryImages.map((src, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button onClick={() => setSelectedImage(src)}>
                    <figure className="relative aspect-square w-full overflow-hidden rounded-lg border border-primary/10 cursor-pointer transition-transform hover:scale-105">
                      <Image
                        src={src}
                        alt={`Ejemplo de imagen generada ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint="luxury product shot"
                      />
                    </figure>
                  </button>
                </DialogTrigger>
              </Dialog>
            ))}
          </div>

          <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
            <DialogContent className="p-0 border-0 max-w-4xl bg-transparent">
               <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>Imagen Ampliada</DialogTitle>
                  <DialogDescription>Vista ampliada de la imagen de la galería.</DialogDescription>
                </VisuallyHidden>
              </DialogHeader>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Imagen ampliada"
                  width={1200}
                  height={1200}
                  className="rounded-lg object-contain w-auto h-auto max-w-[90vw] max-h-[90vh]"
                />
              )}
               <DialogClose className="absolute top-2 right-2 rounded-full bg-background/50 p-1 text-foreground transition-opacity hover:opacity-100">
                  <X className="h-6 w-6" />
                </DialogClose>
            </DialogContent>
          </Dialog>

        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section className="py-20 md:py-32 px-8 bg-card">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-headline text-3xl md:text-5xl text-primary">
            Escúchame bien: La fotografía tradicional ha muerto (para los negocios locales).
          </h2>
          <div className="text-lg text-muted-foreground space-y-6 border-t border-border pt-8">
            <p>¿Sabes por qué la mayoría de los negocios en tu ciudad están perdiendo dinero hoy mismo? No es porque su producto sea malo. <span className="text-foreground font-semibold">Es porque su imagen apesta.</span></p>
            <p>Entra al Instagram de la clínica dental de tu barrio o a la inmobiliaria local. ¿Qué ves? Fotos oscuras, encuadres chuecos, oficinas desordenadas. Transmiten "barato" cuando quieren cobrar "caro".</p>
            <p>Hasta ayer, solucionar esto costaba una fortuna: contratar un fotógrafo, coordinar horarios, enviar productos y esperar semanas. Es lento, caro y doloroso. Pero tú tienes algo que ellos no. Tienes acceso a una "falla en la Matrix". <span className="text-primary font-bold">Tienes el Protocolo Visual Heist.</span></p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 pt-12 text-left">
            <div className="bg-background p-6 rounded-lg border border-green-500/30">
              <h3 className="font-headline text-xl text-green-500 mb-4">PARA QUIÉN ES ESTO:</h3>
              <ul className="space-y-2 text-muted-foreground">
                {forWho.map((item, i) => <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0"/><span>{item}</span></li>)}
              </ul>
            </div>
             <div className="bg-background p-6 rounded-lg border border-red-500/30">
              <h3 className="font-headline text-xl text-red-500 mb-4">PARA QUIÉN NO ES ESTO:</h3>
              <ul className="space-y-2 text-muted-foreground">
                {notForWho.map((item, i) => <li key={i} className="flex items-start gap-2"><X className="h-5 w-5 text-red-500 mt-1 shrink-0"/><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL CAMBIO DE PARADIGMA */}
      <section className="py-20 md:py-32 px-8 bg-background">
          <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-headline text-4xl md:text-5xl mb-4">Bienvenido a la Era de la "Logística Cero"</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">La gran mentira que te han contado sobre los negocios online es que necesitas "crear" algo desde cero. Tu nuevo rol no es "crear". Tu rol es <span className="text-primary font-bold">TRANSFORMAR</span>.</p>
              <div className="mt-16 grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="border border-destructive/20 rounded-lg p-8">
                      <h3 className="font-headline text-2xl text-destructive mb-6">Viejo Modelo</h3>
                      <div className="space-y-6 text-lg">
                          <p className="flex items-center gap-4"><Truck className="h-8 w-8 text-destructive shrink-0"/> <span>Necesitas encontrar productos y enviarlos (Dropshipping).</span></p>
                          <p className="flex items-center gap-4"><CameraOff className="h-8 w-8 text-destructive shrink-0"/> <span>Necesitas exponer tu cara y bailar (Influencer).</span></p>
                          <p className="flex items-center gap-4"><Hourglass className="h-8 w-8 text-destructive shrink-0"/> <span>Necesitas arriesgar tu capital (Trading).</span></p>
                      </div>
                  </div>
                  <div className="border border-green-500/20 rounded-lg p-8 bg-green-500/10">
                      <h3 className="font-headline text-2xl text-green-500 mb-6">Modelo Visual Heist</h3>
                       <div className="space-y-6 text-lg">
                          <p className="flex items-center gap-4"><Cloud className="h-8 w-8 text-green-500 shrink-0"/> <span>No tocas el producto físico (cero envíos).</span></p>
                          <p className="flex items-center gap-4"><Zap className="h-8 w-8 text-green-500 shrink-0"/> <span>No necesitas cámaras de $2,000 (usas software).</span></p>
                          <p className="flex items-center gap-4"><Banknote className="h-8 w-8 text-green-500 shrink-0"/> <span>Vendes lujo y estatus, recibes pagos rápidos.</span></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. EL CONTENIDO CARNOSO */}
      <section className="py-20 md:py-32 px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl mb-12">El Protocolo "Visual Heist" en 3 Pasos</h2>
          <div className="space-y-16">
            <div className="text-left max-w-2xl mx-auto p-6 border-l-4 border-primary flex items-start gap-6">
              <Eye className="h-10 w-10 text-primary shrink-0 mt-1"/>
              <div>
                <h3 className="font-headline text-3xl mb-2"><span className="text-primary">PASO 1:</span> Identificar la Presa</h3>
                <p className="text-muted-foreground leading-relaxed">Te enseñaré a encontrar "diamantes en bruto": negocios de alto valor con una imagen digital descuidada que están perdiendo miles de dólares, y que están desesperados por una solución visual premium como la tuya.</p>
              </div>
            </div>
            <div className="text-left max-w-2xl mx-auto p-6 border-l-4 border-primary flex items-start gap-6">
               <Gem className="h-10 w-10 text-primary shrink-0 mt-1"/>
              <div>
                <h3 className="font-headline text-3xl mb-2"><span className="text-primary">PASO 2:</span> El "Atraco" Ético</h3>
                <p className="text-muted-foreground leading-relaxed">Aprenderás a extraer el "activo digital" de tu objetivo de manera estratégica. No pedimos permiso, demostramos un poder tan abrumador que se ven obligados a preguntar "¿Cómo lo hiciste?".</p>
              </div>
            </div>
            <div className="text-left max-w-2xl mx-auto p-6 border-l-4 border-primary flex items-start gap-6">
              <Wand2 className="h-10 w-10 text-primary shrink-0 mt-1"/>
              <div>
                <h3 className="font-headline text-3xl mb-2"><span className="text-primary">PASO 3:</span> La Alquimia Visual</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Aquí es donde aplicamos la "Fórmula Maestra". Te revelaré los prompts exactos para teletransportar un producto mediocre a un entorno de lujo cinematográfico. Este es el ingrediente secreto que te permite crear imágenes de $500 en menos de 30 segundos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LA TRANSICIÓN */}
      <section className="py-20 md:py-32 px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl text-foreground">Tienes la "Bomba Nuclear"... ¿Sabes cómo lanzarla?</h2>
          <p className="text-xl text-muted-foreground">Felicidades. Acabas de ver el poder de la 'Alquimia Visual'. Pero ver el mapa del tesoro no es lo mismo que tener la llave para abrirlo.</p>
          <p className="text-lg text-primary font-semibold border-t border-b border-primary/20 py-4">Muchos aprenden a usar la IA, pero se quedan pobres porque no saben cómo acercarse al cliente, no saben poner precios y no tienen un sistema de ventas.</p>
          <p className="text-muted-foreground text-lg">Tú no quieres ser un "artista de IA" hambriento. Tú quieres ser el dueño de una Agencia de Contenido Premium.</p>
        </div>
      </section>

      {/* 6. LA OFERTA */}
      <section className="py-20 md:py-32 px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight">Tu Negocio "Llave en Mano" está listo para despegar</h2>
          <p className="mt-4 text-lg text-muted-foreground">Te presento: <span className="text-foreground font-bold">LA MENTORÍA DE AGENCIA DE CONTENIDO PREMIUM IA.</span> El sistema probado para escalar de $0 a $3,000/mes vendiendo "Atracos Visuales".</p>
          <div className="my-12 text-left max-w-md mx-auto space-y-4">
            <h3 className="font-headline text-2xl text-center text-foreground">Lo que obtienes al entrar hoy:</h3>
            <ul className="text-muted-foreground space-y-3 text-lg">
              {includedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-background rounded-md"><CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1"/><span>{item.text}</span></li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-muted-foreground">El precio normal es de $997. Pero tú ya has demostrado interés. Por tiempo limitado, estamos abriendo plazas para la <span className="text-primary font-semibold">Generación Beta</span> con un descuento masivo.</p>
          <Button asChild size="lg" className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg">
            <Link href={t('contact.whatsappLink') as string} target="_blank">
              QUIERO MI AGENCIA DE IA AHORA - VER CLASE DE ACCESO
            </Link>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground/50">Sé el primero, o sé el que llega tarde.</p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1180px] px-5 text-center md:px-8">
          <h3 className="font-headline text-3xl md:text-4xl">
            {t('suiteOffer.title')}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t('suiteOffer.subtitle')}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/the-silent-studio">{t('header.access')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
