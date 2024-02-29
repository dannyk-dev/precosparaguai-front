'use client';

import useAuthStore from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useState, useTransition } from 'react';
import useSessionStorage from '@/lib/hooks';
import { UserRegisterPayload } from '@/lib/types/auth.types';
import { Spinner } from '@/lib/components/shared';
import styled from 'styled-components';

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
        if (!isAuthenticated()) {
            if (session) {
                login(session);
            }

            handleRedirect();
        }
    }, [isAuthenticated, session]);

    return (
        <React.Fragment>
            {user && !inverseAuthValidation ? children : null}

            {!user && inverseAuthValidation ? children : null}
        </React.Fragment>
    );
};
