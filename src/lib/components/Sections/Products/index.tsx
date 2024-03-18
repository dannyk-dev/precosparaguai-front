'use client';

import React from 'react';
import { useProductContext } from '@/lib/store/context/ProductContext';
import { Slider } from '@/lib/components/shared';

type ProductFilters = 'trending' | 'sponsored' | 'latest' | 'offers';

interface IProductSectionProps {
    filter?: ProductFilters;
    title: string;
}

export const ProductSection = ({
    filter = 'trending',
    title,
}: IProductSectionProps) => {
    const { products } = useProductContext();

    return (
        <section className="flex flex-col items-center px-4 py-5">
            <div className="container">
                <h5 className="py-4 text-left">{title}</h5>
                <Slider
                    variant="products"
                    className="relative "
                    products={products}
                    options={{
                        perPage: 5,
                        gap: '2rem',
                    }}
                />
            </div>
        </section>
    );
};
