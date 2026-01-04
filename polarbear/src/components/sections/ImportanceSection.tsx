'use client'

import { AccessTime, FlashOn, Public, Thermostat } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

export default function ImportanceSection() {
  return (
    <Box component="section" sx={styles.importanceSection}>
      <Container maxWidth="md">
        <Card sx={styles.importanceCard}>
          <CardContent sx={styles.importanceCardContent}>
            <Stack spacing={4} alignItems="center" textAlign="center">
              <FlashOn sx={styles.importanceIcon} />
              <Typography variant="h2" sx={styles.importanceTitle}>
                なぜ今、守る必要があるのか
              </Typography>
              <Box sx={styles.importanceGrid}>
                <Stack spacing={1} alignItems="center">
                  <Public sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    生態系の頂点
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    北極のバランスを保つ重要な存在です。
                  </Typography>
                </Stack>
                <Stack spacing={1} alignItems="center">
                  <Thermostat sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    気候変動の指標
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    変化のスピードを示す警告サインになります。
                  </Typography>
                </Stack>
                <Stack spacing={1} alignItems="center">
                  <AccessTime sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    今の10年が鍵
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    対策の成否を左右する重要な期間です。
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
