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
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

const mechanismIcons = [
  {
    icon: <WbSunny sx={styles.climateStepIconSun} />,
    iconBg: styles.climateStepIconBgSun,
    step: '01',
  },
  {
    icon: <TrendingUp sx={styles.climateStepIconWarm} />,
    iconBg: styles.climateStepIconBgWarm,
    step: '02',
  },
  {
    icon: <Loop sx={styles.climateStepIconBlue} />,
    iconBg: styles.climateStepIconBgBlue,
    step: '03',
  },
]

const resultIcons = [<AcUnit key="result-0" />, <Waves key="result-1" />, <Brightness7 key="result-2" />]

type ClimateText = {
  title: string
  lead: string
  mechanismSteps: Array<{ title: string; body: string }>
  resultTitle: string
  results: Array<{ value: string; label: string }>
  feedbackTitle: string
  feedbackAlt: string
}

const climateText: Record<Locale, ClimateText> = {
  ja: {
    title: 'なぜ北極の海氷は減るの？',
    lead: '大まかな流れは、温暖化が進み、北極が先に暖まり、海氷がさらに減るというものです。',
    mechanismSteps: [
      {
        title: '温室効果ガスが増える',
        body: 'CO2やメタンが増えると、地球に熱が残りやすくなり、気温が上がりやすくなります。',
      },
      {
        title: '北極は先に暖まりやすい',
        body: '北極は地球平均より2〜4倍の速さで暖まる傾向があり、これを北極増幅と呼びます。',
      },
      {
        title: '氷が減ると、さらに暖まる',
        body: '白い氷は光を反射し、海は熱を吸収します。氷が減るほど、暖まりやすい流れが強まります。',
      },
    ],
    resultTitle: '数字で見る変化',
    results: [
      { value: '約40%', label: '1979年と比べた夏の海氷面積の減少' },
      { value: '+1か月以上', label: '海氷のない期間の長期化' },
      { value: '2〜4倍', label: '地球平均より速い上昇ペース' },
    ],
    feedbackTitle: '氷が減るほど暖まりやすいサイクル',
    feedbackAlt: '氷が減るほど暖まりやすくなるしくみ',
  },
  en: {
    title: 'Why Is Arctic Ice Shrinking?',
    lead: 'The pattern is simple: warming rises, the Arctic heats faster, and sea ice declines even more.',
    mechanismSteps: [
      {
        title: 'Greenhouse Gases Increase',
        body: 'As CO2 and methane rise, more heat is trapped near Earth, and temperatures go up.',
      },
      {
        title: 'The Arctic Warms Faster',
        body: 'The Arctic often warms 2 to 4 times faster than the global average. This is called Arctic amplification.',
      },
      {
        title: 'Less Ice, More Warming',
        body: 'White ice reflects sunlight, while dark ocean absorbs heat. Less ice means stronger warming feedback.',
      },
    ],
    resultTitle: 'Change in Numbers',
    results: [
      { value: 'About 40%', label: 'Summer sea ice area decline vs. 1979' },
      { value: '+1 month+', label: 'Longer ice-free period' },
      { value: '2-4x', label: 'Faster warming than the global average' },
    ],
    feedbackTitle: 'Feedback Loop: Less Ice, More Warming',
    feedbackAlt: 'How less ice leads to more warming',
  },
  zh: {
    title: '为什么北极海冰在减少？',
    lead: '逻辑很清楚：全球变暖加剧，北极升温更快，海冰进一步减少。',
    mechanismSteps: [
      {
        title: '温室气体增加',
        body: '当CO2和甲烷增加时，地球更容易留住热量，气温随之上升。',
      },
      {
        title: '北极升温更快',
        body: '北极升温速度常常是全球平均的2到4倍，这被称为北极放大效应。',
      },
      {
        title: '冰越少，升温越快',
        body: '白色冰面会反射阳光，海水会吸热。海冰减少会让升温反馈更强。',
      },
    ],
    resultTitle: '用数据看变化',
    results: [
      { value: '约40%', label: '与1979年相比夏季海冰面积下降' },
      { value: '超过1个月', label: '无冰期延长' },
      { value: '2到4倍', label: '升温速度快于全球平均' },
    ],
    feedbackTitle: '海冰减少带来的升温循环',
    feedbackAlt: '海冰减少如何加速升温',
  },
}

export default function ClimateSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = climateText[locale]

  return (
    <Box component="section" id="climate" sx={styles.climateSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.climateIntro}>
          <Typography variant="h2" sx={styles.climateTitle}>
            {text.title}
          </Typography>
          <Typography sx={styles.climateLead}>
            {text.lead}
          </Typography>
        </Stack>

        <Box sx={styles.climateMechanismGrid}>
          {text.mechanismSteps.map((item, index) => (
            <Card key={mechanismIcons[index].step} sx={styles.climateMechanismCard}>
              <CardContent sx={styles.climateMechanismCardContent}>
                <Stack spacing={2.5}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={mechanismIcons[index].iconBg}>{mechanismIcons[index].icon}</Box>
                    <Typography sx={styles.climateStepNumber}>{mechanismIcons[index].step}</Typography>
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
            {text.resultTitle}
          </Typography>
          <Box sx={styles.climateResultGrid}>
            {text.results.map((card, index) => (
              <Box key={card.label} sx={styles.climateResultCard}>
                <Box sx={styles.climateResultIconBox}>{resultIcons[index]}</Box>
                <Typography variant="h4" sx={styles.climateResultValue}>
                  {card.value}
                </Typography>
                <Typography sx={styles.climateResultLabel}>{card.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={styles.climateFeedbackDiagram}>
          <Typography sx={styles.climateFeedbackTitle}>{text.feedbackTitle}</Typography>
          <Box sx={styles.climateFeedbackImageContainer}>
            <Image
              src="/images/feedback.png"
              alt={text.feedbackAlt}
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
