'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.legalPageRoot}>
          <Container maxWidth="md">
            <Box sx={styles.legalCard}>
              <Typography variant="h1" sx={styles.legalTitle}>
                利用規約
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    1. 適用
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    本規約は、本サイトの利用条件を定めるものです。本サイトを閲覧・利用することで、本規約に同意したものとみなします。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    2. 禁止事項
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    法令または公序良俗に反する行為、他者の権利を侵害する行為、サイト運営を妨げる行為は禁止します。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    3. 免責
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    本サイトの情報は正確性に努めていますが、内容の完全性や最新性を保証するものではありません。利用による損害について、当サイトは責任を負いません。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    4. 規約の変更
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    必要に応じて本規約を変更することがあります。変更後の規約は本ページに掲載した時点で効力を生じます。
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
