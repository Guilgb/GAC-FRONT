import { ReactNode } from "react";

export interface CustomButtonProps {
    children: ReactNode;
    color: string;
    hasborder: boolean;
    onClick?: () => void;
    hasIcon?: boolean;
    iconName?: string;
    height?: string
    type?: "button" | "submit" | "reset"
}