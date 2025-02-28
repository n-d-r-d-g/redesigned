import { useEffect } from "react";
import { AppProps } from "next/app";
import { dir } from "i18next";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import nextI18NextConfig from "../../next-i18next.config";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = dir(i18n.language);
  }, [i18n]);

  return (
    <ThemeProvider attribute="class">
      <HeroUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
