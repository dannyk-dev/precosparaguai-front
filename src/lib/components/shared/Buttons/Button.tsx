import React from 'react';
import { getThemeVariant, IButtonComponentProps } from './button.types';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/styles/utils';

const buttonStyles = cva('btn-base rounded-xl py-2 text-base-content', {
    variants: {
        variant: {
            primary: getThemeVariant('primary'),
            link: getThemeVariant('link'),
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
    Icon,
    ...props
}: IButtonComponentProps & VariantProps<typeof buttonStyles>) => {
    return (
        <button {...props} className={cn(buttonStyles({ variant }))}>
            {Icon ? (
                <div className="indicator">
                    <Icon />
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};

export default Button;
