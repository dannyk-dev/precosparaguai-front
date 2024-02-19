'use client';

import { useTheme } from 'next-themes';
import React from 'react';

type Props = {
    greeting: string;
    btnText?: string;
};

export const Greeting = ({ greeting }: Props) => {
    return (
        <>
            <h4>{greeting}</h4>
            {/* {theme === 'dark' ? (
                <button
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    {btnText}
                </button>
            ) : (
                <button
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                    {btnText}
                </button>
            )} */}
        </>
    );
};
