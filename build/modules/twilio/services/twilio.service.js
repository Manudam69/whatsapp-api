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
exports.TwilioService = void 0;
const twilio_1 = __importDefault(require("twilio"));
const axios_1 = __importDefault(require("axios"));
const settings_1 = require("@config/settings");
const client = (0, twilio_1.default)(settings_1.settings.TWILIO_ACCOUNT_SID, settings_1.settings.TWILIO_AUTH_TOKEN);
const auth = {
    username: settings_1.settings.TWILIO_ACCOUNT_SID,
    password: settings_1.settings.TWILIO_AUTH_TOKEN,
};
class TwilioService {
    create_text_template(body) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content`;
            const template = {
                friendly_name: body.name,
                language: (_a = body.language) !== null && _a !== void 0 ? _a : 'es_MX',
                variables: Object.assign({}, body.variables),
                types: {
                    'twilio/text': {
                        body: body.message,
                    },
                },
            };
            const { data, status } = yield axios_1.default.post(url, template, {
                headers: { 'Content-Type': 'application/json' },
                auth,
            });
            console.log(status, data);
            return data;
        });
    }
    create_media_template(body) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content`;
            const template = {
                friendly_name: body.name,
                language: (_a = body.language) !== null && _a !== void 0 ? _a : 'es_MX',
                variables: Object.assign({}, body.variables),
                types: {
                    'twilio/media': {
                        body: body.message,
                        media: [body.media],
                    },
                },
            };
            const { data, status } = yield axios_1.default.post(url, template, {
                headers: { 'Content-Type': 'application/json' },
                auth,
            });
            console.log(status, data);
            return data;
        });
    }
    create_list_picker_template(body) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content`;
            const template = {
                friendly_name: body.name,
                language: (_a = body.language) !== null && _a !== void 0 ? _a : 'es_MX',
                variables: Object.assign({}, body.variables),
                types: {
                    'twilio/list-picker': {
                        body: body.message,
                        button: body.label,
                        items: [...body.items],
                    },
                },
            };
            const { data, status } = yield axios_1.default.post(url, template, {
                headers: { 'Content-Type': 'application/json' },
                auth,
            });
            console.log(status, data);
            return data;
        });
    }
    create_quick_reply(body) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content`;
            const template = {
                friendly_name: body.name,
                language: (_a = body.language) !== null && _a !== void 0 ? _a : 'es_MX',
                variables: Object.assign({}, body.variables),
                types: {
                    'twilio/quick-reply': {
                        body: body.message,
                        actions: [...body.actions],
                    },
                },
            };
            const { data, status } = yield axios_1.default.post(url, template, {
                headers: { 'Content-Type': 'application/json' },
                auth,
            });
            console.log(status, data);
            return data;
        });
    }
    get_template(content_sid) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content/${content_sid}/ApprovalRequests`;
            const { status, data } = yield axios_1.default.get(url, { auth });
            console.log(status, data);
            return data;
        });
    }
    send_template_to_approval(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/Content/${body.content_sid}/ApprovalRequests/whatsapp`;
            const approval = {
                name: body.name,
                category: body.category.toUpperCase(),
            };
            const { status, data } = yield axios_1.default.post(url, approval, {
                headers: { 'Content-Type': 'application/json' },
                auth,
            });
            console.log(status, data);
            return data;
        });
    }
    get_templates() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${settings_1.settings.URL_TWILIO}/ContentAndApprovals`;
            const { status, data } = yield axios_1.default.get(url, { auth });
            console.log(status, data);
            return data;
        });
    }
    use_template(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield client.messages.create({
                contentSid: body.content_sid,
                from: settings_1.settings.TWILIO_FROM,
                contentVariables: JSON.stringify(Object.assign({}, body.variables)),
                to: `whatsapp:+${body.to}`,
            });
            console.log(message);
            return message;
        });
    }
    delete_template(content_sid) {
        return __awaiter(this, void 0, void 0, function* () {
            const removed = yield client.content.v1.contents(content_sid).remove();
            console.log(removed);
            return removed;
        });
    }
}
exports.TwilioService = TwilioService;
