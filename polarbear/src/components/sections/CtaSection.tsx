'use client'

import Image from 'next/image'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

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
            style={{
              objectFit: 'cover',
              filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
            }}
          />
          <Box sx={styles.ctaOverlay} />
          <Stack spacing={3} sx={styles.ctaStack}>
            <Typography variant="h2" sx={styles.ctaTitle}>
              小さな行動が未来を変える
            </Typography>
            <Typography sx={styles.ctaLead}>
              一人ひとりの選択が、ホッキョクグマと北極の未来を守ります。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" sx={styles.ctaPrimaryButton} fullWidth>
                今すぐ始める
              </Button>
              <Button variant="outlined" size="large" sx={styles.ctaSecondaryButton} fullWidth>
                詳しく知る
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
