import { google } from "googleapis";
import googleClientCreds from '../googleClientCreds.json';

export const oauth2Client = new google.auth.OAuth2(
  googleClientCreds.web.client_id,
  googleClientCreds.web.client_secret,
  // process.env.GOOGLE_CLIENT_ID,
  // process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_LOGIN_REDIRECT_URL,
)

