import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceso Privado · Vivienne Wolski',
  description: 'Panel administrativo privado.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': 0,
    },
  },
};

export default function AudiosAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
