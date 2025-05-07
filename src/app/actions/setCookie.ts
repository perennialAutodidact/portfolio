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
export async function setCookie(data: Cookie) {
    const cookieStore = await cookies();

    cookieStore.set(data);
}
