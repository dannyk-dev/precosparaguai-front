'use client';

import { MutationOptions, useMutation } from '@tanstack/react-query';
import { QueryCacheKey } from '@/lib/types/query.types';
import { UserSchema } from '@/lib/utils/schemas';
import { useState, ChangeEvent, FormEvent, useTransition } from 'react';
import { RegisterData } from '@/lib/types/auth.types';
import { useAuthStore, useGlobalStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { IFormResultProps } from '@/lib/interfaces';

export const useForm = <T extends RegisterData>(
    apiRoute: string,
    config?: MutationOptions<any, Error, T, any>
): IFormResultProps => {
    const router = useRouter();
    const [login] = useAuthStore((state) => [state.login, state.user]);
    const setLoading = useGlobalStore((state) => state.setLoading);
    const [isPending, startTransition] = useTransition();

    const [formData, setFormData] = useState<T>({
        username: undefined,
        password: '',
        email: '',
    } as T);

    const key: QueryCacheKey = ['USERS'];

    const mutation = useMutation({
        ...config,
        mutationFn: async (data: T) => {
            return await fetch(apiRoute, {
                method: 'POST',
                body: JSON.stringify(data),
            }).then((res) => res.json());
        },

        onSuccess: (data) => {
            setLoading(false);
            startTransition(() => {
                login(data);
                router.push('/dashboard');
            });
        },

        onError: (error) => {
            console.error(error);
        },
        mutationKey: key,
    });

    const validate = (data: T) => {
        try {
            UserSchema.parse(data);
            return true;
        } catch (error) {
            mutation.reset();
            console.log(error);
            throw error;
        }
    };

    const register = (data: T) => {
        if (validate(data)) {
            try {
                mutation.mutate(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        register(formData);
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        isLoading: mutation.isPending,
        isError: mutation.error,
    };
};
