'use client';

import React from 'react';
import { Greeting } from '@/lib/components/shared';
import { NextPage } from 'next';

const ProductsHome: NextPage = () => {
    return (
        <div className="flex h-96 flex-col items-center justify-center space-y-12">
            <Greeting greeting="Hello World!" />

            <div>
                <button className="btn btn-neutral">Testing</button>
                {/* <Button variant="primary">Button Test</Button>
                <Button variant="cta">Another Test</Button> */}
            </div>
        </div>
    );
};

export default ProductsHome;
