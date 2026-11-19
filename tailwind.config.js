/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./data/**/*.js"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        ember: "rgb(var(--ember) / <alpha-value>)",
        emberdark: "rgb(var(--emberdark) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
      },

      fontFamily: {
        serif: ["Fraunces Variable", "Georgia", "serif"],
        sans: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { page: "80rem", prose: "40rem" },
    },
  },
  plugins: [],
};
