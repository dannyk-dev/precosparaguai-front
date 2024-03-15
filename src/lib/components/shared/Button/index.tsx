import React from 'react';
import { getThemeVariant } from '@/lib/styles/utils';
import { ButtonStyleType, IButtonComponentProps } from './types';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/styles/utils';
import Link from 'next/link';
import { variantClasses } from './styles';

const buttonStyles = cva('rounded-xl py-2 text-base-content', {
    variants: {
        variant: {
            primary: getThemeVariant<ButtonStyleType>(
                variantClasses,
                'primary'
            ),
            link: getThemeVariant<ButtonStyleType>(variantClasses, 'link'),
            secondary: getThemeVariant<ButtonStyleType>(
                variantClasses,
                'secondary'
            ),
        },
        defaultVariants: {
            variant: 'primary',
        },
        variantSize: {
            small: 'btn-sm',
            xsmall: 'btn-xs',
            large: 'btn-lg',
        },
    },
});

export const Button = ({
    children,
    variant,
    variantSize,
    Icon,
    to,
    className,
    IconFill,
    preventDefault,
    onClick: userOnClick,
    ...props
}: IButtonComponentProps & VariantProps<typeof buttonStyles>) => {
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        preventDefault && e.preventDefault();
        userOnClick && userOnClick(e);
    };

    return (
        <button
            {...props}
            className={cn(buttonStyles({ variant, variantSize }), className)}
            onClick={handleClick}
        >
            <div className="indicator flex items-center">
                {variant === 'link' || to !== undefined ? (
                    <Link href={to || '#'}>
                        {Icon && <Icon />}
                        {children}
                    </Link>
                ) : (
                    <>
                        {Icon && <Icon />}
                        {children}
                    </>
                )}
            </div>
        </button>
    );
};
