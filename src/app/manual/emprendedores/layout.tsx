import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manual para Emprendedores y Marcas | The Silent Studio',
    description: 'Eleva tu marca y vende más con contenido premium hecho con IA.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function EmprendedoresLayout({
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
