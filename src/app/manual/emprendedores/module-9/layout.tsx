import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Módulo 9: Plan Sprint 14 Días | The Silent Studio Guide',
    description: 'Un plan de acción de 14 días para aplicar la metodología de The Silent Studio y obtener resultados.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function Module9Layout({
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
