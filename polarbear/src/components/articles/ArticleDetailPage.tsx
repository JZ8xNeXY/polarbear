'use client'

import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'
import type { Article } from '@/lib/articles'
import { type Locale, withLocale } from '@/lib/locale'

type DetailCopy = {
  backToList: string
  summaryHeading: string
  sourceHeading: string
  sourceButton: string
  actionHeading: string
}

const detailCopy: Record<Locale, DetailCopy> = {
  ja: {
    backToList: '読みもの一覧へ戻る',
    summaryHeading: 'ポイント（3つ）',
    sourceHeading: '出典',
    sourceButton: '元記事を読む',
    actionHeading: '今日できること',
  },
  en: {
    backToList: 'Back to Articles',
    summaryHeading: 'Key Takeaways',
    sourceHeading: 'Source',
    sourceButton: 'Open Original Article',
    actionHeading: 'One Action for Today',
  },
  zh: {
    backToList: '返回文章列表',
    summaryHeading: '核心结论（3点）',
    sourceHeading: '来源',
    sourceButton: '打开原文',
    actionHeading: '今天可以做的一件事',
  },
}

const dateLocaleMap: Record<Locale, string> = {
  ja: 'ja-JP',
  en: 'en-US',
  zh: 'zh-CN',
}

function formatSourceDate(locale: Locale, value: string): string {
  return new Intl.DateTimeFormat(dateLocaleMap[locale], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}

export default function ArticleDetailPage({
  locale,
  article,
}: {
  locale: Locale
  article: Article
}) {
  const copy = detailCopy[locale]
  const localized = article.locales[locale]
  const listHref = withLocale('/articles', locale)

  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.articlePageRoot}>
          <Container maxWidth="md">
            <Stack spacing={2.5} sx={styles.articleDetailTop}>
              <Button href={listHref} variant="text" sx={styles.articleBackButton}>
                {copy.backToList}
              </Button>
              <Typography variant="h1" sx={styles.articleDetailTitle}>
                {localized.title}
              </Typography>
              <Typography sx={styles.articleDetailExcerpt}>
                {localized.excerpt}
              </Typography>
            </Stack>

            <Card sx={styles.articleSummaryCard}>
              <CardContent>
                <Stack spacing={1.2}>
                  <Typography variant="h2" sx={styles.articleSectionTitle}>
                    {copy.summaryHeading}
                  </Typography>
                  <Box component="ul" sx={styles.articleSummaryList}>
                    {localized.summaryLines.map((line) => (
                      <Typography component="li" key={line} sx={styles.articleSectionBody}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Stack spacing={2.5} sx={styles.articleBodyStack}>
              {localized.sections.map((section) => (
                <Card key={section.heading} sx={styles.articleSectionCard}>
                  <CardContent>
                    <Stack spacing={1.4}>
                      <Typography variant="h2" sx={styles.articleSectionTitle}>
                        {section.heading}
                      </Typography>
                      {section.paragraphs.map((paragraph) => (
                        <Typography key={paragraph} sx={styles.articleSectionBody}>
                          {paragraph}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>

            <Card sx={styles.articleActionCard}>
              <CardContent>
                <Stack spacing={1.3}>
                  <Typography variant="h2" sx={styles.articleSectionTitle}>
                    {copy.actionHeading}
                  </Typography>
                  <Typography sx={styles.articleSectionBody}>
                    {localized.actionBody}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={styles.articleSourceCard}>
              <CardContent>
                <Stack spacing={1.2}>
                  <Typography variant="h2" sx={styles.articleSectionTitle}>
                    {copy.sourceHeading}
                  </Typography>
                  <Typography sx={styles.articleSourceMeta}>
                    {localized.source.publisher} | {formatSourceDate(locale, localized.source.publishedAt)}
                  </Typography>
                  <Typography sx={styles.articleSectionBody}>
                    {localized.source.title}
                  </Typography>
                  <Typography sx={styles.articleSourceNote}>
                    {localized.source.note}
                  </Typography>
                  <Button
                    href={localized.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={styles.articleSourceButton}
                  >
                    {copy.sourceButton}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
