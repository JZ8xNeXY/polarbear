'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.contactPageRoot}>
          <Container maxWidth="md">
            <Stack spacing={2} sx={styles.contactHeader}>
              <Typography variant="h1" sx={styles.contactTitle}>
                お問い合わせ
              </Typography>
              <Typography sx={styles.contactLead}>
                ホッキョクグマの保護や情報交換に関心のある方は、気軽にご連絡ください。
              </Typography>
            </Stack>
            <Box sx={styles.contactFrameWrap}>
              <Box
                component="iframe"
                title="お問い合わせフォーム"
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
