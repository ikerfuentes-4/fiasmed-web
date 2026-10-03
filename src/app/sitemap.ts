import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { team } from "@/lib/team";
import { allServices } from "@/lib/services";
import { techniques } from "@/lib/techniques";

// Genera el sitemap com a fitxer estàtic durant el build (requerit per `output: export`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ["", "/serveis", "/tecniques"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const teamRoutes: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${SITE_URL}/equip/${member.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${SITE_URL}/serveis/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const techniqueRoutes: MetadataRoute.Sitemap = techniques.map((technique) => ({
    url: `${SITE_URL}/tecniques/${technique.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...teamRoutes, ...serviceRoutes, ...techniqueRoutes];
}
