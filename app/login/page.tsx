import { Metadata } from 'next';
import LoginForm from '@/app/ui/login/login-form';
import { Suspense } from 'react';

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

