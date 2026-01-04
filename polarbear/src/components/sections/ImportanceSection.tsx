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
                なぜ守るのか
              </Typography>
              <Box sx={styles.importanceGrid}>
                <Stack spacing={1} alignItems="center">
                  <Public sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    北極の変化を最前線で受ける存在
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    海氷の変化が、そのまま生存条件になります。
                  </Typography>
                </Stack>
                <Stack spacing={1} alignItems="center">
                  <Thermostat sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    北極は地球全体に関係する
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    氷が減ると反射が弱まり、さらに温まりやすくなります。
                  </Typography>
                </Stack>
                <Stack spacing={1} alignItems="center">
                  <AccessTime sx={styles.importanceItemIcon} />
                  <Typography variant="h3" sx={styles.importanceItemTitle}>
                    保護は連鎖する
                  </Typography>
                  <Typography sx={styles.importanceItemText}>
                    知る人が増えるほど、支援と意思決定が変わります。
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
