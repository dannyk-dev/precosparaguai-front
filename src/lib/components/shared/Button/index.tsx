import React from 'react';
import { getThemeVariant  } from './styles';
import { IButtonComponentProps } from './types';
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

export const Button = ({
    children,
    variant,
    size,
    Icon,
    ...props
}: IButtonComponentProps & VariantProps<typeof buttonStyles>) => {
    return (
        <button {...props} className={cn(buttonStyles({ variant }))}>
            <div className="indicator">
                {Icon && <Icon />}
                {children}
            </div>
        </button>
    );
};
