'use client'

import Image from 'next/image'
import { Map } from '@mui/icons-material'
import { Box, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles, { imageFilterStyle } from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

type DataText = {
  title: string
  lead: string
  statPopulationValue: string
  statIceValue: string
  statPopulationLabel: string
  statIceLabel: string
  mapTitle: string
  mapLead: string
  mapCaption: string
  populationAlt: string
  iceAlt: string
  mapAlt: string
}

const dataText: Record<Locale, DataText> = {
  ja: {
    title: 'データで見る北極',
    lead: '全体の傾向と地域差を分けると、変化がぐっと見えやすくなります。',
    statPopulationValue: '約26,000頭',
    statIceValue: '+1か月',
    statPopulationLabel: '個体数の傾向は地域ごとに異なります。',
    statIceLabel: '海氷のない期間が長いほど、体力や子育ての負担が増えます。',
    mapTitle: '生息域マップ',
    mapLead: 'ホッキョクグマは北極圏の5カ国に分布し、19の個体群に分かれて暮らしています。',
    mapCaption: '※ 地図出典: WWF Global Arctic Programme (2025)',
    populationAlt: '親子のホッキョクグマ',
    iceAlt: '海氷の縮小イメージ',
    mapAlt: 'ホッキョクグマの19個体群分布図',
  },
  en: {
    title: 'Arctic Data at a Glance',
    lead: 'Separating overall trends and regional differences makes the picture clearer.',
    statPopulationValue: 'About 26,000',
    statIceValue: '+1 month',
    statPopulationLabel: 'Population trends vary by region.',
    statIceLabel: 'Longer ice-free seasons increase stress on body condition and cub care.',
    mapTitle: 'Range Map',
    mapLead: 'Polar bears live across five Arctic nations and are grouped into 19 subpopulations.',
    mapCaption: 'Source: WWF Global Arctic Programme (2025)',
    populationAlt: 'Polar bear mother and cub',
    iceAlt: 'Shrinking sea ice image',
    mapAlt: 'Distribution map of 19 polar bear subpopulations',
  },
  zh: {
    title: '用数据看北极',
    lead: '把整体趋势和地区差异分开看，变化会更清楚。',
    statPopulationValue: '约26,000只',
    statIceValue: '增加1个月',
    statPopulationLabel: '不同地区的种群趋势并不相同。',
    statIceLabel: '无冰期越长，体力和育幼压力越大。',
    mapTitle: '分布地图',
    mapLead: '北极熊分布在北极圈五个国家，分为19个亚种群。',
    mapCaption: '数据来源: WWF Global Arctic Programme (2025)',
    populationAlt: '北极熊母子',
    iceAlt: '海冰缩小示意图',
    mapAlt: '北极熊19个亚种群分布图',
  },
}

export default function DataSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = dataText[locale]

  return (
    <Box component="section" sx={styles.dataSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.dataHeader}>
          <Typography variant="h2" sx={styles.dataTitle}>
            {text.title}
          </Typography>
          <Typography sx={styles.dataLead}>
            {text.lead}
          </Typography>
        </Stack>
        <Box sx={styles.dataGrid}>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg"
              alt={text.populationAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  {text.statPopulationValue}
                </Typography>
                <Typography sx={styles.dataStatLabel}>
                  {text.statPopulationLabel}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.dataImageBox}>
            <Image
              src="/images/isaac-demeester-W-r1PbcRB2c-unsplash.jpg"
              alt={text.iceAlt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              style={imageFilterStyle}
            />
            <Box sx={styles.dataImageOverlay}>
              <Box sx={styles.dataStatCard}>
                <Typography variant="h2" sx={styles.dataStatNumber}>
                  {text.statIceValue}
                </Typography>
                <Typography sx={styles.dataStatLabel}>
                  {text.statIceLabel}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.dataMapSection}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
            <Map sx={{ color: '#2f8fd4', fontSize: 32 }} />
            <Typography variant="h3" sx={styles.dataMapTitle}>
              {text.mapTitle}
            </Typography>
          </Stack>
          <Typography sx={styles.dataMapLead} textAlign="center">
            {text.mapLead}
          </Typography>
          <Box sx={styles.dataPopulationMapBox}>
            <Image
              src="/images/polar-bear-population-map.jpg"
              alt={text.mapAlt}
              fill
              sizes="(min-width: 900px) 900px, 100vw"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography sx={styles.dataMapCaption}>
            {text.mapCaption}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
