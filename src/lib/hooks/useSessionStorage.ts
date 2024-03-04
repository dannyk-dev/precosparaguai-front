'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { encryptAES, decryptAES } from '@/lib/utils/crypto';

type SessionTypes = 'USER';
const AUTH_ENCRYPTION_KEY = process.env.AUTH_ENCRYPTION_KEY || 'auth_token';

const useSessionStorage = <T>(
    key: SessionTypes,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        if (typeof window !== 'undefined') {
            const storedValue = sessionStorage.getItem(key);

            return storedValue !== null
                ? decryptAES<T>(storedValue, AUTH_ENCRYPTION_KEY)
                : initialValue;
        }

        return initialValue;
    });

    useEffect(() => {
        if (value !== null) return;

        const encryptedValue = encryptAES<T>(value, AUTH_ENCRYPTION_KEY);
        sessionStorage.setItem('USER', encryptedValue);
    }, [key, value]);

    return [value, setValue];
};

export default useSessionStorage;
