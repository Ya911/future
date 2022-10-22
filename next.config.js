
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  
})



const nextConfig = {
  reactStrictMode: true,
  generateBuildId:async() => process.env.npm_package_version,
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













