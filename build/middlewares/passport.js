"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRefresh = exports.authenticate = exports.JWTStrategy = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_jwt_1 = require("passport-jwt");
const settings_1 = require("@config/settings");
const error_handler_1 = require("./error_handler");
exports.JWTStrategy = new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: settings_1.settings.SECRET,
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return done(null, { id: payload.user_id });
    }
    catch (error) {
        done(error, false);
    }
}));
const authenticate = (req, res, next) => passport_1.default.authenticate('jwt', { session: false }, (error, user, info, status) => {
    if ((info === null || info === void 0 ? void 0 : info.message) == 'jwt expired')
        throw new error_handler_1.HTTPError(401, 'Expired');
    if (!user)
        throw new error_handler_1.UnauthorizedError();
    req.user = user;
    next();
})(req, res, next);
exports.authenticate = authenticate;
const authenticateRefresh = (req, res, next) => passport_1.default.authenticate('jwt', { session: false }, (error, user, info, status) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((info === null || info === void 0 ? void 0 : info.message) == 'No auth token')
            throw new error_handler_1.HTTPError(401, 'Unauthorized');
        if ((info === null || info === void 0 ? void 0 : info.message) == 'jwt expired') {
            const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            const payload = jsonwebtoken_1.default.verify(token, settings_1.settings.SECRET, { ignoreExpiration: true });
            req.user = { id: payload.user_id };
            return next();
        }
        req.user = user;
        next();
    }
    catch (error) {
        next(error);
    }
}))(req, res, next);
exports.authenticateRefresh = authenticateRefresh;
