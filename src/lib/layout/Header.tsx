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
import { useAuthStore } from '@/lib/store';

import precosLogo from '@/../public/assets/precos_logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const logout = useAuthStore((state) => state.logout);

    return (
        <header className="relative top-0 z-10 w-full bg-base-100/60 pb-2 backdrop-blur-sm">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-start flex h-full items-center justify-start">
                        <SideBar />
                        <Input
                            variant="simple"
                            variantSize="small"
                            type="text"
                            className="w-20 py-5 md:w-80"
                            placeholder="Search Products"
                            Icon={SearchIcon}
                        />
                    </div>
                    <div className="navbar-center flex flex-1">
                        {/* <Link href="/"> */}

                        {/* </Link> */}
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
                    <div className="navbar-end">
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
                                    onClick={() => {
                                        console.log('logging out');
                                        logout();
                                    }}
                                />
                            </RequireAuth>

                            <Button variant="link" Icon={HeartIcon} />
                            <Button variant="link" Icon={BellIcon}>
                                <span className="badge indicator-item badge-warning badge-xs text-warning-content">
                                    5
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
