
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})


const nextConfig = {
  reactStrictMode: true,
  // basePath: '/docs',
  images: {
    domains: ['res.cloudinary.com' , 'books.google.com'],
 
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
    
},


}



module.exports = withPWA((phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }

  return withPWA(nextConfig) 
    
  
})













