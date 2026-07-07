
'use client';

import type { ComponentType } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/context/firebase-client-context';
import { Loader2 } from 'lucide-react';

export default function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const WithAuth = (props: P) => {
    const { user } = useFirebase();
    const router = useRouter();

    useEffect(() => {
      // If user is not logged in, redirect to login page.
      // We check for null specifically, because `user` is initially undefined during loading.
      if (user === null) {
        router.push('/login');
      }
    }, [user, router]);

    // If user is still undefined, it means we are still checking auth state.
    if (user === undefined) {
      return (
        <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin" />
        </div>
      );
    }
    
    // If user is authenticated, render the wrapped component.
    return user ? <WrappedComponent {...props} /> : null;
  };

  WithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuth;
}

