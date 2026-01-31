'use client'

import Image from 'next/image'
import { TrendingDown, TrendingUp, Waves } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles, { imageFilterStyle } from '@/app/page.style'

const threatCards = [
  {
    icon: (
      <Box sx={styles.threatIconChipWarm}>
        <TrendingDown sx={styles.threatIconWarm} />
      </Box>
    ),
    title: '狩りがしづらくなる',
    body: '海氷が少ないと、アザラシに近づきにくくなります。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipCool}>
        <Waves sx={styles.threatIconCool} />
      </Box>
    ),
    title: '移動が大変になる',
    body: '泳ぐ距離が増え、体力の消耗や事故のリスクが増えます。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipSun}>
        <TrendingUp sx={styles.threatIconSun} />
      </Box>
    ),
    title: '食べられない時期が長くなる',
    body: '体重が落ちやすくなり、子育ての余裕も減ってしまいます。',
  },
]

export default function ThreatSection() {
  return (
    <Box component="section" id="threats" sx={styles.threatSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem' } }}>
            足場の時間が減ると、暮らしがゆらぐ
          </Typography>
          <Typography sx={{ color: '#2f4257' }}>
            ポイントは「気温」そのものより、狩りの足場になる海氷が使える期間。短くなるほど、狩りや体重、子育てに余裕がなくなります。
          </Typography>
        </Stack>
        <Box sx={styles.threatTopRow}>
          <Card sx={styles.threatStatCard}>
            <CardContent sx={styles.threatStatContent}>
              <Stack spacing={3}>
                <TrendingDown sx={styles.threatStatIcon} />
                <Typography variant="h2" sx={styles.threatStatTitle}>
                  海氷は約40%減っています
                </Typography>
                <Typography sx={styles.threatStatLead}>
                  夏の海氷は過去40年で大きく縮小。狩りの場が減ってきています。
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Box sx={styles.threatImageBox}>
            <Image
              src="/images/hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg"
              alt="氷が割れる北極のイメージ"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.threatImageOverlay} />
          </Box>
        </Box>
        <Box sx={styles.threatCardsGrid}>
          {threatCards.map((item) => (
            <Card key={item.title} sx={styles.threatCard}>
              <CardContent>
                <Stack spacing={2}>
                  {item.icon}
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
