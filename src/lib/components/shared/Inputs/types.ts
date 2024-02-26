import { LucideIcon } from 'lucide-react';

export type InputStyleType = 'simple' | 'primary';
export type InputStyleSize = 'xsmall' | 'small' | 'large';

export interface IFormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: LucideIcon;
    variant: string;
    variantSize?: InputStyleSize;
}
