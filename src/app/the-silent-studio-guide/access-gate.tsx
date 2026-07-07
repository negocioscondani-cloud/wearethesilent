'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Loader2 } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { getFirebase } from '@/lib/firebase-client';

const ACCESS_KEY = 'silent_studio_access_granted';
const ELEGANT_CODE = 'SILENTIUM';

export function AccessGate({
  onAccessGranted,
}: {
  onAccessGranted: () => void;
}) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const { firestore } = getFirebase();
    if (!firestore) {
        // Fallback for developers if firestore isn't configured, but still show loading
        setTimeout(() => {
            if (code.toUpperCase() === ELEGANT_CODE) {
                localStorage.setItem(ACCESS_KEY, 'true');
                onAccessGranted();
            } else {
                setError('Invalid access code.');
                setIsLoading(false);
                setCode('');
            }
        }, 1000);
      return;
    }

    try {
        const docRef = doc(firestore, 'access_codes', code.toUpperCase());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            localStorage.setItem(ACCESS_KEY, 'true');
            onAccessGranted();
        } else {
            // Fallback for when Firestore is not populated but the code is correct
            if (code.toUpperCase() === ELEGANT_CODE) {
                 localStorage.setItem(ACCESS_KEY, 'true');
                 onAccessGranted();
            } else {
                setError('Invalid access code.');
            }
        }
    } catch (err) {
        console.error("Firestore error:", err);
        // Fallback for developers or local environments if firestore fails
        if (code.toUpperCase() === ELEGANT_CODE) {
            localStorage.setItem(ACCESS_KEY, 'true');
            onAccessGranted();
            return;
        }
        setError('An error occurred during verification. Please try again.');
    } finally {
        // Ensure loading state is turned off unless access was granted
        if (localStorage.getItem(ACCESS_KEY) !== 'true') {
             setTimeout(() => {
                setIsLoading(false);
                setCode('');
            }, 1000);
        }
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-sm text-white animate-in fade-in-50">
      <div className="w-full max-w-sm text-center p-8">
        <Lock className="mx-auto h-12 w-12 text-gold mb-6" />
        <h1 className="text-3xl font-serif italic text-gold mb-2">Access Required</h1>
        <p className="text-gray-400 mb-8">
          Enter the access code to enter The Silent Studio.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="ACCESS CODE"
            className="bg-white/5 border-gold/20 text-white text-center tracking-widest h-12 text-lg uppercase placeholder:text-gray-500 focus-visible:ring-gold"
            disabled={isLoading}
            autoFocus
          />
          <Button
            type="submit"
            className="btn-premium bg-gold text-black h-12 text-sm tracking-widest font-bold hover:bg-cream"
            disabled={isLoading || !code}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : 'ENTER'}
          </Button>
        </form>
        {error && <p className="mt-4 text-red-500 text-sm animate-in fade-in-0">{error}</p>}
      </div>
    </div>
  );
}
