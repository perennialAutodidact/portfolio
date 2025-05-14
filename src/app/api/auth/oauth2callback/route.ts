import { NextRequest, NextResponse } from "next/server";
import { oauth2Client } from "../oauth2Client";
import { withCORS } from "@/lib/middleware/cors";

async function GETHandler(req: NextRequest) {

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || ''
  const state = searchParams.get('state')

  const { email } = JSON.parse(state || '{}')

  const tokenRes = await oauth2Client.getToken(code);
  if (tokenRes) return NextResponse.json({ message: JSON.stringify(tokenRes) })
  return NextResponse.json({message: `Invalid token: ${tokenRes}`})



  // oauth2Client.setCredentials(token)

  // save tokens to http only cookie
  // associate them with email

  // setCookies([{
  //   name: 'idToken',
  //   value: JSON.stringify(decodedToken),
  //   HttpOnly: true,
  //   Path: '/',
  // }])

}


export const GET = withCORS(GETHandler)
