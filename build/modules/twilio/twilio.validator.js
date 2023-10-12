"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_template_validator = exports.use_template_validator = exports.send_to_approval_validator = exports.create_quick_reply_validator = exports.create_list_picker_validator = exports.create_media_template_validator = exports.create_text_template_validator = void 0;
const express_validator_1 = require("express-validator");
exports.create_text_template_validator = [(0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected')];
exports.create_media_template_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('message').notEmpty().withMessage('{message} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('media').notEmpty().withMessage('{media} was expected').isString().withMessage('string type was expected'),
];
exports.create_list_picker_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('list_message')
        .notEmpty()
        .withMessage('{list_message} was expected')
        .isString()
        .withMessage('string type was expected'),
    (0, express_validator_1.check)('label').notEmpty().withMessage('{label} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('items').isArray({ min: 1 }).withMessage('Array {items} was expected'),
];
exports.create_quick_reply_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('message').notEmpty().withMessage('{message} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('actions').isArray({ min: 1 }).withMessage('Array {actions} was expected'),
];
exports.send_to_approval_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('category')
        .notEmpty()
        .withMessage('{category} was expected')
        .isIn(['authentication', 'utility', 'marketing'])
        .withMessage('Only [Authentication, Utility, Marketing] types are accepted'),
    (0, express_validator_1.check)('content_sid')
        .notEmpty()
        .withMessage('{content_sid} was expected')
        .isString()
        .withMessage('string type was expected'),
];
exports.use_template_validator = [
    (0, express_validator_1.check)('content_sid')
        .notEmpty()
        .withMessage('{content_sid} was expected')
        .isString()
        .withMessage('string type was expected'),
    (0, express_validator_1.check)('to').notEmpty().withMessage('{to} was expected').isString().withMessage('string type was expected'),
];
exports.delete_template_validator = [
    (0, express_validator_1.query)('content_sid')
        .notEmpty()
        .withMessage('{content_sid} was expected')
        .isString()
        .withMessage('string type was expected'),
];
