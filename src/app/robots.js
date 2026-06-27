export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://aurabix.com/sitemap.xml",
    host: "https://aurabix.com",
  }
}
