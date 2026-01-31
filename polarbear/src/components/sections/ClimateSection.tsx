'use client'

import {
  AcUnit,
  Brightness7,
  Loop,
  TrendingUp,
  Waves,
  WbSunny,
} from '@mui/icons-material'
import Image from 'next/image'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import styles from '@/app/page.style'
import AlbedoIllustration from './AlbedoIllustration'

const mechanismSteps = [
  {
    icon: <WbSunny sx={styles.climateStepIconSun} />,
    iconBg: styles.climateStepIconBgSun,
    step: '01',
    title: '温室効果ガスの増加',
    body: 'CO₂やメタンが増えると、地球から宇宙へ逃げる熱がこもりやすくなります。結果として、地球全体が少しずつ暖まります。',
  },
  {
    icon: <TrendingUp sx={styles.climateStepIconWarm} />,
    iconBg: styles.climateStepIconBgWarm,
    step: '02',
    title: '北極は暖まりやすい',
    body: '北極は地球平均より2〜4倍の速さで暖まっています。これを「北極増幅」と呼び、海氷の減少が拍車をかけます。',
  },
  {
    icon: <Loop sx={styles.climateStepIconBlue} />,
    iconBg: styles.climateStepIconBgBlue,
    step: '03',
    title: '氷が減るほど暖まりやすい',
    body: '白い氷は太陽の光をはね返しますが、暗い海は熱を吸収します。氷が減る→海が暖まる→さらに氷が減る、という流れ（氷-アルベド・フィードバック）が起きます。',
  },
]

const resultCards = [
  {
    icon: <AcUnit />,
    value: '約40%',
    label: '1979年に比べて夏の海氷面積が減少',
  },
  {
    icon: <Waves />,
    value: '+1か月以上',
    label: '海氷のない期間が長くなる',
  },
  {
    icon: <Brightness7 />,
    value: '2〜4倍',
    label: '地球平均より速いペースで暖まる',
  },
]

export default function ClimateSection() {
  return (
    <Box component="section" id="climate" sx={styles.climateSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.climateIntro}>
          <Typography variant="h2" sx={styles.climateTitle}>
            なぜ北極の氷は減るのか
          </Typography>
          <Typography sx={styles.climateLead}>
            地球温暖化の仕組みと、北極で影響が大きくなりやすい理由をやさしく紹介します。
          </Typography>
        </Stack>

        <Box sx={styles.climateMechanismGrid}>
          {mechanismSteps.map((item) => (
            <Card key={item.step} sx={styles.climateMechanismCard}>
              <CardContent sx={styles.climateMechanismCardContent}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={item.iconBg}>{item.icon}</Box>
                    <Typography sx={styles.climateStepNumber}>{item.step}</Typography>
                  </Stack>
                  <Typography variant="h3" sx={styles.climateMechanismTitle}>
                    {item.title}
                  </Typography>
                  <Typography sx={styles.climateMechanismBody}>{item.body}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={styles.climateResultSection}>
          <Typography variant="h3" sx={styles.climateResultTitle}>
            北極で起きていること
          </Typography>
          <Box sx={styles.climateResultGrid}>
            {resultCards.map((card) => (
              <Box key={card.label} sx={styles.climateResultCard}>
                <Box sx={styles.climateResultIconBox}>{card.icon}</Box>
                <Typography variant="h4" sx={styles.climateResultValue}>
                  {card.value}
                </Typography>
                <Typography sx={styles.climateResultLabel}>{card.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={styles.climateFeedbackDiagram}>
          <Typography sx={styles.climateFeedbackTitle}>氷が減るほど暖まりやすくなる仕組み</Typography>
          <Box sx={styles.climateFeedbackImageContainer}>
            <Image
              src="/images/feedback.png"
              alt="氷が減るほど暖まりやすくなるしくみ"
              fill
              sizes="(min-width:  600px) 600px, 100vw"
              style={{ objectFit: 'contain' }}
            />
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
