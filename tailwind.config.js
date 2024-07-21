/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand": {
          "bg": "#1b1b1b",
          "bg-alt": "#131314",
          "secondary": "#37393b",
          "text": "#dae2e5",
          "text-alt": "#aeb0b0",
          "hover": "#2b2b2b",
          "primary": "#a8c7fa",
          "active": "#004a77",
        }
      }
    },
  },
  plugins: [],
}

