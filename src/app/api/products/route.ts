import { NextResponse } from 'next/server';
import { httpService } from '@/lib/utils/http';

const ROUTE = 'api/products';

export const GET = async () => {
    try {
        const response = await httpService.get<unknown>(ROUTE);
        console.log(response);
        return new NextResponse(JSON.stringify(response));
    } catch (error) {
        console.error(error);
        throw error;
    }
};
