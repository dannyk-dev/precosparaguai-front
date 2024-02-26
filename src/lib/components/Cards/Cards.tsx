'use client';

import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import { IProduct } from '@/lib/interfaces';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/';

interface IProps {
    productsData: IProduct[];
}

export const Cards = ({ productsData }: IProps) => {
    return (
        <div className="flex gap-4">
            {productsData.map((item, index) => (
                <div className="swiper-slide" key={index}>
                    <Card item={item} />
                </div>
            ))}
        </div>
    );
};
