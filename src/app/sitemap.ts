import type { MetadataRoute } from "next";

const routes = [
  "",
  "/parent-pick-up-tags",
  "/school-marketing-products",
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
