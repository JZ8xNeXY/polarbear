'use client'

import { AcUnit, Pool, Public, Restaurant, Straighten, Timeline } from '@mui/icons-material'
import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale } from '@/lib/locale'

const aboutIcons = [
  <Box key="icon-0" sx={styles.aboutIconChip}>
    <AcUnit sx={styles.aboutIcon} />
  </Box>,
  <Box key="icon-1" sx={styles.aboutIconChip}>
    <Restaurant sx={styles.aboutIcon} />
  </Box>,
  <Box key="icon-2" sx={styles.aboutIconChip}>
    <Public sx={styles.aboutIcon} />
  </Box>,
  <Box key="icon-3" sx={styles.aboutIconChip}>
    <Straighten sx={styles.aboutIcon} />
  </Box>,
  <Box key="icon-4" sx={styles.aboutIconChip}>
    <Pool sx={styles.aboutIcon} />
  </Box>,
  <Box key="icon-5" sx={styles.aboutIconChip}>
    <Timeline sx={styles.aboutIcon} />
  </Box>,
]

type AboutText = {
  title: string
  lead: string
  items: Array<{ title: string; body: string }>
}

const aboutText: Record<Locale, AboutText> = {
  ja: {
    title: 'まずは、ホッキョクグマを知ろう',
    lead: 'むずかしい前提は不要です。暮らしの基本を、短くわかりやすくまとめました。',
    items: [
      {
        title: 'どこにいる？',
        body: 'カナダ、グリーンランド、ノルウェー、ロシア、アラスカ周辺で暮らしています。地域ごとに状況が違うため、個体群ごとに見守られています。',
      },
      {
        title: 'どうやって食べる？',
        body: '主食はアザラシ。海氷の上で、静かに狩りのチャンスを待ちます。',
      },
      {
        title: '子育ては？',
        body: '母グマは雪の巣穴で出産し、子グマは数年かけて生きる力を学びます。',
      },
      {
        title: '体の特徴は？',
        body: '大きな体と広い足で、雪の上も海の中も移動できます。白く見える毛は実は透明です。',
      },
      {
        title: '泳ぎは得意？',
        body: '長距離を泳げるほど泳ぎは得意です。ただし、泳ぎ続けるほど体力を消耗するため海氷は欠かせません。',
      },
      {
        title: '寿命は？',
        body: '野生では20〜25年ほど。子グマは2年以上、母グマといっしょに過ごします。',
      },
    ],
  },
  en: {
    title: 'Start with the Basics',
    lead: 'No expertise needed. Here is a short and clear guide to polar bear life.',
    items: [
      {
        title: 'Where do they live?',
        body: 'They live around Canada, Greenland, Norway, Russia, and Alaska. Populations are monitored by region.',
      },
      {
        title: 'What do they eat?',
        body: 'Their main prey is seals. They wait quietly on sea ice for hunting chances.',
      },
      {
        title: 'How do they raise cubs?',
        body: 'Mothers give birth in snow dens, and cubs learn survival skills over several years.',
      },
      {
        title: 'What are their traits?',
        body: 'Their large bodies and wide paws help them move on snow and in water. Their fur looks white but is actually transparent.',
      },
      {
        title: 'Are they good swimmers?',
        body: 'Yes. They can swim long distances, but long swims consume energy, so sea ice still matters.',
      },
      {
        title: 'How long do they live?',
        body: 'In the wild, they often live 20 to 25 years. Cubs usually stay with their mother for more than two years.',
      },
    ],
  },
  zh: {
    title: '先了解北极熊的基本生活',
    lead: '不需要专业背景。我们把重点整理成了简短好懂的内容。',
    items: [
      {
        title: '它们生活在哪里？',
        body: '主要分布在加拿大、格陵兰、挪威、俄罗斯和阿拉斯加周边，不同地区的群体状况并不相同。',
      },
      {
        title: '它们吃什么？',
        body: '主要食物是海豹。它们会在海冰上安静等待捕猎机会。',
      },
      {
        title: '怎样育幼？',
        body: '母熊会在雪洞中产仔，幼崽会在数年里学习生存能力。',
      },
      {
        title: '身体有什么特点？',
        body: '它们体型大、脚掌宽，适合在雪地和海中移动。看起来白色的毛其实是透明的。',
      },
      {
        title: '它们擅长游泳吗？',
        body: '很擅长，也能长距离游泳。但长时间游泳会消耗体力，所以海冰仍然关键。',
      },
      {
        title: '寿命多长？',
        body: '野外通常可活20到25年。幼崽通常会和母熊一起生活两年以上。',
      },
    ],
  },
}

export default function AboutSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = aboutText[locale]

  return (
    <Box component="section" id="about" sx={styles.aboutSection}>
      <Container maxWidth="lg">
        <Stack spacing={3} sx={styles.aboutIntro}>
          <Typography variant="h2" sx={styles.aboutTitle}>
            {text.title}
          </Typography>
          <Typography sx={styles.aboutLead}>
            {text.lead}
          </Typography>
        </Stack>
        <Box sx={styles.aboutGrid}>
          {text.items.map((item, index) => (
            <Card key={item.title} sx={styles.aboutCard}>
              <CardContent>
                <Stack spacing={2}>
                  {aboutIcons[index]}
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
