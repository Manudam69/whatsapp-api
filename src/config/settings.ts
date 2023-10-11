import dotenv from 'dotenv'
import dotenvParseVariables from 'dotenv-parse-variables'

let env: any = dotenv.config()
if (env.error) console.log(env.error)
env = dotenvParseVariables(env.parsed!)

export const settings = {
  ENV: env.ENV || 'develop',
  PORT: env.PORT || 3000,
  SECRET: env.SECRET || 'somesecrettoken',
  TWILIO_ACCOUNT_SID: env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: env.TWILIO_AUTH_TOKEN,
  TWILIO_FROM: env.TWILIO_FROM,
  URL_TWILIO: 'https://content.twilio.com/v1',
}
