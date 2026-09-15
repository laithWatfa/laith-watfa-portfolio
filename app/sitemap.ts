import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const staticPages = [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
    ];

    // Loops through object keys (slugs)
    const projectEntries = Object.keys(projects).map((slug) => ({
        url: `${siteConfig.url}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...projectEntries];
}
