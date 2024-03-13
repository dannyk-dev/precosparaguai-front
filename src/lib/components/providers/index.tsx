'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useGlobalStore } from '@/lib/store';
import { RequireAuth } from '@/lib/hooks/auth';

const queryClient = new QueryClient();

interface IProps {
    children: ReactNode;
}

export const Providers = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <RequireAuth />
            {children}
        </QueryClientProvider>
    );
};
