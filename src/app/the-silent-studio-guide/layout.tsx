'use client';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { AccessGate } from './access-gate';

const modules = [
    { name: 'Módulo 1: Prospección', href: '/the-silent-studio-guide/module-1' },
    { name: 'Módulo 2: Imágenes', href: '/the-silent-studio-guide/module-2' },
    { name: 'Módulo 3: Video', href: '/the-silent-studio-guide/module-3' },
    { name: 'Módulo 4: Neuro-Scripting', href: '/the-silent-studio-guide/module-4' },
    { name: 'Módulo 5: Embajador Digital', href: '/the-silent-studio-guide/module-5' },
    { name: 'Módulo 6: La Agencia IA', href: '/the-silent-studio-guide/module-6' },
    { name: 'Módulo 7: Edición Premium', href: '/the-silent-studio-guide/module-7' },
    { name: 'Módulo 8: Publicación y Métricas', href: '/the-silent-studio-guide/module-8' },
    { name: 'Módulo 9: Plan Sprint 14 Días', href: '/the-silent-studio-guide/module-9' },
];

function GuideNav() {
    return (
        <nav className="fixed w-full z-[600] px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <Link href="/the-silent-studio-guide" className="text-xl font-semibold tracking-tighter serif italic cursor-pointer">The Silent Studio.</Link>
            <div className="flex items-center space-x-6 text-[9px] uppercase tracking-[0.2em] font-light">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                         <Button variant="ghost" className="p-0 text-[9px] uppercase tracking-[0.2em] font-light hover:bg-transparent hover:text-gold focus-visible:ring-0 focus-visible:ring-offset-0">
                            Módulos <ChevronDown className="h-3 w-3 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" alignOffset={-20} className="rounded-[20px] bg-black/40 border-gold/30 text-cream backdrop-blur-md">
                        {modules.map(module => (
                             <DropdownMenuItem key={module.href} asChild className="cursor-pointer focus:bg-gold/10 focus:text-gold">
                                <Link href={module.href}>{module.name}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}


export default function TheSilentStudioGuideLayout({
    children,
}: {
    children: ReactNode;
}) {
    const [isAccessGranted, setAccessGranted] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // This effect runs only on the client
        if (localStorage.getItem('silent_studio_access_granted') === 'true') {
            setAccessGranted(true);
            document.body.classList.add('silent-guide-body');
        }
        setIsChecking(false);

        return () => {
            document.body.classList.remove('silent-guide-body');
        };
    }, []);

    const handleAccessGranted = () => {
        setAccessGranted(true);
        document.body.classList.add('silent-guide-body');
    };
    
    if (isChecking) {
        return null; // Or a loading spinner
    }

    return (
        <>
            {!isAccessGranted && <AccessGate onAccessGranted={handleAccessGranted} />}
            {isAccessGranted && (
                <>
                    <GuideNav />
                    <div className="antialiased">
                        {children}
                    </div>
                </>
            )}
        </>
    );
}
