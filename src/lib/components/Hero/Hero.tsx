'use client';

import React from 'react';

import {
    SemanaDoConsumidor,
    CategorySection,
    HeroSection,
    MultiBannerSection,
} from '@/lib/components/Sections';
import { BannerProvider } from '@/lib/store/context/BannerContext';
import { ProductSection } from '@/lib/components/Sections/Products';

const Hero = () => {
    return (
        <BannerProvider>
            <HeroSection />
            <div className="ease container flex flex-col pb-8 transition-all duration-300 md:px-4">
                <SemanaDoConsumidor />
                <CategorySection />
                <MultiBannerSection />

                {/* PRODUCTS */}
                <ProductSection title="Destaques" />
                <ProductSection title="Produtos Patrocinados" />
                <ProductSection title="Acabaram de chegar para você" />
                <ProductSection title="Ofertas Especiais" />
            </div>
        </BannerProvider>
    );
};

export default Hero;
