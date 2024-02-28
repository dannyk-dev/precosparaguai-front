'use client';

import React, { ReactNode } from 'react';
import { Carousel } from 'flowbite-react';
import { MoveLeft, MoveRight } from 'lucide-react';

interface IProps {
    children: ReactNode;
}

export const Slider = ({ children }: IProps) => {
    return (
        <Carousel
            indicators={true}
            slide={false}
            leftControl={<MoveLeft />}
            rightControl={<MoveRight />}
        >
            {children}
        </Carousel>
    );
};
