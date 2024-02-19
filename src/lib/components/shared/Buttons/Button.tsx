import React from 'react';
import { getThemeVariant, IButtonComponentProps } from './button.types';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/styles/utils';

const buttonStyles = cva('font-sm w-40 rounded-xl py-2', {
    variants: {
        variant: {
            primary: getThemeVariant('primary'),
            cta: getThemeVariant('cta'),
            secondary: getThemeVariant('secondary'),
        },
        defaultVariants: {
            variant: 'primary',
        },
        size: {
            small: ['text-sm', 'py-1', 'px-2'],
        },
    },
});

const Button = ({
    children,
    variant,
    size,
    ...props
}: IButtonComponentProps & VariantProps<typeof buttonStyles>) => {
    return (
        <button {...props} className={cn(buttonStyles({ variant }))}>
            {children}
        </button>
    );
};

export default Button;
