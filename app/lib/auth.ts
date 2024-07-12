
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions = {
    pages:{
        signIn: '/login',
    },
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user = null;
        return {
          id: "",
          name: "",
          email: "",
        };
      },
    }),
  ],
};
