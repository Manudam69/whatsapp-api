"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const twilio_routes_1 = __importDefault(require("@modules/twilio/twilio.routes"));
router.use('/api/twilio', twilio_routes_1.default);
exports.default = router;
