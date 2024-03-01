'use client';

import useAuthStore from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useTransition } from 'react';
import useSessionStorage from '@/lib/hooks';
import { UserRegisterPayload } from '@/lib/types/auth.types';
import { Spinner } from '@/lib/components/shared';

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
    const router = useRouter();
    const [session] = useSessionStorage<UserRegisterPayload>('USER', null);
    const [isAuthenticated, user, login] = useAuthStore((state) => [
        state.isAuthenticated,
        state.user,
        state.login,
    ]);

    const [isPending, startTransition] = useTransition();

    const handleRedirect = () => {
        if (redirectPage && isAuthenticated()) {
            if (inverseAuthValidation) router.push('/');
        } else if (
            redirectPage &&
            !isAuthenticated() &&
            !inverseAuthValidation
        ) {
            router.push('/register');
        }
    };

    useEffect(() => {
        startTransition(() => {
            if (!isAuthenticated()) {
                if (session) {
                    login(session);
                }

                handleRedirect();
            } else {
                handleRedirect();
            }
        });
    }, [isAuthenticated, session]);

    if (isPending) {
        return (
            <div className="container">
                <div className="flex items-center justify-center">
                    <Spinner />
                </div>
            </div>
        );
    }

    if ((inverseAuthValidation && !user) || (!inverseAuthValidation && user)) {
        return children;
    } else if (
        (!inverseAuthValidation && !user) ||
        (inverseAuthValidation && !user)
    )
        return null;

    return null;
};
