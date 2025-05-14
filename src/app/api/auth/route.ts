import { NextRequest, NextResponse } from "next/server";
import { google } from 'googleapis';
import { setCookies } from "@/app/actions/setCookies";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import firebaseCreds from './firebase-creds.json'
import { withCORS } from "@/lib/middleware/cors";
import { redirect } from "next/navigation";
import { getAllowedOriginsForEnv } from "@/lib/helpers/getAllowedOriginsForEnv";

// only initialize once
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: firebaseCreds.project_id,
      clientEmail: firebaseCreds.client_email,
      privateKey: firebaseCreds.private_key,
    }),
  });
}

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_LOGIN_REDIRECT_URL,
)

async function POSTHandler(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const idToken = authHeader?.split('Bearer ')[1];

  if (!idToken) {
    return NextResponse.json({ error: 'Unauthorized - No ID token provided', status: 401 })
  }

  const decodedToken = await getAuth().verifyIdToken(idToken)
  if (!decodedToken) return NextResponse.json({ message: decodedToken })
  const { email } = decodedToken;

  // setCookies([{
  //   name: 'idToken',
  //   value: JSON.stringify(decodedToken),
  //   HttpOnly: true,
  //   Path: '/',
  // }])

  // const url = oauth 

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [JSON.stringify(process.env.GOOGLE_CALENDAR_AUTH_URL)],
    state: JSON.stringify({ email }),
    prompt: 'consent'
  })

  console.log({ url })

  if (url) {
    return redirect(url);
  }

  return NextResponse.json({ message: 'Invalid token' }, { status: 403 })
}

export const POST = withCORS(POSTHandler, {
  origin: getAllowedOriginsForEnv(process.env.NODE_ENV),
  credentials: true,
  preflightContinue: true,
});

export const OPTIONS = withCORS(() => new Response(null, { status: 204 }),
  { origin: getAllowedOriginsForEnv(process.env.NODE_ENV), credentials: true,})
