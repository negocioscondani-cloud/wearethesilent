import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tabla de Diagnóstico | Módulo 7 | The Silent Studio Guide',
    description: 'Diagnostica y corrige errores comunes en la edición de video.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function TablaDiagnosticoLayout({
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
