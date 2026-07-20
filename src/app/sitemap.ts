import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const routes = [
  "",
  "/parent-pick-up-tags",
  "/products",
  ...PRODUCTS.map((product) => `/products/${product.slug}`),
  "/community-marketing",
  "/about",
  "/resources",
  "/contact",
  "/for-schools",
  "/services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smilereachmarketing.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
