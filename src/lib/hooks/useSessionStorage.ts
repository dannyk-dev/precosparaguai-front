import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useSessionStorage = <T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    'use client';

    const [value, setValue] = useState<T>(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useSessionStorage;
