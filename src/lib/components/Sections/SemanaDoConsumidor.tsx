import React, { useLayoutEffect, useState } from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import { IGroupedBanners } from '@/lib/types/ui.types';
import Image from 'next/image';
import { Slider } from '../Slider';

export const SemanaDoConsumidor = () => {
    const { BannerGroupBy, isLoading } = useBannerContext();
    const [bannerGroup, setBannerGroup] = useState<Partial<IGroupedBanners>>(
        {}
    );

    useLayoutEffect(() => {
        if (!isLoading) {
            const banners = BannerGroupBy('semana_consumidor');

            console.log(banners);
            setBannerGroup(banners);
        }
    }, [isLoading, setBannerGroup]);

    return (
        <section className="container relative flex justify-between">
            <div className="grid w-full grid-cols-4 grid-rows-2 justify-between lg:grid-rows-1 ">
                <div className="relative col-span-4 row-span-1 h-full w-full justify-between px-4 sm:px-0 lg:col-span-3 ">
                    <Slider
                        variant="full"
                        images={bannerGroup?.left?.map(
                            (banner) => banner.image
                        )}
                        progress={true}
                        options={{
                            fixedHeight: '600px',
                            gap: '0.75rem',
                            autoplay: false,
                        }}
                        imageClasses="rounded-xl object-cover "
                    />
                </div>
                <div className="relative col-span-4 row-span-2 h-full w-full justify-self-end lg:col-span-1 lg:row-span-1">
                    <Image
                        src={bannerGroup?.right?.[0]?.image || ''}
                        alt="aside banner"
                        fill={true}
                        objectFit="cover"
                        loading="lazy"
                        className="ml-auto rounded-xl object-contain"
                    />
                </div>
            </div>
        </section>
    );
};
