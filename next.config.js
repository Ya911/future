
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const nextBuildId = require('next-build-id')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

// O ps some ch h  d
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: () => nextBuildId({ dir: __dirname , describe : true}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com' , 'books.google.com'],
 
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
    
},


}



module.exports = nextConfig

withPWA((phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }

  return withPWA(nextConfig) 
    
  
})













