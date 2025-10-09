/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#4B7DAA',
        'tech-teal': '#2DA3A3',
        'soft-olive': '#6B7B5C',
        'accent-olive': '#6B8545',
        'charcoal': '#2C3E50',
        'charcoal-alt': '#1a252f',
        'off-white': '#F8F9FA',
      },
      fontFamily: {
        'heading': ['"Montserrat Alternates"', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'cta': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
