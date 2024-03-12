import React, { useLayoutEffect, useState } from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import { IGroupedBanners } from '@/lib/types/ui.types';
import { banner } from '@/lib/utils/images/banners';
import Image from 'next/image';
import { Slider } from '../Slider';

export const SemanaDoConsumidor = () => {
    const [bannerGroup, setBannerGroup] = useState<Partial<IGroupedBanners>>(
        {}
    );
    const { BannerGroupBy, isLoading } = useBannerContext();

    useLayoutEffect(() => {
        if (!isLoading) {
            const banners = BannerGroupBy('semana_consumidor');

            setBannerGroup(banners);
        }
    }, [isLoading]);

    console.log(bannerGroup);

    return (
        <section className="container relative flex justify-between">
            <div className="grid w-full grid-cols-4 grid-rows-1 justify-between ">
                <div className="relative col-span-3 row-span-1 h-full w-full justify-between ">
                    <Slider
                        variant="full"
                        images={
                            bannerGroup?.left?.map(
                                (banner) => banner.image_url
                            ) || []
                        }
                        progress={true}
                        options={{
                            fixedHeight: '600px',
                            gap: '0.75rem',
                            autoplay: false,
                        }}
                        imageClasses="rounded-xl object-cover "
                    />
                </div>
                <div className="aside relative col-span-1 row-span-1 hidden h-full w-full  justify-self-end lg:block">
                    <Image
                        src={bannerGroup?.right?.[0]?.image_url || ''}
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
