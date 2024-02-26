'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Providers } from '../components/providers';
import styled from 'styled-components';

interface IAuthLayoutProps {
    children: ReactNode;
}

const PatternBackground = styled.div`
    background-image: url("data:image/svg+xml,%3Csvg  viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3e3e3' fill-opacity='0.6'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
`;

const AuthLayout = ({ children }: IAuthLayoutProps) => {
    return (
        <Providers>
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="relative h-screen w-full overflow-hidden bg-gradient-to-bl from-indigo-600 to-blue-400">
                    <PatternBackground />
                    {children}
                </main>
                <Footer />
            </div>
        </Providers>
    );
};

export default AuthLayout;
