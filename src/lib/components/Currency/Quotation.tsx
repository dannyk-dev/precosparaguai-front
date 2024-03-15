'use client';

import React, { Fragment, useState } from 'react';
import { Popover, RadioGroup, Transition } from '@headlessui/react';
import { QuotationOption } from './QuotationOption';
import { QuotationForm } from './QuotationForm';
import CurrencyData from './rates';
import { MdCurrencyExchange } from 'react-icons/md';

const Quotation = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(CurrencyData[0]);

    return (
        <div className=" w-fit max-w-sm px-4 ">
            <Popover className="relative">
                <Popover.Button className="btn btn-sm border-spacing-2 border border-base-300 bg-base-100 text-base-content outline-none backdrop-blur-lg backdrop-saturate-100 transition-all duration-200 ease-in-out hover:bg-slate-50 hover:text-base-content hover:shadow-md">
                    <MdCurrencyExchange className="text-base" />
                    Currency
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
                    <Popover.Panel className="absolute left-1/2 z-10   mt-3 w-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                            <div className="relative grid gap-8 bg-base-100 p-7 lg:grid-cols-2">
                                <div className="flex flex-col">
                                    <RadioGroup
                                        value={selectedCurrency}
                                        onChange={setSelectedCurrency}
                                    >
                                        <RadioGroup.Label className="sr-only">
                                            Test
                                        </RadioGroup.Label>
                                        <div className="flex flex-col space-y-4">
                                            <p className="max-w-52 ">
                                                Select the currency you want to
                                                switch to:{' '}
                                            </p>
                                            {CurrencyData.map((curr, index) => (
                                                <QuotationOption
                                                    curr={curr}
                                                    key={index}
                                                />
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <QuotationForm
                                    selectedCurrency={selectedCurrency}
                                />
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    );
};

export default Quotation;
