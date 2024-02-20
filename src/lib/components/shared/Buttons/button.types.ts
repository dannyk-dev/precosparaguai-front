import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonStyleType = 'primary' | 'secondary' | 'link';
type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';

export interface IButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonStyleType;
    children?: ReactNode;
    Icon?: LucideIcon;
}

const variantClasses: Record<ButtonStyleType, string> = {
    primary:
        'bg-primary-light text-white hover:bg-primary-hoverlight dark:bg-primary-dark dark:text-black dark:hover:bg-primary-hoverdark',

    link: 'btn btn-link text-base-content',

    secondary:
        'bg-secondary-light text-white hover:bg-secondary-hoverlight dark:bg-secondary-dark dark:text-gray-900 dark:hover:bg-secondary-hoverdark ',
};

export const getThemeVariant = (variant: ButtonStyleType): string => {
    return variantClasses[variant];
};
