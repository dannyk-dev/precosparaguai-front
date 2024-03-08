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
import { Card } from '@/lib/components';
import { merge } from '@/lib/utils/merge';
import SliderDefaults from '../SliderOptions';

export const ProductSlider = ({
    products,
    options,
    ...props
}: IProductSliderProps & SplideProps) => {
    const sliderOptions = merge(
        SliderDefaults.products,
        options || {}
    ) as Options;

    return (
        <Splide options={sliderOptions} {...props} className="relative">
            {products.map((prod, index) => (
                <SplideSlide key={index}>
                    <Card item={prod} />
                </SplideSlide>
            ))}
        </Splide>
    );
};
