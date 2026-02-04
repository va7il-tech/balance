import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" }
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }

        const user = await prisma.user.upsert({
          where: { email: credentials.email },
          update: {},
          create: { email: credentials.email }
        });

        return { id: user.id, email: user.email, name: user.name ?? undefined };
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/sign-in"
  }
};
