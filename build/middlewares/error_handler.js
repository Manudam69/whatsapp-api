"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMiddleware = exports.UnauthorizedError = exports.HTTPError = void 0;
const logger_1 = __importDefault(require("@helpers/logger"));
class HTTPError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.HTTPError = HTTPError;
class UnauthorizedError extends HTTPError {
    constructor() {
        super(401, 'Unauthorized');
    }
}
exports.UnauthorizedError = UnauthorizedError;
const handleErrorMiddleware = (err, req, res) => {
    if (err instanceof HTTPError) {
        const { statusCode, message } = err;
        logger_1.default.error(`Error ${statusCode}: ${message}`);
        res.status(statusCode).json({
            statusCode,
            message,
        });
    }
    else {
        logger_1.default.error(`Server Error ${err}`);
        res.status(500).json({
            statusCode: 500,
            message: 'Internal Server Error',
        });
    }
};
exports.handleErrorMiddleware = handleErrorMiddleware;
