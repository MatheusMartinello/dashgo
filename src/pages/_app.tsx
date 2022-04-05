import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SideBarDrawerProvider } from "../context/SideBarDrawerContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { makeServer } from "../services/mirage";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    makeServer();
  }
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
