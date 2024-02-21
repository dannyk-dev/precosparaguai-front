import { ButtonStyleType } from './types';

const variantClasses: Record<ButtonStyleType, string> = {
    primary:
        'bg-primary-light text-white hover:bg-primary-hoverlight dark:bg-primary-dark dark:text-black dark:hover:bg-primary-hoverdark',

    link: 'btn btn-link text-base-content',

    secondary:
        'bg-secondary-light text-white hover:bg-secondary-hoverlight dark:bg-secondary-dark dark:text-gray-900 dark:hover:bg-secondary-hoverdark ',
};

// TODO turn this into a generic type function and reuse with the banner components
export const getThemeVariant = (variant: ButtonStyleType): string => {
    return variantClasses[variant];
};
