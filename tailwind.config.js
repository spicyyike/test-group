// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["tradewinds", "sans-serif"], // 'custom' is the utility name, 'MyCustomFont' is the font-family name from @font-face
        // You can add other fallback fonts after your custom font
      },
    },
  },
  plugins: [],
};
