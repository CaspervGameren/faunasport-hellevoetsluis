import type { ButtonProps } from "../../types/ButtonProps";
import { twMerge } from "tailwind-merge";

export const Button = ({ children, className = " " }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "uppercase rounded-sm bg-brand px-4 py-2 shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg hover:ring-2 hover:ring-brand",
                className
            )}
        >
            {children}
        </button>
    )
}