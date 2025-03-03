import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tndc.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${baseUrl}/channels`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      priority: 0.4,
    }
  ];
}
