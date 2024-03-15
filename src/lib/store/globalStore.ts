import { useMediaQuery } from 'react-responsive';
import { StoreApi, UseBoundStore, create } from 'zustand';

type GlobalAppState = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
};

const useGlobalStore: UseBoundStore<StoreApi<GlobalAppState>> =
    create<GlobalAppState>((set) => ({
        loading: true,
        setLoading: (loading: boolean) => set({ loading }),
    }));

export default useGlobalStore;
