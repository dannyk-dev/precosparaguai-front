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
import SliderDefaults from '../SliderOptions';

export const FullSlider = ({
    options,
    imageClasses,
    images,
    progress,
    ...props
}: IFullSliderProps & SplideProps) => {
    const sliderOptions: Options = {
        ...SliderDefaults.full,
        ...options,
    };

    console.log(sliderOptions);
    // const sliderOptions = merge(SliderDefaults.full, options || {}) as Options;

    return progress ? (
        <FullWithProgess
            {...props}
            options={sliderOptions}
            imageClasses={imageClasses}
            images={images}
        />
    ) : (
        <Splide options={sliderOptions} {...props} className="relative">
            {images.map((image, index) => (
                <SplideSlide key={index} className="relative">
                    <Image
                        src={image}
                        alt={`image ${index}`}
                        fill={true}
                        sizes="100%"
                        loading="lazy"
                        placeholder="blur"
                        className={cn(
                            imageClasses || '',
                            'h-full w-full  object-center'
                        )}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};
