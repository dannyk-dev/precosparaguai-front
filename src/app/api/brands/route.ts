import { BrandFactory } from '@/lib/utils/fixtures/BrandsFixture';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const brands = BrandFactory;

        return new NextResponse(JSON.stringify(brands), {
            status: 200,
        });
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error }), {
            status: 500,
        });
    }
};
