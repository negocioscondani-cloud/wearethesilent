
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CinematicEffects from '@/components/layout/cinematic-effects';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';
import { FirebaseClientProvider } from '@/context/firebase-client-context';
import Script from 'next/script';
import { ThemeProvider } from '@/context/theme-provider';
import { CookieConsentBanner } from '@/components/legal/cookie-consent-banner';

const BASE_URL = 'https://wearethesilent.com';
const VIVIENNE_HERO_IMAGE = `${BASE_URL}/images/vivianne-wolski-hero.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      'Vivienne Wolski | Universo Privado · El Armario, Club Vivi & Honestidad Financiera',
    template: '%s | Vivienne Wolski',
  },
  description:
    'El universo privado y salón editorial de Vivienne Wolski. El Armario (piezas de inversión y lujo silencioso), Club Vivi (33 audios de criterio, carácter y estilo) y El Domingo de los Números (ritual de honestidad financiera).',
  keywords: [
    'Vivienne Wolski',
    'Vivianne Wolski',
    'El Armario de Vivienne',
    'Club Vivi',
    'Wolski Club',
    'El Domingo de los Números',
    'Honestidad Financiera',
    'Quiet Luxury',
    'Lujo Silencioso',
    'Moda Clásica',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/images/vivianne-wolski-hero.jpg',
  },
  openGraph: {
    title:
      'Vivienne Wolski | Universo Privado · Silencio, Orden y Criterio',
    description:
      'Lo que Vivienne usa. Lo que Vivienne cuenta. El Armario, Club Vivi y Honestidad Financiera.',
    url: BASE_URL,
    siteName: 'Vivienne Wolski',
    images: [
      {
        url: VIVIENNE_HERO_IMAGE,
        width: 1200,
        height: 1500,
        alt: 'Vivienne Wolski · Universo Privado',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vivienne Wolski | Universo Privado · El Armario, Club Vivi & Honestidad Financiera',
    description:
      'Lo que Vivienne usa. Lo que Vivienne cuenta. Piezas de inversión curadas, fonoteca de Club Vivi y ritual de Honestidad Financiera.',
    images: [VIVIENNE_HERO_IMAGE],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#person`,
        name: 'Vivienne Wolski',
        url: BASE_URL,
        image: VIVIENNE_HERO_IMAGE,
        description:
          'Aristócrata hecha a sí misma de 82 años y referente editorial de estilo, carácter y finanzas personales.',
        sameAs: [
          'https://www.instagram.com/vivianne_wolski/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Vivienne Wolski',
        inLanguage: 'es',
        publisher: {
          '@id': `${BASE_URL}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://red-ibex-277532.hostingersite.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400&family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@400&family=Mrs+Saint+Delafield&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;600&family=Space+Mono:wght@400;700&family=Urbanist:wght@400;700;900&family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZKL60C1EM"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'G-EZKL60C1EM');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2590059598117722');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2590059598117722&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CinematicEffects />
          <FirebaseClientProvider>
            <LanguageProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </LanguageProvider>
          </FirebaseClientProvider>
          <Toaster />
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
