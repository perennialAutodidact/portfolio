import { NextRequest, NextResponse } from "next/server";
import { oauth2Client } from "../oauth2Client";
import { createOptionsResponse } from "@/lib/helpers/createOptionsHTTPResponse";

async function GETHandler(req: NextRequest) {
  console.log('OAUTH2CALLBACK FIRED', req)
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || ''
  const state = searchParams.get('state')

  const { email } = JSON.parse(state || '{}')

  const tokenRes = await oauth2Client.getToken(code);

  // oauth2Client.setCredentials(token)

  // save tokens to http only cookie
  // associate them with email

  // setCookies([{
  //   name: 'idToken',
  //   value: JSON.stringify(decodedToken),
  //   HttpOnly: true,
  //   Path: '/',
  // }])

  if (tokenRes) return NextResponse.json({ message: JSON.stringify(tokenRes) })
  return NextResponse.json({message: `Invalid token: ${tokenRes}`})
}


export const GET = GETHandler;
export const OPTIONS = createOptionsResponse();