import { ICurrency } from '@/lib/interfaces';
import { moneyVO } from '@/lib/utils/format';
import React, { useMemo, useState } from 'react';

interface IProps {
    selectedCurrency: ICurrency;
}

// TODO format the value the user types on the dollar input
// TODO fix the limiting on the dollar input

export const QuotationForm = ({ selectedCurrency }: IProps) => {
    const [dollarAmount, setDollarAmount] = useState<string | undefined>();

    const convertedAmount = useMemo(() => {
        if (!dollarAmount) return moneyVO.format(0, selectedCurrency.id);

        return moneyVO.format(
            Number(dollarAmount) * selectedCurrency.rate,
            selectedCurrency.id
        );
    }, [dollarAmount, setDollarAmount, selectedCurrency]);

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
                        min={0}
                        maxLength={8}
                        onChange={(e) =>
                            setDollarAmount(e.target.value || undefined)
                        }
                        id="dollar-input"
                        className="min-w-xs input input-bordered w-52 text-sm text-base-content shadow-md focus:ring-0 focus:ring-offset-0"
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
                        className="input input-bordered w-52 max-w-xs text-sm text-base-content shadow-md focus:ring-0 focus:ring-offset-0"
                    />
                </div>
            </div>
        </>
    );
};
