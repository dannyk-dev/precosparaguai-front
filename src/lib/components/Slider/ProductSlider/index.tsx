'use client';

import React from 'react';
import { Splide, SplideProps, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IProductSliderProps } from '@/lib/types/ui.types';
import { Card } from '@/lib/components';

export const ProductSlider = ({
    products,
    options,
    ...props
}: IProductSliderProps & SplideProps) => {
    const sliderOptions = {
        ...options,
        rewind: true,
        drag: true,
        gap: '1rem',
        lazyLoad: true,
        autoWidth: true,
        slideFocus: true,
    };

    return (
        <Splide options={sliderOptions} {...props}>
            {products.map((prod, index) => (
                <SplideSlide key={index}>
                    <Card item={prod} />
                </SplideSlide>
            ))}
        </Splide>
    );
};
