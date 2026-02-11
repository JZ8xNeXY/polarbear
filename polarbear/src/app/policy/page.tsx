'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styles from '@/app/page.style'

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main id="main" className="page-root">
        <Box component="section" sx={styles.legalPageRoot}>
          <Container maxWidth="md">
            <Box sx={styles.legalCard}>
              <Typography variant="h1" sx={styles.legalTitle}>
                サービスポリシー
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    1. 目的
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    本サイトはホッキョクグマ保護に関する情報共有とつながりの創出を目的としています。営利を目的としたサービスではありません。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    2. 情報の扱い
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    お問い合わせ内容は、連絡目的の範囲で利用します。第三者への提供は行いません。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    3. 外部リンク
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    外部サイトの内容や安全性については責任を負いません。移動先の利用規約をご確認ください。
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h2" sx={styles.legalSectionTitle}>
                    4. ポリシーの変更
                  </Typography>
                  <Typography sx={styles.legalBody}>
                    内容は予告なく更新する場合があります。最新の内容は本ページをご確認ください。
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
