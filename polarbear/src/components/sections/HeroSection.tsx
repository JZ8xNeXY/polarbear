'use client'

import Image from 'next/image'
import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles, { imageFilterStyle } from '@/app/page.style'
import { getLocaleFromPathname, type Locale, withLocale } from '@/lib/locale'

type HeroText = {
  chip: string
  titleLine1: string
  titleLine2: string
  lead: string
  primaryCta: string
  secondaryCta: string
}

const heroText: Record<Locale, HeroText> = {
  ja: {
    chip: 'はじめての方へ',
    titleLine1: 'ホッキョクグマの今を知る',
    titleLine2: '小さな一歩につなげる',
    lead: '海氷は、ホッキョクグマにとって大切な足場です。氷の季節が短くなると、狩りや子育てへの負担が大きくなると報告されています。',
    primaryCta: '北極の現状を見る',
    secondaryCta: '私たちにできることを見る',
  },
  en: {
    chip: 'For New Visitors',
    titleLine1: 'Understand Polar Bears Today',
    titleLine2: 'Start with One Simple Action',
    lead: 'Sea ice is essential hunting ground for polar bears. When ice seasons get shorter, hunting and parenting become harder.',
    primaryCta: 'See Arctic Changes',
    secondaryCta: 'Explore Actions',
  },
  zh: {
    chip: '给初次访问者',
    titleLine1: '先了解北极熊的现状',
    titleLine2: '再从一个行动开始',
    lead: '海冰是北极熊捕猎的重要平台。当结冰季缩短时，捕猎和育幼都会更困难。',
    primaryCta: '查看北极变化',
    secondaryCta: '查看行动建议',
  },
}

export default function HeroSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = heroText[locale]
  const learnPath = withLocale('/learn', locale)
  const supportPath = withLocale('/support', locale)

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
          <Chip label={text.chip} sx={styles.heroChip} />
          <Typography variant="h1" sx={styles.heroTitle}>
            {text.titleLine1}
            <br />
            {text.titleLine2}
          </Typography>
          <Typography sx={styles.heroLead}>
            {text.lead}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={styles.heroButtons}>
            <Button
              href={learnPath}
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowDown />}
              sx={styles.heroPrimaryButton}
              fullWidth
            >
              {text.primaryCta}
            </Button>
            <Button
              href={supportPath}
              variant="outlined"
              size="large"
              sx={styles.heroSecondaryButton}
              fullWidth
            >
              {text.secondaryCta}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
