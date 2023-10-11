import twilio from 'twilio'
import axios from 'axios'
import { settings } from '@config/settings'

const client = twilio(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
const auth = {
  username: settings.TWILIO_ACCOUNT_SID,
  password: settings.TWILIO_AUTH_TOKEN,
}

export type create_text_type = {
  name: string
  language?: string
  variables?: object
  message: string
}

export type create_media_type = {
  name: string
  language?: string
  variables?: object
  message: string
  media: string
}

export type create_list_picker_type = {
  name: string
  language?: string
  variables?: object
  list_message: string
  label: string
  items: { item: string; description: string; id: string }[]
}

export type send_template_to_approval_type = {
  name: string
  category: 'authentication' | 'utility' | 'marketing'
  content_sid: string
}

export type use_template_type = {
  content_sid: string
  variables?: object
  to: string
}

export class TwilioService {
  async create_text_template(body: create_text_type) {
    const url = `${settings.URL_TWILIO}/Content`
    const template = {
      friendly_name: body.name,
      language: body.language ?? 'es_MX',
      variables: { ...body.variables },
      types: {
        'twilio/text': {
          body: body.message,
        },
      },
    }
    const { data, status } = await axios.post(url, template, {
      headers: { 'Content-Type': 'application/json' },
      auth,
    })

    console.log(status, data)
    return data
  }

  async create_media_template(body: create_media_type) {
    const url = `${settings.URL_TWILIO}/Content`
    const template = {
      friendly_name: body.name,
      language: body.language ?? 'es_MX',
      variables: { ...body.variables },
      types: {
        'twilio/media': {
          body: body.message,
          media: [body.media],
        },
      },
    }

    const { data, status } = await axios.post(url, template, {
      headers: { 'Content-Type': 'application/json' },
      auth,
    })

    console.log(status, data)

    return data
  }

  async create_list_picker_template(body: create_list_picker_type) {
    const url = `${settings.URL_TWILIO}/Content`
    const template = {
      friendly_name: body.name,
      language: body.language ?? 'es_MX',
      variables: { ...body.variables },
      types: {
        'twilio/list-picker': {
          body: body.list_message,
          button: body.label,
          items: [...body.items],
        },
        'twilio/text': {
          body: 'Prueba de texto en lista!',
        },
      },
    }

    const { data, status } = await axios.post(url, template, {
      headers: { 'Content-Type': 'application/json' },
      auth,
    })

    console.log(status, data)

    return data
  }

  async get_template(content_sid: string) {
    const url = `${settings.URL_TWILIO}/Content/${content_sid}/ApprovalRequests`
    const { status, data } = await axios.get(url, { auth })
    console.log(status, data)

    return data
  }

  async send_template_to_approval(body: send_template_to_approval_type) {
    const url = `${settings.URL_TWILIO}/Content/${body.content_sid}/ApprovalRequests/whatsapp`
    const approval = {
      name: body.name,
      category: body.category.toUpperCase(),
    }

    const { status, data } = await axios.post(url, approval, {
      headers: { 'Content-Type': 'application/json' },
      auth,
    })

    console.log(status, data)

    return data
  }

  async get_templates() {
    const url = `${settings.URL_TWILIO}/ContentAndApprovals`
    const { status, data } = await axios.get(url, { auth })
    console.log(status, data)
    return data
  }

  async use_template(body: use_template_type) {
    const message = await client.messages.create({
      contentSid: body.content_sid,
      from: settings.TWILIO_FROM,
      contentVariables: JSON.stringify({ ...body.variables }),
      to: `whatsapp:+${body.to}`,
    })
    console.log(message)
    return message
  }

  async delete_template(content_sid: string) {
    const removed = await client.content.v1.contents(content_sid).remove()
    console.log(removed)
    return removed
  }
}
