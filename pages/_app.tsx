import "../styles/globals.scss";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import fetcher from "../lib/fetcher";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
