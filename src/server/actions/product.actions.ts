import { NextResponse } from 'next/server';
import { httpService } from '@/lib/utils/http';

const ROUTE = 'products?limit=6';

export const getProducts = async () => {
    try {
        const response = await httpService.get<unknown>(ROUTE);
        return new Response(JSON.stringify(response));
        // return new NextResponse(JSON.stringify(response));
    } catch (error) {
        console.error(error);
        throw error;
    }
};
