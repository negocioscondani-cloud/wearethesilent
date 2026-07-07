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
import { Loader2 } from 'lucide-react';

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle } = useFirebase();
  const router = useRouter();
  const { toast } = useToast();

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      toast({
        title: 'Sign up successful',
        description: 'Welcome!',
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Sign up failed',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-headline">Sign Up</CardTitle>
        <CardDescription>
          Create your account by signing up with Google
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
           <Button onClick={handleGoogleSignUp} className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
