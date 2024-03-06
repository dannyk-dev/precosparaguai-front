'use client';

import React from 'react';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';

import { ProductsProvider } from '@/lib/components/providers';
import { Trending } from '@/lib/components/Sections';
import { Slider } from '@/lib/components';

interface IProps {}

const Hero = ({}: IProps) => {
    return (
        <>
            <div className="container">
                <div className="mt-10 max-h-screen w-full ">
                    <Slider
                        variant="full"
                        images={[banner, banner2, banner, banner2]}
                        imageClasses="rounded-xl"
                        progress={true}
                    />
                </div>
                <ProductsProvider ProductContent={Trending} />
            </div>
        </>
    );
};

export default Hero;
