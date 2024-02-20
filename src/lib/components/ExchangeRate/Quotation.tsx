'use client';
import React, { Fragment, useState } from 'react';

import { motion } from 'framer-motion';
import { Popover, RadioGroup, Transition } from '@headlessui/react';
import Image from 'next/image';
import brFlag from '@/../public/assets/flag.png';
import pyFlag from '@/../public/assets/flag_py.png';
import argFlag from '@/../public/assets/flag_arg.png';

interface IProps {}

type countryRates = 'br' | 'py';

const exchangeRates = [
    {
        name: 'Brazilian Real',
        id: 'br',
        rate: 'R$ 5,03',
        flag: brFlag,
    },
    {
        name: 'Paraguaian Guarani',
        id: 'gr',
        rate: 'G$ 7250',
        flag: pyFlag,
    },
    {
        name: 'Argentine Pesos',
        id: 'peso',
        rate: '$ 1.120,00',
        flag: argFlag,
    },
];

const Quotation = ({}: IProps) => {
    const [dollarAmount, setDollarAmount] = useState<number>();
    const [convertedAmount, setConvertedAmount] = useState<number>();
    const [selected, setSelected] = useState(exchangeRates[0]);

    const convertToReal = () => {
        const conversionRate = 5.6;
        setConvertedAmount(Number(dollarAmount) * conversionRate);
    };

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
                                        <div className="flex flex-col space-y-2">
                                            <p className="max-w-52">
                                                Select the currency you want to
                                                switch to:{' '}
                                            </p>
                                            {exchangeRates.map((rate) => (
                                                <RadioGroup.Option
                                                    key={rate.id}
                                                    value={rate}
                                                    className={({
                                                        active,
                                                        checked,
                                                    }) =>
                                                        `
                                                        ${active ? 'badge bg-neutral shadow-sm' : ''} 
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
                                                    <RadioGroup.Label as="p">
                                                        {rate.rate}
                                                    </RadioGroup.Label>
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="dollarAmount"
                                        className="text-sm"
                                    >
                                        Dollar Amount:
                                    </label>
                                    <input
                                        id="dollarAmount"
                                        type="number"
                                        value={dollarAmount}
                                        onChange={(e) =>
                                            setDollarAmount(+e.target.value)
                                        }
                                        className="input input-primary w-full"
                                    />
                                    <label
                                        htmlFor="convertedAmount"
                                        className="text-sm"
                                    >
                                        Real Amount:
                                    </label>
                                    <input
                                        id="convertedAmount"
                                        type="text"
                                        value={convertedAmount}
                                        readOnly
                                        className="input input-primary w-full"
                                    />
                                </div>
                                <button
                                    onClick={convertToReal}
                                    className="btn btn-primary col-span-2"
                                >
                                    Convert
                                </button>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Quotation;
