/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "no-hover": { raw: "(hover: none)" },
      },
      backgroundImage: {
        "colorful-gradient":
          "linear-gradient(60deg, rgb(247, 149, 51), rgb(243, 112, 85), rgb(239, 78, 123), rgb(161, 102, 171), rgb(80, 115, 184), rgb(16, 152, 173), rgb(7, 179, 155), rgb(111, 186, 130))",
        "base-gradient": "linear-gradient(to right, #f59e0b, #ec4899)",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        "primary-dark": "#0d0c1d",
        "primary-base": "#161b33",
        "primary-light": "#474973",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
