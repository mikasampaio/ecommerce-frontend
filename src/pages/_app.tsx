import { UserProvider } from "@/contexts/userContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </UserProvider>
    </ChakraProvider>
  );
}
