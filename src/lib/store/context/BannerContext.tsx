import React, { createContext, useContext } from 'react';
import { useGetBanners } from '@/lib/hooks';
import { PageLoader } from '@/lib/components/shared';
import { IBanner, IGroupedBanners, BannerSections } from '@/lib/types/ui.types';
import { useMediaQuery } from 'react-responsive';

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
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)',
    });
    const { banners, isLoading } = useGetBanners();

    const BannerGroupBy = (section: BannerSections): IGroupedBanners => {
        return banners.reduce((acc: IGroupedBanners, banner: IBanner) => {
            if (banner.pageSection === section) {
                const image = isMobile ? banner.images.sm : banner.images.lg;

                return {
                    ...acc,
                    [banner.pos]: [
                        ...(acc[banner.pos] || []),
                        { ...banner, image },
                    ],
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
