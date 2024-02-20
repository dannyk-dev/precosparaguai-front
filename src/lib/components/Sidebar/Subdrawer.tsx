import { ICategories } from '@/lib/interfaces';
import { SidebarCloseIcon } from 'lucide-react';
import React from 'react';
import { SubCategoryItem } from '@/lib/components/Sidebar';

interface IProps {
    currentCategory: ICategories | undefined;
    setCurrentCategory: (currentCategory: ICategories | undefined) => void;
}

export const Subdrawer = ({ currentCategory, setCurrentCategory }: IProps) => {
    if (!currentCategory) return;
    const subCategories = Object.entries(currentCategory!.subcategories);

    return (
        <div className="drawer-side">
            <label
                htmlFor="sub-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={() => setCurrentCategory(undefined)}
            ></label>

            <ul className="menu min-h-full w-80  bg-base-200 p-4 text-base-content">
                <li className="flex flex-row items-center justify-between">
                    <h4 className="block cursor-default bg-transparent hover:bg-transparent focus:bg-transparent">
                        {currentCategory.title}
                    </h4>
                    <button
                        className="btn btn-ghost btn-sm text-base-content"
                        onClick={() => setCurrentCategory(undefined)}
                    >
                        <SidebarCloseIcon />
                    </button>
                </li>
                <div className="divider"></div>

                {subCategories.map((items, index) => (
                    <SubCategoryItem items={items} key={index} />
                ))}
            </ul>
        </div>
    );
};
