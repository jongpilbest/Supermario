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
      '5xl':'4.7rem',
      '3xl':'2rem',
      '2xl':'1.5rem'
    ,    fontWeight: {
      medium: '580',
    }
  }
  },
  plugins: [require('tailwindcss-font-inter')],

 
}