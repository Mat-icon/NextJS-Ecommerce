/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        200: "150vh",
        150: "90vh",
        500: '300vh',
      },
      width: {
        "12/13": "97%",
      },
    },
  },
  plugins: [],
};
