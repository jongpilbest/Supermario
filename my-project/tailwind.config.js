module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Game:['Game']
      },
      backgroundImage:{
        mario:"url('./assets/background.jpg')"
      }
    },
    fontSize: {
      '8xl': '12.5rem',
      'xs':'0.8rem',
      '5xl':'5.5rem',
      '3xl':'3rem',
      '2xl':'1.8rem'
    ,    fontWeight: {
      medium: '580',
    }
  }
  },
  plugins: [require('tailwindcss-font-inter')],

 
}