export interface InputProps {
    label?: string;
    placeholder: string;
    type: string;
    onChange: (value: any) => void;
    light?: boolean
    required?: boolean
    value?: any
}