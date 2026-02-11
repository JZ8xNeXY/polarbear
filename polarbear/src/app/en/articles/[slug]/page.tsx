import ArticleDetailPage from '@/components/articles/ArticleDetailPage'
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export default function ArticlePageEn({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()
  return <ArticleDetailPage locale="en" article={article} />
}
