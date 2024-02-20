'use client';

import React, { Fragment, useState } from 'react';
import { Popover, RadioGroup, Transition } from '@headlessui/react';
import brFlag from '@/../public/assets/flag.png';
import pyFlag from '@/../public/assets/flag_py.png';
import argFlag from '@/../public/assets/flag_arg.png';
import { QuotationOption } from './QuotationOption';
import { ICurrency } from '@/lib/interfaces';
import { QuotationForm } from './QuotationForm';
import { moneyVO } from '@/lib/utils/format/Money';

const exchangeRates: ICurrency[] = [
    {
        name: 'Brazilian Real',
        id: 'BRL',
        rate: 5.03,
        rateString: moneyVO.format(5.03, 'BRL'),
        flag: brFlag,
    },
    {
        name: 'Paraguaian Guarani',
        id: 'PYG',
        rate: 7250,
        rateString: moneyVO.format(7250, 'PYG'),
        flag: pyFlag,
    },
    {
        name: 'Argentine Pesos',
        id: 'ARS',
        rate: 1120,
        rateString: moneyVO.format(1120, 'ARS'),
        flag: argFlag,
    },
];

const Quotation = () => {
    const [selected, setSelected] = useState(exchangeRates[0]);

    return (
        <div className="w-fit max-w-sm px-4">
            <Popover className="relative">
                <Popover.Button className="btn btn-outline btn-neutral btn-sm text-base-content outline-none hover:text-neutral-content">
                    Quotation
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <RadioGroup
                                        value={selected}
                                        onChange={setSelected}
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Test
                                        </RadioGroup.Label>
                                        <div className="flex flex-col space-y-4">
                                            <p className="max-w-52 ">
                                                Select the currency you want to
                                                switch to:{' '}
                                            </p>
                                            {exchangeRates.map((rate) => (
                                                <QuotationOption rate={rate} />
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <QuotationForm selected={selected} />
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Quotation;
