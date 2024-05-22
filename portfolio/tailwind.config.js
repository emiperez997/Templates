/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F7",
        dark: "#212336",
        gray: {
          700: "#2C2F42",
          800: "#2B2D41",
          900: "#23263A",
          950: "#212437",
        },
        red: {
          400: "#FF6B6B",
          500: "#FF4A57",
          600: "#F44455",
        },
      },
    },
  },
  plugins: [],
};
