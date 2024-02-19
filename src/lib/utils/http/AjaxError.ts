import { HTTPError } from 'ky';

export interface IAjaxError extends HTTPError {
    message: string;
    status: string;
}

export class AjaxError<
        Response extends HTTPError['response'] = HTTPError['response'],
        Request extends HTTPError['request'] = HTTPError['request'],
    >
    extends HTTPError
    implements AjaxError
{
    message: string;
    status: number;
    name: string;

    constructor(
        status: number,
        response: Response,
        request: Request,
        options: HTTPError['options'],
        message?: string
    ) {
        super(response, request, options);
        this.status = status;
        // @ts-ignore
        this.message = message ?? response?.body?.message ?? 'Ajax Error';
        this.name = 'AjaxError';
    }
}
