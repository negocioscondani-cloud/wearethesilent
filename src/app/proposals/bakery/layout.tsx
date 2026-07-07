import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Propuesta de Diseño | Pastelería Inglesa',
    description: 'Una propuesta de diseño web para una pastelería de lujo, combinando tradición y elegancia moderna.',
    robots: {
      index: false,
      follow: false,
    },
};

export default function BakeryProposalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{fontFamily: "'Urbanist', sans-serif"}}>
            {children}
        </div>
    );
}
