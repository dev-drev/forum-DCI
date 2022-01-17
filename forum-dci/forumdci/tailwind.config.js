module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(119, 0, 187, 0.9)",
        secondary: "#98DFE8",
        tertiary: "#CCCCCC",
      },
    },
  },
  plugins: [require("daisyui")],
};
