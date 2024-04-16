import Head from "next/head";
import "../app/globals.css";
import RootLayout from "../app/layout";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
        <title>Bambou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
