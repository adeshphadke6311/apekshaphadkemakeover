import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",

      tablet: "860px",

      laptop: "1100px",

      lg: "1280px",
      xl: "1440px",
      "2xl": "1536px",
    },

    extend: {},
  },

  plugins: [],
};

export default config;