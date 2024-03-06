'use client';

import { MutationOptions, useMutation } from '@tanstack/react-query';
import { QueryCacheKey } from '@/lib/types/query.types';
import { UserSchema } from '@/lib/utils/schemas';
import { useState, ChangeEvent, FormEvent, useTransition } from 'react';
import { RegisterData } from '@/lib/types/auth.types';
import { useAuthStore, useGlobalStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { IFormResultProps } from '@/lib/interfaces';
import useSessionStorage from '../useSessionStorage';

export const useForm = <T extends RegisterData>(
    apiRoute: string,
    config?: MutationOptions<any, Error, T, any>
): IFormResultProps => {
    const router = useRouter();
    const [login, setError] = useAuthStore((state) => [
        state.login,
        state.setError,
    ]);
    const setLoading = useGlobalStore((state) => state.setLoading);
    const [_, startTransition] = useTransition();
    const [session, setSession] = useSessionStorage('USER', null);

    const [formData, setFormData] = useState<T>({
        username: undefined,
        password: '',
        email: '',
    } as T);

    const key: QueryCacheKey = ['USERS'];

    const mutation = useMutation({
        ...config,
        mutationFn: async (data: T) => {
            try {
                return await fetch(apiRoute, {
                    method: 'POST',
                    body: JSON.stringify(data),
                }).then((res) => res.json());
            } catch (error) {
                console.log('Found error');
                console.error(error);
                throw error;
            }
        },
        onError: (error): void => {
            console.error(error);
            setLoading(false);
            setError(error);
        },
        onSuccess: (data): void => {
            if (data?.error) return;

            setLoading(false);
            startTransition(() => {
                login(data, false);

                setSession(data);
                router.push('/dashboard');
            });
        },

        mutationKey: key,
    });

    const validate = (data: T) => {
        try {
            UserSchema.parse(data);
            return true;
        } catch (error) {
            mutation.reset();
            throw error;
        }
    };

    const register = (data: T) => {
        if (validate(data)) {
            try {
                mutation.mutate(data);
            } catch (error) {
                setError(error);

                router.refresh();
                mutation.reset();
                throw error;
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
