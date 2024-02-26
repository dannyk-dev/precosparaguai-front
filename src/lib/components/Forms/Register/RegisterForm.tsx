import React from 'react';
import { Input } from '@/lib/components/shared/Inputs';
import { LockIcon, LogInIcon, MailIcon, UserIcon } from 'lucide-react';
import Button from '@/lib/components/shared';

interface IProps {}

const RegisterForm = ({}: IProps) => {
    return (
        <form className="mt-5">
            <div className="container px-3">
                <div className="form-control">
                    <Input
                        variant="primary"
                        placeholder="Enter a username"
                        Icon={UserIcon}
                        type="text"
                    />
                </div>
                <div className="form-control mt-6">
                    <Input
                        variant="primary"
                        type="email"
                        placeholder="Enter an Email"
                        Icon={MailIcon}
                    />
                </div>
                <div className="form-control mt-6">
                    <Input
                        variant="primary"
                        type="password"
                        placeholder="Enter a password"
                        Icon={LockIcon}
                    />
                </div>
                <div className="form-control flex items-end">
                    <Button
                        Icon={LogInIcon}
                        variant="secondary"
                        className="mt-6 w-fit px-8 shadow-lg "
                    >
                        <span className="ml-2 font-extrabold">Sign in</span>
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
