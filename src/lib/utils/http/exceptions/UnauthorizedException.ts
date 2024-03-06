import { HTTPError } from 'ky';
import { AjaxError } from '../AjaxError';

export class UnauthorizedException extends AjaxError {
    constructor(
        response: Response,
        request: Request,
        options: HTTPError['options'],
        message?: string
    ) {
        super(
            401,
            response,
            request,
            options,
            message
                ? message
                : 'Unauthorize: You are not authorized to access this resource'
        );
        this.name = 'UnauthorizedException';
    }
}
