import { QueryCacheKey } from '../types';
import { useQuery } from './query';
import { IBrand } from '../utils/fixtures/BrandsFixture';

export const useGetBrands = () => {
    const key: QueryCacheKey = ['BRANDS'];

    const { data, isLoading, isError, error, ...rest } = useQuery<
        IBrand[],
        Error
    >({
        queryFn: async () => {
            try {
                return (await fetch('/api/brands')).json();
            } catch (err) {
                throw err;
            }
        },
        queryKey: key,
    });

    return {
        brands: data ?? [],
        isLoading,
        isError,
        error,
        ...rest,
    };
};
