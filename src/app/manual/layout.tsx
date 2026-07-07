
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manual de Operaciones | Agencia IA Premium',
    description: 'Manual de ejecución operativa para transformar marcas en líderes de industria.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function ManualLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="silent-guide-body">
            {children}
        </div>
    );
}
