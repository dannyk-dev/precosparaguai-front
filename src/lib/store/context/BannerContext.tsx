import React, { createContext, useContext, useEffect, useState } from 'react';
import { IBanner } from '@/lib/types/ui.types';
import { useGetBanners } from '@/lib/hooks/useGetBanners';
import { PageLoader } from '@/lib/components/shared';
import { BannerSections, PositionOptions } from '../../types/ui.types';
import { IGroupedBanners } from '@/lib/types/ui.types';

interface IBannerContext {
    banners: IBanner[];
    isLoading: boolean;
    BannerGroupBy: (section: BannerSections) => IGroupedBanners;
}

const BannerContext = createContext<IBannerContext | undefined>(undefined);

export const useBannerContext = () => {
    const context = useContext(BannerContext);

    if (!context) {
        throw new Error(
            'useBannerContext must be used within a BannerProvider'
        );
    }

    return context;
};

export const BannerProvider = ({ children }: { children: React.ReactNode }) => {
    const { banners, isLoading } = useGetBanners();
    console.log(banners);

    const BannerGroupBy = (section: BannerSections): IGroupedBanners => {
        return banners.reduce((acc: IGroupedBanners, banner: IBanner) => {
            if (banner.pageSection === section) {
                return {
                    ...acc,
                    [banner.pos]: [...(acc[banner.pos] || []), banner],
                };
            }

            return acc;
        }, {} as IGroupedBanners);
    };

    return (
        <BannerContext.Provider value={{ banners, isLoading, BannerGroupBy }}>
            {isLoading ? <PageLoader /> : children}
        </BannerContext.Provider>
    );
};
