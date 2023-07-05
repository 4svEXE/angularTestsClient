/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-1-l": "var(--bg-color-1-l)",
        "color-2-l": "var(--bg-color-2-l)",
        "color-3-l": "var(--bg-color-3-l)",
        "color-4-l": "var(--bg-color-4-l)",

        "color-1": "var(--bg-color-1)",
        "color-2": "var(--bg-color-2)",
        "color-3": "var(--bg-color-3)",
        "color-4": "var(--bg-color-4)",
      },
    },
  },
  plugins: [],
};
