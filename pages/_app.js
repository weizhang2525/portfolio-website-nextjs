import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
