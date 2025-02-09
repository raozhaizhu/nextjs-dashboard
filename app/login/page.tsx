import { Metadata } from 'next';
import LoginForm from '@/app/ui/login/login-form';

export const metadata: Metadata = {
    title: 'Login',
};

// ✅ 修正 searchParams 类型，Next.js 传入的是 Record<string, string | string[] | undefined>
export default function LoginPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
    const callbackUrl = typeof searchParams.callbackUrl === 'string' ? searchParams.callbackUrl : '/dashboard';

    return <LoginForm callbackUrl={callbackUrl} />;
}

