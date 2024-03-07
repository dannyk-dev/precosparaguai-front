import {
    Options,
    Splide,
    SplideProps,
    SplideSlide,
} from '@splidejs/react-splide';

import Image from 'next/image';
import React from 'react';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import { IFullSliderProps } from '@/lib/types/ui.types';
import { FullWithProgess } from './FullWithProgress';
import { cn } from '@/lib/styles/utils';
import { merge } from '@/lib/utils/merge';

export const FullSlider = ({
    options,
    imageClasses,
    images,
    progress,
    ...props
}: IFullSliderProps & SplideProps) => {
    const defaultOptions: Options = {
        rewind: true,
        drag: true,
        lazyLoad: true,
        interval: 4000,
        autoplay: true,
        pagination: false,
        easing: 'ease',
        fixedWidth: '100%',
    };

    const sliderOptions = merge<Options, Options>(
        defaultOptions,
        options || {}
    ) as Options;

    return progress ? (
        <FullWithProgess
            {...props}
            options={sliderOptions}
            imageClasses={imageClasses}
            images={images}
        />
    ) : (
        <Splide options={sliderOptions} {...props}>
            {images.map((image, index) => (
                <SplideSlide key={index}>
                    <Image
                        src={image}
                        alt={`image ${index}`}
                        objectFit="contain"
                        className={cn(imageClasses, 'h-full w-full')}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};
