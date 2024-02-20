'use client';

import React from 'react';
import { useGetProducts } from '@/lib/hooks/products';
import { Spinner } from '@/lib/components/shared/loaders';
import Image from 'next/image';
import banner from '@/../public/assets/banner_dior.jpg';

interface IProps {}

const Hero = ({}: IProps) => {
    const { products, isLoading } = useGetProducts();

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="container mt-10 flex items-center justify-center">
            <div className="hero h-5/6 rounded-xl bg-base-300 p-0 text-base-content shadow-lg">
                <Image
                    src={banner}
                    alt="banner"
                    className="h-full w-full rounded-xl object-cover shadow-lg"
                />
            </div>

            {/* {isLoading ? <Spinner /> : <Cards productsData={products} />} */}
        </div>
    );
};

export default Hero;
