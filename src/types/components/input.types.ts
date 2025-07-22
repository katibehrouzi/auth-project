import { InputHTMLAttributes } from "react";

export interface InputPropsI extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean
}