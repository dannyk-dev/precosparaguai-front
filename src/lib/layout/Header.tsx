import { BellIcon, Menu, SearchIcon } from 'lucide-react';
import SideBarContainer from '../components/Sidebar/SideBarContainer';
import SideBar from '../components/Sidebar/SideBar';

const Header = () => {
    return (
        <header className="sticky top-0 z-10 w-full bg-base-100/80 shadow-md backdrop-blur-md">
            <div className="container">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <SideBar />
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl">
                            PrecosNoParaguai
                        </a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-circle btn-ghost">
                            <SearchIcon />
                        </button>
                        <button className="btn btn-circle btn-ghost">
                            <div className="indicator">
                                <BellIcon />
                                <span className="badge indicator-item badge-primary badge-xs"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
