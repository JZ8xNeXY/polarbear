'use client'

import Image from 'next/image'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

export default function HeroSection() {
  return (
    <Box component="section" sx={styles.heroSection}>
      <Box sx={styles.heroImageWrap}>
        <Image
          src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
          }}
          aria-hidden
        />
      </Box>
      <Box sx={styles.heroDarkOverlay} />
      <Box sx={styles.heroAuroraOverlay} />
      <Box className="ice-drift" />
      <Container maxWidth="lg" sx={styles.heroContainer}>
        <Stack spacing={{ xs: 3, md: 4 }} sx={styles.heroStack}>
          <Chip label="ホッキョクグマについて知る" sx={styles.heroChip} />
          <Typography variant="h1" sx={styles.heroTitle}>
            ホッキョクグマを守るために
            <br />
            いま知ることから始めよう
          </Typography>
          <Typography sx={styles.heroLead}>
            ホッキョクグマは北極の海氷に依存する生き物。氷が減ることで食料や
            子育ての場が失われています。
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={styles.heroButtons}>
            <Button
              href="#threats"
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowDown />}
              sx={styles.heroPrimaryButton}
              fullWidth
            >
              いま起きている変化
            </Button>
            <Button
              href="#action"
              variant="outlined"
              size="large"
              sx={styles.heroSecondaryButton}
              fullWidth
            >
              できることを見る
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
