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

// config CORS
const getCorsHeaders = (origin: string) => {
  const headers = {
    "Access-Control-Allow-Methods": process.env.ALLOWED_HTTP_METHODS,
     "Access-Control-Allow-Headers": process.env.ALLOWED_HTTP_HEADERS,
    "Access-Control-Allow-Origin": process.env.DOMAIN_URL,
  }

  if(!process.env.ALLOWED_ORIGIN || !origin) return headers;

  const allowedOrigins = process.env.ALLOWED_ORIGIN.split(',')
  if(allowedOrigins.includes('*')) {
    headers['Access-Control-Allow-Origin'] = '*';
  } else if (allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}

async function POSTHandler(req: NextRequest, res: NextResponse) {
  const authHeader = req.headers.get('authorization');
  const idToken = authHeader?.split('Bearer ')[1];

  if (!idToken) {
    return NextResponse.json({ error: 'Unauthorized - No ID token provided', status: 401 })
  }
  const decodedToken = await getAuth().verifyIdToken(idToken)
  console.log({decodedToken})
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
    scope: [process.env.GOOGLE_CALENDAR_AUTH_URL || ''],
    state: JSON.stringify({ email }),
    prompt: 'consent',
    redirect_uri: process.env.GOOGLE_LOGIN_REDIRECT_URL,
    include_granted_scopes: true,
    client_id: process.env.GOOGLE_CLIENT_ID,
  })

  if (url) {
    const response = NextResponse.redirect(url.toString(), 307);
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
  }

  return NextResponse.json({ message: 'Invalid token' }, { status: 403 })
}

export const POST = POSTHandler;
export const OPTIONS = async (request:NextRequest) => {
  return NextResponse.json({}, {
    status:200, 
    headers: getCorsHeaders(request.headers.get('origin') || ''),
  })
};

// export const POST = withCORS(POSTHandler, {
//   origin: getAllowedOriginsForEnv(process.env.NODE_ENV),
//   credentials: true,
//   preflightContinue: true,
// });

// export const OPTIONS = withCORS(async () => new NextResponse(null, { status: 204 }),
// { origin: getAllowedOriginsForEnv(process.env.NODE_ENV), credentials: true,})

