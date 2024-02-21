import { LucideIcon } from 'lucide-react';

export type ButtonStyleType = 'primary' | 'secondary' | 'link';
export type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';

export interface IButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonStyleType;
    Icon?: LucideIcon;
}
