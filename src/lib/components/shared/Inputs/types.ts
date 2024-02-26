import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export type InputStyleType = 'simple' | 'primary';
export type InputStyleSize = 'xsmall' | 'small' | 'large';

export interface IFormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    Icon?: LucideIcon | IconType;
    variant: string;
    variantSize?: InputStyleSize;
}
