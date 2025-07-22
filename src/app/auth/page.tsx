'use client';
import { useEffect } from 'react';
import styles from './auth.module.scss';
import AuthForm from "./AuthForm";


const AuthPage = () => {
    useEffect(() => {
        localStorage.removeItem('user');
    }, []);
    return (
        <div className={styles.container}>
            <h1>ورود</h1>
            <AuthForm />
        </div>
    )

}

export default AuthPage