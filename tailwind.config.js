/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        'nav': '1px'
      },
      fontFamily: {
        neu: "NeueHaasDisplayBlack",
      },


      fontSize: {
        'nav': '18px',
        'big5': '220px'
      },
      spacing: {
        'nav': '46px',
        'homeBaner': '622px',
        'avatar': '141px'
      },
      fontWeight: {
        'superBold': '1300'
      },
      animation: {
        'fish-intro': 'fish-intro-anim 2s ease-in 1',
        'whale-intro': 'whale-intro-anim 2s ease-in 1',
        'wave-intro': 'wave-intro-anim 2s ease-in 1',
        'bitcoin-intro': 'bitcoin-intro-anim 2s ease-in 1',
        'dots-anim': 'dots cubic-bezier(0, 0, 1, 1) 5s infinite',
        'white-bus1': 'white-bus1 cubic-bezier(0, 0, 1, 1) 3s infinite',
        'white-bus2': 'white-bus2 cubic-bezier(0, 0, 1, 1) 3s infinite',
        'lightning': 'lightning cubic-bezier(0, 0, 1, 1) 3s infinite',
        'slow-apear': 'slow-apear 1s ease-in 1',
      },
      keyframes: {
        'fish-intro-anim': {
          '0%': { transform: 'translateX(-700px)' },
          '100%': { transform: 'translateX(null)' }
        },
        'whale-intro-anim': {
          '0%': { transform: 'translateX(-1700px)' },
          '10%': { transform: 'translateX(-1700px)' },
          '40%': { transform: 'translateX(0px)' }
        },
        'dots': {
          '0%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(20px)' }
        },
        'bitcoin-intro-anim': {
          '0%': { transform: 'translateY(-700px)' },
          '50%': { transform: 'translateY(-700px)' },
          '80%': { transform: 'translateY(50px)' },
          '90%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        'white-bus1': {
          '0%': { transform: 'translateX(-700px) translateY(0.5rem)' },
          '50%': { transform: 'translateX(700px) translateY(0.5rem)' },
          '100%': { transform: 'translateX(700px) translateY(0.5rem)' },
        },
        'white-bus2': {
          '0%': { transform: 'translateX(-700px) translateY(0.5rem)' },
          '50%': { transform: 'translateX(-700px) translateY(0.5rem)' },
          '100%': { transform: 'translateX(700px) translateY(0.5rem)' },
        },
        'lightning': {
          '0%': { filter: 'brightness(1)' },
          '40%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(100)' },
          '60%': { filter: 'brightness(1)' },
          '100%': { filter: 'brightness(1)' },
        },
        'wave-intro-anim': {
          '0%': { transform: 'scaleX(0)' },
          '20%': { transform: 'scaleX(1)' }
        },
        'slow-apear': {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '20%': { opacity: 1, transform: 'translateY(0px)' }
        },

      }
    },
    colors: {
      primary: "#6a05c4",
      secondary: "#ffd10b",
      text: "#4d657b",
      accent: "#7800e4",
      colorid5658bf4e: "#1d202d",
      colorid4e749ecb: "#d1d7dd",
      colorid3b2eb70d: "#e1ecf2",
      colorid7e810469: "#f0f5f8",
      gradiant1: "#1d202d",
      gradiant2: "#6a05c4",
      lightBlue: '#2196F3',
      whitebord: '#FFFFFF'
    }
  },
  plugins: [],
}
