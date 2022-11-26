
module.exports = {
content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],


theme: {
    screens: {
        'sm': '375px',
         // iPhone 6 , 7 , 8 

        'md': '428px',
        // iPhone 12 Pro max
  
      },
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