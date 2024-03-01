'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Spinner } from '../shared/loaders';

const queryClient = new QueryClient();

interface IProps {
    children: ReactNode;
}

export const Providers = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export { ProductsProvider } from './ProductsProvider';
