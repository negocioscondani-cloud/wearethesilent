
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ganchos Virales | The Silent Studio Guide',
    description: 'Una colección curada de ganchos probados para detener el scroll y capturar la atención.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function ViralHooksLayout({
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
