const { i18n } = require("./next-i18next.config");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  experimental: {
    // this includes files from the monorepo base one directory up
    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: path.join(__dirname, "../"),
  },
};

module.exports = nextConfig;
