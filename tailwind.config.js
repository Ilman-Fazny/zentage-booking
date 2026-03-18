/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-blue': '#1e3a8a', // We can customize your specific "Blue" here later
      },
    },
  },
  plugins: [],
}