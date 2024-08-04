"use client";
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://js.arcgis.com/4.24/"
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;