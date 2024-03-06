'use client';

import { ISliderProps } from '@/lib/types/ui.types';
import { FullSlider } from './FullSlider';
import { ProductSlider } from './ProductSlider';
import { SplideProps } from '@splidejs/react-splide';

export const Slider = ({
    variant,
    products,
    images,
    options,
    progress,
    imageClasses,
    ...props
}: ISliderProps & SplideProps) => {
    switch (variant) {
        case 'products':
            return (
                products && (
                    <ProductSlider
                        {...props}
                        products={products}
                        options={options}
                    />
                )
            );
        case 'banner':
            break;
        case 'full':
            return (
                images && (
                    <FullSlider
                        {...props}
                        imageClasses={imageClasses}
                        images={images}
                        options={options}
                        progress={progress}
                    />
                )
            );
        default:
            break;
    }
};
