/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        'header': "6rem"
      },
      backgroundImage: {
        'light-furniture': "url('/mobile-image-hero-1.jpg')",
      }
    }
  },
  plugins: []
};

