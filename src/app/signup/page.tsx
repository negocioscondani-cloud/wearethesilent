import { SignupForm } from '@/components/auth/signup-form';

export default function SignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12 animate-in fade-in duration-500">
      <SignupForm />
    </div>
  );
}
