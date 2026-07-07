import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eleva Tu Marca con Contenido IA | The Silent Studio',
    description: 'Aprende a transformar la imagen de tu marca con IA. Mejora tus fotos, textos y videos para proyectar un valor premium.',
};

export default function BrandAcceleratorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}
