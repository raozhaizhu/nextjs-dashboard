import { Metadata } from 'next';
import { Suspense } from 'react';
import LoginForm from '@/app/ui/login/login-form';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage({ searchParams }: { searchParams: { callbackUrl?: string } }) {
    const callbackUrl = searchParams.callbackUrl || '/dashboard';

    return <LoginForm callbackUrl={callbackUrl} />;
}

