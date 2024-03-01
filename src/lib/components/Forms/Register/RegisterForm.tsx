'use client';

import { LockIcon, MailIcon, UserIcon } from 'lucide-react';
import { Input } from '@/lib/components/shared';
import { IFormContentProps } from '@/lib/interfaces';
import { FormSubmit } from '../FormSubmit';

export const RegisterForm = ({
    formData,
    handleChange,
    isLoading,
}: IFormContentProps) => {
    return (
        <>
            <Input
                variant="primary"
                name="username"
                value={formData!.username}
                onChange={handleChange}
                placeholder="Enter a username"
                Icon={UserIcon}
                type="text"
            />
            <Input
                variant="primary"
                name="email"
                value={formData!.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter an Email"
                Icon={MailIcon}
            />
            <Input
                variant="primary"
                name="password"
                value={formData!.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter a password"
                Icon={LockIcon}
            />
            <FormSubmit
                submitBtnText="Sign in"
                redirectText="Already have an account?"
                redirectLink="/login"
                isLoading={isLoading}
            />
        </>
    );
};
