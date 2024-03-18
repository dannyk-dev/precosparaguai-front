import type { Metadata, Viewport } from 'next';

import { fontSans } from '@/lib/styles/fonts';
import { cn } from '@/lib/styles/utils';

import '@/lib/styles/globals.css';
import Head from 'next/head';

const APP_NAME = 'Preços no Paraguai';

export const metadata: Metadata = {
    title: APP_NAME,
    description: '',
    applicationName: APP_NAME,
    appleWebApp: {
        capable: true,
        title: APP_NAME,
        statusBarStyle: 'default',
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        title: 'Preços no Paraguai',
        description: 'Preços no Paraguai',
        images: {
            url: '',
            alt: 'Preços no Paraguai',
        },
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en" suppressHydrationWarning={true} data-theme="light">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
                />
            </Head>
            <body
                className={cn(
                    'bg-background min-h-screen overflow-x-hidden font-sans antialiased',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
