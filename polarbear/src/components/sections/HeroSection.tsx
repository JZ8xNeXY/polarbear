'use client'

import Image from 'next/image'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import styles, { imageFilterStyle } from '@/app/page.style'

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
          style={imageFilterStyle}
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
            いま、知ることから始めよう
          </Typography>
          <Typography sx={styles.heroLead}>
            海氷は、ホッキョクグマにとって「狩りの足場」です。
            その“氷の季節”が短くなるほど、生きる条件は厳しくなっていきます。
          </Typography>
          <Typography sx={styles.heroNote}>
            このサイトでは、海氷と個体群（地域ごとのグループ）のデータから、現状と行動を整理します。
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
              現状を知る
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
