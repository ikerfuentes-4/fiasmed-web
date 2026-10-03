import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Genera robots.txt com a fitxer estàtic durant el build (requerit per `output: export`).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
