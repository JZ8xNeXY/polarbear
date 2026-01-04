'use client'

import Image from 'next/image'
import { TrendingDown, TrendingUp, Waves } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

const threatCards = [
  {
    icon: (
      <Box sx={styles.threatIconChipWarm}>
        <TrendingDown sx={styles.threatIconWarm} />
      </Box>
    ),
    title: '海氷の減少',
    body: '40年で海氷面積が大幅に減り、狩りの機会が縮小しています。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipCool}>
        <Waves sx={styles.threatIconCool} />
      </Box>
    ),
    title: '長距離の移動',
    body: '氷が離れることで、子グマには命がけの泳ぎが必要に。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipSun}>
        <TrendingUp sx={styles.threatIconSun} />
      </Box>
    ),
    title: '個体数の減少',
    body: '2050年までに30%の減少が予測されています。',
  },
]

export default function ThreatSection() {
  return (
    <Box component="section" id="threats" sx={styles.threatSection}>
      <Container maxWidth="lg">
        <Box sx={styles.threatTopRow}>
          <Card sx={styles.threatStatCard}>
            <CardContent sx={styles.threatStatContent}>
              <Stack spacing={3}>
                <TrendingDown sx={styles.threatStatIcon} />
                <Typography variant="h2" sx={styles.threatStatTitle}>
                  海氷は約40%減少
                </Typography>
                <Typography sx={styles.threatStatLead}>
                  夏季の海氷は過去40年で大幅に縮小。狩りの場が失われています。
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
              style={{
                objectFit: 'cover',
                filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
              }}
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
