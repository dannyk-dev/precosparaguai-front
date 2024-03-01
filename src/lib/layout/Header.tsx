'use client';

import {
    BellIcon,
    HeartIcon,
    LogOutIcon,
    SearchIcon,
    UserCircleIcon,
} from 'lucide-react';
import { SideBar, Quotation } from '@/lib/components';
import { Button, Input } from '@/lib/components/shared';
import { RequireAuth } from '@/lib/hooks/auth';
import { useAuthStore } from '@/lib/store';

const Header = () => {
    const logout = useAuthStore((state) => state.logout);

    return (
        <header className="sticky top-0 z-10 w-full bg-base-100/80 shadow-md backdrop-blur-md">
            <div className="container">
                <div className="navbar bg-base-100">
                    <div className="navbar-start flex h-full items-center">
                        <SideBar />
                        <Button variant="link" to="/" variantSize="small">
                            PrecosNoParaguai
                        </Button>
                        <a className="mr-6 block text-2xl "></a>
                    </div>
                    <div className="navbar-center flex flex-1">
                        <Input
                            variant="simple"
                            variantSize="small"
                            type="text"
                            className="w-24 py-5 md:w-96"
                            placeholder="Search Products"
                            Icon={SearchIcon}
                        />
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
                                    Icon={LogOutIcon}
                                    onClick={() => {
                                        console.log('logging out');
                                        logout();
                                    }}
                                    to="/"
                                />
                            </RequireAuth>

                            <Button variant="link" Icon={HeartIcon} />
                            <Button variant="link" Icon={BellIcon}>
                                <span className="badge indicator-item badge-warning badge-xs"></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
