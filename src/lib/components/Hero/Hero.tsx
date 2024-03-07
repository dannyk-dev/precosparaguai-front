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
            <div className="min-h-screen w-full">
                <Slider
                    variant="full"
                    images={[banner, banner2, banner, banner2]}
                    imageClasses="rounded-xl"
                    tag="section"
                    options={{
                        fixedHeight: 'calc(100vh - 5rem + 1rem)',
                    }}
                />
            </div>
            <div className="md:container">
                <ProductsProvider ProductContent={Trending} />
            </div>
        </>
    );
};

export default Hero;
