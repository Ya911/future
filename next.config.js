
const nextBuildId = require('next-build-id')

const withPWA = require('next-pwa')({
  dest: 'public',
})

// O ps some ch h eeeefkfkwkl d fiXXX rfjirdfdklj f
const nextConfig = {
  reactStrictMode: true,
  generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
  images: {
    domains: ['res.cloudinary.com' , 'books.google.com'],
 
  },
  i18n: {
    locales: ["ar"],
    defaultLocale: "ar",
    
},


}



module.exports = withPWA(nextConfig) 













