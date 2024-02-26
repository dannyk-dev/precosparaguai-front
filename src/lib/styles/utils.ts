import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const getThemeVariant = <T extends string | number | symbol>(
    variantClasses: Record<T, string>,
    variant: T
): string => {
    return variantClasses[variant];
};
