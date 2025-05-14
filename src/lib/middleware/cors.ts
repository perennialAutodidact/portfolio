import { NextResponse, NextRequest } from "next/server";

type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[]

type OriginFn = (
  origin: string | undefined,
  req: Request
) => StaticOrigin | Promise<StaticOrigin>

interface CorsOptions {
  origin?: StaticOrigin | OriginFn
  methods?: string | string[]
  allowedHeaders?: string | string[]
  exposedHeaders?: string | string[]
  credentials?: boolean
  maxAge?: number
  preflightContinue?: boolean
  optionsSuccessStatus?: number
}

const defaultOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}

function isOriginAllowed(origin: string, allowed: StaticOrigin): boolean {
  return Array.isArray(allowed)
    ? allowed.some((o) => isOriginAllowed(origin, o))
    : typeof allowed === 'string'
      ? origin === allowed
      : allowed instanceof RegExp
        ? allowed.test(origin)
        : !!allowed
}

async function originHeadersFromReq(
  req: Request,
  origin: StaticOrigin | OriginFn
) {
  const reqOrigin = req.headers.get('Origin') || undefined
  const value =
    typeof origin === 'function' ? await origin(reqOrigin, req) : origin

  if (!value) return
  return getOriginHeaders(reqOrigin, value)
}

function getOriginHeaders(reqOrigin: string | undefined, origin: StaticOrigin) {
  const headers = new Headers()

  if (origin === '*') {
    // Allow any origin
    headers.set('Access-Control-Allow-Origin', '*')
  } else if (typeof origin === 'string') {
    // Fixed origin
    headers.set('Access-Control-Allow-Origin', origin)
    headers.append('Vary', 'Origin')
  } else {
    const allowed = isOriginAllowed(reqOrigin ?? '', origin)

    if (allowed && reqOrigin) {
      headers.set('Access-Control-Allow-Origin', reqOrigin)
    }
    headers.append('Vary', 'Origin')
  }

  return headers
}

function getAllowedHeaders(req: Request, allowed?: string | string[]) {
  const headers = new Headers()

  if (!allowed) {
    allowed = req.headers.get('Access-Control-Request-Headers')!
    headers.append('Vary', 'Access-Control-Request-Headers')
  } else if (Array.isArray(allowed)) {
    // If the allowed headers is an array, turn it into a string
    allowed = allowed.join(',')
  }
  if (allowed) {
    headers.set('Access-Control-Allow-Headers', allowed)
  }

  return headers
}

const ALLOWED_ORIGINS = ['http://localhost:3000'];
const ALLOWED_HEADERS = ['Access-Control-Allow-Origin', 'Access-Control-Allow-Methods',]

function setCORSHeaders(res: Response) {
  res?.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res?.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res?.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res?.headers.set('Access-Control-Allow-Credentials', 'true')
}

export function withCORS<NextResponse>(
  handler: (req: NextRequest) => Promise<Response>,
  options?: CorsOptions,
) {
  return async (req: NextRequest) => {
    const opts = { ...defaultOptions, ...options };
    const originHeaders = await originHeadersFromReq(req, opts.origin ?? false);

    const res = req.method === 'OPTIONS'
      ? new NextResponse(null, { status: 204 })
      : await handler(req);

    const { headers } = res;
    const mergeHeaders = (v: string, k: string) => {
      if (k === 'Vary') headers.append(k, v)
      else headers.set(k, v)
    }
    const exposed = Array.isArray(opts.exposedHeaders)
      ? opts.exposedHeaders.join(',')
      : opts.exposedHeaders


    if (!originHeaders) return res;

    originHeaders.forEach(mergeHeaders);

    if (opts.credentials) headers.set('Access-Control-Allow-Credentials', 'true')

    if (exposed) headers.set('Access-Control-Expose-Headers', exposed)

    if (req.method === 'OPTIONS') {
      if (opts.methods) {
        const methods = Array.isArray(opts.methods)
          ? opts.methods.join(',')
          : opts.methods

        headers.set('Access-Control-Allow-Methods', methods);
      }
      getAllowedHeaders(req, opts.allowedHeaders).forEach(mergeHeaders)
      if (typeof opts.maxAge === 'number') headers.set('Access-Control-Max-Age', String(opts.maxAge))
      if (opts.preflightContinue) return res

      headers.set('Content-Length', '0')

      return new Response(null, { status: opts.optionsSuccessStatus, headers })
    }

    return res;
  };
}
