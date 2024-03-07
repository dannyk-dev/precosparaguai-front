import { bannerFixture } from '@/lib/utils/fixtures/BannerFixture';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
    try {
        const banner = bannerFixture.toStructure();

        return new NextResponse(JSON.stringify(banner), {
            status: 200,
        });
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 400,
        });
    }
};
