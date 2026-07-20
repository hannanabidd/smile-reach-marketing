import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/school-marketing-products",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
