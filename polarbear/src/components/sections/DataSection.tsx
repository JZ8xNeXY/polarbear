'use client'

import Image from 'next/image'
import { Map } from '@mui/icons-material'
import { Box, Container, Stack, Typography } from '@mui/material'
import styles, { imageFilterStyle } from '@/app/page.style'

export default function DataSection() {
  return (
    <Box component="section" sx={styles.dataSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.dataHeader}>
          <Typography variant="h2" sx={styles.dataTitle}>
            データで見る北極のいま
          </Typography>
          <Typography sx={styles.dataLead}>
            まずは「全体のトレンド」と「地域差」を分けて見ていきます。数字の意味（何を測っているか）を揃えると、誤解が減ります。
          </Typography>
        </Stack>
        <Box sx={styles.dataGrid}>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg"
              alt="親子のホッキョクグマ"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  約26,000頭
                </Typography>
                <Typography sx={styles.dataStatLabel}>
                  個体数は地域で違います。増えている地域と減っている地域が混在します。
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/isaac-demeester-W-r1PbcRB2c-unsplash.jpg"
              alt="海氷の縮小イメージ"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  +1か月
                </Typography>
                <Typography sx={styles.dataStatLabel}>
                  海氷のない期間が伸びるほど不利になります。体重や繁殖への負荷が増えます。
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.dataMapSection}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Map sx={{ color: '#2f8fd4', fontSize: 32 }} />
            <Typography variant="h3" sx={styles.dataMapTitle}>
              生息域マップ
            </Typography>
          </Stack>
          <Typography sx={styles.dataMapLead} textAlign="center">
            ホッキョクグマは北極圏の5カ国（カナダ、ロシア、アメリカ、ノルウェー、グリーンランド/デンマーク）に分布し、19の個体群に分かれています。
          </Typography>
          <Box sx={styles.dataPopulationMapBox}>
            <Image
              src="/images/polar-bear-population-map.jpg"
              alt="ホッキョクグマの19個体群分布図"
              fill
              sizes="(min-width: 900px) 900px, 100vw"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography sx={styles.dataMapCaption}>
            ※ 地図出典: WWF Global Arctic Programme (2025)。色は個体群の保全状態を示しています。
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
