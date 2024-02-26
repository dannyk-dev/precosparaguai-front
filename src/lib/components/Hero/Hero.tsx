'use client';

import React from 'react';
import { useGetProducts } from '@/lib/hooks/products';
import { Spinner } from '@/lib/components/shared/loaders';
import { Cards } from '../Cards';
import { Banner } from '../shared/Banner';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';
import BannerGroup from '../shared/Banner/BannerGroup';
import { Slider } from '../Carousel/Carousel';

interface IProps {}

const Hero = ({}: IProps) => {
    const { products, isLoading } = useGetProducts();

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="mx-auto px-10 lg:container">
                    <div className="relative mt-8 flex h-1/2 w-full flex-col items-center ">
                        <Banner image={banner} />
                    </div>
                    <BannerGroup images={[banner, banner2]} />

                    <div className="mt-5">
                        <h2 className="py-4 text-left">Destaques</h2>
                        <Slider>
                            <Cards productsData={products} />
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;
