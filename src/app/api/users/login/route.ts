import { httpService } from '@/lib/utils/http';
import { UnauthorizedException } from '@/lib/utils/http/exceptions/UnauthorizedException';
import { NextResponse } from 'next/server';

const ROUTE = 'api/login';

export const POST = async (req: Request, res: Response) => {
    try {
        const userData = await req.json();
        const response = await httpService.post<unknown>(ROUTE, userData);

        return new NextResponse(JSON.stringify(response));
    } catch (error) {
        return new NextResponse(JSON.stringify({ error }), {
            status: 401,
        });
    }
};
