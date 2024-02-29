'use client';

import { LoginForm, Form } from '@/lib/components';
import AuthLayout from '@/lib/layout/AuthLayout';
import React from 'react';

export const Login = () => {
    return (
        <AuthLayout>
            <h4 className="mb-10 text-center font-normal">Welcome Back!!</h4>
            <Form requestTo="/api/users/login" FormContent={LoginForm} />
        </AuthLayout>
    );
};
