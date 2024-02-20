import React from 'react';

import { RadioGroup } from '@headlessui/react';
import { ICurrency } from '@/lib/interfaces';
import Image from 'next/image';

interface IProps {
    rate: ICurrency;
}

export const QuotationOption = ({ rate }: IProps) => {
    return (
        <RadioGroup.Option
            key={rate.id}
            value={rate}
            className={({ active, checked }) =>
                `
                    ${active ? 'badge bg-neutral text-neutral-content shadow-sm' : ''} 
                    ${checked ? 'badge bg-neutral text-neutral-content shadow-sm' : 'badge shadow-sm'}
                        cursor-pointer p-4
                `
            }
        >
            <Image
                src={rate.flag}
                alt="Brazilian flag"
                width={24}
                height={24}
                className="mr-2"
            />
            <RadioGroup.Label as="p">{rate.rateString}</RadioGroup.Label>
        </RadioGroup.Option>
    );
};
