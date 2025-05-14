import { ALLOWED_ORIGINS } from '@/constants'
import { Environment } from '@/ts/App';
import { EnvVars } from 'next/dist/build/turborepo-access-trace/types';


export function getAllowedOriginsForEnv(env: Environment) {
  if (env === 'development' || env === 'staging' || env === 'production') {
    return ALLOWED_ORIGINS[env]
  }

  throw new Error(`Invalid environment: ${env}`)
}
