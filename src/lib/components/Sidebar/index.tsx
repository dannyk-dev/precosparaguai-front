import React from 'react';

import { Menu } from 'lucide-react';
import { Drawer } from './Drawer';
import { useScroll } from '@/lib/hooks';

interface IProps {
    menuBtnStyles?: React.CSSProperties;
}

export const SideBar = ({ menuBtnStyles }: IProps) => {
    return (
        <div className="drawer z-20 mr-6 w-fit">
            <input id="main-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label
                    htmlFor="main-drawer"
                    className="btn btn-ghost drawer-button"
                    style={menuBtnStyles}
                >
                    <Menu />
                    Menu
                </label>
            </div>
            <Drawer />
        </div>
    );
};
