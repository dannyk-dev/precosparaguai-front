import React from 'react';

interface IProps {}

const SideBarContainer = (props: IProps) => {
    return (
        <>
            <div className="drawer-side">
                <label
                    htmlFor="sidebar-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
                    <li>
                        <a>Sidebar Item 1</a>
                    </li>
                    <li>
                        <a>Sidebar Item 2</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SideBarContainer;
