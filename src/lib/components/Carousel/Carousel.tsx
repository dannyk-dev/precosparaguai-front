'use client';

import React, { ReactNode, useRef, useState } from 'react';

interface IProps {
    children: ReactNode;
    index: number;
}

const Carousel = ({ children }: IProps) => {
    return <div className="mx-4">{children}</div>;
};

export default Carousel;
