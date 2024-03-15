import { ICategory } from '@/lib/interfaces';
import { QueryCacheKey } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export const useGetProductCategories = () => {
    const key: QueryCacheKey = ['CATEGORIES'];

    const { data, isLoading, isError, error, ...rest } = useQuery<
        ICategory[],
        Error
    >({
        queryFn: async () => {
            try {
                return (await fetch('/api/products/demo/categories')).json();
            } catch (err) {
                throw err;
            }
        },
        queryKey: key,
    });

    return {
        categories: data ?? [],
        isLoading,
        isError,
        error,
        ...rest,
    };
};
