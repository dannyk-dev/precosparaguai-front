import React from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import Image from 'next/image';
import { Slider } from '../Slider';
import { useMediaQuery } from 'react-responsive';

export const SemanaDoConsumidor = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 520px)' });
    const { BannerGroupBy } = useBannerContext();

    const bannerGroup = BannerGroupBy('semana_consumidor');

    return (
        <section className="container relative flex justify-between lg:container">
            <div className="grid w-full grid-cols-4 grid-rows-1 justify-between lg:grid-rows-1 ">
                <div className="relative col-span-4 row-span-1 h-full w-full justify-between px-4 sm:px-0 lg:col-span-3 ">
                    <Slider
                        variant="full"
                        images={bannerGroup?.left
                            ?.toReversed()
                            .map((banner) => banner.image)}
                        progress={true}
                        options={{
                            fixedHeight: '400px',
                            gap: '0.75rem',
                            autoplay: false,
                        }}
                        imageClasses="rounded-xl object-cover "
                    />
                </div>
                <div className="relative col-span-4 row-span-2 mt-4 w-full justify-self-center px-4 lg:col-span-1 lg:row-span-1 lg:justify-self-end">
                    <Image
                        src={bannerGroup?.right?.[0]?.image || ''}
                        alt="aside banner"
                        objectFit="cover"
                        loading="lazy"
                        className="ml-auto w-full rounded-xl object-contain"
                        width={isMobile ? 320 : 1920}
                        height={isMobile ? 420 : 600}
                    />
                </div>
            </div>
        </section>
    );
};
