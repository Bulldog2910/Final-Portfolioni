/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "grid-item-move": {
          "0%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(5deg)" },
      }
    },
    animation: {
        "grid-item-move": "grid-item-move 1s ease-in-out infinite"
      }
  },
  plugins: [],
}
}
