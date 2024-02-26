import React from 'react';
import { IProduct } from '@/lib/interfaces';
import Image from 'next/image';
import { Stars } from '@/lib/components';
import { useCalculateAverageRating } from '@/lib/hooks';
import { ShoppingCartIcon } from 'lucide-react';
import Button from '../shared';

interface ICardProps {
    item: IProduct;
}

export const Card = ({ item }: ICardProps) => {
    const averageRate = useCalculateAverageRating({ ...item.rating });

    return (
        <div className="card flex w-72 flex-col bg-base-200 shadow-sm shadow-white">
            <figure className="relative m-auto block h-40 w-full">
                <Image
                    className="m-auto max-h-full min-w-full rounded-t-lg object-contain p-8"
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                />
            </figure>
            <div className="card-body" style={{ flex: '1 1 300px' }}>
                <h5 className="card-title mb-4 line-clamp-2 h-min flex-auto text-ellipsis">
                    {item.title}
                </h5>
                <div className="mb-5  mt-2.5 flex  flex-col items-center ">
                    <div className="mb-5 flex">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <Stars averageRate={averageRate} />
                        </div>
                        <span className="ms-3 rounded bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-content">
                            {averageRate}
                        </span>
                    </div>
                    <div className="card-actions">
                        <span className="base-content text-xl font-bold">
                            $599
                        </span>
                        <Button
                            variant="primary"
                            variantSize="small"
                            className="place-content-center  text-sm font-bold"
                            Icon={ShoppingCartIcon}
                        >
                            Add to Cart
                        </Button>
                        {/* <button className="btn btn-outline btn-accent btn-sm font-bold text-accent-content">
                            <ShoppingCartIcon />
                            Add to Cart
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
