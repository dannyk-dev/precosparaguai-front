'use client';

import React from 'react';
import {
    Options,
    Splide,
    SplideProps,
    SplideSlide,
} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { IProductSliderProps } from '@/lib/types/ui.types';
import { ProductCard, CategoryCard } from '@/lib/components';
import SliderDefaults from '../SliderOptions';

export const ProductSlider = ({
    products,
    items,
    options,
    ...props
}: IProductSliderProps & SplideProps) => {
    const sliderOptions: Options = {
        ...SliderDefaults.products,
        ...options,
    };

    console.log(sliderOptions);

    return (
        <Splide options={sliderOptions} {...props} className="relative">
            {products &&
                products.map((prod, index) => (
                    <SplideSlide key={index}>
                        <ProductCard item={prod} />
                    </SplideSlide>
                ))}

            {items &&
                items.map((item, index) => (
                    <SplideSlide key={index}>
                        <CategoryCard icon={item.icon} title={item.title} />
                    </SplideSlide>
                ))}
        </Splide>
    );
};
