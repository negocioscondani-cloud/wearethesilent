
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Silent Studio Blog | IA Generativa y Dirección Creativa',
    description: 'Noticias, análisis y tutoriales sobre el futuro de la creación de contenido con inteligencia artificial. Aprende sobre los últimos modelos y técnicas.',
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
