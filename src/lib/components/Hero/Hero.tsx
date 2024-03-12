'use client';

import React from 'react';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';

import { Slider } from '@/lib/components';
import { StaticImageData } from 'next/image';

import { useScroll } from '@/lib/hooks';
import { SemanaDoConsumidor } from '../Sections/SemanaDoConsumidor';
import { BannerProvider } from '@/lib/store/context/BannerContext';

interface IProps {}

const Hero = ({}: IProps) => {
    const { isScrolled } = useScroll();

    const images: StaticImageData[] = [
        banner,
        banner2,
        banner,
        banner2,
        banner,
        banner2,
    ];

    return (
        <BannerProvider>
            <div className="ease flex  flex-col  pb-8 transition-all duration-300">
                <section className="relative h-screen w-full">
                    <Slider
                        variant="full"
                        images={images}
                        options={{
                            fixedHeight: isScrolled ? '90vh' : '100vh',
                        }}
                        imageClasses="object-cover  aspect-auto"
                    />
                </section>
                <SemanaDoConsumidor />
            </div>
        </BannerProvider>
    );
};

export default Hero;
