'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
import { Input } from '@/lib/components/shared';
import { LockIcon, LogInIcon, MailIcon, UserIcon } from 'lucide-react';
import Button from '@/lib/components/shared';
import { Spinner } from '@/lib/components/shared/loaders';
import { useRegister } from '@/lib/hooks/auth';
import { RegisterData } from '@/lib/types/auth.types';
import { useAuthStore } from '@/lib/store';

import { useRouter } from 'next/navigation';

function RegisterForm() {
    const router = useRouter();
    const [login] = useAuthStore((state) => [state.login, state.user]);

    const [formData, setFormData] = useState<RegisterData>({
        username: '',
        password: '',
        email: '',
    });

    const { register, isLoading } = useRegister<RegisterData>({
        onSuccess: (data) => {
            login(data);

            router.push('/');
        },
        onError: (error) => {
            console.error(error);
        },
    });

    // form handlers
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // submission handler
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        register(formData);
    };

    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <div className="container px-3">
                <div className="wrapper d-flex mt-2 flex-col space-y-5 ">
                    <Input
                        variant="primary"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter a username"
                        Icon={UserIcon}
                        type="text"
                    />
                    <Input
                        variant="primary"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter an Email"
                        Icon={MailIcon}
                    />
                    <Input
                        variant="primary"
                        name="password"
                        value={formData.password}
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
                        {isLoading && <Spinner scale={0.5} />}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;
