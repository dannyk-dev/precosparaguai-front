'use client';

import React, { useState } from 'react';

import { ICategories } from '@/lib/interfaces';
import { useGetProductCategories } from '@/lib/hooks/products';
import { Subdrawer } from './Subdrawer';

export const Drawer = () => {
    const { categories, isLoading } = useGetProductCategories();
    const [currentCategory, setCurrentCategory] = useState<
        ICategories | undefined
    >(undefined);

    const handleSelectSubCategory = (
        e: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
        setCurrentCategory(
            categories.find((item) => item._id === e.currentTarget.dataset.id)
        );
    };

    return (
        <>
            <div className={`drawer-side ${currentCategory ? 'hidden' : ''}`}>
                <label
                    htmlFor="main-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                    <li>
                        <h4 className="block cursor-default bg-transparent hover:bg-transparent focus:bg-transparent">
                            Categories
                        </h4>
                    </li>
                    <div className="divider"></div>
                    {categories.map((item) => (
                        <li key={item._id}>
                            <input
                                type="checkbox"
                                className="drawer-toggle"
                                id="sub-drawer"
                            />{' '}
                            <label
                                htmlFor="sub-drawer"
                                onClick={(e) => handleSelectSubCategory(e)}
                                data-id={item._id}
                                key={item._id}
                            >
                                {item.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <Subdrawer
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        </>
    );
};
