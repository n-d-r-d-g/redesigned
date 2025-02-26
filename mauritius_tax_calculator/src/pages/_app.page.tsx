import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import Layout from "@/components/Layout/Layout";
import nextI18NextConfig from "../../next-i18next.config.js";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <HeroUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
