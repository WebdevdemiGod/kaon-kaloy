/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#376D2E',
        secondary: '#678D61',
        success: '#ADFF9F',
        danger: '#FF6868',
        // TODO "warning": "#000",
        info: '#706883',
        safad: {
          primary: '#E11919',
          secondary: '#FFD4D4',
          accent: '#931212',
        },
        sas: {
          primary: '#6797F4',
          secondary: '#DEE9FF',
          accent: '#3465C3',
        },
        sbe: {
          primary: '#4CD24A',
          secondary: '#CDFFCC',
          accent: '#489547',
        },
        // TODO sed: {
        //   "primary": "#000",
        //   "secondary": "#000",
        //   "accent": "#000",
        // },
        shcp: {
          primary: '#EA3CD8',
          secondary: '#FFC6F9',
          accent: '#A33397',
        },
        slg: {
          primary: '#6797F4',
          secondary: '#DEE9FF',
          accent: '#OB2137',
        },
        soe: {
          primary: '#EBBE20',
          secondary: '#FFF4CF',
          accent: '#D2A915',
        },
      },
    },
  },
  plugins: [],
}
