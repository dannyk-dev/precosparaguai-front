import { ICategories } from '@/lib/interfaces';
import { SidebarCloseIcon } from 'lucide-react';
import React from 'react';

interface IProps {
    currentCategory: ICategories | undefined;
    openSubDrawer: boolean;
    setCurrentCategory: (currentCategory: ICategories | undefined) => void;
    setOpenSubDrawer: (openSubDrawer: boolean) => void;
}

const Subdrawer = ({
    currentCategory,
    setCurrentCategory,
    setOpenSubDrawer,
    openSubDrawer,
}: IProps) => {
    if (!currentCategory) return;

    const subCategories = Object.entries(currentCategory?.subcategories);

    return (
        <div className="drawer-side">
            <label
                htmlFor="sub-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
                onClick={() => setCurrentCategory(undefined)}
            ></label>

            <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                <li className="flex flex-row items-center justify-between ">
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
                {subCategories.map(([key, value], index) => (
                    <li>
                        <a href="#">
                            {key}
                            <span className="badge shadow-sm">
                                {value.length}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Subdrawer;
