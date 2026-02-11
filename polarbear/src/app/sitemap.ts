import type { MetadataRoute } from 'next'
import { getArticleSlugs } from '@/lib/articles'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://polarbear-opal.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const articleSlugs = getArticleSlugs()

  const articleRoutes = articleSlugs.flatMap((slug) => [
    { url: `${baseUrl}/articles/${slug}`, lastModified: now },
    { url: `${baseUrl}/en/articles/${slug}`, lastModified: now },
    { url: `${baseUrl}/zh/articles/${slug}`, lastModified: now },
  ])

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/data`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/learn`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/data`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/support`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/articles`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/en/policy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/learn`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/data`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/support`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/articles`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/zh/policy`,
      lastModified: now,
    },
    ...articleRoutes,
  ]
}
