import { AllowedOriginsByEnv } from "./ts/HTTP";

export const ALLOWED_ORIGINS: AllowedOriginsByEnv = {
  development: ['http://localhost:3000'],
  staging: [],
  production: [],
  test: [],
}

export const ALLOWED_HEADERS = [
  'Access-Control-Allow-Headers',
  'Access-Control-Allow-Methods',
  'Access-Control-Allow-Origin',
  'Access-Control-Expose-Headers',
  'Access-Control-Max-Age',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Access-Control-Allow-Credentials',
  'Access-Control-Allow-Headers',
  'Access-Control-Allow-Methods',
  'Access-Control-Allow-Origin',
  'Access-Control-Expose-Headers',
  'Access-Control-Max-Age',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Authorization',
  'Vary',
  'Set-Cookie',
  'Origin',
  'Content-Length',
  'Content-Type',
  'Allow',
  'Referer',
];
