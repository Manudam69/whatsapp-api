import { Router } from 'express'
import * as Controller from './twilio.controller'
import {
  create_media_template_validator,
  delete_template_validator,
  send_to_approval_validator,
  use_template_validator,
} from './twilio.validator'

const router = Router()

router.post('/create-media-template', [...create_media_template_validator], Controller.create_media_template)
router.get('/template/:content_sid', Controller.get_template)
router.put('/send-to-approval', [...send_to_approval_validator], Controller.send_template_to_approval)
router.get('/templates', Controller.get_templates)
router.put('/use-template', [...use_template_validator], Controller.use_template)
router.delete('/delete-template', [...delete_template_validator], Controller.delete_template)

export default router
