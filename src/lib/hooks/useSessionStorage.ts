'use client';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { sha256ToJson, jsonToSHA256 } from '../utils/crypto';

type SessionTypes = 'USER';

const useSessionStorage = <T>(
    key: SessionTypes,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== 'undefined') {
            const storedValue = sessionStorage.getItem(key);
            return storedValue !== null
                ? JSON.parse(sha256ToJson(storedValue))
                : initialValue;
        }

        return initialValue;
    });

    useEffect(() => {
        if (value === null) return;
        sessionStorage.setItem('USER', jsonToSHA256(JSON.stringify(value)));
        // sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useSessionStorage;
