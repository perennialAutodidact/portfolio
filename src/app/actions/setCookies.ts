'use server'

import { cookies } from 'next/headers';
export type Cookie = {
  name: string;
  value: string;
  Path?: string;
  Expires?: string;
  MaxAge?: number;
  Secure?: boolean;
  HttpOnly?: boolean;
  SameSite?: 'Strict' | 'Lax' | 'None';
};
export async function setCookies(cookieData: Cookie[]) {
  const cookieStore = await cookies();

  cookieData.forEach(data => {
    cookieStore.set(data);
  })
}
