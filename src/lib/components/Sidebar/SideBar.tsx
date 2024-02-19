import React from 'react';

import { Menu } from 'lucide-react';
import SideBarContainer from './SideBarContainer';

interface IProps {}

const SideBar = ({}: IProps) => {
    return (
        <>
            <div className="drawer">
                <input
                    id="sidebar-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <label
                        htmlFor="sidebar-drawer"
                        className="btn btn-square btn-ghost drawer-button no-animation btn-md text-base-content"
                    >
                        <Menu />
                    </label>
                </div>
            </div>
            <SideBarContainer />
        </>
    );
};

export default SideBar;
