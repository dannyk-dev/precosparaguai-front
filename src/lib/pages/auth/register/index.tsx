'use client';

import { RegisterForm, Form } from '@/lib/components';
import AuthLayout from '@/lib/layout/AuthLayout';
import { RequireAuth } from '@/lib/hooks/auth';

export const RegisterPage = () => {
    return (
        <h1>Register</h1>

        // <RequireAuth redirectPage={true} inverseAuthValidation={true}>
        //     <AuthLayout>
        //         <h4 className="mb-10 text-center font-normal">
        //             Register your account
        //         </h4>
        //         <Form
        //             requestTo="/api/users/register"
        //             FormContent={RegisterForm}
        //         />
        //     </AuthLayout>
        // </RequireAuth>
    );
};
