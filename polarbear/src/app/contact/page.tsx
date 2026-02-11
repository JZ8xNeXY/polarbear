'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type ContactText = {
  title: string
  lead: string
  iframeTitle: string
}

const contactText: Record<Locale, ContactText> = {
  ja: {
    title: 'お問い合わせ',
    lead: 'ご質問やご感想をお待ちしています。お気軽にご連絡ください。',
    iframeTitle: 'お問い合わせフォーム',
  },
  en: {
    title: 'Contact',
    lead: 'Questions and collaboration messages are welcome. Feel free to reach out.',
    iframeTitle: 'Contact form',
  },
  zh: {
    title: '联系我们',
    lead: '欢迎提问与交流。请随时留言联系我们。',
    iframeTitle: '联系表单',
  },
}

export default function ContactPage() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = contactText[locale]

  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.contactPageRoot}>
          <Container maxWidth="md">
            <Stack spacing={2} sx={styles.contactHeader}>
              <Typography variant="h1" sx={styles.contactTitle}>
                {text.title}
              </Typography>
              <Typography sx={styles.contactLead}>
                {text.lead}
              </Typography>
            </Stack>
            <Box sx={styles.contactFrameWrap}>
              <Box
                component="iframe"
                title={text.iframeTitle}
                src="https://docs.google.com/forms/d/e/1FAIpQLSfXeHlr1-fPovECaJ79q-LpeDX-7TIx_2hszrda3tQVHc5ODw/viewform?embedded=true"
                sx={styles.contactFrame}
              />
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
