"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_template_validator = exports.use_template_validator = exports.send_to_approval_validator = exports.create_media_template_validator = void 0;
const express_validator_1 = require("express-validator");
exports.create_media_template_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('message').notEmpty().withMessage('{message} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('media').notEmpty().withMessage('{media} was expected').isString().withMessage('string type was expected'),
];
exports.send_to_approval_validator = [
    (0, express_validator_1.check)('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
    (0, express_validator_1.check)('category')
        .notEmpty()
        .withMessage('{category} was expected')
        .isIn(['Authentication', 'Utility', 'Marketing'])
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
