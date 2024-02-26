import {
    MutationFunction,
    MutationKey,
    useMutation as useReactMutation,
    UseMutationOptions,
} from '@tanstack/react-query';

export const useMutation = <
    TData = unknown,
    TError = unknown,
    TVariables = void,
    TQueryKey extends MutationKey = MutationKey,
>(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: UseMutationOptions<TData, TError, TVariables, TQueryKey>
) => {
    return useReactMutation<TData, TError, TVariables, TQueryKey>({
        ...options,
        mutationFn,
    });
};
