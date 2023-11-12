"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { useEffect } from "react";
import { isSupported, logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    isSupported().then((isSupported) => {
      if (isSupported) {
        logEvent(analytics, "app_viewed");
      }
    });
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default Providers;
