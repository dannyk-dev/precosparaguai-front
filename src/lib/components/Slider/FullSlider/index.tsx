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

export const FullSlider = ({
    options,
    ...props
}: IFullSliderProps & SplideProps) => {
    const sliderOptions: Options = {
        ...options,
        rewind: true,
        drag: true,
        lazyLoad: true,
        slideFocus: true,
        interval: 4000,
        autoplay: true,
        pagination: false,
        fixedWidth: '100%',
        fixedHeight: '60vh',
    };

    return props.progress ? (
        <FullWithProgess {...props} options={sliderOptions} />
    ) : (
        <Splide options={sliderOptions} {...props}>
            {props.images.map((image, index) => (
                <SplideSlide key={index}>
                    <Image
                        src={image}
                        alt={`image ${index}`}
                        objectFit="contain"
                        className={cn(props.imageClasses, 'h-full w-full')}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};
