import React from 'react';

type ScrollEntity = {
    isScrolled: boolean;
    scrollDistance: number;
};

export const useScroll = () => {
    const [scroll, setScroll] = React.useState<ScrollEntity>({
        isScrolled: false,
        scrollDistance: 0,
    });

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            setScroll({
                isScrolled: scrollTop > 0,
                scrollDistance: scrollTop,
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scroll;
};
