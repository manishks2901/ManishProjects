import { forwardRef } from "react";
import { cn } from "./libs/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement,ButtonProps> (({
    className,
    children,
    disabled,
    type="button",
    ...props
},ref)=>{
    return (
        <button 
            className={
                cn(
                    `
                    w-auto
                    rounded-full
                    bg-black
                    border-transparent
                    px-5
                    py-2
                    disabled:curson-not-allowed
                    text-white
                    font-semibold
                    hover:opacity-75
                    transition
                    `,
                    className
                )
            }
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})


Button.displayName = "Button";
export default Button;