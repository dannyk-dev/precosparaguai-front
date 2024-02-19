type ButtonStyleType = 'primary' | 'cta' | 'secondary';
type TextSizeType = 'text-sm' | 'text-base' | 'text-lg';

export interface IButtonComponentProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonStyleType;
}

const variantClasses: Record<ButtonStyleType, string> = {
    primary:
        'bg-primary-light text-white hover:bg-primary-hoverlight dark:bg-primary-dark dark:text-black dark:hover:bg-primary-hoverdark',

    cta: 'bg-cta-light text-gray-100 hover:bg-cta-hoverlight dark:bg-cta-dark dark:text-black dark:hover:bg-cta-hoverdark',

    secondary:
        'bg-secondary-light text-white hover:bg-secondary-hoverlight dark:bg-secondary-dark dark:text-gray-900 dark:hover:bg-secondary-hoverdark ',
};

export const getThemeVariant = (variant: ButtonStyleType): string => {
    return variantClasses[variant];
};
