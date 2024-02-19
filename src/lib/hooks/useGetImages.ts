import { QueryCacheKey } from '@/lib/types';
import { useQuery } from './query';
import { IGalleryTest } from '@/lib/interfaces/IGalleryTest';

export const useGetImages = () => {
    const key: QueryCacheKey = ['IMAGES'];

    const { data, isLoading, isError, error } = useQuery<IGalleryTest[], Error>(
        {
            queryFn: async () => {
                try {
                    return (await fetch('/api/hello')).json();
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            },
            queryKey: key,
        }
    );

    console.log(data);
    return { images: data, isLoading, isError, error };
};
