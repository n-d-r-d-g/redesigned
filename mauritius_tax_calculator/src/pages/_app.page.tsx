import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { HeroUIProvider } from "@heroui/react";
import Layout from "@/components/Layout/Layout";
import nextI18NextConfig from "../../next-i18next.config.js";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const useHref = (href: string) => router.basePath + href;

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <HeroUIProvider navigate={router.push} useHref={useHref}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
