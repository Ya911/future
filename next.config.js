
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
  env : {

MONGODB_URI:"mongodb+srv://admin:Yaseer10@cluster0.rxzdg.mongodb.net/?retryWrites=true&w=majority",
NEXTAUTH_URL:"http://localhost:3000",
NEXTAUTH_SECRET:"Vkr9CgdTc4zKESRk81+jkS7oR6UfDlGUgedK2Ea+SjI=",
GOOGLE_CLIENT_ID:"723040246799-ujq78j3rej624kjmk2c3kc28ngd0b60d.apps.googleusercontent.com",
GOOGLE_CLIENT_SECRET:"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",
VERCEL_ACCESS_TOKEN:"fCAlc8ddpFyUvnLctGyoHYYt",
JWT_NEXT_ACCESS_TOKEN:"JDASG5Kh5IZuuqnP3Qr5jI2brAM7ubaYuA8V9BOCY3g=",
JWT_NEXT_REFRESH_TOKEN:"v:5gvVBp82+iENEfGjVyDtC1CEo9ISMg4A2tQukN/vtg=",
API_SECRER:"3cOAZbisIAbXpERw7dsIGR36foM",
CLOUD_NAME:"dubaiplus",
API_KEY:"557716922286854"
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













