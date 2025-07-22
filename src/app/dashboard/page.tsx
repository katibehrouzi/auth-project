'use client';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.scss';
import { useEffect } from 'react';

const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) router.push('/auth');
    }, [router]);

    return (
        <h1 className={styles.container}>
            Welcome to the dashboard 🎉
        </h1>
    );
}

export default DashboardPage