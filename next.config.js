
const nextBuildId = require('next-build-id')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  
})

// O ps some ch hdfk feeeefkfkwhhdfdfrkl d fiXXX rfjirdfdklj f
// O ps some ch hdfk feeeefkfkwhhdfdfrkl d fiXXX rfjirdfdklj f
const nextConfig = {
  reactStrictMode: true,
  generateBuildId:async() => {

    if(process.env.BUILD_ID){
      return JSON.stringify(process.env.npm_package_version).toString()
    }
    return "v"

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


}



module.exports = withPWA(nextConfig) 













