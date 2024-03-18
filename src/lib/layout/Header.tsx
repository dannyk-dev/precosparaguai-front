'use client';

import React, { useState } from 'react';
import {
    BellIcon,
    HeartIcon,
    LayoutDashboardIcon,
    LogOutIcon,
    SearchIcon,
    UserCircleIcon,
} from 'lucide-react';
import { SideBar, Quotation } from '@/lib/components';
import { Button, Input } from '@/lib/components/shared';
import { RequireAuth } from '@/lib/hooks/auth';
import { useAuthStore } from '@/lib/store';

import precosLogo from '@/../public/assets/precos_logo.png';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect } from 'react';
import { useScroll } from '@/lib/hooks';
import { useMediaQuery } from 'react-responsive';
import '@/lib/styles/globals.css';

interface IHeaderProps {
    noFixed?: boolean;
}

const Header = ({ noFixed = false }: IHeaderProps) => {
    const [shownSearchbar, setShownSearchbar] = useState<boolean>(false);
    const logout = useAuthStore((state) => state.logout);

    const { isScrolled } = useScroll();
    const controls = useAnimation();
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)',
    });

    const isAlterColor = isScrolled || noFixed;

    useEffect(() => {
        controls.start({
            backgroundColor: isAlterColor ? '#f3f4f6f7' : 'transparent',
            boxShadow: isAlterColor
                ? '0px 2px 5px 0px rgba(0, 0, 0, 0.1)'
                : 'none',
            backdropFilter: isAlterColor ? 'blur(8px) saturate(1px)' : 'none',
            position: isAlterColor ? 'sticky' : 'fixed',
            height: isAlterColor ? '4rem' : '5rem',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        });
    }, [isScrolled, controls]);

    const toggleSearchbar = useCallback(() => {
        setShownSearchbar((prev) => !prev);
    }, [setShownSearchbar]);

    return (
        <motion.header
            className="top-0  z-10 flex w-full items-center  "
            initial={{
                backgroundColor: noFixed ? '#f3f4f6f7' : 'transparent',
                position: 'sticky',
                backdropFilter: 'none',
                height: '4rem',
                boxShadow: 'none',
            }}
            animate={noFixed ? {} : controls}
        >
            <div className="container relative">
                <div className="navbar ">
                    <div className="navbar-start flex h-full items-center justify-start">
                        <SideBar
                            menuBtnStyles={{
                                color: isAlterColor
                                    ? '#222'
                                    : 'rgba(255, 255, 255, 0.8)',
                            }}
                        />

                        {!isMobile ? (
                            <Input
                                variant="simple"
                                variantSize="xsmall"
                                type="text"
                                className="w-20 py-4  text-xs shadow-lg transition-all duration-300 ease-in-out md:w-60 md:focus-within:w-80 md:hover:w-80 md:focus:w-80"
                                placeholder="Search Products"
                                Icon={SearchIcon}
                            />
                        ) : (
                            <Button
                                variant="primary"
                                variantSize="small"
                                Icon={SearchIcon}
                                onClick={toggleSearchbar}
                                className={`btn-ghost btn-sm ml-5 block h-full  md:btn-md ${isAlterColor ? 'text-base-content' : 'text-white'}`}
                            />
                        )}
                    </div>
                    <div className="navbar-center flex">
                        <Button
                            variant="link"
                            to="/"
                            variantSize="large"
                            className={`h-16 w-44 -translate-y-2 object-contain py-0 mix-blend-multiply md:h-20 md:w-52 ${shownSearchbar && ' hidden'}`}
                        >
                            <Image
                                src={precosLogo}
                                alt="Precos No paraguai"
                                className="h-full w-full object-contain"
                            />
                        </Button>

                        <Input
                            variant="simple"
                            variantSize="xsmall"
                            type="text"
                            className={`-left-1/2 top-0 mx-auto w-full translate-x-2/3  py-4 text-xs shadow-lg transition-all duration-300 md:w-60 md:focus-within:w-80  md:hover:w-80 md:focus:w-80 ${!shownSearchbar ? 'hide absolute ' : ''}`}
                            placeholder="Search Products"
                        />
                    </div>
                    <div className="navbar-end lg:flex">
                        {!isMobile && <Quotation />}
                        <div className="flex items-center justify-center">
                            {/* <RequireAuth inverseAuthValidation={true}>
                                <Button
                                    variant="link"
                                    to="/register"
                                    Icon={UserCircleIcon}
                                    className={`${isAlterColor ? 'text-base-content' : 'text-white'}`}
                                />
                            </RequireAuth>
                            <RequireAuth>
                                <Button
                                    variant="link"
                                    to="/dashboard"
                                    Icon={LayoutDashboardIcon}
                                    className={`btn-sm md:btn-md ${isAlterColor ? 'text-base-content' : 'text-white'}`}
                                />
                                <Button
                                    variant="link"
                                    to="/"
                                    Icon={LogOutIcon}
                                    onClick={logout}
                                    className={`${isAlterColor ? 'text-base-content' : 'text-white'}`}
                                />
                            </RequireAuth>
 */}
                            <Button
                                variant="link"
                                Icon={HeartIcon}
                                className={`${isAlterColor || noFixed ? 'text-base-content' : 'text-white'} ${shownSearchbar && ' hidden'}`}
                            />
                            <Button
                                variant="link"
                                Icon={BellIcon}
                                className={`hidden md:block ${isAlterColor ? 'text-base-content' : 'text-white'}`}
                            >
                                <span className="badge indicator-item badge-warning badge-xs text-warning-content">
                                    5
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
