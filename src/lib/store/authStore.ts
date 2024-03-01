import { StoreApi, UseBoundStore, create } from 'zustand';
import { UserRegisterPayload } from '@/lib/types/auth.types';
import { jsonToSHA256, sha256ToJson } from '../utils/crypto';

type UserState = {
    user: null | UserRegisterPayload;
    getUser: () => null | UserRegisterPayload;
    login: (user: UserRegisterPayload) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
};

const useAuthStore: UseBoundStore<StoreApi<UserState>> = create<UserState>(
    (set) => ({
        user: null,
        getUser: () => {
            const user = sessionStorage.getItem('USER');
            if (user) {
                return sha256ToJson(user);
                // return JSON.parse(sha256ToJson(user));
            }
        },
        login: (user) => {
            set({
                user,
            });
            sessionStorage.setItem('USER', jsonToSHA256(user));
        },
        logout: () => {
            console.log('logging out');
            set({ user: null });
            sessionStorage.setItem('USER', JSON.stringify(null));
        },
        isAuthenticated: () => !!useAuthStore.getState().user,
    })
);

export default useAuthStore;
