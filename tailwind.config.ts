import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "border-color": "var(--border-color)",
        "accent-color": "var(--accent-color)",
        "sec-text-color": "var(--secondary-text-color)",
        "purple-text": "#4D5BCE",
        "background-color": "var(--background-color)",
      },
      screens: {
        smallest: "320px",
        mobile: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      flexGrow: {
        2: "2",
      },
    },
    fontSize: {
      one: "1rem",
      "25": "1.25rem",
      two: "2rem",
      heading: "3.875rem",
    },
  },
  plugins: [],
};
export default config;
