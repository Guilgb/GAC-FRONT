export interface SelectProps {
    label?: string;
    onChange: (value: any) => void;
    options: string[];
    value: string;
    required?: boolean
}