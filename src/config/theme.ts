import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      back: "var(--background-color)",
      front: "var(--foreground-color)",
      accent: "var(--accent-color)",
      border: "var(--border-color)",
      white: "#fff",
      200: "#7cc4fa",
      300: "#47a3f3",
      400: "#2186eb",
      500: "#0967d2",
      600: "#0552b5",
      700: "#03449e",
      800: "#01337d",
      900: "#002159",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeights: {
    big: 450,
    normal: 400,
  },
  styles: {
    global: {
      body: {
        bg: "var(--background-color)",
        color: "var(--foreground-color)",
      },
    },
  },
});

export default theme;
