import type { MetadataRoute } from "next";
import { caseStudies, caseStudyPath } from "@/data/case-studies";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}${caseStudyPath(study.slug)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
