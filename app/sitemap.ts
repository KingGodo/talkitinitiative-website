import type { MetadataRoute } from "next";

import { site } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programs",
    "/projects",
    "/impact",
    "/events",
    "/get-involved",
    "/partners",
    "/media",
    "/transparency",
    "/contact",
    "/legal/privacy",
    "/legal/safeguarding",
    "/legal/terms",
  ];

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/events" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/legal") ? 0.3 : 0.7,
  }));
}
