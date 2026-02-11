import type { MetadataRoute } from 'next'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://polarbear-opal.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/zh/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/zh/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/zh/policy`,
      lastModified: new Date(),
    },
  ]
}
