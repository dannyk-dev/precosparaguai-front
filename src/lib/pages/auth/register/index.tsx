'use client';

import { RegisterForm, Form } from '@/lib/components';
import AuthLayout from '@/lib/layout/AuthLayout';

export const Register = () => {
    return (
        <AuthLayout>
            <h4 className="mb-10 text-center font-normal">
                Register your account
            </h4>
            <Form requestTo="/api/users/register" FormContent={RegisterForm} />
        </AuthLayout>
    );
};
