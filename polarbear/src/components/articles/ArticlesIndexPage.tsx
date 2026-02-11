'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'
import type { Locale } from '@/lib/locale'

type ListCopy = {
  title: string
}

const listCopy: Record<Locale, ListCopy> = {
  ja: {
    title: '読みもの（準備中）',
  },
  en: {
    title: 'Reading (Coming Soon)',
  },
  zh: {
    title: '阅读（准备中）',
  },
}

export default function ArticlesIndexPage({ locale }: { locale: Locale }) {
  const copy = listCopy[locale]

  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.articlePageRoot}>
          <Container maxWidth="lg">
            <Stack spacing={2} sx={styles.articleHeader}>
              <Typography variant="h1" sx={styles.articleTitle}>
                {copy.title}
              </Typography>
            </Stack>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
