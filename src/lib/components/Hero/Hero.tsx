'use client';

import React from 'react';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';

import { ProductsProvider } from '@/lib/components/providers';
import { Trending } from '@/lib/components/Sections';
import { Slider } from '@/lib/components';
import Image, { StaticImageData } from 'next/image';

import samgsungBanner from '@/../public/assets/Samsung_GalaxyS24.png';
import consumerWeek from '@/../public/assets/Semana_Consumidor.png';
import asideBanner from '@/../public/assets/Banner_Lateral_Semana_Consumidor.png';
import lenovoBanner from '@/../public/assets/Lenovo_Tab_IN_homedesk.png';
import tufBanner from '@/../public/assets/tuf_notebook.png';
import { useScroll } from '@/lib/hooks';

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

    const smallBanners: StaticImageData[] = [
        samgsungBanner,
        consumerWeek,
        lenovoBanner,
        tufBanner,
    ];

    return (
        <div className="ease flex  flex-col  pb-8 transition-all duration-300">
            <section className="relative  h-screen w-full">
                <Slider
                    variant="full"
                    images={images}
                    options={{
                        fixedHeight: isScrolled ? '90vh' : '100vh',
                    }}
                    imageClasses="object-cover  aspect-auto"
                />
            </section>
            <section className="container relative flex justify-between">
                <div className="grid w-full grid-cols-4 grid-rows-1 justify-between  ">
                    <div className="relative col-span-3 row-span-1 h-full w-full justify-between ">
                        <Slider
                            variant="full"
                            images={smallBanners}
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
                            src={asideBanner}
                            alt="aside banner"
                            fill={true}
                            objectFit="cover"
                            loading="lazy"
                            placeholder="blur"
                            className="ml-auto rounded-xl object-contain"
                        />
                    </div>
                </div>
            </section>
            {/* <section className="block md:container">
                <ProductsProvider ProductContent={Trending} />
            </section> */}
            {/* <div className="mt-20 px-10 md:container">
                <Slider
                    variant="full"
                    images={images}
                    tag="section"
                    progress={true}
                    options={{
                        fixedHeight: '200px',
                    }}
                />
            </div>
            <div className="container">
            </div> */}
        </div>
    );
};

export default Hero;
