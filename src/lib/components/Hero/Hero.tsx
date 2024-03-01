'use client';

import React from 'react';
import { Banner, BannerGroup, Button } from '@/lib/components/shared';

import banner from '@/../public/assets/banner_dior.jpg';
import banner2 from '@/../public/assets/bannersearch.png';

import { RequireAuth } from '@/lib/hooks/auth';
import { ProductsProvider } from '@/lib/components/providers';
import { Trending } from '@/lib/components/Sections';

interface IProps {}

const Hero = ({}: IProps) => {
    return (
        <>
            <div className="mx-auto px-10 lg:container">
                <div className="relative mt-8 flex h-1/2 w-full flex-col items-center ">
                    <Banner image={banner} />
                </div>
                <BannerGroup images={[banner, banner2]} />

                <RequireAuth>
                    <ProductsProvider ProductContent={Trending} />
                </RequireAuth>
                <RequireAuth inverseAuthValidation={true}>
                    <div className="container mt-10">
                        <div className="wrapper flex h-auto flex-col items-center justify-center rounded-lg bg-warning p-5 text-warning-content shadow-xl">
                            <h3 className="d-block font-semibold">
                                You need to login to see the cards
                            </h3>
                            <Button
                                variant="link"
                                to="/register"
                                className="d-block text-warning-content"
                            >
                                or click here
                            </Button>
                        </div>
                    </div>
                </RequireAuth>
            </div>
        </>
    );
};

export default Hero;
