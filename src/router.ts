import { Router } from 'express'
const router = Router()

import twilio from '@modules/twilio/twilio.routes'

router.use('/api/twilio', twilio)

export default router
