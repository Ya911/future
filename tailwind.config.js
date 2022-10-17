
module.exports = {
content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],


theme: {
fontFamily:{
fonten : ['Rubik', 'sans-serif'],
fontar : ['Noto Kufi Arabic', 'sans-serif'],
},

extend: {

colors: {
'DarkMy': '#222222',
},
},
},



plugins: [
    require('tailwind-scrollbar-hide')

],

}