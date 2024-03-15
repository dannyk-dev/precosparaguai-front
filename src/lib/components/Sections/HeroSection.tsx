import React from 'react';
import { Slider } from '../Slider/index';
import { useScroll } from '@/lib/hooks';
import { useBannerContext } from '@/lib/store/context/BannerContext';

export const HeroSection = () => {
    const { BannerGroupBy } = useBannerContext();
    const { isScrolled } = useScroll();

    const bannerGroup = BannerGroupBy('hero');

    return (
        <section className="relative h-screen w-full">
            <Slider
                variant="full"
                images={bannerGroup?.full?.map((banner) => banner.image) || []}
                options={{
                    fixedHeight: isScrolled ? '90vh' : '100vh',
                }}
                imageClasses="object-cover  aspect-auto"
            />
        </section>
    );
};
