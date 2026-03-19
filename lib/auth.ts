import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";

declare module "next-auth" {
  interface User {
    memberId?: string;
    teamId?: string;
  }
  interface Session {
    user: {
      memberId?: string;
      teamId?: string;
    } & DefaultSession["user"];
  }
}

export const ADMIN_EMAIL = "vibecodingclub.team@gmail.com";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        phoneLast4: { type: "text" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const phoneLast4 = credentials?.phoneLast4 as string | undefined;

        if (!email || !phoneLast4) return null;

        // 어드민 계정 (코드 기반)
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (
          email === ADMIN_EMAIL &&
          adminPassword &&
          phoneLast4 === adminPassword
        ) {
          return {
            id: "admin",
            name: "관리자",
            email: ADMIN_EMAIL,
            // memberId, teamId 없음 → 내 팀/프로젝트 쿼리 비활성화
          };
        }

        // 일반 멤버 로그인
        if (phoneLast4.length !== 4) return null;

        const member = await prisma.member.findUnique({
          where: { email },
        });

        if (!member) return null;

        const memberPhoneLast4 = member.phone.slice(-4);
        if (memberPhoneLast4 !== phoneLast4) return null;

        return {
          id: member.id,
          name: member.name,
          email: member.email,
          memberId: member.id,
          teamId: member.teamId,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.memberId = user.memberId;
        token.teamId = user.teamId;
      }
      // 매 요청마다 DB에서 최신 teamId를 조회 (어드민은 제외)
      if (token.memberId && token.memberId !== "admin") {
        const member = await prisma.member.findUnique({
          where: { id: token.memberId as string },
          select: { teamId: true },
        });
        if (member) {
          token.teamId = member.teamId;
        }
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.memberId = token.memberId as string | undefined;
        session.user.teamId = token.teamId as string | undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: "/teams/login",
  },
});
