import React from "react";

interface ButtonProps {
    children: React.ReactNode;

    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    className,
    type,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={`button-shadow  rounded-[6px] ${className} `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
