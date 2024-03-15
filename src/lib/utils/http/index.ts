import { HttpService } from './HttpService';
import { KyClient } from './KyClient';
import {
    InternalServerException,
    ResourceNotFoundException,
    UnauthorizedException,
} from './exceptions';
import { AjaxError } from './AjaxError';

const headers = {
    'Content-Type': 'application/json',
};

export const host = process.env.HOST;

export const httpService = new HttpService(
    new KyClient({ prefixUrl: host, headers })
);

export {
    InternalServerException,
    ResourceNotFoundException,
    UnauthorizedException,
};

export { AjaxError };
