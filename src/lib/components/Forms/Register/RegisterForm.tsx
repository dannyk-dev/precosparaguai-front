'use client';

import { useState } from 'react';
import { Input } from '@/lib/components/shared/Inputs';
import { LockIcon, LogInIcon, MailIcon, UserIcon } from 'lucide-react';
import Button from '@/lib/components/shared';
import { FormEvent } from 'react';
import { Spinner } from '@/lib/components/shared/loaders';
import useRegister from '@/lib/hooks/auth';
import { UserRegisterPayload } from '@/lib/types/auth.types';

import { redirect } from 'next/navigation';
import useSessionStorage from '@/lib/hooks';

const RegisterForm = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [user, setUser] = useSessionStorage<UserRegisterPayload>(
        'USER',
        null
    );

    const { register, isLoading } = useRegister({
        onSuccess: (data) => {
            setUser(data);
            redirect('/');
        },
        onError: (error) => {
            setUser(null);
            console.error(error);
        },
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        register({ username, email, password });
    };

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="container px-3">
                <div className="form-control">
                    <Input
                        variant="primary"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        name="username"
                        placeholder="Enter a username"
                        Icon={UserIcon}
                        type="text"
                    />
                </div>
                <div className="form-control mt-6">
                    <Input
                        variant="primary"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter an Email"
                        Icon={MailIcon}
                    />
                </div>
                <div className="form-control mt-6">
                    <Input
                        variant="primary"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Enter a password"
                        Icon={LockIcon}
                    />
                </div>
                <div className="form-control flex items-end">
                    <Button
                        Icon={LogInIcon}
                        variant="primary"
                        type="submit"
                        className="mt-6 w-fit px-8 shadow-lg "
                    >
                        <span className="ml-2 font-extrabold">Sign in</span>
                    </Button>
                    {isLoading && <Spinner scale={0.6} />}
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
