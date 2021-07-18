import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.400",
        color: "white",
        padding: "0",
        margin: "0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
    },
  },
});

export default theme;
