import { check, query } from 'express-validator'

export const create_media_template_validator = [
  check('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
  check('message').notEmpty().withMessage('{message} was expected').isString().withMessage('string type was expected'),
  check('media').notEmpty().withMessage('{media} was expected').isString().withMessage('string type was expected'),
]
export const send_to_approval_validator = [
  check('name').notEmpty().withMessage('{name} was expected').isString().withMessage('string type was expected'),
  check('category')
    .notEmpty()
    .withMessage('{category} was expected')
    .isIn(['Authentication', 'Utility', 'Marketing'])
    .withMessage('Only [Authentication, Utility, Marketing] types are accepted'),
  check('content_sid')
    .notEmpty()
    .withMessage('{content_sid} was expected')
    .isString()
    .withMessage('string type was expected'),
]
export const use_template_validator = [
  check('content_sid')
    .notEmpty()
    .withMessage('{content_sid} was expected')
    .isString()
    .withMessage('string type was expected'),
  check('to').notEmpty().withMessage('{to} was expected').isString().withMessage('string type was expected'),
]
export const delete_template_validator = [
  query('content_sid')
    .notEmpty()
    .withMessage('{content_sid} was expected')
    .isString()
    .withMessage('string type was expected'),
]
