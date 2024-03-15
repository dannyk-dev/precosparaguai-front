'use client';

import { ISliderProps } from '@/lib/types/ui.types';
import { FullSlider } from './FullSlider';
import { ProductSlider } from './ProductSlider';
import { SplideProps } from '@splidejs/react-splide';

export const Slider = ({
    variant,
    products,
    items,
    images,
    options,
    progress,
    imageClasses,
    ...props
}: ISliderProps & SplideProps) => {
    switch (variant) {
        case 'products':
            if (products || items) {
                return (
                    <ProductSlider
                        {...props}
                        className="relative"
                        products={products}
                        items={items}
                    />
                );
            }

        case 'banner':
            return null;
        case 'full':
            return (
                images && (
                    <FullSlider
                        {...props}
                        imageClasses={imageClasses || ''}
                        images={images}
                        options={options}
                        progress={progress || false}
                    />
                )
            );
        default:
            return null;
    }
};
