'use client'

import {
  ArticleOutlined,
  ArrowOutward,
  AutoStories,
  BarChart,
  VolunteerActivism,
} from '@mui/icons-material'
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import styles from '@/app/page.style'
import { getLocaleFromPathname, type Locale, withLocale } from '@/lib/locale'

type HubCard = {
  title: string
  body: string
  href: string
}

type HubText = {
  title: string
  cards: HubCard[]
  contactCta: string
}

const hubText: Record<Locale, HubText> = {
  ja: {
    title: '目的別に見る',
    cards: [
      {
        title: '基本を知る',
        body: 'ホッキョクグマの暮らしと海氷の関係を、やさしくまとめています。',
        href: '/learn',
      },
      {
        title: 'データを見る',
        body: '個体数や海氷の変化を、数字と地図で落ち着いて確認できます。',
        href: '/data',
      },
      {
        title: 'できること',
        body: '日常の中で続けやすい行動のヒントを紹介しています。',
        href: '/support',
      },
      {
        title: '読み物（準備中）',
        body: '現在準備中です。公開までしばらくお待ちください。',
        href: '/articles',
      },
    ],
    contactCta: '気軽に問い合わせる',
  },
  en: {
    title: 'Explore by Topic',
    cards: [
      {
        title: 'Learn Basics',
        body: 'A simple guide to polar bear life and sea-ice dependence.',
        href: '/learn',
      },
      {
        title: 'View Data',
        body: 'See trends in population and sea ice with maps and numbers.',
        href: '/data',
      },
      {
        title: 'Take Action',
        body: 'Practical actions you can continue at your own pace.',
        href: '/support',
      },
      {
        title: 'Reading',
        body: 'Plain-language explainers based on trusted sources such as PBI.',
        href: '/articles',
      },
    ],
    contactCta: 'Send Questions or Feedback',
  },
  zh: {
    title: '分区阅读，更容易看懂',
    cards: [
      {
        title: '了解基础',
        body: '用易懂方式介绍北极熊生活与海冰关系。',
        href: '/learn',
      },
      {
        title: '查看数据',
        body: '通过数字和地图了解种群与海冰变化。',
        href: '/data',
      },
      {
        title: '行动建议',
        body: '提供可持续、可执行的小行动方案。',
        href: '/support',
      },
      {
        title: '阅读',
        body: '基于 PBI 等来源，做面向大众的易读解读。',
        href: '/articles',
      },
    ],
    contactCta: '发送问题或反馈',
  },
}

const cardIcons = [<AutoStories key="learn" />, <BarChart key="data" />, <VolunteerActivism key="support" />, <ArticleOutlined key="articles" />]

export default function HomeHubSection() {
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)
  const text = hubText[locale]

  return (
    <Box component="section" sx={styles.homeHubSection}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={styles.homeHubHeader}>
          <Typography variant="h2" sx={styles.homeHubTitle}>
            {text.title}
          </Typography>
        </Stack>

        <Box sx={styles.homeHubGrid}>
          {text.cards.map((card, index) => (
            <Card key={card.href} sx={styles.homeHubCard}>
              <CardContent sx={styles.homeHubCardContent}>
                <Stack spacing={2}>
                  <Box sx={styles.homeHubIconBox}>{cardIcons[index]}</Box>
                  <Typography variant="h3" sx={styles.homeHubCardTitle}>
                    {card.title}
                  </Typography>
                  <Typography sx={styles.homeHubCardBody}>
                    {card.body}
                  </Typography>
                  <Button
                    href={withLocale(card.href, locale)}
                    variant="outlined"
                    endIcon={<ArrowOutward />}
                    sx={styles.homeHubButton}
                  >
                    {card.title}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Stack sx={styles.homeHubContactCta}>
          <Button href={withLocale('/contact', locale)} variant="contained" sx={styles.homeHubContactButton}>
            {text.contactCta}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
