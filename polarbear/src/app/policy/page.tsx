'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type PolicyText = {
  title: string
  sections: Array<{ title: string; body: string }>
}

const policyText: Record<Locale, PolicyText> = {
  ja: {
    title: 'サービスポリシー',
    sections: [
      {
        title: '1. 目的',
        body: '本サイトは、ホッキョクグマ保護に関する情報共有とつながりづくりを目的としています。',
      },
      {
        title: '2. 情報の扱い',
        body: 'お問い合わせ内容は、返信や連絡のために利用します。法令に基づく場合を除き、第三者提供は行いません。',
      },
      {
        title: '3. 外部リンク',
        body: '外部サイトの内容や安全性については責任を負いません。移動先サイトの規約をご確認ください。',
      },
      {
        title: '4. ポリシーの変更',
        body: '本ポリシーは予告なく更新する場合があります。最新の内容は本ページをご確認ください。',
      },
    ],
  },
  en: {
    title: 'Service Policy',
    sections: [
      {
        title: '1. Purpose',
        body: 'This site aims to share information about polar bear conservation and connect people with similar interests.',
      },
      {
        title: '2. Data Handling',
        body: 'Messages sent through contact forms are used for replies and communication. We do not share them with third parties unless required by law.',
      },
      {
        title: '3. External Links',
        body: 'We are not responsible for the content or safety of external websites. Please review each site’s terms before use.',
      },
      {
        title: '4. Policy Updates',
        body: 'This policy may be updated without notice. The latest version is always shown on this page.',
      },
    ],
  },
  zh: {
    title: '服务政策',
    sections: [
      {
        title: '1. 目的',
        body: '本网站旨在分享北极熊保护信息，并连接有共同关注的人。',
      },
      {
        title: '2. 信息处理',
        body: '联系表单中的信息仅用于回复和沟通。除法律要求外，不会向第三方提供。',
      },
      {
        title: '3. 外部链接',
        body: '对于外部网站的内容与安全性，本网站不承担责任。请在使用前阅读对方条款。',
      },
      {
        title: '4. 政策更新',
        body: '本政策可能在不另行通知的情况下更新。最新版本以本页面为准。',
      },
    ],
  },
}

export default function PolicyPage() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = policyText[locale]

  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.legalPageRoot}>
          <Container maxWidth="md">
            <Box sx={styles.legalCard}>
              <Typography variant="h1" sx={styles.legalTitle}>
                {text.title}
              </Typography>
              <Stack spacing={3}>
                {text.sections.map((section) => (
                  <Box key={section.title}>
                    <Typography variant="h2" sx={styles.legalSectionTitle}>
                      {section.title}
                    </Typography>
                    <Typography sx={styles.legalBody}>
                      {section.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
