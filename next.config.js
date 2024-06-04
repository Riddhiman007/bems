/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  // experimental: { ppr: true },
  // experimental: {
  //   turbo: {
  //     resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  //   },
  //   turbotrace: { logAll: true, logDetail: true },

  // },
  // experimental: { optimizeCss: true, useLightningcss: true, useWasmBinary: true },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
