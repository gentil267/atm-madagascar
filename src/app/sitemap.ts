import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atm-madagascar.vercel.app";
  const locales = ["fr", "mg", "en"];
  const pages = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.9 },
    { path: "/actions", priority: 0.9 },
    { path: "/impact", priority: 0.8 },
    { path: "/partners", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/donate", priority: 0.9 },
    { path: "/actions/canteen", priority: 0.7 },
    { path: "/actions/kits", priority: 0.7 },
    { path: "/actions/elderly", priority: 0.7 },
    { path: "/actions/women", priority: 0.7 },
    { path: "/actions/environment", priority: 0.7 },
    { path: "/actions/school", priority: 0.8 },
  ];

  const urls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page.priority,
      });
    });
  });

  return urls;
}