module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Fixed file path
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        orange: {
          500: "#f27329",
          400: "#d48744",
        },
        black: {
          100: "#0D0D0D",
        },
        purple: {
          600: "#1d0259",
          700: "#14023e",
          800: "#0e012c",
        },
      },
    },
  },
  plugins: [],
};
