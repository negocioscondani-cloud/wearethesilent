import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guiones de Venta | The Silent Studio Guide',
    description: 'Guiones de venta probados para cerrar clientes y manejar objeciones.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function SalesScriptsLayout({
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
