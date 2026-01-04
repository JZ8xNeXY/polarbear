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
    title: '狩りが難しくなる',
    body: '海氷が少ないと、アザラシに近づきにくくなります。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipCool}>
        <Waves sx={styles.threatIconCool} />
      </Box>
    ),
    title: '移動の負担が増える',
    body: '泳ぐ距離が増え、事故のリスクも高まります。',
  },
  {
    icon: (
      <Box sx={styles.threatIconChipSun}>
        <TrendingUp sx={styles.threatIconSun} />
      </Box>
    ),
    title: '食べられない期間が伸びる',
    body: '体重が落ちやすくなり、繁殖の余力も削られます。',
  },
]

export default function ThreatSection() {
  return (
    <Box component="section" id="threats" sx={styles.threatSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.6rem', md: '3.6rem' } }}>
            足場の時間が減ると、暮らしが揺らぐ
          </Typography>
          <Typography sx={{ color: '#2f4257' }}>
            脅威の中心は「気温」そのものより、狩りの足場になる海氷が使える期間です。期間が短くなるほど、狩り・体重・繁殖の余力が削られていきます。
          </Typography>
        </Stack>
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
        <Typography sx={{ color: '#2f4257', fontSize: '0.95rem', mt: 3 }}>
          エネルギー収支（食べて得る力と、移動や生活で使う力の差）が崩れるほど、状況は厳しくなります。
        </Typography>
      </Container>
    </Box>
  )
}
