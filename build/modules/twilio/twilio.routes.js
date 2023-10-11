"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller = __importStar(require("./twilio.controller"));
const twilio_validator_1 = require("./twilio.validator");
const validator_1 = require("@middlewares/validator");
const router = (0, express_1.Router)();
router.post('/create-text-template', [...twilio_validator_1.create_text_template_validator, validator_1.validateBody], Controller.create_text_template);
router.post('/create-media-template', [...twilio_validator_1.create_media_template_validator, validator_1.validateBody], Controller.create_media_template);
router.post('/create-list-picker-template', [...twilio_validator_1.create_list_picker_validator, validator_1.validateBody], Controller.create_list_picker_template);
router.get('/template/:content_sid', Controller.get_template);
router.put('/send-to-approval', [...twilio_validator_1.send_to_approval_validator, validator_1.validateBody], Controller.send_template_to_approval);
router.get('/templates', Controller.get_templates);
router.put('/use-template', [...twilio_validator_1.use_template_validator, validator_1.validateBody], Controller.use_template);
router.delete('/delete-template', [...twilio_validator_1.delete_template_validator, validator_1.validateBody], Controller.delete_template);
exports.default = router;
