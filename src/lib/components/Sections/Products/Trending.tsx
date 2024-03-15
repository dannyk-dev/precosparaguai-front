import React from 'react';
import { Slider } from '@/lib/components';
import { IProduct } from '@/lib/interfaces';
import { useProductContext } from '@/lib/store/context/ProductContext';

export const Trending = () => {
    const { products } = useProductContext();

    console.log(products);

    return (
        <section className="flex flex-col items-center py-5">
            <div className="container">
                <h2 className="py-4 text-left">Destaques</h2>
                <Slider
                    variant="products"
                    className="relative "
                    products={products}
                    options={{
                        perPage: 5,
                    }}
                />
            </div>
        </section>
    );
};
