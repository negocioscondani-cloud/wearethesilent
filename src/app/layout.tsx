
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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      'The Silent Studio | Agencia de Influencers IA, Videos Publicitarios UGC y Anuncios con IA',
    template: '%s | The Silent Studio',
  },
  description:
    'Creamos Influencers con Inteligencia Artificial hiperrealistas y videos publicitarios UGC 9:16 que detienen el scroll y convierten en Meta Ads, TikTok e Instagram. Cotiza tus videos desde ₡30.000 ($60 USD) o aprende nuestro método paso a paso.',
  keywords: [
    'Influencers IA',
    'Crear videos con inteligencia artificial',
    'IA para crear videos publicitarios',
    'Publicidad con inteligencia artificial',
    'Anuncios UGC con IA',
    'Videos para Meta Ads Costa Rica',
    'Crear anuncios publicitarios con IA',
    'Agencia de contenido con IA',
    'The Silent Studio',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-wall-papers.avif',
  },
  openGraph: {
    title:
      'The Silent Studio | Influencers IA y Videos Publicitarios de Alto Impacto',
    description:
      'Agencia de dirección creativa e Inteligencia Artificial: producción de videos comerciales UGC 9:16 listos para Meta Ads, creación de Influencers IA y formación práctica.',
    url: BASE_URL,
    siteName: 'The Silent Studio',
    images: [
      {
        url: 'http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif',
        width: 1200,
        height: 630,
        alt: 'The Silent Studio · Agencia de Influencers IA y Videos Publicitarios',
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
      'The Silent Studio | Influencers IA y Videos Publicitarios con Inteligencia Artificial',
    description:
      'Producimos anuncios UGC con Influencers IA hiperrealistas para Meta Ads, TikTok y Reels desde ₡30.000 ($60 USD) y guías paso a paso.',
    images: [
      'http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif',
    ],
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
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'The Silent Studio',
        url: BASE_URL,
        logo: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-wall-papers.avif',
        description:
          'Agencia de Dirección Creativa e Inteligencia Artificial Generativa especializada en Influencers IA, videos publicitarios UGC 9:16 para Meta Ads y formación estratégica.',
        sameAs: [
          'https://www.instagram.com/vivianne_wolski/',
          'https://www.skool.com/we-are-the-silent-ia-8224/about',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'The Silent Studio',
        inLanguage: 'es',
        publisher: {
          '@id': `${BASE_URL}/#organization`,
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
