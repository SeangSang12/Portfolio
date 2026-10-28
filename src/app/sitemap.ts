import type { MetadataRoute } from "next";
import { i18n } from "../i18n-config";

const URL = "https://www.seangsang.xyz";

const routes = [
  "",
  "/about",
  "/skill",
  "/project",
  "/news",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    i18n.locales.map((locale) => ({
      url: `${URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === ""
          ? "monthly"
          : route === "/news"
            ? "daily"
            : "weekly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}