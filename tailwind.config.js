/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary100: '#3b68e7',
        primary200: '#6588f0',
        primary300: '#5e48ce',
        primary400: '#123655',
        primaryBtn: '#007aff',
        primaryFont: '#314450',
        FontDark: '#06163a',
        FontDark200: '#2b2e51',
        FontHover: '#d4d3d2',
      },
    },
  },
  plugins: [],
}
