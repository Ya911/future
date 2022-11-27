import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";




async function refreshAccessToken(token) {
  try {
    let url = `${process.env.NEXTAUTH_URL}/api/auth/tokensref`
    const response = await axios.post(url,{tokenRf: token.refreshToken});

    const refreshedTokens = await response.data
    

    if (!refreshedTokens) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens?.tokenAc,
      accessTokenExpires:  refreshedTokens?.exp * 1000, 
      refreshToken: refreshedTokens?.tokenRf,
      user : {
        id : refreshedTokens?._id,
        image : refreshedTokens?.image,
        name: refreshedTokens?.name || token.name ,
        role: refreshedTokens?.role
      }
    }
  } catch (error) {
    return {
      user : {
        id : token._id,
        image : token.image,
        name: token.name,
        role: token.role
      },
      error : "RefreshAccessTokenError"
    };
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "text" },
      },
      async authorize(credentials) {
        const result = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/auth/tokens`,
          credentials,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
          let res = await result.data;
          console.log(res);
        if (res)return res 
        else return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth",   
    error : '/auth/error' 
  },

  callbacks: {

    async jwt({ token, user, account}) {
      if (account && user) {  
        return {
          accessToken: user.tokenAc,
          accessTokenExpires:  user.exp * 1000, 
          refreshToken: user.tokenRf,
          user : {
            id : user._id,
            image : user.image,
            name: user.name,
            role: user.role
          }
        }
      }

      // _ Token is GOOD EX 
 

      if (Date.now() < token.accessTokenExpires) return token



       // _ Token is Finsh 
      return await refreshAccessToken(token)
    },

    
    async session({ session, token }) {

      session.user = token.user
      session.accessToken = token.accessToken || token.tokenAc
      session.error = token.error

      return session;
    },
  },

};

export default NextAuth(authOptions);
