import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Os from 'os'

async function refreshAccessToken(token) {
  try {


    const response = await axios.post(`${process.env.NEXTAUTH_URL+"/api/tokensref"}`,{tokenRf: token.refreshToken});

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
        email: { type: "text"  },
        password: { type: "password"  }
      },
      async authorize(credentials) {
  
        console.log(Os.cpus.name);
        console.log(Os.hostname.name);
        console.log("fdkjdf");
        const authResponse = await fetch(`${process.env.NEXTAUTH_URL+"/api/tokens"}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,


  pages: {
    signIn: '/auth',   
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


