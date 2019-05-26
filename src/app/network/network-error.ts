export enum ErrorCode {
    None = 0,
    NetworkError = 1
}

export class NetworkError {
    constructor(
        public statusCode: number,
        public errorCode: ErrorCode = ErrorCode.None
    ) {}
}
