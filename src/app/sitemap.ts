import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { stays } from "@/lib/stays";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/stays", "/gallery", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const stayPages = stays.map((stay) => ({
    url: `${site.url}/stays/${stay.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...stayPages];
}
