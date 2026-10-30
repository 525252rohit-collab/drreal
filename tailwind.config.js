/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0C0F14", navy: "#10275C", gold: "#B8913A", goldsoft: "#D9BC72", paper: "#F7F7F4", stone: "#E6E5E0", mute: "#6B6F76" },
      fontFamily: { display: ['"Newsreader"', "Georgia", "serif"], sans: ['"Manrope"', "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
