import CryptoJS from 'crypto-js';

export const encryptAES = <T>(obj: T, key: string): string | null => {
    if (obj === null) return null;

    try {
        const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(obj),
            key
        ).toString();

        return encryptedData;
    } catch (error) {
        return JSON.stringify(null);
    }
};

export const decryptAES = <T>(encryptedData: string, key: string): T => {
    try {
        const data = CryptoJS.AES.decrypt(encryptedData, key).toString(
            CryptoJS.enc.Utf8
        );

        return JSON.parse(data) as T;
    } catch (error) {
        throw error;
    }
};
