import { LucideIcon, LucideProps } from 'lucide-react';

export type ButtonStyleType = 'primary' | 'secondary' | 'link';
export type ButtonSize = 'xsmall' | 'small' | 'large';
export type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';

export interface IButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonStyleType;
    variantSize?: ButtonSize;
    Icon?: LucideIcon;
    to?: string;
    IconFill?: LucideProps['fill'];
    preventDefault?: boolean;
}
