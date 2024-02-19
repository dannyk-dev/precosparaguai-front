import React from 'react';

import { Menu } from 'lucide-react';
import Drawer from './Drawer';

interface IProps {}

const SideBar = ({}: IProps) => {
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
            <Drawer />
        </div>
    );
};

export default SideBar;
