import { httpService } from '@/lib/utils/http';
import { NextResponse } from 'next/server';

const ROUTE = 'products/categories';

export const GET = async () => {
    try {
        const response = await httpService.get<unknown>(ROUTE);

        console.log(response);
        return new NextResponse(JSON.stringify(response));
    } catch (err) {
        console.error(err);
        throw err;
    }
};
