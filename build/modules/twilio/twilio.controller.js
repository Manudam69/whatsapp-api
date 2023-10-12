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
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_template = exports.use_template = exports.get_templates = exports.send_template_to_approval = exports.get_template = exports.create_quick_reply = exports.create_list_picker_template = exports.create_media_template = exports.create_text_template = void 0;
const services_1 = require("./services");
function create_text_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.create_text_template(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create_text_template = create_text_template;
function create_media_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.create_media_template(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create_media_template = create_media_template;
function create_list_picker_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.create_list_picker_template(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create_list_picker_template = create_list_picker_template;
function create_quick_reply(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.create_quick_reply(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.create_quick_reply = create_quick_reply;
function get_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const { content_sid } = req.params;
            const template = yield service.get_template(content_sid);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.get_template = get_template;
function send_template_to_approval(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.send_template_to_approval(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.send_template_to_approval = send_template_to_approval;
function get_templates(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.get_templates();
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.get_templates = get_templates;
function use_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const template = yield service.use_template(req.body);
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.use_template = use_template;
function delete_template(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = new services_1.TwilioService();
        try {
            const { content_sid } = req.query;
            const template = yield service.delete_template(content_sid.toString());
            res.json(template);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.delete_template = delete_template;
