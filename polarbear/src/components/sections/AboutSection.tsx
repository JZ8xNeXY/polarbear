'use client'

import { AcUnit, Public, Restaurant } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

const aboutItems = [
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <AcUnit sx={styles.aboutIcon} />
      </Box>
    ),
    title: '生息地は北極圏',
    body: '海氷の上で狩りをし、春から夏にかけて子育てします。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Restaurant sx={styles.aboutIcon} />
      </Box>
    ),
    title: '主食はアザラシ',
    body: '氷があることで獲物に近づける、生態の要となる環境です。',
  },
  {
    icon: (
      <Box sx={styles.aboutIconChip}>
        <Public sx={styles.aboutIcon} />
      </Box>
    ),
    title: '北極の指標種',
    body: 'ホッキョクグマの変化は、地球全体の変化のサインです。',
  },
]

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={styles.aboutSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.aboutIntro}>
          <Typography variant="h2" sx={styles.aboutTitle}>
            1分でわかるホッキョクグマ
          </Typography>
          <Typography sx={styles.aboutLead}>
            北極圏の海氷があるからこそ成り立つ生活。氷の減少は食料確保や子育てに直結します。
          </Typography>
        </Stack>
        <Box sx={styles.aboutGrid}>
          {aboutItems.map((item) => (
            <Card key={item.title} sx={styles.aboutCard}>
              <CardContent>
                <Stack spacing={2}>
                  {item.icon}
                  <Typography variant="h3" sx={styles.aboutCardTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.aboutCardBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
