import mongoCollection from "@/utils/mongoCollection";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const findUser = async (credentials) => {
  const usersCollection = await mongoCollection("users");
  const user = await usersCollection.findOne({
    $and: { username: credentials.username, password: credentials.password },
  });
  return user;
};

export const options = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = findUser(credentials);
        if (Boolean(user)) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    login: "/login",
  },
};

export async function GET(req, res) {
  return NextAuth(req, res, options);
}
