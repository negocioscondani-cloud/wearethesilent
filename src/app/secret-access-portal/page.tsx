
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function SecretAccessPage() {
    const [copied, setCopied] = useState(false);
    const code = "SILENTIUM";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-in fade-in duration-1000">
            <div className="max-w-md w-full space-y-8 p-12 bg-zinc-900/50 border border-gold/20 rounded-2xl backdrop-blur-xl shadow-2xl">
                <ShieldCheck className="h-16 w-16 text-gold mx-auto mb-6" />
                
                <div className="space-y-2">
                    <h1 className="text-3xl font-serif italic text-white">Acceso Concedido</h1>
                    <p className="text-gray-400 text-sm">Este es tu código maestro para entrar en The Silent Studio Guide.</p>
                </div>

                <div className="relative group">
                    <div className="bg-black border border-gold/30 p-6 rounded-lg text-4xl font-bold tracking-[0.5em] text-gold font-mono select-all">
                        {code}
                    </div>
                    <button 
                        onClick={copyToClipboard}
                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gold transition-colors"
                        title="Copiar código"
                    >
                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                </div>

                <div className="pt-8">
                    <Button asChild className="w-full bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all py-6">
                        <Link href="/the-silent-studio-guide">Ir a la Guía</Link>
                    </Button>
                </div>

                <p className="text-[10px] text-gray-600 uppercase tracking-widest pt-4">
                    Este portal es privado. No compartir este enlace.
                </p>
            </div>
        </main>
    );
}
