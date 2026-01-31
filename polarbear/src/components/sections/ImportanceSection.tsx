'use client'

import { AccessTime, FlashOn, Public, Thermostat } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

export default function ImportanceSection() {
  return (
    <Box component="section" sx={styles.importanceSection}>
      <Container maxWidth="lg">
        <Card sx={styles.importanceCard}>
          <CardContent sx={styles.importanceCardContent}>
            <Stack spacing={4} alignItems="center" textAlign="center">
              <FlashOn sx={styles.importanceIcon} />
              <Typography variant="h2" sx={styles.importanceTitle}>
                なぜ守りたいのか
              </Typography>
              <Box sx={styles.importanceGrid}>
                <Stack
                  spacing={1.5}
                  alignItems="center"
                  sx={{ maxWidth: 280, mx: 'auto', textAlign: 'center', width: '100%' }}
                >
                  <Public sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    北極の変化を
                    <br />
                    いち早く受ける存在
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    海氷の変化が、そのまま暮らしに直結します。
                  </Typography>
                </Stack>
                <Stack
                  spacing={1.5}
                  alignItems="center"
                  sx={{ maxWidth: 280, mx: 'auto', textAlign: 'center', width: '100%' }}
                >
                  <Thermostat sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    北極の変化は
                    <br />
                    地球全体にもつながる
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    氷が減ると反射が弱まり、さらに暖まりやすくなります。
                  </Typography>
                </Stack>
                <Stack
                  spacing={1.5}
                  alignItems="center"
                  sx={{ maxWidth: 280, mx: 'auto', textAlign: 'center', width: '100%' }}
                >
                  <AccessTime sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    やさしい行動は広がる
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    知る人が増えるほど、支える動きや決め方が少しずつ変わります。
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
