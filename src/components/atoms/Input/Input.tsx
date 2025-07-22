import { FC } from "react"
import styles from './Input.module.scss';
import { InputPropsI } from "@/types/components/input.types";

const Input: FC<InputPropsI> = ({
    label,
    error,
    required,
    ...props
}) => {
    return (
        <div className={styles.inputWrapper}>
            {label &&
                <label>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            }
            <input
                className={`${error ? styles.error : ''} ${props.disabled ? styles.disabled : ''}`}
                {...props}
            />
            {error && <p className={styles.errorText}>{error}</p>}
        </div>
    )

}

export default Input