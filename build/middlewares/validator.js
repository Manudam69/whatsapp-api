"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const express_validator_1 = require("express-validator");
function validateBody(req, res, next) {
    var _a;
    const errors = (0, express_validator_1.validationResult)(req);
    const arrayErrors = errors.array();
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: arrayErrors,
            message: (_a = arrayErrors[0]) === null || _a === void 0 ? void 0 : _a.msg,
        });
    }
    next();
}
exports.validateBody = validateBody;
