'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

const AuthForm = () => {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validatePhone = (value: string) => /^09\d{9}$/.test(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);

        if (!value) {
            setError('شماره موبایل الزامی است');
        } else if (!validatePhone(value)) {
            setError('شماره موبایل معتبر وارد کنید');
        } else {
            setError('');
        }
    };

    const handleSubmit = async () => {
        if (error || !phone) return;
        try {
            setLoading(true);
            const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data.results[0]));
            router.push('/dashboard');
        } finally {
            setLoading(false);
        }
    };

    return (
    <>
        <Input
            label="شماره موبایل"
            value={phone}
            onChange={handleChange}
            placeholder="مثال: 09121234567"
            error={error}
            required
        />
        <Button
            onClick={handleSubmit}
            disabled={!phone || !!error || loading}
            loading={loading}
        >
            ورود
        </Button>
    </>
    );
}

export default AuthForm