import { NextRequest, NextResponse } from "next/server";
import { google } from 'googleapis';
import { setCookies } from "@/app/actions/setCookies";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import firebaseCreds from './firebase-creds.json'
import { redirect } from "next/navigation";
import { getAllowedOriginsForEnv } from "@/lib/helpers/getAllowedOriginsForEnv";
import { createOptionsResponse } from "@/lib/helpers/createOptionsHTTPResponse";

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

async function GETHandler(req: NextRequest, res: NextResponse) {
  const params = new URLSearchParams(req.url.split('?')[1]);
  const idToken = params.get('token')
  // const authHeader = req.headers.get('authorization');
  // const idToken = authHeader?.split('Bearer ')[1];

  if (!idToken) {
    return NextResponse.json({ error: 'Unauthorized - No ID token provided', status: 401 })
  }

  const decodedToken = await getAuth().verifyIdToken(idToken)
  if (!decodedToken) return NextResponse.json({ message: decodedToken })
  const { email } = decodedToken;

  setCookies([{
    name: 'idToken',
    value: JSON.stringify(decodedToken),
    HttpOnly: true,
    Path: '/',
  }])

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [JSON.stringify(process.env.GOOGLE_CALENDAR_AUTH_URL)],
    state: JSON.stringify({ email }),
    prompt: 'consent',
    redirect_uri: process.env.GOOGLE_LOGIN_REDIRECT_URL,
    include_granted_scopes: true,
    client_id: process.env.GOOGLE_CLIENT_ID,
  })

  console.log({url})
  if (url) {
    console.log('REDIRECT FROM /AUTH')
    const response = NextResponse.redirect(url.toString(), 307);
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
  }

  return NextResponse.json({ message: 'Invalid token' }, { status: 403 })
}

export const GET = GETHandler;
export const OPTIONS = createOptionsResponse();

// export const POST = withCORS(POSTHandler, {
//   origin: getAllowedOriginsForEnv(process.env.NODE_ENV),
//   credentials: true,
//   preflightContinue: true,
// });

// export const OPTIONS = withCORS(async () => new NextResponse(null, { status: 204 }),
// { origin: getAllowedOriginsForEnv(process.env.NODE_ENV), credentials: true,})

