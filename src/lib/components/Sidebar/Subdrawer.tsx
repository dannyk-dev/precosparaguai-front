import { ICategories } from '@/lib/interfaces';
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
    console.log(currentCategory);

    return (
        <div className="drawer-side">
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
                {/* {.map((item) => (
                        <li>
                            <a href="#">
                                {item.title}
                            </a>
                        </li>
                    ))} */}
            </ul>
        </div>
    );
};

export default Subdrawer;
