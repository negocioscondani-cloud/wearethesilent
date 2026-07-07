import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Módulo 8: Publicación y Métricas | The Silent Studio Guide',
    description: 'Aprende a publicar con intención, medir lo que importa y mejorar con un sistema.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function Module8Layout({
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
