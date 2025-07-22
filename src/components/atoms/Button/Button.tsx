import { FC } from "react"
import { ButtonPropsI } from "@/types/components/button.types"
import styles from './Button.module.scss';
import clsx from 'clsx';


const Button: FC<ButtonPropsI> = ({
    children,
    variant = 'primary',
    size = 'medium',
    loading = false,
    fullWidth = false,
    disabled,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                fullWidth && styles.fullWidth,
                (disabled || loading) && styles.disabled
            )}
            disabled={disabled || loading}
            {...props}
        >
           {loading ? <span className={styles.spinner} /> : children}
        </button>
    )
}

export default Button