import { MutationOptions, useMutation } from '@tanstack/react-query';
import { QueryCacheKey } from '@/lib/types/query.types';
import { UserSchema } from '@/lib/utils/schemas';

const useRegister = <T>(config?: MutationOptions<any, Error, T, any>) => {
    const key: QueryCacheKey = ['USERS'];

    const mutation = useMutation({
        ...config,
        mutationFn: async (data: T) => {
            return await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then((res) => res.json());
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

    return {
        register,
        isLoading: mutation.isPending,
        isError: mutation.error,
    };
};

export default useRegister;
