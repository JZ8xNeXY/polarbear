'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type TermsText = {
  title: string
  sections: Array<{ title: string; body: string }>
}

const termsText: Record<Locale, TermsText> = {
  ja: {
    title: '利用規約',
    sections: [
      {
        title: '1. 適用',
        body: '本規約は本サイトの利用条件です。閲覧・利用した時点で、同意したものとみなします。',
      },
      {
        title: '2. 禁止事項',
        body: '法令や公序良俗に反する行為、他者の権利侵害、運営を妨げる行為を禁止します。',
      },
      {
        title: '3. 免責',
        body: '情報の正確性には努めますが、完全性・最新性は保証しません。本サイト利用による損害については責任を負いません。',
      },
      {
        title: '4. 規約の変更',
        body: '本規約は予告なく変更することがあります。変更後の規約は本ページ掲載時点から有効です。',
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    sections: [
      {
        title: '1. Scope',
        body: 'These terms define the conditions for using this site. By using the site, you agree to these terms.',
      },
      {
        title: '2. Prohibited Conduct',
        body: 'Illegal actions, rights violations, and behavior that disrupts site operation are prohibited.',
      },
      {
        title: '3. Disclaimer',
        body: 'We strive for accuracy, but do not guarantee completeness or timeliness. We are not liable for damages resulting from use of this site.',
      },
      {
        title: '4. Changes to Terms',
        body: 'These terms may be updated without prior notice. Revised terms take effect when posted on this page.',
      },
    ],
  },
  zh: {
    title: '使用条款',
    sections: [
      {
        title: '1. 适用范围',
        body: '本条款规定本网站的使用条件。访问或使用本网站即视为同意本条款。',
      },
      {
        title: '2. 禁止事项',
        body: '禁止违法、侵害他人权利或妨碍网站运营的行为。',
      },
      {
        title: '3. 免责声明',
        body: '我们将尽力保证信息准确，但不保证完整性与时效性。因使用本网站产生的损失，本网站不承担责任。',
      },
      {
        title: '4. 条款变更',
        body: '本条款可能在不另行通知的情况下更新。更新内容在本页面发布后生效。',
      },
    ],
  },
}

export default function TermsPage() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = termsText[locale]

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
