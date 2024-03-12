import React, { useEffect, useState } from 'react';
import 'react-grid-layout/css/styles.css';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { IBanner, PositionOptions } from '@/lib/types/ui.types';
import Image from 'next/image';
import { Slider } from '../../Slider';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface IGridProps {
    banners: IBanner[];
}

export const Grid = ({ banners }: IGridProps) => {
    const calculateLayout = (pos: PositionOptions) => {
        switch (pos) {
            case 'left':
                return {
                    x: 0,
                    y: 0,
                    w: 6,
                    h: 4,
                };
            case 'right':
                return {
                    x: 6,
                    y: 0,
                    w: 6,
                    h: 4,
                };
            case 'top':
                return {
                    x: 0,
                    y: 0,
                    w: 12,
                    h: 4,
                };
            case 'bottom':
                return {
                    x: 0,
                    y: 0,
                    w: 12,
                    h: 4,
                };
            default:
                return {
                    x: 0,
                    y: 0,
                    w: 12,
                    h: 4,
                };
        }
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{
                lg: 12,
                md: 10,
                sm: 6,
                xs: 4,
                xxs: 2,
            }}
            rowHeight={30}
            isDraggable={true}
        >
            {Object.entries(groupedBanners).map(([pos, banners]) => {
                return (
                    <div
                        key={pos}
                        className="flex flex-col"
                        data-grid={calculateLayout(pos as PositionOptions)}
                    >
                        {banners.length === 1 ? (
                            <Image
                                src={banners[0].image_url}
                                alt={banners[0].image_alt}
                                layout="responsive"
                                width={100}
                                height={100}
                            />
                        ) : (
                            <Slider
                                variant="full"
                                images={banners.reduce((acc, banner) => {
                                    acc.push(banner.image_url);

                                    return acc;
                                }, [] as string[])}
                            />
                        )}
                    </div>
                );
            })}
        </ResponsiveGridLayout>
    );
};
