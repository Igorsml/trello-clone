/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#0D1117",
        columnBackgroundColor: "#161C22",
      },
    },
  },
  plugins: [],
};
