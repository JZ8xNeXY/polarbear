'use client'

import Image from 'next/image'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import styles, { imageFilterStyle } from '@/app/page.style'

export default function CtaSection() {
  return (
    <Box component="section" sx={styles.ctaSection}>
      <Container maxWidth="md">
        <Box sx={styles.ctaBox}>
          <Image
            src="/images/dina-badamshina-QzAsrauG2rM-unsplash.jpg"
            alt="北極のコミュニティを象徴するイメージ"
            fill
            sizes="(min-width: 900px) 720px, 100vw"
            style={imageFilterStyle}
          />
          <Box sx={styles.ctaOverlay} />
          <Stack spacing={3} sx={styles.ctaStack}>
            <Typography variant="h2" sx={styles.ctaTitle}>
              いま、知ることから始めよう
            </Typography>
            <Typography sx={styles.ctaLead}>
              ホッキョクグマを守るために、今日からできることがあります。まずは今を知って、できそうな「ひとつ」から始めてみませんか。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" sx={styles.ctaPrimaryButton} fullWidth>
                いまを知る
              </Button>
              <Button variant="outlined" size="large" sx={styles.ctaSecondaryButton} fullWidth>
                できることを探す
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
