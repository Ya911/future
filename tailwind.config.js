
module.exports = {
content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
],


theme: {
    screens: {
        'xs': { max: '375px' }, // Mobile (iPhone 3 - iPhone XS Max).
        'sm': { min: '428px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        'md': { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        'lg': { min: '1200px' }, // Desktop smallest.
        'xl': { min: '1159px' }, // Desktop wide.
        '2xl': { min: '1359px' } // Desktop widescreen.
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