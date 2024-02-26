import { InputStyleType } from './types';

export const variantClasses: Record<InputStyleType, string> = {
    simple: 'input input-bordered shadow-md',
    primary:
        'input input-bordered shadow-md border-red-400 bg-base-200/60 backdrop-blur-lg focus:ring-red-500',
};
