
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
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



module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }

  return withPWA(nextConfig)
    
  
}













