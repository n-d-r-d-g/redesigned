import type { Metadata } from "next";
import { Head, Html, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "MUDOCS",
};

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="min-h-[100svh] w-full max-w-full bg-white p-0 text-black dark:bg-slate-900 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
