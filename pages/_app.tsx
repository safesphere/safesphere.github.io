import { AppProps } from "next/app";
import Head from "next/head";

import "./global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SafeSphere</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
