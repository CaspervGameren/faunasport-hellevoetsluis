import type { ButtonProps } from "../../types/ButtonProps";
import { twMerge } from "tailwind-merge";

export const Button = ({ children, className = " " }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "uppercase rounded-sm bg-accent px-4 py-2 shadow-md pointer transition-all duration-300 hover:shadow-lg hover:bg-brand",
                className
            )}
        >
            {children}
        </button>
    )
}