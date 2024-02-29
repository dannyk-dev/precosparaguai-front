'use client';

import { cn } from '@/lib/styles/utils';
import { cva, VariantProps } from 'class-variance-authority';

const DottedSpinnerStyles = cva('loading loading-spinner my-4', {
    variants: {
        variantSize: {
            xsmall: 'loading-xs',
            small: 'loading-sm',
            base: 'loading-md',
            large: 'loading-lg',
        },
    },
});

export const Spinner = ({
    variantSize,
}: VariantProps<typeof DottedSpinnerStyles>) => {
    return <div className={cn(DottedSpinnerStyles({ variantSize }))}></div>;
};
