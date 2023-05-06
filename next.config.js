
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  
})



const nextConfig = {
  reactStrictMode: true,
  generateBuildId:async() => {
    if(process.env.NEXT_PUBLIC_BUILD_ID){
      let {Versoin} = JSON.parse(process.env.NEXT_PUBLIC_BUILD_ID)
      return Versoin.slice(7) 
    }
    return "test"

  },
  images: {
    domains: ['res.cloudinary.com' , 'books.google.com'],
 
  },
output: 'standalone',
}



module.exports = withPWA(nextConfig) 












