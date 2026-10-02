import type { NextConfig } from "next";
import path from "node:path";

// Allowlist the WordPress host for next/image so featured images from
// /resources can be optimized. Falls back to no remote patterns if
// WORDPRESS_API_URL isn't set yet.
function wordpressRemotePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  if (!process.env.WORDPRESS_API_URL) return [];
  try {
    const { protocol, hostname } = new URL(process.env.WORDPRESS_API_URL);
    return [
      {
        protocol: protocol.replace(":", "") as "http" | "https",
        hostname,
      },
    ];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: wordpressRemotePatterns(),
  },
  async redirects() {
    return [
      {
        source: "/school-marketing-products",
        destination: "/products",
        permanent: true,
      },
      // /parent-pick-up-tags is now the single school-facing page for pick-up /
      // car rider tags; this stops the two pages competing for the same searches.
      {
        source: "/for-schools",
        destination: "/parent-pick-up-tags",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
