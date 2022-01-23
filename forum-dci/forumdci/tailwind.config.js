module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(119, 0, 187, 0.9)",
        secondary: "#98DFE8",
        blueReact: "#3d4451",
        darkGray: "#1F2937",
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
