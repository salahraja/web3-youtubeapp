import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  <>
    <Head>
      <title></title>
    </Head>
    <Component {...pageProps} />
  </>;
  return <Component {...pageProps} />;
}
