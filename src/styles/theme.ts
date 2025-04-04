import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#005eab",
    gray: {
      primary: "#D9D9D9",
      secondary: "#EBEBEB",
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
    },
    error: "#C53030",
  },
  breakpoints: {
    base: "0px",
    xs: "426px",
    sm: "769px",
    md: "1025px",
    lg: "1441px",
    xl: "2561px",
  },
});
