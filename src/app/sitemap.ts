import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { getAllPostSlugs } from "@/lib/wordpress";

const staticRoutes = [
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://smilereachmarketing.com";
  const postSlugs = await getAllPostSlugs();

  const routes = [
    ...staticRoutes,
    ...postSlugs.map((slug) => `/resources/${slug}`),
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
