'use client';

import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RequireAuth } from '@/lib/hooks/auth';
import { ProductContentProvider } from './ProductContentProvider';

const queryClient = new QueryClient();

interface IProps {
    children: ReactNode;
}

export const Providers = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RequireAuth />
            <ProductContentProvider>{children}</ProductContentProvider>
        </QueryClientProvider>
    );
};
