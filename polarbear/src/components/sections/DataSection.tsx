'use client'

import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'

export default function DataSection() {
  return (
    <Box component="section" sx={styles.dataSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.dataHeader}>
          <Typography variant="h2" sx={styles.dataTitle}>
            データが語る現実
          </Typography>
          <Typography sx={styles.dataLead}>
            数字で見ると、変化のスピードがより鮮明にわかります。
          </Typography>
        </Stack>
        <Box sx={styles.dataGrid}>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg"
              alt="親子のホッキョクグマ"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={{
                objectFit: 'cover',
                filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
              }}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  約26,000頭
                </Typography>
                <Typography sx={styles.dataStatLabel}>推定される現在の生息数</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/isaac-demeester-W-r1PbcRB2c-unsplash.jpg"
              alt="海氷の縮小イメージ"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={{
                objectFit: 'cover',
                filter: 'saturate(0.9) contrast(1.05) brightness(0.95) hue-rotate(-8deg)',
              }}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  +1か月
                </Typography>
                <Typography sx={styles.dataStatLabel}>
                  10年で延びた海氷のない期間
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
