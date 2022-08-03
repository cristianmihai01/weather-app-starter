module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      backgroundImage: {
        gradientBg: "url('/src/assets/img/bg.png')",
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translate(3px, 0)',
          },
          '50%': {
            transform: 'translate(-3px, 0)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        shake: 'shake 150ms 2 linear',
      },
    },
  },
  plugins: [],
};
