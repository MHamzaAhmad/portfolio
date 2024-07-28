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
        "code-back": "var(--code-background)",
        "foreground-color": "var(--foreground-color)",
        "light-grey": "var(--light-grey)",
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
    animation: {
      meteor: "meteor 5s linear infinite",
      pulse: "pulse 2s ease-out infinite",
      grid: "grid 15s linear infinite",
    },
    keyframes: {
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      pulse: {
        "0%, 100%": { boxShadow: "0 0 0 0 var(--light-accent-color)" },
        "50%": { boxShadow: "0 0 0 8px var(--light-accent-color)" },
      },
      grid: {
        "0%": { transform: "translateY(-50%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
};
export default config;
