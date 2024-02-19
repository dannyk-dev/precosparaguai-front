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
    // const SwiperElRef = useRef<Swiper | null>(null);

    // useEffect(() => {
    //     if (!SwiperElRef.current) {
    //         SwiperElRef.current = new Swiper('.swiper-container', {
    //             direction: 'horizontal',
    //             loop: true,
    //             slidesPerView: 4,
    //             centeredSlides: true,
    //             pagination: true,
    //             draggable: true,
    //         } as SwiperOptions);
    //     }

    //     return () => {
    //         if (SwiperElRef.current) {
    //             SwiperElRef.current.destroy();
    //         }
    //     };
    // }, []);

    // return (
    //     <div className="swiper-container">
    //         <div className="swiper-wrapper">
    //             {productsData.map((item, index) => (
    //                 <div className="swiper-slide" key={index}>
    //                     <Card item={item} />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <Swiper
            direction="horizontal"
            slidesPerView={4}
            centeredSlides={true}
            draggable={true}
        >
            <SwiperSlide>
                {productsData.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                        <Card item={item} />
                    </div>
                ))}
            </SwiperSlide>
        </Swiper>
    );
};
