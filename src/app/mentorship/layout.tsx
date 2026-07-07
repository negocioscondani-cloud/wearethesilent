import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lanza tu Agencia de Contenido IA - The Silent Studio',
    description: 'Aprende a construir una Agencia de Contenidos con IA rentable en 30 días. Sin experiencia previa.',
};

export default function MentorshipLayout({
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
