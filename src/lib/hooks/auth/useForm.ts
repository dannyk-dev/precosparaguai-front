import { MutationOptions, Register, useMutation } from '@tanstack/react-query';
import { QueryCacheKey } from '@/lib/types/query.types';
import { UserSchema } from '@/lib/utils/schemas';
import { useState, ChangeEvent, FormEvent } from 'react';
import { RegisterData } from '@/lib/types/auth.types';
import { useAuthStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

interface IFormResultProps {
    formData: RegisterData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    isError: Error | null;
}

export const useForm = <T extends RegisterData>(
    config?: MutationOptions<any, Error, T, any>
): IFormResultProps => {
    const [formData, setFormData] = useState<T>({
        username: '',
        password: '',
        email: '',
    } as T);

    const router = useRouter();
    const [login] = useAuthStore((state) => [state.login, state.user]);

    const key: QueryCacheKey = ['USERS'];

    const mutation = useMutation({
        ...config,
        mutationFn: async (data: T) => {
            return await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then((res) => res.json());
        },

        onSuccess: (data) => {
            login(data);

            router.push('/');
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
