import { httpService } from '@/lib/utils/http';
import { NextResponse } from 'next/server';

const ROUTE = 'albums/1/photos';

export const GET = async () => {
    try {
        const response = await httpService.get<unknown>(ROUTE);

        return new NextResponse(JSON.stringify({ response }));
    } catch (error) {
        console.error(error);
        throw error;
    }
};
