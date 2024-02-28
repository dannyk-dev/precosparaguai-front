import { StoreApi, UseBoundStore, create } from 'zustand';
import { UserRegisterPayload } from '../types/auth.types';

type UserState = {
    user: null | UserRegisterPayload;
    login: (user: UserRegisterPayload) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
};

const useAuthStore: UseBoundStore<StoreApi<UserState>> = create<UserState>(
    (set) => ({
        user: null,
        login: (user) => {
            set({
                user,
            });
            sessionStorage.setItem('USER', JSON.stringify(user));
        },
        logout: () => {
            set({ user: null });
            sessionStorage.setItem('USER', JSON.stringify(null));
        },
        isAuthenticated: () => !!useAuthStore.getState().user,
    })
);

export default useAuthStore;
