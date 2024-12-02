export interface TextAreaProps {
    label?: string;
    placeholder: string;
    onChange: (value: any) => void;
    value: any;
    isDisabled?: boolean;
    required?: boolean;
}