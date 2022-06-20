
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"


import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import clientPromise from "./lib/mongodb";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})