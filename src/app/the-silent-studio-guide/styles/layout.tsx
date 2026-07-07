
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Biblioteca de Estilos | The Silent Studio Guide',
    description: 'Una guía detallada sobre estilos cinematográficos y publicitarios para la creación de contenido.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function StylesLayout({
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
