
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manual para Fundadores de Agencia | The Silent Studio',
    description: 'Construye una agencia IA premium con resultados rápidos.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function FundadoresLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // This layout is intentionally minimal to support the blank page.
    return <>{children}</>;
}
