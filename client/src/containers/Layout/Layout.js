import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utills/theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <nav />
        <main>{children}</main>
        <footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
