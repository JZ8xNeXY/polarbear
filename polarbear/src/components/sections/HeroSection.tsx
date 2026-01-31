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
          <Chip label="ホッキョクグマ保護のきほん" sx={styles.heroChip} />
          <Typography variant="h1" sx={styles.heroTitle}>
            ホッキョクグマを守るために
            <br />
            いま、できることを知ろう
          </Typography>
          <Typography sx={styles.heroLead}>
            海氷は、ホッキョクグマの「狩りの足場」。
            氷の季節が短くなるほど、くらしは厳しくなります。
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
              いまの状況を知る
            </Button>
            <Button
              href="#action"
              variant="outlined"
              size="large"
              sx={styles.heroSecondaryButton}
              fullWidth
            >
              できることを見てみる
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
