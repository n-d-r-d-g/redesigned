import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/Layout/Layout";
import nextI18NextConfig from "../../next-i18next.config.js";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
