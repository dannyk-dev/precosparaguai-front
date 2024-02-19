'use client';

import React from 'react';
import { Cards } from '../Cards';
import { useGetProducts } from '@/lib/hooks/products';
import { Spinner } from '@/lib/components/shared/loaders/Spinner';

interface IProps {}

const Hero = ({}: IProps) => {
    const { products, isLoading } = useGetProducts();

    return (
        <div className="container flex items-center justify-center">
            {isLoading ? <Spinner /> : <Cards productsData={products} />}
        </div>
    );
};

export default Hero;
