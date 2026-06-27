export default function sitemap() {
  const baseUrl = "https://aurabix.com"
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
