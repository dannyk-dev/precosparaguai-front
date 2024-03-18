'use client';

import { LoginForm, Form } from '@/lib/components';
import AuthLayout from '@/lib/layout/AuthLayout';
import React from 'react';
import { RequireAuth } from '@/lib/hooks/auth';

export const LoginPage = () => {
    return (
        <RequireAuth redirectPage={true} inverseAuthValidation={true}>
            <AuthLayout>
                <h4 className="mb-10 text-center font-normal">
                    Welcome Back!!
                </h4>
                <Form requestTo="/api/users/login" FormContent={LoginForm} />
            </AuthLayout>
        </RequireAuth>
    );
};
