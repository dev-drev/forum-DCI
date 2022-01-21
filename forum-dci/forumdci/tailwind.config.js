module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: "rgba(119, 0, 187, 0.9)",
        secondary: "#98DFE8",
        tertiary: "#CCCCCC",
        yellow: "#DDFF95",
        coral: "#DF6B6B",
        green: "#4AA448",
        blue: "#486DA4",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
