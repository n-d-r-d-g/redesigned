import { useEffect } from "react";
import { AppProps } from "next/app";
import { dir } from "i18next";
import { appWithTranslation, useTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = dir(i18n.language);
  }, [i18n]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
