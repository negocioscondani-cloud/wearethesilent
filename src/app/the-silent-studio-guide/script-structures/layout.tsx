
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Estructuras de Guiones Virales | The Silent Studio Guide',
    description: 'Una guía detallada sobre 10 estructuras narrativas probadas para crear contenido de alto impacto que vende.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function ScriptStructuresLayout({
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
