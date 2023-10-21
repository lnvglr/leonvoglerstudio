/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Gramatika', 'Heebo', 'system-ui', 'sans-serif'],
      body: ['Gramatika', 'Heebo', 'system-ui', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

