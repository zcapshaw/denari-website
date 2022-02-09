import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blueGrey: {
      50: "#eceff1",
      100: "#cfd8dc",
      200: "#b0bec5",
      300: "#90a4ae",
      400: "#78909c",
      500: "#607d8b",
      600: "#546e7a",
      700: "#455a64",
      800: "#37474f",
      900: "#263238",
    },
  },
  fonts: {
    heading: `Manrope, ${base.fonts?.heading}`,
    body: `Manrope, ${base.fonts?.body}`,
  },
});

export default theme;
