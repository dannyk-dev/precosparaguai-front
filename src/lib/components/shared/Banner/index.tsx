'use client';

import { StaticImageData } from 'next/image';
import { BannerCard } from './styles';
import BannerGroup from './BannerGroup';

interface IProps {
    image: string;
}

const Banner = ({ image }: IProps) => {
    return (
        <BannerCard
            image={image}
            className="mb-8  w-full rounded-lg border md:p-12"
        />
    );
};

export { BannerGroup, Banner };
