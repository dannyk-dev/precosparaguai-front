'use client';

import React from 'react';
import { StaticImageData } from 'next/image';
import { BannerCard } from './styles';

interface IProps {
    images: StaticImageData[];
}

const BannerGroup = ({ images }: IProps) => {
    return (
        <div className="mx-auto grid h-80 w-full gap-8 md:grid-cols-2">
            {images.map((img) => (
                <BannerCard
                    image={img}
                    key={img.src}
                    className="mb-8 h-full w-full rounded-lg border border-gray-200 bg-gray-50 object-contain p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
                />
            ))}
        </div>
    );
};

export default BannerGroup;
