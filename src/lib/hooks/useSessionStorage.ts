'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SessionTypes = 'USER';

const useSessionStorage = <T>(
    key: SessionTypes,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== 'undefined') {
            const storedValue = sessionStorage.getItem(key);
            return storedValue !== null
                ? JSON.parse(storedValue)
                : initialValue;
        }

        return initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useSessionStorage;
