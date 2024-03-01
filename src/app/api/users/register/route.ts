import { NextResponse } from "next/server";



export const POST = async (req: Request, res: Response) => {
    try {

    } catch (error: unknown) {
        console.error(error);
        return new NextResponse(JSON.stringify({error: error.message}), {
            status: 400
        });
    }
}



