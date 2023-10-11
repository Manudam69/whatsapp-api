import { Router } from 'express'
import * as Controller from './twilio.controller'
import {
  create_list_picker_validator,
  create_media_template_validator,
  create_text_template_validator,
  delete_template_validator,
  send_to_approval_validator,
  use_template_validator,
} from './twilio.validator'
import { validateBody } from '@middlewares/validator'

const router = Router()

router.post('/create-text-template', [...create_text_template_validator, validateBody], Controller.create_text_template)
router.post(
  '/create-media-template',
  [...create_media_template_validator, validateBody],
  Controller.create_media_template
)
router.post(
  '/create-list-picker-template',
  [...create_list_picker_validator, validateBody],
  Controller.create_list_picker_template
)
router.get('/template/:content_sid', Controller.get_template)
router.put('/send-to-approval', [...send_to_approval_validator, validateBody], Controller.send_template_to_approval)
router.get('/templates', Controller.get_templates)
router.put('/use-template', [...use_template_validator, validateBody], Controller.use_template)
router.delete('/delete-template', [...delete_template_validator, validateBody], Controller.delete_template)

export default router
