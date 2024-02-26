import React, { useEffect, useRef } from 'react';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.esm';

interface Props {
    delegate?: string;
    options?: Object;
    children: React.ReactNode;
}

const CustomCarousel = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const delegate = props.delegate || '[data-fancybox]';
            const options = props.options || {};

            Fancybox.bind(container, delegate, options);

            return () => {
                Fancybox.unbind(container);
                Fancybox.close();
            };
        }
    });

    return <div ref={containerRef}>{props.children}</div>;
};

export default CustomCarousel;
