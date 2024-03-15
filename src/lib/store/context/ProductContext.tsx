import React, {
    SetStateAction,
    useState,
    createContext,
    useContext,
} from 'react';
import { ICategory, IProduct } from '@/lib/interfaces';
import { useGetProductCategories } from '@/lib/hooks/products';

/// refactor
export type ProductFilter = Exclude<
    keyof IProduct,
    'image' | 'rating' | 'description' | 'pricing'
>;
// refactor
export type CategoryFilter = Exclude<keyof ICategory, 'icon'>;

interface IProductContext {
    products: IProduct[];
    productFilterBy: (filter: ProductFilter) => IProduct[];
}

interface ICategoryContext {
    categories: ICategory[];
    currentCategory: ICategory | undefined;
    setCurrentCategory: React.Dispatch<SetStateAction<ICategory | undefined>>;
    categoryFilterBy: (filter: CategoryFilter) => ICategory[];
}

export const ProductContext = createContext<IProductContext | undefined>(
    undefined
);
export const CategoryContext = createContext<ICategoryContext | undefined>(
    undefined
);

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error(
            'useProductContext must be used within a ProductProvider'
        );
    }

    return context;
};

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error(
            'useCategoryContext must be used within a CategoryProvider'
        );
    }

    return context;
};
