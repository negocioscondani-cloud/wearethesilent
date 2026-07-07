
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';
import { FirebaseClientProvider } from '@/context/firebase-client-context';
import Script from 'next/script';
import { ThemeProvider } from '@/context/theme-provider';

const BASE_URL = 'https://wearethesilent.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'The Silent Studio | Creative Direction & AI Content Agency',
    template: '%s | The Silent Studio',
  },
  description:
    'A complete ecosystem of generative intelligences designed to master the audiovisual process. We help you become a Creative Director, building visual empires with AI.',
  icons: {
    icon: 'http://studioboom.online/wp-content/uploads/2025/09/gallery-wall-papers.avif',
  },
  openGraph: {
    title: 'The Silent Studio | Creative Direction & AI Content Agency',
    description: 'Master the audiovisual process with our ecosystem of generative intelligences.',
    url: BASE_URL,
    siteName: 'The Silent Studio',
    images: [
      {
        url: 'http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif', // A representative image
        width: 1200,
        height: 630,
        alt: 'A minimalist and luxurious creative studio space.',
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
    title: 'The Silent Studio | Creative Direction & AI Content Agency',
    description: 'Master the audiovisual process with our ecosystem of generative intelligences.',
    images: ['http://studioboom.online/wp-content/uploads/2025/09/calde11th_Luxury_editorial_photo_minimalist_fashion_studio_de_6e25e721-d392-4f9c-9ce2-bdd0b210b71d_0.avif'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Courier+Prime&display=swap" 
          rel="stylesheet" 
        />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZKL60C1EM"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EZKL60C1EM');
          `}
        </Script>
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
          <FirebaseClientProvider>
            <LanguageProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </LanguageProvider>
          </FirebaseClientProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
