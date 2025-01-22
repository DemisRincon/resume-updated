"use client";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./defaultTheme";
import GlobalStyles from "./GlobalStyles";
import StyledComponentsRegistry from "./registry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
