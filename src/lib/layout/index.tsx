import { type ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Providers } from '../components/providers';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    // get the current component state whether it's error, loading or something else

    return (
        <Providers>
            <div className="flex min-h-screen flex-col">
                <Header />

                <main className="container">{children}</main>

                <Footer />
            </div>
        </Providers>
    );
};

export default Layout;
