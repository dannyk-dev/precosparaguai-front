'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Spinner } from '../shared/loaders';
import { Flowbite } from 'flowbite-react';

const queryClient = new QueryClient();

interface IProps {
    children: ReactNode;
}

export const Providers = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Flowbite>{children}</Flowbite>
        </QueryClientProvider>
    );
};

export { ProductsProvider } from './ProductsProvider';
