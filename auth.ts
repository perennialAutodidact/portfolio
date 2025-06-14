import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

type CustomToken = JWT & {
  accessToken?: string;
  accessTokenExpiresAt?: number;
  accessTokenIssuedAt?: number;
  refreshToken?: string;
  user?: User;
};

export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          response: "code",
          scope: [
            "openid",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/calendar",
            // and more scope urls
          ].join(" "),
        },
      },
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      return !!auth;
    },
    jwt({ token, user, account }) {
      if (account && user) {
        // TODO: store refreshToken in an HTTP-only cookie
        console.log({
          access: account.access_token,
          refresh: account.refresh_token,
        });
        return {
          ...token,
          accessToken: account.access_token || "",
          refreshToken: account.refresh_token || "no refresh token",
          accessTokenExpiresAt: Number(token.expires_at),
          accessTokenIssuedAt: Date.now(),
          user,
        } satisfies CustomToken;
      } else if (Date.now() < Number(token.expires_at)) {
        return token;
      } else {
        // fetch a new access token with the refresh token
        // https://github.com/rajeshdavidbabu/next-auth-google-oauth/blob/master/auth.ts#L45
      }
      return token;
    },
    async session({ session, token }) {
      const enrichedSession: EnrichedSession = {
        ...structuredClone(session),
        accessToken: String(token.accessToken),
        refreshToken: String(token.refreshToken),
        accessTokenIssuedAt: Number(token.issued_at),
        accessTokenExpiresAt: Number(token.expires_at),
        expires: session.expires,
      };

      return enrichedSession;
    },
  },
});

export interface EnrichedSession extends Session {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: number;
  accessTokenIssuedAt: number;
}

// export const { handlers, auth, signIn, signOut } = NextAuth(config);
