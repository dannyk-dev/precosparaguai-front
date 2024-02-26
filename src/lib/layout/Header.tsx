import { BellIcon, HeartIcon, SearchIcon, UserCircleIcon } from 'lucide-react';
import { SideBar } from '@/lib/components/Sidebar';
import Button from '../components/shared';
import Quotation from '../components/Currency/Quotation';
import { Input } from '../components/shared/Inputs';

const Header = () => {
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
                        <div className="form-control">
                            <Input
                                variant="simple"
                                variantSize="small"
                                type="text"
                                className="w-24 py-5 md:w-96"
                                placeholder="Search Products"
                                Icon={SearchIcon}
                            />
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Quotation />
                        <div className="flex items-center justify-center">
                            <Button
                                variant="link"
                                to="/register"
                                Icon={UserCircleIcon}
                            />
                            <Button variant="link" Icon={HeartIcon} />
                            <Button variant="link" Icon={BellIcon}>
                                <span className="badge indicator-item badge-primary badge-xs"></span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
