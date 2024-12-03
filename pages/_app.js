import '../styles/globals.css';
import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { NextUIProvider } from "@nextui-org/react";
import { I18nextProvider } from 'react-i18next';
import i18n from '/i18n'; 
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <NextUIProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextUIProvider>
    </I18nextProvider>
  );
}
