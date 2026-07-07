
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Biblioteca de Peticiones | The Silent Studio Guide',
    description: 'Una colección de prompts listos para usar con Luxe Prompt Studio, categorizados por nicho de mercado.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function PeticionesLayout({
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
