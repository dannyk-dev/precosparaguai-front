import React from 'react';
import { useBannerContext } from '@/lib/store/context/BannerContext';
import Image from 'next/image';
import { Slider } from '../Slider';
import { useMediaQuery } from 'react-responsive';

export const SemanaDoConsumidor = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 520px)' });
    const { BannerGroupBy } = useBannerContext();

    const { left, right } = BannerGroupBy('semana_consumidor');

    return (
        <section className="container relative mt-0 flex justify-between lg:container lg:mt-5">
            <div className="grid w-full grid-cols-4 grid-rows-1 justify-between lg:grid-rows-1 ">
                <div className="relative col-span-4 row-span-1 h-full w-full justify-between  sm:px-0 lg:col-span-3 ">
                    <Slider
                        variant="full"
                        images={left
                            ?.toReversed()
                            .map((banner) => banner.image)}
                        progress={true}
                        options={{
                            fixedHeight: isMobile ? '400px' : '600px',
                            gap: '0rem',
                            autoplay: false,
                        }}
                        imageClasses="lg:rounded-xl object-cover"
                    />
                </div>
                <div className="relative col-span-4 row-span-2 mt-4 w-full justify-self-center lg:col-span-1 lg:row-span-1 lg:mt-0 lg:justify-self-end">
                    <Image
                        src={right?.[0]?.image || ''}
                        alt="aside banner"
                        objectFit="contain"
                        loading="lazy"
                        className="ml-auto w-full rounded-xl object-cover lg:h-[600px]"
                        width={isMobile ? 320 : 1920}
                        height={isMobile ? 420 : 500}
                    />
                </div>
            </div>
        </section>
    );
};
