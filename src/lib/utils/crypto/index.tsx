import CryptoJS from 'crypto-js';

export const jsonToSHA256 = (obj: any) => {
    return CryptoJS.SHA256(JSON.stringify(obj)).toString(CryptoJS.enc.Hex);
};

export const sha256ToJson = (hash: string) => {
    return JSON.parse(CryptoJS.enc.Hex.parse(hash).toString(CryptoJS.enc.Utf8));
};
