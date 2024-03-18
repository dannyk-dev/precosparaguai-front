import { QueryCacheKey } from '../types/query.types';
import { IBanner } from '../types/ui.types';
import { useQuery } from './query';

export const useGetBanners = () => {
    const key: QueryCacheKey = ['BANNERS'];

    const { data, isLoading, isError, error, ...rest } = useQuery<
        IBanner[],
        Error
    >({
        queryFn: async () => {
            try {
                return (await fetch('/api/banner/demo')).json();
            } catch (err) {
                throw err;
            }
        },
        queryKey: key,
    });

    return {
        banners: data ?? [],
        isLoading,
        isError,
        error,
        ...rest,
    };
};
