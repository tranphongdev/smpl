/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#008C28',
          800: '#005418' 
        },
        gray: {
          100: "#ffffff",
          200: "#fafafa",
          300: "#f5f5f5",
          400: "#f0f0f0",
          500: "#d9d9d9",
          600: "#bfbfbf",
          700: "#8c8c8c",
          800: "#595959",
          900: "#434343",
          1000: "#262626",
          1000: "#262626",
          1100: "#1f1f1f",
          1200: "#141414",
          1300: "#000000",
        },
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      backgroundImage:{
        'particles': 'url("~/assets/images/particles.png")',
        'auth': 'url("~/assets/images/auth.png")',
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '8px',
        xl: '14px',
      }
    },
  },
  plugins: [],
}