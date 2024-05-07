import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="min-h-[100svh] w-full max-w-full bg-white p-0 text-black dark:bg-neutral-950 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
