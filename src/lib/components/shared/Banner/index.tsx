'use client';

import { StaticImageData } from 'next/image';
import { BannerCard } from './styles';
import BannerGroup from './BannerGroup';

interface IProps {
    image: StaticImageData;
}

export const Banner = ({ image }: IProps) => {
    return (
        <BannerCard
            image={image}
            className="mb-8 h-60 w-full rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
        />
    );
};

export { BannerGroup };
