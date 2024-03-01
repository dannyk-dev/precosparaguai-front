import React from 'react';
import { Spinner } from './Spinner';

export const PageLoader = () => {
    return (
        <div className="flex w-full justify-center">
            <Spinner />
        </div>
    );
};
