import '../styles/globals.css';
import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  );
}
