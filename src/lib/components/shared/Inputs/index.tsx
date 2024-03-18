'use client';

import React from 'react';
import { IFormInputProps, InputStyleType } from './types';
import { VariantProps, cva } from 'class-variance-authority';
import { getThemeVariant } from '@/lib/styles/utils';
import { variantClasses } from './styles';
import { cn } from '@/lib/styles/utils';

const InputStyles = cva('flex items-center gap-2', {
    variants: {
        variant: {
            simple: getThemeVariant<InputStyleType>(variantClasses, 'simple'),
            primary: getThemeVariant<InputStyleType>(variantClasses, 'primary'),
        },
        defaultVariants: {
            variant: 'primary',
        },
        variantSize: {
            xsmall: 'input-xs text-xs',
            small: 'input-sm py-5 text-sm',
            large: 'input-lg text-lg',
        },
    },
});

export const Input = ({
    Icon,
    variant,
    variantSize,
    className,
    ...props
}: IFormInputProps & VariantProps<typeof InputStyles>) => {
    return (
        <div className="form-control">
            {Icon ? (
                <label
                    className={cn(
                        className,
                        InputStyles({ variant, variantSize })
                    )}
                >
                    <input
                        {...props}
                        className="input grow bg-transparent focus:border-none"
                    />
                    {<Icon />}
                </label>
            ) : (
                <input
                    {...props}
                    className={cn(
                        'grow ',
                        className,
                        InputStyles({ variant, variantSize })
                    )}
                />
            )}
        </div>
    );
};
