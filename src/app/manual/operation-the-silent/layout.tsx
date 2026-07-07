
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Protocolo de Operaciones | The Silent Studio',
    description: 'Dominio total de contenido IA para marcas premium. Sistema integral de producción de activos digitales.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function OperationLayout({
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
