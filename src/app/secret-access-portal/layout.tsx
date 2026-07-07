
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portal de Acceso | The Silent Studio',
    description: 'Acceso exclusivo al código de la guía.',
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      }
    },
};

export default function SecretAccessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-black min-h-screen">
            {children}
        </div>
    );
}
