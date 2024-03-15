import { ICategories } from '@/lib/interfaces';
import { SidebarCloseIcon } from 'lucide-react';
import React from 'react';
import { SubCategoryItem } from './SubCategoryItem';

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

            <ul className="menu min-h-full w-full bg-base-200  p-4 text-base-content md:w-1/2 lg:w-80">
                <li className="flex flex-row items-center justify-between">
                    <h4 className="block cursor-default bg-transparent hover:bg-transparent focus:bg-transparent">
                        {currentCategory.title}
                    </h4>
                    <label
                        className="btn btn-ghost btn-sm text-base-content "
                        htmlFor="sub-drawer"
                        onClick={() => {
                            document.body.style.overflow = 'auto';
                            setCurrentCategory(undefined);
                        }}
                    >
                        <SidebarCloseIcon />
                    </label>
                </li>
                <div className="divider"></div>

                {subCategories.map((items, index) => (
                    <SubCategoryItem items={items} key={index} />
                ))}
            </ul>
        </div>
    );
};
