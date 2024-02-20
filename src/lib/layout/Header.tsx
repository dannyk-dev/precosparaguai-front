import { BellIcon, HeartIcon, UserCircleIcon } from 'lucide-react';
import { SideBar } from '@/lib/components/Sidebar';
import { Button } from '../components/shared';
import Quotation from '../components/Currency/Quotation';

const Header = () => {
    return (
        <header className="sticky top-0 z-10 w-full bg-base-100/80 shadow-md backdrop-blur-md">
            <div className="container">
                <div className="navbar bg-base-100">
                    <div className="navbar-start flex h-full items-center">
                        <SideBar />
                        <a className="mr-6 block text-2xl ">PrecosNoParaguai</a>
                    </div>
                    <div className="navbar-center flex flex-1">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search Products"
                                name="productSearch"
                                id="productSearch"
                                className=" input input-bordered w-24 focus:outline-none md:w-96 "
                            />
                        </div>
                    </div>
                    <div className="navbar-end">
                        <Quotation />
                        <Button variant="link" Icon={UserCircleIcon} />
                        <Button variant="link" Icon={HeartIcon} />
                        <Button variant="link" Icon={BellIcon}>
                            <span className="badge indicator-item badge-primary badge-xs"></span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
