'use client';

import React, { useEffect, useState } from 'react';

import { Menu } from 'lucide-react';
import { useGetProductCategories } from '@/lib/hooks/products';
import Subdrawer from './Subdrawer';
import { ICategories } from '@/lib/interfaces';

interface IProps {}

const SideBar = ({}: IProps) => {
    const { categories, isLoading } = useGetProductCategories();
    const [openSubDrawer, setOpenSubDrawer] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<
        ICategories | undefined
    >();

    const handleSelectSubCategory = (
        e: React.MouseEvent<HTMLLabelElement, MouseEvent>
    ) => {
        setOpenSubDrawer((prevState) => !prevState);

        setCurrentCategory(
            categories.find((item) => item._id === e.currentTarget.dataset.id)
        );
    };

    useEffect(() => {
        console.log(currentCategory);
    }, [currentCategory]);

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label
                    htmlFor="my-drawer"
                    className="btn btn-ghost drawer-button btn-sm"
                >
                    <Menu />
                </label>
            </div>
            <div className={`drawer-side ${currentCategory ? 'hidden' : ''}`}>
                <label
                    htmlFor="my-drawer"
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
                        <li>
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
                openSubDrawer={openSubDrawer}
                setOpenSubDrawer={setOpenSubDrawer}
            />
        </div>
    );
};

export default SideBar;
