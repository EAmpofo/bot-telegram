/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#7700FF",
        "primary-shade-blue": "#3E87F7",
        "secondary-blue": "#0ED4FF",
        "primary-blue-black": "#010D1D",
        "secondary-blue-shade": "#555899",
        "primary-green": "#C0FF0E",
        "secondary-green":"#54FF38",
        "primary-white": "#FFFFFF",
        "card-primary": "#1B1C28",
        "shade-purple": "#555899",
        "dark-green": "#011C07",
        "custom-green": "#003902",
        "dark-red": "#1C0101",
        "custom-red": "#390000",
        "primary-red": "#FF3838",
        "primary-shade-black": "#19191A"
      }
    },
  },
  plugins: [],
}

