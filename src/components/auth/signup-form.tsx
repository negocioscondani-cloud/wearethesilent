'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFirebase } from '@/context/firebase-client-context';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';
import { recordConsent } from '@/lib/consent-tracker';

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const { signInWithGoogle } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();

  const handleGoogleSignUp = async () => {
    if (!termsAccepted || !privacyAccepted) {
      setErrorMessage('Debes aceptar por separado los Términos y la Política de Privacidad para crear una cuenta.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);
    try {
      await signInWithGoogle();
      
      // Record consent in audit log
      recordConsent({
        userIdentifier: 'Google Auth Signup',
        formOrigin: '/signup (Registro con Google)',
        termsAccepted: true,
        privacyAccepted: true,
      });

      toast({
        title: 'Registro exitoso',
        description: '¡Bienvenido a The Silent Studio!',
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Error de registro',
        description: error.message || 'Ocurrió un error inesperado al iniciar sesión.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="mx-auto w-full max-w-sm border-zinc-800 bg-zinc-950 text-zinc-100">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-white">Crear Cuenta</CardTitle>
        <CardDescription className="text-zinc-400">
          Crea tu acceso mediante tu cuenta de Google
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          
          {/* TWO SEPARATE CHECKBOXES (AEPD / RGPD MANDATE) */}
          <div className="space-y-2.5 text-xs text-zinc-300">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => {
                  setTermsAccepted(e.target.checked);
                  if (e.target.checked && privacyAccepted) setErrorMessage('');
                }}
                className="mt-0.5 w-4 h-4 rounded border-zinc-700 accent-[#C5A059] cursor-pointer"
              />
              <span className="leading-snug">
                Acepto los{' '}
                <Link 
                  href="/terms-of-service" 
                  target="_blank" 
                  className="text-[#C5A059] underline hover:text-amber-300"
                >
                  Términos y Condiciones
                </Link>{' '}
                (v2.1-2026-10) *
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (e.target.checked && termsAccepted) setErrorMessage('');
                }}
                className="mt-0.5 w-4 h-4 rounded border-zinc-700 accent-[#C5A059] cursor-pointer"
              />
              <span className="leading-snug">
                Acepto la{' '}
                <Link 
                  href="/privacy-policy" 
                  target="_blank" 
                  className="text-[#C5A059] underline hover:text-amber-300"
                >
                  Política de Privacidad
                </Link>{' '}
                (RGPD/LOPDGDD) *
              </span>
            </label>
          </div>

          {errorMessage && (
            <div className="p-2.5 bg-red-950/60 border border-red-500/40 rounded text-[11px] text-red-200 flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button 
            onClick={handleGoogleSignUp} 
            className="w-full bg-[#C5A059] hover:bg-[#B38F48] text-black font-semibold" 
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continuar con Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-zinc-400">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="underline text-[#C5A059]">
            Inicia sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
