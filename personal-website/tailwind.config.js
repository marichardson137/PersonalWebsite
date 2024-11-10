/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "colorful-gradient":
          "linear-gradient(60deg, rgb(247, 149, 51), rgb(243, 112, 85), rgb(239, 78, 123), rgb(161, 102, 171), rgb(80, 115, 184), rgb(16, 152, 173), rgb(7, 179, 155), rgb(111, 186, 130))",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
