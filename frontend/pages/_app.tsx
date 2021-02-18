import Head from "next/head";
import React from "react";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

import Layout from "../components/common/Layout";
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
       />
    </Head>
    <CacheProvider value={cache}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </CacheProvider>
  </>
);

export default MyApp;
