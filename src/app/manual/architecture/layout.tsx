
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Protocolo de Arquitectura Corporativa | The Silent Studio',
    description: 'La sistematización definitiva para fundar una organización de contenidos High-Ticket.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function ArchitectureLayout({
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

    