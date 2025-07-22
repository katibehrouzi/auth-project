import styles from './auth.module.scss';
import AuthForm from "./AuthForm";


const AuthPage = () => {

    return (
        <div className={styles.container}>
            <h1>ورود</h1>
            <AuthForm />
        </div>
    )

}

export default AuthPage