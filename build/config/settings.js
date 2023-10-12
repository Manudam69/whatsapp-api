"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const dotenv_parse_variables_1 = __importDefault(require("dotenv-parse-variables"));
let env = dotenv_1.default.config();
if (env.error)
    console.log(env.error);
env = (0, dotenv_parse_variables_1.default)(env.parsed);
exports.settings = {
    ENV: env.ENV || 'develop',
    PORT: env.PORT || 3000,
    SECRET: env.SECRET || 'somesecrettoken',
    TWILIO_ACCOUNT_SID: env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: env.TWILIO_AUTH_TOKEN,
    TWILIO_FROM: env.TWILIO_FROM,
    URL_TWILIO: 'https://content.twilio.com/v1',
};
