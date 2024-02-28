'use client';

import useAuthStore from '@/lib/store/authStore';
import { redirect } from 'next/navigation';
import React from 'react';
import useSessionStorage from '@/lib/hooks';
import { UserRegisterPayload } from '@/lib/types/auth.types';

interface IAuthProviderProps {
    children: React.ReactNode;
    redirectPage?: boolean;
    inverseAuthValidation?: boolean;
}

const RequireAuth = ({
    children,
    redirectPage,
    inverseAuthValidation,
}: IAuthProviderProps) => {
    const [session] = useSessionStorage<UserRegisterPayload>('USER', null);

    const [isAuthenticated, login] = useAuthStore((state) => [
        state.isAuthenticated,
        state.login,
    ]);

    if (!isAuthenticated()) {
        if (session) login(session);

        if (!inverseAuthValidation) {
            return redirectPage ? redirect('/register') : null;
        }
    }

    return children;
};

export default RequireAuth;
