'use client';
import { type ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Providers } from '../components/providers';
import { useGlobalStore } from '../store';
import { PageLoader } from '../components/shared';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const loading = useGlobalStore((state) => state.loading);

    return (
        <Providers>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main>{loading ? <PageLoader /> : children}</main>
                <Footer />
            </div>
        </Providers>
    );
};

export default Layout;
