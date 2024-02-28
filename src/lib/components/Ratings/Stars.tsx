'use client';

import { useRatingStars } from '@/lib/hooks';
import React from 'react';

interface IRatingProps {
    averageRate: number;
}

export const Stars = ({ averageRate }: IRatingProps) => {
    const stars = useRatingStars(averageRate);

    return (
        <>
            {stars.map((StarElem, index) => (
                <StarElem key={index} />
            ))}
        </>
    );
};
