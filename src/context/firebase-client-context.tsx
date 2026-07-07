
'use client';

import type { User } from 'firebase/auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  type Auth,
  type AuthError,
} from 'firebase/auth';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { getFirebase } from '@/lib/firebase-client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null | undefined; // Allow undefined for initial loading state
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export const FirebaseClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [auth, setAuth] = useState<Auth | undefined>();
  const { toast } = useToast();

  useEffect(() => {
    // getFirebase will only initialize on the client, inside this effect.
    const { auth: firebaseAuth } = getFirebase();
    setAuth(firebaseAuth);
  }, []);

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
      return () => unsubscribe();
    } else {
      // If auth is not initialized (e.g. missing config), set user to null.
      // We are in an effect, so this will only happen client-side.
      setUser(null);
    }
  }, [auth]);

  const signInWithGoogle = async () => {
    if (!auth) {
      console.error('Firebase Auth is not initialized.');
      toast({
        title: 'Configuration Error',
        description: 'Firebase authentication is not set up correctly.',
        variant: 'destructive',
      });
      return;
    }
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      const authError = error as AuthError;
      
      toast({
        title: 'Sign-in failed',
        description: authError.message,
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signOut = async () => {
    if (!auth) {
      console.error('Firebase Auth is not initialized.');
      return;
    }
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Error during sign-out:', error);
      const authError = error as AuthError;
      toast({
        title: 'Sign-out failed',
        description: authError.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useFirebase = () => useContext(AuthContext);
