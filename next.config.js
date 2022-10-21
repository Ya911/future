
const nextBuildId = require('next-build-id')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  
})

// O ps some ch hd feeeefkfkwhhdfdfrkl d fiXXX rfjirdfdklj f
const nextConfig = {
  reactStrictMode: true,
  distDir: "_next",
  generateBuildId:async() => nextBuildId({ dir: __dirname, describe: true }),
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













