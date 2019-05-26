import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorCode, NetworkError} from './network-error';

@Injectable({providedIn: 'root'})
export class NetworkService {

    private serverAddress = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {}

    // MARK: Data and Error handlers

    private handleData(res: Response): Promise<any> {
        return Promise.resolve(res);
    }

    private handleError(error: any): Promise<any> {
        if (error.status === 500) {
            const errorCode = error.error.errorCode;
            const networkError = new NetworkError(error.status, errorCode);
            return Promise.reject(networkError);
        } else {
            const networkError = new NetworkError(error.status, ErrorCode.NetworkError);
            return Promise.reject(networkError);
        }
    }
}
