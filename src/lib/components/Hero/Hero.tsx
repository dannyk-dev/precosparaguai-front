'use client';

import React from 'react';
import { useGetProducts } from '@/lib/hooks/products';
import { Spinner } from '@/lib/components/shared/loaders';
import { Cards } from '../Cards';
import { Banner } from '../shared/Banner';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';
import BannerGroup from '../shared/Banner/BannerGroup';

interface IProps {}

const Hero = ({}: IProps) => {
    const { products, isLoading } = useGetProducts();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="relative mt-8 flex h-1/2 w-full flex-col items-center ">
                <Banner image={banner} />
            </div>
            <BannerGroup images={[banner, banner2]} />
        </>
    );
};

export default Hero;
