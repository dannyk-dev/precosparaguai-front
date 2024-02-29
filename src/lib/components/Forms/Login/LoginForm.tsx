import { IFormContentProps } from '@/lib/interfaces';
import React from 'react';
import { Button, Input, Spinner } from '@/lib/components/shared';
import { LockIcon, LogInIcon, UserIcon } from 'lucide-react';

export const LoginForm = ({
    formData,
    handleChange,
    isLoading,
}: IFormContentProps) => {
    return (
        <>
            <Input
                variant="primary"
                name="email"
                value={formData!.email}
                onChange={handleChange}
                placeholder="Enter your email"
                Icon={UserIcon}
                type="text"
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
                    <span className="ml-2 font-extrabold">Login</span>
                </Button>
                <Button
                    variant="link"
                    variantSize="xsmall"
                    to="/register"
                    className="mt-4"
                >
                    Dont have an account?
                </Button>
                {isLoading && <Spinner variantSize="base" />}
            </div>
        </>
    );
};
