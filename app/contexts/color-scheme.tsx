import React, { createContext, useState } from "react";

export type ColorScheme = "teal";

export type ContextData = {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
};

export const Context = createContext<ContextData | undefined>(undefined);

type ColorSchemeProviderProps = {
  children: React.ReactNode;
};

export const ColorSchemeProvider = (props: ColorSchemeProviderProps) => {
  const { children } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("teal");

  const initialValues: ContextData = {
    colorScheme,
    setColorScheme,
  };

  return <Context.Provider value={initialValues}>{children}</Context.Provider>;
};
