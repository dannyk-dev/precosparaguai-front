'use client';

import useAuthStore from '@/lib/store/authStore';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import useSessionStorage from '@/lib/hooks';
import { UserRegisterPayload } from '@/lib/types/auth.types';

interface IAuthProviderProps {
    children: React.ReactNode;
    redirectPage?: boolean;
    inverseAuthValidation?: boolean;
}

export const RequireAuth = ({
    children,
    redirectPage,
    inverseAuthValidation,
}: IAuthProviderProps) => {
    const [session] = useSessionStorage<UserRegisterPayload>('USER', null);

    const [isAuthenticated, user, login] = useAuthStore((state) => [
        state.isAuthenticated,
        state.user,
        state.login,
    ]);

    useEffect(() => {
        if (!isAuthenticated() && session) login(session);
    }, []);

    if (inverseAuthValidation && !user) {
        return redirectPage ? redirect('/register') : children;
    }
    return user && !inverseAuthValidation ? children : null;
};

