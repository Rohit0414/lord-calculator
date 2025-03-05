import '../styles/globals.css';
import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { NextUIProvider } from "@nextui-org/react";
import { I18nextProvider } from 'react-i18next';
import i18n from '/i18n';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return (
    <>
      <Head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}