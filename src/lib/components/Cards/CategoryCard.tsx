import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/lib/components/shared';

interface IProps {
    icon: string;
    title: string;
}

export const CategoryCard = ({ icon, title }: IProps) => {
    return (
        <div className="h-fit w-72 rounded-xl">
            <Button variant="link" variantSize="small" className="mt-5">
                <Image
                    src={icon}
                    alt="icon"
                    width={256}
                    height={256}
                    objectFit="contain"
                />
            </Button>
        </div>
    );
};
