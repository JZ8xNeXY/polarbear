'use client'

import Image from 'next/image'
import { TrendingDown, TrendingUp, Waves } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles, { imageFilterStyle } from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

const threatIcons = [
  <Box key="threat-icon-0" sx={styles.threatIconChipWarm}>
    <TrendingDown sx={styles.threatIconWarm} />
  </Box>,
  <Box key="threat-icon-1" sx={styles.threatIconChipCool}>
    <Waves sx={styles.threatIconCool} />
  </Box>,
  <Box key="threat-icon-2" sx={styles.threatIconChipSun}>
    <TrendingUp sx={styles.threatIconSun} />
  </Box>,
]

type ThreatText = {
  title: string
  lead: string
  statTitle: string
  statBody: string
  imageAlt: string
  cards: Array<{ title: string; body: string }>
}

const threatText: Record<Locale, ThreatText> = {
  ja: {
    title: '海氷が減ると、暮らしへの負担が大きくなります',
    lead: '特に重要なのは、狩りの足場になる海氷が使える期間です。短くなるほど、狩り・体重・子育てに影響が出やすくなります。',
    statTitle: '夏の海氷面積は約40%減少',
    statBody: '過去40年ほどで海氷が縮小し、狩りに使える場所が少なくなっています。',
    imageAlt: '氷が割れる北極のイメージ',
    cards: [
      {
        title: '狩りの機会が減る',
        body: '海氷が少ないと、アザラシへ近づく機会が減ります。',
      },
      {
        title: '移動の負担が増える',
        body: '泳ぐ距離がのび、体力の消耗や事故のリスクが高まります。',
      },
      {
        title: '食べにくい時期が長くなる',
        body: '体重が落ちやすく、子育ての余裕も小さくなります。',
      },
    ],
  },
  en: {
    title: 'Less Sea Ice Means Harder Survival',
    lead: 'What matters most is how long sea ice is available as a hunting platform. Shorter seasons affect hunting, body weight, and cub care.',
    statTitle: 'Summer Sea Ice Down About 40%',
    statBody: 'Over the last 40 years, sea ice has shrunk and hunting ground has decreased.',
    imageAlt: 'Arctic ice breaking scene',
    cards: [
      {
        title: 'Hunting Gets Harder',
        body: 'With less sea ice, chances to approach seals become limited.',
      },
      {
        title: 'Travel Becomes Tougher',
        body: 'Longer swims increase fatigue and accident risk.',
      },
      {
        title: 'Fasting Periods Get Longer',
        body: 'Weight loss becomes more likely and cub rearing gets harder.',
      },
    ],
  },
  zh: {
    title: '海冰减少，生存更艰难',
    lead: '关键不只在气温，而在可用于捕猎的海冰时间。时间越短，捕猎、体重和育幼压力越大。',
    statTitle: '夏季海冰约减少40%',
    statBody: '过去40年海冰明显缩小，捕猎平台持续减少。',
    imageAlt: '北极海冰破裂场景',
    cards: [
      {
        title: '捕猎更困难',
        body: '海冰变少后，接近海豹的机会会减少。',
      },
      {
        title: '移动更吃力',
        body: '游泳距离变长，体力消耗和意外风险上升。',
      },
      {
        title: '缺食期更长',
        body: '更容易掉体重，育幼空间也会变小。',
      },
    ],
  },
}

export default function ThreatSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = threatText[locale]

  return (
    <Box component="section" id="threats" sx={styles.threatSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem' } }}>
            {text.title}
          </Typography>
          <Typography sx={{ color: '#2f4257' }}>
            {text.lead}
          </Typography>
        </Stack>
        <Box sx={styles.threatTopRow}>
          <Card sx={styles.threatStatCard}>
            <CardContent sx={styles.threatStatContent}>
              <Stack spacing={3}>
                <TrendingDown sx={styles.threatStatIcon} />
                <Typography variant="h2" sx={styles.threatStatTitle}>
                  {text.statTitle}
                </Typography>
                <Typography sx={styles.threatStatLead}>
                  {text.statBody}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Box sx={styles.threatImageBox}>
            <Image
              src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
              alt={text.imageAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.threatImageOverlay} />
          </Box>
        </Box>
        <Box sx={styles.threatCardsGrid}>
          {text.cards.map((item, index) => (
            <Card key={item.title} sx={styles.threatCard}>
              <CardContent>
                <Stack spacing={2}>
                  {threatIcons[index]}
                  <Typography variant="h3" sx={styles.threatCardTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.threatCardBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
