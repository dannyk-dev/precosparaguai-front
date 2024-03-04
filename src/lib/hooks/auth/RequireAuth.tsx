'use client';

import useAuthStore from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useTransition } from 'react';
import useSessionStorage from '@/lib/hooks';
import { UserRegisterPayload } from '@/lib/types/auth.types';
import { PageLoader, Spinner } from '@/lib/components/shared';
import { useGlobalStore } from '@/lib/store';
import { Transition } from '@/lib/components/shared/loaders/Transition';

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
    const [isAuthenticated, user, login, error] = useAuthStore((state) => [
        state.isAuthenticated,
        state.user,
        state.login,
        state.error,
    ]);
    const [loading, setLoading] = useGlobalStore((state) => [
        state.loading,
        state.setLoading,
    ]);

    const [isPending, startTransition] = useTransition();

    const handleRedirect = () => {
        if (redirectPage && isAuthenticated()) {
            if (inverseAuthValidation) {
                setLoading(true);
                router.push('/');
            }
        } else if (
            redirectPage &&
            !isAuthenticated() &&
            !inverseAuthValidation
        ) {
            setLoading(true);
            router.push('/register');
        }
    };

    useEffect(() => {
        startTransition(() => {
            if (!isAuthenticated()) {
                console.log(session);
                if (session) {
                    login(session);
                }
            }

            handleRedirect();
        });

        setLoading(false);
    }, [isAuthenticated, session, error]);

    if (isPending) {
        return <PageLoader />;
    } else if (loading) return null;

    if ((inverseAuthValidation && !user) || (!inverseAuthValidation && user)) {
        return <Transition>{children}</Transition>;
    }

    return null;
};
