'use client';

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
import { useAuthStore, useGlobalStore } from '@/lib/store';

import precosLogo from '@/../public/assets/precos_logo.png';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScroll } from '@/lib/hooks';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const controls = useAnimation();
    const { isScrolled } = useScroll();
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)',
    });

    const loading = useGlobalStore((state) => state.loading);
    const logout = useAuthStore((state) => state.logout);

    useEffect(() => {
        controls.start({
            backgroundColor: isScrolled ? '#fcfcfcce' : 'transparent',
            backdropFilter: isScrolled ? 'blur(8px) saturate(1px)' : 'none',
            position: isScrolled ? 'sticky' : 'fixed',
        });
    }, [isScrolled, controls]);

    return (
        <motion.header
            className=" top-0 z-10 w-full"
            initial={{ backgroundColor: 'transparent', position: 'sticky' }}
            animate={controls}
            style={{
                transition: 'all .3s ease-in-out',
            }}
        >
            <div className="container">
                <div className="navbar ">
                    <div className="navbar-start flex  h-full items-center justify-start">
                        <SideBar />
                        {!isMobile && (
                            <Input
                                variant="simple"
                                variantSize="xsmall"
                                type="text"
                                className="w-20 py-5 md:w-80 "
                                placeholder="Search Products"
                                Icon={SearchIcon}
                            />
                        )}
                    </div>
                    <div className="navbar-center flex ">
                        <Button
                            variant="link"
                            to="/"
                            variantSize="large"
                            className="h-20 w-60 -translate-y-2 object-contain py-0 mix-blend-multiply"
                        >
                            <Image
                                src={precosLogo}
                                alt="Precos No paraguai"
                                className="h-full w-full object-contain"
                            />
                        </Button>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <Quotation />
                        <div className="flex items-center justify-center">
                            <RequireAuth inverseAuthValidation={true}>
                                <Button
                                    variant="link"
                                    to="/register"
                                    Icon={UserCircleIcon}
                                />
                            </RequireAuth>
                            <RequireAuth>
                                <Button
                                    variant="link"
                                    to="/dashboard"
                                    Icon={LayoutDashboardIcon}
                                />
                                <Button
                                    variant="link"
                                    to="/"
                                    Icon={LogOutIcon}
                                    onClick={logout}
                                />
                            </RequireAuth>

                            <Button
                                variant="link"
                                Icon={HeartIcon}
                                className={`${isScrolled ? 'text-base-content' : 'text-white'}`}
                            />
                            <Button variant="link" Icon={BellIcon}>
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
