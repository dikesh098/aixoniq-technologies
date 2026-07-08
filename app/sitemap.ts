import type { MetadataRoute } from "next";

const BASE_URL = "https://aixoniqtechnologies.com";

const ROUTES = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/portfolio",
  "/industries",
  "/careers",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
