import React from 'react';
import { Slider, Cards } from '@/lib/components';
import { IProduct } from '@/lib/interfaces';

interface Props {
    products: IProduct[];
    error: Error;
}

export const Trending = ({ products, error }: Props) => {
    return (
        <>
            <h2 className="py-4 text-left">Destaques</h2>
            <Slider>
                <Cards productsData={products} />
            </Slider>
        </>
    );
};
