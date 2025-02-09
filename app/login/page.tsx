import { Metadata } from 'next';
import LoginForm from '@/app/ui/login/login-form';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return <LoginForm />;
}

