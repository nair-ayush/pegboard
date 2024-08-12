"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ColorSchemeProvider } from "./contexts/color-scheme";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorSchemeProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ColorSchemeProvider>
    </ChakraProvider>
  );
}
