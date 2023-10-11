import { NextFunction, Request, Response } from 'express'
import { TwilioService } from './services'

export async function create_text_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.create_text_template(req.body)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function create_media_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.create_media_template(req.body)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function create_list_picker_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.create_list_picker_template(req.body)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function get_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const { content_sid } = req.params
    const template = await service.get_template(content_sid)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function send_template_to_approval(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.send_template_to_approval(req.body)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function get_templates(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.get_templates()
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function use_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const template = await service.use_template(req.body)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

export async function delete_template(req: Request, res: Response, next: NextFunction): Promise<void> {
  const service = new TwilioService()
  try {
    const { content_sid } = req.query
    const template = await service.delete_template(content_sid!.toString())
    res.json(template)
  } catch (error) {
    next(error)
  }
}
