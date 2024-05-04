const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  experimental: {
    // this includes files from the monorepo base one directory up
    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: path.join(__dirname, "../"),
  },
};

module.exports = nextConfig;
