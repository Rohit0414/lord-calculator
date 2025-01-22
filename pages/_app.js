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
        {/* Essential Favicon Setup */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Theme Configuration */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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