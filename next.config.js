
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  
})



const nextConfig = {
  reactStrictMode: true,
  generateBuildId:async() => {
    if(process.env.NEXT_PUBLIC_BUILD_ID){
      return process.env.NEXT_PUBLIC_BUILD_ID
    }
    return "test"

  },
  images: {
    domains: ['res.cloudinary.com' , 'books.google.com'],
 
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
    
},
eslint: {
  // ESLint يسمح ذلك بنجاح بناء التطبيق حتى لو كانت هناك أخطاء في المدقق
  ignoreDuringBuilds: true,
},

async headers() {
  return [
    {
      // matching all API routes
      source: "/api/bot",
      headers: [
        { key: "Access-Control-Allow-Credentials", value: "true" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,PATCH" },
        { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      ]
    }
  ]
}


}



module.exports = withPWA(nextConfig) 













