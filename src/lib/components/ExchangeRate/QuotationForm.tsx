import { ICurrency } from '@/lib/interfaces';
import { moneyVO } from '@/lib/utils/format/Money';
import React, { useMemo, useState } from 'react';

interface IProps {
    selected: ICurrency;
}

export const QuotationForm = ({ selected }: IProps) => {
    const [dollarAmount, setDollarAmount] = useState<number | undefined>();

    const convertedAmount = useMemo(() => {
        if (!dollarAmount) return moneyVO.format(0, selected.id);

        return moneyVO.format(
            Number(dollarAmount) * selected.rate,
            selected.id
        );
    }, [dollarAmount, setDollarAmount, selected]);

    return (
        <>
            <div className="flex flex-col items-center justify-end space-y-4">
                <div className="mb-5">
                    <label
                        htmlFor="dollar-input"
                        className="mb-2 block text-sm font-medium text-gray-900"
                    >
                        Value in Dollar
                    </label>
                    <input
                        type="number"
                        placeholder="Enter your dollar amount"
                        value={dollarAmount}
                        onChange={(e) =>
                            setDollarAmount(+e.target.value || undefined)
                        }
                        id="dollar-input"
                        className=" block w-52 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-gray-400 focus:ring-0 focus:ring-offset-0"
                    />
                </div>
                <div>
                    <label
                        htmlFor="convertedAmount"
                        className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                        Currency
                    </label>
                    <input
                        id="convertedAmount"
                        type="text"
                        value={convertedAmount}
                        readOnly
                        className="block w-52 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-gray-400 focus:ring-0 focus:ring-offset-0"
                    />
                </div>
            </div>
        </>
    );
};
