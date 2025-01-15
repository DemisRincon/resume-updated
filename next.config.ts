import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
};

export default nextConfig;
