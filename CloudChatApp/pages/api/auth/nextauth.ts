
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { Client as FaunaClient } from "faunadb"
import { FaunaAdapter } from "@next-auth/fauna-adapter"


const client = new FaunaClient({
  secret: process.env.FAUNA_SECRET as string,
  scheme: "https",
  domain: "db.fauna.com",
})

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  adapter: FaunaAdapter(client)
};
export default NextAuth(authOptions);