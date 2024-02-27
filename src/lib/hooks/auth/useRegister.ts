'use client';

import { z } from 'zod';
import { MutationOptions, useMutation } from '@tanstack/react-query';
import { QueryCacheKey } from '@/lib/types/query.types';
import { RegisterData } from '@/lib/types/auth.types';

const registerSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8),
});

const useRegister = (
    config?: MutationOptions<any, Error, RegisterData, any>
) => {
    const key: QueryCacheKey = ['USERS'];

    const mutation = useMutation({
        ...config,
        mutationFn: async (data: RegisterData) => {
            return await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then((res) => res.json());
        },
        mutationKey: key,
    });

    const validate = (data: RegisterData) => {
        try {
            registerSchema.parse(data);
            return true;
        } catch (error) {
            mutation.reset();
            console.log(error);
            throw error; 
        }
    };

    const register = (data: RegisterData) => {
        if (validate(data)) {
            try {
                mutation.mutate(data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return {
        register,
        isLoading: mutation.isPending,
        isError: mutation.error,
    };
};

export default useRegister;
