import React, { useState } from 'react';
import { IProduct, ICategory } from '@/lib/interfaces';
import { useGetProductCategories, useGetProducts } from '@/lib/hooks/products';
import {
    ProductContext,
    CategoryContext,
    ProductFilter,
    CategoryFilter,
} from '@/lib/store/context/ProductContext';

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const { products } = useGetProducts();

    const productFilterBy = (filter: ProductFilter): IProduct[] => {
        return products.filter((product) => product[filter]);
    };

    return (
        <ProductContext.Provider value={{ products, productFilterBy }}>
            {children}
        </ProductContext.Provider>
    );
};

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const { categories } = useGetProductCategories();
    const [currentCategory, setCurrentCategory] = useState<
        ICategory | undefined
    >(undefined);

    const categoryFilterBy = (filter: CategoryFilter): ICategory[] => {
        return categories.filter((category) => category[filter]);
    };

    return (
        <CategoryContext.Provider
            value={{
                categories,
                categoryFilterBy,
                currentCategory,
                setCurrentCategory,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export const ProductContentProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ProductProvider>
            <CategoryProvider>{children}</CategoryProvider>
        </ProductProvider>
    );
};
