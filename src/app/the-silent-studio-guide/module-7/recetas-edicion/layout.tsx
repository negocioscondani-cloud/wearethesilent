import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recetas de Edición | Módulo 7 | The Silent Studio Guide',
    description: 'Aplica recetas de edición probadas para consistencia y calidad.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function RecetasEdicionLayout({
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
