'use client';

import { LockIcon, LogInIcon, MailIcon, UserIcon } from 'lucide-react';
import { Button, Spinner, Input } from '@/lib/components/shared';
import { IFormContentProps } from '@/lib/interfaces';
import { useEffect } from 'react';

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

            <div className="form-control flex items-end">
                <Button
                    Icon={LogInIcon}
                    variant="primary"
                    type="submit"
                    className="mt-6 w-fit px-8 shadow-lg "
                >
                    <span className="ml-2 font-extrabold">Sign in</span>
                </Button>
                <Button
                    variant="link"
                    variantSize="xsmall"
                    to="/login"
                    className="mt-4"
                >
                    Already have an account?
                </Button>
                {isLoading && <Spinner variantSize="base" />}
            </div>
        </>
    );
};
