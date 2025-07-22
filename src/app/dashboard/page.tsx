'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';
import { useAuth } from '@/context/AuthContext';

const DashboardPage = () => {
    const { user } = useAuth();
    const router = useRouter();

    // useEffect(() => {
    //     const user = localStorage.getItem('user');
    //     if (!user) router.push('/auth');
    // }, [router]);

    useEffect(() => {
        if (!user) {
            router.push('/auth');
        }
    }, [user, router]);

    return (
        <h1 className={styles.container}>
            Welcome to the dashboard 🎉
        </h1>
    );
}

export default DashboardPage