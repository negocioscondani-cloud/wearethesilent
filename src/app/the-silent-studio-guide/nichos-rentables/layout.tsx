import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '20 Nichos Rentables | The Silent Studio Guide',
    description: 'Descubre 20 nichos de alto valor para tu agencia de contenido IA.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function NichosRentablesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
