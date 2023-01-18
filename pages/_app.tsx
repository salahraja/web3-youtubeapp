import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  <>
    <Head>
      <title>My page title</title>
    </Head>
    <Component {...pageProps} />
  </>;
  return <Component {...pageProps} />;
}
