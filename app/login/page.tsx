import { Metadata } from 'next';
import { Suspense } from 'react';
import LoginForm from '@/app/ui/login/login-form';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}

