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
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))",
      },
      colors: {
        "border-color": "var(--border-color)",
        "accent-color": "var(--accent-color)",
        "sec-text-color": "var(--secondary-text-color)",
        "purple-text": "var(--purple-accent)",
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
      boxShadow: {
        skill:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(59, 130, 246, 0.5)", // Blue glow based on accent color
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
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
      grid: "grid 25s linear infinite",
      cursor: "cursor 1s step-end infinite",
      typing: "typing 3.5s steps(40, end)",
      shimmer: "shimmer 2s linear infinite",
      slideInUp: "slideInUp 0.6s ease-out",
      fadeIn: "fadeIn 0.5s ease-in",
      bounce: "bounce 1.5s infinite",
      scaleIn: "scaleIn 0.5s ease-out",
      breathe: "breathe 4s ease-in-out infinite",
      "soft-bounce": "softBounce 3s ease-in-out infinite",
      float: "float 6s ease-in-out infinite",
      "gradient-x": "gradientX 15s ease infinite",
    },
    keyframes: {
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: "0.8" },
        "70%": { opacity: "0.8" },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: "0",
        },
      },
      pulse: {
        "0%, 100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.4)" },
        "50%": { boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.2)" },
      },
      grid: {
        "0%": { transform: "translateY(-50%)" },
        "100%": { transform: "translateY(0)" },
      },
      cursor: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
      typing: {
        "0%": { width: "0" },
        "100%": { width: "100%" },
      },
      shimmer: {
        "0%": { backgroundPosition: "-1000px 0" },
        "100%": { backgroundPosition: "1000px 0" },
      },
      slideInUp: {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      bounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
      },
      scaleIn: {
        "0%": { transform: "scale(0.9)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      breathe: {
        "0%, 100%": { opacity: "0.3", transform: "scale(0.95)" },
        "50%": { opacity: "0.7", transform: "scale(1.05)" },
      },
      softBounce: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
      gradientX: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },
  plugins: [],
};
export default config;
