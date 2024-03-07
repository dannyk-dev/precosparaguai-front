import React, { useEffect } from 'react';
import { useGetProducts } from '@/lib/hooks/products';
import { IProduct } from '@/lib/interfaces';

interface IProductsProviderProps {
    ProductContent: React.JSX.Element | React.Component<IProduct[]> | any;
}

export const ProductsProvider = ({
    ProductContent,
}: IProductsProviderProps) => {
    const { products, error, isLoading } = useGetProducts();

    useEffect(() => {
        console.log(products.length);
    }, [isLoading]);

    return (
        <div className="mt-5">
            <ProductContent products={products} error={error} />
        </div>
    );
};
